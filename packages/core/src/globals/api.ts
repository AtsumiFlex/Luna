import { z } from "zod";

/**
 * The base URL for the Discord API.
 * This URL is used as the root for all API endpoints.
 *
 * @example
 * fetch(`${API_BASE_URL}/v10/users/@me`, {
 *   headers: {
 *     'Authorization': `Bot ${yourBotToken}`
 *   }
 * });
 * @see {@link https://discord.com/developers/docs/reference#api-reference-base-url}
 */
export const API_BASE_URL = "https://discord.com/api";

/**
 * The base URL for Discord CDN (Content Delivery Network).
 * This URL is used to fetch media assets such as images and videos.
 *
 * @example
 * const avatarUrl = `${CDN_URL}/avatars/${userId}/${avatarHash}.png`;
 * @see {@link https://discord.com/developers/docs/reference#image-formatting-image-base-url}
 */
export const CDN_URL = "https://cdn.discordapp.com";

/**
 * The epoch timestamp used by Discord (January 1, 2015).
 * This timestamp is used for various calculations involving Discord's snowflake IDs.
 *
 * @example
 * const discordTimestamp = DISCORD_EPOCH + someSnowflakeId >> 22;
 */
export const DISCORD_EPOCH = 1_420_070_400_000n;

/**
 * Enumeration of API versions for Discord.
 * These versions indicate different releases of the Discord API.
 *
 * @example
 * const apiUrl = `${API_BASE_URL}/v${ApiVersions.V10}/users/@me`;
 * @see {@link https://discord.com/developers/docs/reference#api-versioning-api-versions}
 */
export enum ApiVersions {
	/**
	 * Version 10 of the API.
	 */
	V10 = 10,
	/**
	 * Version 9 of the API.
	 */
	V9 = 9,
	/**
	 * Version 8 of the API (deprecated).
	 *
	 * @deprecated
	 */
	V8 = 8,
	/**
	 * Version 7 of the API (deprecated).
	 *
	 * @deprecated
	 */
	V7 = 7,
	/**
	 * Version 6 of the API (deprecated).
	 *
	 * @deprecated
	 * @default
	 */
	V6 = 6,
	/**
	 * Version 5 of the API (discontinued).
	 *
	 * @discontinued
	 */
	V5 = 5,
	/**
	 * Version 4 of the API (discontinued).
	 *
	 * @discontinued
	 */
	V4 = 4,
	/**
	 * Version 3 of the API (discontinued).
	 *
	 * @discontinued
	 */
	V3 = 3,
}

/**
 * Zod schema for API versions enumeration.
 * This schema is used for validating {@link ApiVersions} values.
 *
 * @example
 * const isValidVersion = ApiVersionsEnum.safeParse(someVersion).success;
 */
export const ApiVersionsEnum = z.nativeEnum(ApiVersions);

/**
 * Enumeration of authentication types for the Discord API.
 * These types specify the method of authentication to be used in API requests.
 *
 * @example
 * fetch(`${API_BASE_URL}/v10/users/@me`, {
 *   headers: {
 *     'Authorization': `${AuthTypes.Bot} ${yourBotToken}`
 *   }
 * });
 * @see {@link https://discord.com/developers/docs/reference#authentication}
 */
export enum AuthTypes {
	/**
	 * Bearer token authentication.
	 * Used for OAuth2 authentication flows.
	 */
	Bearer = "Bearer",
	/**
	 * Bot token authentication.
	 * Used for authenticating bot accounts.
	 */
	Bot = "Bot",
}

/**
 * Zod schema for authentication types enumeration.
 * This schema is used for validating {@link AuthTypes} values.
 *
 * @example
 * const isValidAuthType = AuthTypesEnum.safeParse(someAuthType).success;
 */
export const AuthTypesEnum = z.nativeEnum(AuthTypes);
