import type { ApplicationStructureInfer } from "@lunajs/core";
import { ApplicationStructure, ISO8601Timestamp, OAuth2ScopesEnum, UserStructure } from "@lunajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

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
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information-response-structure}
 */
export const GetCurrentAuthorizationInformationResponseStructure = z.object({
	/**
	 * The current application (partial structure).
	 */
	application: ApplicationStructure.partial(),
	/**
	 * The scopes the user has authorized the application for.
	 */
	scopes: z.array(OAuth2ScopesEnum),
	/**
	 * When the access token expires.
	 */
	expires: ISO8601Timestamp,
	/**
	 * The user who has authorized, if the user has authorized with the identify scope.
	 */
	user: UserStructure.optional(),
});

export type GetCurrentAuthorizationInformationResponseStructureInfer = z.infer<typeof GetCurrentAuthorizationInformationResponseStructure>;

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information}
 */
export function GetCurrentAuthorizationInformation(): RestMakeRequestOptions<GetCurrentAuthorizationInformationResponseStructureInfer> {
	return {
		method: "GET",
		path: "/oauth2/@me",
	};
}
