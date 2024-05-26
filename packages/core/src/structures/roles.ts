import { z } from "zod";
import { Integer, Snowflake } from "../globals/formats";

/**
 * Enumeration of role flags.
 * Represents various flags that can be assigned to a role.
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-flags}
 */
export enum RoleFlags {
	/**
	 * Role can be selected by members in an onboarding prompt.
	 *
	 * @example
	 * const flag = RoleFlags.InPrompt;
	 * console.log(flag); // Output: 1
	 */
	InPrompt = 1,
}

/**
 * Zod schema for role flags enumeration.
 * This schema is used for validating {@link RoleFlags} values.
 *
 * @example
 * const isValidFlag = RoleFlagsEnum.safeParse(RoleFlags.InPrompt).success;
 */
export const RoleFlagsEnum = z.nativeEnum(RoleFlags);

/**
 * Schema for the Role Tags Structure.
 * Represents the structure of role tags.
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure}
 */
export const RoleTagsStructure = z.object({
	/**
	 * The id of the bot this role belongs to.
	 *
	 * @example
	 * const tags = { bot_id: "123456789012345678" };
	 */
	bot_id: Snowflake.optional(),
	/**
	 * The id of the integration this role belongs to.
	 *
	 * @example
	 * const tags = { integration_id: "123456789012345678" };
	 */
	integration_id: Snowflake.optional(),
	/**
	 * Whether this is the guild's Booster role.
	 *
	 * @example
	 * const tags = { premium_subscriber: null };
	 */
	premium_subscriber: z.null().optional(),
	/**
	 * The id of this role's subscription sku and listing.
	 *
	 * @example
	 * const tags = { subscription_listing_id: "123456789012345678" };
	 */
	subscription_listing_id: Snowflake.optional(),
	/**
	 * Whether this role is available for purchase.
	 *
	 * @example
	 * const tags = { available_for_purchase: null };
	 */
	available_for_purchase: z.null().optional(),
	/**
	 * Whether this role is a guild's linked role.
	 *
	 * @example
	 * const tags = { guild_connections: null };
	 */
	guild_connections: z.null().optional(),
});

/**
 * Inferred type for the Role Tags Structure schema.
 *
 * @example
 * const tags: RoleTagsStructureInfer = {
 *   bot_id: "123456789012345678",
 *   integration_id: "123456789012345678",
 *   premium_subscriber: null,
 *   subscription_listing_id: "123456789012345678",
 *   available_for_purchase: null,
 *   guild_connections: null
 * };
 */
export type RoleTagsStructureInfer = z.infer<typeof RoleTagsStructure>;

/**
 * Schema for the Role Structure.
 * Represents the structure of a role object.
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-structure}
 */
export const RoleStructure = z.object({
	/**
	 * The id of the role.
	 *
	 * @example
	 * const role = { id: "123456789012345678" };
	 */
	id: Snowflake,
	/**
	 * The name of the role.
	 *
	 * @example
	 * const role = { name: "Admin" };
	 */
	name: z.string(),
	/**
	 * The color of the role.
	 *
	 * @example
	 * const role = { color: 0x1abc9c };
	 */
	color: Integer,
	/**
	 * Whether the role is hoisted.
	 *
	 * @example
	 * const role = { hoist: true };
	 */
	hoist: z.boolean(),
	/**
	 * The icon hash of the role.
	 *
	 * @example
	 * const role = { icon: "a_1234567890abcdef" };
	 */
	icon: z.string().optional().nullable(),
	/**
	 * The unicode emoji of the role.
	 *
	 * @example
	 * const role = { unicode_emoji: "😊" };
	 */
	unicode_emoji: z.string().optional().nullable(),
	/**
	 * The position of the role.
	 *
	 * @example
	 * const role = { position: 1 };
	 */
	position: Integer,
	/**
	 * The permissions of the role.
	 *
	 * @example
	 * const role = { permissions: "2147483647" };
	 */
	permissions: z.string(),
	/**
	 * Whether the role is managed.
	 *
	 * @example
	 * const role = { managed: false };
	 */
	managed: z.boolean(),
	/**
	 * Whether the role is mentionable.
	 *
	 * @example
	 * const role = { mentionable: true };
	 */
	mentionable: z.boolean(),
	/**
	 * The tags of the role.
	 *
	 * @example
	 * const role = { tags: { bot_id: "123456789012345678" } };
	 */
	tags: RoleTagsStructure.optional(),
	/**
	 * The flags of the role.
	 *
	 * @example
	 * const role = { flags: RoleFlags.InPrompt };
	 */
	flags: z.union([RoleFlagsEnum, z.bigint()]),
});

/**
 * Inferred type for the Role Structure schema.
 *
 * @example
 * const role: RoleStructureInfer = {
 *   id: "123456789012345678",
 *   name: "Admin",
 *   color: 0x1abc9c,
 *   hoist: true,
 *   icon: "a_1234567890abcdef",
 *   unicode_emoji: "😊",
 *   position: 1,
 *   permissions: "2147483647",
 *   managed: false,
 *   mentionable: true,
 *   tags: { bot_id: "123456789012345678" },
 *   flags: RoleFlags.InPrompt
 * };
 */
export type RoleStructureInfer = z.infer<typeof RoleStructure>;
