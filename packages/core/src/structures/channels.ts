import type { DiscordHeaders } from "../globals/api";
import type { Integer, ISO8601Timestamp, Snowflake } from "../globals/formats";
import type { ApplicationIntegrationTypes } from "./applications";
import type { EmojiStructure } from "./emojis";
import type { GuildMemberStructure } from "./guilds";
import type { ComponentStructure, InteractionTypes, ResolvedDataStructure } from "./interactions";
import type { PollStructure } from "./polls";
import type { StickerItemStructure, StickerStructure } from "./stickers";
import type { UserStructure } from "./users";

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#role-subscription-data-object-role-subscription-data-object-structure}
 */
export type RoleSubscriptionDataStructure = {
	/**
	 * Whether this notification is for a renewal rather than a new purchase
	 */
	is_renewal: boolean;
	/**
	 * The id of the sku and listing that the user is subscribed to
	 */
	role_subscription_listing_id: Snowflake;
	/**
	 * The name of the tier that the user is subscribed to
	 */
	tier_name: string;
	/**
	 * The cumulative number of months that the user has been subscribed for
	 */
	total_months_subscribed: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure}
 */
export type AllowedMentionsStructure = {
	/**
	 * An array of allowed mention types to parse from the content
	 */
	parse?: AllowedMentionTypes[];
	/**
	 * For replies, whether to mention the author of the message being replied to (default false)
	 */
	replied_user?: boolean;
	/**
	 * Array of role_ids to mention (Max size of 100)
	 */
	roles?: Snowflake[];
	/**
	 * Array of user_ids to mention (Max size of 100)
	 */
	users?: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types}
 */
export enum AllowedMentionTypes {
	/**
	 * Controls @everyone and @here mentions
	 */
	Everyone = "everyone",
	/**
	 * Controls role mentions
	 */
	Roles = "roles",
	/**
	 * Controls user mentions
	 */
	Users = "users",
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-mention-object-channel-mention-structure}
 */
export type ChannelMentionStructure = {
	/**
	 * The guild id containing the channel
	 */
	guild_id: Snowflake;
	/**
	 * The id of the channel
	 */
	id: Snowflake;
	/**
	 * The name of the channel
	 */
	name: string;
	/**
	 * The type of channel
	 */
	type: ChannelTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object-attachment-flags}
 */
export enum AttachmentFlags {
	/**
	 * This attachment has been edited using the remix feature on mobile
	 */
	IsRemix = 4,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure}
 */
export type AttachmentStructure = {
	/**
	 * The content type of the file
	 */
	content_type?: DiscordHeaders["Content-Type"];
	/**
	 * The description of the file
	 */
	description?: string;
	/**
	 * The duration of the audio file
	 */
	duration_secs?: number;
	/**
	 * Whether this attachment is ephemeral
	 */
	ephemeral?: boolean;
	/**
	 * The name of the file
	 */
	filename: string;
	/**
	 * The flags of the attachment
	 */
	flags?: AttachmentFlags | bigint;
	/**
	 * The height of the file
	 */
	height?: Integer | null;
	/**
	 * The id of the attachment
	 */
	id: Snowflake;
	/**
	 * The proxied url of the file
	 */
	proxy_url: string;
	/**
	 * The size of the file
	 */
	size: Integer;
	/**
	 * The source url of the file
	 */
	url: string;
	/**
	 * The base64 encoded bytearray representing a sampled waveform
	 */
	waveform?: string;
	/**
	 * The width of the file
	 */
	width?: Integer | null;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure}
 */
export type EmbedFieldStructure = {
	/**
	 * Whether or not this field should display inline
	 */
	inline?: boolean;
	/**
	 * The name of the field
	 */
	name: string;
	/**
	 * The value of the field
	 */
	value: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure}
 */
export type EmbedFooterStructure = {
	/**
	 * URL of footer icon (only supports http(s) and attachments)
	 */
	icon_url?: string;
	/**
	 * A proxied url of footer icon
	 */
	proxy_icon_url?: string;
	/**
	 * Footer text
	 */
	text: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure}
 */
export type EmbedAuthorStructure = {
	/**
	 * URL of author icon (only supports http(s) and attachments)
	 */
	icon_url?: string;
	/**
	 * Name of author
	 */
	name: string;
	/**
	 * A proxied url of author icon
	 */
	proxy_icon_url?: string;
	/**
	 * URL of author (only supports http(s))
	 */
	url?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure}
 */
export type EmbedProviderStructure = {
	/**
	 * Name of provider
	 */
	name?: string;
	/**
	 * URL of provider
	 */
	url?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure}
 */
export type EmbedImageStructure = {
	/**
	 * Height of the image
	 */
	height?: Integer;
	/**
	 * A proxied url of the image
	 */
	proxy_url?: string;
	/**
	 * Source url of the image
	 */
	url: string;
	/**
	 * Width of the image
	 */
	width?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure}
 */
export type EmbedVideoStructure = {
	/**
	 * Height of the video
	 */
	height?: Integer;
	/**
	 * A proxied url of the video
	 */
	proxy_url?: string;
	/**
	 * Source url of the video
	 */
	url?: string;
	/**
	 * Width of the video
	 */
	width?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure}
 */
export type EmbedThumbnailStructure = {
	/**
	 * Height of the thumbnail
	 */
	height?: Integer;
	/**
	 * A proxied url of the thumbnail
	 */
	proxy_url?: string;
	/**
	 * Source url of the thumbnail
	 */
	url: string;
	/**
	 * Width of the thumbnail
	 */
	width?: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-types}
 */
export enum EmbedTypes {
	Article = "article",
	Gifv = "gifv",
	Image = "image",
	Link = "link",
	Rich = "rich",
	Video = "video",
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-structure}
 */
export type EmbedStructure = {
	/**
	 * The author of the embed
	 */
	author?: EmbedAuthorStructure;
	/**
	 * The color of the embed
	 */
	color?: Integer;
	/**
	 * The description of the embed
	 */
	description?: string;
	/**
	 * The fields of the embed
	 */
	fields?: EmbedFieldStructure[];
	/**
	 * The footer of the embed
	 */
	footer?: EmbedFooterStructure;
	/**
	 * The image of the embed
	 */
	image?: EmbedImageStructure;
	/**
	 * The provider of the embed
	 */
	provider?: EmbedProviderStructure;
	/**
	 * The thumbnail of the embed
	 */
	thumbnail?: EmbedThumbnailStructure;
	/**
	 * The timestamp of the embed
	 */
	timestamp?: ISO8601Timestamp;
	/**
	 * The title of the embed
	 */
	title?: string;
	/**
	 * The type of the embed
	 */
	type?: EmbedTypes;
	/**
	 * The url of the embed
	 */
	url?: string;
	/**
	 * The video of the embed
	 */
	video?: EmbedVideoStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#forum-tag-object-forum-tag-structure}
 */
export type ForumTagStructure = {
	/**
	 * The id of a guild's custom emoji
	 */
	emoji_id: Snowflake | null;
	/**
	 * The unicode character of the emoji
	 */
	emoji_name: string | null;
	/**
	 * The id of the tag
	 */
	id: Snowflake;
	/**
	 * Whether this tag can only be added to or removed from threads by a member with the MANAGE_THREADS permission
	 */
	moderated: boolean;
	/**
	 * The name of the tag (0-20 characters)
	 */
	name: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#default-reaction-object-default-reaction-structure}
 */
export type DefaultReactionStructure = {
	/**
	 * The id of a guild's custom emoji
	 */
	emoji_id: Snowflake | null;
	/**
	 * The unicode character of the emoji
	 */
	emoji_name: string | null;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure}
 */
export type ThreadMemberStructure = {
	/**
	 * Any user-thread settings, currently only used for notifications
	 */
	flags: Integer;
	/**
	 * ID of the thread
	 */
	id?: Snowflake;
	/**
	 * Time the user last joined the thread
	 */
	join_timestamp: ISO8601Timestamp;
	/**
	 * Additional information about the user
	 */
	member?: GuildMemberStructure;
	/**
	 * ID of the user
	 */
	user_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure}
 */
export type ThreadMetadataStructure = {
	/**
	 * Timestamp when the thread's archive status was last changed, used for calculating recent activity
	 */
	archive_timestamp: ISO8601Timestamp;
	/**
	 * Whether the thread is archived
	 */
	archived: boolean;
	/**
	 * The thread will stop showing in the channel list after auto_archive_duration minutes of inactivity, can be set to: 60, 1440, 4320, 10080
	 */
	auto_archive_duration: Integer;
	/**
	 * Timestamp when the thread was created; only populated for threads created after 2022-01-09
	 */
	create_timestamp?: ISO8601Timestamp | null;
	/**
	 * Whether non-moderators can add other non-moderators to a thread; only available on private threads
	 */
	invitable?: boolean;
	/**
	 * Whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it
	 */
	locked: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure}
 */
export type OverwriteStructure = {
	/**
	 * Permission bit set
	 */
	allow: string;
	/**
	 * Permission bit set
	 */
	deny: string;
	/**
	 * Role or user id
	 */
	id: Snowflake;
	/**
	 * Either 0 (role) or 1 (member)
	 */
	type: OverwriteTypes;
};

export enum OverwriteTypes {
	Role = 0,
	Member = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#reaction-count-details-object-reaction-count-details-structure}
 */
export type ReactionCountDetailsStructure = {
	/**
	 * Count of super reactions
	 */
	burst: Integer;
	/**
	 * Count of normal reactions
	 */
	normal: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure}
 */
export type ReactionStructure = {
	/**
	 * HEX colors used for super reaction
	 */
	burst_colors: string[];
	/**
	 * Total number of times this emoji has been used to react (including super reacts)
	 */
	count: Integer;
	/**
	 * Reaction count details object
	 */
	count_details: ReactionCountDetailsStructure;
	/**
	 * emoji information
	 */
	emoji: Partial<EmojiStructure>;
	/**
	 * Whether the current user reacted using this emoji
	 */
	me: boolean;
	/**
	 * Whether the current user super-reacted using this emoji
	 */
	me_burst: boolean;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-structure}
 */
export type FollowedChannelStructure = {
	/**
	 * The source channel id
	 */
	channel_id: Snowflake;
	/**
	 * The created target webhook id
	 */
	webhook_id: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure}
 */
export type MessageReferenceStructure = {
	/**
	 * ID of the originating message's channel
	 */
	channel_id?: Snowflake;
	/**
	 * When sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true
	 */
	fail_if_not_exists?: boolean;
	/**
	 * ID of the originating message's guild
	 */
	guild_id?: Snowflake;
	/**
	 * ID of the originating message
	 */
	message_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-call-object-message-call-object-structure}
 */
export type MessageCallStructure = {
	/**
	 * Time when call ended
	 */
	ended_timestamp?: ISO8601Timestamp | null;
	/**
	 * Array of user object ids that participated in the call
	 */
	participants: Snowflake[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-interaction-metadata-object-message-interaction-metadata-structure}
 */
export type MessageInteractionMetadataStructure = {
	/**
	 * IDs for installation context(s) related to an interaction
	 */
	authorizing_integration_owners: Record<ApplicationIntegrationTypes, Snowflake>;
	/**
	 * ID of the interaction
	 */
	id: Snowflake;
	/**
	 * ID of the message that contained interactive component, present only on messages created from component interactions
	 */
	interacted_message_id?: Snowflake;
	/**
	 * ID of the original response message, present only on follow-up messages
	 */
	original_response_message_id?: Snowflake;
	/**
	 * Metadata for the interaction that was used to open the modal, present only on modal submit interactions
	 */
	triggering_interaction_metadata?: MessageInteractionMetadataStructure;
	/**
	 * Type of interaction
	 */
	type: InteractionTypes;
	/**
	 * User who triggered the interaction
	 */
	user: UserStructure;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-flags}
 */
export enum MessageFlags {
	/**
	 * This message has been published to subscribed channels (via Channel Following)
	 */
	Crossposted = 1,
	/**
	 * This message originated from a message in another channel (via Channel Following)
	 */
	IsCrosspost = 2,
	/**
	 * Do not include any embeds when serializing this message
	 */
	SuppressEmbeds = 4,
	/**
	 * The source message for this crosspost has been deleted (via Channel Following)
	 */
	SourceMessageDeleted = 8,
	/**
	 * This message came from the urgent message system
	 */
	Urgent = 16,
	/**
	 * This message has an associated thread, with the same id as the message
	 */
	HasThread = 32,
	/**
	 * This message is only visible to the user who invoked the Interaction
	 */
	Ephemeral = 64,
	/**
	 * This message is an Interaction Response and the bot is "thinking"
	 */
	Loading = 128,
	/**
	 * This message failed to mention some roles and add their members to the thread
	 */
	FailedToMentionSomeRolesInThread = 256,
	/**
	 * This message will not trigger push and desktop notifications
	 */
	SuppressNotifications = 4_096,
	/**
	 * This message is a voice message
	 */
	IsVoiceMessage = 8_192,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-activity-types}
 */
export enum MessageActivityTypes {
	Join = 1,
	Spectate = 2,
	Listen = 3,
	JoinRequest = 5,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure}
 */
export type MessageActivityStructure = {
	/**
	 * Party_id from a Rich Presence event
	 */
	party_id?: string;
	/**
	 * Type of message activity
	 */
	type: MessageActivityTypes;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-types}
 */
export enum MessageTypes {
	Default = 0,
	RecipientAdd = 1,
	RecipientRemove = 2,
	Call = 3,
	ChannelNameChange = 4,
	ChannelIconChange = 5,
	ChannelPinnedMessage = 6,
	UserJoin = 7,
	GuildBoost = 8,
	GuildBoostTier1 = 9,
	GuildBoostTier2 = 10,
	GuildBoostTier3 = 11,
	ChannelFollowAdd = 12,
	GuildDiscoveryDisqualified = 14,
	GuildDiscoveryRequalified = 15,
	GuildDiscoveryGracePeriodInitialWarning = 16,
	GuildDiscoveryGracePeriodFinalWarning = 17,
	ThreadCreated = 18,
	Reply = 19,
	ChatInputCommand = 20,
	ThreadStarterMessage = 21,
	GuildInviteReminder = 22,
	ContextMenuCommand = 23,
	AutoModerationAction = 24,
	RoleSubscriptionPurchase = 25,
	InteractionPremiumUpsell = 26,
	StageStart = 27,
	StageEnd = 28,
	StageSpeaker = 29,
	StageTopic = 31,
	GuildApplicationPremiumSubscription = 32,
	GuildIncidentAlertModeEnabled = 36,
	GuildIncidentAlertModeDisabled = 37,
	GuildIncidentReportRaid = 38,
	GuildIncidentReportFalseAlarm = 39,
	PurchaseNotification = 44,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-structure}
 */
/**
 * id	snowflake	id of the message
 * channel_id	snowflake	id of the channel the message was sent in
 * author*	user object	the author of this message (not guaranteed to be a valid user, see below)
 * content**	string	contents of the message
 * timestamp	ISO8601 timestamp	when this message was sent
 * edited_timestamp	?ISO8601 timestamp	when this message was edited (or null if never)
 * tts	boolean	whether this was a TTS message
 * mention_everyone	boolean	whether this message mentions everyone
 * mentions	array of user objects	users specifically mentioned in the message
 * mention_roles	array of role object ids	roles specifically mentioned in this message
 * mention_channels?***	array of channel mention objects	channels specifically mentioned in this message
 * attachments**	array of attachment objects	any attached files
 * embeds**	array of embed objects	any embedded content
 * reactions?	array of reaction objects	reactions to the message
 * nonce?	integer or string	used for validating a message was sent
 * pinned	boolean	whether this message is pinned
 * webhook_id?	snowflake	if the message is generated by a webhook, this is the webhook's id
 * type	integer	type of message
 * activity?	message activity object	sent with Rich Presence-related chat embeds
 * application?	partial application object	sent with Rich Presence-related chat embeds
 * application_id?	snowflake	if the message is an Interaction or application-owned webhook, this is the id of the application
 * message_reference?	message reference object	data showing the source of a crosspost, channel follow add, pin, or reply message
 * flags?	integer	message flags combined as a bitfield
 * referenced_message?****	?message object	the message associated with the message_reference
 * interaction_metadata?	message interaction metadata object	In preview. Sent if the message is sent as a result of an interaction
 * interaction?	message interaction object	Deprecated in favor of interaction_metadata; sent if the message is a response to an interaction
 * thread?	channel object	the thread that was started from this message, includes thread member object
 * components?**	array of message components	sent if the message contains components like buttons, action rows, or other interactive components
 * sticker_items?	array of message sticker item objects	sent if the message contains stickers
 * stickers?	array of sticker objects	Deprecated the stickers sent with the message
 * position?	integer	A generally increasing integer (there may be gaps or duplicates) that represents the approximate position of the message in a thread, it can be used to estimate the relative position of the message in a thread in company with total_message_sent on parent thread
 * role_subscription_data?	role subscription data object	data of the role subscription purchase or renewal that prompted this ROLE_SUBSCRIPTION_PURCHASE message
 * resolved?	resolved data	data for users, members, channels, and roles in the message's auto-populated select menus
 * poll?**	poll object	A poll!
 * call?	message call object	the call associated with the message
 */
export type MessageStructure = {
	/**
	 * Sent with Rich Presence-related chat embeds
	 */
	activity?: MessageActivityStructure;
	/**
	 * Sent with Rich Presence-related chat embeds
	 */
	application?: Partial<ApplicationIntegrationTypes>;
	/**
	 * If the message is an Interaction or application-owned webhook, this is the ID of the application
	 */
	application_id?: Snowflake;
	/**
	 * Any attached files
	 */
	attachments: AttachmentStructure[];
	/**
	 * Author of this message
	 */
	author: UserStructure;
	/**
	 * The call associated with the message
	 */
	call?: MessageCallStructure;
	/**
	 * ID of the channel the message was sent in
	 */
	channel_id: Snowflake;
	/**
	 * Sent if the message contains components like buttons, action rows, or other interactive components
	 */
	components?: ComponentStructure[];
	/**
	 * Contents of the message
	 */
	content: string | null;
	/**
	 * When this message was edited (or null if never)
	 */
	edited_timestamp: ISO8601Timestamp | null;
	/**
	 * Any embedded content
	 */
	embeds: EmbedStructure[];
	/**
	 * Message flags combined as a bitfield
	 */
	flags?: MessageFlags;
	/**
	 * ID of the message
	 */
	id: Snowflake;
	/**
	 * Deprecated in favor of interaction_metadata; sent if the message is a response to an interaction
	 *
	 * @deprecated
	 */
	interaction?: MessageInteractionMetadataStructure;
	/**
	 * In preview. Sent if the message is sent as a result of an interaction
	 */
	interaction_metadata?: MessageInteractionMetadataStructure;
	/**
	 * Channels specifically mentioned in this message
	 */
	mention_channels?: ChannelMentionStructure[];
	/**
	 * Whether this message mentions everyone
	 */
	mention_everyone: boolean;
	/**
	 * Roles specifically mentioned in this message
	 */
	mention_roles: Snowflake[];
	/**
	 * Users specifically mentioned in the message
	 */
	mentions: UserStructure[];
	/**
	 * Data showing the source of a crosspost, channel follow add, pin, or reply message
	 */
	message_reference?: MessageReferenceStructure;
	/**
	 * Used for validating a message was sent
	 */
	nonce: Integer | string;
	/**
	 * Whether this message is pinned
	 */
	pinned: boolean;
	/**
	 * A poll!
	 */
	poll?: PollStructure;
	/**
	 * A generally increasing integer (there may be gaps or duplicates) that represents the approximate position of the message in a thread, it can be used to estimate the relative position of the message in a thread in company with total_message_sent on parent thread
	 */
	position?: Integer;
	/**
	 * Reactions to the message
	 */
	reactions?: ReactionStructure[];
	/**
	 * The message associated with the message reference
	 */
	referenced_message?: MessageStructure | null;
	/**
	 * Data for users, members, channels, and roles in the message's auto-populated select menus
	 */
	resolved?: ResolvedDataStructure;
	/**
	 * Data of the role subscription purchase or renewal that prompted this ROLE_SUBSCRIPTION_PURCHASE message
	 */
	role_subscription_data?: RoleSubscriptionDataStructure;
	/**
	 * Sent if the message contains stickers
	 */
	sticker_items?: StickerItemStructure[];
	/**
	 * Deprecated the stickers sent with the message
	 *
	 * @deprecated
	 */
	stickers?: StickerStructure[];
	/**
	 * The thread that was started from this message, includes thread member object
	 */
	thread?: ChannelStructure;
	/**
	 * When this message was sent
	 */
	timestamp: ISO8601Timestamp;
	/**
	 * Whether this was a TTS message
	 */
	tts: boolean;
	/**
	 * Type of message
	 */
	type: MessageTypes;
	/**
	 * If the message is generated by a webhook, this is the webhook's ID
	 */
	webhook_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-forum-layout-types}
 */
export enum ForumLayoutTypes {
	/**
	 * No default has been set for forum channel
	 */
	NotSet = 0,
	/**
	 * Display posts as a list
	 */
	ListView = 1,
	/**
	 * Display posts as a collection of tiles
	 */
	GalleryView = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types}
 */
export enum SortOrderTypes {
	/**
	 * Sort forum posts by activity
	 */
	LatestActivity = 0,
	/**
	 * Sort forum posts by creation time (from most recent to oldest)
	 */
	CreationDate = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-flags}
 */
export enum ChannelFlags {
	/**
	 * This thread is pinned to the top of its parent GUILD_FORUM or GUILD_MEDIA channel
	 */
	Pinned = 2,
	/**
	 * Whether a tag is required to be specified when creating a thread in a GUILD_FORUM or a GUILD_MEDIA channel. Tags are specified in the applied_tags field.
	 */
	RequireTag = 16,
	/**
	 * When set hides the embedded media download options. Available only for media channels
	 */
	HideMediaDownloadOptions = 32_768,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes}
 */
export enum VideoQualityModes {
	Auto = 1,
	Full = 2,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-types}
 */
export enum ChannelTypes {
	/**
	 * A text channel within a server
	 */
	GuildText = 0,
	/**
	 * A direct message between users
	 */
	DM = 1,
	/**
	 * A voice channel within a server
	 */
	GuildVoice = 2,
	/**
	 * A direct message between multiple users
	 */
	GroupDM = 3,
	/**
	 * An organizational category that contains up to 50 channels
	 */
	GuildCategory = 4,
	/**
	 * A channel that users can follow and crosspost into their own server (formerly news channels)
	 */
	GuildAnnouncement = 5,
	/**
	 * A temporary sub-channel within a GUILD_ANNOUNCEMENT channel
	 */
	AnnouncementThread = 10,
	/**
	 * A temporary sub-channel within a GUILD_TEXT or GUILD_FORUM channel
	 */
	PublicThread = 11,
	/**
	 * A temporary sub-channel within a GUILD_TEXT channel that is only viewable by those invited and those with the MANAGE_THREADS permission
	 */
	PrivateThread = 12,
	/**
	 * A voice channel for hosting events with an audience
	 */
	GuildStageVoice = 13,
	/**
	 * The channel in a hub containing the listed servers
	 */
	GuildDirectory = 14,
	/**
	 * Channel that can only contain threads
	 */
	GuildForum = 15,
	/**
	 * Channel that can only contain threads, similar to GUILD_FORUM channels
	 */
	GuildMedia = 16,
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-structure}
 */
export type ChannelStructure = {
	/**
	 * Application id of the group DM creator if it is bot-created
	 */
	application_id?: Snowflake;
	/**
	 * The IDs of the set of tags that have been applied to a thread in a GUILD_FORUM or a GUILD_MEDIA channel
	 */
	applied_tags?: Snowflake[];
	/**
	 * The set of tags that can be used in a GUILD_FORUM or a GUILD_MEDIA channel
	 */
	available_tags?: ForumTagStructure[];
	/**
	 * The bitrate (in bits) of the voice channel
	 */
	bitrate?: Integer;
	/**
	 * Default duration, copied onto newly created threads, in minutes, threads will stop showing in the channel list after the specified period of inactivity, can be set to: 60, 1440, 4320, 10080
	 */
	default_auto_archive_duration?: Integer;
	/**
	 * The default forum layout view used to display posts in GUILD_FORUM channels. Defaults to 0, which indicates a layout view has not been set by a channel admin
	 */
	default_forum_layout?: ForumLayoutTypes;
	/**
	 * The emoji to show in the add reaction button on a thread in a GUILD_FORUM or a GUILD_MEDIA channel
	 */
	default_reaction_emoji?: DefaultReactionStructure | null;
	/**
	 * The default sort order type used to order posts in GUILD_FORUM and GUILD_MEDIA channels. Defaults to null, which indicates a preferred sort order hasn't been set by a channel admin
	 */
	default_sort_order?: SortOrderTypes | null;
	/**
	 * The initial rate_limit_per_user to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
	 */
	default_thread_rate_limit_per_user?: Integer;
	/**
	 * Channel flags combined as a bitfield
	 */
	flags?: ChannelFlags | bigint;
	/**
	 * The id of the guild (may be missing for some channel objects received over gateway guild dispatches)
	 */
	guild_id?: Snowflake;
	/**
	 * Icon hash of the group DM
	 */
	icon?: string | null;
	/**
	 * The id of this channel
	 */
	id: Snowflake;
	/**
	 * The id of the last message sent in this channel (or thread for GUILD_FORUM or GUILD_MEDIA channels) (may not point to an existing or valid message or thread)
	 */
	last_message_id?: Snowflake | null;
	/**
	 * When the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned.
	 */
	last_pin_timestamp?: ISO8601Timestamp | null;
	/**
	 * For group DM channels: whether the channel is managed by an application via the gdm.join OAuth2 scope
	 */
	managed?: boolean;
	/**
	 * Thread member object for the current user, if they have joined the thread, only included on certain API endpoints
	 */
	member?: ThreadMemberStructure;
	/**
	 * An approximate count of users in a thread, stops counting at 50
	 */
	member_count?: Integer;
	/**
	 * Number of messages (not including the initial message or deleted messages) in a thread.
	 */
	message_count?: Integer;
	/**
	 * The name of the channel (1-100 characters)
	 */
	name?: string | null;
	/**
	 * Whether the channel is nsfw
	 */
	nsfw?: boolean;
	/**
	 * ID of the creator of the group DM or thread
	 */
	owner_id?: Snowflake;
	/**
	 * ID of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created
	 */
	parent_id?: Snowflake | null;
	/**
	 * Explicit permission overwrites for members and roles
	 */
	permission_overwrites?: OverwriteStructure[];
	/**
	 * Computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction. This does not include implicit permissions, which may need to be checked separately
	 */
	permissions?: string;
	/**
	 * Sorting position of the channel
	 */
	position?: Integer;
	/**
	 * Amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
	 */
	rate_limit_per_user?: Integer;
	/**
	 * Thread-specific fields not needed by other channels
	 */
	thread_metadata?: ThreadMetadataStructure;
	/**
	 * Voice region id for the voice channel, automatic when set to null
	 */
	rtc_region?: string | null;
	/**
	 * The user limit of the voice channel
	 */
	user_limit?: Integer;
	/**
     * The recipients of the DM
     */
	recipients?: UserStructure[];
	/**
	 * The channel topic (0-4096 characters for GUILD_FORUM and GUILD_MEDIA channels, 0-1024 characters for all others)
	 */
	topic?: string | null;
	/**
	 * The type of channel
	 */
	type: ChannelTypes;
	/**
	 * The camera video quality mode of the voice channel, 1 when not present
	 */
	video_quality_mode?: VideoQualityModes;
	/**
	 * Number of messages ever sent in a thread, it's similar to message_count on message creation, but will not decrement the number when a message is deleted
	 */
	total_message_sent?: Integer;
};
