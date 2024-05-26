import { z } from "zod";

/**
 * Schema for validating Discord snowflake IDs.
 * A snowflake ID is a unique identifier used by Discord for various entities.
 *
 * @example
 * const isValidSnowflake = Snowflake.safeParse("123456789012345678").success;
 */
export const Snowflake = z.string().refine((value) => /^\d{17,19}$/.test(value));

/**
 * Inferred type for Discord snowflake IDs.
 *
 * @example
 * const userId: SnowflakeInfer = "123456789012345678";
 */
export type SnowflakeInfer = z.infer<typeof Snowflake>;

/**
 * Schema for validating positive integers.
 *
 * @example
 * const isValidInteger = Integer.safeParse(123).success;
 */
export const Integer = z.number().positive().int();

/**
 * Inferred type for positive integers.
 *
 * @example
 * const count: IntegerInfer = 123;
 */
export type IntegerInfer = z.infer<typeof Integer>;

/**
 * Schema for validating ISO 8601 timestamps.
 * An ISO 8601 timestamp is a standardized format for date and time.
 *
 * @example
 * const isValidTimestamp = ISO8601Timestamp.safeParse("2021-04-20T16:20:30.000Z").success;
 */
export const ISO8601Timestamp = z.string().refine((value) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(value));

/**
 * Inferred type for ISO 8601 timestamps.
 *
 * @example
 * const timestamp: ISO8601TimestampInfer = "2021-04-20T16:20:30.000Z";
 */
export type ISO8601TimestampInfer = z.infer<typeof ISO8601Timestamp>;

/**
 * Enumeration of timestamp styles for Discord message formatting.
 *
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-timestamp-styles}
 */
export enum TimestampStyles {
	/**
	 * Long Date
	 *
	 * @example 20 April 2021
	 */
	LongDate = "D",
	/**
	 * Long Date/Time
	 *
	 * @example Tuesday, 20 April 2021 16:20
	 */
	LongDateTime = "F",
	/**
	 * Long Time
	 *
	 * @example 16:20:30
	 */
	LongTime = "T",
	/**
	 * Relative Time
	 *
	 * @example 2 months ago
	 */
	RelativeTime = "R",
	/**
	 * Short Date
	 *
	 * @example 20/04/2021
	 */
	ShortDate = "d",
	/**
	 * Short Date/Time
	 *
	 * @example 20 April 2021 16:20
	 */
	ShortDateTime = "f",
	/**
	 * Short Time
	 *
	 * @example 16:20
	 */
	ShortTime = "t",
}

/**
 * Zod schema for timestamp styles enumeration.
 * This schema is used for validating {@link TimestampStyles} values.
 *
 * @example
 * const isValidStyle = TimestampStylesEnum.safeParse(TimestampStyles.LongDate).success;
 */
export const TimestampStylesEnum = z.nativeEnum(TimestampStyles);

/**
 * Enumeration of guild navigation types for Discord.
 *
 * @see {@link https://discord.com/developers/docs/reference#message-formatting-guild-navigation-types}
 */
export enum GuildNavigationTypes {
	/**
	 * Browse type for guild navigation.
	 */
	Browse = "browse",
	/**
	 * Customize type for guild navigation.
	 */
	Customize = "customize",
	/**
	 * Guide type for guild navigation.
	 */
	Guide = "guide",
}

/**
 * Zod schema for guild navigation types enumeration.
 * This schema is used for validating {@link GuildNavigationTypes} values.
 *
 * @example
 * const isValidNavigationType = GuildNavigationTypesEnum.safeParse(GuildNavigationTypes.Browse).success;
 */
export const GuildNavigationTypesEnum = z.nativeEnum(GuildNavigationTypes);

/**
 * Enumeration of image formats supported by Discord.
 *
 * @see {@link https://discord.com/developers/docs/reference#image-formatting-image-formats}
 */
export enum ImageFormats {
	/**
	 * GIF format.
	 */
	GIF = "gif",
	/**
	 * JPEG format.
	 */
	JPEG = "jpeg",
	/**
	 * Lottie format.
	 */
	Lottie = "json",
	/**
	 * PNG format.
	 */
	PNG = "png",
	/**
	 * WebP format.
	 */
	WebP = "webp",
}

/**
 * Zod schema for image formats enumeration.
 * This schema is used for validating {@link ImageFormats} values.
 *
 * @example
 * const isValidImageFormat = ImageFormatsEnum.safeParse(ImageFormats.PNG).success;
 */
export const ImageFormatsEnum = z.nativeEnum(ImageFormats);

/**
 * Formats a user ID into a Discord mention.
 *
 * @param userId - The user ID to format.
 * @returns A formatted user mention string.
 * @example
 * const mention = formatUser("123456789012345678");
 * console.log(mention); // Output: <@123456789012345678>
 */
export function formatUser(userId: SnowflakeInfer): `<@${SnowflakeInfer}>` {
	return `<@${userId}>`;
}

/**
 * Formats a channel ID into a Discord mention.
 *
 * @param channelId - The channel ID to format.
 * @returns A formatted channel mention string.
 * @example
 * const mention = formatChannel("123456789012345678");
 * console.log(mention); // Output: <#123456789012345678>
 */
export function formatChannel(channelId: SnowflakeInfer): `<#${SnowflakeInfer}>` {
	return `<#${channelId}>`;
}

/**
 * Formats a role ID into a Discord mention.
 *
 * @param roleId - The role ID to format.
 * @returns A formatted role mention string.
 * @example
 * const mention = formatRole("123456789012345678");
 * console.log(mention); // Output: <@&123456789012345678>
 */
export function formatRole(roleId: SnowflakeInfer): `<@&${SnowflakeInfer}>` {
	return `<@&${roleId}>`;
}

/**
 * Formats a custom emoji ID into a Discord custom emoji.
 *
 * @param commandName - The name of the slash command.
 * @param commandId - The ID of the slash command.
 * @returns A formatted slash command string.
 * @example
 * const command = formatSlashCommand("command", "123456789012345678");
 * console.log(command); // Output: </command:123456789012345678>
 */
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer): `</${string}:${SnowflakeInfer}>`;
/**
 * Formats a subcommand ID into a Discord subcommand.
 *
 * @param commandName - The name of the slash command.
 * @param commandId - The ID of the slash command.
 * @param subCommandName - The name of the subcommand.
 * @returns A formatted subcommand string.
 * @example
 * const command = formatSlashCommand("command", "123456789012345678", "subcommand");
 * console.log(command); // Output: </command subcommand:123456789012345678>
 */
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandName: string): `</${string} ${string}:${SnowflakeInfer}>`;
/**
 * Formats a subcommand group ID into a Discord subcommand group.
 *
 * @param commandName - The name of the slash command.
 * @param commandId - The ID of the slash command.
 * @param subCommandGroupName - The name of the subcommand group.
 * @param subCommandName - The name of the subcommand.
 * @returns A formatted subcommand group string.
 * @example
 * const command = formatSlashCommand("command", "123456789012345678", "subcommand-group", "subcommand");
 * console.log(command); // Output: </command subcommand-group subcommand:123456789012345678>
 */
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroupName: string, subCommandName: string): `</${string} ${string} ${string}:${SnowflakeInfer}>`;
/**
 * Formats a slash command into a Discord slash command.
 *
 * @param commandName - The name of the slash command.
 * @param commandId - The ID of the slash command.
 * @param subCommandGroupName - The name of the subcommand group.
 * @param subCommandName - The name of the subcommand.
 * @returns A formatted slash command string.
 * @example
 * const command = formatSlashCommand("command", "123456789012345678", "subcommand-group", "subcommand");
 * console.log(command); // Output: </command subcommand-group subcommand:123456789012345678>
 */
export function formatSlashCommand(commandName: string, commandId: SnowflakeInfer, subCommandGroupName?: string, subCommandName?: string) {
	if (subCommandGroupName && subCommandName) {
		return `</${commandName} ${subCommandGroupName} ${subCommandName}:${commandId}>`;
	}

	if (subCommandName) {
		return `</${commandName} ${subCommandName}:${commandId}>`;
	}

	return `</${commandName}:${commandId}>`;
}

/**
 * Formats a custom emoji ID into a Discord custom emoji.
 *
 * @param emojiName - The name of the custom emoji.
 * @param emojiId - The ID of the custom emoji.
 * @returns A formatted custom emoji string.
 * @example
 * const emoji = formatCustomEmoji("emoji", "123456789012345678");
 * console.log(emoji); // Output: <:emoji:123456789012345678>
 */
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer): `<:${string}:${SnowflakeInfer}>`;
/**
 * Formats a custom animated emoji ID into a Discord custom emoji.
 *
 * @param emojiName - The name of the custom emoji.
 * @param emojiId - The ID of the custom emoji.
 * @param animated - Whether the custom emoji is animated.
 * @returns A formatted custom emoji string.
 * @example
 * const emoji = formatCustomEmoji("emoji", "123456789012345678", true);
 * console.log(emoji); // Output: <:emoji:123456789012345678>
 */
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated: boolean): `<a:${string}:${SnowflakeInfer}>`;
/**
 * Formats a custom emoji ID into a Discord custom emoji.
 *
 * @param emojiName - The name of the custom emoji.
 * @param emojiId - The ID of the custom emoji.
 * @param animated - Whether the custom emoji is animated.
 * @returns A formatted custom emoji string.
 * @example
 * const emoji = formatCustomEmoji("emoji", "123456789012345678", true);
 * console.log(emoji); // Output: <:emoji:123456789012345678>
 */
export function formatCustomEmoji(emojiName: string, emojiId: SnowflakeInfer, animated?: boolean) {
	if (animated) {
		return `<a:${emojiName}:${emojiId}>`;
	}

	return `<:${emojiName}:${emojiId}>`;
}

/**
 * Formats a timestamp into a Discord timestamp.
 *
 * @param timestamp - The timestamp to format.
 * @returns A formatted timestamp string.
 * @example
 * const timestamp = formatTimestamp(1618939230);
 * console.log(timestamp); // Output: <t:1618939230>
 */
export function formatUnixTimestamp(timestamp: IntegerInfer): `<t:${IntegerInfer}:${TimestampStyles.ShortDateTime}>`;
/**
 * Formats a timestamp into a Discord timestamp with a style.
 *
 * @param timestamp - The timestamp to format.
 * @param style - The style of the timestamp.
 * @returns A formatted timestamp string.
 * @example
 * const timestamp = formatTimestamp(1618939230, TimestampStyles.LongDate);
 * console.log(timestamp); // Output: <t:1618939230:D>
 */
export function formatUnixTimestamp(timestamp: IntegerInfer, style: TimestampStyles): `<t:${IntegerInfer}:${TimestampStyles}>`;
/**
 * Formats a timestamp into a Discord timestamp with a style.
 *
 * @param timestamp - The timestamp to format.
 * @param style - The style of the timestamp.
 * @returns A formatted timestamp string.
 * @example
 * const timestamp = formatTimestamp(1618939230, TimestampStyles.LongDate);
 * console.log(timestamp); // Output: <t:1618939230:D>
 */
export function formatUnixTimestamp(timestamp: IntegerInfer, style?: TimestampStyles) {
	if (style) {
		return `<t:${timestamp}:${style}>`;
	}

	return `<t:${timestamp}:${TimestampStyles.ShortDateTime}>`;
}

/**
 * Formats a date into a Discord timestamp.
 *
 * @param guildId - The ID of the guild to navigate to.
 * @param type - The type of navigation to perform.
 * @returns A formatted guild navigation string.
 * @example
 * const navigation = formatGuildNavigation("123456789012345678", GuildNavigationTypes.Browse);
 * console.log(navigation); // Output: <123456789012345678:browse>
 */
export function formatGuildNavigation(guildId: SnowflakeInfer, type: GuildNavigationTypes): `<${SnowflakeInfer}:${GuildNavigationTypes}>` {
	return `<${guildId}:${type}>`;
}

/**
 * Formats text in italics.
 *
 * @param text - The text to format.
 * @returns The formatted text in italics.
 * @example
 * const formatted = italics("example");
 * console.log(formatted); // Output: _example_
 */
export function italics(text: string): `_${string}_` {
	return `_${text}_`;
}

/**
 * Formats text in bold.
 *
 * @param text - The text to format.
 * @returns The formatted text in bold.
 * @example
 * const formatted = bold("example");
 * console.log(formatted); // Output: **example**
 */
export function bold(text: string): `**${string}**` {
	return `**${text}**`;
}

/**
 * Formats text with underline.
 *
 * @param text - The text to format.
 * @returns The formatted text with underline.
 * @example
 * const formatted = underline("example");
 * console.log(formatted); // Output: __example__
 */
export function underline(text: string): `__${string}__` {
	return `__${text}__`;
}

/**
 * Formats text with strikethrough.
 *
 * @param text - The text to format.
 * @returns The formatted text with strikethrough.
 * @example
 * const formatted = strikethrough("example");
 * console.log(formatted); // Output: ~~example~~
 */
export function strikethrough(text: string): `~~${string}~~` {
	return `~~${text}~~`;
}

/**
 * Formats text as inline code.
 *
 * @param text - The text to format.
 * @returns The formatted text as inline code.
 * @example
 * const formatted = code("example");
 * console.log(formatted); // Output: `example`
 */
export function code(text: string): `\`${string}\`` {
	return `\`${text}\``;
}

/**
 * Formats text as a code block.
 *
 * @param language - The language for syntax highlighting.
 * @param text - The text to format.
 * @returns The formatted text as a code block.
 * @example
 * const formatted = codeBlock("javascript", "console.log('example');");
 * console.log(formatted); // Output: ```javascript\nconsole.log('example');\n```
 */
export function codeBlock(language: string, text: string): `\`\`\`${string}\n${string}\n\`\`\`` {
	return `\`\`\`${language}\n${text}\n\`\`\``;
}

/**
 * Formats text as a spoiler.
 *
 * @param text - The text to format.
 * @returns The formatted text as a spoiler.
 * @example
 * const formatted = spoiler("example");
 * console.log(formatted); // Output: ||example||
 */
export function spoiler(text: string): `||${string}||` {
	return `||${text}||`;
}

/**
 * Formats text as a block quote.
 *
 * @param text - The text to format.
 * @returns The formatted text as a block quote.
 * @example
 * const formatted = quote("example");
 * console.log(formatted); // Output: > example
 */
export function quote(text: string): `> ${string}` {
	return `> ${text}`;
}

/**
 * Formats text as a multiline block quote.
 *
 * @param text - The text to format.
 * @returns The formatted text as a multiline block quote.
 * @example
 * const formatted = quoteBlock("example");
 * console.log(formatted); // Output: >>> example
 */
export function quoteBlock(text: string): `>>> ${string}` {
	return `>>> ${text}`;
}

/**
 * Formats text as a link.
 *
 * @param url - The URL for the link.
 * @param text - The text for the link.
 * @returns The formatted text as a link.
 * @example
 * const formatted = link("https://example.com", "example");
 * console.log(formatted); // Output: [example](https://example.com)
 */
export function link(url: string, text: string): `[${string}](${string})` {
	return `[${text}](${url})`;
}

/**
 * Formats text as a big header.
 *
 * @param text - The text to format.
 * @returns The formatted text as a big header.
 * @example
 * const formatted = bigHeader("example");
 * console.log(formatted); // Output: # example
 */
export function bigHeader(text: string): `# ${string}` {
	return `# ${text}`;
}

/**
 * Formats text as a small header.
 *
 * @param text - The text to format.
 * @returns The formatted text as a small header.
 * @example
 * const formatted = smallHeader("example");
 * console.log(formatted); // Output: ## example
 */
export function smallHeader(text: string): `## ${string}` {
	return `## ${text}`;
}

/**
 * Formats text as an even smaller header.
 *
 * @param text - The text to format.
 * @returns The formatted text as an even smaller header.
 * @example
 * const formatted = evenSmallerHeader("example");
 * console.log(formatted); // Output: ### example
 */
export function evenSmallerHeader(text: string): `### ${string}` {
	return `### ${text}`;
}
