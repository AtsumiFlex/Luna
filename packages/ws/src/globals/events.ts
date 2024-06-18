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
	APPLICATION_COMMAND_PERMISSIONS_UPDATE: ApplicationCommandPermissionStructureInfer;
	AUTO_MODERATION_ACTION_EXECUTION: AutoModerationActionExecutionFieldsInfer;
	AUTO_MODERATION_RULE_CREATE: AutoModerationRuleStructureInfer;
	AUTO_MODERATION_RULE_DELETE: AutoModerationRuleStructureInfer;
	AUTO_MODERATION_RULE_UPDATE: AutoModerationRuleStructureInfer;
	CHANNEL_CREATE: ChannelStructureInfer;
	CHANNEL_DELETE: ChannelStructureInfer;
	CHANNEL_PINS_UPDATE: ChannelPinsUpdateFieldsInfer;
	CHANNEL_UPDATE: ChannelStructureInfer | Omit<ChannelStructureInfer, "last_message_id">;
	ENTITLEMENT_CREATE: EntitlementStructureInfer;
	ENTITLEMENT_DELETE: EntitlementStructureInfer;
	ENTITLEMENT_UPDATE: EntitlementStructureInfer;
	GUILD_AUDIT_LOG_ENTRY_CREATE: AuditLogEntryStructureInfer & GuildAuditLogEntryCreateFieldsInfer;
	GUILD_BAN_ADD: GuildBanAddFieldsInfer;
	GUILD_BAN_REMOVE: GuildBanRemoveFieldsInfer;
	GUILD_CREATE: GuildCreateFieldsInfer | { id: string; unavailable: boolean; };
	GUILD_DELETE: { id: string; unavailable: boolean; };
	GUILD_EMOJIS_UPDATE: GuildEmojisUpdateFieldsInfer;
	GUILD_INTEGRATIONS_UPDATE: GuildIntegrationsUpdateFieldsInfer;
	GUILD_MEMBERS_CHUNK: GuildMembersChunkFieldsInfer;
	GUILD_MEMBER_ADD: GuildMemberAddFieldsInfer & GuildMemberStructureInfer;
	GUILD_MEMBER_REMOVE: GuildMemberRemoveFieldsInfer;
	GUILD_MEMBER_UPDATE: GuildMemberUpdateFieldsInfer;
	GUILD_ROLE_CREATE: GuildRoleCreateFieldsInfer;
	GUILD_ROLE_DELETE: GuildRoleDeleteFieldsInfer;
	GUILD_ROLE_UPDATE: GuildRoleUpdateFieldsInfer;
	GUILD_SCHEDULED_EVENT_CREATE: GuildScheduledEventStructureInfer;
	GUILD_SCHEDULED_EVENT_DELETE: GuildScheduledEventStructureInfer;
	GUILD_SCHEDULED_EVENT_UPDATE: GuildScheduledEventStructureInfer;
	GUILD_SCHEDULED_EVENT_USER_ADD: GuildScheduledEventUserAddFieldsInfer;
	GUILD_SCHEDULED_EVENT_USER_REMOVE: GuildScheduledEventUserRemoveFieldsInfer;
	GUILD_STICKER_CREATE: GuildStickersUpdateFieldsInfer;
	GUILD_UPDATE: GuildStructureInfer;
	HELLO: HelloStructureInfer;
	INTEGRATION_CREATE: IntegrationCreateFieldsInfer & Omit<IntegrationStructureInfer, "user">;
	INTEGRATION_DELETE: IntegrationDeleteFieldsInfer;
	INTEGRATION_UPDATE: IntegrationUpdateFieldsInfer & Omit<IntegrationStructureInfer, "user">;
	INTERACTION_CREATE: InteractionStructureInfer;
	INVALID_SESSION: boolean;
	INVITE_CREATE: InviteCreateFieldsInfer;
	INVITE_DELETE: InviteDeleteFieldsInfer;
	MESSAGE_CREATE: MessageCreateExtraFieldsInfer | MessageStructureInfer;
	MESSAGE_DELETE: MessageDeleteFieldsInfer;
	MESSAGE_DELETE_BULK: MessageDeleteBulkFieldsInfer;
	MESSAGE_POLL_VOTE_ADD: MessagePollVoteAddFieldsInfer;
	MESSAGE_POLL_VOTE_REMOVE: MessagePollVoteRemoveFieldsInfer;
	MESSAGE_REACTION_ADD: MessageReactionAddFieldsInfer;
	MESSAGE_REACTION_REMOVE: MessageReactionRemoveFieldsInfer;
	MESSAGE_REACTION_REMOVE_ALL: MessageReactionRemoveAllFieldsInfer;
	MESSAGE_REACTION_REMOVE_EMOJI: MessageReactionRemoveEmojiFieldsInfer;
	MESSAGE_UPDATE: MessageStructureInfer;
	PRESENCE_UPDATE: PresenceUpdateFieldsInfer;
	READY: ReadyFieldsInfer;
	RESUMED: null;
	STAGE_INSTANCE_CREATE: StageInstanceStructureInfer;
	STAGE_INSTANCE_DELETE: StageInstanceStructureInfer;
	STAGE_INSTANCE_UPDATE: StageInstanceStructureInfer;
	THREAD_CREATE: ChannelStructureInfer & ThreadMemberStructureInfer & { newly_created: boolean; };
	THREAD_DELETE: Pick<ChannelStructureInfer, "guild_id" | "id" | "parent_id" | "type">;
	THREAD_LIST_SYNC: ThreadListSyncFieldsInfer;
	THREAD_MEMBERS_UPDATE: ThreadMembersUpdateFieldsInfer;
	THREAD_MEMBER_UPDATE: ThreadMemberStructureInfer & ThreadMemberUpdateExtraFieldsInfer;
	THREAD_UPDATE: Omit<ChannelStructureInfer, "last_message_id">;
	TYPING_START: TypingStartFieldsInfer;
	USER_UPDATE: UserStructureInfer;
	VOICE_SERVER_UPDATE: VoiceServerUpdateFieldsInfer;
	VOICE_STATE_UPDATE: VoiceStateStructureInfer;
	WEBHOOKS_UPDATE: WebhooksUpdateFieldsInfer;
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
