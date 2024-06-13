import { z } from "zod";
import { Integer, Snowflake } from "../globals/formats";
import { LocalesEnum } from "../globals/locales";
import { OAuth2ScopesEnum } from "../libs/oauth2";
import { GuildStructure } from "./guilds";
import { TeamStructure } from "./teams";
import { UserStructure } from "./users";

/**
 * Enumeration of application role connection metadata types.
 * Represents the types of metadata values for application role connections.
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type}
 */
export enum ApplicationRoleConnectionMetadataType {
	/**
	 * The metadata value (integer) is less than or equal to the guild's configured value (integer).
	 *
	 * @example
	 * const type = ApplicationRoleConnectionMetadataType.IntegerLessThanOrEqual;
	 * console.log(type); // Output: 1
	 */
	IntegerLessThanOrEqual = 1,
	/**
	 * The metadata value (integer) is greater than or equal to the guild's configured value (integer).
	 *
	 * @example
	 * const type = ApplicationRoleConnectionMetadataType.IntegerGreaterThanOrEqual;
	 * console.log(type); // Output: 2
	 */
	IntegerGreaterThanOrEqual = 2,
	/**
	 * The metadata value (integer) is equal to the guild's configured value (integer).
	 *
	 * @example
	 * const type = ApplicationRoleConnectionMetadataType.IntegerEqual;
	 * console.log(type); // Output: 3
	 */
	IntegerEqual = 3,
	/**
	 * The metadata value (integer) is not equal to the guild's configured value (integer).
	 *
	 * @example
	 * const type = ApplicationRoleConnectionMetadataType.IntegerNotEqual;
	 * console.log(type); // Output: 4
	 */
	IntegerNotEqual = 4,
	/**
	 * The metadata value (ISO8601 string) is less than or equal to the guild's configured value (integer; days before current date).
	 *
	 * @example
	 * const type = ApplicationRoleConnectionMetadataType.DateTimeLessThanOrEqual;
	 * console.log(type); // Output: 5
	 */
	DateTimeLessThanOrEqual = 5,
	/**
	 * The metadata value (ISO8601 string) is greater than or equal to the guild's configured value (integer; days before current date).
	 *
	 * @example
	 * const type = ApplicationRoleConnectionMetadataType.DateTimeGreaterThanOrEqual;
	 * console.log(type); // Output: 6
	 */
	DateTimeGreaterThanOrEqual = 6,
	/**
	 * The metadata value (integer) is equal to the guild's configured value (integer; 1).
	 *
	 * @example
	 * const type = ApplicationRoleConnectionMetadataType.BooleanEqual;
	 * console.log(type); // Output: 7
	 */
	BooleanEqual = 7,
	/**
	 * The metadata value (integer) is not equal to the guild's configured value (integer; 1).
	 *
	 * @example
	 * const type = ApplicationRoleConnectionMetadataType.BooleanNotEqual;
	 * console.log(type); // Output: 8
	 */
	BooleanNotEqual = 8,
}

/**
 * Zod schema for application role connection metadata types enumeration.
 * This schema is used for validating {@link ApplicationRoleConnectionMetadataType} values.
 *
 * @example
 * const isValidType = ApplicationRoleConnectionMetadataTypeEnum.safeParse(ApplicationRoleConnectionMetadataType.IntegerLessThanOrEqual).success;
 */
export const ApplicationRoleConnectionMetadataTypeEnum = z.nativeEnum(ApplicationRoleConnectionMetadataType);

/**
 * Schema for Application Role Connection Metadata Structure.
 * Represents the structure of an application role connection metadata object.
 *
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-structure}
 */
export const ApplicationRoleConnectionMetadataStructure = z.object({
	/**
	 * The type of metadata value.
	 *
	 * @example
	 * const metadata = { type: ApplicationRoleConnectionMetadataType.IntegerLessThanOrEqual };
	 */
	type: ApplicationRoleConnectionMetadataTypeEnum,
	/**
	 * Dictionary key for the metadata field (must be a-z, 0-9, or _ characters; 1-50 characters).
	 *
	 * @example
	 * const metadata = { key: "level" };
	 */
	key: z.string().min(1).max(50).regex(/^[\d_a-z]+$/),
	/**
	 * Name of the metadata field (1-100 characters).
	 *
	 * @example
	 * const metadata = { name: "Level" };
	 */
	name: z.string().min(1).max(100),
	/**
	 * Translations of the name.
	 *
	 * @example
	 * const metadata = { name_localizations: { "en-US": "Level" } };
	 */
	name_localizations: z.record(LocalesEnum, z.string().min(1).max(100)).optional(),
	/**
	 * Description of the metadata field (1-200 characters).
	 *
	 * @example
	 * const metadata = { description: "The level of the user" };
	 */
	description: z.string().min(1).max(200),
	/**
	 * Translations of the description.
	 *
	 * @example
	 * const metadata = { description_localizations: { "en-US": "The level of the user" } };
	 */
	description_localizations: z.record(LocalesEnum, z.string().min(1).max(200)).optional(),
});

/**
 * Inferred type for Application Role Connection Metadata Structure schema.
 *
 * @example
 * const metadata: ApplicationRoleConnectionMetadataStructureInfer = {
 *   type: ApplicationRoleConnectionMetadataType.IntegerLessThanOrEqual,
 *   key: "level",
 *   name: "Level",
 *   name_localizations: { "en-US": "Level" },
 *   description: "The level of the user",
 *   description_localizations: { "en-US": "The level of the user" },
 * };
 */
export type ApplicationRoleConnectionMetadataStructureInfer = z.infer<typeof ApplicationRoleConnectionMetadataStructure>;

/**
 * Schema for Install Params Structure.
 * Represents the structure of install parameters for an application.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#install-params-object-install-params-structure}
 */
export const InstallParamsStructure = z.object({
	/**
	 * Scopes to add the application to the server with.
	 *
	 * @example
	 * const params = { scopes: [OAuth2ScopesEnum.Bot, OAuth2ScopesEnum.ApplicationsCommands] };
	 */
	scopes: z.array(OAuth2ScopesEnum),
	/**
	 * Permissions to request for the bot role.
	 *
	 * @example
	 * const params = { permissions: "2147483647" };
	 */
	permissions: z.string(),
});

/**
 * Inferred type for Install Params Structure schema.
 *
 * @example
 * const params: InstallParamsStructureInfer = {
 *   scopes: [OAuth2ScopesEnum.Bot, OAuth2ScopesEnum.ApplicationsCommands],
 *   permissions: "2147483647",
 * };
 */
export type InstallParamsStructureInfer = z.infer<typeof InstallParamsStructure>;

/**
 * Enumeration of application flags.
 * Represents the flags associated with an application.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-flags}
 */
export enum ApplicationFlags {
	/**
	 * Indicates if an app uses the Auto Moderation API.
	 *
	 * @example
	 * const flag = ApplicationFlags.ApplicationAutoModerationRuleCreateBadge;
	 * console.log(flag); // Output: 64
	 */
	ApplicationAutoModerationRuleCreateBadge = 64,
	/**
	 * Intent required for bots in 100 or more servers to receive presence_update events.
	 *
	 * @example
	 * const flag = ApplicationFlags.GatewayPresence;
	 * console.log(flag); // Output: 4096
	 */
	GatewayPresence = 4_096,
	/**
	 * Intent required for bots in under 100 servers to receive presence_update events, found on the Bot page in your app's settings.
	 *
	 * @example
	 * const flag = ApplicationFlags.GatewayPresenceLimited;
	 * console.log(flag); // Output: 8192
	 */
	GatewayPresenceLimited = 8_192,
	/**
	 * Intent required for bots in 100 or more servers to receive member-related events like guild_member_add. See the list of member-related events under GUILD_MEMBERS.
	 *
	 * @example
	 * const flag = ApplicationFlags.GatewayGuildMembers;
	 * console.log(flag); // Output: 16384
	 */
	GatewayGuildMembers = 16_384,
	/**
	 * Intent required for bots in under 100 servers to receive member-related events like guild_member_add, found on the Bot page in your app's settings. See the list of member-related events under GUILD_MEMBERS.
	 *
	 * @example
	 * const flag = ApplicationFlags.GatewayGuildMembersLimited;
	 * console.log(flag); // Output: 32768
	 */
	GatewayGuildMembersLimited = 32_768,
	/**
	 * Indicates unusual growth of an app that prevents verification.
	 *
	 * @example
	 * const flag = ApplicationFlags.VerificationPendingGuildLimit;
	 * console.log(flag); // Output: 65536
	 */
	VerificationPendingGuildLimit = 65_536,
	/**
	 * Indicates if an app is embedded within the Discord client (currently unavailable publicly).
	 *
	 * @example
	 * const flag = ApplicationFlags.Embedded;
	 * console.log(flag); // Output: 131072
	 */
	Embedded = 131_072,
	/**
	 * Intent required for bots in 100 or more servers to receive message content.
	 *
	 * @example
	 * const flag = ApplicationFlags.GatewayMessageContent;
	 * console.log(flag); // Output: 262144
	 */
	GatewayMessageContent = 262_144,
	/**
	 * Intent required for bots in under 100 servers to receive message content, found on the Bot page in your app's settings.
	 *
	 * @example
	 * const flag = ApplicationFlags.GatewayMessageContentLimited;
	 * console.log(flag); // Output: 524288
	 */
	GatewayMessageContentLimited = 524_288,
	/**
	 * Indicates if an app has registered global application commands.
	 *
	 * @example
	 * const flag = ApplicationFlags.ApplicationCommandBadge;
	 * console.log(flag); // Output: 8388608
	 */
	ApplicationCommandBadge = 8_388_608,
}

/**
 * Zod schema for application flags enumeration.
 * This schema is used for validating {@link ApplicationFlags} values.
 *
 * @example
 * const isValidFlag = ApplicationFlagsEnum.safeParse(ApplicationFlags.GatewayPresence).success;
 */
export const ApplicationFlagsEnum = z.nativeEnum(ApplicationFlags);

/**
 * Schema for Application Integration Type Configuration Structure.
 * Represents the structure of application integration type configuration object.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-integration-type-configuration-object}
 */
export const ApplicationIntegrationTypeConfigurationStructure = z.object({
	/**
	 * Install params for each installation context's default in-app authorization link.
	 *
	 * @example
	 * const config = { oauth2_install_params: { scopes: [OAuth2ScopesEnum.Bot], permissions: "2147483647" } };
	 */
	oauth2_install_params: InstallParamsStructure.optional(),
});

/**
 * Inferred type for Application Integration Type Configuration Structure schema.
 *
 * @example
 * const config: ApplicationIntegrationTypeConfigurationStructureInfer = {
 *   oauth2_install_params: { scopes: [OAuth2ScopesEnum.Bot], permissions: "2147483647" },
 * };
 */
export type ApplicationIntegrationTypeConfigurationStructureInfer = z.infer<typeof ApplicationIntegrationTypeConfigurationStructure>;

/**
 * Enumeration of application integration types.
 * Represents the types of integrations that an application can have.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-integration-types}
 */
export enum ApplicationIntegrationTypes {
	/**
	 * App is installable to servers.
	 *
	 * @example
	 * const integrationType = ApplicationIntegrationTypes.GuildInstall;
	 * console.log(integrationType); // Output: 0
	 */
	GuildInstall = 0,
	/**
	 * App is installable to users.
	 *
	 * @example
	 * const integrationType = ApplicationIntegrationTypes.UserInstall;
	 * console.log(integrationType); // Output: 1
	 */
	UserInstall = 1,
}

/**
 * Zod schema for application integration types enumeration.
 * This schema is used for validating {@link ApplicationIntegrationTypes} values.
 *
 * @example
 * const isValidIntegrationType = ApplicationIntegrationTypesEnum.safeParse(ApplicationIntegrationTypes.GuildInstall).success;
 */
export const ApplicationIntegrationTypesEnum = z.nativeEnum(ApplicationIntegrationTypes);

/**
 * Schema for the Application Structure.
 * Represents the structure of an application object.
 *
 * @see {@link https://discord.com/developers/docs/resources/application#application-object-application-structure}
 */
export const ApplicationStructure = z.object({
	/**
	 * ID of the app.
	 *
	 * @example
	 * const app = { id: "123456789012345678" };
	 */
	id: Snowflake,
	/**
	 * Name of the app.
	 *
	 * @example
	 * const app = { name: "My App" };
	 */
	name: z.string(),
	/**
	 * Icon hash of the app.
	 *
	 * @example
	 * const app = { icon: "icon_hash" };
	 */
	icon: z.string().nullable(),
	/**
	 * Description of the app.
	 *
	 * @example
	 * const app = { description: "This is my app" };
	 */
	description: z.string(),
	/**
	 * List of RPC origin URLs, if RPC is enabled.
	 *
	 * @example
	 * const app = { rpc_origins: ["https://example.com"] };
	 */
	rpc_origins: z.array(z.string()).optional(),
	/**
	 * When false, only the app owner can add the app to guilds.
	 *
	 * @example
	 * const app = { bot_public: true };
	 */
	bot_public: z.boolean(),
	/**
	 * When true, the app's bot will only join upon completion of the full OAuth2 code grant flow.
	 *
	 * @example
	 * const app = { bot_require_code_grant: false };
	 */
	bot_require_code_grant: z.boolean(),
	/**
	 * Partial user object for the bot user associated with the app.
	 *
	 * @example
	 * const app = { bot: { id: "123456789012345678", username: "BotUser" } };
	 */
	bot: UserStructure.partial().optional(),
	/**
	 * URL of the app's Terms of Service.
	 *
	 * @example
	 * const app = { terms_of_service_url: "https://example.com/tos" };
	 */
	terms_of_service_url: z.string().optional(),
	/**
	 * URL of the app's Privacy Policy.
	 *
	 * @example
	 * const app = { privacy_policy_url: "https://example.com/privacy" };
	 */
	privacy_policy_url: z.string().optional(),
	/**
	 * Partial user object for the owner of the app.
	 *
	 * @example
	 * const app = { owner: { id: "123456789012345678", username: "AppOwner" } };
	 */
	owner: UserStructure.partial().optional(),
	/**
	 * deprecated and will be removed in v11. An empty string.
	 *
	 * @deprecated
	 * @example
	 * const app = { summary: null };
	 */
	summary: z.string().optional().nullable(),
	/**
	 * Hex encoded key for verification in interactions and the GameSDK's GetTicket.
	 *
	 * @example
	 * const app = { verify_key: "abcdef1234567890" };
	 */
	verify_key: z.string(),
	/**
	 * If the app belongs to a team, this will be a list of the members of that team.
	 *
	 * @example
	 * const app = { team: { id: "123456789012345678", name: "My Teams", members: [] } };
	 */
	team: TeamStructure.optional(),
	/**
	 * Guild associated with the app. For example, a developer support server.
	 *
	 * @example
	 * const app = { guild_id: "123456789012345678" };
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Partial object of the associated guild.
	 *
	 * @example
	 * const app = { guild: {} };
	 */
	guild: GuildStructure.partial().optional(),
	/**
	 * If this app is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists.
	 *
	 * @example
	 * const app = { primary_sku_id: "123456789012345678" };
	 */
	primary_sku_id: Snowflake.optional(),
	/**
	 * If this app is a game sold on Discord, this field will be the URL slug that links to the store page.
	 *
	 * @example
	 * const app = { slug: "my-game" };
	 */
	slug: z.string().optional(),
	/**
	 * App's default rich presence invite cover image hash.
	 *
	 * @example
	 * const app = { cover_image: "cover_image_hash" };
	 */
	cover_image: z.string().optional(),
	/**
	 * App's public flags.
	 *
	 * @example
	 * const app = { flags: ApplicationFlags.ApplicationAutoModerationRuleCreateBadge };
	 */
	flags: ApplicationFlagsEnum.optional(),
	/**
	 * Approximate count of guilds the app has been added to.
	 *
	 * @example
	 * const app = { approximate_guild_count: 100 };
	 */
	approximate_guild_count: Integer.optional(),
	/**
	 * Array of redirect URIs for the app.
	 *
	 * @example
	 * const app = { redirect_uris: ["https://example.com/callback"] };
	 */
	redirect_uris: z.array(z.string()).optional(),
	/**
	 * Interactions endpoint URL for the app.
	 *
	 * @example
	 * const app = { interactions_endpoint_url: "https://example.com/interactions" };
	 */
	interactions_endpoint_url: z.string().optional(),
	/**
	 * Role connection verification URL for the app.
	 *
	 * @example
	 * const app = { role_connections_verification_url: "https://example.com/role-connections" };
	 */
	role_connections_verification_url: z.string().optional(),
	/**
	 * List of tags describing the content and functionality of the app. Max of 5 tags.
	 *
	 * @example
	 * const app = { tags: ["fun", "games"] };
	 */
	tags: z.array(z.string()).optional(),
	/**
	 * Settings for the app's default in-app authorization link, if enabled.
	 *
	 * @example
	 * const app = { install_params: { scopes: [OAuth2ScopesEnum.Bot], permissions: "2147483647" } };
	 */
	install_params: InstallParamsStructure.optional(),
	/**
	 * In preview. Default scopes and permissions for each supported installation context. Value for each key is an integration type configuration object.
	 *
	 * @example
	 * const app = { integration_types_config: { "guild_install": { oauth2_install_params: { scopes: [OAuth2ScopesEnum.Bot], permissions: "2147483647" } } } };
	 */
	integration_types_config: z.record(z.string(), ApplicationIntegrationTypeConfigurationStructure).optional(),
	/**
	 * Default custom authorization URL for the app, if enabled.
	 *
	 * @example
	 * const app = { custom_install_url: "https://example.com/install" };
	 */
	custom_install_url: z.string().optional(),
});

/**
 * Inferred type for Application Structure schema.
 *
 * @example
 * const app: ApplicationStructureInfer = {
 *   id: "123456789012345678",
 *   name: "My App",
 *   icon: "icon_hash",
 *   description: "This is my app",
 *   rpc_origins: ["https://example.com"],
 *   bot_public: true,
 *   bot_require_code_grant: false,
 *   bot: { id: "123456789012345678", username: "BotUser" },
 *   terms_of_service_url: "https://example.com/tos",
 *   privacy_policy_url: "https://example.com/privacy",
 *   owner: { id: "123456789012345678", username: "AppOwner" },
 *   summary: null,
 *   verify_key: "abcdef1234567890",
 *   team: { id: "123456789012345678", name: "My Teams", members: [] },
 *   guild_id: "123456789012345678",
 *   guild: {},
 *   primary_sku_id: "123456789012345678",
 *   slug: "my-game",
 *   cover_image: "cover_image_hash",
 *   flags: ApplicationFlags.ApplicationAutoModerationRuleCreateBadge,
 *   approximate_guild_count: 100,
 *   redirect_uris: ["https://example.com/callback"],
 *   interactions_endpoint_url: "https://example.com/interactions",
 *   role_connections_verification_url: "https://example.com/role-connections",
 *   tags: ["fun", "games"],
 *   install_params: { scopes: [OAuth2ScopesEnum.Bot], permissions: "2147483647" },
 *   integration_types_config: { "guild_install": { oauth2_install_params: { scopes: [OAuth2ScopesEnum.Bot], permissions: "2147483647" } } },
 *   custom_install_url: "https://example.com/install",
 * };
 */
export type ApplicationStructureInfer = z.infer<typeof ApplicationStructure>;
