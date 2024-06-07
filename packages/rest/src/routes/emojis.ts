import type { EmojiStructureInfer, SnowflakeInfer } from "@lunajs/core";
import { Snowflake } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";
import type { CreateGuildEmojiJSONInfer, ModifyGuildEmojiJSONInfer } from "../pipes/emojis";
import { CreateGuildEmojiJSON, ModifyGuildEmojiJSON } from "../pipes/emojis";

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#list-guild-emojis}
 */
export function ListGuildEmojis(guildId: SnowflakeInfer): RestMakeRequestOptions<EmojiStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/emojis`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#get-guild-emoji}
 */
export function GetGuildEmoji(guildId: SnowflakeInfer, emojiId: SnowflakeInfer): RestMakeRequestOptions<EmojiStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/emojis/${Snowflake.parse(emojiId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#create-guild-emoji}
 */
export function CreateGuildEmoji(guildId: SnowflakeInfer, reason: string, json: CreateGuildEmojiJSONInfer): RestMakeRequestOptions<EmojiStructureInfer> {
	return {
		method: "POST",
		path: `/guilds/${Snowflake.parse(guildId)}/emojis`,
		body: JSON.stringify(CreateGuildEmojiJSON.parse(json)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#modify-guild-emoji}
 */
export function ModifyGuildEmoji(guildId: SnowflakeInfer, emojiId: SnowflakeInfer, reason: string, json: ModifyGuildEmojiJSONInfer): RestMakeRequestOptions<EmojiStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/emojis/${Snowflake.parse(emojiId)}`,
		body: JSON.stringify(ModifyGuildEmojiJSON.parse(json)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/emoji#delete-guild-emoji}
 */
export function DeleteGuildEmoji(guildId: SnowflakeInfer, emojiId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/emojis/${Snowflake.parse(emojiId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}
