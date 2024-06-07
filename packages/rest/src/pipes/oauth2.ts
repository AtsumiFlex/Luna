import { ApplicationStructure, ISO8601Timestamp, OAuth2ScopesEnum, UserStructure } from "@lunajs/core";
import { z } from "zod";

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
