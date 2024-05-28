import { z } from "zod";
import { Snowflake } from "../globals/formats";
import { GuildStructure } from "./guilds";
import { UserStructure } from "./users";

/**
 * Enumeration of webhook types.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types}
 */
export enum WebhookTypes {
	/**
	 * Incoming Webhooks can post messages to channels with a generated token.
	 *
	 * @example
	 * const webhookType = WebhookTypes.Incoming;
	 * console.log(webhookType); // Output: 1
	 */
	Incoming = 1,
	/**
	 * Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels.
	 *
	 * @example
	 * const webhookType = WebhookTypes.ChannelFollower;
	 * console.log(webhookType); // Output: 2
	 */
	ChannelFollower = 2,
	/**
	 * Application webhooks are webhooks used with Interactions.
	 *
	 * @example
	 * const webhookType = WebhookTypes.Application;
	 * console.log(webhookType); // Output: 3
	 */
	Application = 3,
}

/**
 * Zod schema for webhook types enumeration.
 * This schema is used for validating {@link WebhookTypes} values.
 *
 * @example
 * const isValidWebhookType = WebhookTypesEnum.safeParse(WebhookTypes.Incoming).success;
 */
export const WebhookTypesEnum = z.nativeEnum(WebhookTypes);

/**
 * Structure for Webhooks.
 *
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure}
 */
export const WebhookStructure = z.object({
	/**
	 * The ID of the webhook.
	 *
	 * @example
	 * const webhook = { id: "123456789012345678" };
	 */
	id: Snowflake,
	/**
	 * The type of the webhook.
	 *
	 * @example
	 * const webhook = { type: WebhookTypes.Incoming };
	 */
	type: WebhookTypesEnum,
	/**
	 * The guild ID this webhook is for, if any.
	 *
	 * @example
	 * const webhook = { guild_id: "123456789012345678" };
	 */
	guild_id: Snowflake.optional().nullable(),
	/**
	 * The channel ID this webhook is for, if any.
	 *
	 * @example
	 * const webhook = { channel_id: "123456789012345678" };
	 */
	channel_id: Snowflake.nullable(),
	/**
	 * The user this webhook was created by (not returned when getting a webhook with its token).
	 *
	 * @example
	 * const webhook = { user: { id: "123456789012345678", username: "User" } };
	 */
	user: UserStructure.optional(),
	/**
	 * The default name of the webhook.
	 *
	 * @example
	 * const webhook = { name: "Webhook" };
	 */
	name: z.string().nullable(),
	/**
	 * The default user avatar hash of the webhook.
	 *
	 * @example
	 * const webhook = { avatar: "abcdef1234567890" };
	 */
	avatar: z.string().nullable(),
	/**
	 * The secure token of the webhook (returned for Incoming Webhooks).
	 *
	 * @example
	 * const webhook = { token: "abcdef1234567890" };
	 */
	token: z.string().optional(),
	/**
	 * The bot/OAuth2 application that created this webhook.
	 *
	 * @example
	 * const webhook = { application_id: "123456789012345678" };
	 */
	application_id: Snowflake.nullable(),
	/**
	 * The guild of the channel that this webhook is following (returned for Channel Follower Webhooks).
	 *
	 * @example
	 * const webhook = { source_guild: { id: "123456789012345678", name: "Guild" } };
	 */
	source_guild: GuildStructure.partial().optional(),
	/**
	 * The channel that this webhook is following (returned for Channel Follower Webhooks).
	 *
	 * @example
	 * const webhook = { source_channel: {} };
	 */
	source_channel: z.unknown().optional(),
	/**
	 * The URL used for executing the webhook (returned by the webhooks OAuth2 flow).
	 *
	 * @example
	 * const webhook = { url: "https://discord.com/api/webhooks/123456789012345678/abcdef1234567890" };
	 */
	url: z.string().url().optional(),
});

/**
 * Inferred type for WebhookStructure.
 *
 * @example
 * const webhook: WebhookStructureInfer = {
 *   id: "123456789012345678",
 *   type: WebhookTypes.Incoming,
 *   guild_id: "123456789012345678",
 *   channel_id: "123456789012345678",
 *   user: { id: "123456789012345678", username: "User" },
 *   name: "Webhook",
 *   avatar: "abcdef1234567890",
 *   token: "abcdef1234567890",
 *   application_id: "123456789012345678",
 *   source_guild: { id: "123456789012345678", name: "Guild" },
 *   source_channel: {},
 *   url: "https://discord.com/api/webhooks/123456789012345678/abcdef1234567890",
 * };
 */
export type WebhookStructureInfer = z.infer<typeof WebhookStructure>;
