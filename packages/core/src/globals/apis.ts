import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/reference#api-reference-base-url}
 */
export const API_BASE_URL = "https://discord.com/api";

export const WEBSOCKET_GATEWAY_URL = "wss://gateway.discord.gg/";

/**
 * @see {@link https://discord.com/developers/docs/reference#image-formatting-image-base-url}
 */
export const CDN_URL = "https://cdn.discordapp.com";

export const MEDIA_URL = "https://media.discordapp.net";

/**
 * @see {@link https://discord.com/developers/docs/reference#api-versioning-api-versions}
 */
export enum ApiVersions {
	/**
	 * @deprecated
	 */
	V3 = 3,
	/**
	 * @deprecated
	 */
	V4 = 4,
	/**
	 * @deprecated
	 */
	V5 = 5,
	/**
	 * @deprecated
	 * @default
	 */
	V6 = 6,
	/**
	 * @deprecated
	 */
	V7 = 7,
	/**
	 * @deprecated
	 * @default
	 */
	V8 = 8,
	V9 = 9,
	V10 = 10,
}

export const ApiVersionsEnum = z.nativeEnum(ApiVersions);

/**
 * @see {@link https://discord.com/developers/docs/reference#authentication}
 */
export enum AuthTypes {
	Bearer = "Bearer",
	Bot = "Bot",
}

export const AuthTypesEnum = z.nativeEnum(AuthTypes);
