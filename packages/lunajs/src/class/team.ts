import type { TeamMemberStructureInfer, TeamStructureInfer } from "@lunajs/core";
import { z } from "zod";
import type { Client } from "./client";
import { User } from "./user";

export class TeamMember {
	public readonly membershipState: TeamMemberStructureInfer["membership_state"];

	public readonly teamId: TeamMemberStructureInfer["team_id"];

	public readonly user?: User;

	public readonly role: TeamMemberStructureInfer["role"];

	public constructor(private readonly client: Client, public data: TeamMemberStructureInfer) {
		this.membershipState = data.membership_state;
		this.teamId = data.team_id;
		this.user = new User(this.client, data.user);
		this.role = data.role;
	}
}

export const TeamMemberSchema = z.instanceof(TeamMember);

export class Team {
	public readonly icon: TeamStructureInfer["icon"];

	public readonly id: TeamStructureInfer["id"];

	public readonly members: TeamMember[];

	public readonly name: TeamStructureInfer["name"];

	public readonly ownerUserId: TeamStructureInfer["owner_user_id"];

	public constructor(private readonly client: Client, public data: TeamStructureInfer) {
		this.icon = data.icon;
		this.id = data.id;
		this.members = data.members.map((member) => new TeamMember(this.client, member));
		this.name = data.name;
		this.ownerUserId = data.owner_user_id;
	}
}

export const TeamSchema = z.instanceof(Team);

export { MembershipStates, MembershipStatesEnum } from "@lunajs/core";
