import type { ApplicationStructureInfer } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";
import type { GetCurrentAuthorizationInformationResponseStructureInfer } from "../libs/oauth2";

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information}
 */
export function GetCurrentBotApplication(): RestMakeRequestOptions<ApplicationStructureInfer> {
	return {
		method: "GET",
		path: "/oauth2/applications/@me",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information}
 */
export function GetCurrentAuthorizationInformation(): RestMakeRequestOptions<GetCurrentAuthorizationInformationResponseStructureInfer> {
	return {
		method: "GET",
		path: "/oauth2/@me",
	};
}
