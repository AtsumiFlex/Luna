import type { SkuStructure, Snowflake } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @see {@link https://discord.com/developers/docs/monetization/skus#list-skus}
 */
export function listSkus(applicationId: Snowflake): RestMakeRequestOptions<SkuStructure[]> {
	return {
		method: "GET",
		path: `/applications/${applicationId}/skus`,
	};
}
