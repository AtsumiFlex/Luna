import type { InviteStructureInfer } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";
import type { GetInviteQueryInfer } from "../libs/invites";
import { GetInviteQuery } from "../libs/invites";

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
