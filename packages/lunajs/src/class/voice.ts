import type { VoiceRegionStructureInfer, VoiceStateStructureInfer } from "@lunajs/core";
import { ListVoiceRegions } from "@lunajs/rest";
import { z } from "zod";
import type { Client } from "./client";

export class VoiceRegion {
	public readonly id: VoiceRegionStructureInfer["id"];

	public readonly name: VoiceRegionStructureInfer["name"];

	public readonly optimal: VoiceRegionStructureInfer["optimal"];

	public readonly deprecated: VoiceRegionStructureInfer["deprecated"];

	public readonly custom: VoiceRegionStructureInfer["custom"];

	public constructor(private readonly client: Client, public data: VoiceRegionStructureInfer) {
		this.id = data.id;
		this.name = data.name;
		this.optimal = data.optimal;
		this.deprecated = data.deprecated;
		this.custom = data.custom;
	}

	public async list() {
		const res = await this.client.rest.makeRequest(ListVoiceRegions());
		return res.map((region) => new VoiceRegion(this.client, region));
	}
}

export const VoiceRegionSchema = z.instanceof(VoiceRegion);

export class VoiceState {
	public readonly guildId: VoiceStateStructureInfer["guild_id"];

	public readonly channelId: VoiceStateStructureInfer["channel_id"];

	public readonly userId: VoiceStateStructureInfer["user_id"];

	public readonly sessionId: VoiceStateStructureInfer["session_id"];

	public readonly deaf: VoiceStateStructureInfer["deaf"];

	public readonly mute: VoiceStateStructureInfer["mute"];

	public readonly selfDeaf: VoiceStateStructureInfer["self_deaf"];

	public readonly selfMute: VoiceStateStructureInfer["self_mute"];

	public readonly selfStream: VoiceStateStructureInfer["self_stream"];

	public readonly selfVideo: VoiceStateStructureInfer["self_video"];

	public readonly suppress: VoiceStateStructureInfer["suppress"];

	public readonly requestToSpeakTimestamp: VoiceStateStructureInfer["request_to_speak_timestamp"];

	public constructor(public data: VoiceStateStructureInfer) {
		this.guildId = data.guild_id;
		this.channelId = data.channel_id;
		this.userId = data.user_id;
		this.sessionId = data.session_id;
		this.deaf = data.deaf;
		this.mute = data.mute;
		this.selfDeaf = data.self_deaf;
		this.selfMute = data.self_mute;
		this.selfStream = data.self_stream;
		this.selfVideo = data.self_video;
		this.suppress = data.suppress;
		this.requestToSpeakTimestamp = data.request_to_speak_timestamp;
	}
}

export const VoiceStateSchema = z.instanceof(VoiceState);
