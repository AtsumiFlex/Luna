import type { SkuStructureInfer, SnowflakeInfer } from "@lunajs/core";
import { Snowflake } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @see {@link https://discord.com/developers/docs/monetization/skus#list-skus}
 */
export function ListSKUs(applicationId: SnowflakeInfer): RestMakeRequestOptions<SkuStructureInfer[]> {
	return {
		method: "GET",
		path: `/applications/${Snowflake.parse(applicationId)}/skus`,
	};
}
