import {
	AutoModerationActionStructure,
	AutoModerationRuleEventTypesEnum,
	AutoModerationRuleTriggerMetadata,
	AutoModerationRuleTriggerTypesEnum,
	Snowflake,
} from "@lunajs/core";
import { z } from "zod";

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
