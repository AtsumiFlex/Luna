/**
 * @see {@link https://discord.com/developers/docs/reference#api-reference-base-url}
 */
export const API_BASE_URL = "https://discord.com/api/";

/**
 * @see {@link https://discord.com/developers/docs/reference#image-formatting-image-base-url}
 */
export const CDN_URL = "https://cdn.discordapp.com/";

export const WSS_URL = "wss://gateway.discord.gg/";

export const MEDIA_URL = "https://media.discordapp.net/";

export const DISCORD_EPOCH = 1_420_070_400_000n;

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
	 */
	V6 = 6,
	/**
	 * @deprecated
	 */
	V7 = 7,
	/**
	 * @deprecated
	 */
	V8 = 8,
	V9 = 9,
	V10 = 10,
}

/**
 * @see {@link https://discord.com/developers/docs/reference#authentication}
 */
export enum AuthTypes {
	Bearer = "Bearer",
	Bot = "Bot",
}

export type DiscordHeaders = {
	Authorization?: `${AuthTypes} ${string}`;
	"Content-Type"?: "application/json" | "application/ld+json" | "application/msword" | "application/pdf" | "application/sql" | "application/vnd.api+json" | "application/vnd.microsoft.portable-executable" | "application/vnd.ms-excel" | "application/vnd.ms-powerpoint" | "application/vnd.oasis.opendocument.text" | "application/vnd.openxmlformats-officedocument.presentationml.presentation" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "application/x-www-form-urlencoded" | "application/xml" | "application/zip" | "application/zstd" | "audio/mpeg" | "audio/ogg" | "image/avif" | "image/jpeg" | "image/png" | "image/svg+xml" | "image/tiff" | "model/obj" | "multipart/form-data" | "text/css" | "text/csv" | "text/html" | "text/javascript" | "text/plain" | "text/xml";
	"Retry-After"?: number;
	"User-Agent"?: `${string} (${string}, v${number})`;
	"X-Audit-Log-Reason"?: string;
	"X-RateLimit-Bucket"?: string;
	"X-RateLimit-Global"?: boolean;
	"X-RateLimit-Limit"?: number;
	"X-RateLimit-Remaining"?: number;
	"X-RateLimit-Reset"?: number;
	"X-RateLimit-Reset-After"?: number;
	"X-RateLimit-Scope"?: "global" | "shared" | "user";
	"X-Signature-Ed25519"?: string;
	"X-Signature-Timestamp"?: number;
};
