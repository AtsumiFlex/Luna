import type { SnowflakeInfer } from "@lunajs/core";
import { Snowflake } from "@lunajs/core";
import type { RESTMakeRequestOptions } from "../globals";
import type { ListEntitlementsQueryInfer } from "../pipes/entitlements";
import { ListEntitlementsQuery } from "../pipes/entitlements";

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#list-entitlements}
 */
export function ListEntitlements(applicationId: SnowflakeInfer, query?: ListEntitlementsQueryInfer): RESTMakeRequestOptions {
	return {
		method: "GET",
		path: `/applications/${Snowflake.parse(applicationId)}/entitlements`,
		query: ListEntitlementsQuery.parse(query),
	};
}
