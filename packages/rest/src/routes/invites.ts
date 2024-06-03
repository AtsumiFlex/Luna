import type { InviteStructureInfer } from "@lunajs/core";
import { Snowflake } from "@lunajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

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

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#get-invite}
 */
export function GetInvite(code: string, query?: GetInviteQueryInfer): RestMakeRequestOptions<InviteStructureInfer> {
	return {
		method: "GET",
		path: `/invites/${code}`,
		query: GetInviteQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#delete-invite}
 */
export function DeleteInvite(code: string, reason: string): RestMakeRequestOptions<InviteStructureInfer> {
	return {
		method: "DELETE",
		path: `/invites/${code}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}
