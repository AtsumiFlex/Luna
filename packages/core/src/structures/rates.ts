import { z } from "zod";
import { JSONErrorCodesEnum } from "../libs/opcodes";

/**
 * @see {@link https://discord.com/developers/docs/topics/rate-limits#exceeding-a-rate-limit-rate-limit-response-structure}
 */
export const RateLimitResponseStructure = z.object({
	/**
	 * A message saying you are being rate limited.
	 */
	message: z.string(),
	/**
	 * The number of seconds to wait before submitting another request.
	 */
	retry_after: z.number(),
	/**
	 * A value indicating if you are being globally rate limited or not
	 */
	global: z.boolean(),
	/**
	 * An error code for some limits
	 */
	code: JSONErrorCodesEnum.optional(),
});

export type RateLimitResponseStructureInfer = z.infer<typeof RateLimitResponseStructure>;
