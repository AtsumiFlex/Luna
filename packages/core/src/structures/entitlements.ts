import { z } from "zod";
import { ISO8601Timestamp, Snowflake } from "../globals/formats";

/**
 * Enumeration of entitlement types.
 * Represents the types of entitlements that can be granted to a user or guild.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-types}
 */
export enum EntitlementTypes {
	/**
	 * Entitlement was purchased by user.
	 *
	 * @example
	 * const type = EntitlementTypes.Purchase;
	 * console.log(type); // Output: 1
	 */
	Purchase = 1,
	/**
	 * Entitlement for Discord Nitro subscription.
	 *
	 * @example
	 * const type = EntitlementTypes.PremiumSubscription;
	 * console.log(type); // Output: 2
	 */
	PremiumSubscription = 2,
	/**
	 * Entitlement was gifted by developer.
	 *
	 * @example
	 * const type = EntitlementTypes.DeveloperGift;
	 * console.log(type); // Output: 3
	 */
	DeveloperGift = 3,
	/**
	 * Entitlement was purchased by a dev in application test mode.
	 *
	 * @example
	 * const type = EntitlementTypes.TestModePurchase;
	 * console.log(type); // Output: 4
	 */
	TestModePurchase = 4,
	/**
	 * Entitlement was granted when the SKU was free.
	 *
	 * @example
	 * const type = EntitlementTypes.FreePurchase;
	 * console.log(type); // Output: 5
	 */
	FreePurchase = 5,
	/**
	 * Entitlement was gifted by another user.
	 *
	 * @example
	 * const type = EntitlementTypes.UserGift;
	 * console.log(type); // Output: 6
	 */
	UserGift = 6,
	/**
	 * Entitlement was claimed by user for free as a Nitro Subscriber.
	 *
	 * @example
	 * const type = EntitlementTypes.PremiumPurchase;
	 * console.log(type); // Output: 7
	 */
	PremiumPurchase = 7,
	/**
	 * Entitlement was purchased as an app subscription.
	 *
	 * @example
	 * const type = EntitlementTypes.ApplicationSubscription;
	 * console.log(type); // Output: 8
	 */
	ApplicationSubscription = 8,
}

/**
 * Zod schema for entitlement types enumeration.
 * This schema is used for validating {@link EntitlementTypes} values.
 *
 * @example
 * const isValidType = EntitlementTypesEnum.safeParse(EntitlementTypes.Purchase).success;
 */
export const EntitlementTypesEnum = z.nativeEnum(EntitlementTypes);

/**
 * Schema for the Entitlement Structure.
 * Represents the structure of an entitlement object.
 *
 * @see {@link https://discord.com/developers/docs/monetization/entitlements#entitlement-object-entitlement-structure}
 */
export const EntitlementStructure = z.object({
	/**
	 * ID of the entitlement.
	 *
	 * @example
	 * const entitlement = { id: "123456789012345678" };
	 */
	id: Snowflake,
	/**
	 * ID of the SKU.
	 *
	 * @example
	 * const entitlement = { sku_id: "123456789012345678" };
	 */
	sku_id: Snowflake,
	/**
	 * ID of the parent application.
	 *
	 * @example
	 * const entitlement = { application_id: "123456789012345678" };
	 */
	application_id: Snowflake,
	/**
	 * ID of the user that is granted access to the entitlement's SKU.
	 *
	 * @example
	 * const entitlement = { user_id: "123456789012345678" };
	 */
	user_id: Snowflake.optional(),
	/**
	 * Type of entitlement.
	 *
	 * @example
	 * const entitlement = { type: EntitlementTypes.Purchase };
	 */
	type: EntitlementTypesEnum,
	/**
	 * Entitlement was deleted.
	 *
	 * @example
	 * const entitlement = { deleted: false };
	 */
	deleted: z.boolean(),
	/**
	 * Start date at which the entitlement is valid. Not present when using test entitlements.
	 *
	 * @example
	 * const entitlement = { starts_at: "2021-01-01T00:00:00.000Z" };
	 */
	starts_at: ISO8601Timestamp.optional(),
	/**
	 * Date at which the entitlement is no longer valid. Not present when using test entitlements.
	 *
	 * @example
	 * const entitlement = { ends_at: "2021-12-31T23:59:59.999Z" };
	 */
	ends_at: ISO8601Timestamp.optional(),
	/**
	 * ID of the guild that is granted access to the entitlement's SKU.
	 *
	 * @example
	 * const entitlement = { guild_id: "123456789012345678" };
	 */
	guild_id: Snowflake.optional(),
	/**
	 * For consumable items, whether or not the entitlement has been consumed.
	 *
	 * @example
	 * const entitlement = { consumed: true };
	 */
	consumed: z.boolean().optional(),
});

/**
 * Inferred type for the Entitlement Structure schema.
 *
 * @example
 * const entitlement: EntitlementStructureInfer = {
 *   id: "123456789012345678",
 *   sku_id: "123456789012345678",
 *   application_id: "123456789012345678",
 *   user_id: "123456789012345678",
 *   type: EntitlementTypes.Purchase,
 *   deleted: false,
 *   starts_at: "2021-01-01T00:00:00.000Z",
 *   ends_at: "2021-12-31T23:59:59.999Z",
 *   guild_id: "123456789012345678",
 *   consumed: true
 * };
 */
export type EntitlementStructureInfer = z.infer<typeof EntitlementStructure>;
