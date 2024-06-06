import type {
	ApplicationCommandStructureInfer,
	GuildApplicationCommandPermissionsStructureInfer,
	SnowflakeInfer,
} from "@lunajs/core";
import {
	ApplicationCommandOptionStructure,
	ApplicationCommandPermissionsStructure,
	ApplicationCommandTypesEnum,
	InteractionContextTypesEnum,
	InteractionTypesEnum,
	LocalesEnum,
	Snowflake,
} from "@lunajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands-query-string-params}
 */
export const GetGlobalApplicationCommandsQuery = z.object({
	/**
	 * Whether to include full localization dictionaries (name_localizations and description_localizations) in the returned objects, instead of the name_localized and description_localized fields. Default false.
	 */
	with_localizations: z.boolean().optional(),
});

export type GetGlobalApplicationCommandsQueryInfer = z.infer<typeof GetGlobalApplicationCommandsQuery>;

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
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params}
 */
export const CreateGlobalApplicationCommandJson = z.object({
	/**
	 * Name of command, 1-32 characters
	 */
	name: z.string().min(1).max(32),
	/**
	 * Localization dictionary for the name field. Values follow the same restrictions as name
	 */
	name_localizations: z.record(LocalesEnum, z.string().min(1).max(32)).optional().nullable(),
	/**
	 * 1-100 character description for CHAT_INPUT commands
	 */
	description: z.string().min(1).max(100).optional(),
	/**
	 * Localization dictionary for the description field. Values follow the same restrictions as description
	 */
	description_localizations: z.record(LocalesEnum, z.string().min(1).max(100)).optional().nullable(),
	/**
	 * The parameters for the command, max of 25
	 */
	options: z.array(ApplicationCommandOptionStructure).max(25).optional(),
	/**
	 * Set of permissions represented as a bit set
	 */
	default_member_permissions: z.string().optional().nullable(),
	/**
	 * Deprecated (use contexts instead); Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
	 */
	dm_permission: z.boolean().optional().nullable(),
	/**
	 * Replaced by default_member_permissions and will be deprecated in the future. Indicates whether the command is enabled by default when the app is added to a guild. Defaults to true
	 */
	default_permission: z.boolean().optional(),
	/**
	 * Installation context(s) where the command is available
	 */
	integration_types: z.array(InteractionTypesEnum).optional(),
	/**
	 * Interaction context(s) where the command can be used
	 */
	contexts: z.array(InteractionContextTypesEnum).optional(),
	/**
	 * Type of command, defaults 1 if not set
	 */
	type: ApplicationCommandTypesEnum.optional(),
	/**
	 * Indicates whether the command is age-restricted
	 */
	nsfw: z.boolean().optional(),
});

export type CreateGlobalApplicationCommandJsonInfer = z.infer<typeof CreateGlobalApplicationCommandJson>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-global-application-command}
 */
export function CreateGlobalApplicationCommand(applicationId: SnowflakeInfer, data: CreateGlobalApplicationCommandJsonInfer): RestMakeRequestOptions<ApplicationCommandStructureInfer | void> {
	return {
		method: "POST",
		path: `/applications/${Snowflake.parse(applicationId)}/commands`,
		body: JSON.stringify(CreateGlobalApplicationCommandJson.parse(data)),
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
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command-json-params}
 */
export const EditGlobalApplicationCommandJson = z.object({
	/**
	 * Name of command, 1-32 characters
	 */
	name: z.string().min(1).max(32).optional(),
	/**
	 * Localization dictionary for the name field. Values follow the same restrictions as name
	 */
	name_localizations: z.record(LocalesEnum, z.string().min(1).max(32)).optional().nullable(),
	/**
	 * 1-100 character description for CHAT_INPUT commands
	 */
	description: z.string().min(1).max(100).optional(),
	/**
	 * Localization dictionary for the description field. Values follow the same restrictions as description
	 */
	description_localizations: z.record(LocalesEnum, z.string().min(1).max(100)).optional().nullable(),
	/**
	 * The parameters for the command, max of 25
	 */
	options: z.array(ApplicationCommandOptionStructure).max(25).optional(),
	/**
	 * Set of permissions represented as a bit set
	 */
	default_member_permissions: z.string().optional().nullable(),
	/**
	 * Deprecated (use contexts instead); Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
	 */
	dm_permission: z.boolean().optional().nullable(),
	/**
	 * Replaced by default_member_permissions and will be deprecated in the future. Indicates whether the command is enabled by default when the app is added to a guild. Defaults to true
	 */
	default_permission: z.boolean().optional(),
	/**
	 * Installation context(s) where the command is available
	 */
	integration_types: z.array(InteractionTypesEnum).optional(),
	/**
	 * Interaction context(s) where the command can be used
	 */
	contexts: z.array(InteractionContextTypesEnum).optional(),
	/**
	 * Indicates whether the command is age-restricted
	 */
	nsfw: z.boolean().optional(),
});

export type EditGlobalApplicationCommandJsonInfer = z.infer<typeof EditGlobalApplicationCommandJson>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command}
 */
export function EditGlobalApplicationCommand(applicationId: SnowflakeInfer, commandId: SnowflakeInfer, data: EditGlobalApplicationCommandJsonInfer): RestMakeRequestOptions<ApplicationCommandStructureInfer> {
	return {
		method: "PATCH",
		path: `/applications/${Snowflake.parse(applicationId)}/commands/${Snowflake.parse(commandId)}`,
		body: JSON.stringify(EditGlobalApplicationCommandJson.parse(data)),
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
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands-query-string-params}
 */
export const GetGuildApplicationCommandsQuery = z.object({
	/**
	 * Whether to include full localization dictionaries (name_localizations and description_localizations) in the returned objects, instead of the name_localized and description_localized fields. Default false.
	 */
	with_localizations: z.boolean().optional(),
});

export type GetGuildApplicationCommandsQueryInfer = z.infer<typeof GetGuildApplicationCommandsQuery>;

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
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params}
 */
export const CreateGuildApplicationCommandJson = z.object({
	/**
	 * Name of command, 1-32 characters
	 */
	name: z.string().min(1).max(32),
	/**
	 * Localization dictionary for the name field. Values follow the same restrictions as name
	 */
	name_localizations: z.record(LocalesEnum, z.string().min(1).max(32)).optional().nullable(),
	/**
	 * 1-100 character description for CHAT_INPUT commands
	 */
	description: z.string().min(1).max(100).optional(),
	/**
	 * Localization dictionary for the description field. Values follow the same restrictions as description
	 */
	description_localizations: z.record(LocalesEnum, z.string().min(1).max(100)).optional().nullable(),
	/**
	 * The parameters for the command, max of 25
	 */
	options: z.array(ApplicationCommandOptionStructure).max(25).optional(),
	/**
	 * Set of permissions represented as a bit set
	 */
	default_member_permissions: z.string().optional().nullable(),
	/**
	 * Replaced by default_member_permissions and will be deprecated in the future. Indicates whether the command is enabled by default when the app is added to a guild. Defaults to true
	 */
	default_permission: z.boolean().optional(),
	/**
	 * Type of command, defaults 1 if not set
	 */
	type: ApplicationCommandTypesEnum.optional(),
	/**
	 * Indicates whether the command is age-restricted
	 */
	nsfw: z.boolean().optional(),
});

export type CreateGuildApplicationCommandJsonInfer = z.infer<typeof CreateGuildApplicationCommandJson>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command}
 */
export function CreateGuildApplicationCommand(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, data: CreateGuildApplicationCommandJsonInfer): RestMakeRequestOptions<ApplicationCommandStructureInfer | void> {
	return {
		method: "POST",
		path: `/applications/${Snowflake.parse(applicationId)}/guilds/${Snowflake.parse(guildId)}/commands`,
		body: JSON.stringify(CreateGuildApplicationCommandJson.parse(data)),
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
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command-json-params}
 */
export const EditGuildApplicationCommandJson = z.object({
	/**
	 * Name of command, 1-32 characters
	 */
	name: z.string().min(1).max(32).optional(),
	/**
	 * Localization dictionary for the name field. Values follow the same restrictions as name
	 */
	name_localizations: z.record(LocalesEnum, z.string().min(1).max(32)).optional().nullable(),
	/**
	 * 1-100 character description
	 */
	description: z.string().min(1).max(100).optional(),
	/**
	 * Localization dictionary for the description field. Values follow the same restrictions as description
	 */
	description_localizations: z.record(LocalesEnum, z.string().min(1).max(100)).optional().nullable(),
	/**
	 * The parameters for the command, max of 25
	 */
	options: z.array(ApplicationCommandOptionStructure).max(25).optional(),
	/**
	 * Set of permissions represented as a bit set
	 */
	default_member_permissions: z.string().optional().nullable(),
	/**
	 * Replaced by default_member_permissions and will be deprecated in the future. Indicates whether the command is enabled by default when the app is added to a guild. Defaults to true
	 */
	default_permission: z.boolean().optional(),
	/**
	 * Indicates whether the command is age-restricted
	 */
	nsfw: z.boolean().optional(),
});

export type EditGuildApplicationCommandJsonInfer = z.infer<typeof EditGuildApplicationCommandJson>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command}
 */
export function EditGuildApplicationCommand(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, commandId: SnowflakeInfer, data: EditGuildApplicationCommandJsonInfer): RestMakeRequestOptions<ApplicationCommandStructureInfer> {
	return {
		method: "PATCH",
		path: `/applications/${Snowflake.parse(applicationId)}/guilds/${Snowflake.parse(guildId)}/commands/${Snowflake.parse(commandId)}`,
		body: JSON.stringify(EditGuildApplicationCommandJson.parse(data)),
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
export const BulkOverwriteGuildApplicationCommandsJson = z.object({
	/**
	 * ID of the command, if known
	 */
	id: Snowflake.optional(),
	/**
	 * Name of command, 1-32 characters
	 */
	name: z.string().min(1).max(32),
	/**
	 * Localization dictionary for the name field. Values follow the same restrictions as name
	 */
	name_localizations: z.record(LocalesEnum, z.string().min(1).max(32)).optional().nullable(),
	/**
	 * 1-100 character description
	 */
	description: z.string().min(1).max(100),
	/**
	 * Localization dictionary for the description field. Values follow the same restrictions as description
	 */
	description_localizations: z.record(LocalesEnum, z.string().min(1).max(100)).optional().nullable(),
	/**
	 * Parameters for the command
	 */
	options: z.array(ApplicationCommandOptionStructure).optional(),
	/**
	 * Set of permissions represented as a bit set
	 */
	default_member_permissions: z.string().optional().nullable(),
	/**
	 * Deprecated (use contexts instead); Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
	 */
	dm_permission: z.boolean().optional().nullable(),
	/**
	 * Replaced by default_member_permissions and will be deprecated in the future. Indicates whether the command is enabled by default when the app is added to a guild. Defaults to true
	 */
	default_permission: z.boolean().optional(),
	/**
	 * Installation context(s) where the command is available
	 */
	integration_types: z.array(InteractionTypesEnum).optional(),
	/**
	 * Interaction context(s) where the command can be used
	 */
	contexts: z.array(InteractionContextTypesEnum).optional(),
	/**
	 * Type of command, defaults 1 if not set
	 */
	type: ApplicationCommandTypesEnum.optional(),
	/**
	 * Indicates whether the command is age-restricted
	 */
	nsfw: z.boolean().optional(),
});

export type BulkOverwriteGuildApplicationCommandsJsonInfer = z.infer<typeof BulkOverwriteGuildApplicationCommandsJson>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands}
 */
export function BulkOverwriteGuildApplicationCommands(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, data: BulkOverwriteGuildApplicationCommandsJsonInfer): RestMakeRequestOptions<ApplicationCommandStructureInfer[]> {
	return {
		method: "PUT",
		path: `/applications/${Snowflake.parse(applicationId)}/guilds/${Snowflake.parse(guildId)}/commands`,
		body: JSON.stringify(BulkOverwriteGuildApplicationCommandsJson.parse(data)),
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
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions-json-params}
 */
export const EditApplicationCommandPermissionsJson = z.object({
	/**
	 * Array of application command permissions. Permissions for the command in the guild
	 */
	permissions: z.array(ApplicationCommandPermissionsStructure),
});

export type EditApplicationCommandPermissionsJsonInfer = z.infer<typeof EditApplicationCommandPermissionsJson>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions}
 */
export function EditApplicationCommandPermissions(applicationId: SnowflakeInfer, guildId: SnowflakeInfer, commandId: SnowflakeInfer, data: EditApplicationCommandPermissionsJsonInfer): RestMakeRequestOptions<void> {
	return {
		method: "PUT",
		path: `/applications/${Snowflake.parse(applicationId)}/guilds/${Snowflake.parse(guildId)}/commands/${Snowflake.parse(commandId)}/permissions`,
		body: JSON.stringify(EditApplicationCommandPermissionsJson.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
 */
// TODO
