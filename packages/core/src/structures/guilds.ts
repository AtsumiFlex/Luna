import { z } from "zod";
import { Integer, Snowflake } from "../globals/formats";
import { LocalesEnum } from "../globals/locales";
import { Oauth2ScopesEnum } from "../libs/oauth2";
import { ChannelStructure } from "./channels";
import { EmojiStructure } from "./emojis";
import { RoleStructure } from "./roles";
import { StickerStructure } from "./stickers";
import { AvatarDecorationDataStructure, UserStructure } from "./users";

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-types}
 */
export enum GuildOnboardingPromptTypes {
	MultipleChoice = 0,
	Dropdown = 1,
}

export const GuildOnboardingPromptTypesEnum = z.nativeEnum(GuildOnboardingPromptTypes);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-mode}
 */
export enum GuildOnboardingModes {
	/**
	 * Counts only Default Channels towards constraints
	 */
	Default = 0,
	/**
	 * Counts Default Channels and Questions towards constraints
	 */
	Advanced = 1,
}

export const GuildOnboardingModesEnum = z.nativeEnum(GuildOnboardingModes);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-prompt-option-structure}
 */
export const GuildOnboardingPromptOptionStructure = z.object({
	/**
	 * ID of the prompt option
	 */
	id: z.string(),
	/**
	 * IDs for channels a member is added to when the option is selected
	 */
	channel_ids: z.array(Snowflake).optional(),
	/**
	 * IDs for roles assigned to a member when the option is selected
	 */
	role_ids: z.array(Snowflake).optional(),
	/**
	 * Emoji ID of the option
	 */
	emoji_id: Snowflake.optional(),
	/**
	 * Emoji name of the option
	 */
	emoji_name: z.string().optional(),
	/**
	 * Whether the emoji is animated
	 */
	emoji_animated: z.boolean().optional(),
	/**
	 * Title of the option
	 */
	title: z.string(),
	/**
	 * Description of the option
	 */
	description: z.string().nullable(),
});

export type GuildOnboardingPromptOptionStructureInfer = z.infer<typeof GuildOnboardingPromptOptionStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-onboarding-prompt-structure}
 */
export const GuildOnboardingPromptStructure = z.object({
	/**
	 * ID of the prompt
	 */
	id: z.string(),
	/**
	 * Type of prompt
	 */
	type: GuildOnboardingPromptTypesEnum,
	/**
	 * Options available within the prompt
	 */
	options: z.array(GuildOnboardingPromptOptionStructure),
	/**
	 * Title of the prompt
	 */
	title: z.string(),
	/**
	 * Indicates whether users are limited to selecting one option for the prompt
	 */
	single_select: z.boolean(),
	/**
	 * Indicates whether the prompt is required before a user completes the onboarding flow
	 */
	required: z.boolean(),
	/**
	 * Indicates whether the prompt is present in the onboarding flow. If false, the prompt will only appear in the Channels & Roles tab
	 */
	in_onboarding: z.boolean(),
});

export type GuildOnboardingPromptStructureInfer = z.infer<typeof GuildOnboardingPromptStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-onboarding-object-guild-onboarding-structure}
 */
export const GuildOnboardingStructure = z.object({
	/**
	 * ID of the guild this onboarding is part of
	 */
	guild_id: Snowflake,
	/**
	 * Prompts shown during onboarding and in customize community
	 */
	prompts: z.array(GuildOnboardingPromptStructure),
	/**
	 * Channel IDs that members get opted into automatically
	 */
	default_channel_ids: z.array(Snowflake),
	/**
	 * Whether onboarding is enabled in the guild
	 */
	enabled: z.boolean(),
	/**
	 * Current mode of onboarding
	 */
	mode: GuildOnboardingModesEnum,
});

export type GuildOnboardingStructureInfer = z.infer<typeof GuildOnboardingStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure}
 */
export const WelcomeScreenChannelStructure = z.object({
	/**
	 * The channel's id
	 */
	channel_id: Snowflake,
	/**
	 * The description shown for the channel
	 */
	description: z.string(),
	/**
	 * The emoji id, if the emoji is custom
	 */
	emoji_id: Snowflake.nullable(),
	/**
	 * The emoji name if custom, the unicode character if standard, or null if no emoji is set
	 */
	emoji_name: z.string().nullable(),
});

export type WelcomeScreenChannelStructureInfer = z.infer<typeof WelcomeScreenChannelStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure}
 */
export const WelcomeScreenStructure = z.object({
	/**
	 * The server description shown in the welcome screen
	 */
	description: z.string().nullable(),
	/**
	 * The channels shown in the welcome screen, up to 5
	 */
	welcome_channels: z.array(WelcomeScreenChannelStructure).max(5),
});

export type WelcomeScreenStructureInfer = z.infer<typeof WelcomeScreenStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#ban-object-ban-structure}
 */
export const BanStructure = z.object({
	/**
	 * The reason for the ban
	 */
	reason: z.string().nullable(),
	/**
	 * The banned user
	 */
	user: UserStructure,
});

export type BanStructureInfer = z.infer<typeof BanStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure}
 */
export const IntegrationApplicationStructure = z.object({
	/**
	 * The id of the app
	 */
	id: Snowflake,
	/**
	 * The name of the app
	 */
	name: z.string(),
	/**
	 * The icon hash of the app
	 */
	icon: z.string().nullable(),
	/**
	 * The description of the app
	 */
	description: z.string(),
	/**
	 * The bot associated with this application
	 */
	bot: UserStructure.optional(),
});

export type IntegrationApplicationStructureInfer = z.infer<typeof IntegrationApplicationStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure}
 */
export const IntegrationAccountStructure = z.object({
	/**
	 * ID of the account
	 */
	id: z.string(),
	/**
	 * Name of the account
	 */
	name: z.string(),
});

export type IntegrationAccountStructureInfer = z.infer<typeof IntegrationAccountStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors}
 */
export enum IntegrationExpireBehaviors {
	RemoveRole = 0,
	Kick = 1,
}

export const IntegrationExpireBehaviorsEnum = z.nativeEnum(IntegrationExpireBehaviors);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#integration-object-integration-structure}
 */
export const IntegrationStructure = z.object({
	/**
	 * Integration id
	 */
	id: Snowflake,
	/**
	 * Integration name
	 */
	name: z.string(),
	/**
	 * Integration type (twitch, youtube, discord, or guild_subscription)
	 */
	type: z.union([z.literal("twitch"), z.literal("youtube"), z.literal("discord"), z.literal("guild_subscription")]),
	/**
	 * Is this integration enabled
	 */
	enabled: z.boolean(),
	/**
	 * Is this integration syncing
	 */
	syncing: z.boolean(),
	/**
	 * ID that this integration uses for "subscribers"
	 */
	role_id: Snowflake.optional(),
	/**
	 * Whether emoticons should be synced for this integration (twitch only currently)
	 */
	enable_emoticons: z.boolean().optional(),
	/**
	 * The behavior of expiring subscribers
	 */
	expire_behavior: IntegrationExpireBehaviorsEnum.optional(),
	/**
	 * The grace period (in days) before expiring subscribers
	 */
	expire_grace_period: Integer.optional(),
	/**
	 * User for this integration
	 */
	user: UserStructure.optional(),
	/**
	 * Integration account information
	 */
	account: IntegrationAccountStructure,
	/**
	 * When this integration was last synced
	 */
	synced_at: z.string().optional(),
	/**
	 * How many subscribers this integration has
	 */
	subscriber_count: Integer.optional(),
	/**
	 * Has this integration been revoked
	 */
	revoked: z.boolean().optional(),
	/**
	 * The bot/OAuth2 application for discord integrations
	 */
	application: IntegrationApplicationStructure.optional(),
	/**
	 * The scopes the application has been authorized for
	 */
	scopes: z.array(Oauth2ScopesEnum).optional(),
});

export type IntegrationStructureInfer = z.infer<typeof IntegrationStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-flags}
 */
export enum GuildMemberFlags {
	/**
	 * Member has left and rejoined the guild
	 */
	DidRejoin = 1,
	/**
	 * Member has completed onboarding
	 */
	CompletedOnboarding = 2,
	/**
	 * Member is exempt from guild verification requirements
	 */
	BypassesVerification = 4,
	/**
	 * Member has started onboarding
	 */
	StartedOnboarding = 8,
}

export const GuildMemberFlagsEnum = z.nativeEnum(GuildMemberFlags);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-structure}
 */
export const GuildMemberStructure = z.object({
	/**
	 * The user this guild member represents
	 */
	user: UserStructure.optional(),
	/**
	 * This user's guild nickname
	 */
	nick: z.string().optional().nullable(),
	/**
	 * The member's guild avatar hash
	 */
	avatar: z.string().optional().nullable(),
	/**
	 * Array of role object ids
	 */
	roles: z.array(Snowflake),
	/**
	 * When the user joined the guild
	 */
	joined_at: z.string(),
	/**
	 * When the user started boosting the guild
	 */
	premium_since: z.string().optional().nullable(),
	/**
	 * Whether the user is deafened in voice channels
	 */
	deaf: z.boolean(),
	/**
	 * Whether the user is muted in voice channels
	 */
	mute: z.boolean(),
	/**
	 * Guild member flags represented as a bit set, defaults to 0
	 */
	flags: z.union([z.literal(0), GuildMemberFlagsEnum]).default(0),
	/**
	 * Whether the user has not yet passed the guild's Membership Screening requirements
	 */
	pending: z.boolean().nullable(),
	/**
	 * Total permissions of the member in the channel, including overwrites, returned when in the interaction object
	 */
	permissions: z.string().optional(),
	/**
	 * When the user's timeout will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out
	 */
	communication_disabled_until: z.string().optional().nullable(),
	/**
	 * Data for the member's guild avatar decoration
	 */
	avatar_decoration_data: AvatarDecorationDataStructure.optional(),
});

export type GuildMemberStructureInfer = z.infer<typeof GuildMemberStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure}
 */
export const GuildWidgetStructure = z.object({
	/**
	 * Guild id
	 */
	id: Snowflake,
	/**
	 * Guild name (2-100 characters)
	 */
	name: z.string().min(2).max(100),
	/**
	 * Instant invite for the guilds specified widget invite channel
	 */
	instant_invite: z.string().nullable(),
	/**
	 * Voice and stage channels which are accessible by @everyone
	 */
	channels: z.array(ChannelStructure),
	/**
	 * Special widget user objects that includes users presence (Limit 100)
	 * TODO: User presence is not documented
	 */
	members: z.array(z.union([
		UserStructure.pick({
			id: true,
			username: true,
			discriminator: true,
			avatar: true,
		}),
		z.object({
			status: z.string(),
			avatar_url: z.string(),
		}),
	])).max(100),
	/**
	 * Number of online members in this guild
	 */
	presence_count: Integer,
});

export type GuildWidgetStructureInfer = z.infer<typeof GuildWidgetStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-widget-settings-object-guild-widget-settings-structure}
 */
export const GuildWidgetSettingsStructure = z.object({
	/**
	 * Whether the widget is enabled
	 */
	enabled: z.boolean(),
	/**
	 * The widget channel id
	 */
	channel_id: Snowflake.nullable(),
});

export type GuildWidgetSettingsStructureInfer = z.infer<typeof GuildWidgetSettingsStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-features}
 */
export enum GuildFeatures {
	/**
	 * Guild has access to set an animated guild banner image
	 */
	AnimatedBanner = "ANIMATED_BANNER",
	/**
	 * Guild has access to set an animated guild icon
	 */
	AnimatedIcon = "ANIMATED_ICON",
	/**
	 * Guild is using the old permissions configuration behavior
	 */
	ApplicationCommandPermissionsV2 = "APPLICATION_COMMAND_PERMISSIONS_V2",
	/**
	 * Guild has set up auto moderation rules
	 */
	AutoModeration = "AUTO_MODERATION",
	/**
	 * Guild has access to set a guild banner image
	 */
	Banner = "BANNER",
	/**
	 * Guild can enable welcome screen, Membership Screening, stage channels and discovery, and receives community updates
	 */
	Community = "COMMUNITY",
	/**
	 * Guild has enabled monetization
	 */
	CreatorMonetizableProvisional = "CREATOR_MONETIZABLE_PROVISIONAL",
	/**
	 * Guild has enabled the role subscription promo page
	 */
	CreatorStorePage = "CREATOR_STORE_PAGE",
	/**
	 * Guild has been set as a support server on the App Directory
	 */
	DeveloperSupportServer = "DEVELOPER_SUPPORT_SERVER",
	/**
	 * Guild is able to be discovered in the directory
	 */
	Discoverable = "DISCOVERABLE",
	/**
	 * Guild is able to be featured in the directory
	 */
	Featurable = "FEATURABLE",
	/**
	 * Guild has access to set an invite splash background
	 */
	InviteSplash = "INVITE_SPLASH",
	/**
	 * Guild has paused invites, preventing new users from joining
	 */
	InvitesDisabled = "INVITES_DISABLED",
	/**
	 * Guild has enabled Membership Screening
	 */
	MemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED",
	/**
	 * Guild has increased custom sticker slots
	 */
	MoreStickers = "MORE_STICKERS",
	/**
	 * Guild has access to create announcement channels
	 */
	News = "NEWS",
	/**
	 * Guild is partnered
	 */
	Partnered = "PARTNERED",
	/**
	 * Guild can be previewed before joining via Membership Screening or the directory
	 */
	PreviewEnabled = "PREVIEW_ENABLED",
	/**
	 * Guild has disabled alerts for join raids in the configured safety alerts channel
	 */
	RaidAlertsDisabled = "RAID_ALERTS_DISABLED",
	/**
	 * Guild is able to set role icons
	 */
	RoleIcons = "ROLE_ICONS",
	/**
	 * Guild has role subscriptions that can be purchased
	 */
	RoleSubscriptionsAvailableForPurchase = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",
	/**
	 * Guild has enabled role subscriptions
	 */
	RoleSubscriptionsEnabled = "ROLE_SUBSCRIPTIONS_ENABLED",
	/**
	 * Guild has enabled ticketed events
	 */
	TicketedEventsEnabled = "TICKETED_EVENTS_ENABLED",
	/**
	 * Guild has access to set a vanity URL
	 */
	VanityUrl = "VANITY_URL",
	/**
	 * Guild is verified
	 */
	Verified = "VERIFIED",
	/**
	 * Guild has access to set 384kbps bitrate in voice (previously VIP voice servers)
	 */
	VipRegions = "VIP_REGIONS",
	/**
	 * Guild has enabled the welcome screen
	 */
	WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED",
}

export const GuildFeaturesEnum = z.nativeEnum(GuildFeatures);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-preview-object-guild-preview-structure}
 */
export const GuildPreviewStructure = z.object({
	/**
	 * Guild id
	 */
	id: Snowflake,
	/**
	 * Guild name (2-100 characters)
	 */
	name: z.string().min(2).max(100),
	/**
	 * Icon hash
	 */
	icon: z.string().nullable(),
	/**
	 * Splash hash
	 */
	splash: z.string().nullable(),
	/**
	 * Discovery splash hash
	 */
	discovery_splash: z.string().nullable(),
	/**
	 * Custom guild emojis
	 */
	emojis: z.array(EmojiStructure),
	/**
	 * Enabled guild features
	 */
	features: z.array(GuildFeaturesEnum),
	/**
	 * Approximate number of members in this guild
	 */
	approximate_member_count: Integer,
	/**
	 * Approximate number of online members in this guild
	 */
	approximate_presence_count: Integer,
	/**
	 * The description for the guild
	 */
	description: z.string().nullable(),
	/**
	 * Custom guild stickers
	 */
	stickers: z.array(StickerStructure),
});

export type GuildPreviewStructureInfer = z.infer<typeof GuildPreviewStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags}
 */
export enum SystemChannelFlags {
	/**
	 * Suppress member join notifications
	 */
	SuppressJoinNotifications = 1,
	/**
	 * Suppress server boost notifications
	 */
	SuppressPremiumSubscriptions = 2,
	/**
	 * Suppress server setup tips
	 */
	SuppressGuildReminderNotifications = 4,
	/**
	 * Hide member join sticker reply buttons
	 */
	SuppressJoinNotificationReplies = 8,
	/**
	 * Suppress role subscription purchase and renewal notifications
	 */
	SuppressRoleSubscriptionPurchaseNotifications = 16,
	/**
	 * Hide role subscription sticker reply buttons
	 */
	SuppressRoleSubscriptionPurchaseNotificationReplies = 32,
}

export const SystemChannelFlagsEnum = z.nativeEnum(SystemChannelFlags);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-premium-tier}
 */
export enum PremiumTiers {
	/**
	 * Guild has not unlocked any Server Boost perks
	 */
	None = 0,
	/**
	 * Guild has unlocked Server Boost level 1 perks
	 */
	Tier1 = 1,
	/**
	 * Guild has unlocked Server Boost level 2 perks
	 */
	Tier2 = 2,
	/**
	 * Guild has unlocked Server Boost level 3 perks
	 */
	Tier3 = 3,
}

export const PremiumTiersEnum = z.nativeEnum(PremiumTiers);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level}
 */
export enum GuildNsfwLevels {
	Default = 0,
	Explicit = 1,
	Safe = 2,
	AgeRestricted = 3,
}

export const GuildNsfwLevelsEnum = z.nativeEnum(GuildNsfwLevels);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-verification-level}
 */
export enum VerificationLevels {
	/**
	 * Unrestricted
	 */
	None = 0,
	/**
	 * Must have verified email on account
	 */
	Low = 1,
	/**
	 * Must be registered on Discord for longer than 5 minutes
	 */
	Medium = 2,
	/**
	 * Must be a member of the server for longer than 10 minutes
	 */
	High = 3,
	/**
	 * Must have a verified phone number
	 */
	VeryHigh = 4,
}

export const VerificationLevelsEnum = z.nativeEnum(VerificationLevels);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-mfa-level}
 */
export enum MfaLevels {
	/**
	 * Guild has no MFA/2FA requirement for moderation actions
	 */
	None = 0,
	/**
	 * Guild has a 2FA requirement for moderation actions
	 */
	Elevated = 1,
}

export const MfaLevelsEnum = z.nativeEnum(MfaLevels);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level}
 */
export enum ExplicitContentFilterLevels {
	/**
	 * Media content will not be scanned
	 */
	Disabled = 0,
	/**
	 * Media content sent by members without roles will be scanned
	 */
	MembersWithoutRoles = 1,
	/**
	 * Media content sent by all members will be scanned
	 */
	AllMembers = 2,
}

export const ExplicitContentFilterLevelsEnum = z.nativeEnum(ExplicitContentFilterLevels);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level}
 */
export enum DefaultMessageNotificationLevels {
	/**
	 * All messages will trigger notifications
	 */
	AllMessages = 0,
	/**
	 * Only messages that mention the user will trigger notifications
	 */
	OnlyMentions = 1,
}

export const DefaultMessageNotificationLevelsEnum = z.nativeEnum(DefaultMessageNotificationLevels);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#guild-object-guild-structure}
 */
export const GuildStructure = z.object({
	/**
	 * Guild id
	 */
	id: Snowflake,
	/**
	 * Guild name (2-100 characters, excluding trailing and leading whitespace)
	 */
	name: z.string().min(2).max(100),
	/**
	 * Icon hash
	 */
	icon: z.string().nullable(),
	/**
	 * Icon hash, returned when in the template object
	 */
	icon_hash: z.string().optional().nullable(),
	/**
	 * Splash hash
	 */
	splash: z.string().nullable(),
	/**
	 * Discovery splash hash; only present for guilds with the "DISCOVERABLE" feature
	 */
	discovery_splash: z.string().nullable(),
	/**
	 * True if the user is the owner of the guild
	 */
	owner: z.boolean().optional(),
	/**
	 * ID of owner
	 */
	owner_id: Snowflake,
	/**
	 * Total permissions for the user in the guild (excludes overwrites and implicit permissions)
	 */
	permissions: z.string().optional(),
	/**
	 * Voice region id for the guild (deprecated)
	 *
	 * @deprecated
	 */
	region: z.string().optional().nullable(),
	/**
	 * ID of afk channel
	 */
	afk_channel_id: Snowflake.nullable(),
	/**
	 * AFK timeout in seconds
	 */
	afk_timeout: Integer,
	/**
	 * True if the server widget is enabled
	 */
	widget_enabled: z.boolean().optional(),
	/**
	 * The channel id that the widget will generate an invite to, or null if set to no invite
	 */
	widget_channel_id: Snowflake.optional().nullable(),
	/**
	 * Verification level required for the guild
	 */
	verification_level: VerificationLevelsEnum,
	/**
	 * Default message notifications level
	 */
	default_message_notifications: DefaultMessageNotificationLevelsEnum,
	/**
	 * Explicit content filter level
	 */
	explicit_content_filter: ExplicitContentFilterLevelsEnum,
	/**
	 * Roles in the guild
	 */
	roles: z.array(RoleStructure),
	/**
	 * Custom guild emojis
	 */
	emojis: z.array(EmojiStructure),
	/**
	 * Enabled guild features
	 */
	features: z.array(GuildFeaturesEnum),
	/**
	 * Required MFA level for the guild
	 */
	mfa_level: MfaLevelsEnum,
	/**
	 * Application id of the guild creator if it is bot-created
	 */
	application_id: Snowflake.nullable(),
	/**
	 * The id of the channel where guild notices such as welcome messages and boost events are posted
	 */
	system_channel_id: Snowflake.nullable(),
	/**
	 * System channel flags
	 */
	system_channel_flags: SystemChannelFlagsEnum,
	/**
	 * The id of the channel where Community guilds can display rules and/or guidelines
	 */
	rules_channel_id: Snowflake.nullable(),
	/**
	 * The maximum number of presences for the guild (null is always returned, apart from the largest of guilds)
	 */
	max_presences: Integer.optional().nullable(),
	/**
	 * The maximum number of members for the guild
	 */
	max_members: Integer.optional(),
	/**
	 * The vanity url code for the guild
	 */
	vanity_url_code: z.string().nullable(),
	/**
	 * The description of a guild
	 */
	description: z.string().nullable(),
	/**
	 * Banner hash
	 */
	banner: z.string().nullable(),
	/**
	 * Premium tier (Server Boost level)
	 */
	premium_tier: PremiumTiersEnum,
	/**
	 * The number of boosts this guild currently has
	 */
	premium_subscription_count: Integer.optional(),
	/**
	 * The preferred locale of a Community guild; used in server discovery and notices from Discord, and sent in interactions; defaults to "en-US"
	 */
	preferred_locale: LocalesEnum,
	/**
	 * The id of the channel where admins and moderators of Community guilds receive notices from Discord
	 */
	public_updates_channel_id: Snowflake.nullable(),
	/**
	 * The maximum amount of users in a video channel
	 */
	max_video_channel_users: Integer.optional(),
	/**
	 * The maximum amount of users in a stage video channel
	 */
	max_stage_video_channel_users: Integer.optional(),
	/**
	 * Approximate number of members in this guild, returned from the GET /guilds/<id> and /users/@me/guilds endpoints when with_counts is true
	 */
	approximate_member_count: Integer.optional(),
	/**
	 * Approximate number of non-offline members in this guild, returned from the GET /guilds/<id> and /users/@me/guilds endpoints when with_counts is true
	 */
	approximate_presence_count: Integer.optional(),
	/**
	 * The welcome screen of a Community guild, shown to new members, returned in an Invite's guild object
	 */
	welcome_screen: WelcomeScreenStructure.optional(),
	/**
	 * Guild NSFW level
	 */
	nsfw_level: GuildNsfwLevelsEnum,
	/**
	 * Custom guild stickers
	 */
	stickers: z.array(StickerStructure).optional(),
	/**
	 * Whether the guild has the boost progress bar enabled
	 */
	premium_progress_bar_enabled: z.boolean(),
	/**
	 * The id of the channel where admins and moderators of Community guilds receive safety alerts from Discord
	 */
	safety_alerts_channel_id: Snowflake.nullable(),
});

export type GuildStructureInfer = z.infer<typeof GuildStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-user-object-guild-scheduled-event-user-structure}
 */
export const GuildScheduledEventUserStructure = z.object({
	/**
	 * The scheduled event id which the user subscribed to
	 */
	guild_scheduled_event_id: Snowflake,
	/**
	 * User which subscribed to an event
	 */
	user: UserStructure,
	/**
	 * Guild member data for this user for the guild which this event belongs to, if any
	 */
	member: GuildMemberStructure.optional(),
});

export type GuildScheduledEventUserStructureInfer = z.infer<typeof GuildScheduledEventUserStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-metadata}
 */
export const GuildScheduledEventEntityMetadata = z.object({
	/**
	 * Location of the event (1-100 characters)
	 */
	location: z.string().min(1).max(100).optional(),
});

export type GuildScheduledEventEntityMetadataInfer = z.infer<typeof GuildScheduledEventEntityMetadata>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status}
 */
export enum GuildScheduledEventStatus {
	Scheduled = 1,
	Active = 2,
	Completed = 3,
	Canceled = 4,
}

export const GuildScheduledEventStatusEnum = z.nativeEnum(GuildScheduledEventStatus);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types}
 */
export enum GuildScheduledEventEntityTypes {
	StageInstance = 1,
	Voice = 2,
	External = 3,
}

export const GuildScheduledEventEntityTypesEnum = z.nativeEnum(GuildScheduledEventEntityTypes);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-privacy-level}
 */
export enum GuildScheduledEventPrivacyLevel {
	/**
	 * The scheduled event is accessible to everyone
	 */
	GuildOnly = 2,
}

export const GuildScheduledEventPrivacyLevelEnum = z.nativeEnum(GuildScheduledEventPrivacyLevel);

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-structure}
 */
export const GuildScheduledEventStructure = z.object({
	/**
	 * The id of the scheduled event
	 */
	id: Snowflake,
	/**
	 * The guild id which the scheduled event belongs to
	 */
	guild_id: Snowflake,
	/**
	 * The channel id in which the scheduled event will be hosted, or null if scheduled entity type is EXTERNAL
	 */
	channel_id: Snowflake.nullable(),
	/**
	 * The id of the user that created the scheduled event
	 */
	creator_id: Snowflake.optional().nullable(),
	/**
	 * The name of the scheduled event (1-100 characters)
	 */
	name: z.string().min(1).max(100),
	/**
	 * The description of the scheduled event (1-1000 characters)
	 */
	description: z.string().min(1).max(1_000).optional().nullable(),
	/**
	 * The time the scheduled event will start
	 */
	scheduled_start_time: z.string(),
	/**
	 * The time the scheduled event will end, required if entity_type is EXTERNAL
	 */
	scheduled_end_time: z.string().nullable(),
	/**
	 * The privacy level of the scheduled event
	 */
	privacy_level: GuildScheduledEventPrivacyLevelEnum,
	/**
	 * The status of the scheduled event
	 */
	status: GuildScheduledEventStatusEnum,
	/**
	 * The type of the scheduled event
	 */
	entity_type: GuildScheduledEventEntityTypesEnum,
	/**
	 * The id of an entity associated with a guild scheduled event
	 */
	entity_id: Snowflake.nullable(),
	/**
	 * Additional metadata for the guild scheduled event
	 */
	entity_metadata: GuildScheduledEventEntityMetadata.nullable(),
	/**
	 * The user that created the scheduled event
	 */
	creator: UserStructure.optional(),
	/**
	 * The number of users subscribed to the scheduled event
	 */
	user_count: Integer.optional(),
	/**
	 * The cover image hash of the scheduled event
	 */
	image: z.string().optional().nullable(),
});

export type GuildScheduledEventStructureInfer = z.infer<typeof GuildScheduledEventStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#guild-template-object-guild-template-structure}
 */
export const GuildTemplateStructure = z.object({
	/**
	 * The template code (unique ID)
	 */
	code: z.string(),
	/**
	 * Template name
	 */
	name: z.string(),
	/**
	 * The description for the template
	 */
	description: z.string().nullable(),
	/**
	 * Number of times this template has been used
	 */
	usage_count: Integer,
	/**
	 * The ID of the user who created the template
	 */
	creator_id: Snowflake,
	/**
	 * The user who created the template
	 */
	creator: UserStructure,
	/**
	 * When this template was created
	 */
	created_at: z.string(),
	/**
	 * When this template was last synced to the source guild
	 */
	updated_at: z.string(),
	/**
	 * The ID of the guild this template is based on
	 */
	source_guild_id: Snowflake,
	/**
	 * The guild snapshot this template contains
	 */
	serialized_source_guild: GuildStructure.pick({
		name: true,
		description: true,
		verification_level: true,
		default_message_notifications: true,
		explicit_content_filter: true,
		preferred_locale: true,
		afk_timeout: true,
		roles: true,
		// channels: true,
		afk_channel_id: true,
		system_channel_id: true,
		system_channel_flags: true,
		icon_hash: true,
	}),
	/**
	 * Whether the template has unsynced changes
	 */
	is_dirty: z.boolean().nullable(),
});

export type GuildTemplateStructureInfer = z.infer<typeof GuildTemplateStructure>;
