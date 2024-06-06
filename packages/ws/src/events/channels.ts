import { ChannelStructure, Integer, ISO8601Timestamp, Snowflake, ThreadMemberStructure } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#channel-pins-update-channel-pins-update-event-fields}
 */
export const ChannelPinsUpdateFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * Time at which the most recent pinned message was pinned
	 */
	last_pin_timestamp: ISO8601Timestamp.optional().nullable(),
});

export type ChannelPinsUpdateFieldsInfer = z.infer<typeof ChannelPinsUpdateFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-members-update-thread-members-update-event-fields}
 */
export const ThreadMembersUpdateFields = z.object({
	/**
	 * ID of the thread
	 */
	id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Approximate number of members in the thread, capped at 50
	 */
	member_count: Integer,
	/**
	 * Users who were added to the thread
	 */
	added_members: z.array(ThreadMemberStructure).optional(),
	/**
	 * ID of the users who were removed from the thread
	 */
	removed_member_ids: z.array(Snowflake).optional(),
});

export type ThreadMembersUpdateFieldsInfer = z.infer<typeof ThreadMembersUpdateFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-member-update-thread-member-update-event-extra-fields}
 */
export const ThreadMemberUpdateFields = z.object({
	/**
	 * ID of the thread
	 */
	guild_id: Snowflake,
});

export type ThreadMemberUpdateFieldsInfer = z.infer<typeof ThreadMemberUpdateFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#thread-list-sync-thread-list-sync-event-fields}
 */
export const ThreadListSyncFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Parent channel IDs whose threads are being synced. If omitted, then threads were synced for the entire guild. This array may contain channel_ids that have no active threads as well, so you know to clear that data.
	 */
	channel_ids: z.array(Snowflake).optional(),
	/**
	 * All active threads in the given channels that the current user can access
	 */
	threads: z.array(ChannelStructure),
	/**
	 * All thread member objects from the synced threads for the current user, indicating which threads the current user has been added to
	 */
	members: z.array(ThreadMemberStructure),
});

export type ThreadListSyncFieldsInfer = z.infer<typeof ThreadListSyncFields>;
