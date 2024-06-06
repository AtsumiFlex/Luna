import {
	ApplicationStructure,
	Integer,
	InviteTargetTypesEnum,
	ISO8601Timestamp,
	Snowflake,
	UserStructure,
} from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#invite-delete-invite-delete-event-fields}
 */
export const InviteDeleteFields = z.object({
	/**
	 * Channel of the invite
	 */
	channel_id: Snowflake,
	/**
	 * Guild of the invite
	 */
	guild_id: Snowflake.optional(),
	/**
	 * Unique invite code
	 */
	code: z.string(),
});

export type InviteDeleteFieldsInfer = z.infer<typeof InviteDeleteFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#invite-create-invite-create-event-fields}
 */
export const InviteCreateFields = z.object({
	/**
	 * Channel the invite is for
	 */
	channel_id: Snowflake,
	/**
	 * Unique invite code
	 */
	code: z.string(),
	/**
	 * Time at which the invite was created
	 */
	created_at: ISO8601Timestamp,
	/**
	 * Guild of the invite
	 */
	guild_id: Snowflake.optional(),
	/**
	 * User that created the invite
	 */
	inviter: UserStructure.optional(),
	/**
	 * How long the invite is valid for (in seconds)
	 */
	max_age: Integer,
	/**
	 * Maximum number of times the invite can be used
	 */
	max_uses: Integer,
	/**
	 * Type of target for this voice channel invite
	 */
	target_type: InviteTargetTypesEnum.optional(),
	/**
	 * User whose stream to display for this voice channel stream invite
	 */
	target_user: UserStructure.optional(),
	/**
	 * Embedded application to open for this voice channel embedded application invite
	 */
	target_application: ApplicationStructure.partial().optional(),
	/**
	 * Whether or not the invite is temporary (invited users will be kicked on disconnect unless they're assigned a role)
	 */
	temporary: z.boolean(),
	/**
	 * How many times the invite has been used (always will be 0)
	 */
	uses: Integer,
});

export type InviteCreateFieldsInfer = z.infer<typeof InviteCreateFields>;
