import { Snowflake } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#update-voice-state-gateway-voice-state-update-structure}
 */
export const GatewayVoiceStateUpdateStructure = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * ID of the voice channel client wants to join (null if disconnecting)
	 */
	channel_id: Snowflake.nullable(),
	/**
	 * Whether the client is muted
	 */
	self_mute: z.boolean(),
	/**
	 * Whether the client deafened
	 */
	self_deaf: z.boolean(),
});

export type GatewayVoiceStateUpdateStructureInfer = z.infer<typeof GatewayVoiceStateUpdateStructure>;
