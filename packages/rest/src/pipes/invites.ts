import { Snowflake } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#get-invite-query-string-params}
 */
export const GetInviteQuery = z.object({
	/**
	 * whether the invite should contain approximate member counts
	 */
	with_counts: z.boolean().optional(),
	/**
	 * whether the invite should contain the expiration date
	 */
	with_expiration: z.boolean().optional(),
	/**
	 * the guild scheduled event to include with the invite
	 */
	guild_scheduled_event_id: Snowflake.optional(),
});

export type GetInviteQueryInfer = z.infer<typeof GetInviteQuery>;
