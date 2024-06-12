import type { PollAnswerCountStructureInfer, PollMediaStructureInfer, PollResultsStructureInfer } from "@lunajs/core";
import { z } from "zod";
import type { Client } from "./client";
import { Emoji } from "./emoji";

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
