import { Integer, Snowflake } from "@lunajs/core";
import { z } from "zod";

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
