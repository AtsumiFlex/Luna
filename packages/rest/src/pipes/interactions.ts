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
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-global-application-command-json-params}
 */
export const CreateGlobalApplicationCommandJSON = z.object({
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

export type CreateGlobalApplicationCommandJSONInfer = z.infer<typeof CreateGlobalApplicationCommandJSON>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command-json-params}
 */
export const EditGlobalApplicationCommandJSON = z.object({
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

export type EditGlobalApplicationCommandJSONInfer = z.infer<typeof EditGlobalApplicationCommandJSON>;

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
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command-json-params}
 */
export const CreateGuildApplicationCommandJSON = z.object({
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

export type CreateGuildApplicationCommandJSONInfer = z.infer<typeof CreateGuildApplicationCommandJSON>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command-json-params}
 */
export const EditGuildApplicationCommandJSON = z.object({
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

export type EditGuildApplicationCommandJSONInfer = z.infer<typeof EditGuildApplicationCommandJSON>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands}
 */
export const BulkOverwriteGuildApplicationCommandsJSON = z.object({
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

export type BulkOverwriteGuildApplicationCommandsJSONInfer = z.infer<typeof BulkOverwriteGuildApplicationCommandsJSON>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions-json-params}
 */
export const EditApplicationCommandPermissionsJSON = z.object({
	/**
	 * Array of application command permissions. Permissions for the command in the guild
	 */
	permissions: z.array(ApplicationCommandPermissionsStructure),
});

export type EditApplicationCommandPermissionsJSONInfer = z.infer<typeof EditApplicationCommandPermissionsJSON>;
