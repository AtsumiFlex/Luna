import type {
	ApplicationCommandStructureInfer,
	GuildApplicationCommandPermissionsStructureInfer,
	InteractionResponseStructureInfer,
	MessageStructureInfer,
	SnowflakeInfer,
} from "@lunajs/core";
import { InteractionResponseStructure, Snowflake } from "@lunajs/core";
import { FormData } from "undici";
import type { RestMakeRequestOptions } from "../globals/rest";
import type {
	BulkOverwriteGuildApplicationCommandsJSONInfer,
	CreateGlobalApplicationCommandJSONInfer,
	CreateGuildApplicationCommandJSONInfer,
	EditApplicationCommandPermissionsJSONInfer,
	EditGlobalApplicationCommandJSONInfer,
	EditGuildApplicationCommandJSONInfer,
	GetGlobalApplicationCommandsQueryInfer,
	GetGuildApplicationCommandsQueryInfer,
} from "../pipes/interactions";
import {
	BulkOverwriteGuildApplicationCommandsJSON,
	CreateGlobalApplicationCommandJSON,
	CreateGuildApplicationCommandJSON,
	EditApplicationCommandPermissionsJSON,
	EditGlobalApplicationCommandJSON,
	EditGuildApplicationCommandJSON,
	GetGlobalApplicationCommandsQuery,
	GetGuildApplicationCommandsQuery,
} from "../pipes/interactions";
import type {
	EditWebhookMessageJSONInfer,
	EditWebhookMessageQueryInfer,
	ExecuteWebhookJSONInfer,
	ExecuteWebhookQueryInfer,
	GetWebhookMessageQueryInfer,
} from "../pipes/webhooks";
import {
	EditWebhookMessageJSON,
	EditWebhookMessageQuery,
	ExecuteWebhookJSON,
	ExecuteWebhookQuery,
	GetWebhookMessageQuery,
} from "../pipes/webhooks";

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands}
 */
export function GetGlobalApplicationCommands(applicationId: SnowflakeInfer, query?: GetGlobalApplicationCommandsQueryInfer): RestMakeRequestOptions<ApplicationCommandStructureInfer[]> {
	return {
		method: "GET",
		path: `/applications/${Snowflake.parse(applicationId)}/commands`,
		query: GetGlobalApplicationCommandsQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-global-application-command}
 */
export function CreateGlobalApplicationCommand(applicationId: SnowflakeInfer, data: CreateGlobalApplicationCommandJSONInfer): RestMakeRequestOptions<ApplicationCommandStructureInfer | void> {
	return {
		method: "POST",
		path: `/applications/${Snowflake.parse(applicationId)}/commands`,
		body: JSON.stringify(CreateGlobalApplicationCommandJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-global-application-command}
 */
export function GetGlobalApplicationCommand(applicationId: SnowflakeInfer, commandId: SnowflakeInfer): RestMakeRequestOptions<ApplicationCommandStructureInfer> {
	return {
		method: "GET",
		path: `/applications/${Snowflake.parse(applicationId)}/commands/${Snowflake.parse(commandId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command}
 */
export function EditGlobalApplicationCommand(applicationId: SnowflakeInfer, commandId: SnowflakeInfer, data: EditGlobalApplicationCommandJSONInfer): RestMakeRequestOptions<ApplicationCommandStructureInfer> {
	return {
		method: "PATCH",
		path: `/applications/${Snowflake.parse(applicationId)}/commands/${Snowflake.parse(commandId)}`,
		body: JSON.stringify(EditGlobalApplicationCommandJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#delete-global-application-command}
 */
export function DeleteGlobalApplicationCommand(applicationId: SnowflakeInfer, commandId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/applications/${Snowflake.parse(applicationId)}/commands/${Snowflake.parse(commandId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands}
 */
export function GetGuildApplicationCommands(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, query?: GetGuildApplicationCommandsQueryInfer): RestMakeRequestOptions<ApplicationCommandStructureInfer[]> {
	return {
		method: "GET",
		path: `/applications/${Snowflake.parse(applicationId)}/guilds/${Snowflake.parse(guildId)}/commands`,
		query: GetGuildApplicationCommandsQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command}
 */
export function CreateGuildApplicationCommand(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, data: CreateGuildApplicationCommandJSONInfer): RestMakeRequestOptions<ApplicationCommandStructureInfer | void> {
	return {
		method: "POST",
		path: `/applications/${Snowflake.parse(applicationId)}/guilds/${Snowflake.parse(guildId)}/commands`,
		body: JSON.stringify(CreateGuildApplicationCommandJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command}
 */
export function GetGuildApplicationCommand(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, commandId: SnowflakeInfer): RestMakeRequestOptions<ApplicationCommandStructureInfer> {
	return {
		method: "GET",
		path: `/applications/${Snowflake.parse(applicationId)}/guilds/${Snowflake.parse(guildId)}/commands/${Snowflake.parse(commandId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command}
 */
export function EditGuildApplicationCommand(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, commandId: SnowflakeInfer, data: EditGuildApplicationCommandJSONInfer): RestMakeRequestOptions<ApplicationCommandStructureInfer> {
	return {
		method: "PATCH",
		path: `/applications/${Snowflake.parse(applicationId)}/guilds/${Snowflake.parse(guildId)}/commands/${Snowflake.parse(commandId)}`,
		body: JSON.stringify(EditGuildApplicationCommandJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#delete-guild-application-command}
 */
export function DeleteGuildApplicationCommand(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, commandId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/applications/${Snowflake.parse(applicationId)}/guilds/${Snowflake.parse(guildId)}/commands/${Snowflake.parse(commandId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands}
 */
export function BulkOverwriteGuildApplicationCommands(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, data: BulkOverwriteGuildApplicationCommandsJSONInfer): RestMakeRequestOptions<ApplicationCommandStructureInfer[]> {
	return {
		method: "PUT",
		path: `/applications/${Snowflake.parse(applicationId)}/guilds/${Snowflake.parse(guildId)}/commands`,
		body: JSON.stringify(BulkOverwriteGuildApplicationCommandsJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command-permissions}
 */
export function GetGuildApplicationCommandPermissions(applicationId: SnowflakeInfer, guildId: SnowflakeInfer): RestMakeRequestOptions<GuildApplicationCommandPermissionsStructureInfer[]> {
	return {
		method: "GET",
		path: `/applications/${Snowflake.parse(applicationId)}/guilds/${Snowflake.parse(guildId)}/commands/permissions`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-application-command-permissions}
 */
export function GetApplicationCommandPermissions(applicationId: SnowflakeInfer, commandId: SnowflakeInfer): RestMakeRequestOptions<GuildApplicationCommandPermissionsStructureInfer> {
	return {
		method: "GET",
		path: `/applications/${Snowflake.parse(applicationId)}/commands/${Snowflake.parse(commandId)}/permissions`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions}
 */
export function EditApplicationCommandPermissions(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, commandId: SnowflakeInfer, data: EditApplicationCommandPermissionsJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PUT",
		path: `/applications/${Snowflake.parse(applicationId)}/guilds/${Snowflake.parse(guildId)}/commands/${Snowflake.parse(commandId)}/permissions`,
		body: JSON.stringify(EditApplicationCommandPermissionsJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
 */
export function CreateInteractionResponse(interactionId: SnowflakeInfer, interactionToken: string, data: InteractionResponseStructureInfer): RestMakeRequestOptions<void> {
	return {
		method: "POST",
		path: `/interactions/${Snowflake.parse(interactionId)}/${interactionToken}/callback`,
		body: JSON.stringify(InteractionResponseStructure.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#get-original-interaction-response}
 */
export function GetOriginalInteractionResponse(applicationId: SnowflakeInfer, interactionToken: string, query?: GetWebhookMessageQueryInfer): RestMakeRequestOptions<MessageStructureInfer> {
	return {
		method: "GET",
		path: `/webhooks/${Snowflake.parse(applicationId)}/${interactionToken}/messages/@original`,
		query: GetWebhookMessageQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#edit-original-interaction-response}
 */
export function EditOriginalInteractionResponse(applicationId: SnowflakeInfer, interactionToken: string, data: EditWebhookMessageJSONInfer, query?: EditWebhookMessageQueryInfer): RestMakeRequestOptions<void> {
	return {
		method: "PATCH",
		path: `/webhooks/${Snowflake.parse(applicationId)}/${interactionToken}/messages/@original`,
		body: JSON.stringify(EditWebhookMessageJSON.parse(data)),
		query: EditWebhookMessageQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#delete-original-interaction-response}
 */
export function DeleteOriginalInteractionResponse(applicationId: SnowflakeInfer, interactionToken: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/webhooks/${Snowflake.parse(applicationId)}/${interactionToken}/messages/@original`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-followup-message}
 */
export function CreateFollowupMessage(applicationId: SnowflakeInfer, interactionToken: string, data: ExecuteWebhookJSONInfer, query?: ExecuteWebhookQueryInfer): RestMakeRequestOptions<void> {
	return {
		method: "POST",
		path: `/webhooks/${Snowflake.parse(applicationId)}/${interactionToken}`,
		body: JSON.stringify(ExecuteWebhookJSON.parse(data)),
		query: ExecuteWebhookQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#get-followup-message}
 */
export function GetFollowupMessage(applicationId: SnowflakeInfer, interactionToken: string, messageId: SnowflakeInfer, query?: GetWebhookMessageQueryInfer): RestMakeRequestOptions<MessageStructureInfer> {
	return {
		method: "GET",
		path: `/webhooks/${Snowflake.parse(applicationId)}/${interactionToken}/messages/${Snowflake.parse(messageId)}`,
		query: GetWebhookMessageQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#edit-followup-message}
 */
export function EditFollowupMessage(applicationId: SnowflakeInfer, interactionToken: string, messageId: SnowflakeInfer, data: EditWebhookMessageJSONInfer, query?: EditWebhookMessageQueryInfer): RestMakeRequestOptions<MessageStructureInfer> {
	const form = new FormData();
	form.append("payload_json", JSON.stringify(EditWebhookMessageJSON.parse(data)));

	return {
		method: "PATCH",
		path: `/webhooks/${Snowflake.parse(applicationId)}/${interactionToken}/messages/${Snowflake.parse(messageId)}`,
		body: form,
		query: EditWebhookMessageQuery.parse(query),
		headers: { "Content-Type": "multipart/form-data" },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#delete-followup-message}
 */
export function DeleteFollowupMessage(applicationId: SnowflakeInfer, interactionToken: string, messageId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/webhooks/${Snowflake.parse(applicationId)}/${interactionToken}/messages/${Snowflake.parse(messageId)}`,
	};
}
