import { z } from "zod";
import { Snowflake } from "../globals/formats";
import { UserStructure } from "./users";

/**
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum}
 */
export enum MembershipState {
	Invited = 1,
	Accepted = 2,
}

export const MembershipStateEnum = z.nativeEnum(MembershipState);

/**
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-team-member-object}
 */
export const TeamMemberStructure = z.object({
	/**
	 * User's membership state on the team
	 */
	membership_state: MembershipStateEnum,
	/**
	 * ID of the parent team of which they are a member
	 */
	team_id: Snowflake,
	/**
	 * Avatar, discriminator, ID, and username of the user
	 */
	user: UserStructure.pick({
		id: true,
		username: true,
		discriminator: true,
	}),
	/**
	 * Role of the team member
	 */
	role: z.string(),
});

export type TeamMemberStructureInfer = z.infer<typeof TeamMemberStructure>;

/**
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-team-object}
 */
export const TeamStructure = z.object({
	/**
	 * Hash of the image of the team's icon
	 */
	icon: z.string().nullable(),
	/**
	 * Unique ID of the team
	 */
	id: Snowflake,
	/**
	 * Members of the team
	 */
	members: z.array(TeamMemberStructure),
	/**
	 * Name of the team
	 */
	name: z.string(),
	/**
	 * User ID of the current team owner
	 */
	owner_user_id: Snowflake,
});

export type TeamStructureInfer = z.infer<typeof TeamStructure>;
