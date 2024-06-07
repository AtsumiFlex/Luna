import type { MessageStructureInfer, SnowflakeInfer } from "@lunajs/core";
import { Snowflake } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";
import type { GetAnswerVotersQueryInfer, GetAnswerVotersResponseInfer } from "../libs/polls";
import { GetAnswerVotersQuery } from "../libs/polls";

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#get-answer-voters}
 */
export function GetAnswerVoters(channelId: SnowflakeInfer, messageId: SnowflakeInfer, answerId: SnowflakeInfer, query?: GetAnswerVotersQueryInfer): RestMakeRequestOptions<GetAnswerVotersResponseInfer> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}/polls/${Snowflake.parse(messageId)}/answers/${Snowflake.parse(answerId)}`,
		query: GetAnswerVotersQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/poll#end-poll}
 */
export function EndPoll(channelId: SnowflakeInfer, messageId: SnowflakeInfer): RestMakeRequestOptions<MessageStructureInfer> {
	return {
		method: "DELETE",
		path: `/channels/${Snowflake.parse(channelId)}/polls/${Snowflake.parse(messageId)}/expire`,
	};
}
