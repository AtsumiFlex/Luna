import { z } from "zod";
import { Snowflake } from "../globals/formats";
import { UserStructure } from "./users";

/**
 * Enumeration of membership states.
 * Represents the states of a user's membership in a team.
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum}
 */
export enum MembershipStates {
	/**
	 * The user has been invited to the team.
	 *
	 * @example
	 * const state = MembershipStates.Invited;
	 * console.log(state); // Output: 1
	 */
	Invited = 1,
	/**
	 * The user has accepted the invitation to the team.
	 *
	 * @example
	 * const state = MembershipStates.Accepted;
	 * console.log(state); // Output: 2
	 */
	Accepted = 2,
}

/**
 * Zod schema for membership states enumeration.
 * This schema is used for validating {@link MembershipStates} values.
 *
 * @example
 * const isValidState = MembershipStatesEnum.safeParse(MembershipStates.Invited).success;
 */
export const MembershipStatesEnum = z.nativeEnum(MembershipStates);

/**
 * Schema for the Teams Member Structure.
 * Represents the structure of a team member object.
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-team-member-object}
 */
export const TeamMemberStructure = z.object({
	/**
	 * User's membership state on the team.
	 *
	 * @example
	 * const member = { membership_state: MembershipStates.Invited };
	 */
	membership_state: MembershipStatesEnum,
	/**
	 * ID of the parent team of which they are a member.
	 *
	 * @example
	 * const member = { team_id: "123456789012345678" };
	 */
	team_id: Snowflake,
	/**
	 * Avatar, discriminator, ID, and username of the user.
	 *
	 * @example
	 * const member = { user: { id: "123456789012345678", username: "example", discriminator: "1234" } };
	 */
	user: UserStructure.partial(),
	/**
	 * Role of the team member.
	 *
	 * @example
	 * const member = { role: "Developer" };
	 */
	role: z.string(),
});

/**
 * Inferred type for the Teams Member Structure schema.
 *
 * @example
 * const member: TeamMemberStructureInfer = {
 *   membership_state: MembershipStates.Invited,
 *   team_id: "123456789012345678",
 *   user: { id: "123456789012345678", username: "example", discriminator: "1234" },
 *   role: "Developer"
 * };
 */
export type TeamMemberStructureInfer = z.infer<typeof TeamMemberStructure>;

/**
 * Schema for the Teams Structure.
 * Represents the structure of a team object.
 *
 * @see {@link https://discord.com/developers/docs/topics/teams#data-models-team-object}
 */
export const TeamStructure = z.object({
	/**
	 * Hash of the image of the team's icon.
	 *
	 * @example
	 * const team = { icon: "icon_hash" };
	 */
	icon: z.string().nullable(),
	/**
	 * Unique ID of the team.
	 *
	 * @example
	 * const team = { id: "123456789012345678" };
	 */
	id: Snowflake,
	/**
	 * Members of the team.
	 *
	 * @example
	 * const team = { members: [{ membership_state: MembershipStates.Invited, team_id: "123456789012345678", user: { id: "123456789012345678", username: "example", discriminator: "1234" }, role: "Developer" }] };
	 */
	members: z.array(TeamMemberStructure),
	/**
	 * Name of the team.
	 *
	 * @example
	 * const team = { name: "Example Teams" };
	 */
	name: z.string(),
	/**
	 * User ID of the current team owner.
	 *
	 * @example
	 * const team = { owner_user_id: "123456789012345678" };
	 */
	owner_user_id: Snowflake,
});

/**
 * Inferred type for the Teams Structure schema.
 *
 * @example
 * const team: TeamStructureInfer = {
 *   icon: "icon_hash",
 *   id: "123456789012345678",
 *   members: [{ membership_state: MembershipStates.Invited, team_id: "123456789012345678", user: { id: "123456789012345678", username: "example", discriminator: "1234" }, role: "Developer" }],
 *   name: "Example Teams",
 *   owner_user_id: "123456789012345678"
 * };
 */
export type TeamStructureInfer = z.infer<typeof TeamStructure>;
