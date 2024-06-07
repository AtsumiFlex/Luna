import { StickerPackStructure } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#list-sticker-packs-response-structure}
 */
export const ListStickerPacksResponse = z.object({
	/**
	 * Array of sticker pack objects
	 */
	sticker_packs: z.array(StickerPackStructure),
});

export type ListStickerPacksResponseInfer = z.infer<typeof ListStickerPacksResponse>;

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#create-guild-sticker-form-params}
 */
export const CreateGuildStickerForm = z.object({
	/**
	 * Name of the sticker (2-30 characters)
	 */
	name: z.string().min(2).max(30),
	/**
	 * Description of the sticker (empty or 2-100 characters)
	 */
	description: z.string().min(2).max(100).optional(),
	/**
	 * Autocomplete/suggestion tags for the sticker (max 200 characters)
	 */
	tags: z.string().max(200),
	/**
	 * The sticker file to upload, must be a PNG, APNG, GIF, or Lottie JSON file, max 512 KiB
	 */
	file: z.string(),
});

export type CreateGuildStickerFormInfer = z.infer<typeof CreateGuildStickerForm>;

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#modify-guild-sticker-json-params}
 */
export const ModifyGuildStickerJSON = z.object({
	/**
	 * Name of the sticker (2-30 characters)
	 */
	name: z.string().min(2).max(30).optional(),
	/**
	 * Description of the sticker (empty or 2-100 characters)
	 */
	description: z.string().min(2).max(100).optional().nullable(),
	/**
	 * Autocomplete/suggestion tags for the sticker (max 200 characters)
	 */
	tags: z.string().max(200).optional(),
});

export type ModifyGuildStickerJSONInfer = z.infer<typeof ModifyGuildStickerJSON>;
