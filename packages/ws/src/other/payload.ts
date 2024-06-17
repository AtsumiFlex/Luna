import { GatewayOpcodesEnum, Integer } from "@lunajs/core";
import { z } from "zod";

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
	s: Integer.optional(),
	/**
	 * Event name
	 */
	t: z.string().optional(),
});

export type GatewayPayloadInfer = z.infer<typeof GatewayPayload>;
