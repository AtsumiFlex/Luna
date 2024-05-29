import { z } from "zod";
import type { IntegerInfer } from "../globals/formats";
import { Integer, Snowflake } from "../globals/formats";
import { LocalesEnum } from "../globals/locales";
import { ApplicationIntegrationTypesEnum } from "./applications";
import type { ChannelTypes } from "./channels";
import {
	AllowedMentionsStructure,
	AttachmentStructure,
	ChannelStructure,
	ChannelTypesEnum,
	EmbedStructure,
	MessageFlagsEnum,
	MessageStructure,
} from "./channels";
import { EmojiStructure } from "./emojis";
import { EntitlementStructure } from "./entitlements";
import { GuildMemberStructure, GuildStructure } from "./guilds";
import { PollStructure } from "./polls";
import { RoleStructure } from "./roles";
import { UserStructure } from "./users";

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-types}
 */
export enum ComponentTypes {
	/**
	 * Container for other components
	 */
	ActionRow = 1,
	/**
	 * Button object
	 */
	Button = 2,
	/**
	 * Select menu for picking from defined text options
	 */
	Select = 3,
	/**
	 * Text input object
	 */
	TextInput = 4,
	/**
	 * Select menu for users
	 */
	UserSelect = 5,
	/**
	 * Select menu for roles
	 */
	RoleSelect = 6,
	/**
	 * Select menu for mentionables (users and roles)
	 */
	MentionableSelect = 7,
	/**
	 * Select menu for channels
	 */
	ChannelSelect = 8,
}

export const ComponentTypesEnum = z.nativeEnum(ComponentTypes);

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type}
 */
export enum InteractionTypes {
	/**
	 * ACK a Ping
	 */
	Ping = 1,
	/**
	 * A command
	 */
	ApplicationCommand = 2,
	/**
	 * A component interaction
	 */
	MessageComponent = 3,
	/**
	 * An autocomplete interaction
	 */
	ApplicationCommandAutocomplete = 4,
	/**
	 * A modal submit interaction
	 */
	ModalSubmit = 5,
}

export const InteractionTypesEnum = z.nativeEnum(InteractionTypes);

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-styles}
 */
export enum TextInputStyles {
	/**
	 * Single-line input
	 */
	Short = 1,
	/**
	 * Multi-line input
	 */
	Paragraph = 2,
}

export const TextInputStylesEnum = z.nativeEnum(TextInputStyles);

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-structure}
 */
export const TextInputStructure = z.object({
	/**
	 * 4 for a text input
	 */
	type: z.literal(ComponentTypes.TextInput),
	/**
	 * Developer-defined identifier for the input; max 100 characters
	 */
	custom_id: z.string().max(100),
	/**
	 * The Text Input Style
	 */
	style: TextInputStylesEnum,
	/**
	 * Label for this component; max 45 characters
	 */
	label: z.string().max(45),
	/**
	 * Minimum input length for a text input; min 0, max 4000
	 */
	min_length: z.number().min(0).max(4_000).optional(),
	/**
	 * Maximum input length for a text input; min 1, max 4000
	 */
	max_length: z.number().min(1).max(4_000).optional(),
	/**
	 * Whether this component is required to be filled (defaults to true)
	 */
	required: z.boolean().optional(),
	/**
	 * Pre-filled value for this component; max 4000 characters
	 */
	value: z.string().max(4_000).optional(),
	/**
	 * Custom placeholder text if the input is empty; max 100 characters
	 */
	placeholder: z.string().max(100).optional(),
});

export type TextInputStructureInfer = z.infer<typeof TextInputStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-default-value-structure}
 */
export const SelectMenuDefaultValueStructure = z.object({
	/**
	 * ID of a user, role, or channel
	 */
	id: Snowflake,
	/**
	 * Type of value that id represents. Either "user", "role", or "channel"
	 */
	type: z.union([z.literal("user"), z.literal("role"), z.literal("channel")]),
});

export type SelectMenuDefaultValueStructureInfer = z.infer<typeof SelectMenuDefaultValueStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure}
 */
export const SelectMenuOptionStructure = z.object({
	/**
	 * User-facing name of the option; max 100 characters
	 */
	label: z.string().max(100),
	/**
	 * Dev-defined value of the option; max 100 characters
	 */
	value: z.string().max(100),
	/**
	 * Additional description of the option; max 100 characters
	 */
	description: z.string().max(100).optional(),
	/**
	 * Partial emoji object
	 */
	emoji: EmojiStructure.pick({
		id: true,
		name: true,
		animated: true,
	}).optional(),
	/**
	 * Will show this option as selected by default
	 */
	default: z.boolean().optional(),
});

export type SelectMenuOptionStructureInfer = z.infer<typeof SelectMenuOptionStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure}
 */
export const SelectMenuStructure = z.object({
	/**
	 * Type of select menu component (text: 3, user: 5, role: 6, mentionable: 7, channels: 8)
	 */
	type: z.union([z.literal(ComponentTypes.Select), z.literal(ComponentTypes.UserSelect), z.literal(ComponentTypes.RoleSelect), z.literal(ComponentTypes.MentionableSelect), z.literal(ComponentTypes.ChannelSelect)]),
	/**
	 * ID for the select menu; max 100 characters
	 */
	custom_id: z.string().max(100),
	/**
	 * Specified choices in a select menu (only required and available for string selects (type 3); max 25
	 */
	options: z.array(SelectMenuOptionStructure).optional(),
	/**
	 * List of channel types to include in the channel select component (type 8)
	 */
	channel_types: z.array(ChannelTypesEnum).optional(),
	/**
	 * Placeholder text if nothing is selected; max 150 characters
	 */
	placeholder: z.string().max(150).optional(),
	/**
	 * List of default values for auto-populated select menu components; number of default values must be in the range defined by min_values and max_values
	 */
	default_values: z.array(SelectMenuDefaultValueStructure).optional(),
	/**
	 * Minimum number of items that must be chosen (defaults to 1); min 0, max 25
	 */
	min_values: z.number().min(0).max(25).optional(),
	/**
	 * Maximum number of items that can be chosen (defaults to 1); max 25
	 */
	max_values: z.number().max(25).optional(),
	/**
	 * Whether select menu is disabled (defaults to false)
	 */
	disabled: z.boolean().optional(),
});

export type SelectMenuStructureInfer = z.infer<typeof SelectMenuStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#button-object-button-styles}
 */
export enum ButtonStyles {
	/**
	 * Blurple button, requires custom_id
	 */
	Primary = 1,
	/**
	 * Grey button, requires custom_id
	 */
	Secondary = 2,
	/**
	 * Green button, requires custom_id
	 */
	Success = 3,
	/**
	 * Red button, requires custom_id
	 */
	Danger = 4,
	/**
	 * Grey button, requires url
	 */
	Link = 5,
}

export const ButtonStylesEnum = z.nativeEnum(ButtonStyles);

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#button-object-button-structure}
 */
export const ButtonStructure = z.object({
	/**
	 * 2 for a button
	 */
	type: z.literal(ComponentTypes.Button),
	/**
	 * A button style
	 */
	style: ButtonStylesEnum,
	/**
	 * Text that appears on the button; max 80 characters
	 */
	label: z.string().max(80).optional(),
	/**
	 * Partial emoji object
	 */
	emoji: EmojiStructure.pick({
		id: true,
		name: true,
		animated: true,
	}).optional(),
	/**
	 * Developer-defined identifier for the button; max 100 characters
	 */
	custom_id: z.string().max(100).optional(),
	/**
	 * URL for link-style buttons
	 */
	url: z.string().optional(),
	/**
	 * Whether the button is disabled (defaults to false)
	 */
	disabled: z.boolean().optional(),
});

export type ButtonStructureInfer = z.infer<typeof ButtonStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type}
 */
export enum ApplicationCommandPermissionType {
	Role = 1,
	User = 2,
	Channel = 3,
}

export const ApplicationCommandPermissionTypeEnum = z.nativeEnum(ApplicationCommandPermissionType);

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure}
 */
export const ApplicationCommandPermissionsStructure = z.object({
	/**
	 * ID of the role, user, or channel. It can also be a permission constant
	 */
	id: Snowflake,
	/**
	 * role (1), user (2), or channel (3)
	 */
	type: ApplicationCommandPermissionTypeEnum,
	/**
	 * true to allow, false, to disallow
	 */
	permission: z.boolean(),
});

export type ApplicationCommandPermissionsStructureInfer = z.infer<typeof ApplicationCommandPermissionsStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure}
 */
export const GuildApplicationCommandPermissionsStructure = z.object({
	/**
	 * ID of the command or the application ID
	 */
	id: Snowflake,
	/**
	 * ID of the application the command belongs to
	 */
	application_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Permissions for the command in the guild, max of 100
	 */
	permissions: z.array(ApplicationCommandPermissionsStructure),
});

export type GuildApplicationCommandPermissionsStructureInfer = z.infer<typeof GuildApplicationCommandPermissionsStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure}
 */
export const ApplicationCommandOptionChoiceStructure = z.object({
	/**
	 * 1-100 character choice name
	 */
	name: z.string().min(1).max(100),
	/**
	 * Localization dictionary for the name field. Values follow the same restrictions as name
	 */
	name_localizations: z.record(LocalesEnum, z.string().min(1).max(100)).optional(),
	/**
	 * Value for the choice, up to 100 characters if string
	 */
	value: z.union([z.string(), Integer]),
});

export type ApplicationCommandOptionChoiceStructureInfer = z.infer<typeof ApplicationCommandOptionChoiceStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type}
 */
export enum ApplicationCommandOptionType {
	SubCommand = 1,
	SubCommandGroup = 2,
	String = 3,
	/**
	 * Any integer between -2^53 and 2^53
	 */
	Integer = 4,
	Boolean = 5,
	User = 6,
	/**
	 * Includes all channel types + categories
	 */
	Channel = 7,
	Role = 8,
	/**
	 * Includes users and roles
	 */
	Mentionable = 9,
	/**
	 * Any double between -2^53 and 2^53
	 */
	Number = 10,
	/**
	 * Attachment object
	 */
	Attachment = 11,
}

export const ApplicationCommandOptionTypeEnum = z.nativeEnum(ApplicationCommandOptionType);

export type ApplicationCommandOptionStructureInfer = {
	autocomplete?: boolean;
	channel_types?: ChannelTypes[];
	choices?: ApplicationCommandOptionChoiceStructureInfer[];
	description: string;
	max_length?: IntegerInfer;
	max_value?: IntegerInfer;
	min_length?: IntegerInfer;
	min_value?: IntegerInfer;
	name: string;
	options?: ApplicationCommandOptionStructureInfer[];
	required?: boolean;
	type: ApplicationCommandOptionType;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure}
 */
export const ApplicationCommandOptionStructure: z.ZodType<ApplicationCommandOptionStructureInfer> = z.object({
	/**
	 * Type of option
	 */
	type: ApplicationCommandOptionTypeEnum,
	/**
	 * 1-32 character name
	 */
	name: z.string().min(1).max(32),
	/**
	 * 1-100 character description
	 */
	description: z.string().min(1).max(100),
	/**
	 * Whether the parameter is required or optional, default false
	 */
	required: z.boolean().optional(),
	/**
	 * Choices for the user to pick from, max 25
	 */
	choices: z.array(ApplicationCommandOptionChoiceStructure).optional(),
	/**
	 * If the option is a subcommand or subcommand group type, these nested options will be the parameters or subcommands respectively; up to 25
	 */
	options: z.lazy(() => z.array(ApplicationCommandOptionStructure)),
	/**
	 * The channels shown will be restricted to these types
	 */
	channel_types: z.array(ChannelTypesEnum).optional(),
	/**
	 * The minimum value permitted
	 */
	min_value: Integer.optional(),
	/**
	 * The maximum value permitted
	 */
	max_value: Integer.optional(),
	/**
	 * The minimum allowed length (minimum of 0, maximum of 6000)
	 */
	min_length: Integer.min(0).max(6_000).optional(),
	/**
	 * The maximum allowed length (minimum of 1, maximum of 6000)
	 */
	max_length: Integer.min(1).max(6_000).optional(),
	/**
	 * If autocomplete interactions are enabled for this option
	 */
	autocomplete: z.boolean().optional(),
});

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types}
 */
export enum ApplicationCommandTypes {
	/**
	 * Slash commands; a text-based command that shows up when a user types /
	 */
	ChatInput = 1,
	/**
	 * A UI-based command that shows up when you right click or tap on a user
	 */
	User = 2,
	/**
	 * A UI-based command that shows up when you right click or tap on a message
	 */
	Message = 3,
}

export const ApplicationCommandTypesEnum = z.nativeEnum(ApplicationCommandTypes);

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure}
 */
export const ApplicationCommandStructure = z.object({
	/**
	 * Unique ID of command
	 */
	id: Snowflake,
	/**
	 * Type of command, defaults to 1
	 */
	type: ApplicationCommandTypesEnum.optional(),
	/**
	 * ID of the parent application
	 */
	application_id: Snowflake,
	/**
	 * Guild ID of the command, if not global
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Name of command, 1-32 characters
	 */
	name: z.string().min(1).max(32),
	/**
	 * Localization dictionary for name field. Values follow the same restrictions as name
	 */
	name_localizations: z.record(LocalesEnum, z.string().min(1).max(32)).optional().nullable(),
	/**
	 * Description for CHAT_INPUT commands, 1-100 characters. Empty string for USER and MESSAGE commands
	 */
	description: z.string().min(1).max(100),
	/**
	 * Localization dictionary for description field. Values follow the same restrictions as description
	 */
	description_localizations: z.record(LocalesEnum, z.string().min(1).max(100)).optional().nullable(),
	/**
	 * Parameters for the command, max of 25
	 */
	options: z.array(ApplicationCommandOptionStructure).optional(),
	/**
	 * Set of permissions represented as a bit set
	 */
	default_member_permissions: z.string().nullable(),
	/**
	 * Deprecated (use contexts instead); Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible
	 */
	dm_permission: z.boolean().optional(),
	/**
	 * Not recommended for use as field will soon be deprecated. Indicates whether the command is enabled by default when the app is added to a guild, defaults to true
	 */
	default_permission: z.boolean().optional(),
	/**
	 * Indicates whether the command is age-restricted, defaults to false
	 */
	nsfw: z.boolean().optional(),
	/**
	 * Installation context(s) where the command is available, only for globally-scoped commands. Defaults to GUILD_INSTALL (0)
	 */
	integration_types: z.array(z.string()).optional(),
	/**
	 * Interaction context(s) where the command can be used, only for globally-scoped commands. By default, all interaction context types included for new commands
	 */
	contexts: z.array(z.string()).optional(),
	/**
	 * Autoincrementing version identifier updated during substantial record changes
	 */
	version: Snowflake,
});

export type ApplicationCommandStructureInfer = z.infer<typeof ApplicationCommandStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal}
 */
export const ModalComponentStructure = z.object({
	/**
	 * Developer-defined identifier for the modal; max 100 characters
	 */
	custom_id: z.string().max(100),
	/**
	 * Title of the popup modal; max 45 characters
	 */
	title: z.string().max(45),
	/**
	 * Components that make up the modal
	 */
	components: z.array(z.union([ButtonStructure, SelectMenuStructure, TextInputStructure])).min(1).max(5),
});

export type ModalComponentStructureInfer = z.infer<typeof ModalComponentStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete}
 */
export const AutocompleteComponentStructure = z.object({
	/**
	 * Autocomplete choices (max of 25 choices)
	 */
	choices: z.array(ApplicationCommandOptionChoiceStructure).max(25),
});

export type AutocompleteComponentStructureInfer = z.infer<typeof AutocompleteComponentStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-data-structure}
 */
export const InteractionCallbackDataStructure = z.object({
	/**
	 * Is the response TTS
	 */
	tts: z.boolean().optional(),
	/**
	 * Message content
	 */
	content: z.string().optional(),
	/**
	 * Supports up to 10 embeds
	 */
	embeds: z.array(EmbedStructure).max(10).optional(),
	/**
	 * Allowed mentions object
	 */
	allowed_mentions: AllowedMentionsStructure.optional(),
	/**
	 * Message flags combined as a bitfield (only SUPPRESS_EMBEDS, EPHEMERAL, and SUPPRESS_NOTIFICATIONS can be set)
	 */
	flags: z.union([MessageFlagsEnum, z.bigint()]).optional(),
	/**
	 * Message components
	 */
	components: z.array(z.union([ButtonStructure, SelectMenuStructure, TextInputStructure])).optional(),
	/**
	 * Attachment objects with filename and description
	 */
	attachments: z.array(AttachmentStructure.partial()).optional(),
	/**
	 * A poll!
	 */
	poll: PollStructure.optional(),
});

export type InteractionCallbackDataStructureInfer = z.infer<typeof InteractionCallbackDataStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type}
 */
/**
 * NAME	VALUE	DESCRIPTION
 * PONG	1	ACK a Ping
 * CHANNEL_MESSAGE_WITH_SOURCE	4	respond to an interaction with a message
 * DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE	5	ACK an interaction and edit a response later, the user sees a loading state
 * DEFERRED_UPDATE_MESSAGE*	6	for components, ACK an interaction and edit the original message later; the user does not see a loading state
 * UPDATE_MESSAGE*	7	for components, edit the message the component was attached to
 * APPLICATION_COMMAND_AUTOCOMPLETE_RESULT	8	respond to an autocomplete interaction with suggested choices
 * MODAL**	9	respond to an interaction with a popup modal
 * PREMIUM_REQUIRED***	10	respond to an interaction with an upgrade button, only available for apps with monetization enabled
 */
export enum InteractionCallbackType {
	/**
	 * ACK a Ping
	 */
	Pong = 1,
	/**
	 * respond to an interaction with a message
	 */
	ChannelMessageWithSource = 4,
	/**
	 * ACK an interaction and edit a response later, the user sees a loading state
	 */
	DeferredChannelMessageWithSource = 5,
	/**
	 * for components, ACK an interaction and edit the original message later; the user does not see a loading state
	 */
	DeferredUpdateMessage = 6,
	/**
	 * for components, edit the message the component was attached to
	 */
	UpdateMessage = 7,
	/**
	 * respond to an autocomplete interaction with suggested choices
	 */
	ApplicationCommandAutocompleteResult = 8,
	/**
	 * respond to an interaction with a popup modal
	 */
	Modal = 9,
	/**
	 * respond to an interaction with an upgrade button, only available for apps with monetization enabled
	 */
	PremiumRequired = 10,
}

export const InteractionCallbackTypeEnum = z.nativeEnum(InteractionCallbackType);

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure}
 */
export const InteractionResponseStructure = z.object({
	/**
	 * the type of response
	 */
	type: InteractionCallbackTypeEnum,
	/**
	 * an optional response message
	 */
	data: InteractionCallbackDataStructure.optional(),
});

export type InteractionResponseStructureInfer = z.infer<typeof InteractionResponseStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object-message-interaction-structure}
 */
export const MessageInteractionStructure = z.object({
	/**
	 * ID of the interaction
	 */
	id: Snowflake,
	/**
	 * Type of interaction
	 */
	type: InteractionTypesEnum,
	/**
	 * Name of the application command, including subcommands and subcommand groups
	 */
	name: z.string(),
	/**
	 * User who invoked the interaction
	 */
	user: UserStructure,
	/**
	 * Member who invoked the interaction in the guild
	 */
	member: GuildMemberStructure.partial().optional(),
});

export type MessageInteractionStructureInfer = z.infer<typeof MessageInteractionStructure>;

export type ApplicationCommandInteractionDataOptionStructureInfer = {
	focused?: boolean;
	name: string;
	options?: ApplicationCommandInteractionDataOptionStructureInfer[];
	type: ApplicationCommandOptionType;
	value?: boolean | number | string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-interaction-data-option-structure}
 */
export const ApplicationCommandInteractionDataOptionStructure: z.ZodType<ApplicationCommandInteractionDataOptionStructureInfer> = z.object({
	/**
	 * Name of the parameter
	 */
	name: z.string(),
	/**
	 * Value of application command option type
	 */
	type: ApplicationCommandOptionTypeEnum,
	/**
	 * Value of the option resulting from user input
	 */
	value: z.union([z.string(), Integer, z.boolean()]).optional(),
	/**
	 * Present if this option is a group or subcommand
	 */
	options: z.array(z.lazy(() => ApplicationCommandInteractionDataOptionStructure)).optional(),
	/**
	 * true if this option is the currently focused option for autocomplete
	 */
	focused: z.boolean().optional(),
});

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure}
 */
export const ResolvedDataStructure = z.object({
	/**
	 * The ids and User objects
	 */
	users: z.map(Snowflake, UserStructure).optional(),
	/**
	 * The ids and partial Member objects
	 */
	members: z.map(Snowflake, GuildMemberStructure.partial()).optional(),
	/**
	 * The ids and Role objects
	 */
	roles: z.map(Snowflake, RoleStructure).optional(),
	/**
	 * The ids and partial Channel objects
	 */
	channels: z.map(Snowflake, ChannelStructure.partial()).optional(),
	/**
	 * The ids and partial Message objects
	 */
	messages: z.map(Snowflake, MessageStructure.partial()).optional(),
	/**
	 * The ids and attachment objects
	 */
	attachments: z.map(Snowflake, AttachmentStructure).optional(),
});

export type ResolvedDataStructureInfer = z.infer<typeof ResolvedDataStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-modal-submit-data-structure}
 */
export const ModalSubmitDataStructure = z.object({
	/**
	 * The custom_id of the modal
	 */
	custom_id: z.string(),
	/**
	 * TODO: Array of message components the values submitted by the user
	 */
	components: z.array(z.unknown()),
});

export type ModalSubmitDataStructureInfer = z.infer<typeof ModalSubmitDataStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure}
 */
export const MessageComponentDataStructure = z.object({
	/**
	 * The custom_id of the component
	 */
	custom_id: z.string(),
	/**
	 * The type of the component
	 */
	component_type: ComponentTypesEnum,
	/**
	 * Values the user selected in a select menu component
	 */
	values: z.array(SelectMenuOptionStructure).optional(),
	/**
	 * Resolved entities from selected options
	 */
	resolved: ResolvedDataStructure.optional(),
});

export type MessageComponentDataStructureInfer = z.infer<typeof MessageComponentDataStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure}
 */
export const ApplicationCommandInteractionDataStructure = z.object({
	/**
	 * the ID of the invoked command
	 */
	id: Snowflake,
	/**
	 * the name of the invoked command
	 */
	name: z.string(),
	/**
	 * the type of the invoked command
	 */
	type: ApplicationCommandTypesEnum,
	/**
	 * converted users + roles + channels + attachments
	 */
	resolved: ResolvedDataStructure.optional(),
	/**
	 * the params + values from the user
	 */
	options: z.array(ApplicationCommandInteractionDataOptionStructure).optional(),
	/**
	 * the id of the guild the command is registered to
	 */
	guild_id: Snowflake.optional(),
	/**
	 * id of the user or message targeted by a user or message command
	 */
	target_id: Snowflake.optional(),
});

export type ApplicationCommandInteractionDataStructureInfer = z.infer<typeof ApplicationCommandInteractionDataStructure>;

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-context-types}
 */
export enum InteractionContextTypes {
	/**
	 * Interaction can be used within servers
	 */
	Guild = 0,
	/**
	 * Interaction can be used within DMs with the app's bot user
	 */
	BotDM = 1,
	/**
	 * Interaction can be used within Group DMs and DMs other than the app's bot user
	 */
	PrivateChannel = 2,
}

export const InteractionContextTypesEnum = z.nativeEnum(InteractionContextTypes);

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure}
 */
export const InteractionStructure = z.object({
	/**
	 * ID of the interaction
	 */
	id: Snowflake,
	/**
	 * ID of the application this interaction is for
	 */
	application_id: Snowflake,
	/**
	 * Type of interaction
	 */
	type: InteractionTypesEnum,
	/**
	 * TODO: Interaction data payload
	 */
	data: z.union([ApplicationCommandInteractionDataStructure, ModalSubmitDataStructure, MessageComponentDataStructure, AutocompleteComponentStructure]).optional(),
	/**
	 * Guild that the interaction was sent from
	 */
	guild: GuildStructure.partial().optional(),
	/**
	 * Guild that the interaction was sent from
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Channel that the interaction was sent from
	 */
	channel: ChannelStructure.partial().optional(),
	/**
	 * Channel that the interaction was sent from
	 */
	channel_id: Snowflake.optional(),
	/**
	 * Guild member data for the invoking user, including permissions
	 */
	member: GuildMemberStructure.partial().optional(),
	/**
	 * User object for the invoking user, if invoked in a DM
	 */
	user: UserStructure.optional(),
	/**
	 * Continuation token for responding to the interaction
	 */
	token: z.string(),
	/**
	 * Read-only property, always 1
	 */
	version: Integer,
	/**
	 * For components, the message they were attached to
	 */
	message: MessageStructure.optional(),
	/**
	 * Bitwise set of permissions the app has in the source location of the interaction
	 */
	app_permissions: z.string().optional(),
	/**
	 * Selected language of the invoking user
	 */
	locale: LocalesEnum.optional(),
	/**
	 * Guild's preferred locale, if invoked in a guild
	 */
	guild_locale: LocalesEnum.optional(),
	/**
	 * For monetized apps, any entitlements for the invoking user, representing access to premium SKUs
	 */
	entitlements: z.array(EntitlementStructure).optional(),
	/**
	 * Mapping of installation contexts that the interaction was authorized for to related user or guild IDs. See Authorizing Integration Owners Object for details
	 */
	authorizing_integration_owners: z.record(z.string(), ApplicationIntegrationTypesEnum).optional(),
	/**
	 * Context where the interaction was triggered from
	 */
	context: InteractionContextTypesEnum.optional(),
});

export type InteractionStructureInfer = z.infer<typeof InteractionStructure>;
