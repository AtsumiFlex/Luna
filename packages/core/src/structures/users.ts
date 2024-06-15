import { z } from "zod";
import { Integer, Snowflake } from "../globals/formats";
import { LocalesEnum } from "../globals/locales";
import { IntegrationStructure } from "./guilds";

/**
 * @see {@link https://discord.com/developers/docs/resources/user#application-role-connection-object-application-role-connection-structure}
 */
export const ApplicationRoleConnectionStructure = z.object({
	/**
	 * The vanity name of the platform a bot has connected (max 50 characters)
	 */
	platform_name: z.string().max(50).optional(),
	/**
	 * The username on the platform a bot has connected (max 100 characters)
	 */
	platform_username: z.string().max(100).optional(),
	/**
	 * Object mapping application role connection metadata keys to their string-ified value (max 100 characters) for the user on the platform a bot has connected
	 */
	metadata: z.record(z.string(), z.string()).optional(),
});

export type ApplicationRoleConnectionStructureInfer = z.infer<typeof ApplicationRoleConnectionStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-visibility-types}
 */
export enum ConnectionVisibilityTypes {
	/**
	 * Invisible to everyone except the user themselves
	 */
	None = 0,
	/**
	 * Visible to everyone
	 */
	Everyone = 1,
}

export const ConnectionVisibilityTypesEnum = z.nativeEnum(ConnectionVisibilityTypes);

/**
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

export const ConnectionServicesEnum = z.nativeEnum(ConnectionServices);

/**
 * @see {@link https://discord.com/developers/docs/resources/user#connection-object-connection-structure}
 */
export const ConnectionStructure = z.object({
	/**
	 * ID of the connection account
	 */
	id: z.string(),
	/**
	 * The username of the connection account
	 */
	name: z.string(),
	/**
	 * The service of this connection
	 */
	type: ConnectionServicesEnum,
	/**
	 * Whether the connection is revoked
	 */
	revoked: z.boolean().optional(),
	/**
	 * An array of partial server integrations
	 */
	integrations: z.array(IntegrationStructure.partial()).optional(),
	/**
	 * Whether the connection is verified
	 */
	verified: z.boolean(),
	/**
	 * Whether friend sync is enabled for this connection
	 */
	friend_sync: z.boolean(),
	/**
	 * Whether activities related to this connection will be shown in presence updates
	 */
	show_activity: z.boolean(),
	/**
	 * Whether this connection has a corresponding third party OAuth2 token
	 */
	two_way_link: z.boolean(),
	/**
	 * Visibility of this connection
	 */
	visibility: ConnectionVisibilityTypesEnum,
});

export type ConnectionStructureInfer = z.infer<typeof ConnectionStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/user#avatar-decoration-data-object-avatar-decoration-data-structure}
 */
export const AvatarDecorationDataStructure = z.object({
	/**
	 * The avatar decoration hash
	 */
	asset: z.string(),
	/**
	 * ID of the avatar decoration's SKU
	 */
	sku_id: Snowflake,
});

export type AvatarDecorationDataStructureInfer = z.infer<typeof AvatarDecorationDataStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-premium-types}
 */
export enum UserPremiumTypes {
	None = 0,
	NitroClassic = 1,
	Nitro = 2,
	NitroBasic = 3,
}

export const UserPremiumTypesEnum = z.nativeEnum(UserPremiumTypes);

/**
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-flags}
 */
export enum UserFlags {
	/**
	 * Discord Employee
	 */
	Staff = 1,
	/**
	 * Partnered Server Owner
	 */
	Partner = 2,
	/**
	 * HypeSquad Events Member
	 */
	Hypesquad = 4,
	/**
	 * Bug Hunter Level 1
	 */
	BugHunterLevel1 = 8,
	/**
	 * House Bravery Member
	 */
	HypesquadOnlineHouse1 = 64,
	/**
	 * House Brilliance Member
	 */
	HypesquadOnlineHouse2 = 128,
	/**
	 * House Balance Member
	 */
	HypesquadOnlineHouse3 = 256,
	/**
	 * Early Nitro Supporter
	 */
	PremiumEarlySupporter = 512,
	/**
	 * User is a team
	 */
	TeamPseudoUser = 1_024,
	/**
	 * Bug Hunter Level 2
	 */
	BugHunterLevel2 = 16_384,
	/**
	 * Verified Bot
	 */
	VerifiedBot = 65_536,
	/**
	 * Early Verified Bot Developer
	 */
	VerifiedDeveloper = 131_072,
	/**
	 * Moderator Programs Alumni
	 */
	CertifiedModerator = 262_144,
	/**
	 * Bot uses only HTTP interactions and is shown in the online member list
	 */
	BotHttpInteractions = 524_288,
	/**
	 * User is an Active Developer
	 */
	ActiveDeveloper = 4_194_304,
}

export const UserFlagsEnum = z.nativeEnum(UserFlags);

/**
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-structure}
 */
export const UserStructure = z.object({
	/**
	 * The user's id
	 */
	id: Snowflake,
	/**
	 * The user's username, not unique across the platform
	 */
	username: z.string(),
	/**
	 * The user's Discord-tag
	 */
	discriminator: z.string(),
	/**
	 * The user's display name, if it is set. For bots, this is the application name
	 */
	global_name: z.string().nullable(),
	/**
	 * The user's avatar hash
	 */
	avatar: z.string().nullable(),
	/**
	 * Whether the user belongs to an OAuth2 application
	 */
	bot: z.boolean().optional(),
	/**
	 * Whether the user is an Official Discord System user (part of the urgent message system)
	 */
	system: z.boolean().optional(),
	/**
	 * Whether the user has two factor enabled on their account
	 */
	mfa_enabled: z.boolean().optional(),
	/**
	 * The user's banner hash
	 */
	banner: z.string().optional().nullable(),
	/**
	 * The user's banner color encoded as an integer representation of hexadecimal color code
	 */
	accent_color: Integer.optional().nullable(),
	/**
	 * The user's chosen language option
	 */
	locale: LocalesEnum.optional(),
	/**
	 * Whether the email on this account has been verified
	 */
	verified: z.boolean().optional(),
	/**
	 * The user's email
	 */
	email: z.string().optional().nullable(),
	/**
	 * The flags on a user's account
	 */
	flags: UserFlagsEnum.optional(),
	/**
	 * The type of Nitro subscription on a user's account
	 */
	premium_type: UserPremiumTypesEnum.optional(),
	/**
	 * The public flags on a user's account
	 */
	public_flags: UserFlagsEnum.optional(),
	/**
	 * Data for the user's avatar decoration
	 */
	avatar_decoration_data: AvatarDecorationDataStructure.optional().nullable(),
});

export type UserStructureInfer = z.infer<typeof UserStructure>;
