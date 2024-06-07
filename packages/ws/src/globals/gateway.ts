/**
 * TODO: Tout ce que j'ai à faire pour le gateway :
 * - Gérer les encoding : json, etf
 * - Gérer les compressions : zlib-stream, zstd-stream
 */
import { URL } from "node:url";
import type { IntegerInfer } from "@lunajs/core";
import EventEmitter from "eventemitter3";
import WebSocket from "ws";
import type { GatewayConnectURLQueryInfer } from "../other/connections";
import { GatewayConnectURLQuery } from "../other/connections";
import type { GatewayEvents } from "./events";

export class Gateway extends EventEmitter<GatewayEvents> {
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
		this.ws.on("message", (data, isBinary) => {});
		this.ws.on("close", (code, reason) => {
			this.emit("CLOSE", code, reason);
		});
	}
}
