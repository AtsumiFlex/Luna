import { z } from "zod";

export const Snowflake = z.string().refine((value) => /^\d{16,19}$/.test(value));
export type SnowflakeInfer = z.infer<typeof Snowflake>;
export const Integer = z.number().int().positive();
export type IntegerInfer = z.infer<typeof Integer>;

/**
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-timestamp-styles}
 */
export enum TimestampStyles {
	LongDate = "D",
	LongDateTime = "F",
	LongTime = "T",
	RelativeTime = "R",
	ShortDate = "d",
	ShortDateTime = "f",
	ShortTime = "t",
}

export const TimestampStylesEnum = z.nativeEnum(TimestampStyles);

/**
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-guild-navigation-types}
 */
export enum GuildNavigationTypes {
	Browse = "browse",
	Customize = "customize",
	Guide = "guide",
}

export const GuildNavigationTypesEnum = z.nativeEnum(GuildNavigationTypes);

/**
 * @see {@link https://discord.com/developers/docs/reference#image-formatting-image-formats}
 */
export enum ImageFormats {
	GIF = "gif",
	JPEG = "jpeg",
	Lottie = "json",
	PNG = "png",
	WebP = "webp",
}

export const ImageFormatsEnum = z.nativeEnum(ImageFormats);

export function formatUser(userId: SnowflakeInfer): `<@${SnowflakeInfer}>` {
	return `<@${Snowflake.parse(userId)}>`;
}

export function formatChannel(channelId: SnowflakeInfer): `<#${SnowflakeInfer}>` {
	return `<#${Snowflake.parse(channelId)}>`;
}

export function formatRole(roleId: SnowflakeInfer): `<@&${SnowflakeInfer}>` {
	return `<@&${Snowflake.parse(roleId)}>`;
}

export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer): `</${string}:${SnowflakeInfer}>`;
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandName: string): `</${string} ${string}:${SnowflakeInfer}>`;
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroupName: string, subCommandName: string): `</${string} ${string} ${string}:${SnowflakeInfer}>`;
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroupName?: string, subCommandName?: string) {
	if (subCommandGroupName && subCommandName) {
		return `</${commandName} ${subCommandGroupName} ${subCommandName}:${Snowflake.parse(commandId)}>`;
	} else if (subCommandName) {
		return `</${commandName} ${subCommandName}:${Snowflake.parse(commandId)}>`;
	} else {
		return `</${commandName}:${Snowflake.parse(commandId)}>`;
	}
}

export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer): `<:${string}:${SnowflakeInfer}>`;
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated: boolean): `<a:${string}:${SnowflakeInfer}>`;
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated?: boolean) {
	if (animated) {
		return `<a:${emojiName}:${Snowflake.parse(emojiId)}>`;
	} else {
		return `<:${emojiName}:${Snowflake.parse(emojiId)}>`;
	}
}

export function formatUnixTimestamp(timestamp: IntegerInfer): `<t:${IntegerInfer}>`;
export function formatUnixTimestamp(timestamp: IntegerInfer, style: TimestampStyles): `<t:${IntegerInfer}:${TimestampStyles}>`;
export function formatUnixTimestamp(timestamp: IntegerInfer, style?: TimestampStyles) {
	if (style) {
		return `<t:${Integer.parse(timestamp)}:${TimestampStylesEnum.parse(style)}>`;
	} else {
		return `<t:${Integer.parse(timestamp)}>`;
	}
}

export function formatGuildNavigation(guildId: SnowflakeInfer, type: GuildNavigationTypes): `<${SnowflakeInfer}:${GuildNavigationTypes}>` {
	return `<${Snowflake.parse(guildId)}:${GuildNavigationTypesEnum.parse(type)}>`;
}

export function italics(text: string): `_${string}_` {
	return `_${text}_`;
}

export function bold(text: string): `**${string}**` {
	return `**${text}**`;
}

export function underline(text: string): `__${string}__` {
	return `__${text}__`;
}

export function strikethrough(text: string): `~~${string}~~` {
	return `~~${text}~~`;
}

export function code(text: string): `\`${string}\`` {
	return `\`${text}\``;
}

export function codeBlock(language: string, text: string): `\`\`\`${string}\n${string}\n\`\`\`` {
	return `\`\`\`${language}\n${text}\n\`\`\``;
}

export function spoiler(text: string): `||${string}||` {
	return `||${text}||`;
}

export function quote(text: string): `> ${string}` {
	return `> ${text}`;
}

export function quoteBlock(text: string): `>>> ${string}` {
	return `>>> ${text}`;
}

export function bigHeader(text: string): `# ${string}` {
	return `# ${text}`;
}

export function smallHeader(text: string): `## ${string}` {
	return `## ${text}`;
}

export function evenSmallHeader(text: string): `### ${string}` {
	return `### ${text}`;
}
