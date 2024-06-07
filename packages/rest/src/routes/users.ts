import type {
	ApplicationRoleConnectionStructureInfer,
	ChannelStructureInfer,
	ConnectionStructureInfer,
	GuildStructureInfer,
	SnowflakeInfer,
	UserStructureInfer,
} from "@lunajs/core";
import { Snowflake } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";
import type {
	CreateDMJSONInfer,
	CreateGroupDMJSONInfer,
	GetCurrentUserGuildsQueryInfer,
	ModifyCurrentUserJSONInfer,
	UpdateCurrentUserApplicationRoleConnectionJSONInfer,
} from "../libs/users";
import {
	CreateDMJSON,
	CreateGroupDMJSON,
	GetCurrentUserGuildsQuery,
	ModifyCurrentUserJSON,
	UpdateCurrentUserApplicationRoleConnectionJSON,
} from "../libs/users";

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
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection}
 */
export function UpdateCurrentUserApplicationRoleConnection(applicationId: SnowflakeInfer, json: UpdateCurrentUserApplicationRoleConnectionJSONInfer): RestMakeRequestOptions<ApplicationRoleConnectionStructureInfer> {
	return {
		method: "PATCH",
		path: `/users/@me/applications/${Snowflake.parse(applicationId)}/role-connection`,
		body: JSON.stringify(UpdateCurrentUserApplicationRoleConnectionJSON.parse(json)),
	};
}
