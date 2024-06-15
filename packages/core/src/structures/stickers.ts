import { z } from "zod";
import { Integer, Snowflake } from "../globals/formats";
import { UserStructure } from "./users";

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types}
 */
export enum StickerFormatTypes {
	PNG = 1,
	APNG = 2,
	Lottie = 3,
	GIF = 4,
}

export const StickerFormatTypesEnum = z.nativeEnum(StickerFormatTypes);

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types}
 */
export enum StickerTypes {
	/**
	 * An official sticker in a pack
	 */
	Standard = 1,
	/**
	 * A sticker uploaded to a guild for the guild's members
	 */
	Guild = 2,
}

export const StickerTypesEnum = z.nativeEnum(StickerTypes);

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure}
 */
export const StickerStructure = z.object({
	/**
	 * ID of the sticker
	 */
	id: Snowflake,
	/**
	 * For standard stickers, ID of the pack the sticker is from
	 */
	pack_id: Snowflake.optional(),
	/**
	 * Name of the sticker
	 */
	name: z.string(),
	/**
	 * Description of the sticker
	 */
	description: z.string().nullable(),
	/**
	 * Autocomplete/suggestion tags for the sticker (max 200 characters)
	 */
	tags: z.string().max(200),
	/**
	 * Deprecated previously the sticker asset hash, now an empty string
	 *
	 * @deprecated
	 */
	asset: z.string().optional(),
	/**
	 * Type of sticker
	 */
	type: StickerTypesEnum,
	/**
	 * Type of sticker format
	 */
	format_type: StickerFormatTypesEnum,
	/**
	 * Whether this guild sticker can be used, may be false due to loss of Server Boosts
	 */
	available: z.boolean().optional(),
	/**
	 * ID of the guild that owns this sticker
	 */
	guild_id: Snowflake.optional(),
	/**
	 * The user that uploaded the guild sticker
	 */
	user: UserStructure.optional(),
	/**
	 * The standard sticker's sort order within its pack
	 */
	sort_value: Integer.optional(),
});

export type StickerStructureInfer = z.infer<typeof StickerStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-item-object-sticker-item-structure}
 */
export const StickerItemStructure = z.object({
	/**
	 * ID of the sticker
	 */
	id: Snowflake,
	/**
	 * Name of the sticker
	 */
	name: z.string(),
	/**
	 * Type of sticker format
	 */
	format_type: StickerFormatTypesEnum,
});

export type StickerItemStructureInfer = z.infer<typeof StickerItemStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#sticker-pack-object-sticker-pack-structure}
 */
export const StickerPackStructure = z.object({
	/**
	 * ID of the sticker pack
	 */
	id: Snowflake,
	/**
	 * The stickers in the pack
	 */
	stickers: z.array(StickerStructure),
	/**
	 * Name of the sticker pack
	 */
	name: z.string(),
	/**
	 * ID of the pack's SKU
	 */
	sku_id: Snowflake,
	/**
	 * ID of a sticker in the pack which is shown as the pack's icon
	 */
	cover_sticker_id: Snowflake.optional(),
	/**
	 * Description of the sticker pack
	 */
	description: z.string(),
	/**
	 * ID of the sticker pack's banner image
	 */
	banner_asset_id: Snowflake.optional(),
});

export type StickerPackStructureInfer = z.infer<typeof StickerPackStructure>;
