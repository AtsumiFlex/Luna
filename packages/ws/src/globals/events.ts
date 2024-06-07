import type { Buffer } from "node:buffer";
import type {
	ApplicationCommandPermissionsStructureInfer,
	AuditLogEntryStructureInfer,
	AutoModerationRuleStructureInfer,
	ChannelStructureInfer,
	EntitlementStructureInfer,
	GuildMemberStructureInfer,
	GuildScheduledEventStructureInfer,
	GuildStructureInfer,
	IntegrationStructureInfer,
	InteractionStructureInfer,
	MessageStructureInfer,
	SnowflakeInfer,
	StageInstanceStructureInfer,
	ThreadMemberStructureInfer,
	UserStructureInfer,
	VoiceStateStructureInfer,
} from "@lunajs/core";
import type {
	ChannelPinsUpdateFieldsInfer,
	ThreadListSyncFieldsInfer,
	ThreadMembersUpdateFieldsInfer,
	ThreadMemberUpdateFieldsInfer,
} from "../events/channels";
import type {
	GuildAuditLogEntryCreateFieldsInfer,
	GuildBanAddFieldsInfer,
	GuildBanRemoveFieldsInfer,
	GuildCreateFieldsInfer,
	GuildEmojisUpdateFieldsInfer,
	GuildIntegrationsUpdateFieldsInfer,
	GuildMemberAddFieldsInfer,
	GuildMemberRemoveFieldsInfer,
	GuildMembersChunkFieldsInfer,
	GuildMemberUpdateFieldsInfer,
	GuildRoleCreateFieldsInfer,
	GuildRoleDeleteFieldsInfer,
	GuildRoleUpdateFieldsInfer,
	GuildScheduledEventUserAddFieldsInfer,
	GuildScheduledEventUserRemoveFieldsInfer,
	GuildStickersUpdateFieldsInfer,
} from "../events/guilds";
import type { HelloInfer } from "../events/hello";
import type {
	IntegrationCreateFieldsInfer,
	IntegrationDeleteFieldsInfer,
	IntegrationUpdateFieldsInfer,
} from "../events/integrations";
import type { InviteCreateFieldsInfer, InviteDeleteFieldsInfer } from "../events/invites";
import type {
	MessageCreateExtraFieldsInfer,
	MessageDeleteBulkFieldsInfer,
	MessageDeleteFieldsInfer,
	MessageReactionAddFieldsInfer,
	MessageReactionRemoveAllFieldsInfer,
	MessageReactionRemoveEmojiFieldsInfer,
	MessageReactionRemoveFieldsInfer,
} from "../events/messages";
import type { AutoModerationActionExecutionFieldsInfer } from "../events/moderations";
import type { MessagePollVoteAddFieldsInfer, MessagePollVoteRemoveFieldsInfer } from "../events/polls";
import type { PresenceUpdateFieldsInfer, TypingStartFieldsInfer } from "../events/presences";
import type { ReadyFieldsInfer } from "../events/ready";
import type { VoiceServerUpdateFieldsInfer } from "../events/voices";
import type { WebhooksUpdateFieldsInfer } from "../events/webhooks";
import type { GatewayResumeInfer } from "../other/resume";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#receive-events}
 */
export type GatewayEvents = {
	APPLICATION_COMMAND_PERMISSIONS_UPDATE: [permissions: ApplicationCommandPermissionsStructureInfer];
	AUTO_MODERATION_RULE_CREATE: [rule: AutoModerationRuleStructureInfer];
	AUTO_MODERATION_RULE_DELETE: [rule: AutoModerationRuleStructureInfer];
	AUTO_MODERATION_RULE_EXECUTION: [rule: AutoModerationActionExecutionFieldsInfer];
	AUTO_MODERATION_RULE_UPDATE: [rule: AutoModerationRuleStructureInfer];
	CHANNEL_CREATE: [channel: ChannelStructureInfer];
	CHANNEL_DELETE: [channel: ChannelStructureInfer];
	CHANNEL_PINS_UPDATE: [pins: ChannelPinsUpdateFieldsInfer];
	CHANNEL_UPDATE: [channel: ChannelStructureInfer];
	CLOSE: [code: number, reason: Buffer];
	DEBUG: [message: string];
	ENTITLEMENT_CREATE: [entitlement: EntitlementStructureInfer];
	ENTITLEMENT_DELETE: [entitlement: EntitlementStructureInfer];
	ENTITLEMENT_UPDATE: [entitlement: EntitlementStructureInfer];
	ERROR: [error: Error];
	GUILD_AUDIT_LOG_ENTRY_CREATE: [audit: AuditLogEntryStructureInfer & GuildAuditLogEntryCreateFieldsInfer];
	GUILD_BAN_ADD: [ban: GuildBanAddFieldsInfer];
	GUILD_BAN_REMOVE: [ban: GuildBanRemoveFieldsInfer];
	GUILD_CREATE: [guild: { id: SnowflakeInfer; unavailable: true; } | GuildCreateFieldsInfer & GuildStructureInfer];
	GUILD_DELETE: [guild: { id: SnowflakeInfer; unavailable: true; }];
	GUILD_EMOJIS_UPDATE: [emojis: GuildEmojisUpdateFieldsInfer];
	GUILD_INTEGRATIONS_UPDATE: [integrations: GuildIntegrationsUpdateFieldsInfer];
	GUILD_MEMBERS_CHUNK: [members: GuildMembersChunkFieldsInfer];
	GUILD_MEMBER_ADD: [member: GuildMemberAddFieldsInfer & GuildMemberStructureInfer];
	GUILD_MEMBER_REMOVE: [member: GuildMemberRemoveFieldsInfer];
	GUILD_MEMBER_UPDATE: [member: GuildMemberUpdateFieldsInfer];
	GUILD_ROLE_CREATE: [role: GuildRoleCreateFieldsInfer];
	GUILD_ROLE_DELETE: [role: GuildRoleDeleteFieldsInfer];
	GUILD_ROLE_UPDATE: [role: GuildRoleUpdateFieldsInfer];
	GUILD_SCHEDULED_EVENT_CREATE: [scheduledEvent: GuildScheduledEventStructureInfer];
	GUILD_SCHEDULED_EVENT_DELETE: [scheduledEvent: GuildScheduledEventStructureInfer];
	GUILD_SCHEDULED_EVENT_UPDATE: [scheduledEvent: GuildScheduledEventStructureInfer];
	GUILD_SCHEDULED_EVENT_USER_ADD: [user: GuildScheduledEventUserAddFieldsInfer];
	GUILD_SCHEDULED_EVENT_USER_REMOVE: [user: GuildScheduledEventUserRemoveFieldsInfer];
	GUILD_STICKERS_UPDATE: [stickers: GuildStickersUpdateFieldsInfer];
	GUILD_UPDATE: [guild: GuildStructureInfer];
	HELLO: [hello: HelloInfer];
	INTEGRATION_CREATE: [integration: IntegrationCreateFieldsInfer & Omit<IntegrationStructureInfer, "user">];
	INTEGRATION_DELETE: [integration: IntegrationDeleteFieldsInfer];
	INTEGRATION_UPDATE: [integration: IntegrationUpdateFieldsInfer & Omit<IntegrationStructureInfer, "user">];
	INTERACTION_CREATE: [interaction: InteractionStructureInfer];
	INVALID_SESSION: [resumable: boolean];
	INVITE_CREATE: [invite: InviteCreateFieldsInfer];
	INVITE_DELETE: [invite: InviteDeleteFieldsInfer];
	MESSAGE: [data: Buffer, isBinary: boolean];
	MESSAGE_CREATE: [message: MessageCreateExtraFieldsInfer & MessageStructureInfer];
	MESSAGE_DELETE: [message: MessageDeleteFieldsInfer];
	MESSAGE_DELETE_BULK: [messages: MessageDeleteBulkFieldsInfer];
	MESSAGE_POLL_VOTE_ADD: [poll: MessagePollVoteAddFieldsInfer];
	MESSAGE_POLL_VOTE_REMOVE: [poll: MessagePollVoteRemoveFieldsInfer];
	MESSAGE_REACTION_ADD: [reaction: MessageReactionAddFieldsInfer];
	MESSAGE_REACTION_REMOVE: [reaction: MessageReactionRemoveFieldsInfer];
	MESSAGE_REACTION_REMOVE_ALL: [reaction: MessageReactionRemoveAllFieldsInfer];
	MESSAGE_REACTION_REMOVE_EMOJI: [reaction: MessageReactionRemoveEmojiFieldsInfer];
	MESSAGE_UPDATE: [message: MessageStructureInfer];
	PRESENCE_UPDATE: [presence: PresenceUpdateFieldsInfer];
	READY: [ready: ReadyFieldsInfer];
	RECONNECT: [reconnect: null];
	RESUMED: [resumed: GatewayResumeInfer];
	STAGE_INSTANCE_CREATE: [instance: StageInstanceStructureInfer];
	STAGE_INSTANCE_DELETE: [instance: StageInstanceStructureInfer];
	STAGE_INSTANCE_UPDATE: [instance: StageInstanceStructureInfer];
	THREAD_CREATE: [thread: ChannelStructureInfer & ThreadMemberStructureInfer & { newly_created: boolean; }];
	THREAD_DELETE: [thread: Pick<ChannelStructureInfer, "guild_id" | "id" | "parent_id" | "type">];
	THREAD_LIST_SYNC: [thread: ThreadListSyncFieldsInfer];
	THREAD_MEMBERS_UPDATE: [thread: ThreadMembersUpdateFieldsInfer];
	THREAD_MEMBER_UPDATE: [thread: ThreadMemberStructureInfer & ThreadMemberUpdateFieldsInfer];
	THREAD_UPDATE: [thread: ChannelStructureInfer];
	TYPING_START: [typing: TypingStartFieldsInfer];
	USER_UPDATE: [user: UserStructureInfer];
	VOICE_SERVER_UPDATE: [voice: VoiceServerUpdateFieldsInfer];
	VOICE_STATE_UPDATE: [state: VoiceStateStructureInfer];
	WARN: [message: string];
	WEBHOOKS_UPDATE: [webhhoks: WebhooksUpdateFieldsInfer];
};
