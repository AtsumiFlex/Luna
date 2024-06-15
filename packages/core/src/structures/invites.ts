import { z } from "zod";
import { Integer } from "../globals/formats";
import { ApplicationStructure } from "./applications";
import { ChannelStructure } from "./channels";
import { GuildMemberStructure, GuildScheduledEventStructure, GuildStructure } from "./guilds";
import { UserStructure } from "./users";

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-stage-instance-object-invite-stage-instance-structure}
 */
export const InviteStageInstanceStructure = z.object({
	/**
	 * The members speaking in the Stage
	 */
	members: z.array(GuildMemberStructure.pick({
		roles: true,
		nick: true,
		avatar: true,
		premium_since: true,
		joined_at: true,
		pending: true,
		user: true,
	})),
	/**
	 * The number of users in the Stage
	 */
	participant_count: Integer,
	/**
	 * The number of users speaking in the Stage
	 */
	speaker_count: Integer,
	/**
	 * The topic of the Stage instance (1-120 characters)
	 */
	topic: z.string().min(1).max(120),
});

export type InviteStageInstanceStructureInfer = z.infer<typeof InviteStageInstanceStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-metadata-object-invite-metadata-structure}
 */
export const InviteMetadataStructure = z.object({
	/**
	 * Number of times this invite has been used
	 */
	uses: Integer,
	/**
	 * Max number of times this invite can be used
	 */
	max_uses: Integer,
	/**
	 * Duration (in seconds) after which the invite expires
	 */
	max_age: Integer,
	/**
	 * Whether this invite only grants temporary membership
	 */
	temporary: z.boolean(),
	/**
	 * When this invite was created
	 */
	created_at: z.string(),
});

export type InviteMetadataStructureInfer = z.infer<typeof InviteMetadataStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types}
 */
export enum InviteTargetTypes {
	Stream = 1,
	EmbeddedApplication = 2,
}

export const InviteTargetTypesEnum = z.nativeEnum(InviteTargetTypes);

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-object-invite-types}
 */
export enum InviteTypes {
	Guild = 0,
	GroupDM = 1,
	Friend = 2,
}

export const InviteTypesEnum = z.nativeEnum(InviteTypes);

/**
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-object-invite-structure}
 */
export const InviteStructure = z.object({
	/**
	 * The type of invite
	 */
	type: InviteTypesEnum,
	/**
	 * The invite code (unique ID)
	 */
	code: z.string(),
	/**
	 * The guild this invite is for
	 */
	guild: GuildStructure.pick({
		id: true,
		name: true,
		splash: true,
		banner: true,
		description: true,
		icon: true,
		features: true,
		verification_level: true,
		vanity_url_code: true,
		nsfw_level: true,
		premium_subscription_count: true,
	}).optional(),
	/**
	 * The channel this invite is for
	 */
	channel: ChannelStructure.pick({
		id: true,
		name: true,
		type: true,
	}).nullable(),
	/**
	 * The user who created the invite
	 */
	inviter: UserStructure.optional(),
	/**
	 * The type of target for this voice channel invite
	 */
	target_type: InviteTargetTypesEnum.optional(),
	/**
	 * The user whose stream to display for this voice channel stream invite
	 */
	target_user: UserStructure.optional(),
	/**
	 * The embedded application to open for this voice channel embedded application invite
	 */
	target_application: ApplicationStructure.partial().optional(),
	/**
	 * Approximate count of online members, returned from the GET /invites/<code> endpoint when with_counts is true
	 */
	approximate_presence_count: Integer.optional(),
	/**
	 * Approximate count of total members, returned from the GET /invites/<code> endpoint when with_counts is true
	 */
	approximate_member_count: Integer.optional(),
	/**
	 * The expiration date of this invite, returned from the GET /invites/<code> endpoint when with_expiration is true
	 */
	expires_at: z.string().optional().nullable(),
	/**
	 * Stage instance data if there is a public Stage instance in the Stage channel this invite is for (deprecated)
	 */
	stage_instance: InviteStageInstanceStructure.optional(),
	/**
	 * Guild scheduled event data, only included if guild_scheduled_event_id contains a valid guild scheduled event id
	 */
	guild_scheduled_event: GuildScheduledEventStructure.optional(),
});

export type InviteStructureInfer = z.infer<typeof InviteStructure>;
