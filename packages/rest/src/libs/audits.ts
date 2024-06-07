import { AuditLogEventsEnum, Snowflake } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log-query-string-params}
 */
export const GetGuildAuditLogQuery = z.object({
	/**
	 * Entries from a specific user ID
	 */
	user_id: Snowflake.optional(),
	/**
	 * Entries for a specific audit log event
	 */
	action_type: AuditLogEventsEnum.optional(),
	/**
	 * Entries with ID less than a specific audit log entry ID
	 */
	before: Snowflake.optional(),
	/**
	 * Entries with ID greater than a specific audit log entry ID
	 */
	after: Snowflake.optional(),
	/**
	 * Maximum number of entries (between 1-100) to return, defaults to 50
	 */
	limit: z.number().min(1).max(100).default(50).optional(),
});

export type GetGuildAuditLogQueryInfer = z.infer<typeof GetGuildAuditLogQuery>;
