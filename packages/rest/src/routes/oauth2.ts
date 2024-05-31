import type { ApplicationStructureInfer } from "@luna/core";
import { ApplicationStructure, ISO8601Timestamp, OAuth2ScopesEnum, UserStructure } from "@luna/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * Options for making a request to get the current bot application information.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information}
 * @returns {RestMakeRequestOptions<ApplicationStructureInfer>} The options for the request.
 * @example
 * const requestOptions = GetCurrentUserApplicationInformation();
 * console.log(requestOptions);
 */
export function GetCurrentUserApplicationInformation(): RestMakeRequestOptions<ApplicationStructureInfer> {
	return {
		method: "GET",
		path: "/oauth2/applications/@me",
	};
}

/**
 * Structure for the response of getting the current authorization information.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information-response-structure}
 */
export const GetCurrentAuthorizationInformationResponseStructure = z.object({
	/**
	 * The current application.
	 *
	 * @example
	 * const response = { application: { id: "123456789012345678", name: "MyApp" } };
	 */
	application: ApplicationStructure.partial(),
	/**
	 * The scopes the user has authorized the application for.
	 *
	 * @example
	 * const response = { scopes: ["identify", "guilds"] };
	 */
	scopes: z.array(OAuth2ScopesEnum),
	/**
	 * When the access token expires.
	 *
	 * @example
	 * const response = { expires: "2023-12-31T23:59:59.000Z" };
	 */
	expires: ISO8601Timestamp,
	/**
	 * The user who has authorized, if the user has authorized with the identify scope.
	 *
	 * @example
	 * const response = { user: { id: "123456789012345678", username: "User" } };
	 */
	user: UserStructure.optional(),
});

/**
 * Inferred type for GetCurrentAuthorizationInformationResponseStructure.
 *
 * @example
 * const response: GetCurrentAuthorizationInformationResponseStructureInfer = {
 *   application: { id: "123456789012345678", name: "MyApp" },
 *   scopes: ["identify", "guilds"],
 *   expires: "2023-12-31T23:59:59.000Z",
 *   user: { id: "123456789012345678", username: "User" },
 * };
 */
export type GetCurrentAuthorizationInformationResponseStructureInfer = z.infer<typeof GetCurrentAuthorizationInformationResponseStructure>;

/**
 * Options for making a request to get the current authorization information.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information}
 * @returns {RestMakeRequestOptions<GetCurrentAuthorizationInformationResponseStructureInfer>} The options for the request.
 * @example
 * const requestOptions = GetCurrentAuthorizationInformation();
 * console.log(requestOptions);
 */
export function GetCurrentAuthorizationInformation(): RestMakeRequestOptions<GetCurrentAuthorizationInformationResponseStructureInfer> {
	return {
		method: "GET",
		path: "/oauth2/@me",
	};
}
