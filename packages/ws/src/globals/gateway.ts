import { setInterval } from "node:timers";
import { URL } from "node:url";
import type { IntegerInfer } from "@lunajs/core";
import { GatewayOpcodes } from "@lunajs/core";
import EventEmitter from "eventemitter3";
import type { RawData } from "ws";
import WebSocket from "ws";
import type { GatewayConnectURLQueryInfer, GatewayPayloadInfer, GatewaySendEvents } from "./types";
import { GatewayPayload } from "./types";

export type GatewayEvents = {
	close: [number, string];
	debug: [string];
	disconnect: [string];
	error: [Error];
	message: [RawData];
};

export class Gateway extends EventEmitter<GatewayEvents> {
	private _ws: WebSocket | null = null;

	private _heartbeatInterval: NodeJS.Timeout | null = null;

	private _sequence: IntegerInfer | null = null;

	public constructor(public token: string, private readonly options: GatewayConnectURLQueryInfer) {
		super();
		this._connect();
	}

	public get url() {
		const url = new URL("wss://gateway.discord.gg/");
		url.searchParams.set("v", String(this.options.v));
		url.searchParams.set("encoding", this.options.encoding);

		if (this.options.compress) {
			url.searchParams.set("compress", this.options.compress);
		}

		return url;
	}

	public disconnect() {
		if (!this._ws) {
			return;
		}

		this._ws.close();
		this._ws = null;
		this.emit("disconnect", "[WS] Gateway closed");
	}

	public restart() {
		this.emit("debug", "[WS] Restarting gateway...");
		this.disconnect();
		this._connect();
	}

	public send<K extends keyof GatewaySendEvents>(op: K, ...data: GatewaySendEvents[K]) {
		if (!this._ws || this._ws.readyState !== WebSocket.OPEN) {
			throw new Error("WebSocket is not connected");
		}

		const payload: GatewayPayloadInfer = {
			op,
			d: data[0],
			s: null,
			t: null,
		};

		this.emit("debug", `[WS] Sending payload: ${JSON.stringify(payload)}`);
		this._ws.send(JSON.stringify(GatewayPayload.parse(payload)));
	}

	private _connect() {
		this.emit("debug", "[WS] Connecting to gateway...");
		this._ws = new WebSocket(this.url.toString());
		this.emit("debug", `[WS] Gateway URL: ${this.url.toString()}`);

		this._ws.on("open", () => {
			this.emit("debug", "[WS] Gateway connected");
		});

		this._ws.on("close", (code, reason) => {
			this.emit("close", code, reason.toString());
		});

		this._ws.on("error", (error) => {
			this.emit("error", error);
		});

		this._ws.on("message", (data) => {
			const parsedData: any = JSON.parse(data.toString());
			if (parsedData.op === GatewayOpcodes.Hello) {
				this._heartbeat(parsedData.d.heartbeat_interval);
				this.send(GatewayOpcodes.Identify, {
					token: this.token,
					intents: 513,
					properties: {
						os: "linux",
						browser: "lunajs",
						device: "lunajs",
					},
				});
			}

			this.emit("message", data);
		});
	}

	private _heartbeat(interval: IntegerInfer) {
		if (!this._ws || this._ws.readyState !== WebSocket.OPEN) {
			return;
		}

		this._heartbeatInterval = setInterval(() => {
			this.send(GatewayOpcodes.Heartbeat, null);
		}, interval);
	}
}
