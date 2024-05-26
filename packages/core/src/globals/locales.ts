import { z } from "zod";

/**
 * Enumeration of available locales for Discord.
 * These locales are used for setting language preferences in Discord.
 *
 * @example
 * const userLocale = Locales.EnglishUS;
 * @see {@link https://discord.com/developers/docs/reference#locales}
 */
export enum Locales {
	Bulgarian = "bg",
	ChineseChina = "zh-CN",
	ChineseTaiwan = "zh-TW",
	Croatian = "hr",
	Czech = "cs",
	Danish = "da",
	Dutch = "nl",
	EnglishUK = "en-GB",
	EnglishUS = "en-US",
	Finnish = "fi",
	French = "fr",
	German = "de",
	Greek = "el",
	Hindi = "hi",
	Hungarian = "hu",
	Indonesian = "id",
	Italian = "it",
	Japanese = "ja",
	Korean = "ko",
	Lithuanian = "lt",
	Norwegian = "no",
	Polish = "pl",
	PortugueseBrazilian = "pt-BR",
	Romanian = "ro",
	Russian = "ru",
	Spanish = "es-ES",
	SpanishLATAM = "es-419",
	Swedish = "sv-SE",
	Thai = "th",
	Turkish = "tr",
	Ukrainian = "uk",
	Vietnamese = "vi",
}

/**
 * Zod schema for locales enumeration.
 * This schema is used for validating {@link Locales} values.
 *
 * @example
 * const isValidLocale = LocalesEnum.safeParse(someLocale).success;
 */
export const LocalesEnum = z.nativeEnum(Locales);
