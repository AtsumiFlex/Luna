import type { EntitlementStructureInfer, SnowflakeInfer } from "@lunajs/core";
import { Integer, Snowflake } from "@lunajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#list-entitlements-query-string-params}
 */
export const ListEntitlementsQuery = z.object({
	/**
	 * User ID to look up entitlements for
	 */
	user_id: Snowflake.optional(),
	/**
	 * Optional list of SKU IDs to check entitlements for
	 */
	sku_ids: z.set(Snowflake).optional(),
	/**
	 * Retrieve entitlements before this entitlement ID
	 */
	before: Snowflake.optional(),
	/**
	 * Retrieve entitlements after this entitlement ID
	 */
	after: Snowflake.optional(),
	/**
	 * Number of entitlements to return, 1-100, default 100
	 */
	limit: Integer.min(1).max(100).default(100).optional(),
	/**
	 * Guild ID to look up entitlements for
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Whether ended entitlements should be omitted
	 */
	exclude_ended: z.boolean().optional(),
});

export type ListEntitlementsQueryInfer = z.infer<typeof ListEntitlementsQuery>;

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
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#create-test-entitlement-json-params}
 */
export const CreateTestEntitlementJSON = z.object({
	/**
	 * ID of the SKU to grant the entitlement to
	 */
	sku_id: z.string(),
	/**
	 * ID of the guild or user to grant the entitlement to
	 */
	owner_id: z.string(),
	/**
	 * 1 for a guild subscription, 2 for a user subscription
	 */
	owner_type: z.union([z.literal(1), z.literal(2)]),
});

export type CreateTestEntitlementJSONInfer = z.infer<typeof CreateTestEntitlementJSON>;

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
