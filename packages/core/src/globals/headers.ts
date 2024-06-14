import { z } from "zod";

export const DiscordHeaders = z.object({
	Authorization: z.string().optional(),
	"User-Agent": z.string().optional(),
	"Content-Type": z.union([z.literal("application/json"), z.literal("application/ld+json"), z.literal("application/msword"), z.literal("application/pdf"), z.literal("application/sql"), z.literal("application/vnd.api+json"), z.literal("application/vnd.microsoft.portable-executable"), z.literal("application/vnd.ms-excel"), z.literal("application/vnd.ms-powerpoint"), z.literal("application/vnd.oasis.opendocument.text"), z.literal("application/vnd.openxmlformats-officedocument.presentationml.presentation"), z.literal("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"), z.literal("application/vnd.openxmlformats-officedocument.wordprocessingml.document"), z.literal("application/x-www-form-urlencoded"), z.literal("application/xml"), z.literal("application/zip"), z.literal("application/zstd"), z.literal("audio/mpeg"), z.literal("audio/ogg"), z.literal("image/avif"), z.literal("image/jpeg"), z.literal("image/png"), z.literal("image/svg+xml"), z.literal("image/tiff"), z.literal("model/obj"), z.literal("multipart/form-data"), z.literal("text/plain"), z.literal("text/css"), z.literal("text/csv"), z.literal("text/html"), z.literal("text/javascript"), z.literal("text/xml")]).optional(),
	"Retry-After": z.number().optional(),
	"X-Audit-Log-Reason": z.string().optional(),
	"X-Signature-Ed25519": z.string().optional(),
	"X-Signature-Timestamp": z.string().optional(),
	"X-RateLimit-Limit": z.number().optional(),
	"X-RateLimit-Remaining": z.number().optional(),
	"X-RateLimit-Reset": z.number().optional(),
	"X-RateLimit-Reset-After": z.number().optional(),
	"X-RateLimit-Bucket": z.string().optional(),
	"X-RateLimit-Global": z.boolean().optional(),
	"X-RateLimit-Scope": z.union([z.literal("user"), z.literal("global"), z.literal("shared")]).optional(),
});

export type DiscordHeadersInfer = z.infer<typeof DiscordHeaders>;
