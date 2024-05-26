import { z } from "zod";
import { Snowflake } from "../globals/formats";

/**
 * Enumeration of SKU flags.
 * Represents various flags that can be assigned to an SKU.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-flags}
 */
export enum SkuFlags {
	/**
	 * SKU is available for purchase.
	 *
	 * @example
	 * const flag = SkuFlags.Available;
	 * console.log(flag); // Output: 4
	 */
	Available = 4,
	/**
	 * Recurring SKU that can be purchased by a user and applied to a single server.
	 * Grants access to every user in that server.
	 *
	 * @example
	 * const flag = SkuFlags.GuildSubscription;
	 * console.log(flag); // Output: 128
	 */
	GuildSubscription = 128,
	/**
	 * Recurring SKU purchased by a user for themselves.
	 * Grants access to the purchasing user in every server.
	 *
	 * @example
	 * const flag = SkuFlags.UserSubscription;
	 * console.log(flag); // Output: 256
	 */
	UserSubscription = 256,
}

/**
 * Zod schema for SKU flags enumeration.
 * This schema is used for validating {@link SkuFlags} values.
 *
 * @example
 * const isValidFlag = SkuFlagsEnum.safeParse(SkuFlags.Available).success;
 */
export const SkuFlagsEnum = z.nativeEnum(SkuFlags);

/**
 * Enumeration of SKU types.
 * Represents the types of SKUs that can be created.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-types}
 */
export enum SkuTypes {
	/**
	 * Durable one-time purchase.
	 *
	 * @example
	 * const type = SkuTypes.Durable;
	 * console.log(type); // Output: 2
	 */
	Durable = 2,
	/**
	 * Consumable one-time purchase.
	 *
	 * @example
	 * const type = SkuTypes.Consumable;
	 * console.log(type); // Output: 3
	 */
	Consumable = 3,
	/**
	 * Represents a recurring subscription.
	 *
	 * @example
	 * const type = SkuTypes.Subscription;
	 * console.log(type); // Output: 5
	 */
	Subscription = 5,
	/**
	 * System-generated group for each SUBSCRIPTION SKU created.
	 *
	 * @example
	 * const type = SkuTypes.SubscriptionGroup;
	 * console.log(type); // Output: 6
	 */
	SubscriptionGroup = 6,
}

/**
 * Zod schema for SKU types enumeration.
 * This schema is used for validating {@link SkuTypes} values.
 *
 * @example
 * const isValidType = SkuTypesEnum.safeParse(SkuTypes.Durable).success;
 */
export const SkuTypesEnum = z.nativeEnum(SkuTypes);

/**
 * Schema for the SKU Structure.
 * Represents the structure of an SKU object.
 *
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-structure}
 */
export const SkuStructure = z.object({
	/**
	 * ID of SKU.
	 *
	 * @example
	 * const sku = { id: "123456789012345678" };
	 */
	id: Snowflake,
	/**
	 * Type of SKU.
	 *
	 * @example
	 * const sku = { type: SkuTypes.Subscription };
	 */
	type: SkuTypesEnum,
	/**
	 * ID of the parent application.
	 *
	 * @example
	 * const sku = { application_id: "123456789012345678" };
	 */
	application_id: Snowflake,
	/**
	 * Customer-facing name of your premium offering.
	 *
	 * @example
	 * const sku = { name: "Premium Subscription" };
	 */
	name: z.string(),
	/**
	 * System-generated URL slug based on the SKU's name.
	 *
	 * @example
	 * const sku = { slug: "premium-subscription" };
	 */
	slug: z.string(),
	/**
	 * SKU flags combined as a bitfield.
	 *
	 * @example
	 * const sku = { flags: SkuFlags.Available | SkuFlags.UserSubscription };
	 */
	flags: z.union([SkuFlagsEnum, z.bigint()]),
});

/**
 * Inferred type for the SKU Structure schema.
 *
 * @example
 * const sku: SkuStructureInfer = {
 *   id: "123456789012345678",
 *   type: SkuTypes.Subscription,
 *   application_id: "123456789012345678",
 *   name: "Premium Subscription",
 *   slug: "premium-subscription",
 *   flags: SkuFlags.Available | SkuFlags.UserSubscription
 * };
 */
export type SkuStructureInfer = z.infer<typeof SkuStructure>;
