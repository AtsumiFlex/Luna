import type { Buffer } from "node:buffer";
import type {
	ApplicationCommandPermissionStructureInfer,
	AuditLogEntryStructureInfer,
	AutoModerationRuleStructureInfer,
	ChannelStructureInfer,
	EntitlementStructureInfer,
	GatewayOpcodes,
	GuildMemberStructureInfer,
	GuildScheduledEventStructureInfer,
	GuildStructureInfer,
	IntegrationStructureInfer,
	InteractionStructureInfer,
	MessageStructureInfer,
	StageInstanceStructureInfer,
	ThreadMemberStructureInfer,
	UserStructureInfer,
	VoiceStateStructureInfer,
} from "@lunajs/core";
import type {
	ChannelPinsUpdateFieldsInfer,
	ThreadListSyncFieldsInfer,
	ThreadMembersUpdateFieldsInfer,
	ThreadMemberUpdateExtraFieldsInfer,
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
import type { HelloStructureInfer } from "../events/hello";
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
import type { PresenceUpdateFieldsInfer } from "../events/presences";
import type { ReadyFieldsInfer } from "../events/ready";
import type { TypingStartFieldsInfer } from "../events/typings";
import type { VoiceServerUpdateFieldsInfer } from "../events/voices";
import type { WebhooksUpdateFieldsInfer } from "../events/webhooks";
import type { GatewayRequestGuildMembersStructureInfer } from "../other/guilds";
import type { GatewayIdentifyStructureInfer } from "../other/identity";
import type { GatewayPresenceUpdateStructureInfer } from "../other/presences";
import type { GatewayResumeStructureInfer } from "../other/resume";
import type { GatewayVoiceStateUpdateStructureInfer } from "../other/voices";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#receive-events}
 */
export type GatewayReceiveEvents = {
	APPLICATION_COMMAND_PERMISSIONS_UPDATE: [permission: ApplicationCommandPermissionStructureInfer];
	AUTO_MODERATION_ACTION_EXECUTION: [action: AutoModerationActionExecutionFieldsInfer];
	AUTO_MODERATION_RULE_CREATE: [rule: AutoModerationRuleStructureInfer];
	AUTO_MODERATION_RULE_DELETE: [rule: AutoModerationRuleStructureInfer];
	AUTO_MODERATION_RULE_UPDATE: [rule: AutoModerationRuleStructureInfer];
	CHANNEL_CREATE: [channel: ChannelStructureInfer];
	CHANNEL_DELETE: [channel: ChannelStructureInfer];
	CHANNEL_PINS_UPDATE: [channel: ChannelPinsUpdateFieldsInfer];
	CHANNEL_UPDATE: [channel: ChannelStructureInfer | Omit<ChannelStructureInfer, "last_message_id">];
	CLOSE: [code: number, reason: Buffer];
	DEBUG: [message: string];
	ENTITLEMENT_CREATE: [entitlement: EntitlementStructureInfer];
	ENTITLEMENT_DELETE: [entitlement: EntitlementStructureInfer];
	ENTITLEMENT_UPDATE: [entitlement: EntitlementStructureInfer];
	ERROR: [error: Error];
	GUILD_AUDIT_LOG_ENTRY_CREATE: [audit: AuditLogEntryStructureInfer & GuildAuditLogEntryCreateFieldsInfer];
	GUILD_BAN_ADD: [ban: GuildBanAddFieldsInfer];
	GUILD_BAN_REMOVE: [ban: GuildBanRemoveFieldsInfer];
	GUILD_CREATE: [guild: GuildCreateFieldsInfer | { id: string; unavailable: boolean; }];
	GUILD_DELETE: [guild: { id: string; unavailable: boolean; }];
	GUILD_EMOJIS_UPDATE: [emojis: GuildEmojisUpdateFieldsInfer];
	GUILD_INTEGRATIONS_UPDATE: [integrations: GuildIntegrationsUpdateFieldsInfer];
	GUILD_MEMBERS_CHUNK: [members: GuildMembersChunkFieldsInfer];
	GUILD_MEMBER_ADD: [member: GuildMemberAddFieldsInfer & GuildMemberStructureInfer];
	GUILD_MEMBER_REMOVE: [member: GuildMemberRemoveFieldsInfer];
	GUILD_MEMBER_UPDATE: [member: GuildMemberUpdateFieldsInfer];
	GUILD_ROLE_CREATE: [role: GuildRoleCreateFieldsInfer];
	GUILD_ROLE_DELETE: [role: GuildRoleDeleteFieldsInfer];
	GUILD_ROLE_UPDATE: [role: GuildRoleUpdateFieldsInfer];
	GUILD_SCHEDULED_EVENT_CREATE: [scheduled: GuildScheduledEventStructureInfer];
	GUILD_SCHEDULED_EVENT_DELETE: [scheduled: GuildScheduledEventStructureInfer];
	GUILD_SCHEDULED_EVENT_UPDATE: [scheduled: GuildScheduledEventStructureInfer];
	GUILD_SCHEDULED_EVENT_USER_ADD: [user: GuildScheduledEventUserAddFieldsInfer];
	GUILD_SCHEDULED_EVENT_USER_REMOVE: [user: GuildScheduledEventUserRemoveFieldsInfer];
	GUILD_STICKER_CREATE: [sticker: GuildStickersUpdateFieldsInfer];
	GUILD_UPDATE: [guild: GuildStructureInfer];
	HELLO: [hello: HelloStructureInfer];
	INTEGRATION_CREATE: [integration: IntegrationCreateFieldsInfer & Omit<IntegrationStructureInfer, "user">];
	INTEGRATION_DELETE: [integration: IntegrationDeleteFieldsInfer];
	INTEGRATION_UPDATE: [integration: IntegrationUpdateFieldsInfer & Omit<IntegrationStructureInfer, "user">];
	INTERACTION_CREATE: [interaction: InteractionStructureInfer];
	INVALID_SESSION: [invalid: boolean];
	INVITE_CREATE: [invite: InviteCreateFieldsInfer];
	INVITE_DELETE: [invite: InviteDeleteFieldsInfer];
	MESSAGE_CREATE: [message: MessageCreateExtraFieldsInfer | MessageStructureInfer];
	MESSAGE_DELETE: [message: MessageDeleteFieldsInfer];
	MESSAGE_DELETE_BULK: [message: MessageDeleteBulkFieldsInfer];
	MESSAGE_POLL_VOTE_ADD: [poll: MessagePollVoteAddFieldsInfer];
	MESSAGE_POLL_VOTE_REMOVE: [poll: MessagePollVoteRemoveFieldsInfer];
	MESSAGE_REACTION_ADD: [reaction: MessageReactionAddFieldsInfer];
	MESSAGE_REACTION_REMOVE: [reaction: MessageReactionRemoveFieldsInfer];
	MESSAGE_REACTION_REMOVE_ALL: [reaction: MessageReactionRemoveAllFieldsInfer];
	MESSAGE_REACTION_REMOVE_EMOJI: [reaction: MessageReactionRemoveEmojiFieldsInfer];
	MESSAGE_UPDATE: [message: MessageStructureInfer];
	OPEN: [];
	PRESENCE_UPDATE: [presence: PresenceUpdateFieldsInfer];
	READY: [ready: ReadyFieldsInfer];
	RESUMED: [resumed: null];
	STAGE_INSTANCE_CREATE: [stage: StageInstanceStructureInfer];
	STAGE_INSTANCE_DELETE: [stage: StageInstanceStructureInfer];
	STAGE_INSTANCE_UPDATE: [stage: StageInstanceStructureInfer];
	THREAD_CREATE: [thread: ChannelStructureInfer & ThreadMemberStructureInfer & { newly_created: boolean; }];
	THREAD_DELETE: [thread: Pick<ChannelStructureInfer, "guild_id" | "id" | "parent_id" | "type">];
	THREAD_LIST_SYNC: [thread: ThreadListSyncFieldsInfer];
	THREAD_MEMBERS_UPDATE: [thread: ThreadMembersUpdateFieldsInfer];
	THREAD_MEMBER_UPDATE: [thread: ThreadMemberStructureInfer & ThreadMemberUpdateExtraFieldsInfer];
	THREAD_UPDATE: [thread: Omit<ChannelStructureInfer, "last_message_id">];
	TYPING_START: [typing: TypingStartFieldsInfer];
	USER_UPDATE: [user: UserStructureInfer];
	VOICE_SERVER_UPDATE: [voice: VoiceServerUpdateFieldsInfer];
	VOICE_STATE_UPDATE: [voice: VoiceStateStructureInfer];
	WEBHOOKS_UPDATE: [webhooks: WebhooksUpdateFieldsInfer];
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#send-events}
 */
export type GatewaySendEvents = {
	[GatewayOpcodes.Heartbeat]: number | null;
	[GatewayOpcodes.Identify]: GatewayIdentifyStructureInfer;
	[GatewayOpcodes.RequestGuildMembers]: GatewayRequestGuildMembersStructureInfer;
	[GatewayOpcodes.Resume]: GatewayResumeStructureInfer;
	[GatewayOpcodes.PresenceUpdate]: GatewayPresenceUpdateStructureInfer;
	[GatewayOpcodes.VoiceStateUpdate]: GatewayVoiceStateUpdateStructureInfer;
};
