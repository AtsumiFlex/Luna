import type { MessageStructureInfer, SnowflakeInfer, WebhookStructureInfer } from "@lunajs/core";
import { Snowflake } from "@lunajs/core";
import { FormData } from "undici";
import type { RestMakeRequestOptions } from "../globals/rest";
import type {
	CreateWebhookJSONInfer,
	DeleteWebhookMessageQueryInfer,
	EditWebhookMessageJSONInfer,
	EditWebhookMessageQueryInfer,
	ExecuteWebhookJSONInfer,
	ExecuteWebhookQueryInfer,
	GetWebhookMessageQueryInfer,
	ModifyWebhookJSONInfer,
} from "../libs/webhooks";
import {
	CreateWebhookJSON,
	DeleteWebhookMessageQuery,
	EditWebhookMessageJSON,
	EditWebhookMessageQuery,
	ExecuteWebhookJSON,
	ExecuteWebhookQuery,
	GetWebhookMessageQuery,
	ModifyWebhookJSON,
} from "../libs/webhooks";

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
 * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-message}
 */
export function DeleteWebhookMessage(webhookId: SnowflakeInfer, webhookToken: string, messageId: SnowflakeInfer, query?: DeleteWebhookMessageQueryInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/webhooks/${Snowflake.parse(webhookId)}/${webhookToken}/messages/${Snowflake.parse(messageId)}`,
		query: DeleteWebhookMessageQuery.parse(query),
	};
}
