import type { GatewayOpcodes, IntegerInfer } from "@lunajs/core";
import type { GatewayIdentifyInfer } from "../other/identify";
import type { GatewayRequestGuildMembersInfer } from "../other/members";
import type { GatewayPresenceUpdateInfer } from "../other/presences";
import type { GatewayResumeInfer } from "../other/resume";
import type { GatewayVoiceStateUpdateInfer } from "../other/states";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#send-events}
 */
export type GatewaySendEvents = {
	[GatewayOpcodes.Heartbeat]: [heartbeat: IntegerInfer | null];
	[GatewayOpcodes.Identify]: [identify: GatewayIdentifyInfer];
	[GatewayOpcodes.RequestGuildMembers]: [members: GatewayRequestGuildMembersInfer];
	[GatewayOpcodes.Resume]: [resume: GatewayResumeInfer];
	[GatewayOpcodes.PresenceUpdate]: [presence: GatewayPresenceUpdateInfer];
	[GatewayOpcodes.VoiceStateUpdate]: [voiceState: GatewayVoiceStateUpdateInfer];
};
