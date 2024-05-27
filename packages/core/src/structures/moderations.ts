import { z } from "zod";
import { Integer, Snowflake } from "../globals/formats";

/**
 * Schema for Auto Moderation Action Metadata.
 * Represents the metadata needed during execution for a specific auto moderation action type.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata}
 */
export const AutoModerationActionMetadata = z.object({
	/**
	 * The channel to which user content should be logged.
	 *
	 * @example
	 * const metadata = { channel_id: "123456789012345678" };
	 */
	channel_id: Snowflake,
	/**
	 * Timeout duration in seconds.
	 *
	 * @example
	 * const metadata = { duration_seconds: 3600 };
	 */
	duration_seconds: Integer.max(2_419_200),
	/**
	 * Additional explanation that will be shown to members whenever their message is blocked.
	 *
	 * @example
	 * const metadata = { custom_message: "Your message was blocked due to inappropriate content." };
	 */
	custom_message: z.string().max(150).optional(),
});

/**
 * Inferred type for Auto Moderation Action Metadata schema.
 *
 * @example
 * const metadata: AutoModerationActionMetadataInfer = {
 *   channel_id: "123456789012345678",
 *   duration_seconds: 3600,
 *   custom_message: "Your message was blocked due to inappropriate content.",
 * };
 */
export type AutoModerationActionMetadataInfer = z.infer<typeof AutoModerationActionMetadata>;

/**
 * Enumeration of auto moderation action types.
 * Represents the types of actions that can be taken by auto moderation.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types}
 */
export enum AutoModerationActionTypes {
	/**
	 * Blocks a member's message and prevents it from being posted.
	 *
	 * @example
	 * const actionType = AutoModerationActionTypes.BlockMessage;
	 * console.log(actionType); // Output: 1
	 */
	BlockMessage = 1,
	/**
	 * Logs user content to a specified channel.
	 *
	 * @example
	 * const actionType = AutoModerationActionTypes.SendAlertMessage;
	 * console.log(actionType); // Output: 2
	 */
	SendAlertMessage = 2,
	/**
	 * Timeout user for a specified duration.
	 *
	 * @example
	 * const actionType = AutoModerationActionTypes.Timeout;
	 * console.log(actionType); // Output: 3
	 */
	Timeout = 3,
}

/**
 * Zod schema for auto moderation action types enumeration.
 * This schema is used for validating {@link AutoModerationActionTypes} values.
 *
 * @example
 * const isValidActionType = AutoModerationActionTypesEnum.safeParse(AutoModerationActionTypes.BlockMessage).success;
 */
export const AutoModerationActionTypesEnum = z.nativeEnum(AutoModerationActionTypes);

/**
 * Schema for the Auto Moderation Action Structure.
 * Represents the structure of an auto moderation action object.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure}
 */
export const AutoModerationActionStructure = z.object({
	/**
	 * The type of action.
	 *
	 * @example
	 * const action = { type: AutoModerationActionTypes.BlockMessage };
	 */
	type: AutoModerationActionTypesEnum,
	/**
	 * Additional metadata needed during execution for this specific action type.
	 *
	 * @example
	 * const action = { metadata: { channel_id: "123456789012345678", duration_seconds: 3600, custom_message: "Your message was blocked due to inappropriate content." } };
	 */
	metadata: AutoModerationActionMetadata.optional(),
});

/**
 * Inferred type for the Auto Moderation Action Structure schema.
 *
 * @example
 * const action: AutoModerationActionStructureInfer = {
 *   type: AutoModerationActionTypes.BlockMessage,
 *   metadata: { channel_id: "123456789012345678", duration_seconds: 3600, custom_message: "Your message was blocked due to inappropriate content." },
 * };
 */
export type AutoModerationActionStructureInfer = z.infer<typeof AutoModerationActionStructure>;

/**
 * Enumeration of auto moderation rule event types.
 * Represents the types of events that can trigger an auto moderation rule.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types}
 */
export enum AutoModerationRuleEventTypes {
	/**
	 * When a member sends or edits a message in the guild.
	 *
	 * @example
	 * const eventType = AutoModerationRuleEventTypes.MessageSend;
	 * console.log(eventType); // Output: 1
	 */
	MessageSend = 1,
}

/**
 * Zod schema for auto moderation rule event types enumeration.
 * This schema is used for validating {@link AutoModerationRuleEventTypes} values.
 *
 * @example
 * const isValidEventType = AutoModerationRuleEventTypesEnum.safeParse(AutoModerationRuleEventTypes.MessageSend).success;
 */
export const AutoModerationRuleEventTypesEnum = z.nativeEnum(AutoModerationRuleEventTypes);

/**
 * Enumeration of auto moderation rule keyword preset types.
 * Represents the types of keyword presets that can be used in auto moderation rules.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types}
 */
export enum AutoModerationRuleKeywordPresetTypes {
	/**
	 * Words that may be considered forms of swearing or cursing.
	 *
	 * @example
	 * const presetType = AutoModerationRuleKeywordPresetTypes.Profanity;
	 * console.log(presetType); // Output: 1
	 */
	Profanity = 1,
	/**
	 * Words that refer to sexually explicit behavior or activity.
	 *
	 * @example
	 * const presetType = AutoModerationRuleKeywordPresetTypes.SexualContent;
	 * console.log(presetType); // Output: 2
	 */
	SexualContent = 2,
	/**
	 * Personal insults or words that may be considered hate speech.
	 *
	 * @example
	 * const presetType = AutoModerationRuleKeywordPresetTypes.Slurs;
	 * console.log(presetType); // Output: 3
	 */
	Slurs = 3,
}

/**
 * Zod schema for auto moderation rule keyword preset types enumeration.
 * This schema is used for validating {@link AutoModerationRuleKeywordPresetTypes} values.
 *
 * @example
 * const isValidPresetType = AutoModerationRuleKeywordPresetTypesEnum.safeParse(AutoModerationRuleKeywordPresetTypes.Profanity).success;
 */
export const AutoModerationRuleKeywordPresetTypesEnum = z.nativeEnum(AutoModerationRuleKeywordPresetTypes);

/**
 * Schema for Auto Moderation Rule Trigger Metadata.
 * Represents the metadata needed to trigger an auto moderation rule.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata}
 */
export const AutoModerationRuleTriggerMetadata = z.object({
	/**
	 * Substrings which will be searched for in content (Maximum of 1000).
	 *
	 * @example
	 * const metadata = { keyword_filter: ["badword"] };
	 */
	keyword_filter: z.array(z.string()).max(1_000).optional(),
	/**
	 * Regular expression patterns which will be matched against content (Maximum of 10).
	 *
	 * @example
	 * const metadata = { regex_patterns: ["^badword$"] };
	 */
	regex_patterns: z.array(z.string()).max(10).optional(),
	/**
	 * The internally pre-defined wordsets which will be searched for in content.
	 *
	 * @example
	 * const metadata = { presets: [AutoModerationRuleKeywordPresetTypes.Profanity] };
	 */
	presets: z.array(AutoModerationRuleKeywordPresetTypesEnum).optional(),
	/**
	 * Substrings which should not trigger the rule (Maximum of 100).
	 *
	 * @example
	 * const metadata = { allow_list: ["goodword"] };
	 */
	allow_list: z.array(z.string()).max(100).optional(),
	/**
	 * Total number of unique role and user mentions allowed per message (Maximum of 50).
	 *
	 * @example
	 * const metadata = { mention_total_limit: 5 };
	 */
	mention_total_limit: Integer.max(50).optional(),
	/**
	 * Whether to automatically detect mention raids.
	 *
	 * @example
	 * const metadata = { mention_raid_protection_enabled: true };
	 */
	mention_raid_protection_enabled: z.boolean().optional(),
});

/**
 * Inferred type for Auto Moderation Rule Trigger Metadata schema.
 *
 * @example
 * const metadata: AutoModerationRuleTriggerMetadataInfer = {
 *   keyword_filter: ["badword"],
 *   regex_patterns: ["^badword$"],
 *   presets: [AutoModerationRuleKeywordPresetTypes.Profanity],
 *   allow_list: ["goodword"],
 *   mention_total_limit: 5,
 *   mention_raid_protection_enabled: true,
 * };
 */
export type AutoModerationRuleTriggerMetadataInfer = z.infer<typeof AutoModerationRuleTriggerMetadata>;

/**
 * Enumeration of auto moderation rule trigger types.
 * Represents the types of triggers that can activate an auto moderation rule.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types}
 */
export enum AutoModerationRuleTriggerTypes {
	/**
	 * Check if content contains words from a user defined list of keywords.
	 *
	 * @example
	 * const triggerType = AutoModerationRuleTriggerTypes.Keyword;
	 * console.log(triggerType); // Output: 1
	 */
	Keyword = 1,
	/**
	 * Check if content represents generic spam.
	 *
	 * @example
	 * const triggerType = AutoModerationRuleTriggerTypes.Spam;
	 * console.log(triggerType); // Output: 3
	 */
	Spam = 3,
	/**
	 * Check if content contains words from internal pre-defined wordsets.
	 *
	 * @example
	 * const triggerType = AutoModerationRuleTriggerTypes.KeywordPreset;
	 * console.log(triggerType); // Output: 4
	 */
	KeywordPreset = 4,
	/**
	 * Check if content contains more unique mentions than allowed.
	 *
	 * @example
	 * const triggerType = AutoModerationRuleTriggerTypes.MentionSpam;
	 * console.log(triggerType); // Output: 5
	 */
	MentionSpam = 5,
}

/**
 * Zod schema for auto moderation rule trigger types enumeration.
 * This schema is used for validating {@link AutoModerationRuleTriggerTypes} values.
 *
 * @example
 * const isValidTriggerType = AutoModerationRuleTriggerTypesEnum.safeParse(AutoModerationRuleTriggerTypes.Keyword).success;
 */
export const AutoModerationRuleTriggerTypesEnum = z.nativeEnum(AutoModerationRuleTriggerTypes);

/**
 * Schema for the Auto Moderation Rule Structure.
 * Represents the structure of an auto moderation rule object.
 *
 * @see {@link https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure}
 */
export const AutoModerationRuleStructure = z.object({
	/**
	 * The ID of this rule.
	 *
	 * @example
	 * const rule = { id: "123456789012345678" };
	 */
	id: Snowflake,
	/**
	 * The ID of the guild which this rule belongs to.
	 *
	 * @example
	 * const rule = { guild_id: "123456789012345678" };
	 */
	guild_id: Snowflake,
	/**
	 * The rule name.
	 *
	 * @example
	 * const rule = { name: "No Profanity" };
	 */
	name: z.string(),
	/**
	 * The user which first created this rule.
	 *
	 * @example
	 * const rule = { creator_id: "123456789012345678" };
	 */
	creator_id: Snowflake,
	/**
	 * The rule event type.
	 *
	 * @example
	 * const rule = { event_type: AutoModerationRuleEventTypes.MessageSend };
	 */
	event_type: AutoModerationRuleEventTypesEnum,
	/**
	 * The rule trigger type.
	 *
	 * @example
	 * const rule = { trigger_type: AutoModerationRuleTriggerTypes.Keyword };
	 */
	trigger_type: AutoModerationRuleTriggerTypesEnum,
	/**
	 * The rule trigger metadata.
	 *
	 * @example
	 * const rule = { trigger_metadata: { keyword_filter: ["badword"], presets: [AutoModerationRuleKeywordPresetTypes.Profanity] } };
	 */
	trigger_metadata: AutoModerationRuleTriggerMetadata,
	/**
	 * The actions which will execute when the rule is triggered.
	 *
	 * @example
	 * const rule = { actions: [{ type: AutoModerationActionTypes.BlockMessage }] };
	 */
	actions: z.array(AutoModerationActionStructure),
	/**
	 * Whether the rule is enabled.
	 *
	 * @example
	 * const rule = { enabled: true };
	 */
	enabled: z.boolean(),
	/**
	 * The role IDs that should not be affected by the rule (Maximum of 20).
	 *
	 * @example
	 * const rule = { exempt_roles: ["123456789012345678", "987654321098765432"] };
	 */
	exempt_roles: z.array(Snowflake).max(20),
	/**
	 * The channel IDs that should not be affected by the rule (Maximum of 50).
	 *
	 * @example
	 * const rule = { exempt_channels: ["123456789012345678", "987654321098765432"] };
	 */
	exempt_channels: z.array(Snowflake).max(50),
});

/**
 * Inferred type for the Auto Moderation Rule Structure schema.
 *
 * @example
 * const rule: AutoModerationRuleStructureInfer = {
 *   id: "123456789012345678",
 *   guild_id: "123456789012345678",
 *   name: "No Profanity",
 *   creator_id: "123456789012345678",
 *   event_type: AutoModerationRuleEventTypes.MessageSend,
 *   trigger_type: AutoModerationRuleTriggerTypes.Keyword,
 *   trigger_metadata: { keyword_filter: ["badword"], presets: [AutoModerationRuleKeywordPresetTypes.Profanity] },
 *   actions: [{ type: AutoModerationActionTypes.BlockMessage }],
 *   enabled: true,
 *   exempt_roles: ["123456789012345678", "987654321098765432"],
 *   exempt_channels: ["123456789012345678", "987654321098765432"],
 * };
 */
export type AutoModerationRuleStructureInfer = z.infer<typeof AutoModerationRuleStructure>;
