import type { SnowflakeInfer, StageInstanceStructureInfer } from "@lunajs/core";
import { Snowflake, StagePrivacyLevelEnum } from "@lunajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

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
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#create-stage-instance}
 */
export function CreateStageInstance(reason: string, data: CreateStageInstanceJSONInfer): RestMakeRequestOptions<StageInstanceStructureInfer> {
	return {
		method: "POST",
		path: "/stage-instances",
		body: JSON.stringify(CreateStageInstanceJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#get-stage-instance}
 */
export function GetStageInstance(stageId: SnowflakeInfer): RestMakeRequestOptions<StageInstanceStructureInfer> {
	return {
		method: "GET",
		path: `/stage-instances/${Snowflake.parse(stageId)}`,
	};
}

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

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance}
 */
export function ModifyStageInstance(stageId: SnowflakeInfer, reason: string, data: ModifyStageInstanceJSONInfer): RestMakeRequestOptions<StageInstanceStructureInfer> {
	return {
		method: "PATCH",
		path: `/stage-instances/${Snowflake.parse(stageId)}`,
		body: JSON.stringify(ModifyStageInstanceJSON.parse(data)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#delete-stage-instance}
 */
export function DeleteStageInstance(stageId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/stage-instances/${Snowflake.parse(stageId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}
