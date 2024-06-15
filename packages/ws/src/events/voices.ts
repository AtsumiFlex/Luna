import { Snowflake } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#voice-server-update-voice-server-update-event-fields}
 */
export const VoiceServerUpdateFields = z.object({
	/**
	 * Voice connection token
	 */
	token: z.string(),
	/**
	 * Guild this voice server update is for
	 */
	guild_id: Snowflake,
	/**
	 * Voice server host
	 */
	endpoint: z.string().nullable(),
});

export type VoiceServerUpdateFieldsInfer = z.infer<typeof VoiceServerUpdateFields>;
