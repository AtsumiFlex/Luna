import type { IntegerInfer } from "@lunajs/core";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#sharding-sharding-formula}
 */
export function calculateShardId(guildId: IntegerInfer, numShards: IntegerInfer): number {
	return Number((BigInt(guildId) >> BigInt(22)) % BigInt(numShards));
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#sharding-max-concurrency}
 */
export function calculateRateLimitKey(shardId: IntegerInfer, maxConcurrency: IntegerInfer): number {
	return shardId % maxConcurrency;
}
