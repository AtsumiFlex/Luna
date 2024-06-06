import type { GatewayOpcodes, IntegerInfer } from "@lunajs/core";
import { ApiVersionsEnum, GatewayOpcodesEnum, Integer, Snowflake } from "@lunajs/core";
import { z } from "zod";
import { ActivityStructure } from "../events/presences";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#connecting-gateway-url-query-string-params}
 */
export const GatewayConnectURLQuery = z.object({
	/**
	 * API Version to use
	 */
	v: ApiVersionsEnum,
	/**
	 * The encoding of received gateway packets
	 */
	encoding: z.union([z.literal("json"), z.literal("etf")]),
	/**
	 * The optional transport compression of gateway packets
	 */
	compress: z.union([z.literal("zlib-stream"), z.literal("zstd-stream")]).optional(),
});

export type GatewayConnectURLQueryInfer = z.infer<typeof GatewayConnectURLQuery>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-presence-status-types}
 */
export enum StatusTypes {
	AwayFromKeyboard = "idle",
	DoNotDisturb = "dnd",
	Invisible = "invisible",
	Offline = "offline",
	Online = "online",
}

export const StatusTypesEnum = z.nativeEnum(StatusTypes);

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-presence-gateway-presence-update-structure}
 */
export const GatewayPresenceUpdate = z.object({
	/**
	 * Unix time (in milliseconds) of when the client went idle, or null if the client is not idle
	 */
	since: Integer.nullable(),
	/**
	 * User's activities
	 */
	activities: z.array(ActivityStructure),
	/**
	 * User's new status
	 */
	status: StatusTypesEnum,
	/**
	 * Whether or not the client is afk
	 */
	afk: z.boolean(),
});

export type GatewayPresenceUpdateInfer = z.infer<typeof GatewayPresenceUpdate>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-voice-state-gateway-voice-state-update-structure}
 */
export const GatewayVoiceStateUpdate = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: z.string(),
	/**
	 * ID of the voice channel client wants to join (null if disconnecting)
	 */
	channel_id: z.string().nullable(),
	/**
	 * Whether the client is muted
	 */
	self_mute: z.boolean(),
	/**
	 * Whether the client deafened
	 */
	self_deaf: z.boolean(),
});

export type GatewayVoiceStateUpdateInfer = z.infer<typeof GatewayVoiceStateUpdate>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#request-guild-members-request-guild-members-structure}
 */
export const GatewayRequestGuildMembers = z.object({
	/**
	 * ID of the guild to get members for
	 */
	guild_id: Snowflake,
	/**
	 * string that username starts with, or an empty string to return all members
	 */
	query: z.string().optional(),
	/**
	 * maximum number of members to send matching the query; a limit of 0 can be used with an empty string query to return all members
	 */
	limit: Integer,
	/**
	 * used to specify if we want the presences of the matched members
	 */
	presences: z.boolean().optional(),
	/**
	 * used to specify which users you wish to fetch
	 */
	user_ids: z.union([Snowflake, z.array(Snowflake)]).optional(),
	/**
	 * nonce to identify the Guild Members Chunk response
	 */
	nonce: z.string().optional(),
});

export type GatewayRequestGuildMembersInfer = z.infer<typeof GatewayRequestGuildMembers>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#resume-resume-structure}
 */
export const GatewayResume = z.object({
	/**
	 * Session token
	 */
	token: z.string(),
	/**
	 * Session ID
	 */
	session_id: z.string(),
	/**
	 * Last sequence number received
	 */
	seq: Integer,
});

export type GatewayResumeInfer = z.infer<typeof GatewayResume>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#identify-identify-connection-properties}
 */
export const GatewayIdentifyConnectionProperties = z.object({
	/**
	 * Your operating system
	 */
	os: z.string(),
	/**
	 * Your library name
	 */
	browser: z.string(),
	/**
	 * Your library name
	 */
	device: z.string(),
});

export type GatewayIdentifyConnectionPropertiesInfer = z.infer<typeof GatewayIdentifyConnectionProperties>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#identify-identify-structure}
 */
export const GatewayIdentify = z.object({
	/**
	 * Authentication token
	 */
	token: z.string(),
	/**
	 * Connection properties
	 */
	properties: GatewayIdentifyConnectionProperties,
	/**
	 * Whether this connection supports compression of packets
	 */
	compress: z.boolean().default(false).optional(),
	/**
	 * Value between 50 and 250, total number of members where the gateway will stop sending offline members in the guild member list
	 */
	large_threshold: Integer.min(50).max(250).optional(),
	/**
	 * Used for Guild Sharding
	 */
	shard: z.array(Integer).max(2).optional(),
	/**
	 * Presence structure for initial presence information
	 */
	presence: GatewayPresenceUpdate.optional(),
	/**
	 * Gateway Intents you wish to receive
	 */
	intents: Integer,
});

export type GatewayIdentifyInfer = z.infer<typeof GatewayIdentify>;

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

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#payload-structure}
 */
export const GatewayPayload = z.object({
	/**
	 * Gateway opcode, which indicates the payload type
	 */
	op: GatewayOpcodesEnum,
	/**
	 * Event data
	 */
	d: z.any(),
	/**
	 * Sequence number of event used for resuming sessions and heartbeating
	 */
	s: Integer.nullable(),
	/**
	 * Event name
	 */
	t: z.string().nullable(),
});

export type GatewayPayloadInfer = z.infer<typeof GatewayPayload>;
