import { EmojiStructure, GuildMemberStructure, Snowflake, UserStructure } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-emoji-message-reaction-remove-emoji-event-fields}
 */
export const MessageReactionRemoveEmojiFields = z.object({
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
	/**
	 * ID of the message
	 */
	message_id: Snowflake,
	/**
	 * Emoji that was removed
	 */
	emoji: EmojiStructure.partial(),
});

export type MessageReactionRemoveEmojiFieldsInfer = z.infer<typeof MessageReactionRemoveEmojiFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-all-message-reaction-remove-all-event-fields}
 */
export const MessageReactionRemoveAllFields = z.object({
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the message
	 */
	message_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
});

export type MessageReactionRemoveAllFieldsInfer = z.infer<typeof MessageReactionRemoveAllFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-remove-message-reaction-remove-event-fields}
 */
export const MessageReactionRemoveFields = z.object({
	/**
	 * ID of the user
	 */
	user_id: Snowflake,
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the message
	 */
	message_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Emoji used to react
	 */
	emoji: EmojiStructure.partial(),
	/**
	 * True if this was a super-reaction
	 */
	burst: z.boolean(),
	/**
	 * TODO REST: The type of reaction
	 */
	type: z.number(),
});

export type MessageReactionRemoveFieldsInfer = z.infer<typeof MessageReactionRemoveFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-reaction-add-message-reaction-add-event-fields}
 */
export const MessageReactionAddFields = z.object({
	/**
	 * ID of the user
	 */
	user_id: Snowflake,
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the message
	 */
	message_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Member who reacted if this happened in a guild
	 */
	member: GuildMemberStructure.optional(),
	/**
	 * Emoji used to react
	 */
	emoji: EmojiStructure.pick({
		id: true,
		name: true,
		animated: true,
	}).partial(),
	/**
	 * ID of the user who authored the message which was reacted to
	 */
	message_author_id: Snowflake.optional(),
	/**
	 * True if this is a super-reaction
	 */
	burst: z.boolean(),
	/**
	 * Colors used for super-reaction animation in "#rrggbb" format
	 */
	burst_colors: z.array(z.string()).optional(),
	/**
	 * TODO REST: The type of reaction
	 */
	type: z.number(),
});

export type MessageReactionAddFieldsInfer = z.infer<typeof MessageReactionAddFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-delete-bulk-message-delete-bulk-event-fields}
 */
export const MessageDeleteBulkFields = z.object({
	/**
	 * IDs of the messages
	 */
	ids: z.array(Snowflake),
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
});

export type MessageDeleteBulkFieldsInfer = z.infer<typeof MessageDeleteBulkFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-delete-message-delete-event-fields}
 */
export const MessageDeleteFields = z.object({
	/**
	 * ID of the message
	 */
	id: Snowflake,
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
});

export type MessageDeleteFieldsInfer = z.infer<typeof MessageDeleteFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-create-message-create-extra-fields}
 */
export const MessageCreateExtraFields = z.object({
	/**
	 * ID of the guild the message was sent in - unless it is an ephemeral message
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Member properties for this message's author. Missing for ephemeral messages and messages from webhooks
	 */
	member: GuildMemberStructure.partial().optional(),
	/**
	 * Users specifically mentioned in the message
	 */
	mentions: z.union([UserStructure, GuildMemberStructure.partial()]),
});

export type MessageCreateExtraFieldsInfer = z.infer<typeof MessageCreateExtraFields>;
