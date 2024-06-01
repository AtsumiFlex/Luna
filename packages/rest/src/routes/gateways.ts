import { Integer } from "@lunajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway}
 */
export function GetGateway(): RestMakeRequestOptions<{ url: string; }> {
	return {
		method: "GET",
		path: "/gateway",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#session-start-limit-object-session-start-limit-structure}
 */
export const SessionStartLimitStructure = z.object({
	/**
	 * Total number of session starts the current user is allowed
	 */
	total: Integer,
	/**
	 * Remaining number of session starts the current user is allowed
	 */
	remaining: Integer,
	/**
	 * Number of milliseconds after which the limit resets
	 */
	reset_after: Integer,
	/**
	 * Number of identify requests allowed per 5 seconds
	 */
	max_concurrency: Integer,
});

export type SessionStartLimitStructureInfer = z.infer<typeof SessionStartLimitStructure>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot-json-response}
 */
export const GetGatewayBotResponseSchema = z.object({
	/**
	 * WSS URL that can be used for connecting to the Gateway
	 */
	url: z.string(),
	/**
	 * Recommended number of shards to use when connecting
	 */
	shards: Integer,
	/**
	 * Information on the current session start limit
	 */
	session_start_limit: SessionStartLimitStructure,
});

export type GetGatewayBotResponseSchemaInfer = z.infer<typeof GetGatewayBotResponseSchema>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot}
 */
export function GetGatewayBot(): RestMakeRequestOptions<GetGatewayBotResponseSchemaInfer> {
	return {
		method: "GET",
		path: "/gateway/bot",
	};
}
