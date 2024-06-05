import type {
	BanStructureInfer,
	ChannelStructureInfer,
	GuildMemberStructureInfer,
	GuildOnboardingStructureInfer,
	GuildPreviewStructureInfer,
	GuildScheduledEventStructureInfer,
	GuildScheduledEventUserStructureInfer,
	GuildStructureInfer,
	GuildTemplateStructureInfer,
	GuildWidgetSettingsStructureInfer,
	GuildWidgetStructureInfer,
	IntegerInfer,
	IntegrationStructureInfer,
	InviteMetadataStructureInfer,
	InviteStructureInfer,
	RoleStructureInfer,
	SnowflakeInfer,
	VoiceRegionStructureInfer,
	WelcomeScreenStructureInfer,
} from "@lunajs/core";
import {
	ChannelStructure,
	ChannelTypesEnum,
	DefaultMessageNotificationLevelEnum,
	DefaultReactionStructure,
	ExplicitContentFilterLevelEnum,
	ForumLayoutTypesEnum,
	ForumTagStructure,
	GuildFeaturesEnum,
	GuildMemberFlagsEnum,
	GuildOnboardingModeEnum,
	GuildOnboardingPromptStructure,
	GuildScheduledEventEntityMetadata,
	GuildScheduledEventEntityTypesEnum,
	GuildScheduledEventPrivacyLevelEnum,
	GuildScheduledEventStatusEnum,
	Integer,
	ISO8601Timestamp,
	LocalesEnum,
	MFALevelEnum,
	OverwriteStructure,
	RoleStructure,
	Snowflake,
	SortOrderTypesEnum,
	SystemChannelFlagsEnum,
	ThreadMemberStructure,
	VerificationLevelEnum,
	VideoQualityModesEnum,
	WelcomeScreenChannelStructure,
} from "@lunajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#get-guild-template}
 */
export function GetGuildTemplate(code: string): RestMakeRequestOptions<GuildTemplateStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/templates/${code}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#create-guild-from-guild-template-json-params}
 */
export const CreateGuildFromGuildTemplateJSON = z.object({
	/**
	 * Name of the guild (2-100 characters)
	 */
	name: z.string().min(2).max(100),
	/**
	 * Base64 128x128 image for the guild icon
	 */
	icon: z.string().base64().optional(),
});

export type CreateGuildFromGuildTemplateJSONInfer = z.infer<typeof CreateGuildFromGuildTemplateJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#create-guild-from-guild-template}
 */
export function CreateGuildFromGuildTemplate(code: string, data: CreateGuildFromGuildTemplateJSONInfer): RestMakeRequestOptions<GuildStructureInfer> {
	return {
		method: "POST",
		path: `/guilds/templates/${code}`,
		body: JSON.stringify(CreateGuildFromGuildTemplateJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#get-guild-templates}
 */
export function GetGuildTemplates(guildId: SnowflakeInfer): RestMakeRequestOptions<GuildTemplateStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/templates`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#create-guild-template-json-params}
 */
export const CreateGuildTemplateJSON = z.object({
	/**
	 * Name of the template (1-100 characters)
	 */
	name: z.string().min(1).max(100),
	/**
	 * Description for the template (0-120 characters)
	 */
	description: z.string().min(0).max(120).optional().nullable(),
});

export type CreateGuildTemplateJSONInfer = z.infer<typeof CreateGuildTemplateJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#create-guild-template}
 */
export function CreateGuildTemplate(guildId: SnowflakeInfer, data: CreateGuildTemplateJSONInfer): RestMakeRequestOptions<GuildTemplateStructureInfer> {
	return {
		method: "POST",
		path: `/guilds/${Snowflake.parse(guildId)}/templates`,
		body: JSON.stringify(CreateGuildTemplateJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#sync-guild-template}
 */
export function SyncGuildTemplate(guildId: SnowflakeInfer, code: string): RestMakeRequestOptions<GuildTemplateStructureInfer> {
	return {
		method: "PUT",
		path: `/guilds/${Snowflake.parse(guildId)}/templates/${code}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#modify-guild-template-json-params}
 */
export const ModifyGuildTemplateJSON = z.object({
	/**
	 * Name of the template (1-100 characters)
	 */
	name: z.string().min(1).max(100).optional(),
	/**
	 * Description for the template (0-120 characters)
	 */
	description: z.string().min(0).max(120).optional().nullable(),
});

export type ModifyGuildTemplateJSONInfer = z.infer<typeof ModifyGuildTemplateJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#modify-guild-template}
 */
export function ModifyGuildTemplate(guildId: SnowflakeInfer, code: string, data: ModifyGuildTemplateJSONInfer): RestMakeRequestOptions<GuildTemplateStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/templates/${code}`,
		body: JSON.stringify(ModifyGuildTemplateJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#delete-guild-template}
 */
export function DeleteGuildTemplate(guildId: SnowflakeInfer, code: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/templates/${code}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild-query-string-params}
 */
export const ListScheduledEventsForGuildQuery = z.object({
	/**
	 * Include number of users subscribed to each event
	 */
	with_user_count: z.boolean().optional(),
});

export type ListScheduledEventsForGuildQueryInfer = z.infer<typeof ListScheduledEventsForGuildQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild}
 */
export function ListScheduledEventsForGuild(guildId: SnowflakeInfer, query?: ListScheduledEventsForGuildQueryInfer): RestMakeRequestOptions<GuildScheduledEventStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/scheduled-events`,
		query: ListScheduledEventsForGuildQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event-json-params}
 */
export const CreateGuildScheduledEventJSON = z.object({
	/**
	 * The channel id of the scheduled event.
	 */
	channel_id: Snowflake.optional(),
	/**
	 * Entity metadata
	 */
	entity_metadata: GuildScheduledEventEntityMetadata.optional(),
	/**
	 * The name of the scheduled event
	 */
	name: z.string(),
	/**
	 * The privacy level of the scheduled event
	 */
	privacy_level: GuildScheduledEventPrivacyLevelEnum,
	/**
	 * The time to schedule the scheduled event
	 */
	scheduled_start_time: ISO8601Timestamp,
	/**
	 * The time when the scheduled event is scheduled to end
	 */
	scheduled_end_time: ISO8601Timestamp.optional(),
	/**
	 * The description of the scheduled event
	 */
	description: z.string().optional(),
	/**
	 * The entity type of the scheduled event
	 */
	entity_type: GuildScheduledEventEntityTypesEnum,
	/**
	 * The cover image of the scheduled event
	 */
	image: z.string().optional(),
});

export type CreateGuildScheduledEventJSONInfer = z.infer<typeof CreateGuildScheduledEventJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event}
 */
export function CreateGuildScheduledEvent(guildId: SnowflakeInfer, reason: string, data: CreateGuildScheduledEventJSONInfer): RestMakeRequestOptions<GuildScheduledEventStructureInfer> {
	return {
		method: "POST",
		path: `/guilds/${Snowflake.parse(guildId)}/scheduled-events`,
		body: JSON.stringify(CreateGuildScheduledEventJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-query-string-params}
 */
export const GetGuildScheduledEventQuery = z.object({
	/**
	 * Include number of users subscribed to each event
	 */
	with_user_count: z.boolean().optional(),
});

export type GetGuildScheduledEventQueryInfer = z.infer<typeof GetGuildScheduledEventQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event}
 */
export function GetGuildScheduledEvent(guildId: SnowflakeInfer, eventId: SnowflakeInfer, query?: GetGuildScheduledEventQueryInfer): RestMakeRequestOptions<GuildScheduledEventStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/scheduled-events/${Snowflake.parse(eventId)}`,
		query: GetGuildScheduledEventQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event-json-params}
 */
export const ModifyGuildScheduledEventJSON = z.object({
	/**
	 * The channel id of the scheduled event, set to null if changing entity type to EXTERNAL
	 */
	channel_id: Snowflake.optional().nullable(),
	/**
	 * The entity metadata of the scheduled event
	 */
	entity_metadata: GuildScheduledEventEntityMetadata.optional().nullable(),
	/**
	 * The name of the scheduled event
	 */
	name: z.string().optional(),
	/**
	 * The privacy level of the scheduled event
	 */
	privacy_level: GuildScheduledEventPrivacyLevelEnum.optional(),
	/**
	 * The time to schedule the scheduled event
	 */
	scheduled_start_time: ISO8601Timestamp.optional(),
	/**
	 * The time when the scheduled event is scheduled to end
	 */
	scheduled_end_time: ISO8601Timestamp.optional(),
	/**
	 * The description of the scheduled event
	 */
	description: z.string().optional().nullable(),
	/**
	 * The entity type of the scheduled event
	 */
	entity_type: GuildScheduledEventEntityTypesEnum.optional(),
	/**
	 * The status of the scheduled event
	 */
	status: GuildScheduledEventStatusEnum.optional(),
	/**
	 * The cover image of the scheduled event
	 */
	image: z.string().optional(),
});

export type ModifyGuildScheduledEventJSONInfer = z.infer<typeof ModifyGuildScheduledEventJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event}
 */
export function ModifyGuildScheduledEvent(guildId: SnowflakeInfer, eventId: SnowflakeInfer, reason: string, data: ModifyGuildScheduledEventJSONInfer): RestMakeRequestOptions<GuildScheduledEventStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/scheduled-events/${Snowflake.parse(eventId)}`,
		body: JSON.stringify(ModifyGuildScheduledEventJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#delete-guild-scheduled-event}
 */
export function DeleteGuildScheduledEvent(guildId: SnowflakeInfer, eventId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/scheduled-events/${Snowflake.parse(eventId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users-query-string-params}
 */
export const GetGuildScheduledEventUsersQuery = z.object({
	/**
	 * Number of users to return (up to maximum 100)
	 */
	limit: z.number().max(100).default(100).optional(),
	/**
	 * Include guild member data if it exists
	 */
	with_member: z.boolean().optional(),
	/**
	 * Consider only users before given user id
	 */
	before: Snowflake.optional(),
	/**
	 * Consider only users after given user id
	 */
	after: Snowflake.optional(),
});

export type GetGuildScheduledEventUsersQueryInfer = z.infer<typeof GetGuildScheduledEventUsersQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users}
 */
export function GetGuildScheduledEventUsers(guildId: SnowflakeInfer, eventId: SnowflakeInfer, query?: GetGuildScheduledEventUsersQueryInfer): RestMakeRequestOptions<GuildScheduledEventUserStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/scheduled-events/${Snowflake.parse(eventId)}/users`,
		query: GetGuildScheduledEventUsersQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-json-params}
 */
export const CreateGuildJSON = z.object({
	/**
	 * Name of the guild (2-100 characters)
	 */
	name: z.string().min(2).max(100),
	/**
	 * Voice region id (deprecated)
	 */
	region: z.string().optional().nullable(),
	/**
	 * Base64 128x128 image for the guild icon
	 */
	icon: z.string().base64().optional(),
	/**
	 * Verification level
	 */
	verification_level: VerificationLevelEnum.optional(),
	/**
	 * Default message notification level
	 */
	default_message_notifications: DefaultMessageNotificationLevelEnum.optional(),
	/**
	 * Explicit content filter level
	 */
	explicit_content_filter: ExplicitContentFilterLevelEnum.optional(),
	/**
	 * New guild roles
	 */
	roles: z.array(RoleStructure).optional(),
	/**
	 * New guild's channels
	 */
	channels: z.array(ChannelStructure.partial()).optional(),
	/**
	 * Id for afk channel
	 */
	afk_channel_id: Snowflake.optional(),
	/**
	 * Afk timeout in seconds, can be set to: 60, 300, 900, 1800, 3600
	 */
	afk_timeout: z.union([z.literal(60), z.literal(300), z.literal(900), z.literal(1_800), z.literal(3_600)]).optional(),
	/**
	 * The id of the channel where guild notices such as welcome messages and boost events are posted
	 */
	system_channel_id: Snowflake.optional(),
	/**
	 * System channel flags
	 */
	system_channel_flags: SystemChannelFlagsEnum.optional(),
});

export type CreateGuildJSONInfer = z.infer<typeof CreateGuildJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild}
 */
export function CreateGuild(data: CreateGuildJSONInfer): RestMakeRequestOptions<GuildStructureInfer> {
	return {
		method: "POST",
		path: "/guilds",
		body: JSON.stringify(CreateGuildJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-query-string-params}
 */
export const GetGuildQuery = z.object({
	/**
	 * When true, will return approximate member and presence counts for the guild
	 */
	with_counts: z.boolean().default(false).optional(),
});

export type GetGuildQueryInfer = z.infer<typeof GetGuildQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild}
 */
export function GetGuild(guildId: SnowflakeInfer, query?: GetGuildQueryInfer): RestMakeRequestOptions<GuildStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}`,
		query: GetGuildQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-preview}
 */
export function GetGuildPreview(guildId: SnowflakeInfer): RestMakeRequestOptions<GuildPreviewStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/preview`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-json-params}
 */
export const ModifyGuildJSON = z.object({
	/**
	 * Name of the guild (2-100 characters)
	 */
	name: z.string().min(2).max(100).optional(),
	/**
	 * Voice region id (deprecated)
	 */
	region: z.string().optional().nullable(),
	/**
	 * Verification level
	 */
	verification_level: VerificationLevelEnum.optional().nullable(),
	/**
	 * Default message notification level
	 */
	default_message_notifications: DefaultMessageNotificationLevelEnum.optional().nullable(),
	/**
	 * Explicit content filter level
	 */
	explicit_content_filter: ExplicitContentFilterLevelEnum.optional().nullable(),
	/**
	 * Id for afk channel
	 */
	afk_channel_id: Snowflake.optional().nullable(),
	/**
	 * Afk timeout in seconds, can be set to: 60, 300, 900, 1800, 3600
	 */
	afk_timeout: z.union([z.literal(60), z.literal(300), z.literal(900), z.literal(1_800), z.literal(3_600)]).optional().nullable(),
	/**
	 * Base64 128x128 image for the guild icon
	 */
	icon: z.string().base64().optional().nullable(),
	/**
	 * User id to transfer guild ownership to (must be owner)
	 */
	owner_id: Snowflake.optional(),
	/**
	 * Base64 16:9 png/jpeg image for the guild splash (when the server has the INVITE_SPLASH feature)
	 */
	splash: z.string().base64().optional().nullable(),
	/**
	 * Base64 16:9 png/jpeg image for the guild discovery splash (when the server has the DISCOVERABLE feature)
	 */
	discovery_splash: z.string().base64().optional().nullable(),
	/**
	 * Base64 16:9 png/jpeg image for the guild banner (when the server has the BANNER feature; can be animated gif when the server has the ANIMATED_BANNER feature)
	 */
	banner: z.string().base64().optional().nullable(),
	/**
	 * The id of the channel where guild notices such as welcome messages and boost events are posted
	 */
	system_channel_id: Snowflake.optional().nullable(),
	/**
	 * System channel flags
	 */
	system_channel_flags: SystemChannelFlagsEnum.optional(),
	/**
	 * The id of the channel where Community guilds display rules and/or guidelines
	 */
	rules_channel_id: Snowflake.optional().nullable(),
	/**
	 * The id of the channel where admins and moderators of Community guilds receive notices from Discord
	 */
	public_updates_channel_id: Snowflake.optional().nullable(),
	/**
	 * The preferred locale of a Community guild used in server discovery and notices from Discord; defaults to "en-US"
	 */
	preferred_locale: LocalesEnum.optional().nullable(),
	/**
	 * Enabled guild features
	 */
	features: z.array(GuildFeaturesEnum).optional(),
	/**
	 * The description for the guild
	 */
	description: z.string().optional().nullable(),
	/**
	 * Whether the guild's boost progress bar should be enabled
	 */
	premium_progress_bar_enabled: z.boolean().optional(),
	/**
	 * The id of the channel where admins and moderators of Community guilds receive safety alerts from Discord
	 */
	safety_alerts_channel_id: Snowflake.optional().nullable(),
});

export type ModifyGuildJSONInfer = z.infer<typeof ModifyGuildJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild}
 */
export function ModifyGuild(guildId: SnowflakeInfer, reason: string, data: ModifyGuildJSONInfer): RestMakeRequestOptions<GuildStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}`,
		body: JSON.stringify(ModifyGuildJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild}
 */
export function DeleteGuild(guildId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-channels}
 */
export function GetGuildChannels(guildId: SnowflakeInfer): RestMakeRequestOptions<ChannelStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/channels`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-channel-json-params}
 */
export const CreateGuildChannelJSON = z.object({
	/**
	 * Channel name (1-100 characters)
	 */
	name: z.string().min(1).max(100),
	/**
	 * The type of channel
	 */
	type: ChannelTypesEnum,
	/**
	 * Channel topic (0-1024 characters)
	 */
	topic: z.string().min(0).max(1_024).optional().nullable(),
	/**
	 * The bitrate (in bits) of the voice or stage channel; min 8000
	 */
	bitrate: Integer.min(8_000).optional().nullable(),
	/**
	 * The user limit of the voice channel
	 */
	user_limit: Integer.optional().nullable(),
	/**
	 * Amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
	 */
	rate_limit_per_user: Integer.min(0).max(21_600).optional().nullable(),
	/**
	 * Sorting position of the channel
	 */
	position: Integer.optional().nullable(),
	/**
	 * The channel's permission overwrites
	 */
	permission_overwrites: z.array(OverwriteStructure.partial()).optional().nullable(),
	/**
	 * Id of the parent category for a channel
	 */
	parent_id: Snowflake.optional().nullable(),
	/**
	 * Whether the channel is nsfw
	 */
	nsfw: z.boolean().optional().nullable(),
	/**
	 * Channel voice region id of the voice or stage channel, automatic when set to null
	 */
	rtc_region: z.string().optional().nullable(),
	/**
	 * The camera video quality mode of the voice channel
	 */
	video_quality_mode: VideoQualityModesEnum.optional().nullable(),
	/**
	 * The default duration that the clients use (not the API) for newly created threads in the channel, in minutes, to automatically archive the thread after recent activity
	 */
	default_auto_archive_duration: Integer.optional().nullable(),
	/**
	 * Emoji to show in the add reaction button on a thread in a GUILD_FORUM or a GUILD_MEDIA channel
	 */
	default_reaction_emoji: DefaultReactionStructure.optional().nullable(),
	/**
	 * Set of tags that can be used in a GUILD_FORUM or a GUILD_MEDIA channel
	 */
	available_tags: z.array(ForumTagStructure).optional().nullable(),
	/**
	 * The default sort order type used to order posts in GUILD_FORUM and GUILD_MEDIA channels
	 */
	default_sort_order: SortOrderTypesEnum.optional().nullable(),
	/**
	 * The default forum layout view used to display posts in GUILD_FORUM channels
	 */
	default_forum_layout: ForumLayoutTypesEnum.optional().nullable(),
	/**
	 * The initial rate_limit_per_user to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
	 */
	default_thread_rate_limit_per_user: Integer.optional().nullable(),
});

export type CreateGuildChannelJSONInfer = z.infer<typeof CreateGuildChannelJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-channel}
 */
export function CreateGuildChannel(guildId: SnowflakeInfer, reason: string, data: CreateGuildChannelJSONInfer): RestMakeRequestOptions<ChannelStructureInfer> {
	return {
		method: "POST",
		path: `/guilds/${Snowflake.parse(guildId)}/channels`,
		body: JSON.stringify(CreateGuildChannelJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions-json-params}
 */
export const ModifyGuildChannelPositionsJSON = z.object({
	/**
	 * Channel id
	 */
	id: Snowflake,
	/**
	 * Sorting position of the channel
	 */
	position: Integer.optional().nullable(),
	/**
	 * Syncs the permission overwrites with the new parent, if moving to a new category
	 */
	lock_permissions: z.boolean().optional().nullable(),
	/**
	 * The new parent ID for the channel that is moved
	 */
	parent_id: Snowflake.optional().nullable(),
});

export type ModifyGuildChannelPositionsJSONInfer = z.infer<typeof ModifyGuildChannelPositionsJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions}
 */
export function ModifyGuildChannelPositions(guildId: SnowflakeInfer, data: ModifyGuildChannelPositionsJSONInfer[]): RestMakeRequestOptions<void> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/channels`,
		body: JSON.stringify(ModifyGuildChannelPositionsJSON.array().parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#list-active-guild-threads-response-body}
 */
export const ListActiveGuildThreadsResponse = z.object({
	/**
	 * The active threads
	 */
	threads: z.array(ChannelStructure).optional(),
	/**
	 * A thread member object for each returned thread the current user has joined
	 */
	members: z.array(ThreadMemberStructure).optional(),
});

export type ListActiveGuildThreadsResponseInfer = z.infer<typeof ListActiveGuildThreadsResponse>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#list-active-guild-threads}
 */
export function ListActiveGuildThreads(guildId: SnowflakeInfer): RestMakeRequestOptions<ListActiveGuildThreadsResponseInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/threads/active`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-member}
 */
export function GetGuildMember(guildId: SnowflakeInfer, userId: SnowflakeInfer): RestMakeRequestOptions<GuildMemberStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/members/${Snowflake.parse(userId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#list-guild-members-query-string-params}
 */
export const ListGuildMembersQuery = z.object({
	/**
	 * max number of members to return (1-1000)
	 */
	limit: z.number().min(1).max(1_000).default(1).optional(),
	/**
	 * the highest user id in the previous page
	 */
	after: Snowflake.optional(),
});

export type ListGuildMembersQueryInfer = z.infer<typeof ListGuildMembersQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#list-guild-members}
 */
export function ListGuildMembers(guildId: SnowflakeInfer, query?: ListGuildMembersQueryInfer): RestMakeRequestOptions<GuildMemberStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/members`,
		query: ListGuildMembersQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#search-guild-members-query-string-params}
 */
export const SearchGuildMembersQuery = z.object({
	/**
	 * Query string to match username(s) and nickname(s) against.
	 */
	query: z.string().optional(),
	/**
	 * max number of members to return (1-1000)
	 */
	limit: z.number().min(1).max(1_000).default(1).optional(),
});

export type SearchGuildMembersQueryInfer = z.infer<typeof SearchGuildMembersQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#search-guild-members}
 */
export function SearchGuildMembers(guildId: SnowflakeInfer, query?: SearchGuildMembersQueryInfer): RestMakeRequestOptions<GuildMemberStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/members/search`,
		query: SearchGuildMembersQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#add-guild-member-json-params}
 */
export const AddGuildMemberJSON = z.object({
	/**
	 * An oauth2 access token granted with the guilds.join to the bot's application for the user you want to add to the guild
	 */
	access_token: z.string(),
	/**
	 * Value to set user's nickname to
	 */
	nick: z.string().optional(),
	/**
	 * Array of role ids the member is assigned
	 */
	roles: z.array(Snowflake).optional(),
	/**
	 * Whether the user is muted in voice channels
	 */
	mute: z.boolean().optional(),
	/**
	 * Whether the user is deafened in voice channels
	 */
	deaf: z.boolean().optional(),
});

export type AddGuildMemberJSONInfer = z.infer<typeof AddGuildMemberJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#add-guild-member}
 */
export function AddGuildMember(guildId: SnowflakeInfer, userId: SnowflakeInfer, data: AddGuildMemberJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PUT",
		path: `/guilds/${Snowflake.parse(guildId)}/members/${Snowflake.parse(userId)}`,
		body: JSON.stringify(AddGuildMemberJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-member-json-params}
 */
export const ModifyGuildMemberJSON = z.object({
	/**
	 * Value to set user's nickname to
	 */
	nick: z.string().optional().nullable(),
	/**
	 * Array of role ids the member is assigned
	 */
	roles: z.array(Snowflake).optional().nullable(),
	/**
	 * Whether the user is muted in voice channels
	 */
	mute: z.boolean().optional().nullable(),
	/**
	 * Whether the user is deafened in voice channels
	 */
	deaf: z.boolean().optional().nullable(),
	/**
	 * Id of channel to move user to (if they are connected to voice)
	 */
	channel_id: Snowflake.optional().nullable(),
	/**
	 * When the user's timeout will expire and the user will be able to communicate in the guild again (up to 28 days in the future), set to null to remove timeout. Will throw a 403 error if the user has the ADMINISTRATOR permission or is the owner of the guild
	 */
	communication_disabled_until: ISO8601Timestamp.optional().nullable(),
	/**
	 * Guild member flags
	 */
	flags: GuildMemberFlagsEnum.optional().nullable(),
});

export type ModifyGuildMemberJSONInfer = z.infer<typeof ModifyGuildMemberJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-member}
 */
export function ModifyGuildMember(guildId: SnowflakeInfer, userId: SnowflakeInfer, reason: string, data: ModifyGuildMemberJSONInfer): RestMakeRequestOptions<GuildMemberStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/members/${Snowflake.parse(userId)}`,
		body: JSON.stringify(ModifyGuildMemberJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-member-json-params}
 */
export const ModifyCurrentMemberJSON = z.object({
	/**
	 * Value to set user's nickname to
	 */
	nick: z.string().optional().nullable(),
});

export type ModifyCurrentMemberJSONInfer = z.infer<typeof ModifyCurrentMemberJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-member}
 */
export function ModifyCurrentMember(guildId: SnowflakeInfer, reason: string, data: ModifyCurrentMemberJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/members/@me`,
		body: JSON.stringify(ModifyCurrentMemberJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-user-nick-json-params}
 * @deprecated
 */
export const ModifyCurrentUserNickJSON = z.object({
	/**
	 * Value to set user's nickname to
	 */
	nick: z.string().optional().nullable(),
});

export type ModifyCurrentUserNickJSONInfer = z.infer<typeof ModifyCurrentUserNickJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-user-nick}
 * @deprecated
 */
export function ModifyCurrentUserNick(guildId: SnowflakeInfer, reason: string, data: ModifyCurrentUserNickJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/members/@me/nick`,
		body: JSON.stringify(ModifyCurrentUserNickJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#add-guild-member-role}
 */
export function AddGuildMemberRole(guildId: SnowflakeInfer, userId: SnowflakeInfer, roleId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "PUT",
		path: `/guilds/${Snowflake.parse(guildId)}/members/${Snowflake.parse(userId)}/roles/${Snowflake.parse(roleId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-member-role}
 */
export function RemoveGuildMemberRole(guildId: SnowflakeInfer, userId: SnowflakeInfer, roleId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/members/${Snowflake.parse(userId)}/roles/${Snowflake.parse(roleId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-member}
 */
export function RemoveGuildMember(guildId: SnowflakeInfer, userId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/members/${Snowflake.parse(userId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-bans-query-string-params}
 */
export const GetGuildBansQuery = z.object({
	/**
	 * number of users to return (up to maximum 1000)
	 */
	limit: z.number().default(1_000).optional(),
	/**
	 * consider only users before given user id
	 */
	before: Snowflake.optional(),
	/**
	 * consider only users after given user id
	 */
	after: Snowflake.optional(),
});

export type GetGuildBansQueryInfer = z.infer<typeof GetGuildBansQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-bans}
 */
export function GetGuildBans(guildId: SnowflakeInfer, query?: GetGuildBansQueryInfer): RestMakeRequestOptions<BanStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/bans`,
		query: GetGuildBansQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-ban}
 */
export function GetGuildBan(guildId: SnowflakeInfer, userId: SnowflakeInfer): RestMakeRequestOptions<BanStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/bans/${Snowflake.parse(userId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-ban-json-params}
 */
export const CreateGuildBanJSON = z.object({
	/**
	 * Number of days to delete messages for (0-7) (deprecated)
	 *
	 * @deprecated
	 */
	delete_message_days: Integer.min(0).max(7).default(0).optional(),
	/**
	 * Number of seconds to delete messages for, between 0 and 604800 (7 days)
	 */
	delete_message_seconds: Integer.min(0).max(604_800).default(0).optional(),
});

export type CreateGuildBanJSONInfer = z.infer<typeof CreateGuildBanJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-ban}
 */
export function CreateGuildBan(guildId: SnowflakeInfer, userId: SnowflakeInfer, reason: string, data: CreateGuildBanJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PUT",
		path: `/guilds/${Snowflake.parse(guildId)}/bans/${Snowflake.parse(userId)}`,
		query: CreateGuildBanJSON.parse(data),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-ban}
 */
export function RemoveGuildBan(guildId: SnowflakeInfer, userId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/bans/${Snowflake.parse(userId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#bulk-guild-ban-json-params}
 */
export const BulkGuildBanJSON = z.object({
	/**
	 * List of user ids to ban (max 200)
	 */
	user_ids: z.array(Snowflake).max(200),
	/**
	 * Number of seconds to delete messages for, between 0 and 604800 (7 days)
	 */
	delete_message_seconds: Integer.min(0).max(604_800).default(0).optional(),
});

export type BulkGuildBanJSONInfer = z.infer<typeof BulkGuildBanJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#bulk-guild-ban-bulk-ban-response}
 */
export const BulkGuildBanResult = z.object({
	/**
	 * List of user ids, that were successfully banned
	 */
	banned_users: z.array(Snowflake),
	/**
	 * List of user ids, that were not banned
	 */
	failed_users: z.array(Snowflake),
});

export type BulkGuildBanResultInfer = z.infer<typeof BulkGuildBanResult>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#bulk-guild-ban}
 */
export function BulkGuildBan(guildId: SnowflakeInfer, reason: string, data: BulkGuildBanJSONInfer): RestMakeRequestOptions<BulkGuildBanResultInfer> {
	return {
		method: "PUT",
		path: `/guilds/${Snowflake.parse(guildId)}/bans`,
		body: JSON.stringify(BulkGuildBanJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-roles}
 */
export function GetGuildRoles(guildId: SnowflakeInfer): RestMakeRequestOptions<RoleStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/roles`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-role-json-params}
 */
export const CreateGuildRoleJSON = z.object({
	/**
	 * name of the role, max 100 characters
	 */
	name: z.string().max(100).default("new role"),
	/**
	 * bitwise value of the enabled/disabled permissions
	 */
	permissions: z.string(),
	/**
	 * RGB color value
	 */
	color: Integer.default(0),
	/**
	 * whether the role should be displayed separately in the sidebar
	 */
	hoist: z.boolean().default(false),
	/**
	 * the role's icon image (if the guild has the ROLE_ICONS feature)
	 */
	icon: z.string().base64().optional().nullable(),
	/**
	 * the role's unicode emoji as a standard emoji (if the guild has the ROLE_ICONS feature)
	 */
	unicode_emoji: z.string().optional().nullable(),
	/**
	 * whether the role should be mentionable
	 */
	mentionable: z.boolean().default(false),
});

export type CreateGuildRoleJSONInfer = z.infer<typeof CreateGuildRoleJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-role}
 */
export function CreateGuildRole(guildId: SnowflakeInfer, reason: string, data: CreateGuildRoleJSONInfer): RestMakeRequestOptions<RoleStructureInfer> {
	return {
		method: "POST",
		path: `/guilds/${Snowflake.parse(guildId)}/roles`,
		body: JSON.stringify(CreateGuildRoleJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role-positions-json-params}
 */
export const ModifyGuildRolePositionsJSON = z.object({
	/**
	 * role
	 */
	id: Snowflake,
	/**
	 * sorting position of the role
	 */
	position: Integer.optional().nullable(),
});

export type ModifyGuildRolePositionsJSONInfer = z.infer<typeof ModifyGuildRolePositionsJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role-positions}
 */
export function ModifyGuildRolePositions(guildId: SnowflakeInfer, reason: string, data: ModifyGuildRolePositionsJSONInfer[]): RestMakeRequestOptions<RoleStructureInfer[]> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/roles`,
		body: JSON.stringify(ModifyGuildRolePositionsJSON.array().parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role-json-params}
 */
export const ModifyGuildRoleJSON = z.object({
	/**
	 * name of the role, max 100 characters
	 */
	name: z.string().max(100).optional().nullable(),
	/**
	 * bitwise value of the enabled/disabled permissions
	 */
	permissions: z.string().optional().nullable(),
	/**
	 * RGB color value
	 */
	color: Integer.optional().nullable(),
	/**
	 * whether the role should be displayed separately in the sidebar
	 */
	hoist: z.boolean().optional().nullable(),
	/**
	 * the role's icon image (if the guild has the ROLE_ICONS feature)
	 */
	icon: z.string().base64().optional().nullable(),
	/**
	 * the role's unicode emoji as a standard emoji (if the guild has the ROLE_ICONS feature)
	 */
	unicode_emoji: z.string().optional().nullable(),
	/**
	 * whether the role should be mentionable
	 */
	mentionable: z.boolean().optional().nullable(),
});

export type ModifyGuildRoleJSONInfer = z.infer<typeof ModifyGuildRoleJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role}
 */
export function ModifyGuildRole(guildId: SnowflakeInfer, roleId: SnowflakeInfer, reason: string, data: ModifyGuildRoleJSONInfer): RestMakeRequestOptions<RoleStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/roles/${Snowflake.parse(roleId)}`,
		body: JSON.stringify(ModifyGuildRoleJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level-json-params}
 */
export const ModifyGuildMFALevelJSON = z.object({
	/**
	 * MFA level
	 */
	level: MFALevelEnum,
});

export type ModifyGuildMFALevelJSONInfer = z.infer<typeof ModifyGuildMFALevelJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level}
 */
export function ModifyGuildMFALevel(guildId: SnowflakeInfer, reason: string, data: ModifyGuildMFALevelJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/mfa`,
		body: JSON.stringify(ModifyGuildMFALevelJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild-role}
 */
export function DeleteGuildRole(guildId: SnowflakeInfer, roleId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/roles/${Snowflake.parse(roleId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-prune-count-query-string-params}
 */
export const GetGuildPruneCountQuery = z.object({
	/**
	 * number of days to count prune for (1-30)
	 */
	days: z.number().min(1).max(30).default(7).optional(),
	/**
	 * role(s) to include
	 */
	include_roles: z.string().optional(),
});

export type GetGuildPruneCountQueryInfer = z.infer<typeof GetGuildPruneCountQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-prune-count}
 */
export function GetGuildPruneCount(guildId: SnowflakeInfer, query?: GetGuildPruneCountQueryInfer): RestMakeRequestOptions<{
	pruned: IntegerInfer;
}> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/prune`,
		query: GetGuildPruneCountQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#begin-guild-prune-json-params}
 */
export const BeginGuildPruneJSON = z.object({
	/**
	 * number of days to prune (1-30)
	 */
	days: Integer.min(1).max(30).default(7),
	/**
	 * whether pruned is returned, discouraged for large guilds
	 */
	compute_prune_count: z.boolean().default(true),
	/**
	 * role(s) to include
	 */
	include_roles: z.array(Snowflake).optional(),
	/**
	 * reason for the prune (deprecated)
	 *
	 * @deprecated
	 */
	reason: z.string().optional(),
});

export type BeginGuildPruneJSONInfer = z.infer<typeof BeginGuildPruneJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#begin-guild-prune}
 */
export function BeginGuildPrune(guildId: SnowflakeInfer, reason: string, data: BeginGuildPruneJSONInfer): RestMakeRequestOptions<{
	pruned: IntegerInfer;
}> {
	return {
		method: "POST",
		path: `/guilds/${Snowflake.parse(guildId)}/prune`,
		body: JSON.stringify(BeginGuildPruneJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-voice-regions}
 */
export function GetGuildVoiceRegions(guildId: SnowflakeInfer): RestMakeRequestOptions<VoiceRegionStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/regions`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-invites}
 */
export function GetGuildInvites(guildId: SnowflakeInfer): RestMakeRequestOptions<InviteMetadataStructureInfer[] | InviteStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/invites`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-integrations}
 */
export function GetGuildIntegrations(guildId: SnowflakeInfer): RestMakeRequestOptions<IntegrationStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/integrations`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild-integration}
 */
export function DeleteGuildIntegration(guildId: SnowflakeInfer, integrationId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/integrations/${Snowflake.parse(integrationId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget-settings}
 */
export function GetGuildWidgetSettings(guildId: SnowflakeInfer): RestMakeRequestOptions<GuildWidgetSettingsStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/widget`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-widget}
 */
export function ModifyGuildWidget(guildId: SnowflakeInfer, reason: string, data: GuildWidgetSettingsStructureInfer): RestMakeRequestOptions<GuildWidgetSettingsStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/widget`,
		body: JSON.stringify(data),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget}
 */
export function GetGuildWidget(guildId: SnowflakeInfer): RestMakeRequestOptions<GuildWidgetStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/widget.json`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-vanity-url}
 */
export function GetGuildVanityURL(guildId: SnowflakeInfer): RestMakeRequestOptions<Partial<InviteStructureInfer>> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/vanity-url`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget-image-query-string-params}
 */
export const GetGuildWidgetImageQuery = z.object({
	/**
	 * style of the widget image returned (see below)
	 */
	style: z.union([z.literal("shield"), z.literal("banner1"), z.literal("banner2"), z.literal("banner3"), z.literal("banner4")]).optional(),
});

export type GetGuildWidgetImageQueryInfer = z.infer<typeof GetGuildWidgetImageQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget-image}
 */
export function GetGuildWidgetImage(guildId: SnowflakeInfer, query?: GetGuildWidgetImageQueryInfer): RestMakeRequestOptions<void> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/widget.png`,
		query: GetGuildWidgetImageQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-welcome-screen}
 */
export function GetGuildWelcomeScreen(guildId: SnowflakeInfer): RestMakeRequestOptions<WelcomeScreenStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/welcome-screen`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen-json-params}
 */
export const ModifyGuildWelcomeScreenJSON = z.object({
	/**
	 * whether the welcome screen is enabled
	 */
	enabled: z.boolean(),
	/**
	 * channels linked in the welcome screen and their display options
	 */
	welcome_channels: z.array(WelcomeScreenChannelStructure).optional(),
	/**
	 * the server description to show in the welcome screen
	 */
	description: z.string().optional().nullable(),
});

export type ModifyGuildWelcomeScreenJSONInfer = z.infer<typeof ModifyGuildWelcomeScreenJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen}
 */
export function ModifyGuildWelcomeScreen(guildId: SnowflakeInfer, reason: string, data: ModifyGuildWelcomeScreenJSONInfer): RestMakeRequestOptions<WelcomeScreenStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/welcome-screen`,
		body: JSON.stringify(ModifyGuildWelcomeScreenJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-onboarding}
 */
export function GetGuildOnboarding(guildId: SnowflakeInfer): RestMakeRequestOptions<GuildOnboardingStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/onboarding`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-onboarding-json-params}
 */
export const ModifyGuildOnboardingJSON = z.object({
	/**
	 * Prompts shown during onboarding and in customize community
	 */
	prompts: z.array(GuildOnboardingPromptStructure).optional(),
	/**
	 * Channel IDs that members get opted into automatically
	 */
	default_channel_ids: z.array(Snowflake).optional(),
	/**
	 * Whether onboarding is enabled in the guild
	 */
	enabled: z.boolean().optional(),
	/**
	 * Current mode of onboarding
	 */
	mode: GuildOnboardingModeEnum.optional(),
});

export type ModifyGuildOnboardingJSONInfer = z.infer<typeof ModifyGuildOnboardingJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-onboarding}
 */
export function ModifyGuildOnboarding(guildId: SnowflakeInfer, reason: string, data: ModifyGuildOnboardingJSONInfer): RestMakeRequestOptions<GuildOnboardingStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/onboarding`,
		body: JSON.stringify(ModifyGuildOnboardingJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-user-voice-state-json-params}
 */
export const ModifyCurrentUserVoiceStateJSON = z.object({
	/**
	 * the id of the channel the user is currently in
	 */
	channel_id: Snowflake,
	/**
	 * toggles the user's suppress state
	 */
	suppress: z.boolean().optional(),
	/**
	 * sets the user's request to speak
	 */
	request_to_speak_timestamp: ISO8601Timestamp.optional().nullable(),
});

export type ModifyCurrentUserVoiceStateJSONInfer = z.infer<typeof ModifyCurrentUserVoiceStateJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-user-voice-state}
 */
export function ModifyCurrentUserVoiceState(guildId: SnowflakeInfer, reason: string, data: ModifyCurrentUserVoiceStateJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/voice-states/@me`,
		body: JSON.stringify(ModifyCurrentUserVoiceStateJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-user-voice-state-json-params}
 */
export const ModifyUserVoiceStateJSON = z.object({
	/**
	 * the id of the channel the user is currently in
	 */
	channel_id: Snowflake,
	/**
	 * toggles the user's suppress state
	 */
	suppress: z.boolean().optional(),
});

export type ModifyUserVoiceStateJSONInfer = z.infer<typeof ModifyUserVoiceStateJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-user-voice-state}
 */
export function ModifyUserVoiceState(guildId: SnowflakeInfer, userId: SnowflakeInfer, reason: string, data: ModifyUserVoiceStateJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/voice-states/${Snowflake.parse(userId)}`,
		body: JSON.stringify(ModifyUserVoiceStateJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}
