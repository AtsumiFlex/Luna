import { z } from "zod";
import { Integer } from "../globals/formats";
import { EmojiStructure } from "./emojis";

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-results-object-poll-answer-count-object-structure}
 */
export const PollAnswerCountStructure = z.object({
	/**
	 * The answer_id
	 */
	id: Integer,
	/**
	 * The number of votes for this answer
	 */
	count: Integer,
	/**
	 * Whether the current user voted for this answer
	 */
	me_voted: z.boolean(),
});

export type PollAnswerCountStructureInfer = z.infer<typeof PollAnswerCountStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-results-object-poll-results-object-structure}
 */
export const PollResultsStructure = z.object({
	/**
	 * Whether the votes have been precisely counted
	 */
	is_finalized: z.boolean(),
	/**
	 * The counts for each answer
	 */
	answer_counts: z.array(PollAnswerCountStructure),
});

export type PollResultsStructureInfer = z.infer<typeof PollResultsStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-media-object-poll-media-object-structure}
 */
export const PollMediaStructure = z.object({
	/**
	 * The text of the field
	 */
	text: z.string().optional(),
	/**
	 * The emoji of the field
	 */
	emoji: EmojiStructure.pick({
		id: true,
		name: true,
	}).optional(),
});

export type PollMediaStructureInfer = z.infer<typeof PollMediaStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-answer-object-poll-answer-object-structure}
 */
export const PollAnswerStructure = z.object({
	/**
	 * The ID of the answer
	 */
	answer_id: Integer,
	/**
	 * The data of the answer
	 */
	poll_media: PollMediaStructure,
});

export type PollAnswerStructureInfer = z.infer<typeof PollAnswerStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#layout-type}
 */
export enum PollLayoutTypes {
	/**
	 * The, uhm, default layout type.
	 */
	Default = 1,
}

export const PollLayoutTypesEnum = z.nativeEnum(PollLayoutTypes);

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-create-request-object-poll-create-request-object-structure}
 */
export const PollCreateRequestStructure = z.object({
	/**
	 * The question of the poll. Only text is supported.
	 */
	question: PollMediaStructure.pick({ text: true }),
	/**
	 * Each of the answers available in the poll, up to 10
	 */
	answers: z.array(PollAnswerStructure).max(10),
	/**
	 * Number of hours the poll should be open for, up to 7 days
	 */
	duration: Integer.max(168),
	/**
	 * Whether a user can select multiple answers
	 */
	allow_multiselect: z.boolean(),
	/**
	 * The layout type of the poll. Defaults to... DEFAULT!
	 */
	layout_type: PollLayoutTypesEnum.optional(),
});

export type PollCreateRequestStructureInfer = z.infer<typeof PollCreateRequestStructure>;

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#poll-object-poll-object-structure}
 */
export const PollStructure = z.object({
	/**
	 * The question of the poll. Only text is supported.
	 */
	question: PollMediaStructure.pick({ text: true }),
	/**
	 * Each of the answers available in the poll.
	 */
	answers: z.array(PollAnswerStructure).max(10),
	/**
	 * The time when the poll ends.
	 */
	expiry: z.string().nullable(),
	/**
	 * Whether a user can select multiple answers
	 */
	allow_multiselect: z.boolean(),
	/**
	 * The layout type of the poll
	 */
	layout_type: PollLayoutTypesEnum,
	/**
	 * The results of the poll
	 */
	results: PollResultsStructure.optional(),
});

export type PollStructureInfer = z.infer<typeof PollStructure>;
