import { Snowflake } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#webhooks-update-webhooks-update-event-fields}
 */
export const WebhooksUpdateFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
});

export type WebhooksUpdateFieldsInfer = z.infer<typeof WebhooksUpdateFields>;
