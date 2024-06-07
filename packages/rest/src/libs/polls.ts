import { Integer, Snowflake, UserStructure } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters-query-string-params}
 */
export const GetAnswerVotersQuery = z.object({
	/**
	 * Get users after this user ID
	 */
	after: Snowflake.optional(),
	/**
	 * Max number of users to return (1-100)
	 */
	limit: Integer.min(1).max(100).default(25).optional(),
});

export type GetAnswerVotersQueryInfer = z.infer<typeof GetAnswerVotersQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters-response-body}
 */
export const GetAnswerVotersResponse = z.object({
	/**
	 * Users who voted for this answer
	 */
	users: z.array(UserStructure),
});

export type GetAnswerVotersResponseInfer = z.infer<typeof GetAnswerVotersResponse>;
