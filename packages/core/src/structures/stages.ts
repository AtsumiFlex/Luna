import { z } from "zod";
import { Snowflake } from "../globals/formats";

/**
 * Enumeration of Stage privacy levels.
 * Represents the privacy levels that a Stage instance can have.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level}
 */
export enum StagePrivacyLevel {
	/**
	 * The Stage instance is visible publicly.
	 *
	 * @example
	 * const privacyLevel = StagePrivacyLevel.Public;
	 * console.log(privacyLevel); // Output: 1
	 */
	Public = 1,
	/**
	 * The Stage instance is visible to only guild members.
	 *
	 * @example
	 * const privacyLevel = StagePrivacyLevel.GuildOnly;
	 * console.log(privacyLevel); // Output: 2
	 */
	GuildOnly = 2,
}

/**
 * Zod schema for Stage privacy level enumeration.
 * This schema is used for validating {@link StagePrivacyLevel} values.
 *
 * @example
 * const isValidPrivacyLevel = StagePrivacyLevelEnum.safeParse(StagePrivacyLevel.Public).success;
 */
export const StagePrivacyLevelEnum = z.nativeEnum(StagePrivacyLevel);

/**
 * Schema for the Stage Instance Structure.
 * Represents the structure of a Stage instance object.
 *
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure}
 */
export const StageInstanceStructure = z.object({
	/**
	 * The ID of this Stage instance.
	 *
	 * @example
	 * const stageInstance = { id: "123456789012345678" };
	 */
	id: Snowflake,
	/**
	 * The guild ID of the associated Stage channel.
	 *
	 * @example
	 * const stageInstance = { guild_id: "123456789012345678" };
	 */
	guild_id: Snowflake,
	/**
	 * The ID of the associated Stage channel.
	 *
	 * @example
	 * const stageInstance = { channel_id: "123456789012345678" };
	 */
	channel_id: Snowflake,
	/**
	 * The topic of the Stage instance (1-120 characters).
	 *
	 * @example
	 * const stageInstance = { topic: "Discussion about new features" };
	 */
	topic: z.string().min(1).max(120),
	/**
	 * The privacy level of the Stage instance.
	 *
	 * @example
	 * const stageInstance = { privacy_level: StagePrivacyLevel.GuildOnly };
	 */
	privacy_level: StagePrivacyLevelEnum,
	/**
	 * Whether or not Stage Discovery is disabled (deprecated).
	 *
	 * @example
	 * const stageInstance = { discoverable_disabled: true };
	 */
	discoverable_disabled: z.boolean(),
	/**
	 * The ID of the scheduled event for this Stage instance.
	 *
	 * @example
	 * const stageInstance = { guild_scheduled_event_id: "123456789012345678" };
	 */
	guild_scheduled_event_id: Snowflake.nullable(),
});

/**
 * Inferred type for the Stage Instance Structure schema.
 *
 * @example
 * const stageInstance: StageInstanceStructureInfer = {
 *   id: "123456789012345678",
 *   guild_id: "123456789012345678",
 *   channel_id: "123456789012345678",
 *   topic: "Discussion about new features",
 *   privacy_level: StagePrivacyLevel.GuildOnly,
 *   discoverable_disabled: true,
 *   guild_scheduled_event_id: "123456789012345678",
 * };
 */
export type StageInstanceStructureInfer = z.infer<typeof StageInstanceStructure>;
