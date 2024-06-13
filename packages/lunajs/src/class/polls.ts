import type {
	PollAnswerCountStructureInfer,
	PollAnswerStructureInfer,
	PollCreateRequestStructureInfer,
	PollMediaStructureInfer,
	PollResultsStructureInfer,
	PollStructureInfer,
} from "@lunajs/core";
import { z } from "zod";
import type { Client } from "./clients";
import { Emoji } from "./emojis";

export class PollAnswerCount {
	public readonly id: PollAnswerCountStructureInfer["id"];

	public readonly count: PollAnswerCountStructureInfer["count"];

	public readonly meVoted: PollAnswerCountStructureInfer["me_voted"];

	public constructor(public data: PollAnswerCountStructureInfer) {
		this.id = data.id;
		this.count = data.count;
		this.meVoted = data.me_voted;
	}
}

export const PollAnswerCountSchema = z.instanceof(PollAnswerCount);

export class PollResults {
	public readonly isFinalized: PollResultsStructureInfer["is_finalized"];

	public readonly answerCounts: PollAnswerCount[];

	public constructor(public data: PollResultsStructureInfer) {
		this.isFinalized = data.is_finalized;
		this.answerCounts = data.answer_counts.map((answer) => new PollAnswerCount(answer));
	}
}

export const PollResultsSchema = z.instanceof(PollResults);

export class PollMedia {
	public readonly text: PollMediaStructureInfer["text"];

	public readonly emoji?: Emoji;

	public constructor(private readonly client: Client, public data: PollMediaStructureInfer) {
		this.text = data.text;
		this.emoji = new Emoji(this.client, data.emoji);
	}
}

export const PollMediaSchema = z.instanceof(PollMedia);

export class PollAnswer {
	public readonly answerId: PollAnswerStructureInfer["answer_id"];

	public readonly pollMedia: PollMedia;

	public constructor(private readonly client: Client, public data: PollAnswerStructureInfer) {
		this.answerId = data.answer_id;
		this.pollMedia = new PollMedia(this.client, data.poll_media);
	}
}

export const PollAnswerSchema = z.instanceof(PollAnswer);

export class PollCreateRequest {
	public readonly question: PollMedia;

	public readonly answers: PollAnswer[];

	public readonly duration: PollCreateRequestStructureInfer["duration"];

	public readonly allowMultiselect: PollCreateRequestStructureInfer["allow_multiselect"];

	public readonly layoutType: PollCreateRequestStructureInfer["layout_type"];

	public constructor(private readonly client: Client, public data: PollCreateRequestStructureInfer) {
		this.question = new PollMedia(this.client, data.question);
		this.answers = data.answers.map((answer) => new PollAnswer(this.client, answer));
		this.duration = data.duration;
		this.allowMultiselect = data.allow_multiselect;
		this.layoutType = data.layout_type;
	}
}

export const PollCreateRequestSchema = z.instanceof(PollCreateRequest);

export class Poll {
	public readonly question: PollMedia;

	public readonly answers: PollAnswer[];

	public readonly expiry: PollStructureInfer["expiry"];

	public readonly allowMultiselect: PollStructureInfer["allow_multiselect"];

	public readonly layoutType: PollStructureInfer["layout_type"];

	public readonly results?: PollResults;

	public constructor(private readonly client: Client, public data: PollStructureInfer) {
		this.question = new PollMedia(this.client, data.question);
		this.answers = data.answers.map((answer) => new PollAnswer(this.client, answer));
		this.expiry = data.expiry;
		this.allowMultiselect = data.allow_multiselect;
		this.layoutType = data.layout_type;
		this.results = new PollResults(data.results);
	}
}

export const PollSchema = z.instanceof(Poll);

export { PollLayoutType, PollLayoutTypeEnum } from "@lunajs/core";
