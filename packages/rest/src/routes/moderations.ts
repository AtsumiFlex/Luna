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
