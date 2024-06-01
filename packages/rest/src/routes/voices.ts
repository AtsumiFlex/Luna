import type { VoiceRegionStructureInfer } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @see {@link https://discord.com/developers/docs/resources/voice#list-voice-regions}
 */
export function ListVoiceRegions(): RestMakeRequestOptions<VoiceRegionStructureInfer[]> {
	return {
		method: "GET",
		path: "/voice/regions",
	};
}
