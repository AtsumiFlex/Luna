import { z } from "zod";

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
