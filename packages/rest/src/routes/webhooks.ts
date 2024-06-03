import type { MessageStructureInfer, SnowflakeInfer, WebhookStructureInfer } from "@lunajs/core";
import {
	AllowedMentionsStructure,
	AttachmentStructure,
	EmbedStructure,
	MessageFlags,
	PollStructure,
	Snowflake,
} from "@lunajs/core";
import { FormData } from "undici";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

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
 * @see {@link https://discord.com/developers/docs/resources/webhook#create-webhook}
 */
export function CreateWebhook(channelId: SnowflakeInfer, reason: string, data: CreateWebhookJSONInfer): RestMakeRequestOptions<WebhookStructureInfer> {
	return {
		method: "POST",
		path: `/channels/${Snowflake.parse(channelId)}/webhooks`,
		body: JSON.stringify(CreateWebhookJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-channel-webhooks}
 */
export function GetChannelWebhooks(channelId: SnowflakeInfer): RestMakeRequestOptions<WebhookStructureInfer[]> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}/webhooks`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-guild-webhooks}
 */
export function GetGuildWebhooks(guildId: SnowflakeInfer): RestMakeRequestOptions<WebhookStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/webhooks`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook}
 */
export function GetWebhook(webhookId: SnowflakeInfer): RestMakeRequestOptions<WebhookStructureInfer> {
	return {
		method: "GET",
		path: `/webhooks/${Snowflake.parse(webhookId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-with-token}
 */
export function GetWebhookWithToken(webhookId: SnowflakeInfer, webhookToken: string): RestMakeRequestOptions<WebhookStructureInfer> {
	return {
		method: "GET",
		path: `/webhooks/${Snowflake.parse(webhookId)}/${webhookToken}`,
	};
}

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
 * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook}
 */
export function ModifyWebhook(webhookId: SnowflakeInfer, reason: string, data: ModifyWebhookJSONInfer): RestMakeRequestOptions<WebhookStructureInfer> {
	return {
		method: "PATCH",
		path: `/webhooks/${Snowflake.parse(webhookId)}`,
		body: JSON.stringify(ModifyWebhookJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook-with-token}
 */
export function ModifyWebhookWithToken(webhookId: SnowflakeInfer, webhookToken: string, reason: string, data: Omit<ModifyWebhookJSONInfer, "channel_id">): RestMakeRequestOptions<WebhookStructureInfer> {
	return {
		method: "PATCH",
		path: `/webhooks/${Snowflake.parse(webhookId)}/${webhookToken}`,
		body: JSON.stringify(ModifyWebhookJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook}
 */
export function DeleteWebhook(webhookId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/webhooks/${Snowflake.parse(webhookId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-with-token}
 */
export function DeleteWebhookWithToken(webhookId: SnowflakeInfer, webhookToken: string, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/webhooks/${Snowflake.parse(webhookId)}/${webhookToken}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

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
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook}
 */
export function ExecuteWebhook(webhookId: SnowflakeInfer, webhookToken: string, data: ExecuteWebhookJSONInfer, query?: ExecuteWebhookQueryInfer): RestMakeRequestOptions<void> {
	const form = new FormData();
	form.append("payload_json", JSON.stringify(ExecuteWebhookJSON.parse(data)));

	return {
		method: "POST",
		path: `/webhooks/${Snowflake.parse(webhookId)}/${webhookToken}`,
		body: form,
		query: ExecuteWebhookQuery.parse(query),
		headers: { "Content-Type": "multipart/form-data" },
	};
}

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
 * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-message}
 */
export function GetWebhookMessage(webhookId: SnowflakeInfer, webhookToken: string, messageId: SnowflakeInfer, query?: GetWebhookMessageQueryInfer): RestMakeRequestOptions<MessageStructureInfer> {
	return {
		method: "GET",
		path: `/webhooks/${Snowflake.parse(webhookId)}/${webhookToken}/messages/${Snowflake.parse(messageId)}`,
		query: GetWebhookMessageQuery.parse(query),
	};
}

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
 * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message}
 */
export function EditWebhookMessage(webhookId: SnowflakeInfer, webhookToken: string, messageId: SnowflakeInfer, data: EditWebhookMessageJSONInfer, query?: EditWebhookMessageQueryInfer): RestMakeRequestOptions<MessageStructureInfer> {
	const form = new FormData();
	form.append("payload_json", JSON.stringify(EditWebhookMessageJSON.parse(data)));

	return {
		method: "PATCH",
		path: `/webhooks/${Snowflake.parse(webhookId)}/${webhookToken}/messages/${Snowflake.parse(messageId)}`,
		body: form,
		query: EditWebhookMessageQuery.parse(query),
		headers: { "Content-Type": "multipart/form-data" },
	};
}

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

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-message}
 */
export function DeleteWebhookMessage(webhookId: SnowflakeInfer, webhookToken: string, messageId: SnowflakeInfer, query?: DeleteWebhookMessageQueryInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/webhooks/${Snowflake.parse(webhookId)}/${webhookToken}/messages/${Snowflake.parse(messageId)}`,
		query: DeleteWebhookMessageQuery.parse(query),
	};
}
