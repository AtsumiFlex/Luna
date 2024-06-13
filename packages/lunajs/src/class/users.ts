import type {
	ApplicationRoleConnectionStructureInfer,
	AvatarDecorationDataStructureInfer,
	ConnectionStructureInfer,
	IntegerInfer,
	UserStructureInfer,
} from "@lunajs/core";
import { ApplicationRoleConnectionStructure, formatUser, ImageFormats, snowflakeToTimestamp } from "@lunajs/core";
import { z } from "zod";
import type { Client } from "./clients";

export class ApplicationRoleConnection {
	public readonly name: ApplicationRoleConnectionStructureInfer["platform_name"];

	public readonly username: ApplicationRoleConnectionStructureInfer["platform_username"];

	public readonly metadata: ApplicationRoleConnectionStructureInfer["metadata"];

	public constructor(public data: ApplicationRoleConnectionStructureInfer) {
		ApplicationRoleConnectionStructure.parse(data);
		this.name = data.platform_name;
		this.username = data.platform_username;
		// TODO: Record à régler
		this.metadata = data.metadata;
	}
}

export const ApplicationRoleConnectionSchema = z.instanceof(ApplicationRoleConnection);

export class Connection {
	public readonly id: ConnectionStructureInfer["id"];

	public readonly name: ConnectionStructureInfer["name"];

	public readonly type: ConnectionStructureInfer["type"];

	public readonly revoked: ConnectionStructureInfer["revoked"];

	public readonly integrations: ConnectionStructureInfer["integrations"];

	public readonly verified: ConnectionStructureInfer["verified"];

	public readonly friendSync: ConnectionStructureInfer["friend_sync"];

	public readonly showActivity: ConnectionStructureInfer["show_activity"];

	public readonly twoWayLink: ConnectionStructureInfer["two_way_link"];

	public readonly visibility: ConnectionStructureInfer["visibility"];

	public constructor(public data: ConnectionStructureInfer) {
		this.id = data.id;
		this.name = data.name;
		this.type = data.type;
		this.revoked = data.revoked;
		this.integrations = data.integrations;
		this.verified = data.verified;
		// eslint-disable-next-line n/no-sync
		this.friendSync = data.friend_sync;
		this.showActivity = data.show_activity;
		this.twoWayLink = data.two_way_link;
		this.visibility = data.visibility;
	}
}

export const ConnectionSchema = z.instanceof(Connection);

export class AvatarDecorationData {
	public readonly asset: AvatarDecorationDataStructureInfer["asset"];

	public readonly skuId: AvatarDecorationDataStructureInfer["sku_id"];

	public constructor(public data: AvatarDecorationDataStructureInfer) {
		this.asset = data.asset;
		this.skuId = data.sku_id;
	}
}

export const AvatarDecorationDataSchema = z.instanceof(AvatarDecorationData);

export class Users {
	public readonly id: UserStructureInfer["id"];

	public readonly username: UserStructureInfer["username"];

	public readonly discriminator: UserStructureInfer["discriminator"];

	public readonly globalName: UserStructureInfer["global_name"];

	public readonly avatar: UserStructureInfer["avatar"];

	public readonly bot: UserStructureInfer["bot"];

	public readonly system: UserStructureInfer["system"];

	public readonly mfaEnabled: UserStructureInfer["mfa_enabled"];

	public readonly banner: UserStructureInfer["banner"];

	public readonly accentColor: UserStructureInfer["accent_color"];

	public readonly locale: UserStructureInfer["locale"];

	public readonly verified: UserStructureInfer["verified"];

	public readonly email: UserStructureInfer["email"];

	public readonly flags: UserStructureInfer["flags"];

	public readonly premiumType: UserStructureInfer["premium_type"];

	public readonly publicFlags: UserStructureInfer["public_flags"];

	public readonly avatarDecorationData: AvatarDecorationData;

	public constructor(private readonly client: Client, public data: UserStructureInfer) {
		this.id = data.id;
		this.username = data.username;
		this.discriminator = data.discriminator;
		this.globalName = data.global_name;
		this.avatar = data.avatar;
		this.bot = data.bot;
		this.system = data.system;
		this.mfaEnabled = data.mfa_enabled;
		this.banner = data.banner;
		this.accentColor = data.accent_color;
		this.locale = data.locale;
		this.verified = data.verified;
		this.email = data.email;
		this.flags = data.flags;
		this.premiumType = data.premium_type;
		this.publicFlags = data.public_flags;
		this.avatarDecorationData = new AvatarDecorationData(data.avatar_decoration_data);
	}

	public get createdAt() {
		const timestamp = snowflakeToTimestamp(this.id);
		return new Date(Number(timestamp));
	}

	public get hexColor() {
		return this.accentColor?.toString(16).padStart(6, "0");
	}

	public avatarURL(size?: IntegerInfer, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		return this.avatar && this.client.cdn.userAvatar(this.id, this.avatar, size, format);
	}

	public bannerURL(size?: IntegerInfer, format: ImageFormats.GIF | ImageFormats.JPEG | ImageFormats.PNG | ImageFormats.WebP = ImageFormats.PNG) {
		return this.banner && this.client.cdn.userBanner(this.id, this.banner, size, format);
	}

	public defaultAvatarURL() {
		return this.client.cdn.defaultUserAvatar(this.id);
	}

	public avatarDecorationURL() {
		return this.avatarDecorationData.asset && this.client.cdn.avatarDecoration(this.avatarDecorationData.asset);
	}

	public format() {
		return formatUser(this.id);
	}
}

export const UserSchema = z.instanceof(Users);

export {
	ConnectionVisibilityTypes,
	ConnectionVisibilityTypesEnum,
	ConnectionServices,
	ConnectionServicesEnum,
	PremiumTypes,
	PremiumTypesEnum,
	UserFlags,
	UserFlagsEnum,
} from "@lunajs/core";
