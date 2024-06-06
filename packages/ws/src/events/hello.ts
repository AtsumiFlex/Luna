import { Integer } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#hello-hello-structure}
 */
export const Hello = z.object({
	/**
	 * Interval (in milliseconds) an app should heartbeat with
	 */
	heartbeat_interval: Integer,
});

export type HelloInfer = z.infer<typeof Hello>;
