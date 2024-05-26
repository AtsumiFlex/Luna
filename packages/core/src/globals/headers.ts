import { z } from "zod";

/**
 * Schema for Discord headers used in API requests.
 * This schema validates the structure and types of headers sent with Discord API requests.
 *
 * @example
 * const headers = {
 *   Authorization: "Bot YOUR_BOT_TOKEN",
 *   "Content-Type": "application/json",
 *   "User-Agent": "DiscordBot (https://yourwebsite.com, v1.0)",
 *   "X-Audit-Log-Reason": "Updating user settings",
 *   "X-Signature-Ed25519": "signature",
 *   "X-Signature-Timestamp": "timestamp",
 *   "X-RateLimit-Limit": 10,
 *   "X-RateLimit-Remaining": 5,
 *   "X-RateLimit-Reset": 1234567890,
 *   "X-RateLimit-Reset-After": 1.23,
 *   "X-RateLimit-Bucket": "bucketId",
 *   "X-RateLimit-Global": false,
 *   "X-RateLimit-Scope": "user"
 * };
 * const isValidHeaders = DiscordHeaders.safeParse(headers).success;
 */
export const DiscordHeaders = z.object({
	/**
	 * Authorization header used for authentication.
	 * Typically contains a Bot token.
	 *
	 * @example
	 * Authorization: "Bot YOUR_BOT_TOKEN"
	 */
	Authorization: z.string(),

	/**
	 * Content-Type header specifying the media type of the resource.
	 * Supports various application, audio, image, model, and text types.
	 *
	 * @example
	 * "Content-Type": "application/json"
	 */
	"Content-Type": z.union([z.literal("application/json"), z.literal("application/ld+json"), z.literal("application/msword"), z.literal("application/pdf"), z.literal("application/sql"), z.literal("application/vnd.api+json"), z.literal("application/vnd.microsoft.portable-executable"), z.literal("application/vnd.ms-excel"), z.literal("application/vnd.ms-powerpoint"), z.literal("application/vnd.oasis.opendocument.text"), z.literal("application/vnd.openxmlformats-officedocument.presentationml.presentation"), z.literal("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"), z.literal("application/vnd.openxmlformats-officedocument.wordprocessingml.document"), z.literal("application/x-www-form-urlencoded"), z.literal("application/xml"), z.literal("application/zip"), z.literal("application/zstd"), z.literal("audio/mpeg"), z.literal("audio/ogg"), z.literal("image/avif"), z.literal("image/jpeg"), z.literal("image/png"), z.literal("image/svg+xml"), z.literal("image/tiff"), z.literal("model/obj"), z.literal("multipart/form-data"), z.literal("text/plain"), z.literal("text/css"), z.literal("text/csv"), z.literal("text/html"), z.literal("text/javascript"), z.literal("text/xml")]),

	/**
	 * User-Agent header providing information about the user agent.
	 * Typically includes the bot name, website, and version.
	 *
	 * @example
	 * "User-Agent": "DiscordBot (https://yourwebsite.com, v1.0)"
	 */
	"User-Agent": z.string(),

	/**
	 * X-Audit-Log-Reason header specifying the reason for an action.
	 * Used for auditing purposes.
	 *
	 * @example
	 * "X-Audit-Log-Reason": "Updating user settings"
	 */
	"X-Audit-Log-Reason": z.string(),

	/**
	 * X-Signature-Ed25519 header containing the Ed25519 signature.
	 * Used for request verification.
	 *
	 * @example
	 * "X-Signature-Ed25519": "signature"
	 */
	"X-Signature-Ed25519": z.string(),

	/**
	 * X-Signature-Timestamp header containing the signature timestamp.
	 * Used for request verification.
	 *
	 * @example
	 * "X-Signature-Timestamp": "timestamp"
	 */
	"X-Signature-Timestamp": z.string(),

	/**
	 * X-RateLimit-Limit header specifying the rate limit ceiling.
	 * Indicates the maximum number of requests allowed in the current period.
	 *
	 * @example
	 * "X-RateLimit-Limit": 10
	 */
	"X-RateLimit-Limit": z.number(),

	/**
	 * X-RateLimit-Remaining header indicating the number of remaining requests in the current period.
	 *
	 * @example
	 * "X-RateLimit-Remaining": 5
	 */
	"X-RateLimit-Remaining": z.number(),

	/**
	 * X-RateLimit-Reset header indicating the time when the rate limit will reset.
	 *
	 * @example
	 * "X-RateLimit-Reset": 1234567890
	 */
	"X-RateLimit-Reset": z.number(),

	/**
	 * X-RateLimit-Reset-After header indicating the number of seconds until the rate limit resets.
	 *
	 * @example
	 * "X-RateLimit-Reset-After": 1.23
	 */
	"X-RateLimit-Reset-After": z.number(),

	/**
	 * X-RateLimit-Bucket header indicating the rate limit bucket.
	 *
	 * @example
	 * "X-RateLimit-Bucket": "bucketId"
	 */
	"X-RateLimit-Bucket": z.string(),

	/**
	 * X-RateLimit-Global header indicating whether the rate limit is global.
	 *
	 * @example
	 * "X-RateLimit-Global": false
	 */
	"X-RateLimit-Global": z.boolean(),

	/**
	 * X-RateLimit-Scope header indicating the scope of the rate limit.
	 * Can be "user", "global", or "shared".
	 *
	 * @example
	 * "X-RateLimit-Scope": "user"
	 */
	"X-RateLimit-Scope": z.union([z.literal("user"), z.literal("global"), z.literal("shared")]),
});

/**
 * Inferred type for {@link DiscordHeaders} schema.
 * This type represents the structure of valid Discord headers.
 *
 * @example
 * const headers: DiscordHeadersInfer = {
 *   Authorization: "Bot YOUR_BOT_TOKEN",
 *   "Content-Type": "application/json",
 *   "User-Agent": "DiscordBot (https://yourwebsite.com, v1.0)",
 *   "X-Audit-Log-Reason": "Updating user settings",
 *   "X-Signature-Ed25519": "signature",
 *   "X-Signature-Timestamp": "timestamp",
 *   "X-RateLimit-Limit": 10,
 *   "X-RateLimit-Remaining": 5,
 *   "X-RateLimit-Reset": 1234567890,
 *   "X-RateLimit-Reset-After": 1.23,
 *   "X-RateLimit-Bucket": "bucketId",
 *   "X-RateLimit-Global": false,
 *   "X-RateLimit-Scope": "user"
 * };
 */
export type DiscordHeadersInfer = z.infer<typeof DiscordHeaders>;
