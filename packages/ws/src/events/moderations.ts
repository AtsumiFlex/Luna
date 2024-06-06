import { AutoModerationActionStructure, AutoModerationRuleTriggerTypesEnum, Snowflake } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#auto-moderation-action-execution-auto-moderation-action-execution-event-fields}
 */
export const AutoModerationActionExecutionFields = z.object({
	/**
	 * ID of the guild in which action was executed
	 */
	guild_id: Snowflake,
	/**
	 * Auto moderation action object
	 */
	action: AutoModerationActionStructure,
	/**
	 * ID of the rule which action belongs to
	 */
	rule_id: Snowflake,
	/**
	 * Trigger type of rule which was triggered
	 */
	rule_trigger_type: AutoModerationRuleTriggerTypesEnum,
	/**
	 * ID of the user which generated the content which triggered the rule
	 */
	user_id: Snowflake,
	/**
	 * ID of the channel in which user content was posted
	 */
	channel_id: Snowflake.optional(),
	/**
	 * ID of any user message which content belongs to *
	 */
	message_id: Snowflake.optional(),
	/**
	 * ID of any system auto moderation messages posted as a result of this action **
	 */
	alert_system_message_id: Snowflake.optional(),
	/**
	 * User-generated text content
	 */
	content: z.string().optional().nullable(),
	/**
	 * Word or phrase configured in the rule that triggered the rule
	 */
	matched_keyword: z.string().optional(),
	/**
	 * Substring in content that triggered the rule
	 */
	matched_content: z.string().optional().nullable(),
});

export type AutoModerationActionExecutionFieldsInfer = z.infer<typeof AutoModerationActionExecutionFields>;
