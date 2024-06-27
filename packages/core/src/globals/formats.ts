export type Snowflake = string;
export type Integer = number;
export type ISO8601Timestamp = string;
export type True = "True" | 1 | true;
export type False = "False" | 0 | false;
export type Boolean = False | True;

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

/**
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-guild-navigation-types}
 */
export enum GuildNavigationTypes {
	Browse = "browse",
	Customize = "customize",
	Guide = "guide",
}

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

export function formatUser(userId: Snowflake): `<@${Snowflake}>` {
	return `<@${userId}>`;
}

export function formatChannel(channelId: Snowflake): `<#${Snowflake}>` {
	return `<#${channelId}>`;
}

export function formatRole(roleId: Snowflake): `<@&${Snowflake}>` {
	return `<@&${roleId}>`;
}

export function formatSlashCommand(commandName: string, commandId: Snowflake): `</${string}:${Snowflake}>`;
export function formatSlashCommand(commandName: string, commandId: Snowflake, subCommandName: string): `</${string} ${string}:${Snowflake}>`;
export function formatSlashCommand(commandName: string, commandId: Snowflake, subCommandGroupName: string, subCommandName: string): `</${string} ${string} ${string}:${Snowflake}>`;
export function formatSlashCommand(commandName: string, commandId: Snowflake, subCommandGroupName?: string, subCommandName?: string) {
	if (subCommandGroupName && subCommandName) {
		return `</${commandName} ${subCommandGroupName} ${subCommandName}:${commandId}>`;
	} else if (subCommandName) {
		return `</${commandName} ${subCommandName}:${commandId}>`;
	}

	return `</${commandName}:${commandId}>`;
}

export function formatCustomEmoji(emojiName: string, emojiId: Snowflake): `<:${string}:${Snowflake}>`;
export function formatCustomEmoji(emojiName: string, emojiId: Snowflake, animated: boolean): `<a:${string}:${Snowflake}>`;
export function formatCustomEmoji(emojiName: string, emojiId: Snowflake, animated?: boolean) {
	if (animated) {
		return `<a:${emojiName}:${emojiId}>`;
	}

	return `<:${emojiName}:${emojiId}>`;
}

export function formatUnixTimestamp(timestamp: number): `<t:${number}>`;
export function formatUnixTimestamp(timestamp: number, style: TimestampStyles): `<t:${number}:${TimestampStyles}>`;
export function formatUnixTimestamp(timestamp: number, style?: TimestampStyles) {
	if (style) {
		return `<t:${timestamp}:${style}>`;
	}

	return `<t:${timestamp}>`;
}

export function formatGuildNavigation(guildId: Snowflake, type: GuildNavigationTypes): `<${Snowflake}:${GuildNavigationTypes}>` {
	return `<${guildId}:${type}>`;
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

export function blockQuote(text: string): `>>> ${string}` {
	return `>>> ${text}`;
}

export function bigHeader(text: string): `# ${string}` {
	return `# ${text}`;
}

export function smallHeader(text: string): `## ${string}` {
	return `## ${text}`;
}

export function boldHeader(text: string): `### ${string}` {
	return `### ${text}`;
}
