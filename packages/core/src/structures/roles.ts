import { z } from "zod";
import { Integer, Snowflake } from "../globals/formats";

/**
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-flags}
 */
export enum RoleFlags {
	InPrompt = 1,
}

export const RoleFlagsEnum = z.nativeEnum(RoleFlags);

/**
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure}
 */
export const RoleTagsStructure = z.object({
	/**
	 * The id of the bot this role belongs to
	 */
	bot_id: Snowflake.optional(),
	/**
	 * The id of the integration this role belongs to
	 */
	integration_id: Snowflake.optional(),
	/**
	 * Whether this is the guild's Booster role
	 */
	premium_subscriber: z.null().optional(),
	/**
	 * The id of this role's subscription sku and listing
	 */
	subscription_listing_id: Snowflake.optional(),
	/**
	 * Whether this role is available for purchase
	 */
	available_for_purchase: z.null().optional(),
	/**
	 * Whether this role is a guild's linked role
	 */
	guild_connections: z.null().optional(),
});

export type RoleTagsStructureInfer = z.infer<typeof RoleTagsStructure>;

/**
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-structure}
 */
export const RoleStructure = z.object({
	/**
	 * Role id
	 */
	id: Snowflake,
	/**
	 * Role name
	 */
	name: z.string(),
	/**
	 * Integer representation of hexadecimal color code
	 */
	color: Integer,
	/**
	 * If this role is pinned in the user listing
	 */
	hoist: z.boolean(),
	/**
	 * Role icon hash
	 */
	icon: z.string().optional().nullable(),
	/**
	 * Role unicode emoji
	 */
	unicode_emoji: z.string().optional().nullable(),
	/**
	 * Position of this role
	 */
	position: Integer,
	/**
	 * Permission bit set
	 */
	permissions: z.string(),
	/**
	 * Whether this role is managed by an integration
	 */
	managed: z.boolean(),
	/**
	 * Whether this role is mentionable
	 */
	mentionable: z.boolean(),
	/**
	 * Role tags object
	 */
	tags: RoleTagsStructure.optional(),
	/**
	 * Role flags combined as a bitfield
	 * TODO: This should be a bigint, but it's not clear how to represent that in Zod
	 */
	flags: z.union([RoleFlagsEnum, z.bigint()]),
});

export type RoleStructureInfer = z.infer<typeof RoleStructure>;
