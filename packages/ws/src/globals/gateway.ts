import type { IntegerInfer } from "@lunajs/core";
import { ApiVersionsEnum } from "@lunajs/core";
import EventEmitter from "eventemitter3";
import WebSocket from "ws";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#connecting-gateway-url-query-string-params}
 */
export const GatewayConnectURLQuery = z.object({
	/**
	 * API Version to use
	 */
	v: ApiVersionsEnum,
	/**
	 * The encoding of received gateway packets
	 */
	encoding: z.union([z.literal("json"), z.literal("etf")]),
	/**
	 * The optional transport compression of gateway packets
	 */
	compress: z.union([z.literal("zlib-stream"), z.literal("zstd-stream")]).optional(),
});

export type GatewayConnectURLQueryInfer = z.infer<typeof GatewayConnectURLQuery>;

export class Gateway extends EventEmitter {
	private _ws: WebSocket | null = null;

	private _heartbeatInterval: NodeJS.Timeout | null = null;

	private _sequence: IntegerInfer | null = null;

	public constructor(public token: string, public options: GatewayConnectURLQueryInfer) {
		super();
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
		this.emit("disconnect", 1_000, "User requested");
	}

	public restart() {
		this.disconnect();
		this.connect();
	}

	public connect() {
		if (this._ws) {
			return;
		}

		this._ws = new WebSocket(this.url.toString());

		this._ws.on("open", () => {
			// TODO: Faire le heartbeat
			this.emit("connect");
		});

		this._ws.on("message", (data) => {
			this.emit("message", data);
		});

		this._ws.on("close", (code, reason) => {
			this.emit("disconnect", code, reason);
		});

		this._ws.on("error", (error) => {
			this.emit("error", error);
		});
	}
}
