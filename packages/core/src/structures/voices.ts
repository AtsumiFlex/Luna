import { z } from "zod";
import { ISO8601Timestamp, Snowflake } from "../globals/formats";

/**
 * Structure for Voice Region.
 *
 * @see {@link https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure}
 */
export const VoiceRegionStructure = z.object({
	/**
	 * The ID of the region.
	 *
	 * @example
	 * const region = { id: "us-west" };
	 */
	id: z.string(),
	/**
	 * The name of the region.
	 *
	 * @example
	 * const region = { name: "US West" };
	 */
	name: z.string(),
	/**
	 * Whether this region is optimal.
	 *
	 * @example
	 * const region = { optimal: true };
	 */
	optimal: z.boolean(),
	/**
	 * Whether this region is deprecated.
	 *
	 * @example
	 * const region = { deprecated: false };
	 */
	deprecated: z.boolean(),
	/**
	 * Whether this region is custom.
	 *
	 * @example
	 * const region = { custom: false };
	 */
	custom: z.boolean(),
});

/**
 * Inferred type for VoiceRegionStructure.
 *
 * @example
 * const region: VoiceRegionStructureInfer = {
 *   id: "us-west",
 *   name: "US West",
 *   optimal: true,
 *   deprecated: false,
 *   custom: false,
 * };
 */
export type VoiceRegionStructureInfer = z.infer<typeof VoiceRegionStructure>;

/**
 * Structure for Voice State.
 *
 * @see {@link https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure}
 */
export const VoiceStateStructure = z.object({
	/**
	 * The guild id this voice state is for.
	 *
	 * @example
	 * const voiceState = { guild_id: "123456789012345678" };
	 */
	guild_id: Snowflake.optional(),
	/**
	 * The channel id this user is connected to.
	 *
	 * @example
	 * const voiceState = { channel_id: "123456789012345678" };
	 */
	channel_id: Snowflake.nullable(),
	/**
	 * The user id this voice state is for.
	 *
	 * @example
	 * const voiceState = { user_id: "123456789012345678" };
	 */
	user_id: Snowflake,
	/**
	 * The session id for this voice state.
	 *
	 * @example
	 * const voiceState = { session_id: "session_id_value" };
	 */
	session_id: z.string(),
	/**
	 * Whether this user is deafened by the server.
	 *
	 * @example
	 * const voiceState = { deaf: false };
	 */
	deaf: z.boolean(),
	/**
	 * Whether this user is muted by the server.
	 *
	 * @example
	 * const voiceState = { mute: false };
	 */
	mute: z.boolean(),
	/**
	 * Whether this user is locally deafened.
	 *
	 * @example
	 * const voiceState = { self_deaf: false };
	 */
	self_deaf: z.boolean(),
	/**
	 * Whether this user is locally muted.
	 *
	 * @example
	 * const voiceState = { self_mute: false };
	 */
	self_mute: z.boolean(),
	/**
	 * Whether this user is streaming using "Go Live".
	 *
	 * @example
	 * const voiceState = { self_stream: true };
	 */
	self_stream: z.boolean().optional(),
	/**
	 * Whether this user's camera is enabled.
	 *
	 * @example
	 * const voiceState = { self_video: false };
	 */
	self_video: z.boolean(),
	/**
	 * Whether this user's permission to speak is denied.
	 *
	 * @example
	 * const voiceState = { suppress: false };
	 */
	suppress: z.boolean(),
	/**
	 * The time at which the user requested to speak.
	 *
	 * @example
	 * const voiceState = { request_to_speak_timestamp: "2023-01-01T00:00:00.000Z" };
	 */
	request_to_speak_timestamp: ISO8601Timestamp.nullable(),
});

/**
 * Inferred type for VoiceStateStructure.
 *
 * @example
 * const voiceState: VoiceStateStructureInfer = {
 *   guild_id: "123456789012345678",
 *   channel_id: "123456789012345678",
 *   user_id: "123456789012345678",
 *   session_id: "session_id_value",
 *   deaf: false,
 *   mute: false,
 *   self_deaf: false,
 *   self_mute: false,
 *   self_stream: true,
 *   self_video: false,
 *   suppress: false,
 *   request_to_speak_timestamp: "2023-01-01T00:00:00.000Z",
 * };
 */
export type VoiceStateStructureInfer = z.infer<typeof VoiceStateStructure>;
