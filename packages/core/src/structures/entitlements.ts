import { z } from "zod";
import { Snowflake } from "../globals/formats";

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-types}
 */
export enum EntitlementTypes {
	/**
	 * Entitlement was purchased by user
	 */
	Purchase = 1,
	/**
	 * Entitlement for Discord Nitro subscription
	 */
	PremiumSubscription = 2,
	/**
	 * Entitlement was gifted by developer
	 */
	DeveloperGift = 3,
	/**
	 * Entitlement was purchased by a dev in application test mode
	 */
	TestModePurchase = 4,
	/**
	 * Entitlement was granted when the SKU was free
	 */
	FreePurchase = 5,
	/**
	 * Entitlement was gifted by another user
	 */
	UserGift = 6,
	/**
	 * Entitlement was claimed by user for free as a Nitro Subscriber
	 */
	PremiumPurchase = 7,
	/**
	 * Entitlement was purchased as an app subscription
	 */
	ApplicationSubscription = 8,
}

export const EntitlementTypesEnum = z.nativeEnum(EntitlementTypes);

/**
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-structure}
 */
export const EntitlementStructure = z.object({
	/**
	 * ID of the entitlement
	 */
	id: Snowflake,
	/**
	 * ID of the SKU
	 */
	sku_id: Snowflake,
	/**
	 * ID of the parent application
	 */
	application_id: Snowflake,
	/**
	 * ID of the user that is granted access to the entitlement's sku
	 */
	user_id: Snowflake.optional(),
	/**
	 * Type of entitlement
	 */
	type: EntitlementTypesEnum,
	/**
	 * Entitlement was deleted
	 */
	deleted: z.boolean(),
	/**
	 * Start date at which the entitlement is valid. Not present when using test entitlements.
	 */
	starts_at: z.string().optional(),
	/**
	 * Date at which the entitlement is no longer valid. Not present when using test entitlements.
	 */
	ends_at: z.string().optional(),
	/**
	 * ID of the guild that is granted access to the entitlement's sku
	 */
	guild_id: Snowflake.optional(),
	/**
	 * For consumable items, whether or not the entitlement has been consumed
	 */
	consumed: z.boolean().optional(),
});

export type EntitlementStructureInfer = z.infer<typeof EntitlementStructure>;
