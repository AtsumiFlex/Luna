import type { AutoModerationRuleStructureInfer, SnowflakeInfer } from "@lunajs/core";
import {
	AutoModerationActionStructure,
	AutoModerationRuleEventTypesEnum,
	AutoModerationRuleTriggerMetadata,
	AutoModerationRuleTriggerTypesEnum,
	Snowflake,
} from "@lunajs/core";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

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
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule-json-params}
 */
export const CreateAutoModerationRuleJSON = z.object({
	/**
	 * The rule name
	 */
	name: z.string(),
	/**
	 * The event type
	 */
	event_type: AutoModerationRuleEventTypesEnum,
	/**
	 * The trigger type
	 */
	trigger_type: AutoModerationRuleTriggerTypesEnum,
	/**
	 * The trigger metadata
	 */
	trigger_metadata: AutoModerationRuleTriggerMetadata,
	/**
	 * The actions which will execute when the rule is triggered
	 */
	actions: z.array(AutoModerationActionStructure),
	/**
	 * Whether the rule is enabled
	 */
	enabled: z.boolean().optional(),
	/**
	 * The role ids that should not be affected by the rule
	 */
	exempt_roles: z.array(Snowflake).max(20).optional(),
	/**
	 * The channel ids that should not be affected by the rule
	 */
	exempt_channels: z.array(Snowflake).max(50).optional(),
});

export type CreateAutoModerationRuleJSONInfer = z.infer<typeof CreateAutoModerationRuleJSON>;

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
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule-json-params}
 */
export const ModifyAutoModerationRuleJSON = z.object({
	/**
	 * The rule name
	 */
	name: z.string().optional(),
	/**
	 * The event type
	 */
	event_type: AutoModerationRuleEventTypesEnum.optional(),
	/**
	 * The trigger metadata
	 */
	trigger_metadata: z.any().optional(),
	/**
	 * The actions which will execute when the rule is triggered
	 */
	actions: z.array(AutoModerationActionStructure).optional(),
	/**
	 * Whether the rule is enabled
	 */
	enabled: z.boolean().optional(),
	/**
	 * The role ids that should not be affected by the rule
	 */
	exempt_roles: z.array(Snowflake).max(20).optional(),
	/**
	 * The channel ids that should not be affected by the rule
	 */
	exempt_channels: z.array(Snowflake).max(50).optional(),
});

export type ModifyAutoModerationRuleJSONInfer = z.infer<typeof ModifyAutoModerationRuleJSON>;

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
