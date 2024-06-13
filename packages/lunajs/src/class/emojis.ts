import type { EmojiStructureInfer } from "@lunajs/core";
import { z } from "zod";
import type { Client } from "./clients";
import { Users } from "./users";

export class Emoji {
	public readonly id: EmojiStructureInfer["id"];

	public readonly name: EmojiStructureInfer["name"];

	public readonly roles: EmojiStructureInfer["roles"];

	public readonly user?: Users;

	public readonly requireColons: EmojiStructureInfer["require_colons"];

	public readonly managed: EmojiStructureInfer["managed"];

	public readonly animated: EmojiStructureInfer["animated"];

	public readonly available: EmojiStructureInfer["available"];

	public constructor(private readonly client: Client, public data: EmojiStructureInfer) {
		this.id = data.id;
		this.name = data.name;
		this.roles = data.roles;
		this.user = new Users(this.client, data.user);
		this.requireColons = data.require_colons;
		this.managed = data.managed;
		this.animated = data.animated;
		this.available = data.available;
	}
}

export const EmojiSchema = z.instanceof(Emoji);
