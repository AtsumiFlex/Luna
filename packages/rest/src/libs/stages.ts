import { Snowflake, StagePrivacyLevelEnum } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#create-stage-instance-json-params}
 */
export const CreateStageInstanceJSON = z.object({
	/**
	 * The id of the Stage channel
	 */
	channel_id: Snowflake,
	/**
	 * The topic of the Stage instance (1-120 characters)
	 */
	topic: z.string().min(1).max(120),
	/**
	 * The privacy level of the Stage instance (default GUILD_ONLY)
	 */
	privacy_level: StagePrivacyLevelEnum.optional(),
	/**
	 * Notify @everyone that a Stage instance has started
	 */
	send_start_notification: z.boolean().optional(),
	/**
	 * The guild scheduled event associated with this Stage instance
	 */
	guild_scheduled_event_id: Snowflake.optional(),
});

export type CreateStageInstanceJSONInfer = z.infer<typeof CreateStageInstanceJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance-json-params}
 */
export const ModifyStageInstanceJSON = z.object({
	/**
	 * The topic of the Stage instance (1-120 characters)
	 */
	topic: z.string().min(1).max(120).optional(),
	/**
	 * The privacy level of the Stage instance
	 */
	privacy_level: StagePrivacyLevelEnum.optional(),
});

export type ModifyStageInstanceJSONInfer = z.infer<typeof ModifyStageInstanceJSON>;
