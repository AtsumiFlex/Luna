/**
 * TODO: Tout ce que j'ai à faire pour le gateway :
 * - Gérer les encoding : json, etf
 * - Gérer les compressions : zlib-stream, zstd-stream
 */
import { clearInterval, setInterval } from "node:timers";
import { URL } from "node:url";
import type { IntegerInfer } from "@lunajs/core";
import { GatewayOpcodes } from "@lunajs/core";
import EventEmitter from "eventemitter3";
import WebSocket from "ws";
import type { GatewayConnectURLQueryInfer } from "../other/connections";
import { GatewayConnectURLQuery } from "../other/connections";
import type { GatewayPayloadInfer } from "../other/payload";
import { GatewayPayload } from "../other/payload";
import type { GatewayEvents, GatewaySendEvents } from "./events";

export class Gateway extends EventEmitter<GatewayEvents> {
	public sequence: IntegerInfer | null = null;

	private ws: WebSocket | null = null;

	private heartbeatInterval: NodeJS.Timeout | null = null;

	private heartbeatTimeout: IntegerInfer | null = null;

	public constructor(public token: string, private readonly options: GatewayConnectURLQueryInfer) {
		super();
		this.options = GatewayConnectURLQuery.parse(options);
	}

	public get url(): URL {
		const url = new URL("wss://gateway.discord.gg/");
		url.searchParams.append("v", String(this.options.v));
		url.searchParams.append("encoding", this.options.encoding);

		if (this.options.compress) {
			url.searchParams.append("compress", this.options.compress);
		}

		return url;
	}

	public connect() {
		this.emit("DEBUG", "[WS] Connecting to gateway...");
		this.ws = new WebSocket(this.url.toString());
		this.emit("DEBUG", `[WS] Connected to gateway with URL: ${this.url.toString()}`);

		this.ws.on("error", (error) => {
			this.emit("ERROR", error);
		});

		this.ws.on("message", (raw, isBinary) => {
			const data = JSON.parse(raw.toString()) as GatewayPayloadInfer;
			if (data.op === GatewayOpcodes.Dispatch) {
				if (data.t === "HELLO") {
					this.heartbeatTimeout = data.d.heartbeat_interval;
					this.heartbeat();
				}

				this.emit((data.t ?? "INVALID_SESSION") as keyof GatewayEvents, data.d);
			} else if (data.op === GatewayOpcodes.HeartbeatAck) {
				this.sequence! += 1;
			}
		});

		this.ws.on("close", (code, reason) => {
			this.emit("CLOSE", code, reason);
		});
	}

	public send<T extends keyof GatewaySendEvents>(op: T, data: GatewaySendEvents[T]): void {
		if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
			this.emit("ERROR", new Error("WebSocket is not open"));
			return;
		}

		const payload: GatewayPayloadInfer = {
			op,
			d: data,
			t: null,
			s: null,
		};

		this.ws.send(JSON.stringify(GatewayPayload.parse(payload)));
	}

	private heartbeat() {
		if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
			return;
		}

		if (this.heartbeatInterval) {
			clearInterval(this.heartbeatInterval);
		}

		this.heartbeatInterval = setInterval(() => {
			this.send(GatewayOpcodes.Heartbeat, null);
		}, this.heartbeatTimeout ?? 0);
	}
}
