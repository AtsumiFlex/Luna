import { Snowflake } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#integration-delete-integration-delete-event-fields}
 */
export const IntegrationDeleteFields = z.object({
	/**
	 * Integration ID
	 */
	id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * ID of the bot/OAuth2 application for this discord integration
	 */
	application_id: Snowflake.optional(),
});

export type IntegrationDeleteFieldsInfer = z.infer<typeof IntegrationDeleteFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#integration-update-integration-update-event-additional-fields}
 */
export const IntegrationUpdateFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
});

export type IntegrationUpdateFieldsInfer = z.infer<typeof IntegrationUpdateFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#integration-create-integration-create-event-additional-fields}
 */
export const IntegrationCreateFields = z.object({
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
});

export type IntegrationCreateFieldsInfer = z.infer<typeof IntegrationCreateFields>;
