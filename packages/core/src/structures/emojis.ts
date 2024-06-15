import { z } from "zod";
import { Snowflake } from "../globals/formats";
import { RoleStructure } from "./roles";
import { UserStructure } from "./users";

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure}
 */
export const EmojiStructure = z.object({
	/**
	 * Emoji id
	 */
	id: Snowflake.nullable(),
	/**
	 * Emoji name
	 */
	name: z.string().nullable(),
	/**
	 * Roles allowed to use this emoji
	 */
	roles: z.array(RoleStructure.pick({ id: true })).optional(),
	/**
	 * User that created this emoji
	 */
	user: UserStructure.optional(),
	/**
	 * Whether this emoji must be wrapped in colons
	 */
	require_colons: z.boolean().optional(),
	/**
	 * Whether this emoji is managed
	 */
	managed: z.boolean().optional(),
	/**
	 * Whether this emoji is animated
	 */
	animated: z.boolean().optional(),
	/**
	 * Whether this emoji can be used, may be false due to loss of Server Boosts
	 */
	available: z.boolean().optional(),
});

export type EmojiStructureInfer = z.infer<typeof EmojiStructure>;
