import type { Integer, Snowflake } from "../globals/formats";
import type { Locales } from "../globals/locales";
import type { ApplicationIntegrationTypes } from "./applications";
import type {
	AllowedMentionsStructure,
	AttachmentStructure,
	ChannelStructure,
	ChannelTypes,
	EmbedStructure,
	MessageFlags,
	MessageStructure,
} from "./channels";
import type { EmojiStructure } from "./emojis";
import type { EntitlementStructure } from "./entitlements";
import type { GuildMemberStructure, GuildStructure } from "./guilds";
import type { PollCreateRequestStructure } from "./polls";
import type { RoleStructure } from "./roles";
import type { UserStructure } from "./users";

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

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#text-input-object-text-input-structure}
 */
export type TextInputStructure = {
	/**
	 * Developer-defined identifier for the input; max 100 characters
	 */
	custom_id: string;
	/**
	 * Label for this component; max 45 characters
	 */
	label: string;
	/**
	 * Maximum input length for a text input; min 1, max 4000
	 */
	max_length?: Integer;
	/**
	 * Minimum input length for a text input; min 0, max 4000
	 */
	min_length?: Integer;
	/**
	 * Custom placeholder text if the input is empty; max 100 characters
	 */
	placeholder?: string;
	/**
	 * Whether this component is required to be filled (defaults to true)
	 */
	required?: boolean;
	/**
	 * The Text Input Style
	 */
	style: TextInputStyles;
	/**
	 * 4 for a text input
	 */
	type: ComponentTypes.TextInput;
	/**
	 * Pre-filled value for this component; max 4000 characters
	 */
	value?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-default-value-structure}
 */
export type SelectMenuDefaultValue = {
	/**
	 * ID of a user, role, or channel
	 */
	id: Snowflake;
	/**
	 * Type of value that id represents. Either "user", "role", or "channel"
	 */
	type: "channel" | "role" | "user";
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-option-structure}
 */
export type SelectMenuOptionStructure = {
	/**
	 * Will show this option as selected by default
	 */
	default?: boolean;
	/**
	 * Additional description of the option; max 100 characters
	 */
	description?: string;
	/**
	 * Partial emoji object
	 */
	emoji?: Pick<EmojiStructure, "animated" | "id" | "name">;
	/**
	 * User-facing name of the option; max 100 characters
	 */
	label: string;
	/**
	 * Dev-defined value of the option; max 100 characters
	 */
	value: string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#select-menu-object-select-menu-structure}
 */
export type SelectMenuStructure = {
	/**
	 * List of channel types to include in the channel select component (type 8)
	 */
	channel_types?: ChannelTypes[];
	/**
	 * ID for the select menu; max 100 characters
	 */
	custom_id: string;
	/**
	 * List of default values for auto-populated select menu components; number of default values must be in the range defined by min_values and max_values
	 */
	default_values?: SelectMenuDefaultValue[];
	/**
	 * Whether select menu is disabled (defaults to false)
	 */
	disabled?: boolean;
	/**
	 * Maximum number of items that can be chosen (defaults to 1); max 25
	 */
	max_values?: Integer;
	/**
	 * Minimum number of items that must be chosen (defaults to 1); min 0, max 25
	 */
	min_values?: Integer;
	/**
	 * Specified choices in a select menu (only required and available for string selects (type 3); max 25
	 */
	options?: SelectMenuOptionStructure[];
	/**
	 * Placeholder text if nothing is selected; max 150 characters
	 */
	placeholder?: string;
	/**
	 * Type of select menu component (text: 3, user: 5, role: 6, mentionable: 7, channels: 8)
	 */
	type: ComponentTypes.ChannelSelect | ComponentTypes.MentionableSelect | ComponentTypes.RoleSelect | ComponentTypes.SelectMenu | ComponentTypes.UserSelect;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#button-object-button-styles}
 */
export enum ButtonStyles {
	Primary = 1,
	Secondary = 2,
	Success = 3,
	Danger = 4,
	Link = 5,
	Premium = 6,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#button-object-button-structure}
 */
/**
 * type	integer	2 for a button
 * style	integer	A button style
 * label?	string	Text that appears on the button; max 80 characters
 * emoji?	partial emoji	name, id, and animated
 * custom_id?	string	Developer-defined identifier for the button; max 100 characters
 * sku_id?	snowflake	Identifier for a purchasable SKU, only available when using premium-style buttons
 * url?	string	URL for link-style buttons
 * disabled?	boolean	Whether the button is disabled (defaults to false)
 */
export type ButtonStructure = {
	/**
	 * Developer-defined identifier for the button; max 100 characters
	 */
	custom_id?: string;
	/**
	 * Whether the button is disabled (defaults to false)
	 */
	disabled?: boolean;
	/**
	 * Partial emoji object
	 */
	emoji?: Pick<EmojiStructure, "animated" | "id" | "name">;
	/**
	 * Text that appears on the button; max 80 characters
	 */
	label?: string;
	/**
	 * Identifier for a purchasable SKU, only available when using premium-style buttons
	 */
	sku_id?: Snowflake;
	/**
	 * A button style
	 */
	style: ButtonStyles;
	/**
	 * 2 for a button
	 */
	type: ComponentTypes.Button;
	/**
	 * URL for link-style buttons
	 */
	url?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/message-components#component-object-component-types}
 */
export enum ComponentTypes {
	ActionRow = 1,
	Button = 2,
	SelectMenu = 3,
	TextInput = 4,
	UserSelect = 5,
	RoleSelect = 6,
	MentionableSelect = 7,
	ChannelSelect = 8,
}

export type ComponentStructure = {
	components: (ButtonStructure | SelectMenuStructure | TextInputStructure)[];
	type: ComponentTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type}
 */
export enum ApplicationCommandPermissionTypes {
	Role = 1,
	User = 2,
	Channel = 3,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure}
 */
export type ApplicationCommandPermissionStructure = {
	/**
	 * ID of the role, user, or channel. It can also be a permission constant
	 */
	id: Snowflake;
	/**
	 * true to allow, false, to disallow
	 */
	permission: boolean;
	/**
	 * role (1), user (2), or channel (3)
	 */
	type: ApplicationCommandPermissionTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure}
 */
export type GuildApplicationCommandPermissionStructure = {
	/**
	 * ID of the application the command belongs to
	 */
	application_id: Snowflake;
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;
	/**
	 * ID of the command or the application ID
	 */
	id: Snowflake;
	/**
	 * Permissions for the command in the guild, max of 100
	 */
	permissions: ApplicationCommandPermissionStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-choice-structure}
 */
export type ApplicationCommandOptionChoiceStructure = {
	/**
	 * 1-100 character choice name
	 */
	name: string;
	/**
	 * Localization dictionary for the name field. Values follow the same restrictions as name
	 */
	name_localizations?: Record<keyof Locales, string>;
	/**
	 * Value for the choice, up to 100 characters if string
	 */
	value: Integer | string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type}
 */
export enum ApplicationCommandOptionTypes {
	SubCommand = 1,
	SubCommandGroup = 2,
	String = 3,
	Integer = 4,
	Boolean = 5,
	User = 6,
	Channel = 7,
	Role = 8,
	Mentionable = 9,
	Number = 10,
	Attachment = 11,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-structure}
 */
export type ApplicationCommandOptionStructure = {
	/**
	 * If autocomplete interactions are enabled for this option
	 */
	autocomplete?: boolean;
	/**
	 * The channels shown will be restricted to these types
	 */
	channel_types?: ChannelTypes[];
	/**
	 * Choices for the user to pick from, max 25
	 */
	choices?: ApplicationCommandOptionChoiceStructure[];
	/**
	 * 1-100 character description
	 */
	description: string;
	/**
	 * Localization dictionary for the description field. Values follow the same restrictions as description
	 */
	description_localizations?: Record<keyof Locales, string>;
	/**
	 * The maximum allowed length (minimum of 1, maximum of 6000)
	 */
	max_length?: Integer;
	/**
	 * The maximum value permitted
	 */
	max_value?: Integer;
	/**
	 * The minimum allowed length (minimum of 0, maximum of 6000)
	 */
	min_length?: Integer;
	/**
	 * The minimum value permitted
	 */
	min_value?: Integer;
	/**
	 * 1-32 character name
	 */
	name: string;
	/**
	 * Localization dictionary for the name field. Values follow the same restrictions as name
	 */
	name_localizations?: Record<keyof Locales, string>;
	/**
	 * If the option is a subcommand or subcommand group type, these nested options will be the parameters or subcommands respectively; up to 25
	 */
	options?: ApplicationCommandOptionStructure[];
	/**
	 * Whether the parameter is required or optional, default false
	 */
	required?: boolean;
	/**
	 * One of application command option type
	 */
	type: ApplicationCommandOptionTypes;
};

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

/**
 * @see {@link https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure}
 */
export type ApplicationCommandStructure = {
	/**
	 * ID of the parent application
	 */
	application_id: Snowflake;
	/**
	 * In preview. Interaction context(s) where the command can be used, only for globally-scoped commands. By default, all interaction context types included for new commands.
	 */
	contexts?: InteractionContextTypes[];
	/**
	 * Set of permissions represented as a bit set
	 */
	default_member_permissions: string | null;
	/**
	 * Not recommended for use as field will soon be deprecated. Indicates whether the command is enabled by default when the app is added to a guild, defaults to true
	 */
	default_permission?: boolean | null;
	/**
	 * Description for CHAT_INPUT commands, 1-100 characters. Empty string for USER and MESSAGE commands
	 */
	description: string;
	/**
	 * Localization dictionary for description field. Values follow the same restrictions as description
	 */
	description_localizations?: Record<keyof Locales, string> | null;
	/**
	 * Deprecated (use contexts instead); Indicates whether the command is available in DMs with the app, only for globally-scoped commands. By default, commands are visible.
	 *
	 * @deprecated
	 */
	dm_permission?: boolean;
	/**
	 * Guild ID of the command, if not global
	 */
	guild_id?: Snowflake;
	/**
	 * Unique ID of command
	 */
	id: Snowflake;
	/**
	 * In preview. Installation context(s) where the command is available, only for globally-scoped commands. Defaults to GUILD_INSTALL (0)
	 */
	integration_types?: ApplicationIntegrationTypes[];
	/**
	 * Name of command, 1-32 characters
	 */
	name: string;
	/**
	 * Localization dictionary for name field. Values follow the same restrictions as name
	 */
	name_localizations?: Record<keyof Locales, string> | null;
	/**
	 * Indicates whether the command is age-restricted, defaults to false
	 */
	nsfw?: boolean;
	/**
	 * Parameters for the command, max of 25
	 */
	options?: ApplicationCommandOptionStructure[];
	/**
	 * Type of command, defaults to 1
	 */
	type?: ApplicationCommandTypes;
	/**
	 * Autoincrementing version identifier updated during substantial record changes
	 */
	version: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-modal}
 */
export type ModalStructure = {
	/**
	 * Between 1 and 5 (inclusive) components that make up the modal
	 */
	components: ComponentStructure[];
	/**
	 * A developer-defined identifier for the modal, max 100 characters
	 */
	custom_id: string;
	/**
	 * The title of the popup modal, max 45 characters
	 */
	title: string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-autocomplete}
 */
export type AutocompleteStructure = {
	/**
	 * autocomplete choices (max of 25 choices)
	 */
	choices: ApplicationCommandOptionChoiceStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-messages}
 */
export type InteractionResponseMessageStructure = {
	/**
	 * Allowed mentions object
	 */
	allowed_mentions?: AllowedMentionsStructure;
	/**
	 * Attachment objects with filename and description
	 */
	attachments?: Partial<AttachmentStructure>[];
	/**
	 * Message components
	 */
	components?: ComponentStructure[];
	/**
	 * Message content
	 */
	content?: string;
	/**
	 * Supports up to 10 embeds
	 */
	embeds?: EmbedStructure[];
	/**
	 * Message flags combined as a bitfield (only SUPPRESS_EMBEDS, EPHEMERAL, and SUPPRESS_NOTIFICATIONS can be set)
	 */
	flags?: MessageFlags.Ephemeral | MessageFlags.SuppressEmbeds | MessageFlags.SuppressNotifications | bigint;
	/**
	 * A poll!
	 */
	poll?: PollCreateRequestStructure;
	/**
	 * Is the response TTS
	 */
	tts?: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type}
 */
export enum InteractionCallbackTypes {
	Pong = 1,
	ChannelMessageWithSource = 4,
	DeferredChannelMessageWithSource = 5,
	DeferredUpdateMessage = 6,
	UpdateMessage = 7,
	ApplicationCommandAutocompleteResult = 8,
	Modal = 9,
	PremiumRequired = 10,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-response-structure}
 */
export type InteractionResponseStructure = {
	/**
	 * An optional response message
	 */
	data?: InteractionResponseMessageStructure;
	/**
	 * The type of response
	 */
	type: InteractionCallbackTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#message-interaction-object-message-interaction-structure}
 */
export type MessageInteractionStructure = {
	/**
	 * ID of the interaction
	 */
	id: Snowflake;
	/**
	 * Member who invoked the interaction in the guild
	 */
	member?: Partial<GuildMemberStructure>;
	/**
	 * Name of the application command, including subcommands and subcommand groups
	 */
	name: string;
	/**
	 * Type of interaction
	 */
	type: InteractionTypes;
	/**
	 * User who invoked the interaction
	 */
	user: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-interaction-data-option-structure}
 */
export type ApplicationCommandInteractionDataOptionStructure = {
	/**
	 * true if this option is the currently focused option for autocomplete
	 */
	focused?: boolean;
	/**
	 * Name of the parameter
	 */
	name: string;
	/**
	 * Present if this option is a group or subcommand
	 */
	options?: ApplicationCommandInteractionDataOptionStructure[];
	/**
	 * Value of application command option type
	 */
	type: ApplicationCommandOptionTypes;
	/**
	 * Value of the option resulting from user input
	 */
	value?: Integer | boolean | string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-resolved-data-structure}
 */
export type ResolvedDataStructure = {
	/**
	 * The ids and attachment objects
	 */
	attachments?: Map<Snowflake, AttachmentStructure>;
	/**
	 * The ids and partial Channel objects
	 */
	channels?: Map<Snowflake, Partial<ChannelStructure>>;
	/**
	 * The ids and partial Member objects
	 */
	members?: Map<Snowflake, Partial<GuildMemberStructure>>;
	/**
	 * The ids and partial Message objects
	 */
	messages?: Map<Snowflake, Partial<MessageStructure>>;
	/**
	 * The ids and Role objects
	 */
	roles?: Map<Snowflake, RoleStructure>;
	/**
	 * The ids and User objects
	 */
	users?: Map<Snowflake, UserStructure>;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-modal-submit-data-structure}
 */
export type ModalSubmitDataStructure = {
	/**
	 * The values submitted by the user
	 */
	components: ComponentStructure[];
	/**
	 * The custom_id of the modal
	 */
	custom_id: string;
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-message-component-data-structure}
 */
export type MessageComponentDataStructure = {
	/**
	 * The type of the component
	 */
	component_type: ComponentTypes;
	/**
	 * The custom_id of the component
	 */
	custom_id: string;
	/**
	 * Resolved entities from selected options
	 */
	resolved?: ResolvedDataStructure;
	/**
	 * Values the user selected in a select menu component
	 */
	values?: SelectMenuOptionStructure[];
};

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-application-command-data-structure}
 */
export type ApplicationCommandInteractionDataStructure = {
	/**
	 * The id of the guild the command is registered to
	 */
	guild_id?: Snowflake;
	/**
	 * The ID of the invoked command
	 */
	id: Snowflake;
	/**
	 * The name of the invoked command
	 */
	name: string;
	/**
	 * The params + values from the user
	 */
	options?: ApplicationCommandInteractionDataOptionStructure[];
	/**
	 * Converted users + roles + channels + attachments
	 */
	resolved?: Pick<ResolvedDataStructure, "attachments" | "channels" | "roles" | "users">;
	/**
	 * Id of the user or message targeted by a user or message command
	 */
	target_id?: Snowflake;
	/**
	 * The type of the invoked command
	 */
	type: ApplicationCommandTypes;
};

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

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type}
 */
export enum InteractionTypes {
	Ping = 1,
	ApplicationCommand = 2,
	MessageComponent = 3,
	ApplicationCommandAutocomplete = 4,
	ModalSubmit = 5,
}

/**
 * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure}
 */
export type InteractionStructure = {
	/**
	 * Bitwise set of permissions the app has in the source location of the interaction
	 */
	app_permissions?: string;
	/**
	 * ID of the application this interaction is for
	 */
	application_id: Snowflake;
	/**
	 * Mapping of installation contexts that the interaction was authorized for to related user or guild IDs
	 */
	authorizing_integration_owners?: Record<ApplicationIntegrationTypes, Snowflake>;
	/**
	 * Channel that the interaction was sent from
	 */
	channel?: Partial<ChannelStructure>;
	/**
	 * Channel that the interaction was sent from
	 */
	channel_id?: Snowflake;
	/**
	 * Context where the interaction was triggered from
	 */
	context?: InteractionContextTypes;
	/**
	 * Interaction data payload
	 */
	data?: ApplicationCommandInteractionDataStructure;
	/**
	 * For monetized apps, any entitlements for the invoking user, representing access to premium SKUs
	 */
	entitlements?: EntitlementStructure[];
	/**
	 * Guild that the interaction was sent from
	 */
	guild?: Partial<GuildStructure>;
	/**
	 * Guild that the interaction was sent from
	 */
	guild_id?: Snowflake;
	/**
	 * Guild's preferred locale, if invoked in a guild
	 */
	guild_locale?: keyof Locales;
	/**
	 * ID of the interaction
	 */
	id: Snowflake;
	/**
	 * Selected language of the invoking user
	 */
	locale?: keyof Locales;
	/**
	 * Guild member data for the invoking user, including permissions
	 */
	member?: GuildMemberStructure;
	/**
	 * For components, the message they were attached to
	 */
	message?: MessageStructure;
	/**
	 * Continuation token for responding to the interaction
	 */
	token: string;
	/**
	 * Type of interaction
	 */
	type: InteractionTypes;
	/**
	 * User object for the invoking user, if invoked in a DM
	 */
	user?: UserStructure;
	/**
	 * Read-only property, always 1
	 */
	version: Integer;
};
