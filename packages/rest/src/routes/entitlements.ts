import type { EntitlementStructureInfer, SnowflakeInfer } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";
import type { CreateTestEntitlementJSONInfer, ListEntitlementsQueryInfer } from "../pipes/entitlements";
import { CreateTestEntitlementJSON, ListEntitlementsQuery } from "../pipes/entitlements";

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#list-entitlements}
 */
export function ListEntitlements(applicationId: SnowflakeInfer, query?: ListEntitlementsQueryInfer): RestMakeRequestOptions<EntitlementStructureInfer[]> {
	return {
		method: "GET",
		path: `/applications/${applicationId}/entitlements`,
		query: ListEntitlementsQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#consume-an-entitlement}
 */
export function ConsumeEntitlement(applicationId: SnowflakeInfer, entitlementId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "POST",
		path: `/applications/${applicationId}/entitlements/${entitlementId}/consume`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#create-test-entitlement}
 */
export function CreateTestEntitlement(applicationId: SnowflakeInfer, json: CreateTestEntitlementJSONInfer): RestMakeRequestOptions<EntitlementStructureInfer> {
	return {
		method: "POST",
		path: `/applications/${applicationId}/entitlements`,
		body: JSON.stringify(CreateTestEntitlementJSON.parse(json)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#delete-test-entitlement}
 */
export function DeleteTestEntitlement(applicationId: SnowflakeInfer, entitlementId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/applications/${applicationId}/entitlements/${entitlementId}`,
	};
}
