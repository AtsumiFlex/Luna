import { ApiVersionsEnum, ApplicationStructure, Integer, UserStructure } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#ready-ready-event-fields}
 */
export const ReadyFields = z.object({
	/**
	 * API version
	 */
	v: ApiVersionsEnum,
	/**
	 * Information about the user including email
	 */
	user: UserStructure,
	/**
	 * Guilds the user is in
	 */
	guilds: z.array(z.object({
		id: z.string(),
		unavailable: z.boolean(),
	})),
	/**
	 * Used for resuming connections
	 */
	session_id: z.string(),
	/**
	 * Gateway URL for resuming connections
	 */
	resume_gateway_url: z.string(),
	/**
	 * Shard information associated with this session, if sent when identifying
	 */
	shard: z.array(Integer, Integer).max(2).optional(),
	/**
	 * Contains id and flags
	 */
	application: ApplicationStructure.partial(),
});

export type ReadyFieldsInfer = z.infer<typeof ReadyFields>;
