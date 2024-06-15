import { z } from "zod";
import { Snowflake } from "../globals/formats";
import { ChannelStructure } from "./channels";
import { GuildStructure } from "./guilds";
import { UserStructure } from "./users";

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types}
 */
export enum WebhookTypes {
	/**
	 * Incoming Webhooks can post messages to channels with a generated token
	 */
	Incoming = 1,
	/**
	 * Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels
	 */
	ChannelFollower = 2,
	/**
	 * Application webhooks are webhooks used with Interactions
	 */
	Application = 3,
}

export const WebhookTypesEnum = z.nativeEnum(WebhookTypes);

/**
 * @see {@link https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure}
 */
export const WebhookStructure = z.object({
	/**
	 * The id of the webhook
	 */
	id: Snowflake,
	/**
	 * The type of the webhook
	 */
	type: WebhookTypesEnum,
	/**
	 * The guild id this webhook is for, if any
	 */
	guild_id: Snowflake.optional().nullable(),
	/**
	 * The channel id this webhook is for, if any
	 */
	channel_id: Snowflake.optional().nullable(),
	/**
	 * The user this webhook was created by (not returned when getting a webhook with its token)
	 */
	user: UserStructure.optional(),
	/**
	 * The default name of the webhook
	 */
	name: z.string().nullable(),
	/**
	 * The default user avatar hash of the webhook
	 */
	avatar: z.string().nullable(),
	/**
	 * The secure token of the webhook (returned for Incoming Webhooks)
	 */
	token: z.string().optional(),
	/**
	 * The bot/OAuth2 application that created this webhook
	 */
	application_id: Snowflake.nullable(),
	/**
	 * The guild of the channel that this webhook is following (returned for Channel Follower Webhooks)
	 */
	source_guild: GuildStructure.pick({
		id: true,
		name: true,
		icon: true,
	}).optional(),
	/**
	 * The channel that this webhook is following (returned for Channel Follower Webhooks)
	 */
	source_channel: ChannelStructure.pick({
		id: true,
		name: true,
	}).optional(),
	/**
	 * The url used for executing the webhook (returned by the webhooks OAuth2 flow)
	 */
	url: z.string().optional(),
});

export type WebhookStructureInfer = z.infer<typeof WebhookStructure>;
