import type { AuditLogStructureInfer, SnowflakeInfer } from "@lunajs/core";
import { Snowflake } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";
import type { GetGuildAuditLogQueryInfer } from "../libs/audits";
import { GetGuildAuditLogQuery } from "../libs/audits";

/**
 * @see {@link https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log}
 */
export function GetGuildAuditLog(guildId: SnowflakeInfer, query?: GetGuildAuditLogQueryInfer): RestMakeRequestOptions<AuditLogStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${Snowflake.parse(guildId)}/audit-logs`,
		query: GetGuildAuditLogQuery.parse(query),
	};
}
