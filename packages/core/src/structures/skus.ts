import { z } from "zod";
import { Snowflake } from "../globals/formats";

/**
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-flags}
 */
export enum SkuFlags {
	/**
	 * SKU is available for purchase
	 */
	Available = 4,
	/**
	 * Recurring SKU that can be purchased by a user and applied to a single server. Grants access to every user in that server.
	 */
	GuildSubscription = 128,
	/**
	 * Recurring SKU purchased by a user for themselves. Grants access to the purchasing user in every server.
	 */
	UserSubscription = 256,
}

export const SkuFlagsEnum = z.nativeEnum(SkuFlags);

/**
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-types}
 */
export enum SkuType {
	/**
	 * Durable one-time purchase
	 */
	Durable = 2,
	/**
	 * Consumable one-time purchase
	 */
	Consumable = 3,
	/**
	 * Represents a recurring subscription
	 */
	Subscription = 5,
	/**
	 * System-generated group for each SUBSCRIPTION SKU created
	 */
	SubscriptionGroup = 6,
}

export const SkuTypeEnum = z.nativeEnum(SkuType);

/**
 * @see {@link https://discord.com/developers/docs/monetization/skus#sku-object-sku-structure}
 */
export const SkuStructure = z.object({
	/**
	 * ID of SKU
	 */
	id: Snowflake,
	/**
	 * Type of SKU
	 */
	type: SkuTypeEnum,
	/**
	 * ID of the parent application
	 */
	application_id: Snowflake,
	/**
	 * Customer-facing name of your premium offering
	 */
	name: z.string(),
	/**
	 * System-generated URL slug based on the SKU's name
	 */
	slug: z.string(),
	/**
	 * SKU flags combined as a bitfield
	 * REMARK: This should be a bigint, but it's not clear how to represent that in Zod
	 */
	flags: z.union([z.bigint(), SkuFlagsEnum]),
});

export type SkuStructureInfer = z.infer<typeof SkuStructure>;
