import { Integer } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#resume-resume-structure}
 */
export const GatewayResumeStructure = z.object({
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

export type GatewayResumeStructureInfer = z.infer<typeof GatewayResumeStructure>;
