import { z } from "zod";

/**
 * Enumeration of OAuth2 URLs used in Discord's OAuth2 flow.
 * These URLs are used for various OAuth2-related endpoints.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-urls}
 */
export enum OAuth2Urls {
	/**
	 * Base authorization URL.
	 *
	 * @example
	 * const url = OAuth2Urls.Authorize;
	 * console.log(url); // Output: https://discord.com/oauth2/authorize
	 */
	Authorize = "https://discord.com/oauth2/authorize",
	/**
	 * Token Revocation URL.
	 *
	 * @example
	 * const url = OAuth2Urls.Revoke;
	 * console.log(url); // Output: https://discord.com/api/oauth2/token/revoke
	 */
	Revoke = "https://discord.com/api/oauth2/token/revoke",
	/**
	 * Token URL.
	 *
	 * @example
	 * const url = OAuth2Urls.Token;
	 * console.log(url); // Output: https://discord.com/api/oauth2/token
	 */
	Token = "https://discord.com/api/oauth2/token",
}

/**
 * Zod schema for OAuth2 URLs enumeration.
 * This schema is used for validating {@link OAuth2Urls} values.
 *
 * @example
 * const isValidUrl = OAuth2UrlsEnum.safeParse(OAuth2Urls.Authorize).success;
 */
export const OAuth2UrlsEnum = z.nativeEnum(OAuth2Urls);

/**
 * Enumeration of OAuth2 scopes used in Discord's OAuth2 flow.
 * These scopes define the level of access being requested by the application.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes}
 */
export enum OAuth2Scopes {
	/**
	 * Allows your app to fetch data from a user's "Now Playing/Recently Played" list.
	 */
	ActivitiesRead = "activities.read",
	/**
	 * Allows your app to update a user's activity.
	 */
	ActivitiesWrite = "activities.write",
	/**
	 * Allows your app to read build data for a user's applications.
	 */
	ApplicationsBuildsRead = "applications.builds.read",
	/**
	 * Allows your app to upload/update builds for a user's applications.
	 */
	ApplicationsBuildsUpload = "applications.builds.upload",
	/**
	 * Allows your app to add commands to a guild.
	 */
	ApplicationsCommands = "applications.commands",
	/**
	 * Allows your app to update permissions for its commands in a guild a user has permissions to.
	 */
	ApplicationsCommandsPermissionsUpdate = "applications.commands.permissions.update",
	/**
	 * Allows your app to update its commands using a Bearer token.
	 */
	ApplicationsCommandsUpdate = "applications.commands.update",
	/**
	 * Allows your app to read entitlements for a user's applications.
	 */
	ApplicationsEntitlements = "applications.entitlements",
	/**
	 * Allows your app to read and update store data for a user's applications.
	 */
	ApplicationsStoreUpdate = "applications.store.update",
	/**
	 * Puts the bot in the user's selected guild by default.
	 */
	Bot = "bot",
	/**
	 * Allows /users/@me/connections to return linked third-party accounts.
	 */
	Connections = "connections",
	/**
	 * Enables /users/@me to return an email.
	 */
	Email = "email",
	/**
	 * Allows your app to join users to a group dm.
	 */
	GdmJoin = "gdm.join",
	/**
	 * Allows /users/@me/guilds to return basic information about all of a user's guilds.
	 */
	Guilds = "guilds",
	/**
	 * Allows /guilds/{guild.id}/members/{user.id} to be used for joining users to a guild.
	 */
	GuildsJoin = "guilds.join",
	/**
	 * Allows /users/@me/guilds/{guild.id}/member to return a user's member information in a guild.
	 */
	GuildsMembersRead = "guilds.members.read",
	/**
	 * Allows /users/@me without email.
	 */
	Identify = "identify",
	/**
	 * Allows you to read messages from all client channels.
	 */
	MessagesRead = "messages.read",
	/**
	 * Allows your app to know a user's friends and implicit relationships.
	 */
	RelationshipsRead = "relationships.read",
	/**
	 * Allows your app to update a user's connection and metadata for the app.
	 */
	RoleConnectionsWrite = "role_connections.write",
	/**
	 * Allows you to control a user's local Discord client.
	 */
	Rpc = "rpc",
	/**
	 * Allows you to update a user's activity.
	 */
	RpcActivitiesWrite = "rpc.activities.write",
	/**
	 * Allows you to receive notifications pushed out to the user.
	 */
	RpcNotificationsRead = "rpc.notifications.read",
	/**
	 * Allows you to read a user's voice settings and listen for voice events.
	 */
	RpcVoiceRead = "rpc.voice.read",
	/**
	 * Allows you to update a user's voice settings.
	 */
	RpcVoiceWrite = "rpc.voice.write",
	/**
	 * Allows your app to connect to voice on user's behalf and see all the voice members.
	 */
	Voice = "voice",
	/**
	 * Generates a webhook that is returned in the oauth token response for authorization code grants.
	 */
	WebhookIncoming = "webhook.incoming",
}

/**
 * Zod schema for OAuth2 scopes enumeration.
 * This schema is used for validating {@link OAuth2Scopes} values.
 *
 * @example
 * const isValidScope = OAuth2ScopesEnum.safeParse(OAuth2Scopes.Bot).success;
 */
export const OAuth2ScopesEnum = z.nativeEnum(OAuth2Scopes);

/**
 * Schema for OAuth2 bot authorization parameters.
 * These parameters are used when authorizing a bot via OAuth2.
 *
 * @see {@link https://discord.com/developers/docs/topics/oauth2#bot-authorization-flow-bot-auth-parameters}
 */
export const OAuth2BotAuthorizationParams = z.object({
	/**
	 * Your app's client id.
	 *
	 * @example
	 * const params = { client_id: "your_client_id" };
	 */
	client_id: z.string(),
	/**
	 * Needs to include bot for the bot flow.
	 *
	 * @example
	 * const params = { scope: OAuth2Scopes.Bot };
	 */
	scope: z.literal(OAuth2Scopes.Bot),
	/**
	 * The permissions you're requesting.
	 *
	 * @example
	 * const params = { permissions: 0 };
	 */
	permissions: z.number(),
	/**
	 * Pre-fills the dropdown picker with a guild for the user.
	 *
	 * @example
	 * const params = { guild_id: "your_guild_id" };
	 */
	guild_id: z.string(),
	/**
	 * Disallows the user from changing the guild dropdown.
	 *
	 * @example
	 * const params = { disable_guild_select: true };
	 */
	disable_guild_select: z.boolean(),
});

/**
 * Inferred type for OAuth2 bot authorization parameters schema.
 *
 * @example
 * const params: OAuth2BotAuthorizationParamsInfer = {
 *   client_id: "your_client_id",
 *   scope: OAuth2Scopes.Bot,
 *   permissions: BigInt(0),
 *   guild_id: "your_guild_id",
 *   disable_guild_select: true
 * };
 */
export type OAuth2BotAuthorizationParamsInfer = z.infer<typeof OAuth2BotAuthorizationParams>;
