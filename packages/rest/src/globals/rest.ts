import type { DiscordHeaders, JSONErrorCodes } from "@lunajs/core";
import type { Dispatcher } from "undici";

export type RestMakeRequestOptions<T> = Dispatcher.DispatchOptions & {
	headers?: DiscordHeaders;
	type?: T;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/rate-limits#exceeding-a-rate-limit-rate-limit-response-structure}
 */
export type RateLimitResponse = {
	/**
	 * An error code for some limits
	 */
	code?: JSONErrorCodes;
	/**
	 * A value indicating if you are being globally rate limited or not
	 */
	global: boolean;
	/**
	 * A message saying you are being rate limited.
	 */
	message: string;
	/**
	 * The number of seconds to wait before submitting another request.
	 */
	retry_after: number;
};
