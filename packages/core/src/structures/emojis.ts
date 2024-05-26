import { z } from "zod";
import { Snowflake } from "../globals/formats";
import { UserStructure } from "./users";

/**
 * Schema for the Emoji Structure.
 * Represents the structure of an emoji object.
 *
 * @see {@link https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure}
 */
export const EmojiStructure = z.object({
	/**
	 * The ID of the emoji.
	 *
	 * @example
	 * const emoji = { id: "123456789012345678" };
	 */
	id: Snowflake.nullable(),
	/**
	 * The name of the emoji.
	 *
	 * @example
	 * const emoji = { name: "smile" };
	 */
	name: z.string().nullable(),
	/**
	 * The roles that can use this emoji.
	 *
	 * @example
	 * const emoji = { roles: ["123456789012345678", "987654321098765432"] };
	 */
	roles: z.array(Snowflake).optional(),
	/**
	 * The user that created this emoji.
	 *
	 * @example
	 * const emoji = { user: { id: "123456789012345678", username: "example", discriminator: "1234" } };
	 */
	user: UserStructure.optional(),
	/**
	 * Whether this emoji must be wrapped in colons.
	 *
	 * @example
	 * const emoji = { require_colons: true };
	 */
	require_colons: z.boolean().optional(),
	/**
	 * Whether this emoji is managed.
	 *
	 * @example
	 * const emoji = { managed: false };
	 */
	managed: z.boolean().optional(),
	/**
	 * Whether this emoji is animated.
	 *
	 * @example
	 * const emoji = { animated: true };
	 */
	animated: z.boolean().optional(),
	/**
	 * Whether this emoji is available.
	 *
	 * @example
	 * const emoji = { available: true };
	 */
	available: z.boolean().optional(),
});

/**
 * Inferred type for the Emoji Structure schema.
 *
 * @example
 * const emoji: EmojiStructureInfer = {
 *   id: "123456789012345678",
 *   name: "smile",
 *   roles: ["123456789012345678", "987654321098765432"],
 *   user: { id: "123456789012345678", username: "example", discriminator: "1234" },
 *   require_colons: true,
 *   managed: false,
 *   animated: true,
 *   available: true
 * };
 */
export type EmojiStructureInfer = z.infer<typeof EmojiStructure>;
