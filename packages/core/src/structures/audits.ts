import { z } from "zod";
import { Snowflake } from "../globals/formats";
import { ChannelStructure } from "./channels";
import { GuildScheduledEventStructure, IntegrationStructure } from "./guilds";
import { ApplicationCommandStructure } from "./interactions";
import { AutoModerationRuleStructure } from "./moderations";
import { UserStructure } from "./users";
import { WebhookStructure } from "./webhooks";

/**
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure}
 */
export const AuditLogChangeStructure = z.object({
	/**
	 * New value of the key
	 */
	new_value: z.unknown().optional(),
	/**
	 * Old value of the key
	 */
	old_value: z.unknown().optional(),
	/**
	 * Name of the changed entity, with a few exceptions
	 */
	key: z.string(),
});

export type AuditLogChangeStructureInfer = z.infer<typeof AuditLogChangeStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info}
 */
export const OptionalAuditEntryInfo = z.object({
	/**
	 * ID of the app whose permissions were targeted
	 */
	application_id: Snowflake.optional(),
	/**
	 * Name of the Auto Moderation rule that was triggered
	 */
	auto_moderation_rule_name: z.string().optional(),
	/**
	 * Trigger type of the Auto Moderation rule that was triggered
	 */
	auto_moderation_rule_trigger_type: z.string().optional(),
	/**
	 * Channel in which the entities were targeted
	 */
	channel_id: Snowflake.optional(),
	/**
	 * Number of entities that were targeted
	 */
	count: z.string().optional(),
	/**
	 * Number of days after which inactive members were kicked
	 */
	delete_member_days: z.string().optional(),
	/**
	 * ID of the overwritten entity
	 */
	id: z.string().optional(),
	/**
	 * Number of members removed by the prune
	 */
	members_removed: z.string().optional(),
	/**
	 * ID of the message that was targeted
	 */
	message_id: z.string().optional(),
	/**
	 * Name of the role if type is "0" (not present if type is "1")
	 */
	role_name: z.string().optional(),
	/**
	 * Type of overwritten entity - role ("0") or member ("1")
	 */
	type: z.string().optional(),
	/**
	 * The type of integration which performed the action
	 */
	integration_type: z.string().optional(),
});

export type OptionalAuditEntryInfoInfer = z.infer<typeof OptionalAuditEntryInfo>;

/**
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

export const AuditLogEventsEnum = z.nativeEnum(AuditLogEvents);

/**
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure}
 */
export const AuditLogEntryStructure = z.object({
	/**
	 * ID of the affected entity (webhook, user, role, etc.)
	 */
	target_id: z.string().nullable(),
	/**
	 * Changes made to the target_id
	 */
	changes: z.array(AuditLogChangeStructure).optional(),
	/**
	 * User or app that made the changes
	 */
	user_id: Snowflake.nullable(),
	/**
	 * ID of the entry
	 */
	id: Snowflake,
	/**
	 * Type of action that occurred
	 */
	action_type: AuditLogEventsEnum,
	/**
	 * Additional info for certain event types
	 */
	options: OptionalAuditEntryInfo.optional(),
	/**
	 * Reason for the change (1-512 characters)
	 */
	reason: z.string().min(1).max(512).optional(),
});

export type AuditLogEntryStructureInfer = z.infer<typeof AuditLogEntryStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/audit-log#audit-log-object-audit-log-structure}
 */
export const AuditLogStructure = z.object({
	/**
	 * List of application commands referenced in the audit log
	 */
	application_commands: z.array(ApplicationCommandStructure),
	/**
	 * List of audit log entries, sorted from most to least recent
	 */
	audit_log_entries: z.array(AuditLogEntryStructure),
	/**
	 * List of auto moderation rules referenced in the audit log
	 */
	auto_moderation_rules: z.array(AutoModerationRuleStructure),
	/**
	 * List of guild scheduled events referenced in the audit log
	 */
	guild_scheduled_events: z.array(GuildScheduledEventStructure),
	/**
	 * List of partial integration objects
	 */
	integrations: z.array(IntegrationStructure.partial()),
	/**
	 * List of threads referenced in the audit log
	 */
	threads: z.array(ChannelStructure),
	/**
	 * List of users referenced in the audit log
	 */
	users: z.array(UserStructure),
	/**
	 * List of webhooks referenced in the audit log
	 */
	webhooks: z.array(WebhookStructure),
});

export type AuditLogStructureInfer = z.infer<typeof AuditLogStructure>;
