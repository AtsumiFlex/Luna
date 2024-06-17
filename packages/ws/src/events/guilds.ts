import {
	AvatarDecorationDataStructure, ChannelStructure, EmojiStructure,
	GuildMemberStructure, GuildScheduledEventStructure,
	Integer,
	RoleStructure,
	Snowflake, StageInstanceStructure, StickerStructure,
	UserStructure, VoiceStateStructure,
} from "@lunajs/core";
import { z } from "zod";
import { PresenceUpdateFields } from "./presences";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-user-remove-guild-scheduled-event-user-remove-event-fields}
 */
export const GuildScheduledEventUserRemoveFields = z.object({
	/**
	 * ID of the guild scheduled event
	 */
	guild_scheduled_event_id: Snowflake,
	/**
	 * ID of the user
	 */
	user_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
});

export type GuildScheduledEventUserRemoveFieldsInfer = z.infer<typeof GuildScheduledEventUserRemoveFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-scheduled-event-user-add-guild-scheduled-event-user-add-event-fields}
 */
export const GuildScheduledEventUserAddFields = z.object({
	/**
	 * ID of the guild scheduled event
	 */
	guild_scheduled_event_id: Snowflake,
	/**
	 * ID of the user
	 */
	user_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
});

export type GuildScheduledEventUserAddFieldsInfer = z.infer<typeof GuildScheduledEventUserAddFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-delete-guild-role-delete-event-fields}
 */
export const GuildRoleDeleteFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * ID of the role
	 */
	role_id: Snowflake,
});

export type GuildRoleDeleteFieldsInfer = z.infer<typeof GuildRoleDeleteFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-role-update-guild-role-update-event-fields}
 */
export const GuildRoleUpdateFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Role that was updated
	 */
	role: RoleStructure,
});

export type GuildRoleUpdateFieldsInfer = z.infer<typeof GuildRoleUpdateFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-members-chunk-guild-members-chunk-event-fields}
 */
export const GuildMembersChunkFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Set of guild members
	 */
	members: z.array(GuildMemberStructure),
	/**
	 * Chunk index in the expected chunks for this response (0 <= chunk_index < chunk_count)
	 */
	chunk_index: Integer,
	/**
	 * Total number of expected chunks for this response
	 */
	chunk_count: Integer,
	/**
	 * When passing an invalid ID to REQUEST_GUILD_MEMBERS, it will be returned here
	 */
	not_found: z.array(Snowflake).optional(),
	/**
	 * When passing true to REQUEST_GUILD_MEMBERS, presences of the returned members will be here
	 */
	presences: z.array(PresenceUpdateFields).optional(),
	/**
	 * Nonce used in the Guild Members Request
	 */
	nonce: z.string().optional(),
});

export type GuildMembersChunkFieldsInfer = z.infer<typeof GuildMembersChunkFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-member-update-guild-member-update-event-fields}
 */
export const GuildMemberUpdateFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * User role ids
	 */
	roles: z.array(Snowflake),
	/**
	 * User
	 */
	user: GuildMemberStructure,
	/**
	 * Nickname of the user in the guild
	 */
	nick: z.string().optional().nullable(),
	/**
	 * Member's guild avatar hash
	 */
	avatar: z.string().optional().nullable(),
	/**
	 * When the user joined the guild
	 */
	joined_at: z.string().optional(),
	/**
	 * When the user starting boosting the guild
	 */
	premium_since: z.string().optional().nullable(),
	/**
	 * Whether the user is deafened in voice channels
	 */
	deaf: z.boolean().optional(),
	/**
	 * Whether the user is muted in voice channels
	 */
	mute: z.boolean().optional(),
	/**
	 * Whether the user has not yet passed the guild's Membership Screening requirements
	 */
	pending: z.boolean().optional(),
	/**
	 * When the user's timeout will expire and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed out
	 */
	communication_disabled_until: z.string().optional().nullable(),
	/**
	 * Guild member flags represented as a bit set, defaults to 0
	 */
	flags: Integer.optional(),
	/**
	 * Data for the member's guild avatar decoration
	 */
	avatar_decoration_data: AvatarDecorationDataStructure.optional(),
});

export type GuildMemberUpdateFieldsInfer = z.infer<typeof GuildMemberUpdateFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-member-remove-guild-member-remove-event-fields}
 */
export const GuildMemberRemoveFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * User who was removed
	 */
	user: UserStructure,
});

export type GuildMemberRemoveFieldsInfer = z.infer<typeof GuildMemberRemoveFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-member-add-guild-member-add-extra-fields}
 */
export const GuildMemberAddFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
});

export type GuildMemberAddFieldsInfer = z.infer<typeof GuildMemberAddFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-integrations-update-guild-integrations-update-event-fields}
 */
export const GuildIntegrationsUpdateFields = z.object({
	/**
	 * ID of the guild whose integrations were updated
	 */
	guild_id: Snowflake,
});

export type GuildIntegrationsUpdateFieldsInfer = z.infer<typeof GuildIntegrationsUpdateFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-stickers-update-guild-stickers-update-event-fields}
 */
export const GuildStickersUpdateFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Array of stickers
	 */
	stickers: z.array(StickerStructure),
});

export type GuildStickersUpdateFieldsInfer = z.infer<typeof GuildStickersUpdateFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-emojis-update-guild-emojis-update-event-fields}
 */
export const GuildEmojisUpdateFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Array of emojis
	 */
	emojis: z.array(EmojiStructure),
});

export type GuildEmojisUpdateFieldsInfer = z.infer<typeof GuildEmojisUpdateFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-ban-remove-guild-ban-remove-event-fields}
 */
export const GuildBanRemoveFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * User who was unbanned
	 */
	user: UserStructure,
});

export type GuildBanRemoveFieldsInfer = z.infer<typeof GuildBanRemoveFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-ban-add-guild-ban-add-event-fields}
 */
export const GuildBanAddFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * User who was banned
	 */
	user: UserStructure,
});

export type GuildBanAddFieldsInfer = z.infer<typeof GuildBanAddFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-audit-log-entry-create-guild-audit-log-entry-create-event-extra-fields}
 */
export const GuildAuditLogEntryCreateFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
});

export type GuildAuditLogEntryCreateFieldsInfer = z.infer<typeof GuildAuditLogEntryCreateFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#guild-create-guild-create-extra-fields}
 */
export const GuildCreateFields = z.object({
	/**
	 * When this guild was joined at
	 */
	joined_at: z.string(),
	/**
	 * true if this is considered a large guild
	 */
	large: z.boolean(),
	/**
	 * true if this guild is unavailable due to an outage
	 */
	unavailable: z.boolean().optional(),
	/**
	 * Total number of members in this guild
	 */
	member_count: Integer,
	/**
	 * States of members currently in voice channels; lacks the guild_id key
	 */
	voice_states: z.array(VoiceStateStructure.partial()),
	/**
	 * Users in the guild
	 */
	members: z.array(GuildMemberStructure),
	/**
	 * Channels in the guild
	 */
	channels: z.array(ChannelStructure),
	/**
	 * All active threads in the guild that current user has permission to view
	 */
	threads: z.array(ChannelStructure),
	/**
	 * Presences of the members in the guild, will only include non-offline members if the size is greater than large threshold
	 */
	presences: z.array(PresenceUpdateFields.partial()),
	/**
	 * Stage instances in the guild
	 */
	stage_instances: z.array(StageInstanceStructure),
	/**
	 * Scheduled events in the guild
	 */
	guild_scheduled_events: z.array(GuildScheduledEventStructure),
});

export type GuildCreateFieldsInfer = z.infer<typeof GuildCreateFields>;
