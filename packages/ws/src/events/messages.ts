import { EmojiStructure, Snowflake } from "@lunajs/core";
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
