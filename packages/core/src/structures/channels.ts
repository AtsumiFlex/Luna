import { z } from "zod";
import { Integer, ISO8601Timestamp, Snowflake } from "../globals/formats";
import { DiscordHeaders } from "../globals/headers";
import type { ApplicationIntegrationTypes, ApplicationStructureInfer } from "./applications";
import { ApplicationIntegrationTypesEnum, ApplicationStructure } from "./applications";
import { EmojiStructure } from "./emojis";
import { GuildMemberStructure } from "./guilds";
import type { PollStructureInfer } from "./polls";
import { PollStructure } from "./polls";
import type { StickerItemStructureInfer, StickerStructureInfer } from "./stickers";
import { StickerItemStructure, StickerStructure } from "./stickers";
import type { UserStructureInfer } from "./users";
import { UserStructure } from "./users";

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

export const ChannelTypesEnum = z.nativeEnum(ChannelTypes);

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#role-subscription-data-object-role-subscription-data-object-structure}
 */
export const RoleSubscriptionDataStructure = z.object({
	/**
	 * The ID of the SKU and listing that the user is subscribed to.
	 */
	role_subscription_listing_id: Snowflake,
	/**
	 * The name of the tier that the user is subscribed to.
	 */
	tier_name: z.string(),
	/**
	 * The cumulative number of months that the user has been subscribed for.
	 */
	total_months_subscribed: Integer,
	/**
	 * Whether this notification is for a renewal rather than a new purchase.
	 */
	is_renewal: z.boolean(),
});

export type RoleSubscriptionDataStructureInfer = z.infer<typeof RoleSubscriptionDataStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types}
 */
export enum AllowedMentionTypes {
	Everyone = "everyone",
	Roles = "roles",
	Users = "users",
}

export const AllowedMentionTypesEnum = z.nativeEnum(AllowedMentionTypes);

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mentions-structure}
 */
export const AllowedMentionsStructure = z.object({
	/**
	 * An array of allowed mention types to parse from the content.
	 */
	parse: z.array(AllowedMentionTypesEnum),
	/**
	 * Array of role_ids to mention (Max size of 100)
	 */
	roles: z.array(Snowflake).max(100),
	/**
	 * Array of user_ids to mention (Max size of 100)
	 */
	users: z.array(Snowflake).max(100),
	/**
	 * For replies, whether to mention the author of the message being replied to (default false)
	 */
	replied_user: z.boolean(),
});

export type AllowedMentionsStructureInfer = z.infer<typeof AllowedMentionsStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-mention-object-channel-mention-structure}
 */
export const ChannelMentionStructure = z.object({
	/**
	 * ID of the channel
	 */
	id: Snowflake,
	/**
	 * ID of the guild containing the channel
	 */
	guild_id: Snowflake,
	/**
	 * The type of channel
	 */
	type: ChannelTypesEnum,
	/**
	 * The name of the channel
	 */
	name: z.string(),
});

export type ChannelMentionStructureInfer = z.infer<typeof ChannelMentionStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object-attachment-flags}
 */
export enum AttachmentFlags {
	/**
	 * This attachment has been edited using the remix feature on mobile
	 */
	IsRemix = 4,
}

export const AttachmentFlagsEnum = z.nativeEnum(AttachmentFlags);

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#attachment-object-attachment-structure}
 */
export const AttachmentStructure = z.object({
	/**
	 * Attachment ID
	 */
	id: Snowflake,
	/**
	 * Name of file attached
	 */
	filename: z.string(),
	/**
	 * Description for the file (max 1024 characters)
	 */
	description: z.string().optional(),
	/**
	 * The attachment's media type
	 */
	content_type: DiscordHeaders.pick({ "Content-Type": true }).optional(),
	/**
	 * Size of file in bytes
	 */
	size: Integer,
	/**
	 * Source URL of file
	 */
	url: z.string().url(),
	/**
	 * A proxied URL of file
	 */
	proxy_url: z.string().url(),
	/**
	 * Height of file (if image)
	 */
	height: Integer.optional(),
	/**
	 * Width of file (if image)
	 */
	width: Integer.optional(),
	/**
	 * Whether this attachment is ephemeral
	 */
	ephemeral: z.boolean().optional(),
	/**
	 * The duration of the audio file (currently for voice messages)
	 */
	duration_secs: z.number().optional(),
	/**
	 * Base64 encoded bytearray representing a sampled waveform (currently for voice messages)
	 */
	waveform: z.string().optional(),
	/**
	 * Attachment flags combined as a bitfield
	 */
	flags: z.union([AttachmentFlagsEnum, z.bigint()]).optional(),
});

export type AttachmentStructureInfer = z.infer<typeof AttachmentStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-field-structure}
 */
export const EmbedFieldStructure = z.object({
	/**
	 * Name of the field
	 */
	name: z.string().max(256),
	/**
	 * Value of the field
	 */
	value: z.string().max(1_024),
	/**
	 * Whether or not this field should display inline
	 */
	inline: z.boolean().optional(),
});

export type EmbedFieldStructureInfer = z.infer<typeof EmbedFieldStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-footer-structure}
 */
export const EmbedFooterStructure = z.object({
	/**
	 * Footer text
	 */
	text: z.string().max(2_048),
	/**
	 * URL of footer icon (only supports http(s) and attachments)
	 */
	icon_url: z.string().url().optional(),
	/**
	 * A proxied URL of footer icon
	 */
	proxy_icon_url: z.string().url().optional(),
});

export type EmbedFooterStructureInfer = z.infer<typeof EmbedFooterStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-author-structure}
 */
export const EmbedAuthorStructure = z.object({
	/**
	 * Name of the author
	 */
	name: z.string().max(256),
	/**
	 * URL of the author
	 */
	url: z.string().url().optional(),
	/**
	 * URL of the author icon (only supports http(s) and attachments)
	 */
	icon_url: z.string().url().optional(),
	/**
	 * A proxied URL of author icon
	 */
	proxy_icon_url: z.string().url().optional(),
});

export type EmbedAuthorStructureInfer = z.infer<typeof EmbedAuthorStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-provider-structure}
 */
export const EmbedProviderStructure = z.object({
	/**
	 * Name of the provider
	 */
	name: z.string().optional(),
	/**
	 * URL of the provider
	 */
	url: z.string().url().optional(),
});

export type EmbedProviderStructureInfer = z.infer<typeof EmbedProviderStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-image-structure}
 */
export const EmbedImageStructure = z.object({
	/**
	 * Source url of image (only supports http(s) and attachments)
	 */
	url: z.string().url(),
	/**
	 * A proxied url of the image
	 */
	proxy_url: z.string().url().optional(),
	/**
	 * Height of image
	 */
	height: Integer.optional(),
	/**
	 * Width of image
	 */
	width: Integer.optional(),
});

export type EmbedImageStructureInfer = z.infer<typeof EmbedImageStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-video-structure}
 */
export const EmbedVideoStructure = z.object({
	/**
	 * Source url of video
	 */
	url: z.string().url(),
	/**
	 * A proxied url of the video
	 */
	proxy_url: z.string().url().optional(),
	/**
	 * Height of video
	 */
	height: Integer.optional(),
	/**
	 * Width of video
	 */
	width: Integer.optional(),
});

export type EmbedVideoStructureInfer = z.infer<typeof EmbedVideoStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-thumbnail-structure}
 */
export const EmbedThumbnailStructure = z.object({
	/**
	 * Source url of thumbnail (only supports http(s) and attachments)
	 */
	url: z.string().url(),
	/**
	 * A proxied url of the thumbnail
	 */
	proxy_url: z.string().url().optional(),
	/**
	 * Height of thumbnail
	 */
	height: Integer.optional(),
	/**
	 * Width of thumbnail
	 */
	width: Integer.optional(),
});

export type EmbedThumbnailStructureInfer = z.infer<typeof EmbedThumbnailStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-types}
 */
export enum EmbedTypes {
	/**
	 * Article embed
	 */
	Article = "article",
	/**
	 * Animated gif image embed rendered as a video embed
	 */
	Gifv = "gifv",
	/**
	 * Image embed
	 */
	Image = "image",
	/**
	 * Link embed
	 */
	Link = "link",
	/**
	 * Generic embed rendered from embed attributes
	 */
	Rich = "rich",
	/**
	 * Video embed
	 */
	Video = "video",
}

export const EmbedTypesEnum = z.nativeEnum(EmbedTypes);

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#embed-object-embed-structure}
 */
export const EmbedStructure = z.object({
	/**
	 * Title of the embed
	 */
	title: z.string().max(256).optional(),
	/**
	 * Type of embed
	 */
	type: EmbedTypesEnum.optional(),
	/**
	 * Description of the embed
	 */
	description: z.string().max(4_096).optional(),
	/**
	 * URL of the embed
	 */
	url: z.string().url().optional(),
	/**
	 * Timestamp of the embed content
	 */
	timestamp: ISO8601Timestamp.optional(),
	/**
	 * Color code of the embed
	 */
	color: Integer.optional(),
	/**
	 * Footer information
	 */
	footer: EmbedFooterStructure.optional(),
	/**
	 * Image information
	 */
	image: EmbedImageStructure.optional(),
	/**
	 * Thumbnail information
	 */
	thumbnail: EmbedThumbnailStructure.optional(),
	/**
	 * Video information
	 */
	video: EmbedVideoStructure.optional(),
	/**
	 * Provider information
	 */
	provider: EmbedProviderStructure.optional(),
	/**
	 * Author information
	 */
	author: EmbedAuthorStructure.optional(),
	/**
	 * Fields information, max of 25
	 */
	fields: z.array(EmbedFieldStructure).max(25),
});

export type EmbedStructureInfer = z.infer<typeof EmbedStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#forum-tag-object-forum-tag-structure}
 */
export const ForumTagStructure = z.object({
	/**
	 * The id of the tag
	 */
	id: Snowflake,
	/**
	 * The name of the tag (0-20 characters)
	 */
	name: z.string().min(0).max(20),
	/**
	 * Whether this tag can only be added to or removed from threads by a member with the MANAGE_THREADS permission
	 */
	moderated: z.boolean(),
	/**
	 * The id of a guild's custom emoji
	 */
	emoji_id: Snowflake.nullable(),
	/**
	 * The unicode character of the emoji
	 */
	emoji_name: z.string().nullable(),
});

export type ForumTagStructureInfer = z.infer<typeof ForumTagStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#default-reaction-object-default-reaction-structure}
 */
export const DefaultReactionStructure = z.object({
	/**
	 * The id of a guild's custom emoji
	 */
	emoji_id: Snowflake.nullable(),
	/**
	 * The unicode character of the emoji
	 */
	emoji_name: z.string().nullable(),
});

export type DefaultReactionStructureInfer = z.infer<typeof DefaultReactionStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure}
 */
export const ThreadMemberStructure = z.object({
	/**
	 * ID of the thread
	 */
	id: Snowflake,
	/**
	 * ID of the user
	 */
	user_id: Snowflake,
	/**
	 * Time the user last joined the thread
	 */
	join_timestamp: ISO8601Timestamp,
	/**
	 * Any user-thread settings, currently only used for notifications
	 */
	flags: Integer,
	/**
	 * Additional information about the user
	 */
	member: GuildMemberStructure,
});

export type ThreadMemberStructureInfer = z.infer<typeof ThreadMemberStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#thread-metadata-object-thread-metadata-structure}
 */
export const ThreadMetadataStructure = z.object({
	/**
	 * Whether the thread is archived
	 */
	archived: z.boolean(),
	/**
	 * The thread will stop showing in the channel list after auto_archive_duration minutes of inactivity, can be set to: 60, 1440, 4320, 10080
	 */
	auto_archive_duration: z.union([z.literal(60), z.literal(1_440), z.literal(4_320), z.literal(10_080)]),
	/**
	 * Timestamp when the thread's archive status was last changed, used for calculating recent activity
	 */
	archive_timestamp: ISO8601Timestamp,
	/**
	 * Whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it
	 */
	locked: z.boolean(),
	/**
	 * Whether non-moderators can add other non-moderators to a thread; only available on private threads
	 */
	invitable: z.boolean().optional(),
	/**
	 * Timestamp when the thread was created; only populated for threads created after 2022-01-09
	 */
	create_timestamp: ISO8601Timestamp.nullable(),
});

export type ThreadMetadataStructureInfer = z.infer<typeof ThreadMetadataStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure}
 */
export const OverwriteStructure = z.object({
	/**
	 * Role or user ID
	 */
	id: Snowflake,
	/**
	 * Either 0 (role) or 1 (member)
	 */
	type: z.union([z.literal(0), z.literal(1)]),
	/**
	 * Permission bit set
	 */
	allow: z.string(),
	/**
	 * Permission bit set
	 */
	deny: z.string(),
});

export type OverwriteStructureInfer = z.infer<typeof OverwriteStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#reaction-count-details-object-reaction-count-details-structure}
 */
export const ReactionCountDetailsStructure = z.object({
	/**
	 * Count of super reactions
	 */
	burst: Integer,
	/**
	 * Count of normal reactions
	 */
	normal: Integer,
});

export type ReactionCountDetailsStructureInfer = z.infer<typeof ReactionCountDetailsStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#reaction-object-reaction-structure}
 */
export const ReactionStructure = z.object({
	/**
	 * Total number of times this emoji has been used to react (including super reacts)
	 */
	count: Integer,
	/**
	 * Reaction count details object
	 */
	count_details: ReactionCountDetailsStructure,
	/**
	 * Whether the current user reacted using this emoji
	 */
	me: z.boolean(),
	/**
	 * Whether the current user super-reacted using this emoji
	 */
	me_burst: z.boolean(),
	/**
	 * emoji information
	 */
	emoji: EmojiStructure.partial().optional(),
	/**
	 * HEX colors used for super reaction
	 */
	burst_colors: z.array(z.string()).optional(),
});

export type ReactionStructureInfer = z.infer<typeof ReactionStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#followed-channel-object-followed-channel-structure}
 */
export const FollowedChannelStructure = z.object({
	/**
	 * Source channel id
	 */
	channel_id: Snowflake,
	/**
	 * Created target webhook id
	 */
	webhook_id: Snowflake,
});

export type FollowedChannelStructureInfer = z.infer<typeof FollowedChannelStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-reference-object-message-reference-structure}
 */
export const MessageReferenceStructure = z.object({
	/**
	 * id of the originating message
	 */
	message_id: Snowflake.optional(),
	/**
	 * id of the originating message's channel
	 */
	channel_id: Snowflake.optional(),
	/**
	 * id of the originating message's guild
	 */
	guild_id: Snowflake.optional(),
	/**
	 * when sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true
	 */
	fail_if_not_exists: z.boolean().optional(),
});

export type MessageReferenceStructureInfer = z.infer<typeof MessageReferenceStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-call-object-message-call-object-structure}
 */
export const MessageCallStructure = z.object({
	/**
	 * array of user object ids that participated in the call
	 */
	participants: z.array(Snowflake),
	/**
	 * time when call ended
	 */
	ended_timestamp: ISO8601Timestamp.optional(),
});

export type MessageCallStructureInfer = z.infer<typeof MessageCallStructure>;

export type MessageInteractionMetadataStructureInfer = {
	authorizing_integration_owners: Record<string, ApplicationIntegrationTypes>;
	id: string;
	interacted_message_id?: string;
	original_response_message_id?: string;
	triggering_interaction_metadata?: MessageInteractionMetadataStructureInfer;
	type: number;
	user: UserStructureInfer;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-interaction-metadata-object-message-interaction-metadata-structure}
 */
export const MessageInteractionMetadataStructure: z.ZodType<MessageInteractionMetadataStructureInfer> = z.object({
	/**
	 * ID of the interaction
	 */
	id: Snowflake,
	/**
	 * TODO: Type of interaction
	 */
	type: z.number(),
	/**
	 * User who triggered the interaction
	 */
	user: UserStructure,
	/**
	 * IDs for installation context(s) related to an interaction
	 */
	authorizing_integration_owners: z.record(z.string(), ApplicationIntegrationTypesEnum),
	/**
	 * ID of the original response message, present only on follow-up messages
	 */
	original_response_message_id: Snowflake.optional(),
	/**
	 * ID of the message that contained interactive component, present only on messages created from component interactions
	 */
	interacted_message_id: Snowflake.optional(),
	/**
	 * Metadata for the interaction that was used to open the modal, present only on modal submit interactions
	 */
	triggering_interaction_metadata: z.lazy(() => MessageInteractionMetadataStructure).optional(),
});

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

export const MessageFlagsEnum = z.nativeEnum(MessageFlags);

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-activity-types}
 */
export enum MessageActivityTypes {
	Join = 1,
	Spectate = 2,
	Listen = 3,
	JoinRequest = 5,
}

export const MessageActivityTypesEnum = z.nativeEnum(MessageActivityTypes);

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure}
 */
export const MessageActivityStructure = z.object({
	/**
	 * type of message activity
	 */
	type: MessageActivityTypesEnum,
	/**
	 * party_id from a Rich Presence event
	 */
	party_id: z.string().optional(),
});

export type MessageActivityStructureInfer = z.infer<typeof MessageActivityStructure>;

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
}

export const MessageTypesEnum = z.nativeEnum(MessageTypes);

export type MessageStructureInfer = {
	activity?: MessageActivityStructureInfer;
	application?: ApplicationStructureInfer;
	application_id?: string;
	attachments: AttachmentStructureInfer[];
	author: UserStructureInfer;
	call?: MessageCallStructureInfer;
	channel_id: string;
	components?: unknown[];
	content: string | null;
	edited_timestamp?: string;
	embeds: EmbedStructureInfer[];
	flags?: MessageFlags | bigint;
	id: string;
	interaction?: unknown;
	interaction_metadata?: MessageInteractionMetadataStructureInfer;
	mention_channels?: ChannelMentionStructureInfer[];
	mention_everyone: boolean;
	mention_roles: string[];
	mentions: UserStructureInfer[];
	message_reference?: MessageReferenceStructureInfer;
	nonce?: number | string;
	pinned: boolean;
	poll?: PollStructureInfer;
	position?: number;
	reactions?: ReactionStructureInfer[];
	referenced_message?: MessageStructureInfer | null;
	resolved?: unknown;
	role_subscription_data?: RoleSubscriptionDataStructureInfer;
	sticker_items?: StickerItemStructureInfer[];
	stickers?: StickerStructureInfer[];
	thread?: unknown;
	timestamp: string;
	tts: boolean;
	type: number;
	webhook_id?: string;
};

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-structure}
 */
export const MessageStructure: z.ZodType<MessageStructureInfer> = z.object({
	/**
	 * ID of the message
	 */
	id: Snowflake,
	/**
	 * ID of the channel the message was sent in
	 */
	channel_id: Snowflake,
	/**
	 * Author of this message
	 */
	author: UserStructure,
	/**
	 * Contents of the message
	 */
	content: z.string().nullable(),
	/**
	 * When this message was sent
	 */
	timestamp: ISO8601Timestamp,
	/**
	 * When this message was edited (or null if never)
	 */
	edited_timestamp: ISO8601Timestamp.optional(),
	/**
	 * Whether this was a TTS message
	 */
	tts: z.boolean(),
	/**
	 * Whether this message mentions everyone
	 */
	mention_everyone: z.boolean(),
	/**
	 * Users specifically mentioned in the message
	 */
	mentions: z.array(UserStructure),
	/**
	 * Roles specifically mentioned in this message
	 */
	mention_roles: z.array(Snowflake),
	/**
	 * Channels specifically mentioned in this message
	 */
	mention_channels: z.array(ChannelMentionStructure).optional(),
	/**
	 * Any attached files
	 */
	attachments: z.array(AttachmentStructure),
	/**
	 * Any embedded content
	 */
	embeds: z.array(EmbedStructure),
	/**
	 * Reactions to the message
	 */
	reactions: z.array(ReactionStructure).optional(),
	/**
	 * Used for validating a message was sent
	 */
	nonce: z.union([z.string(), Integer]).optional(),
	/**
	 * Whether this message is pinned
	 */
	pinned: z.boolean(),
	/**
	 * If the message is generated by a webhook, this is the webhook's id
	 */
	webhook_id: Snowflake.optional(),
	/**
	 * Type of message
	 */
	type: MessageTypesEnum,
	/**
	 * Sent with Rich Presence-related chat embeds
	 */
	activity: MessageActivityStructure.optional(),
	/**
	 * Sent with Rich Presence-related chat embeds
	 */
	application: ApplicationStructure.partial(),
	/**
	 * If the message is an Interaction or application-owned webhook, this is the id of the application
	 */
	application_id: Snowflake.optional(),
	/**
	 * Data showing the source of a crosspost, channel follow add, pin, or reply message
	 */
	message_reference: MessageReferenceStructure.optional(),
	/**
	 * Message flags combined as a bitfield
	 */
	flags: z.union([MessageFlagsEnum, z.bigint()]).optional(),
	/**
	 * The message associated with the message_reference
	 */
	referenced_message: z.lazy(() => MessageStructure).optional().nullable(),
	/**
	 * In preview. Sent if the message is sent as a result of an interaction
	 */
	interaction_metadata: MessageInteractionMetadataStructure.optional(),
	/**
	 * TODO: Deprecated in favor of interaction_metadata; sent if the message is a response to an interaction
	 *
	 * @deprecated
	 */
	interaction: z.unknown().optional(),
	/**
	 * TODO: The thread that was started from this message, includes thread member object
	 */
	thread: z.unknown().optional(),
	/**
	 * TODO: Sent if the message contains components like buttons, action rows, or other interactive components
	 */
	components: z.array(z.unknown()).optional(),
	/**
	 * Sent if the message contains stickers
	 */
	sticker_items: z.array(StickerItemStructure).optional(),
	/**
	 * Deprecated the stickers sent with the message
	 *
	 * @deprecated
	 */
	stickers: z.array(StickerStructure).optional(),
	/**
	 * A generally increasing integer that represents the approximate position of the message in a thread
	 */
	position: Integer.optional(),
	/**
	 * Data of the role subscription purchase or renewal that prompted this ROLE_SUBSCRIPTION_PURCHASE message
	 */
	role_subscription_data: RoleSubscriptionDataStructure.optional(),
	/**
	 * TODO: data for users, members, channels, and roles in the message's auto-populated select menus
	 */
	resolved: z.unknown().optional(),
	/**
	 * A poll!
	 */
	poll: PollStructure.optional(),
	/**
	 * The call associated with the message
	 */
	call: MessageCallStructure.optional(),
});

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

export const ForumLayoutTypesEnum = z.nativeEnum(ForumLayoutTypes);

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

export const SortOrderTypesEnum = z.nativeEnum(SortOrderTypes);

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

export const ChannelFlagsEnum = z.nativeEnum(ChannelFlags);

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes}
 */
export enum VideoQualityModes {
	/**
	 * Discord chooses the quality for optimal performance
	 */
	Auto = 1,
	/**
	 * 720p
	 */
	Full = 2,
}

export const VideoQualityModesEnum = z.nativeEnum(VideoQualityModes);

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#channel-object-channel-structure}
 */
export const ChannelStructure = z.object({
	/**
	 * The id of this channel
	 */
	id: Snowflake,
	/**
	 * The type of channel
	 */
	type: ChannelTypesEnum,
	/**
	 * The id of the guild (may be missing for some channel objects received over gateway guild dispatches)
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Sorting position of the channel
	 */
	position: Integer.optional(),
	/**
	 * Explicit permission overwrites for members and roles
	 */
	permission_overwrites: z.array(OverwriteStructure).optional(),
	/**
	 * The name of the channel (1-100 characters)
	 */
	name: z.string().min(1).max(100).optional().nullable(),
	/**
	 * The channel topic (0-4096 characters for GUILD_FORUM and GUILD_MEDIA channels, 0-1024 characters for all others)
	 */
	topic: z.string().min(0).max(4_096).optional().nullable(),
	/**
	 * Whether the channel is nsfw
	 */
	nsfw: z.boolean().optional(),
	/**
	 * The id of the last message sent in this channel (or thread for GUILD_FORUM or GUILD_MEDIA channels) (may not point to an existing or valid message or thread)
	 */
	last_message_id: Snowflake.optional().nullable(),
	/**
	 * The bitrate (in bits) of the voice channel
	 */
	bitrate: Integer.optional(),
	/**
	 * The user limit of the voice channel
	 */
	user_limit: Integer.optional(),
	/**
	 * Amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
	 */
	rate_limit_per_user: Integer.min(0).max(21_600).optional(),
	/**
	 * The recipients of the DM
	 */
	recipients: z.array(UserStructure).optional(),
	/**
	 * Icon hash of the group DM
	 */
	icon: z.string().optional().nullable(),
	/**
	 * ID of the creator of the group DM or thread
	 */
	owner_id: Snowflake.optional(),
	/**
	 * Application id of the group DM creator if it is bot-created
	 */
	application_id: Snowflake.optional(),
	/**
	 * For group DM channels: whether the channel is managed by an application via the gdm.join OAuth2 scope
	 */
	managed: z.boolean().optional(),
	/**
	 * For guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created
	 */
	parent_id: Snowflake.optional().nullable(),
	/**
	 * When the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned.
	 */
	last_pin_timestamp: ISO8601Timestamp.optional().nullable(),
	/**
	 * Voice region id for the voice channel, automatic when set to null
	 */
	rtc_region: z.string().optional().nullable(),
	/**
	 * The camera video quality mode of the voice channel, 1 when not present
	 */
	video_quality_mode: VideoQualityModesEnum.optional(),
	/**
	 * Number of messages (not including the initial message or deleted messages) in a thread.
	 */
	message_count: Integer.optional(),
	/**
	 * An approximate count of users in a thread, stops counting at 50
	 */
	member_count: Integer.optional(),
	/**
	 * Thread-specific fields not needed by other channels
	 */
	thread_metadata: ThreadMetadataStructure.optional(),
	/**
	 * Thread member object for the current user, if they have joined the thread, only included on certain API endpoints
	 */
	member: ThreadMemberStructure.optional(),
	/**
	 * Default duration, copied onto newly created threads, in minutes, threads will stop showing in the channel list after the specified period of inactivity, can be set to: 60, 1440, 4320, 10080
	 */
	default_auto_archive_duration: z.union([z.literal(60), z.literal(1_440), z.literal(4_320), z.literal(10_080)]).optional(),
	/**
	 * Computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction. This does not include implicit permissions, which may need to be checked separately
	 */
	permissions: z.string().optional(),
	/**
	 * Channel flags combined as a bitfield
	 */
	flags: z.union([ChannelFlagsEnum, z.bigint()]).optional(),
	/**
	 * Number of messages ever sent in a thread, it's similar to message_count on message creation, but will not decrement the number when a message is deleted
	 */
	total_message_sent: Integer.optional(),
	/**
	 * The set of tags that can be used in a GUILD_FORUM or a GUILD_MEDIA channel
	 */
	available_tags: z.array(ForumTagStructure).optional(),
	/**
	 * The IDs of the set of tags that have been applied to a thread in a GUILD_FORUM or a GUILD_MEDIA channel
	 */
	applied_tags: z.array(Snowflake).optional(),
	/**
	 * The emoji to show in the add reaction button on a thread in a GUILD_FORUM or a GUILD_MEDIA channel
	 */
	default_reaction_emoji: DefaultReactionStructure.optional().nullable(),
	/**
	 * The initial rate_limit_per_user to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
	 */
	default_thread_rate_limit_per_user: Integer.optional(),
	/**
	 * The default sort order type used to order posts in GUILD_FORUM and GUILD_MEDIA channels. Defaults to null, which indicates a preferred sort order hasn't been set by a channel admin
	 */
	default_sort_order: SortOrderTypesEnum.optional(),
	/**
	 * The default forum layout view used to display posts in GUILD_FORUM channels. Defaults to 0, which indicates a layout view has not been set by a channel admin
	 */
	default_forum_layout: ForumLayoutTypesEnum.optional(),
});

export type ChannelStructureInfer = z.infer<typeof ChannelStructure>;
