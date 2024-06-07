import { Integer, Snowflake } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user-json-params}
 */
export const ModifyCurrentUserJSON = z.object({
	/**
	 * User's username, if changed may cause the user's discriminator to be randomized.
	 */
	username: z.string().optional(),
	/**
	 * If passed, modifies the user's avatar
	 */
	avatar: z.string().optional().nullable(),
	/**
	 * If passed, modifies the user's banner
	 */
	banner: z.string().optional().nullable(),
});

export type ModifyCurrentUserJSONInfer = z.infer<typeof ModifyCurrentUserJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds-query-string-params}
 */
export const GetCurrentUserGuildsQuery = z.object({
	/**
	 * get guilds before this guild ID
	 */
	before: Snowflake.optional(),
	/**
	 * get guilds after this guild ID
	 */
	after: Snowflake.optional(),
	/**
	 * max number of guilds to return (1-200)
	 */
	limit: Integer.min(1).max(200).default(200).optional(),
	/**
	 * include approximate member and presence counts in response
	 */
	with_counts: z.boolean().optional(),
});

export type GetCurrentUserGuildsQueryInfer = z.infer<typeof GetCurrentUserGuildsQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-dm-json-params}
 */
export const CreateDMJSON = z.object({
	/**
	 * The recipient to open a DM channel with
	 */
	recipient_id: Snowflake,
});

export type CreateDMJSONInfer = z.infer<typeof CreateDMJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/user#create-group-dm-json-params}
 */
export const CreateGroupDMJSON = z.object({
	/**
	 * Access tokens of users that have granted your app the gdm.join scope
	 */
	access_tokens: z.array(z.string()),
	/**
	 * A dictionary of user ids to their respective nicknames
	 */
	nicks: z.record(Snowflake, z.string()),
});

export type CreateGroupDMJSONInfer = z.infer<typeof CreateGroupDMJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/user#update-current-user-application-role-connection-json-params}
 */
export const UpdateCurrentUserApplicationRoleConnectionJSON = z.object({
	/**
	 * The vanity name of the platform a bot has connected (max 50 characters)
	 */
	platform_name: z.string().max(50).optional(),
	/**
	 * The username on the platform a bot has connected (max 100 characters)
	 */
	platform_username: z.string().max(50).optional(),
	/**
	 * Object mapping application role connection metadata keys to their string-ified value (max 100 characters) for the user on the platform a bot has connected
	 */
	metadata: z.record(z.string(), z.string()).optional(),
});

export type UpdateCurrentUserApplicationRoleConnectionJSONInfer = z.infer<typeof UpdateCurrentUserApplicationRoleConnectionJSON>;
