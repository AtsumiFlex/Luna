import type { SnowflakeInfer, StickerStructureInfer } from "@lunajs/core";
import { Snowflake } from "@lunajs/core";
import { FormData } from "undici";
import type { RestMakeRequestOptions } from "../globals/rest";
import type {
	CreateGuildStickerFormInfer,
	ListStickerPacksResponseInfer,
	ModifyGuildStickerJSONInfer,
} from "../libs/stickers";
import { ModifyGuildStickerJSON } from "../libs/stickers";

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#get-sticker}
 */
export function GetSticker(stickerId: SnowflakeInfer): RestMakeRequestOptions<StickerStructureInfer> {
	return {
		method: "GET",
		path: `/stickers/${Snowflake.parse(stickerId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#list-sticker-packs}
 */
export function ListStickerPacks(): RestMakeRequestOptions<ListStickerPacksResponseInfer> {
	return {
		method: "GET",
		path: "/sticker-packs",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#list-guild-stickers}
 */
export function ListGuildStickers(guildId: SnowflakeInfer): RestMakeRequestOptions<StickerStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/stickers`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#get-guild-sticker}
 */
export function GetGuildSticker(guildId: SnowflakeInfer, stickerId: SnowflakeInfer): RestMakeRequestOptions<StickerStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/stickers/${Snowflake.parse(stickerId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#create-guild-sticker}
 */
export function CreateGuildSticker(guildId: SnowflakeInfer, reason: string, data: CreateGuildStickerFormInfer): RestMakeRequestOptions<StickerStructureInfer> {
	const form = new FormData();
	form.append("name", data.name);
	form.append("description", data.description);
	form.append("tags", data.tags);
	form.append("file", data.file);

	return {
		method: "POST",
		path: `/guilds/${Snowflake.parse(guildId)}/stickers`,
		headers: {
			"Content-Type": "multipart/form-data",
			"X-Audit-Log-Reason": reason,
		},
		body: form,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#modify-guild-sticker}
 */
export function ModifyGuildSticker(guildId: SnowflakeInfer, stickerId: SnowflakeInfer, reason: string, json: ModifyGuildStickerJSONInfer): RestMakeRequestOptions<StickerStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/stickers/${Snowflake.parse(stickerId)}`,
		body: JSON.stringify(ModifyGuildStickerJSON.parse(json)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/sticker#delete-guild-sticker}
 */
export function DeleteGuildSticker(guildId: SnowflakeInfer, stickerId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/stickers/${Snowflake.parse(stickerId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}
