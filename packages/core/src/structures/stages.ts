import { z } from "zod";
import { Snowflake } from "../globals/formats";

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level}
 */
export enum StagePrivacyLevels {
	/**
	 * The Stage instance is visible publicly. (deprecated)
	 *
	 * @deprecated
	 */
	Public = 1,
	/**
	 * The Stage instance is visible to only guild members.
	 */
	GuildOnly = 2,
}

export const StagePrivacyLevelsEnum = z.nativeEnum(StagePrivacyLevels);

/**
 * @see {@link https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-stage-instance-structure}
 */
export const StageInstanceStructure = z.object({
	/**
	 * The id of this Stage instance
	 */
	id: Snowflake,
	/**
	 * The guild id of the associated Stage channel
	 */
	guild_id: Snowflake,
	/**
	 * The id of the associated Stage channel
	 */
	channel_id: Snowflake,
	/**
	 * The topic of the Stage instance (1-120 characters)
	 */
	topic: z.string().min(1).max(120),
	/**
	 * The privacy level of the Stage instance
	 */
	privacy_level: StagePrivacyLevelsEnum,
	/**
	 * Whether or not Stage Discovery is disabled (deprecated)
	 *
	 * @deprecated
	 */
	discoverable_disabled: z.boolean().optional(),
	/**
	 * The id of the scheduled event for this Stage instance
	 */
	guild_scheduled_event_id: Snowflake.nullable(),
});

export type StageInstanceStructureInfer = z.infer<typeof StageInstanceStructure>;
