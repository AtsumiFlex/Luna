import type { StickerItemStructureInfer, StickerPackStructureInfer, StickerStructureInfer } from "@lunajs/core";
import { z } from "zod";
import type { Client } from "./client";
import { User } from "./user";

export class Sticker {
	public readonly id: StickerStructureInfer["id"];

	public readonly packId: StickerStructureInfer["pack_id"];

	public readonly name: StickerStructureInfer["name"];

	public readonly description: StickerStructureInfer["description"];

	public readonly tags: StickerStructureInfer["tags"];

	public readonly asset: StickerStructureInfer["asset"];

	public readonly type: StickerStructureInfer["type"];

	public readonly formatType: StickerStructureInfer["format_type"];

	public readonly available: StickerStructureInfer["available"];

	public readonly guildId: StickerStructureInfer["guild_id"];

	public readonly user?: User;

	public readonly sortValue: StickerStructureInfer["sort_value"];

	public constructor(private readonly client: Client, public data: StickerStructureInfer) {
		this.id = data.id;
		this.packId = data.pack_id;
		this.name = data.name;
		this.description = data.description;
		this.tags = data.tags;
		this.asset = data.asset;
		this.type = data.type;
		this.formatType = data.format_type;
		this.available = data.available;
		this.guildId = data.guild_id;
		this.user = new User(this.client, data.user);
		this.sortValue = data.sort_value;
	}
}

export const StickerSchema = z.instanceof(Sticker);

export class StickerItem {
	public readonly id: StickerItemStructureInfer["id"];

	public readonly name: StickerItemStructureInfer["name"];

	public readonly formatType: StickerItemStructureInfer["format_type"];

	public constructor(public data: StickerItemStructureInfer) {
		this.id = data.id;
		this.name = data.name;
		this.formatType = data.format_type;
	}
}

export const StickerItemSchema = z.instanceof(StickerItem);

export class StickerPack {
	public readonly id: StickerPackStructureInfer["id"];

	public readonly stickers: StickerItem[];

	public readonly name: StickerPackStructureInfer["name"];

	public readonly skuId: StickerPackStructureInfer["sku_id"];

	public readonly coverStickerId: StickerPackStructureInfer["cover_sticker_id"];

	public readonly description: StickerPackStructureInfer["description"];

	public readonly bannerAssetId: StickerPackStructureInfer["banner_asset_id"];

	public constructor(public data: StickerPackStructureInfer) {
		this.id = data.id;
		this.stickers = data.stickers.map((sticker) => new StickerItem(sticker));
		this.name = data.name;
		this.skuId = data.sku_id;
		this.coverStickerId = data.cover_sticker_id;
		this.description = data.description;
		this.bannerAssetId = data.banner_asset_id;
	}
}

export const StickerPackSchema = z.instanceof(StickerPack);

export { StickerFormatTypes, StickerFormatTypesEnum, StickerTypes, StickerTypesEnum } from "@lunajs/core";
