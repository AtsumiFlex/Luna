import type { ApplicationStructure, ISO8601Timestamp, Oauth2Scopes, UserStructure } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information}
 */
export function getCurrentBotApplicationInformation(): RestMakeRequestOptions<ApplicationStructure> {
	return {
		method: "GET",
		path: "/oauth2/applications/@me",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information-response-structure}
 */
export type CurrentAuthorizationInformationStructure = {
	/**
	 * The current application
	 */
	application: Pick<ApplicationStructure, "bot_public" | "bot_require_code_grant" | "description" | "icon" | "id" | "name" | "verify_key">;
	/**
	 * When the access token expires
	 */
	expires: ISO8601Timestamp;
	/**
	 * The scopes the user has authorized the application for
	 */
	scopes: Oauth2Scopes[];
	/**
	 * The user who has authorized, if the user has authorized with the identify scope
	 */
	user?: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information}
 */
export function getCurrentAuthorizationInformation(): RestMakeRequestOptions<CurrentAuthorizationInformationStructure> {
	return {
		method: "GET",
		path: "/oauth2/@me",
	};
}
