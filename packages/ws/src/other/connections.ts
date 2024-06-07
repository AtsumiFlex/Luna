import { ApiVersionsEnum } from "@lunajs/core";
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
