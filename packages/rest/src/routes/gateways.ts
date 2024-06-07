import type { RestMakeRequestOptions } from "../globals/rest";
import type { GetGatewayBotResponseSchemaInfer } from "../pipes/gateways";

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
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot}
 */
export function GetGatewayBot(): RestMakeRequestOptions<GetGatewayBotResponseSchemaInfer> {
	return {
		method: "GET",
		path: "/gateway/bot",
	};
}
