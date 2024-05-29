import { z } from "zod";
import { Integer, ISO8601Timestamp } from "../globals/formats";
import { ApplicationStructure } from "./applications";
import { ChannelStructure } from "./channels";
import { GuildMemberStructure, GuildScheduledEventStructure, GuildStructure } from "./guilds";
import { UserStructure } from "./users";

/**
 * Structure for Invite Stage Instance.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-stage-instance-object-invite-stage-instance-structure}
 */
export const InviteStageInstanceStructure = z.object({
	/**
	 * The members speaking in the Stage.
	 *
	 * @example
	 * const stageInstance = { members: [{ user: { id: "123456789012345678", username: "User" } }] };
	 */
	members: z.array(GuildMemberStructure.partial()),
	/**
	 * The number of users in the Stage.
	 *
	 * @example
	 * const stageInstance = { participant_count: 10 };
	 */
	participant_count: Integer,
	/**
	 * The number of users speaking in the Stage.
	 *
	 * @example
	 * const stageInstance = { speaker_count: 2 };
	 */
	speaker_count: Integer,
	/**
	 * The topic of the Stage instance (1-120 characters).
	 *
	 * @example
	 * const stageInstance = { topic: "Discussion about new features" };
	 */
	topic: z.string().min(1).max(120),
});

/**
 * Inferred type for InviteStageInstanceStructure.
 *
 * @example
 * const stageInstance: InviteStageInstanceStructureInfer = {
 *   members: [{ user: { id: "123456789012345678", username: "User" } }],
 *   participant_count: 10,
 *   speaker_count: 2,
 *   topic: "Discussion about new features",
 * };
 */
export type InviteStageInstanceStructureInfer = z.infer<typeof InviteStageInstanceStructure>;

/**
 * Structure for Invite Metadata.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-metadata-object-invite-metadata-structure}
 */
export const InviteMetadataStructure = z.object({
	/**
	 * The number of times this invite has been used.
	 *
	 * @example
	 * const inviteMetadata = { uses: 5 };
	 */
	uses: Integer,
	/**
	 * The max number of times this invite can be used.
	 *
	 * @example
	 * const inviteMetadata = { max_uses: 10 };
	 */
	max_uses: Integer,
	/**
	 * The duration (in seconds) after which the invite expires.
	 *
	 * @example
	 * const inviteMetadata = { max_age: 3600 };
	 */
	max_age: Integer,
	/**
	 * Whether this invite only grants temporary membership.
	 *
	 * @example
	 * const inviteMetadata = { temporary: true };
	 */
	temporary: z.boolean(),
	/**
	 * When this invite was created.
	 *
	 * @example
	 * const inviteMetadata = { created_at: "2023-01-01T00:00:00.000Z" };
	 */
	created_at: ISO8601Timestamp,
});

/**
 * Inferred type for InviteMetadataStructure.
 *
 * @example
 * const inviteMetadata: InviteMetadataStructureInfer = {
 *   uses: 5,
 *   max_uses: 10,
 *   max_age: 3600,
 *   temporary: true,
 *   created_at: "2023-01-01T00:00:00.000Z",
 * };
 */
export type InviteMetadataStructureInfer = z.infer<typeof InviteMetadataStructure>;

/**
 * Enumeration of Invite Target Types.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types}
 */
export enum InviteTargetTypes {
	/**
	 * Stream invite target type.
	 *
	 * @example
	 * const targetType = InviteTargetTypes.Stream;
	 * console.log(targetType); // Output: 1
	 */
	Stream = 1,
	/**
	 * Embedded application invite target type.
	 *
	 * @example
	 * const targetType = InviteTargetTypes.EmbeddedApplication;
	 * console.log(targetType); // Output: 2
	 */
	EmbeddedApplication = 2,
}

/**
 * Zod schema for invite target types enumeration.
 * This schema is used for validating {@link InviteTargetTypes} values.
 *
 * @example
 * const isValidTargetType = InviteTargetTypesEnum.safeParse(InviteTargetTypes.Stream).success;
 */
export const InviteTargetTypesEnum = z.nativeEnum(InviteTargetTypes);

/**
 * Enumeration of Invite Types.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-object-invite-types}
 */
export enum InviteTypes {
	/**
	 * Guild invite type.
	 *
	 * @example
	 * const inviteType = InviteTypes.Guild;
	 * console.log(inviteType); // Output: 0
	 */
	Guild = 0,
	/**
	 * Group DM invite type.
	 *
	 * @example
	 * const inviteType = InviteTypes.GroupDM;
	 * console.log(inviteType); // Output: 1
	 */
	GroupDM = 1,
	/**
	 * Friend invite type.
	 *
	 * @example
	 * const inviteType = InviteTypes.Friend;
	 * console.log(inviteType); // Output: 2
	 */
	Friend = 2,
}

/**
 * Zod schema for invite types enumeration.
 * This schema is used for validating {@link InviteTypes} values.
 *
 * @example
 * const isValidInviteType = InviteTypesEnum.safeParse(InviteTypes.Guild).success;
 */
export const InviteTypesEnum = z.nativeEnum(InviteTypes);

/**
 * Structure for Invites.
 *
 * @see {@link https://discord.com/developers/docs/resources/invite#invite-object-invite-structure}
 */
export const InviteStructure = z.object({
	/**
	 * The type of invite.
	 *
	 * @example
	 * const invite = { type: InviteTypes.Guild };
	 */
	type: InviteTypesEnum,
	/**
	 * The invite code (unique ID).
	 *
	 * @example
	 * const invite = { code: "abcdef" };
	 */
	code: z.string(),
	/**
	 * The guild this invite is for.
	 *
	 * @example
	 * const invite = { guild: { id: "123456789012345678", name: "Guild" } };
	 */
	guild: GuildStructure.partial(),
	/**
	 * The channel this invite is for.
	 *
	 * @example
	 * const invite = { channel: { id: "123456789012345678", name: "Channel" } };
	 */
	channel: ChannelStructure.partial().nullable(),
	/**
	 * The user who created the invite.
	 *
	 * @example
	 * const invite = { inviter: { id: "123456789012345678", username: "User" } };
	 */
	inviter: UserStructure.optional(),
	/**
	 * The type of target for this voice channel invite.
	 *
	 * @example
	 * const invite = { target_type: InviteTargetTypes.Stream };
	 */
	target_type: InviteTargetTypesEnum.optional(),
	/**
	 * The user whose stream to display for this voice channel stream invite.
	 *
	 * @example
	 * const invite = { target_user: { id: "123456789012345678", username: "User" } };
	 */
	target_user: GuildMemberStructure.optional(),
	/**
	 * The embedded application to open for this voice channel embedded application invite.
	 *
	 * @example
	 * const invite = { target_application: { id: "123456789012345678", name: "App" } };
	 */
	target_application: ApplicationStructure.partial().optional(),
	/**
	 * Approximate count of online members, returned from the GET /invites/<code> endpoint when with_counts is true.
	 *
	 * @example
	 * const invite = { approximate_presence_count: 50 };
	 */
	approximate_presence_count: Integer.optional(),
	/**
	 * Approximate count of total members, returned from the GET /invites/<code> endpoint when with_counts is true.
	 *
	 * @example
	 * const invite = { approximate_member_count: 100 };
	 */
	approximate_member_count: Integer.optional(),
	/**
	 * The expiration date of this invite, returned from the GET /invites/<code> endpoint when with_expiration is true.
	 *
	 * @example
	 * const invite = { expires_at: "2023-01-01T00:00:00.000Z" };
	 */
	expires_at: ISO8601Timestamp.optional().nullable(),
	/**
	 * Stage instance data if there is a public Stage instance in the Stage channel this invite is for (deprecated).
	 *
	 * @example
	 * const invite = { stage_instance: { topic: "Discussion" } };
	 */
	stage_instance: InviteStageInstanceStructure.optional(),
	/**
	 * Guild scheduled event data, only included if guild_scheduled_event_id contains a valid guild scheduled event id.
	 *
	 * @example
	 * const invite = { guild_scheduled_event: { id: "123456789012345678", name: "Event" } };
	 */
	guild_scheduled_event: GuildScheduledEventStructure.optional(),
});

/**
 * Inferred type for InviteStructure.
 *
 * @example
 * const invite: InviteStructureInfer = {
 *   type: InviteTypes.Guild,
 *   code: "abcdef",
 *   guild: { id: "123456789012345678", name: "Guild" },
 *   channel: { id: "123456789012345678", name: "Channel" },
 *   inviter: { id: "123456789012345678", username: "User" },
 *   target_type: InviteTargetTypes.Stream,
 *   target_user: { id: "123456789012345678", username: "User" },
 *   target_application: { id: "123456789012345678", name: "App" },
 *   approximate_presence_count: 50,
 *   approximate_member_count: 100,
 *   expires_at: "2023-01-01T00:00:00.000Z",
 *   stage_instance: { topic: "Discussion" },
 *   guild_scheduled_event: { id: "123456789012345678", name: "Event" },
 * };
 */
export type InviteStructureInfer = z.infer<typeof InviteStructure>;
