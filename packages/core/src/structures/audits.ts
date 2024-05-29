import { z } from "zod";
import { Snowflake } from "../globals/formats";
import { ChannelStructure } from "./channels";
import { GuildScheduledEventStructure, IntegrationStructure } from "./guilds";
import { ApplicationCommandStructure } from "./interactions";
import { AutoModerationRuleStructure } from "./moderations";
import { UserStructure } from "./users";
import { WebhookStructure } from "./webhooks";

/**
 * Structure for Audit Log Change.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure}
 */
export const AuditLogChangeStructure = z.object({
	/**
	 * New value of the key.
	 *
	 * @example
	 * const change = { new_value: "newName" };
	 */
	new_value: z.any().optional(),
	/**
	 * Old value of the key.
	 *
	 * @example
	 * const change = { old_value: "oldName" };
	 */
	old_value: z.any().optional(),
	/**
	 * Name of the changed entity, with a few exceptions.
	 *
	 * @example
	 * const change = { key: "name" };
	 */
	key: z.string(),
});

/**
 * Inferred type for AuditLogChangeStructure.
 *
 * @example
 * const change: AuditLogChangeStructureInfer = {
 *   new_value: "newName",
 *   old_value: "oldName",
 *   key: "name",
 * };
 */
export type AuditLogChangeStructureInfer = z.infer<typeof AuditLogChangeStructure>;

/**
 * Structure for Optional Audit Entry Info.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info}
 */
export const OptionalAuditEntryInfoStructure = z.object({
	/**
	 * ID of the app whose permissions were targeted.
	 *
	 * @example
	 * const info = { application_id: "123456789012345678" };
	 */
	application_id: Snowflake.optional(),
	/**
	 * Name of the Auto Moderation rule that was triggered.
	 *
	 * @example
	 * const info = { auto_moderation_rule_name: "Spam Filter" };
	 */
	auto_moderation_rule_name: z.string().optional(),
	/**
	 * Trigger type of the Auto Moderation rule that was triggered.
	 *
	 * @example
	 * const info = { auto_moderation_rule_trigger_type: "KEYWORD" };
	 */
	auto_moderation_rule_trigger_type: z.string().optional(),
	/**
	 * Channel in which the entities were targeted.
	 *
	 * @example
	 * const info = { channel_id: "123456789012345678" };
	 */
	channel_id: Snowflake.optional(),
	/**
	 * Number of entities that were targeted.
	 *
	 * @example
	 * const info = { count: "5" };
	 */
	count: z.string().optional(),
	/**
	 * Number of days after which inactive members were kicked.
	 *
	 * @example
	 * const info = { delete_member_days: "30" };
	 */
	delete_member_days: z.string().optional(),
	/**
	 * ID of the overwritten entity.
	 *
	 * @example
	 * const info = { id: "123456789012345678" };
	 */
	id: Snowflake.optional(),
	/**
	 * Number of members removed by the prune.
	 *
	 * @example
	 * const info = { members_removed: "10" };
	 */
	members_removed: z.string().optional(),
	/**
	 * ID of the message that was targeted.
	 *
	 * @example
	 * const info = { message_id: "123456789012345678" };
	 */
	message_id: Snowflake.optional(),
	/**
	 * Name of the role if type is "0" (not present if type is "1").
	 *
	 * @example
	 * const info = { role_name: "Admin" };
	 */
	role_name: z.string().optional(),
	/**
	 * Type of overwritten entity - role ("0") or member ("1").
	 *
	 * @example
	 * const info = { type: "0" };
	 */
	type: z.string().optional(),
	/**
	 * The type of integration which performed the action.
	 *
	 * @example
	 * const info = { integration_type: "twitch" };
	 */
	integration_type: z.string().optional(),
});

/**
 * Inferred type for OptionalAuditEntryInfoStructure.
 *
 * @example
 * const info: OptionalAuditEntryInfoStructureInfer = {
 *   application_id: "123456789012345678",
 *   auto_moderation_rule_name: "Spam Filter",
 *   auto_moderation_rule_trigger_type: "KEYWORD",
 *   channel_id: "123456789012345678",
 *   count: "5",
 *   delete_member_days: "30",
 *   id: "123456789012345678",
 *   members_removed: "10",
 *   message_id: "123456789012345678",
 *   role_name: "Admin",
 *   type: "0",
 *   integration_type: "twitch",
 * };
 */
export type OptionalAuditEntryInfoStructureInfer = z.infer<typeof OptionalAuditEntryInfoStructure>;

/**
 * Enumeration of Audit Log Events.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events}
 */
export enum AuditLogEvents {
	GuildUpdate = 1,
	ChannelCreate = 10,
	ChannelUpdate = 11,
	ChannelDelete = 12,
	ChannelOverwriteCreate = 13,
	ChannelOverwriteUpdate = 14,
	ChannelOverwriteDelete = 15,
	MemberKick = 20,
	MemberPrune = 21,
	MemberBanAdd = 22,
	MemberBanRemove = 23,
	MemberUpdate = 24,
	MemberRoleUpdate = 25,
	MemberMove = 26,
	MemberDisconnect = 27,
	BotAdd = 28,
	RoleCreate = 30,
	RoleUpdate = 31,
	RoleDelete = 32,
	InviteCreate = 40,
	InviteUpdate = 41,
	InviteDelete = 42,
	WebhookCreate = 50,
	WebhookUpdate = 51,
	WebhookDelete = 52,
	EmojiCreate = 60,
	EmojiUpdate = 61,
	EmojiDelete = 62,
	MessageDelete = 72,
	MessageBulkDelete = 73,
	MessagePin = 74,
	MessageUnpin = 75,
	IntegrationCreate = 80,
	IntegrationUpdate = 81,
	IntegrationDelete = 82,
	StageInstanceCreate = 83,
	StageInstanceUpdate = 84,
	StageInstanceDelete = 85,
	StickerCreate = 90,
	StickerUpdate = 91,
	StickerDelete = 92,
	GuildScheduledEventCreate = 100,
	GuildScheduledEventUpdate = 101,
	GuildScheduledEventDelete = 102,
	ThreadCreate = 110,
	ThreadUpdate = 111,
	ThreadDelete = 112,
	ApplicationCommandPermissionUpdate = 121,
	AutoModerationRuleCreate = 140,
	AutoModerationRuleUpdate = 141,
	AutoModerationRuleDelete = 142,
	AutoModerationBlockMessage = 143,
	AutoModerationFlagToChannel = 144,
	AutoModerationUserCommunicationDisabled = 145,
	CreatorMonetizationRequestCreated = 150,
	CreatorMonetizationTermsAccepted = 151,
	OnboardingPromptCreate = 163,
	OnboardingPromptUpdate = 164,
	OnboardingPromptDelete = 165,
	OnboardingCreate = 166,
	OnboardingUpdate = 167,
	HomeSettingsCreate = 190,
	HomeSettingsUpdate = 191,
}

/**
 * Zod schema for audit log events enumeration.
 * This schema is used for validating {@link AuditLogEvents} values.
 *
 * @example
 * const isValidEvent = AuditLogEventsEnum.safeParse(AuditLogEvents.GuildUpdate).success;
 */
export const AuditLogEventsEnum = z.nativeEnum(AuditLogEvents);

/**
 * Structure for Audit Log Entry.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure}
 */
export const AuditLogEntryStructure = z.object({
	/**
	 * ID of the affected entity (webhook, user, role, etc.).
	 *
	 * @example
	 * const entry = { target_id: "123456789012345678" };
	 */
	target_id: Snowflake.nullable(),
	/**
	 * Changes made to the target_id.
	 *
	 * @example
	 * const entry = { changes: [{ key: "name", old_value: "oldName", new_value: "newName" }] };
	 */
	changes: z.array(AuditLogChangeStructure).optional(),
	/**
	 * User or app that made the changes.
	 *
	 * @example
	 * const entry = { user_id: "123456789012345678" };
	 */
	user_id: Snowflake.nullable(),
	/**
	 * ID of the entry.
	 *
	 * @example
	 * const entry = { id: "123456789012345678" };
	 */
	id: Snowflake,
	/**
	 * Type of action that occurred.
	 *
	 * @example
	 * const entry = { action_type: AuditLogEvents.GuildUpdate };
	 */
	action_type: AuditLogEventsEnum,
	/**
	 * Additional info for certain event types.
	 *
	 * @example
	 * const entry = { options: { count: "5" } };
	 */
	options: OptionalAuditEntryInfoStructure.optional(),
	/**
	 * Reason for the change (1-512 characters).
	 *
	 * @example
	 * const entry = { reason: "Updated role permissions" };
	 */
	reason: z.string().min(1).max(512).optional(),
});

/**
 * Inferred type for AuditLogEntryStructure.
 *
 * @example
 * const entry: AuditLogEntryStructureInfer = {
 *   target_id: "123456789012345678",
 *   changes: [{ key: "name", old_value: "oldName", new_value: "newName" }],
 *   user_id: "123456789012345678",
 *   id: "123456789012345678",
 *   action_type: AuditLogEvents.GuildUpdate,
 *   options: { count: "5" },
 *   reason: "Updated role permissions",
 * };
 */
export type AuditLogEntryStructureInfer = z.infer<typeof AuditLogEntryStructure>;

/**
 * Structure for Audit Log.
 *
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure}
 */
export const AuditLogStructure = z.object({
	/**
	 * List of application commands referenced in the audit log.
	 *
	 * @example
	 * const log = { application_commands: [{ id: "123456789012345678", name: "command" }] };
	 */
	application_commands: z.array(ApplicationCommandStructure).optional(),
	/**
	 * List of audit log entries, sorted from most to least recent.
	 *
	 * @example
	 * const log = { audit_log_entries: [{ id: "123456789012345678", action_type: AuditLogEvents.GuildUpdate }] };
	 */
	audit_log_entries: z.array(AuditLogEntryStructure),
	/**
	 * List of auto moderation rules referenced in the audit log.
	 *
	 * @example
	 * const log = { auto_moderation_rules: [{ id: "123456789012345678", name: "rule" }] };
	 */
	auto_moderation_rules: z.array(AutoModerationRuleStructure).optional(),
	/**
	 * List of guild scheduled events referenced in the audit log.
	 *
	 * @example
	 * const log = { guild_scheduled_events: [{ id: "123456789012345678", name: "event" }] };
	 */
	guild_scheduled_events: z.array(GuildScheduledEventStructure).optional(),
	/**
	 * List of partial integration objects.
	 *
	 * @example
	 * const log = { integrations: [{ id: "123456789012345678", name: "integration" }] };
	 */
	integrations: z.array(IntegrationStructure).optional(),
	/**
	 * List of threads referenced in the audit log.
	 *
	 * @example
	 * const log = { threads: [{ id: "123456789012345678", name: "thread" }] };
	 */
	threads: z.array(ChannelStructure).optional(),
	/**
	 * List of users referenced in the audit log.
	 *
	 * @example
	 * const log = { users: [{ id: "123456789012345678", username: "user" }] };
	 */
	users: z.array(UserStructure).optional(),
	/**
	 * List of webhooks referenced in the audit log.
	 *
	 * @example
	 * const log = { webhooks: [{ id: "123456789012345678", name: "webhook" }] };
	 */
	webhooks: z.array(WebhookStructure).optional(),
});

/**
 * Inferred type for AuditLogStructure.
 *
 * @example
 * const log: AuditLogStructureInfer = {
 *   application_commands: [{ id: "123456789012345678", name: "command" }],
 *   audit_log_entries: [{ id: "123456789012345678", action_type: AuditLogEvents.GuildUpdate }],
 *   auto_moderation_rules: [{ id: "123456789012345678", name: "rule" }],
 *   guild_scheduled_events: [{ id: "123456789012345678", name: "event" }],
 *   integrations: [{ id: "123456789012345678", name: "integration" }],
 *   threads: [{ id: "123456789012345678", name: "thread" }],
 *   users: [{ id: "123456789012345678", username: "user" }],
 *   webhooks: [{ id: "123456789012345678", name: "webhook" }],
 * };
 */
export type AuditLogStructureInfer = z.infer<typeof AuditLogStructure>;
