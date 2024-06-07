import { Snowflake } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#create-guild-emoji-json-params}
 */
export const CreateGuildEmojiJSON = z.object({
	/**
	 * Name of the emoji
	 */
	name: z.string(),
	/**
	 * Image data
	 */
	image: z.string(),
	/**
	 * Roles allowed to use this emoji
	 */
	roles: z.array(Snowflake),
});

export type CreateGuildEmojiJSONInfer = z.infer<typeof CreateGuildEmojiJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#modify-guild-emoji-json-params}
 */
export const ModifyGuildEmojiJSON = z.object({
	/**
	 * Name of the emoji
	 */
	name: z.string(),
	/**
	 * Roles allowed to use this emoji
	 */
	roles: z.array(Snowflake).nullable(),
});

export type ModifyGuildEmojiJSONInfer = z.infer<typeof ModifyGuildEmojiJSON>;
