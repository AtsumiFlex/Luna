import type { SnowflakeInfer, StageInstanceStructureInfer } from "@lunajs/core";
import { Snowflake } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";
import type {
	CreateStageInstanceJSONInfer,
	ModifyStageInstanceJSONInfer,
} from "../libs/stages";
import {
	CreateStageInstanceJSON,
	ModifyStageInstanceJSON,
} from "../libs/stages";

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
