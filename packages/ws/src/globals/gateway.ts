import type { Buffer } from "node:buffer";
import { clearInterval, setInterval } from "node:timers";
import { URL } from "node:url";
import { GatewayOpcodes, WEBSOCKET_GATEWAY_URL } from "@lunajs/core";
import EventEmitter from "eventemitter3";
import { Inflate } from "minizlib";
import WebSocket from "ws";
import type { z } from "zod";
import { GatewayConnectQuery } from "../other/connection";
import type { GatewayIdentifyStructureInfer } from "../other/identity";
import { GatewayIdentifyStructure } from "../other/identity";
import type { GatewayPayloadInfer } from "../other/payload";
import type { GatewayReceiveEvents, GatewaySendEvents } from "./events";

export const GatewayOptions = GatewayConnectQuery.merge(GatewayIdentifyStructure.omit({
	compress: true,
	token: true,
}));

export type GatewayOptionsInfer = z.infer<typeof GatewayOptions>;

export class Gateway extends EventEmitter<GatewayReceiveEvents> {
	private ws: WebSocket | null = null;

	private heartbeatInterval: NodeJS.Timeout | null = null;

	private lastSeq: number | null = null;

	private sessionId: string | null = null;

	private inflate: Inflate | null = null;

	public constructor(public readonly token: string, public readonly options: GatewayOptionsInfer) {
		super();
	}

	public get url(): URL {
		const url = new URL(WEBSOCKET_GATEWAY_URL);
		url.searchParams.append("v", this.options.v.toString());
		url.searchParams.append("encoding", this.options.encoding);
		if (this.options.compress) {
			url.searchParams.append("compress", this.options.compress);
		}

		return url;
	}

	public connect(): void {
		if (this.ws) {
			this.ws.close();
		}

		if (this.options.compress) {
			this.inflate = new Inflate({
				level: 9,
				encoding: "utf8",
			});
		}

		this.emit("DEBUG", `[WS] Connecting to Gateway with URL: ${this.url.toString()}`);
		this.ws = new WebSocket(this.url.toString());
		this.ws.on("open", () => this.onOpen());
		this.ws.on("message", (data: WebSocket.Data) => this.onMessage(data));
		this.ws.on("close", (code, reason) => this.onClose(code, reason));
		this.ws.on("error", (error) => this.onError(error));
	}

	public send<K extends keyof GatewaySendEvents>(op: K, data: GatewaySendEvents[K]): void {
		if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
			this.emit("ERROR", new Error("WebSocket is not open"));
			return;
		}

		const payload: GatewayPayloadInfer = {
			op,
			d: data,
		};

		const encodedPayload = JSON.stringify(payload);

		this.emit("DEBUG", `[WS] Sending payload: ${encodedPayload}`);
		this.ws.send(encodedPayload);
	}

	private onOpen(): void {
		this.emit("DEBUG", "[WS] Connected to Gateway");
		this.emit("OPEN");
	}

	private onClose(code: number, reason: Buffer): void {
		this.emit("DEBUG", `[WS] Disconnected from Gateway with code: ${code}, reason: ${reason.toString()}`);
		this.emit("CLOSE", code, reason);
		this.cleanup();
	}

	private onError(error: Error): void {
		this.emit("ERROR", error);
	}

	private onMessage(data: WebSocket.Data): void {
		if (this.options.compress === "zlib-stream" && this.inflate) {
			this.inflate.write(data as Buffer, () => {
				const decompressed = this.inflate?.read();
				if (decompressed) {
					this.handleMessage(decompressed);
				}
			});
		} else {
			this.handleMessage(data as Buffer);
		}
	}

	private handleMessage(data: Buffer): void {
		let payload: GatewayPayloadInfer;
		try {
			payload = JSON.parse(data.toString());
		} catch {
			this.emit("ERROR", new Error("Failed to parse payload"));
			return;
		}

		this.emit("DEBUG", `[WS] Received payload: ${JSON.stringify(payload)}`);
		switch (payload.op) {
			case GatewayOpcodes.Hello: {
				this.startHeartbeat(payload.d.heartbeat_interval);
				const identify: GatewayIdentifyStructureInfer = {
					token: this.token,
					compress: this.options.compress === null,
					intents: this.options.intents,
					large_threshold: this.options.large_threshold,
					properties: this.options.properties,
					presence: this.options.presence,
					shard: this.options.shard,
				};
				this.send(GatewayOpcodes.Identify, identify);
				break;
			}

			case GatewayOpcodes.HeartbeatACK: {
				this.emit("DEBUG", "[WS] Received heartbeat ACK");
				break;
			}

			case GatewayOpcodes.Reconnect: {
				this.reconnect();
				break;
			}

			case GatewayOpcodes.InvalidSession: {
				this.reconnect();
				break;
			}

			case GatewayOpcodes.Dispatch: {
				if (payload.t === "READY") {
					this.sessionId = payload.d.session_id;
					this.lastSeq = payload.s ?? null;
				} else if (payload.s) {
					this.lastSeq = payload.s;
				}

				this.emit(payload.t as keyof GatewayReceiveEvents, payload.d);
				break;
			}

			default:
				break;
		}
	}

	private reconnect(): void {
		this.emit("DEBUG", "[WS] Reconnecting to Gateway...");
		this.cleanup();
		this.connect();
	}

	private startHeartbeat(interval: number): void {
		if (this.heartbeatInterval) {
			clearInterval(this.heartbeatInterval);
		}

		this.emit("DEBUG", `[WS] Starting heartbeat with interval: ${interval}ms`);
		this.heartbeatInterval = setInterval(() => {
			this.emit("DEBUG", "[WS] Sending heartbeat...");
			this.send(GatewayOpcodes.Heartbeat, this.lastSeq);
		}, interval);
	}

	private cleanup(): void {
		if (this.heartbeatInterval) {
			clearInterval(this.heartbeatInterval);
			this.heartbeatInterval = null;
		}

		if (this.ws) {
			this.ws.close();
			this.ws = null;
		}

		if (this.inflate) {
			this.inflate.close();
			this.inflate = null;
		}

		this.lastSeq = null;
		this.sessionId = null;
		this.emit("DEBUG", "[WS] Cleaned up Gateway connection...");
	}
}
