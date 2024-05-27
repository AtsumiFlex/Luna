import { z } from "zod";
import { Integer, ISO8601Timestamp } from "../globals/formats";
import { EmojiStructure } from "./emojis";

/**
 * Schema for the Poll Answer Count Structure.
 * Represents the structure of a poll answer count object.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure}
 */
export const PollAnswerCountStructure = z.object({
	/**
	 * The answer ID.
	 *
	 * @example
	 * const answerCount = { id: 1 };
	 */
	id: Integer,
	/**
	 * The number of votes for this answer.
	 *
	 * @example
	 * const answerCount = { count: 10 };
	 */
	count: Integer,
	/**
	 * Whether the current user voted for this answer.
	 *
	 * @example
	 * const answerCount = { me_voted: true };
	 */
	me_voted: z.boolean(),
});

/**
 * Inferred type for the Poll Answer Count Structure schema.
 *
 * @example
 * const answerCount: PollAnswerCountStructureInfer = {
 *   id: 1,
 *   count: 10,
 *   me_voted: true,
 * };
 */
export type PollAnswerCountStructureInfer = z.infer<typeof PollAnswerCountStructure>;

/**
 * Schema for the Poll Results Structure.
 * Represents the structure of a poll results object.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure}
 */
export const PollResultsStructure = z.object({
	/**
	 * Whether the votes have been precisely counted.
	 *
	 * @example
	 * const pollResults = { is_finalized: true };
	 */
	is_finalized: z.boolean(),
	/**
	 * The counts for each answer.
	 *
	 * @example
	 * const pollResults = { answer_counts: [{ id: 1, count: 10, me_voted: true }] };
	 */
	answer_counts: z.array(PollAnswerCountStructure),
});

/**
 * Inferred type for the Poll Results Structure schema.
 *
 * @example
 * const pollResults: PollResultsStructureInfer = {
 *   is_finalized: true,
 *   answer_counts: [{ id: 1, count: 10, me_voted: true }],
 * };
 */
export type PollResultsStructureInfer = z.infer<typeof PollResultsStructure>;

/**
 * Schema for the Poll Media Structure.
 * Represents the structure of a poll media object.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure}
 */
export const PollMediaStructure = z.object({
	/**
	 * The text of the field.
	 *
	 * @example
	 * const pollMedia = { text: "Option 1" };
	 */
	text: z.string().optional(),
	/**
	 * The emoji of the field.
	 *
	 * @example
	 * const pollMedia = { emoji: { id: "123456789012345678", name: "smile" } };
	 */
	emoji: EmojiStructure.partial().optional(),
});

/**
 * Inferred type for the Poll Media Structure schema.
 *
 * @example
 * const pollMedia: PollMediaStructureInfer = {
 *   text: "Option 1",
 *   emoji: { id: "123456789012345678", name: "smile" },
 * };
 */
export type PollMediaStructureInfer = z.infer<typeof PollMediaStructure>;

/**
 * Schema for the Poll Answer Structure.
 * Represents the structure of a poll answer object.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure}
 */
export const PollAnswerStructure = z.object({
	/**
	 * The ID of the answer.
	 *
	 * @example
	 * const pollAnswer = { answer_id: 1 };
	 */
	answer_id: Integer.optional(),
	/**
	 * The data of the answer.
	 *
	 * @example
	 * const pollAnswer = { poll_media: { text: "Option 1", emoji: { id: "123456789012345678", name: "smile" } } };
	 */
	poll_media: PollMediaStructure,
});

/**
 * Inferred type for the Poll Answer Structure schema.
 *
 * @example
 * const pollAnswer: PollAnswerStructureInfer = {
 *   answer_id: 1,
 *   poll_media: { text: "Option 1", emoji: { id: "123456789012345678", name: "smile" } },
 * };
 */
export type PollAnswerStructureInfer = z.infer<typeof PollAnswerStructure>;

/**
 * Enumeration of poll layout types.
 * Represents the layout types that a poll can have.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#layout-type}
 */
export enum PollLayoutType {
	/**
	 * The default layout type.
	 *
	 * @example
	 * const layout = PollLayoutType.Default;
	 * console.log(layout); // Output: 1
	 */
	Default = 1,
}

/**
 * Zod schema for poll layout types enumeration.
 * This schema is used for validating {@link PollLayoutType} values.
 *
 * @example
 * const isValidLayout = PollLayoutTypeEnum.safeParse(PollLayoutType.Default).success;
 */
export const PollLayoutTypeEnum = z.nativeEnum(PollLayoutType);

/**
 * Schema for the Poll Create Request Structure.
 * Represents the structure of a poll create request object.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-create-request-object-poll-create-request-object-structure}
 */
export const PollCreateRequestStructure = z.object({
	/**
	 * The question of the poll. Only text is supported.
	 *
	 * @example
	 * const pollCreateRequest = { question: { text: "What is your favorite color?" } };
	 */
	question: PollMediaStructure,
	/**
	 * Each of the answers available in the poll, up to 10.
	 *
	 * @example
	 * const pollCreateRequest = { answers: [{ poll_media: { text: "Red" } }, { poll_media: { text: "Blue" } }] };
	 */
	answers: z.array(PollAnswerStructure),
	/**
	 * Number of hours the poll should be open for, up to 7 days.
	 *
	 * @example
	 * const pollCreateRequest = { duration: 24 };
	 */
	duration: Integer,
	/**
	 * Whether a user can select multiple answers.
	 *
	 * @example
	 * const pollCreateRequest = { allow_multiselect: true };
	 */
	allow_multiselect: z.boolean(),
	/**
	 * The layout type of the poll. Defaults to Default.
	 *
	 * @example
	 * const pollCreateRequest = { layout_type: PollLayoutType.Default };
	 */
	layout_type: PollLayoutTypeEnum.optional(),
});

/**
 * Inferred type for the Poll Create Request Structure schema.
 *
 * @example
 * const pollCreateRequest: PollCreateRequestStructureInfer = {
 *   question: { text: "What is your favorite color?" },
 *   answers: [{ poll_media: { text: "Red" } }, { poll_media: { text: "Blue" } }],
 *   duration: 24,
 *   allow_multiselect: true,
 *   layout_type: PollLayoutType.Default,
 * };
 */
export type PollCreateRequestStructureInfer = z.infer<typeof PollCreateRequestStructure>;

/**
 * Schema for the Poll Structure.
 * Represents the structure of a poll object.
 *
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure}
 */
export const PollStructure = z.object({
	/**
	 * The question of the poll. Only text is supported.
	 *
	 * @example
	 * const poll = { question: { text: "What is your favorite color?" } };
	 */
	question: PollMediaStructure,
	/**
	 * Each of the answers available in the poll.
	 *
	 * @example
	 * const poll = { answers: [{ poll_media: { text: "Red" } }, { poll_media: { text: "Blue" } }] };
	 */
	answers: z.array(PollAnswerStructure),
	/**
	 * The time when the poll ends.
	 *
	 * @example
	 * const poll = { expiry: "2021-12-31T23:59:59.999Z" };
	 */
	expiry: ISO8601Timestamp.nullable(),
	/**
	 * Whether a user can select multiple answers.
	 *
	 * @example
	 * const poll = { allow_multiselect: true };
	 */
	allow_multiselect: z.boolean(),
	/**
	 * The layout type of the poll.
	 *
	 * @example
	 * const poll = { layout_type: PollLayoutType.Default };
	 */
	layout_type: PollLayoutTypeEnum,
	/**
	 * The results of the poll.
	 *
	 * @example
	 * const poll = { results: { is_finalized: true, answer_counts: [{ id: 1, count: 10, me_voted: true }] } };
	 */
	results: PollResultsStructure.optional(),
});

/**
 * Inferred type for the Poll Structure schema.
 *
 * @example
 * const poll: PollStructureInfer = {
 *   question: { text: "What is your favorite color?" },
 *   answers: [{ poll_media: { text: "Red" } }, { poll_media: { text: "Blue" } }],
 *   expiry: "2021-12-31T23:59:59.999Z",
 *   allow_multiselect: true,
 *   layout_type: PollLayoutType.Default,
 *   results: { is_finalized: true, answer_counts: [{ id: 1, count: 10, me_voted: true }] },
 * };
 */
export type PollStructureInfer = z.infer<typeof PollStructure>;
