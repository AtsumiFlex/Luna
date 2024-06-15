import { GuildMemberStructure, Integer, Snowflake } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#typing-start-typing-start-event-fields}
 */
export const TypingStartFields = z.object({
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
	/**
	 * ID of the user
	 */
	user_id: Snowflake,
	/**
	 * Unix time (in seconds) of when the user started typing
	 */
	timestamp: Integer,
	/**
	 * Member who started typing if this happened in a guild
	 */
	member: GuildMemberStructure.optional(),
});

export type TypingStartFieldsInfer = z.infer<typeof TypingStartFields>;
