import { ApiVersionsEnum } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#connecting-gateway-url-query-string-params}
 */
export const GatewayConnectQuery = z.object({
	/**
	 * API version
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

export type GatewayConnectQueryInfer = z.infer<typeof GatewayConnectQuery>;
