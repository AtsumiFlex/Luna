import { Snowflake } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-remove-message-poll-vote-remove-fields}
 */
export const MessagePollVoteRemoveFields = z.object({
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
	 * ID of the answer
	 */
	answer_id: z.number(),
});

export type MessagePollVoteRemoveFieldsInfer = z.infer<typeof MessagePollVoteRemoveFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#message-poll-vote-add-message-poll-vote-add-fields}
 */
export const MessagePollVoteAddFields = z.object({
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
	 * ID of the answer
	 */
	answer_id: z.number(),
});

export type MessagePollVoteAddFieldsInfer = z.infer<typeof MessagePollVoteAddFields>;
