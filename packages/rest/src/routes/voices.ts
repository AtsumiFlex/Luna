import type { VoiceRegionStructure } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @see {@link https://discord.com/developers/docs/resources/voice#list-voice-regions}
 */
export function listVoiceRegions(): RestMakeRequestOptions<VoiceRegionStructure[]> {
	return {
		method: "GET",
		path: "/voice/regions",
	};
}
