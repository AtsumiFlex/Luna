import { URL } from "node:url";
import type { IntegerInfer, SnowflakeInfer } from "@luna/core";
import { CDN_URL, ImageFormats } from "@luna/core";

export type AttachmentCDNOptions = {
	/**
	 * Hex timestamp indicating when an attachment CDN URL will expire
	 */
	ex: string;
	/**
	 * Unique signature that remains valid until the URL's expiration
	 */
	hm: string;
	/**
	 * Hex timestamp indicating when the URL was issued
	 */
	is: string;
};

export class CDN {
	private static readonly _baseUrl = CDN_URL;

	public static imageDataUri(type: "image/gif" | "image/jpeg" | "image/png", data: string) {
		return `data:${type};base64,${data}`;
	}

	public static customEmoji(emojiId: SnowflakeInfer, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/emojis/${emojiId}.${type}`);
		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static guildIcon(guildId: SnowflakeInfer, guildIcon: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/icons/${guildId}/${guildIcon}.${type}`);
		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static guildSplash(guildId: SnowflakeInfer, guildSplash: string, type: ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/splashes/${guildId}/${guildSplash}.${type}`);
		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static guildDiscoverySplash(guildId: SnowflakeInfer, guildDiscoverySplash: string, type: ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/discovery-splashes/${guildId}/${guildDiscoverySplash}.${type}`);
		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static guildBanner(guildId: SnowflakeInfer, guildBanner: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/banners/${guildId}/${guildBanner}.${type}`);
		if (this._isHashBegin_a(guildBanner) && type === ImageFormats.GIF) {
			return url.toString();
		}

		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static userBanner(userId: SnowflakeInfer, userBanner: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/banners/${userId}/${userBanner}.${type}`);
		if (this._isHashBegin_a(userBanner) && type === ImageFormats.GIF) {
			return url.toString();
		}

		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static defaultUserAvatar(userId: SnowflakeInfer) {
		const hash = (BigInt(userId) >> BigInt(22)) % BigInt(6);
		return `${this._baseUrl}/embed/avatars/${hash}.png`;
	}

	public static userAvatar(userId: SnowflakeInfer, userAvatar: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/avatars/${userId}/${userAvatar}.${type}`);
		if (this._isHashBegin_a(userAvatar) && type === ImageFormats.GIF) {
			return url.toString();
		}

		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static guildMemberAvatar(guildId: SnowflakeInfer, userId: SnowflakeInfer, memberAvatar: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/guilds/${guildId}/users/${userId}/avatars/${memberAvatar}.${type}`);
		if (this._isHashBegin_a(memberAvatar) && type === ImageFormats.GIF) {
			return url.toString();
		}

		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static avatarDecoration(avatarDecorationDataAsset: string) {
		return `${this._baseUrl}/avatar-decoration-presets/${avatarDecorationDataAsset}.png`;
	}

	public static applicationIcon(applicationId: SnowflakeInfer, icon: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/app-icons/${applicationId}/${icon}.${type}`);
		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static applicationCover(applicationId: SnowflakeInfer, coverImage: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/app-icons/${applicationId}/${coverImage}.${type}`);
		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static applicationAsset(applicationId: SnowflakeInfer, assetId: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/app-assets/${applicationId}/${assetId}.${type}`);
		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static achievementIcon(applicationId: SnowflakeInfer, achievementId: SnowflakeInfer, iconHash: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/app-assets/${applicationId}/achievements/${achievementId}/icons/${iconHash}.${type}`);
		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static storePageAsset(applicationId: SnowflakeInfer, assetId: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/app-assets/${applicationId}/store/${assetId}.${type}`);
		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static stickerPackBanner(applicationId: SnowflakeInfer, stickerPackBannerAssetId: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/app-assets/${applicationId}/store/${stickerPackBannerAssetId}.${type}`);
		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static teamIcon(teamId: SnowflakeInfer, teamIcon: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/team-icons/${teamId}/${teamIcon}.${type}`);
		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static sticker(stickerId: SnowflakeInfer, type: ImageFormats.GIF | ImageFormats.Lottie | ImageFormats.PNG = ImageFormats.PNG) {
		const url = new URL(`${this._baseUrl}/stickers/${stickerId}.${type}`);
		if (type === ImageFormats.GIF) {
			url.hostname = "media.discordapp.net";
		}

		return url.toString();
	}

	public static roleIcon(roleId: SnowflakeInfer, roleIcon: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/role-icons/${roleId}/${roleIcon}.${type}`);
		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static guildScheduledEventCover(guildId: SnowflakeInfer, scheduledEventId: SnowflakeInfer, scheduledEventCoverImage: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/guild-events/${guildId}/scheduled_event_id/${scheduledEventCoverImage}.${type}`);
		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	public static guildMemberBanner(guildId: SnowflakeInfer, userId: SnowflakeInfer, memberBanner: string, type: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG, size?: IntegerInfer) {
		const url = new URL(`${this._baseUrl}/guilds/${guildId}/users/${userId}/banners/${memberBanner}.${type}`);
		if (this._isHashBegin_a(memberBanner) && type === ImageFormats.GIF) {
			return url.toString();
		}

		if (size) {
			url.searchParams.set("size", size.toString());
		}

		return url.toString();
	}

	private static _isHashBegin_a(hash: string) {
		return hash.startsWith("a_");
	}
}
