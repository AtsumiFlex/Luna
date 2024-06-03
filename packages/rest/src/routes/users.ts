import type {
	ApplicationRoleConnectionStructureInfer,
	ChannelStructureInfer,
	ConnectionStructureInfer,
	GuildStructureInfer,
	SnowflakeInfer,
	UserStructureInfer,
} from "@lunajs/core";
import { Integer, Snowflake } from "@lunajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user}
 */
export function GetCurrentUser(): RestMakeRequestOptions<UserStructureInfer> {
	return {
		method: "GET",
		path: "/users/@me",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-user}
 */
export function GetUser(userId: SnowflakeInfer): RestMakeRequestOptions<UserStructureInfer> {
	return {
		method: "GET",
		path: `/users/${Snowflake.parse(userId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user-json-params}
 */
export const ModifyCurrentUserJSON = z.object({
	/**
	 * User's username, if changed may cause the user's discriminator to be randomized.
	 */
	username: z.string().optional(),
	/**
	 * If passed, modifies the user's avatar
	 */
	avatar: z.string().optional().nullable(),
	/**
	 * If passed, modifies the user's banner
	 */
	banner: z.string().optional().nullable(),
});

export type ModifyCurrentUserJSONInfer = z.infer<typeof ModifyCurrentUserJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user}
 */
export function ModifyCurrentUser(json: ModifyCurrentUserJSONInfer): RestMakeRequestOptions<UserStructureInfer> {
	return {
		method: "PATCH",
		path: "/users/@me",
		body: JSON.stringify(ModifyCurrentUserJSON.parse(json)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params}
 */
export const GetCurrentUserGuildsQuery = z.object({
	/**
	 * get guilds before this guild ID
	 */
	before: Snowflake.optional(),
	/**
	 * get guilds after this guild ID
	 */
	after: Snowflake.optional(),
	/**
	 * max number of guilds to return (1-200)
	 */
	limit: Integer.min(1).max(200).default(200).optional(),
	/**
	 * include approximate member and presence counts in response
	 */
	with_counts: z.boolean().optional(),
});

export type GetCurrentUserGuildsQueryInfer = z.infer<typeof GetCurrentUserGuildsQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds}
 */
export function GetCurrentUserGuilds(query?: GetCurrentUserGuildsQueryInfer): RestMakeRequestOptions<Partial<GuildStructureInfer>> {
	return {
		method: "GET",
		path: "/users/@me/guilds",
		query: GetCurrentUserGuildsQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guild-member}
 */
export function GetCurrentUserGuildMember(guildId: SnowflakeInfer): RestMakeRequestOptions<GuildStructureInfer> {
	return {
		method: "GET",
		path: `/users/@me/guilds/${Snowflake.parse(guildId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#leave-guild}
 */
export function LeaveGuild(guildId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/users/@me/guilds/${Snowflake.parse(guildId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-dm-json-params}
 */
export const CreateDMJSON = z.object({
	/**
	 * The recipient to open a DM channel with
	 */
	recipient_id: Snowflake,
});

export type CreateDMJSONInfer = z.infer<typeof CreateDMJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-dm}
 */
export function CreateDM(json: CreateDMJSONInfer): RestMakeRequestOptions<ChannelStructureInfer> {
	return {
		method: "POST",
		path: "/users/@me/channels",
		body: JSON.stringify(CreateDMJSON.parse(json)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-group-dm-json-params}
 */
export const CreateGroupDMJSON = z.object({
	/**
	 * Access tokens of users that have granted your app the gdm.join scope
	 */
	access_tokens: z.array(z.string()),
	/**
	 * A dictionary of user ids to their respective nicknames
	 */
	nicks: z.record(Snowflake, z.string()),
});

export type CreateGroupDMJSONInfer = z.infer<typeof CreateGroupDMJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-group-dm}
 */
export function CreateGroupDM(json: CreateGroupDMJSONInfer): RestMakeRequestOptions<ChannelStructureInfer> {
	return {
		method: "POST",
		path: "/users/@me/channels",
		body: JSON.stringify(CreateGroupDMJSON.parse(json)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-connections}
 */
export function GetCurrentUserConnections(): RestMakeRequestOptions<ConnectionStructureInfer> {
	return {
		method: "GET",
		path: "/users/@me/connections",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-application-role-connection}
 */
export function GetCurrentUserApplicationRoleConnections(applicationId: SnowflakeInfer): RestMakeRequestOptions<ApplicationRoleConnectionStructureInfer> {
	return {
		method: "GET",
		path: `/users/@me/applications/${Snowflake.parse(applicationId)}/role-connection`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params}
 */
export const UpdateCurrentUserApplicationRoleConnectionJSON = z.object({
	/**
	 * The vanity name of the platform a bot has connected (max 50 characters)
	 */
	platform_name: z.string().max(50).optional(),
	/**
	 * The username on the platform a bot has connected (max 100 characters)
	 */
	platform_username: z.string().max(50).optional(),
	/**
	 * Object mapping application role connection metadata keys to their string-ified value (max 100 characters) for the user on the platform a bot has connected
	 */
	metadata: z.record(z.string(), z.string()).optional(),
});

export type UpdateCurrentUserApplicationRoleConnectionJSONInfer = z.infer<typeof UpdateCurrentUserApplicationRoleConnectionJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection}
 */
export function UpdateCurrentUserApplicationRoleConnection(applicationId: SnowflakeInfer, json: UpdateCurrentUserApplicationRoleConnectionJSONInfer): RestMakeRequestOptions<ApplicationRoleConnectionStructureInfer> {
	return {
		method: "PATCH",
		path: `/users/@me/applications/${Snowflake.parse(applicationId)}/role-connection`,
		body: JSON.stringify(UpdateCurrentUserApplicationRoleConnectionJSON.parse(json)),
	};
}
