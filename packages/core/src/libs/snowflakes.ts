import { DISCORD_EPOCH } from "../globals/api";
import type { IntegerInfer, SnowflakeInfer } from "../globals/formats";

/**
 * Converts a Discord snowflake to a timestamp.
 *
 * Discord snowflakes are unique identifiers used by Discord. They contain a timestamp, worker ID, process ID, and increment.
 * This function extracts the timestamp from the snowflake.
 *
 * @param {SnowflakeInfer} snowflake - The Discord snowflake to convert.
 * @returns {bigint} The extracted timestamp from the snowflake.
 * @example
 * const snowflake: SnowflakeInfer = "175928847299117063";
 * const timestamp = snowflakeToTimestamp(snowflake);
 * console.log(timestamp); // Outputs: the corresponding timestamp in bigint
 */
export function snowflakeToTimestamp(snowflake: SnowflakeInfer): bigint {
	return (BigInt(snowflake) >> 22n) + DISCORD_EPOCH;
}

/**
 * Converts a timestamp to a Discord snowflake.
 *
 * This function generates a snowflake based on a given timestamp. The generated snowflake may not be unique as it doesn't include worker ID, process ID, or increment.
 *
 * @param {IntegerInfer} timestamp - The timestamp to convert.
 * @returns {bigint} The generated snowflake.
 * @example
 * const timestamp: bigint = 1622519128000n;
 * const snowflake = timestampToSnowflake(timestamp);
 * console.log(snowflake); // Outputs: the corresponding snowflake in bigint
 */
export function timestampToSnowflake(timestamp: IntegerInfer): bigint {
	return BigInt(timestamp) - DISCORD_EPOCH << 22n;
}
