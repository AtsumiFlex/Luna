import { URL } from "node:url";
import type { IntegerInfer, SnowflakeInfer } from "@lunajs/core";
import { CDN_URL, ImageFormats, Integer, Snowflake } from "@lunajs/core";

export class CDN {
	private static baseURL = CDN_URL;

	public static customEmoji(emojiId: SnowflakeInfer, size?: IntegerInfer, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		const url = new URL(`/emojis/${Snowflake.parse(emojiId)}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static guildIcon(guildId: SnowflakeInfer, guildIcon: string, size?: IntegerInfer, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		if (!this.isGIF(guildIcon) && format === ImageFormats.GIF) {
			throw new Error("This icon does not support GIF format");
		}

		const url = new URL(`/icons/${Snowflake.parse(guildId)}/${guildIcon}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static guildSplash(guildId: SnowflakeInfer, guildSplash: string, size?: IntegerInfer, format: ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		const url = new URL(`/splashes/${Snowflake.parse(guildId)}/${guildSplash}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static guildDiscoverySplash(guildId: SnowflakeInfer, guildDiscoverySplash: string, size?: IntegerInfer, format: ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		const url = new URL(`/discovery-splashes/${Snowflake.parse(guildId)}/${guildDiscoverySplash}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static guildBanner(guildId: SnowflakeInfer, guildBanner: string, size?: IntegerInfer, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		if (!this.isGIF(guildBanner) && format === ImageFormats.GIF) {
			throw new Error("This banner does not support GIF format");
		}

		const url = new URL(`/banners/${Snowflake.parse(guildId)}/${guildBanner}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static userBanner(userId: SnowflakeInfer, userBanner: string, size?: IntegerInfer, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		if (!this.isGIF(userBanner) && format === ImageFormats.GIF) {
			throw new Error("This banner does not support GIF format");
		}

		const url = new URL(`/banners/${Snowflake.parse(userId)}/${userBanner}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static defaultUserAvatar(userId: SnowflakeInfer) {
		const hash = userId === "0" ? (BigInt(userId) >> 22n) % 6n : BigInt(userId) % 5n;
		return new URL(`/embed/avatars/${hash}.png`, this.baseURL).toString();
	}

	public static userAvatar(userId: SnowflakeInfer, userAvatar: string, size?: IntegerInfer, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		if (!this.isGIF(userAvatar) && format === ImageFormats.GIF) {
			throw new Error("This avatar does not support GIF format");
		}

		const url = new URL(`/avatars/${Snowflake.parse(userId)}/${userAvatar}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static guildMemberAvatar(guildId: SnowflakeInfer, userId: SnowflakeInfer, memberAvatar: string, size?: IntegerInfer, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		if (!this.isGIF(memberAvatar) && format === ImageFormats.GIF) {
			throw new Error("This avatar does not support GIF format");
		}

		const url = new URL(`/guilds/${Snowflake.parse(guildId)}/users/${Snowflake.parse(userId)}/avatars/${memberAvatar}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static avatarDecoration(avatarDecorationDataAsset: string) {
		return new URL(`/avatar-decoration-presets/${avatarDecorationDataAsset}.png`, this.baseURL).toString();
	}

	public static applicationIcon(applicationId: SnowflakeInfer, icon: string, size?: IntegerInfer, format: ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		const url = new URL(`/app-icons/${Snowflake.parse(applicationId)}/${icon}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static applicationCover(applicationId: SnowflakeInfer, coverImage: string, size?: IntegerInfer, format: ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		const url = new URL(`/app-icons/${Snowflake.parse(applicationId)}/${coverImage}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static applicationAsset(applicationId: SnowflakeInfer, assetId: string, size?: IntegerInfer, format: ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		const url = new URL(`/app-assets/${Snowflake.parse(applicationId)}/${assetId}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static achievementIcon(applicationId: SnowflakeInfer, achievementId: SnowflakeInfer, iconHash: string, size?: IntegerInfer, format: ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		const url = new URL(`/app-assets/${Snowflake.parse(applicationId)}/achievements/${Snowflake.parse(achievementId)}/icons/${iconHash}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static storePageAsset(applicationId: SnowflakeInfer, assetId: string, size?: IntegerInfer, format: ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		const url = new URL(`/app-assets/${Snowflake.parse(applicationId)}/store/${assetId}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static stickerPackBanner(applicationId: SnowflakeInfer, stickerPackBannerAssetId: string, size?: IntegerInfer, format: ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		const url = new URL(`/app-assets/${Snowflake.parse(applicationId)}/store/${stickerPackBannerAssetId}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static teamIcon(teamId: SnowflakeInfer, teamIcon: string, size?: IntegerInfer, format: ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		const url = new URL(`/team-icons/${Snowflake.parse(teamId)}/${teamIcon}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static sticker(stickerId: SnowflakeInfer, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG = ImageFormats.PNG) {
		if (format === ImageFormats.GIF) {
			return new URL(`/stickers/${Snowflake.parse(stickerId)}.${format}`, "https://media.discordapp.net").toString();
		}

		return new URL(`/stickers/${Snowflake.parse(stickerId)}.${format}`, this.baseURL).toString();
	}

	public static roleIcon(roleId: SnowflakeInfer, roleIcon: string, size?: IntegerInfer, format: ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		const url = new URL(`/role-icons/${Snowflake.parse(roleId)}/${roleIcon}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static guildScheduledEventCover(scheduledEventId: SnowflakeInfer, scheduledEventCoverImage: string, size?: IntegerInfer, format: ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		const url = new URL(`/guild-events/${Snowflake.parse(scheduledEventId)}/${scheduledEventCoverImage}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	public static guildMemberBanner(guildId: SnowflakeInfer, userId: SnowflakeInfer, memberBanner: string, size?: IntegerInfer, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		if (!this.isGIF(memberBanner) && format === ImageFormats.GIF) {
			throw new Error("This banner does not support GIF format");
		}

		const url = new URL(`/guilds/${Snowflake.parse(guildId)}/users/${Snowflake.parse(userId)}/banners/${memberBanner}.${format}`, this.baseURL);
		if (size) {
			url.searchParams.append("size", Integer.parse(size).toString());
		}

		return url.toString();
	}

	private static isGIF(hash: string) {
		return hash.startsWith("a_");
	}
}
