import type {
	BanStructureInfer,
	ChannelStructureInfer,
	GuildMemberStructureInfer,
	GuildOnboardingStructureInfer,
	GuildPreviewStructureInfer,
	GuildScheduledEventStructureInfer,
	GuildScheduledEventUserStructureInfer,
	GuildStructureInfer,
	GuildTemplateStructureInfer,
	GuildWidgetSettingsStructureInfer,
	GuildWidgetStructureInfer,
	IntegerInfer,
	IntegrationStructureInfer,
	InviteMetadataStructureInfer,
	InviteStructureInfer,
	RoleStructureInfer,
	SnowflakeInfer,
	VoiceRegionStructureInfer,
	WelcomeScreenStructureInfer,
} from "@lunajs/core";
import { Snowflake } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";
import type {
	AddGuildMemberJSONInfer,
	BeginGuildPruneJSONInfer,
	BulkGuildBanJSONInfer,
	BulkGuildBanResultInfer,
	CreateGuildBanJSONInfer,
	CreateGuildChannelJSONInfer,
	CreateGuildFromGuildTemplateJSONInfer,
	CreateGuildJSONInfer,
	CreateGuildRoleJSONInfer,
	CreateGuildScheduledEventJSONInfer,
	CreateGuildTemplateJSONInfer,
	GetGuildBansQueryInfer,
	GetGuildPruneCountQueryInfer,
	GetGuildQueryInfer,
	GetGuildScheduledEventQueryInfer,
	GetGuildScheduledEventUsersQueryInfer,
	GetGuildWidgetImageQueryInfer,
	ListActiveGuildThreadsResponseInfer,
	ListGuildMembersQueryInfer,
	ListScheduledEventsForGuildQueryInfer,
	ModifyCurrentMemberJSONInfer,
	ModifyCurrentUserNickJSONInfer,
	ModifyCurrentUserVoiceStateJSONInfer,
	ModifyGuildChannelPositionsJSONInfer,
	ModifyGuildJSONInfer,
	ModifyGuildMemberJSONInfer,
	ModifyGuildMFALevelJSONInfer,
	ModifyGuildOnboardingJSONInfer,
	ModifyGuildRoleJSONInfer,
	ModifyGuildRolePositionsJSONInfer,
	ModifyGuildScheduledEventJSONInfer,
	ModifyGuildTemplateJSONInfer,
	ModifyGuildWelcomeScreenJSONInfer,
	ModifyUserVoiceStateJSONInfer,
	SearchGuildMembersQueryInfer,
} from "../libs/guilds";
import {
	AddGuildMemberJSON,
	BeginGuildPruneJSON,
	BulkGuildBanJSON,
	CreateGuildBanJSON,
	CreateGuildChannelJSON,
	CreateGuildFromGuildTemplateJSON,
	CreateGuildJSON,
	CreateGuildRoleJSON,
	CreateGuildScheduledEventJSON,
	CreateGuildTemplateJSON,
	GetGuildBansQuery,
	GetGuildPruneCountQuery,
	GetGuildQuery,
	GetGuildScheduledEventQuery,
	GetGuildScheduledEventUsersQuery,
	GetGuildWidgetImageQuery,
	ListGuildMembersQuery,
	ListScheduledEventsForGuildQuery,
	ModifyCurrentMemberJSON,
	ModifyCurrentUserNickJSON,
	ModifyCurrentUserVoiceStateJSON,
	ModifyGuildChannelPositionsJSON,
	ModifyGuildJSON,
	ModifyGuildMemberJSON,
	ModifyGuildMFALevelJSON,
	ModifyGuildOnboardingJSON,
	ModifyGuildRoleJSON,
	ModifyGuildRolePositionsJSON,
	ModifyGuildScheduledEventJSON,
	ModifyGuildTemplateJSON,
	ModifyGuildWelcomeScreenJSON,
	ModifyUserVoiceStateJSON,
	SearchGuildMembersQuery,
} from "../libs/guilds";

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#get-guild-template}
 */
export function GetGuildTemplate(code: string): RestMakeRequestOptions<GuildTemplateStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/templates/${code}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#create-guild-from-guild-template}
 */
export function CreateGuildFromGuildTemplate(code: string, data: CreateGuildFromGuildTemplateJSONInfer): RestMakeRequestOptions<GuildStructureInfer> {
	return {
		method: "POST",
		path: `/guilds/templates/${code}`,
		body: JSON.stringify(CreateGuildFromGuildTemplateJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#get-guild-templates}
 */
export function GetGuildTemplates(guildId: SnowflakeInfer): RestMakeRequestOptions<GuildTemplateStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/templates`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#create-guild-template}
 */
export function CreateGuildTemplate(guildId: SnowflakeInfer, data: CreateGuildTemplateJSONInfer): RestMakeRequestOptions<GuildTemplateStructureInfer> {
	return {
		method: "POST",
		path: `/guilds/${Snowflake.parse(guildId)}/templates`,
		body: JSON.stringify(CreateGuildTemplateJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#sync-guild-template}
 */
export function SyncGuildTemplate(guildId: SnowflakeInfer, code: string): RestMakeRequestOptions<GuildTemplateStructureInfer> {
	return {
		method: "PUT",
		path: `/guilds/${Snowflake.parse(guildId)}/templates/${code}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#modify-guild-template}
 */
export function ModifyGuildTemplate(guildId: SnowflakeInfer, code: string, data: ModifyGuildTemplateJSONInfer): RestMakeRequestOptions<GuildTemplateStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/templates/${code}`,
		body: JSON.stringify(ModifyGuildTemplateJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-template#delete-guild-template}
 */
export function DeleteGuildTemplate(guildId: SnowflakeInfer, code: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/templates/${code}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild}
 */
export function ListScheduledEventsForGuild(guildId: SnowflakeInfer, query?: ListScheduledEventsForGuildQueryInfer): RestMakeRequestOptions<GuildScheduledEventStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/scheduled-events`,
		query: ListScheduledEventsForGuildQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event}
 */
export function CreateGuildScheduledEvent(guildId: SnowflakeInfer, reason: string, data: CreateGuildScheduledEventJSONInfer): RestMakeRequestOptions<GuildScheduledEventStructureInfer> {
	return {
		method: "POST",
		path: `/guilds/${Snowflake.parse(guildId)}/scheduled-events`,
		body: JSON.stringify(CreateGuildScheduledEventJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event}
 */
export function GetGuildScheduledEvent(guildId: SnowflakeInfer, eventId: SnowflakeInfer, query?: GetGuildScheduledEventQueryInfer): RestMakeRequestOptions<GuildScheduledEventStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/scheduled-events/${Snowflake.parse(eventId)}`,
		query: GetGuildScheduledEventQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event}
 */
export function ModifyGuildScheduledEvent(guildId: SnowflakeInfer, eventId: SnowflakeInfer, reason: string, data: ModifyGuildScheduledEventJSONInfer): RestMakeRequestOptions<GuildScheduledEventStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/scheduled-events/${Snowflake.parse(eventId)}`,
		body: JSON.stringify(ModifyGuildScheduledEventJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#delete-guild-scheduled-event}
 */
export function DeleteGuildScheduledEvent(guildId: SnowflakeInfer, eventId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/scheduled-events/${Snowflake.parse(eventId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users}
 */
export function GetGuildScheduledEventUsers(guildId: SnowflakeInfer, eventId: SnowflakeInfer, query?: GetGuildScheduledEventUsersQueryInfer): RestMakeRequestOptions<GuildScheduledEventUserStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/scheduled-events/${Snowflake.parse(eventId)}/users`,
		query: GetGuildScheduledEventUsersQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild}
 */
export function CreateGuild(data: CreateGuildJSONInfer): RestMakeRequestOptions<GuildStructureInfer> {
	return {
		method: "POST",
		path: "/guilds",
		body: JSON.stringify(CreateGuildJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild}
 */
export function GetGuild(guildId: SnowflakeInfer, query?: GetGuildQueryInfer): RestMakeRequestOptions<GuildStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}`,
		query: GetGuildQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-preview}
 */
export function GetGuildPreview(guildId: SnowflakeInfer): RestMakeRequestOptions<GuildPreviewStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/preview`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild}
 */
export function ModifyGuild(guildId: SnowflakeInfer, reason: string, data: ModifyGuildJSONInfer): RestMakeRequestOptions<GuildStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}`,
		body: JSON.stringify(ModifyGuildJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild}
 */
export function DeleteGuild(guildId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-channels}
 */
export function GetGuildChannels(guildId: SnowflakeInfer): RestMakeRequestOptions<ChannelStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/channels`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-channel}
 */
export function CreateGuildChannel(guildId: SnowflakeInfer, reason: string, data: CreateGuildChannelJSONInfer): RestMakeRequestOptions<ChannelStructureInfer> {
	return {
		method: "POST",
		path: `/guilds/${Snowflake.parse(guildId)}/channels`,
		body: JSON.stringify(CreateGuildChannelJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions}
 */
export function ModifyGuildChannelPositions(guildId: SnowflakeInfer, data: ModifyGuildChannelPositionsJSONInfer[]): RestMakeRequestOptions<void> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/channels`,
		body: JSON.stringify(ModifyGuildChannelPositionsJSON.array().parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#list-active-guild-threads}
 */
export function ListActiveGuildThreads(guildId: SnowflakeInfer): RestMakeRequestOptions<ListActiveGuildThreadsResponseInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/threads/active`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-member}
 */
export function GetGuildMember(guildId: SnowflakeInfer, userId: SnowflakeInfer): RestMakeRequestOptions<GuildMemberStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/members/${Snowflake.parse(userId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#list-guild-members}
 */
export function ListGuildMembers(guildId: SnowflakeInfer, query?: ListGuildMembersQueryInfer): RestMakeRequestOptions<GuildMemberStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/members`,
		query: ListGuildMembersQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#search-guild-members}
 */
export function SearchGuildMembers(guildId: SnowflakeInfer, query?: SearchGuildMembersQueryInfer): RestMakeRequestOptions<GuildMemberStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/members/search`,
		query: SearchGuildMembersQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#add-guild-member}
 */
export function AddGuildMember(guildId: SnowflakeInfer, userId: SnowflakeInfer, data: AddGuildMemberJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PUT",
		path: `/guilds/${Snowflake.parse(guildId)}/members/${Snowflake.parse(userId)}`,
		body: JSON.stringify(AddGuildMemberJSON.parse(data)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-member}
 */
export function ModifyGuildMember(guildId: SnowflakeInfer, userId: SnowflakeInfer, reason: string, data: ModifyGuildMemberJSONInfer): RestMakeRequestOptions<GuildMemberStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/members/${Snowflake.parse(userId)}`,
		body: JSON.stringify(ModifyGuildMemberJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-member}
 */
export function ModifyCurrentMember(guildId: SnowflakeInfer, reason: string, data: ModifyCurrentMemberJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/members/@me`,
		body: JSON.stringify(ModifyCurrentMemberJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-user-nick}
 * @deprecated
 */
export function ModifyCurrentUserNick(guildId: SnowflakeInfer, reason: string, data: ModifyCurrentUserNickJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/members/@me/nick`,
		body: JSON.stringify(ModifyCurrentUserNickJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#add-guild-member-role}
 */
export function AddGuildMemberRole(guildId: SnowflakeInfer, userId: SnowflakeInfer, roleId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "PUT",
		path: `/guilds/${Snowflake.parse(guildId)}/members/${Snowflake.parse(userId)}/roles/${Snowflake.parse(roleId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-member-role}
 */
export function RemoveGuildMemberRole(guildId: SnowflakeInfer, userId: SnowflakeInfer, roleId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/members/${Snowflake.parse(userId)}/roles/${Snowflake.parse(roleId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-member}
 */
export function RemoveGuildMember(guildId: SnowflakeInfer, userId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/members/${Snowflake.parse(userId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-bans}
 */
export function GetGuildBans(guildId: SnowflakeInfer, query?: GetGuildBansQueryInfer): RestMakeRequestOptions<BanStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/bans`,
		query: GetGuildBansQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-ban}
 */
export function GetGuildBan(guildId: SnowflakeInfer, userId: SnowflakeInfer): RestMakeRequestOptions<BanStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/bans/${Snowflake.parse(userId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-ban}
 */
export function CreateGuildBan(guildId: SnowflakeInfer, userId: SnowflakeInfer, reason: string, data: CreateGuildBanJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PUT",
		path: `/guilds/${Snowflake.parse(guildId)}/bans/${Snowflake.parse(userId)}`,
		query: CreateGuildBanJSON.parse(data),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-ban}
 */
export function RemoveGuildBan(guildId: SnowflakeInfer, userId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/bans/${Snowflake.parse(userId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#bulk-guild-ban}
 */
export function BulkGuildBan(guildId: SnowflakeInfer, reason: string, data: BulkGuildBanJSONInfer): RestMakeRequestOptions<BulkGuildBanResultInfer> {
	return {
		method: "PUT",
		path: `/guilds/${Snowflake.parse(guildId)}/bans`,
		body: JSON.stringify(BulkGuildBanJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-roles}
 */
export function GetGuildRoles(guildId: SnowflakeInfer): RestMakeRequestOptions<RoleStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/roles`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-role}
 */
export function CreateGuildRole(guildId: SnowflakeInfer, reason: string, data: CreateGuildRoleJSONInfer): RestMakeRequestOptions<RoleStructureInfer> {
	return {
		method: "POST",
		path: `/guilds/${Snowflake.parse(guildId)}/roles`,
		body: JSON.stringify(CreateGuildRoleJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role-positions}
 */
export function ModifyGuildRolePositions(guildId: SnowflakeInfer, reason: string, data: ModifyGuildRolePositionsJSONInfer[]): RestMakeRequestOptions<RoleStructureInfer[]> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/roles`,
		body: JSON.stringify(ModifyGuildRolePositionsJSON.array().parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role}
 */
export function ModifyGuildRole(guildId: SnowflakeInfer, roleId: SnowflakeInfer, reason: string, data: ModifyGuildRoleJSONInfer): RestMakeRequestOptions<RoleStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/roles/${Snowflake.parse(roleId)}`,
		body: JSON.stringify(ModifyGuildRoleJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level}
 */
export function ModifyGuildMFALevel(guildId: SnowflakeInfer, reason: string, data: ModifyGuildMFALevelJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/mfa`,
		body: JSON.stringify(ModifyGuildMFALevelJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild-role}
 */
export function DeleteGuildRole(guildId: SnowflakeInfer, roleId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/roles/${Snowflake.parse(roleId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-prune-count}
 */
export function GetGuildPruneCount(guildId: SnowflakeInfer, query?: GetGuildPruneCountQueryInfer): RestMakeRequestOptions<{
	pruned: IntegerInfer;
}> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/prune`,
		query: GetGuildPruneCountQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#begin-guild-prune}
 */
export function BeginGuildPrune(guildId: SnowflakeInfer, reason: string, data: BeginGuildPruneJSONInfer): RestMakeRequestOptions<{
	pruned: IntegerInfer;
}> {
	return {
		method: "POST",
		path: `/guilds/${Snowflake.parse(guildId)}/prune`,
		body: JSON.stringify(BeginGuildPruneJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-voice-regions}
 */
export function GetGuildVoiceRegions(guildId: SnowflakeInfer): RestMakeRequestOptions<VoiceRegionStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/regions`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-invites}
 */
export function GetGuildInvites(guildId: SnowflakeInfer): RestMakeRequestOptions<InviteMetadataStructureInfer[] | InviteStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/invites`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-integrations}
 */
export function GetGuildIntegrations(guildId: SnowflakeInfer): RestMakeRequestOptions<IntegrationStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/integrations`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild-integration}
 */
export function DeleteGuildIntegration(guildId: SnowflakeInfer, integrationId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${Snowflake.parse(guildId)}/integrations/${Snowflake.parse(integrationId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget-settings}
 */
export function GetGuildWidgetSettings(guildId: SnowflakeInfer): RestMakeRequestOptions<GuildWidgetSettingsStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/widget`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-widget}
 */
export function ModifyGuildWidget(guildId: SnowflakeInfer, reason: string, data: GuildWidgetSettingsStructureInfer): RestMakeRequestOptions<GuildWidgetSettingsStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/widget`,
		body: JSON.stringify(data),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget}
 */
export function GetGuildWidget(guildId: SnowflakeInfer): RestMakeRequestOptions<GuildWidgetStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/widget.json`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-vanity-url}
 */
export function GetGuildVanityURL(guildId: SnowflakeInfer): RestMakeRequestOptions<Partial<InviteStructureInfer>> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/vanity-url`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget-image}
 */
export function GetGuildWidgetImage(guildId: SnowflakeInfer, query?: GetGuildWidgetImageQueryInfer): RestMakeRequestOptions<void> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/widget.png`,
		query: GetGuildWidgetImageQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-welcome-screen}
 */
export function GetGuildWelcomeScreen(guildId: SnowflakeInfer): RestMakeRequestOptions<WelcomeScreenStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/welcome-screen`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen}
 */
export function ModifyGuildWelcomeScreen(guildId: SnowflakeInfer, reason: string, data: ModifyGuildWelcomeScreenJSONInfer): RestMakeRequestOptions<WelcomeScreenStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/welcome-screen`,
		body: JSON.stringify(ModifyGuildWelcomeScreenJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-onboarding}
 */
export function GetGuildOnboarding(guildId: SnowflakeInfer): RestMakeRequestOptions<GuildOnboardingStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/onboarding`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-onboarding}
 */
export function ModifyGuildOnboarding(guildId: SnowflakeInfer, reason: string, data: ModifyGuildOnboardingJSONInfer): RestMakeRequestOptions<GuildOnboardingStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/onboarding`,
		body: JSON.stringify(ModifyGuildOnboardingJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-user-voice-state}
 */
export function ModifyCurrentUserVoiceState(guildId: SnowflakeInfer, reason: string, data: ModifyCurrentUserVoiceStateJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/voice-states/@me`,
		body: JSON.stringify(ModifyCurrentUserVoiceStateJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/guild#modify-user-voice-state}
 */
export function ModifyUserVoiceState(guildId: SnowflakeInfer, userId: SnowflakeInfer, reason: string, data: ModifyUserVoiceStateJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PATCH",
		path: `/guilds/${Snowflake.parse(guildId)}/voice-states/${Snowflake.parse(userId)}`,
		body: JSON.stringify(ModifyUserVoiceStateJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}
