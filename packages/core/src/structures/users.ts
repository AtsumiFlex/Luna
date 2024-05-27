import { z } from "zod";
import { Integer, Snowflake } from "../globals/formats";
import { LocalesEnum } from "../globals/locales";
import { ApplicationRoleConnectionMetadataStructure } from "./applications";

/**
 * Schema for the Application Role Connection Structure.
 * Represents the structure of an application role connection.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure}
 */
export const ApplicationRoleConnectionStructure = z.object({
	/**
	 * The vanity name of the platform a bot has connected (max 50 characters).
	 *
	 * @example
	 * const roleConnection = { platform_name: "Twitch" };
	 */
	platform_name: z.string().nullable(),
	/**
	 * The username on the platform a bot has connected (max 100 characters).
	 *
	 * @example
	 * const roleConnection = { platform_username: "example_user" };
	 */
	platform_username: z.string().nullable(),
	/**
	 * Object mapping application role connection metadata keys to their string-ified value (max 100 characters) for the user on the platform a bot has connected.
	 *
	 * @example
	 * const roleConnection = { metadata: { key: "value" } };
	 */
	metadata: z.record(z.string(), ApplicationRoleConnectionMetadataStructure),
});

/**
 * Inferred type for the Application Role Connection Structure schema.
 *
 * @example
 * const roleConnection: ApplicationRoleConnectionStructureInfer = {
 *   platform_name: "Twitch",
 *   platform_username: "example_user",
 *   metadata: { key: "value" }
 * };
 */
export type ApplicationRoleConnectionStructureInfer = z.infer<typeof ApplicationRoleConnectionStructure>;

/**
 * Enumeration of connection visibility types.
 * Represents the visibility of a connection.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-visibility-types}
 */
export enum ConnectionVisibilityTypes {
	/**
	 * Invisible to everyone except the user themselves.
	 */
	None = 0,
	/**
	 * Visible to everyone.
	 */
	Everyone = 1,
}

/**
 * Zod schema for connection visibility types enumeration.
 * This schema is used for validating {@link ConnectionVisibilityTypes} values.
 *
 * @example
 * const isValidVisibility = ConnectionVisibilityTypesEnum.safeParse(ConnectionVisibilityTypes.Everyone).success;
 */
export const ConnectionVisibilityTypesEnum = z.nativeEnum(ConnectionVisibilityTypes);

/**
 * Enumeration of connection services.
 * Represents the services a user can connect to.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-services}
 */
export enum ConnectionServices {
	Battlenet = "battlenet",
	Bungie = "bungie",
	Domain = "domain",
	Ebay = "ebay",
	Epicgames = "epicgames",
	Facebook = "facebook",
	Github = "github",
	Instagram = "instagram",
	Leagueoflegends = "leagueoflegends",
	Paypal = "paypal",
	Playstation = "playstation",
	Reddit = "reddit",
	Riotgames = "riotgames",
	Skype = "skype",
	Spotify = "spotify",
	Steam = "steam",
	Tiktok = "tiktok",
	Twitch = "twitch",
	Twitter = "twitter",
	Xbox = "xbox",
	Youtube = "youtube",
}

/**
 * Zod schema for connection services enumeration.
 * This schema is used for validating {@link ConnectionServices} values.
 *
 * @example
 * const isValidService = ConnectionServicesEnum.safeParse(ConnectionServices.Twitch).success;
 */
export const ConnectionServicesEnum = z.nativeEnum(ConnectionServices);

/**
 * Schema for the Connection Structure.
 * Represents the structure of a user's connection.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-connection-structure}
 */
export const ConnectionStructure = z.object({
	/**
	 * ID of the connection account.
	 *
	 * @example
	 * const connection = { id: "123456789012345678" };
	 */
	id: z.string(),
	/**
	 * The username of the connection account.
	 *
	 * @example
	 * const connection = { name: "example_user" };
	 */
	name: z.string(),
	/**
	 * The service of this connection.
	 *
	 * @example
	 * const connection = { type: ConnectionServices.Twitch };
	 */
	type: ConnectionServicesEnum,
	/**
	 * Whether the connection is revoked.
	 *
	 * @example
	 * const connection = { revoked: false };
	 */
	revoked: z.boolean().optional(),
	/**
	 * An array of partial server integrations.
	 *
	 * @example
	 * const connection = { integrations: [] };
	 */
	integrations: z.array(z.unknown()).optional(),
	/**
	 * Whether the connection is verified.
	 *
	 * @example
	 * const connection = { verified: true };
	 */
	verified: z.boolean(),
	/**
	 * Whether friend sync is enabled for this connection.
	 *
	 * @example
	 * const connection = { friend_sync: true };
	 */
	friend_sync: z.boolean(),
	/**
	 * Whether activities related to this connection will be shown in presence updates.
	 *
	 * @example
	 * const connection = { show_activity: true };
	 */
	show_activity: z.boolean(),
	/**
	 * Whether this connection has a corresponding third party OAuth2 token.
	 *
	 * @example
	 * const connection = { two_way_link: true };
	 */
	two_way_link: z.boolean(),
	/**
	 * Visibility of this connection.
	 *
	 * @example
	 * const connection = { visibility: ConnectionVisibilityTypes.Everyone };
	 */
	visibility: ConnectionVisibilityTypesEnum,
});

/**
 * Inferred type for the Connection Structure schema.
 *
 * @example
 * const connection: ConnectionStructureInfer = {
 *   id: "123456789012345678",
 *   name: "example_user",
 *   type: ConnectionServices.Twitch,
 *   verified: true,
 *   friend_sync: true,
 *   show_activity: true,
 *   two_way_link: true,
 *   visibility: ConnectionVisibilityTypes.Everyone
 * };
 */
export type ConnectionStructureInfer = z.infer<typeof ConnectionStructure>;

/**
 * Schema for the Avatar Decoration Data Structure.
 * Represents the structure of avatar decoration data.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#avatar-decoration-data-object-avatar-decoration-data-structure}
 */
export const AvatarDecorationDataStructure = z.object({
	/**
	 * The avatar decoration hash.
	 *
	 * @example
	 * const avatarDecoration = { asset: "hash" };
	 */
	asset: z.string(),
	/**
	 * Id of the avatar decoration's SKU.
	 *
	 * @example
	 * const avatarDecoration = { sku_id: "123456789012345678" };
	 */
	sku_id: Snowflake,
});

/**
 * Inferred type for the Avatar Decoration Data Structure schema.
 *
 * @example
 * const avatarDecoration: AvatarDecorationDataStructureInfer = {
 *   asset: "hash",
 *   sku_id: "123456789012345678"
 * };
 */
export type AvatarDecorationDataStructureInfer = z.infer<typeof AvatarDecorationDataStructure>;

/**
 * Enumeration of premium types.
 * Represents the types of premium subscriptions a user can have.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-premium-types}
 */
export enum PremiumTypes {
	None = 0,
	NitroClassic = 1,
	Nitro = 2,
	NitroBasic = 3,
}

/**
 * Zod schema for premium types enumeration.
 * This schema is used for validating {@link PremiumTypes} values.
 *
 * @example
 * const isValidPremiumType = PremiumTypesEnum.safeParse(PremiumTypes.Nitro).success;
 */
export const PremiumTypesEnum = z.nativeEnum(PremiumTypes);

/**
 * Enumeration of user flags.
 * Represents various flags on a user's account.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-flags}
 */
export enum UserFlags {
	/**
	 * Discord Employee.
	 */
	Staff = 1,
	/**
	 * Partnered Server Owner.
	 */
	Partner = 2,
	/**
	 * HypeSquad Events Member.
	 */
	HypeSquad = 4,
	/**
	 * Bug Hunter Level 1.
	 */
	BugHunterLevel1 = 8,
	/**
	 * House Bravery Member.
	 */
	HouseBravery = 64,
	/**
	 * House Brilliance Member.
	 */
	HouseBrilliance = 128,
	/**
	 * House Balance Member.
	 */
	HouseBalance = 256,
	/**
	 * Early Nitro Supporter.
	 */
	PremiumEarlySupporter = 512,
	/**
	 * User is a team.
	 */
	TeamPseudoUser = 1_024,
	/**
	 * Bug Hunter Level 2.
	 */
	BugHunterLevel2 = 16_384,
	/**
	 * Verified Bot.
	 */
	VerifiedBot = 65_536,
	/**
	 * Early Verified Bot Developer.
	 */
	VerifiedDeveloper = 131_072,
	/**
	 * Moderator Programs Alumni.
	 */
	CertifiedModerator = 262_144,
	/**
	 * Bot uses only HTTP interactions and is shown in the online member list.
	 */
	BotHttpInteractions = 524_288,
	/**
	 * User is an Active Developer.
	 */
	ActiveDeveloper = 4_194_304,
}

/**
 * Zod schema for user flags enumeration.
 * This schema is used for validating {@link UserFlags} values.
 *
 * @example
 * const isValidFlag = UserFlagsEnum.safeParse(UserFlags.Staff).success;
 */
export const UserFlagsEnum = z.nativeEnum(UserFlags);

/**
 * Schema for the User Structure.
 * Represents the structure of a user object.
 *
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-structure}
 */
export const UserStructure = z.object({
	/**
	 * The user's id.
	 *
	 * @example
	 * const user = { id: "123456789012345678" };
	 */
	id: Snowflake,
	/**
	 * The user's username, not unique across the platform.
	 *
	 * @example
	 * const user = { username: "example_user" };
	 */
	username: z.string(),
	/**
	 * The user's Discord-tag.
	 *
	 * @example
	 * const user = { discriminator: "1234" };
	 */
	discriminator: z.string(),
	/**
	 * The user's display name, if it is set. For bots, this is the application name.
	 *
	 * @example
	 * const user = { global_name: "Example Bot" };
	 */
	global_name: z.string().nullable(),
	/**
	 * The user's avatar hash.
	 *
	 * @example
	 * const user = { avatar: "avatar_hash" };
	 */
	avatar: z.string().nullable(),
	/**
	 * Whether the user belongs to an OAuth2 application.
	 *
	 * @example
	 * const user = { bot: true };
	 */
	bot: z.boolean().optional(),
	/**
	 * Whether the user is an Official Discord System user (part of the urgent message system).
	 *
	 * @example
	 * const user = { system: true };
	 */
	system: z.boolean().optional(),
	/**
	 * Whether the user has two factor enabled on their account.
	 *
	 * @example
	 * const user = { mfa_enabled: true };
	 */
	mfa_enabled: z.boolean().optional(),
	/**
	 * The user's banner hash.
	 *
	 * @example
	 * const user = { banner: "banner_hash" };
	 */
	banner: z.string().optional().nullable(),
	/**
	 * The user's banner color encoded as an integer representation of hexadecimal color code.
	 *
	 * @example
	 * const user = { accent_color: 0xffffff };
	 */
	accent_color: Integer.optional().nullable(),
	/**
	 * The user's chosen language option.
	 *
	 * @example
	 * const user = { locale: LocalesEnum.EnglishUS };
	 */
	locale: LocalesEnum.optional(),
	/**
	 * Whether the email on this account has been verified.
	 *
	 * @example
	 * const user = { verified: true };
	 */
	verified: z.boolean(),
	/**
	 * The user's email.
	 *
	 * @example
	 * const user = { email: "example@example.com" };
	 */
	email: z.string().optional().nullable(),
	/**
	 * The flags on a user's account.
	 *
	 * @example
	 * const user = { flags: UserFlags.Staff };
	 */
	flags: UserFlagsEnum.optional(),
	/**
	 * The type of Nitro subscription on a user's account.
	 *
	 * @example
	 * const user = { premium_type: PremiumTypes.Nitro };
	 */
	premium_type: PremiumTypesEnum.optional(),
	/**
	 * The public flags on a user's account.
	 *
	 * @example
	 * const user = { public_flags: UserFlags.VerifiedDeveloper };
	 */
	public_flags: UserFlagsEnum.optional(),
	/**
	 * Data for the user's avatar decoration.
	 *
	 * @example
	 * const user = { avatar_decoration_data: { asset: "hash", sku_id: "123456789012345678" } };
	 */
	avatar_decoration_data: AvatarDecorationDataStructure.optional(),
});

/**
 * Inferred type for the User Structure schema.
 *
 * @example
 * const user: UserStructureInfer = {
 *   id: "123456789012345678",
 *   username: "example_user",
 *   discriminator: "1234",
 *   global_name: "Example Bot",
 *   avatar: "avatar_hash",
 *   bot: true,
 *   system: true,
 *   mfa_enabled: true,
 *   banner: "banner_hash",
 *   accent_color: 0xffffff,
 *   locale: LocalesEnum.EnglishUS,
 *   verified: true,
 *   email: "example@example.com",
 *   flags: UserFlags.Staff,
 *   premium_type: PremiumTypes.Nitro,
 *   public_flags: UserFlags.VerifiedDeveloper,
 *   avatar_decoration_data: { asset: "hash", sku_id: "123456789012345678" }
 * };
 */
export type UserStructureInfer = z.infer<typeof UserStructure>;
