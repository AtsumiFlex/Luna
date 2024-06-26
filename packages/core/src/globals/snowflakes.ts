import { DISCORD_EPOCH } from "./api";
import type { Snowflake } from "./formats";

export class DiscordSnowflake {
	private static parse = BigInt;

	public static getInternalWorkerId(snowflake: Snowflake): number {
		return Number((this.parse(snowflake) & 0x3E0000n) >> 17n);
	}

	public static getProcessId(snowflake: Snowflake): number {
		return Number((this.parse(snowflake) & 0x1F000n) >> 12n);
	}

	public static getIncrement(snowflake: Snowflake): number {
		return Number(this.parse(snowflake) & 0xFFFn);
	}

	public static snowflakeToTimestamp(snowflake: Snowflake): number {
		return Number((this.parse(snowflake) >> 22n) + DISCORD_EPOCH);
	}

	public static timestampToSnowflake(timestamp: number): Snowflake {
		return (BigInt(timestamp) - DISCORD_EPOCH << 22n).toString();
	}
}
