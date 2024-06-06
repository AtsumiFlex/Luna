import type { IntegerInfer, SnowflakeInfer } from "@lunajs/core";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#sharding-sharding-formula}
 */
export function calculateShardId(guildId: SnowflakeInfer, numShards: IntegerInfer) {
	return (BigInt(guildId) >> BigInt(22)) % BigInt(numShards);
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#sharding-max-concurrency}
 */
export function calculateRateLimitKey(shardId: IntegerInfer, maxConcurrency: IntegerInfer) {
	return shardId % maxConcurrency;
}
