import type { AutoModerationRuleStructureInfer, SnowflakeInfer } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";
import type {
	CreateAutoModerationRuleJSONInfer,
	ModifyAutoModerationRuleJSONInfer,
} from "../libs/moderations";
import {
	CreateAutoModerationRuleJSON,
	ModifyAutoModerationRuleJSON,
} from "../libs/moderations";

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#list-auto-moderation-rules-for-guild}
 */
export function ListAutoModerationRules(guildId: SnowflakeInfer): RestMakeRequestOptions<AutoModerationRuleStructureInfer[]> {
	return {
		method: "GET",
		path: `/guilds/${guildId}/auto-moderation/rules`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#get-auto-moderation-rule}
 */
export function GetAutoModerationRule(guildId: SnowflakeInfer, ruleId: SnowflakeInfer): RestMakeRequestOptions<AutoModerationRuleStructureInfer> {
	return {
		method: "GET",
		path: `/guilds/${guildId}/auto-moderation/rules/${ruleId}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule}
 */
export function CreateAutoModerationRule(guildId: SnowflakeInfer, reason: string, json: CreateAutoModerationRuleJSONInfer): RestMakeRequestOptions<AutoModerationRuleStructureInfer> {
	return {
		method: "POST",
		path: `/guilds/${guildId}/auto-moderation/rules`,
		body: JSON.stringify(CreateAutoModerationRuleJSON.parse(json)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule}
 */
export function ModifyAutoModerationRule(guildId: SnowflakeInfer, ruleId: SnowflakeInfer, reason: string, json: ModifyAutoModerationRuleJSONInfer): RestMakeRequestOptions<AutoModerationRuleStructureInfer> {
	return {
		method: "PATCH",
		path: `/guilds/${guildId}/auto-moderation/rules/${ruleId}`,
		body: JSON.stringify(ModifyAutoModerationRuleJSON.parse(json)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#delete-auto-moderation-rule}
 */
export function DeleteAutoModerationRule(guildId: SnowflakeInfer, ruleId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/guilds/${guildId}/auto-moderation/rules/${ruleId}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}
