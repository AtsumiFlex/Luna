import { z } from "zod";
import { Integer, Snowflake } from "../globals/formats";
import { UserStructure } from "./users";

/**
 * Enumeration of sticker format types.
 * Represents the formats that a sticker can have.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types}
 */
export enum StickerFormatTypes {
	/**
	 * PNG format.
	 *
	 * @example
	 * const format = StickerFormatTypes.PNG;
	 * console.log(format); // Output: 1
	 */
	PNG = 1,
	/**
	 * APNG format.
	 *
	 * @example
	 * const format = StickerFormatTypes.APNG;
	 * console.log(format); // Output: 2
	 */
	APNG = 2,
	/**
	 * LOTTIE format.
	 *
	 * @example
	 * const format = StickerFormatTypes.LOTTIE;
	 * console.log(format); // Output: 3
	 */
	LOTTIE = 3,
	/**
	 * GIF format.
	 *
	 * @example
	 * const format = StickerFormatTypes.GIF;
	 * console.log(format); // Output: 4
	 */
	GIF = 4,
}

/**
 * Zod schema for sticker format types enumeration.
 * This schema is used for validating {@link StickerFormatTypes} values.
 *
 * @example
 * const isValidFormat = StickerFormatTypesEnum.safeParse(StickerFormatTypes.PNG).success;
 */
export const StickerFormatTypesEnum = z.nativeEnum(StickerFormatTypes);

/**
 * Enumeration of sticker types.
 * Represents the types of stickers that can be created.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types}
 */
export enum StickerTypes {
	/**
	 * An official sticker in a pack.
	 *
	 * @example
	 * const type = StickerTypes.Standard;
	 * console.log(type); // Output: 1
	 */
	Standard = 1,
	/**
	 * A sticker uploaded to a guild for the guild's members.
	 *
	 * @example
	 * const type = StickerTypes.Guild;
	 * console.log(type); // Output: 2
	 */
	Guild = 2,
}

/**
 * Zod schema for sticker types enumeration.
 * This schema is used for validating {@link StickerTypes} values.
 *
 * @example
 * const isValidType = StickerTypesEnum.safeParse(StickerTypes.Standard).success;
 */
export const StickerTypesEnum = z.nativeEnum(StickerTypes);

/**
 * Schema for the Stickers Structure.
 * Represents the structure of a sticker object.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types}
 */
export const StickerStructure = z.object({
	/**
	 * ID of the sticker.
	 *
	 * @example
	 * const sticker = { id: "123456789012345678" };
	 */
	id: Snowflake,
	/**
	 * For standard stickers, ID of the pack the sticker is from.
	 *
	 * @example
	 * const sticker = { pack_id: "123456789012345678" };
	 */
	pack_id: Snowflake.optional(),
	/**
	 * Name of the sticker.
	 *
	 * @example
	 * const sticker = { name: "Smiley Face" };
	 */
	name: z.string(),
	/**
	 * Description of the sticker.
	 *
	 * @example
	 * const sticker = { description: "A smiling face" };
	 */
	description: z.string().nullable(),
	/**
	 * Autocomplete/suggestion tags for the sticker (max 200 characters).
	 *
	 * @example
	 * const sticker = { tags: "smile, happy" };
	 */
	tags: z.string(),
	/**
	 * Deprecated previously the sticker asset hash, now an empty string.
	 *
	 * @example
	 * const sticker = { asset: "" };
	 */
	asset: z.string().optional(),
	/**
	 * Type of sticker.
	 *
	 * @example
	 * const sticker = { type: StickerTypes.Standard };
	 */
	type: StickerTypesEnum,
	/**
	 * Type of sticker format.
	 *
	 * @example
	 * const sticker = { format_type: StickerFormatTypes.PNG };
	 */
	format_type: StickerFormatTypesEnum,
	/**
	 * Whether this guild sticker can be used, may be false due to loss of Server Boosts.
	 *
	 * @example
	 * const sticker = { available: true };
	 */
	available: z.boolean().optional(),
	/**
	 * ID of the guild that owns this sticker.
	 *
	 * @example
	 * const sticker = { guild_id: "123456789012345678" };
	 */
	guild_id: Snowflake.optional(),
	/**
	 * The user that uploaded the guild sticker.
	 *
	 * @example
	 * const sticker = { user: { id: "123456789012345678", username: "example", discriminator: "1234" } };
	 */
	user: UserStructure.optional(),
	/**
	 * The standard sticker's sort order within its pack.
	 *
	 * @example
	 * const sticker = { sort_value: 1 };
	 */
	sort_value: Integer.optional(),
});

/**
 * Inferred type for the Stickers Structure schema.
 *
 * @example
 * const sticker: StickerStructureInfer = {
 *   id: "123456789012345678",
 *   pack_id: "123456789012345678",
 *   name: "Smiley Face",
 *   description: "A smiling face",
 *   tags: "smile, happy",
 *   asset: "",
 *   type: StickerTypes.Standard,
 *   format_type: StickerFormatTypes.PNG,
 *   available: true,
 *   guild_id: "123456789012345678",
 *   user: { id: "123456789012345678", username: "example", discriminator: "1234" },
 *   sort_value: 1,
 * };
 */
export type StickerStructureInfer = z.infer<typeof StickerStructure>;

/**
 * Schema for the Stickers Item Structure.
 * Represents the structure of a sticker item object.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-item-object-sticker-item-structure}
 */
export const StickerItemStructure = z.object({
	/**
	 * ID of the sticker.
	 *
	 * @example
	 * const stickerItem = { id: "123456789012345678" };
	 */
	id: Snowflake,
	/**
	 * Name of the sticker.
	 *
	 * @example
	 * const stickerItem = { name: "Smiley Face" };
	 */
	name: z.string(),
	/**
	 * Type of sticker format.
	 *
	 * @example
	 * const stickerItem = { format_type: StickerFormatTypes.PNG };
	 */
	format_type: StickerFormatTypesEnum,
});

/**
 * Inferred type for the Stickers Item Structure schema.
 *
 * @example
 * const stickerItem: StickerItemStructureInfer = {
 *   id: "123456789012345678",
 *   name: "Smiley Face",
 *   format_type: StickerFormatTypes.PNG,
 * };
 */
export type StickerItemStructureInfer = z.infer<typeof StickerItemStructure>;

/**
 * Schema for the Stickers Pack Structure.
 * Represents the structure of a sticker pack object.
 *
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-pack-object-sticker-pack-structure}
 */
export const StickerPackStructure = z.object({
	/**
	 * ID of the sticker pack.
	 *
	 * @example
	 * const stickerPack = { id: "123456789012345678" };
	 */
	id: Snowflake,
	/**
	 * The stickers in the pack.
	 *
	 * @example
	 * const stickerPack = { stickers: [{ id: "123456789012345678", name: "Smiley Face", format_type: StickerFormatTypes.PNG }] };
	 */
	stickers: z.array(StickerItemStructure),
	/**
	 * Name of the sticker pack.
	 *
	 * @example
	 * const stickerPack = { name: "Smiley Pack" };
	 */
	name: z.string(),
	/**
	 * ID of the pack's SKU.
	 *
	 * @example
	 * const stickerPack = { sku_id: "123456789012345678" };
	 */
	sku_id: Snowflake,
	/**
	 * ID of a sticker in the pack which is shown as the pack's icon.
	 *
	 * @example
	 * const stickerPack = { cover_sticker_id: "123456789012345678" };
	 */
	cover_sticker_id: Snowflake.optional(),
	/**
	 * Description of the sticker pack.
	 *
	 * @example
	 * const stickerPack = { description: "A pack of smiley stickers" };
	 */
	description: z.string(),
	/**
	 * ID of the sticker pack's banner image.
	 *
	 * @example
	 * const stickerPack = { banner_asset_id: "123456789012345678" };
	 */
	banner_asset_id: Snowflake.optional(),
});

/**
 * Inferred type for the Stickers Pack Structure schema.
 *
 * @example
 * const stickerPack: StickerPackStructureInfer = {
 *   id: "123456789012345678",
 *   stickers: [{ id: "123456789012345678", name: "Smiley Face", format_type: StickerFormatTypes.PNG }],
 *   name: "Smiley Pack",
 *   sku_id: "123456789012345678",
 *   cover_sticker_id: "123456789012345678",
 *   description: "A pack of smiley stickers",
 *   banner_asset_id: "123456789012345678",
 * };
 */
export type StickerPackStructureInfer = z.infer<typeof StickerPackStructure>;
