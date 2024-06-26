import type { Integer, Snowflake } from "../globals/formats";

/**
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-flags}
 */
export enum RoleFlags {
	/**
	 * Role is managed by an integration and cannot be manually added to members
	 */
	InPrompt = 1,
}

/**
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure}
 */
export type RoleTagsStructure = {
	/**
	 * Whether this role is available for purchase
	 */
	available_for_purchase?: null;
	/**
	 * The id of the bot this role belongs to
	 */
	bot_id?: Snowflake;
	/**
	 * Whether this role is a guild's linked role
	 */
	guild_connections?: null;
	/**
	 * The id of the integration this role belongs to
	 */
	integration_id?: Snowflake;
	/**
	 * Whether this is the guild's Booster role
	 */
	premium_subscriber?: null;
	/**
	 * The id of this role's subscription sku and listing
	 */
	subscription_listing_id?: Snowflake;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/permissions#role-object-role-structure}
 */
export type RoleStructure = {
	/**
	 * Integer representation of hexadecimal color code
	 */
	color: Integer;
	/**
	 * Role flags combined as a bitfield
	 */
	flags: RoleFlags | bigint;
	/**
	 * If this role is pinned in the user listing
	 */
	hoist: boolean;
	/**
	 * Role icon hash
	 */
	icon?: string | null;
	/**
	 * Role ID
	 */
	id: Snowflake;
	/**
	 * Whether this role is managed by an integration
	 */
	managed: boolean;
	/**
	 * Whether this role is mentionable
	 */
	mentionable: boolean;
	/**
	 * Role name
	 */
	name: string;
	/**
	 * Permission bit set
	 */
	permissions: string;
	/**
	 * Position of this role
	 */
	position: Integer;
	/**
	 * Role tags
	 */
	tags?: RoleTagsStructure;
	/**
	 * Role unicode emoji
	 */
	unicode_emoji?: string | null;
};
