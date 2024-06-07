import {
	AllowedMentionsStructure,
	AttachmentStructure,
	EmbedStructure,
	MessageFlags,
	PollStructure,
	Snowflake,
} from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#create-webhook-json-params}
 */
export const CreateWebhookJSON = z.object({
	/**
	 * Name of the webhook (1-80 characters)
	 */
	name: z.string().min(1).max(80),
	/**
	 * Image for the default webhook avatar
	 */
	avatar: z.string().optional().nullable(),
});

export type CreateWebhookJSONInfer = z.infer<typeof CreateWebhookJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook-json-params}
 */
export const ModifyWebhookJSON = z.object({
	/**
	 * The default name of the webhook
	 */
	name: z.string().min(1).max(80).optional(),
	/**
	 * Image for the default webhook avatar
	 */
	avatar: z.string().optional().nullable(),
	/**
	 * The new channel id this webhook should be moved to
	 */
	channel_id: Snowflake.optional(),
});

export type ModifyWebhookJSONInfer = z.infer<typeof ModifyWebhookJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook-query-string-params}
 */
export const ExecuteWebhookQuery = z.object({
	/**
	 * Waits for server confirmation of message send before response, and returns the created message body (defaults to false; when false a message that is not saved does not return an error)
	 */
	wait: z.boolean().optional(),
	/**
	 * Send a message to the specified thread within a webhook's channel. The thread will automatically be unarchived.
	 */
	thread_id: Snowflake.optional(),
});

export type ExecuteWebhookQueryInfer = z.infer<typeof ExecuteWebhookQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params}
 */
export const ExecuteWebhookJSON = z.object({
	/**
	 * The message contents (up to 2000 characters)
	 */
	content: z.string().max(2_000),
	/**
	 * Override the default username of the webhook
	 */
	username: z.string().optional(),
	/**
	 * Override the default avatar of the webhook
	 */
	avatar_url: z.string().optional(),
	/**
	 * True if this is a TTS message
	 */
	tts: z.boolean().optional(),
	/**
	 * Embedded rich content
	 */
	embeds: z.array(EmbedStructure).max(10).optional(),
	/**
	 * Allowed mentions for the message
	 */
	allowed_mentions: AllowedMentionsStructure.optional(),
	/**
	 * TODO: The components to include with the message
	 */
	components: z.array(z.unknown()).optional(),
	/**
	 * The contents of the file being sent
	 */
	files: z.unknown().optional(),
	/**
	 * JSON encoded body of non-file params
	 */
	payload_json: z.string().optional(),
	/**
	 * Attachment objects with filename and description
	 */
	attachments: z.array(AttachmentStructure.partial()).optional(),
	/**
	 * Message flags combined as a bitfield (only SUPPRESS_EMBEDS and SUPPRESS_NOTIFICATIONS can be set can be set)
	 */
	flags: z.union([z.literal(MessageFlags.SuppressEmbeds), z.literal(MessageFlags.SuppressNotifications), z.bigint()]).optional(),
	/**
	 * Name of thread to create (requires the webhook channel to be a forum or media channel)
	 */
	thread_name: z.string().optional(),
	/**
	 * Array of tag ids to apply to the thread (requires the webhook channel to be a forum or media channel)
	 */
	applied_tags: z.array(Snowflake).optional(),
	/**
	 * A poll!
	 */
	poll: PollStructure.optional(),
});

export type ExecuteWebhookJSONInfer = z.infer<typeof ExecuteWebhookJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-message-query-string-params}
 */
export const GetWebhookMessageQuery = z.object({
	/**
	 * ID of the thread the message is in
	 */
	thread_id: Snowflake.optional(),
});

export type GetWebhookMessageQueryInfer = z.infer<typeof GetWebhookMessageQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message-query-string-params}
 */
export const EditWebhookMessageQuery = z.object({
	/**
	 * ID of the thread the message is in
	 */
	thread_id: Snowflake.optional(),
});

export type EditWebhookMessageQueryInfer = z.infer<typeof EditWebhookMessageQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message-jsonform-params}
 */
export const EditWebhookMessageJSON = z.object({
	/**
	 * The message contents (up to 2000 characters)
	 */
	content: z.string().max(2_000).optional().nullable(),
	/**
	 * Embedded rich content
	 */
	embeds: z.array(EmbedStructure).max(10).optional().nullable(),
	/**
	 * Allowed mentions for the message
	 */
	allowed_mentions: AllowedMentionsStructure.optional().nullable(),
	/**
	 * TODO: The components to include with the message
	 */
	components: z.array(z.unknown()).optional().nullable(),
	/**
	 * The contents of the file being sent
	 */
	files: z.unknown().optional().nullable(),
	/**
	 * JSON encoded body of non-file params
	 */
	payload_json: z.string().optional().nullable(),
	/**
	 * Attachment objects with filename and description
	 */
	attachments: z.array(AttachmentStructure.partial()).optional().nullable(),
});

export type EditWebhookMessageJSONInfer = z.infer<typeof EditWebhookMessageJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-message-query-string-params}
 */
export const DeleteWebhookMessageQuery = z.object({
	/**
	 * ID of the thread the message is in
	 */
	thread_id: Snowflake.optional(),
});

export type DeleteWebhookMessageQueryInfer = z.infer<typeof DeleteWebhookMessageQuery>;
