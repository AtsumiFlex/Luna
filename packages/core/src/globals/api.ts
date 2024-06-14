import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/reference#api-reference-base-url}
 */
export const API_BASE_URL = "https://discord.com/api";

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
