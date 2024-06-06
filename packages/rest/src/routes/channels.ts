import type {
	ChannelStructureInfer,
	InviteMetadataStructureInfer,
	InviteStructureInfer,
	MessageStructureInfer,
	SnowflakeInfer,
	ThreadMemberStructureInfer,
	UserStructureInfer,
} from "@lunajs/core";
import {
	AllowedMentionsStructure,
	AttachmentStructure,
	ChannelFlags,
	ChannelFlagsEnum,
	ChannelStructure,
	ChannelTypes,
	ChannelTypesEnum,
	DefaultReactionStructure,
	EmbedStructure,
	ForumLayoutTypesEnum,
	ForumTagStructure,
	Integer,
	InviteTargetTypesEnum,
	ISO8601Timestamp,
	MessageFlags,
	MessageReferenceStructure,
	OverwriteStructure,
	PollStructure,
	Snowflake,
	SortOrderTypesEnum,
	ThreadMemberStructure,
	VideoQualityModesEnum,
} from "@lunajs/core";
import { FormData } from "undici";
import { z } from "zod";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#get-channel}
 */
export function GetChannel(channelId: SnowflakeInfer): RestMakeRequestOptions<ChannelStructureInfer | ThreadMemberStructureInfer> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#modify-channel-json-params-group-dm}
 */
export const ModifyChannelGroupDMJSON = z.object({
	/**
	 * 1-100 character channel name
	 */
	name: z.string().min(1).max(100).optional(),
	/**
	 * base64 encoded icon
	 */
	icon: z.string().base64().optional(),
});

export type ModifyChannelGroupDMJSONInfer = z.infer<typeof ModifyChannelGroupDMJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#modify-channel-json-params-guild-channel}
 */
export const ModifyChannelGuildChannelJSON = z.object({
	/**
	 * 1-100 character channel name
	 */
	name: z.string().min(1).max(100).optional(),
	/**
	 * the type of channel; only conversion between text and announcement is supported and only in guilds with the "NEWS" feature
	 */
	type: ChannelTypesEnum.optional(),
	/**
	 * the position of the channel in the left-hand listing
	 */
	position: Integer.nullable(),
	/**
	 * 0-1024 character channel topic (0-4096 characters for GUILD_FORUM and GUILD_MEDIA channels)
	 */
	topic: z.string().min(0).max(1_024).max(4_096).nullable(),
	/**
	 * whether the channel is nsfw
	 */
	nsfw: z.boolean().nullable(),
	/**
	 * amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages or manage_channel, are unaffected
	 */
	rate_limit_per_user: Integer.min(0).max(21_600).nullable(),
	/**
	 * the bitrate (in bits) of the voice or stage channel; min 8000
	 */
	bitrate: Integer.min(8_000).nullable(),
	/**
	 * the user limit of the voice or stage channel, max 99 for voice channels and 10,000 for stage channels (0 refers to no limit)
	 */
	user_limit: Integer.min(0).max(99).max(10_000).nullable(),
	/**
	 * channel or category-specific permissions
	 */
	permission_overwrites: z.array(OverwriteStructure.partial()).nullable(),
	/**
	 * id of the new parent category for a channel
	 */
	parent_id: Snowflake.nullable(),
	/**
	 * channel voice region id, automatic when set to null
	 */
	rtc_region: z.string().nullable(),
	/**
	 * the camera video quality mode of the voice channel
	 */
	video_quality_mode: VideoQualityModesEnum.nullable(),
	/**
	 * the default duration that the clients use (not the API) for newly created threads in the channel, in minutes, to automatically archive the thread after recent activity
	 */
	default_auto_archive_duration: Integer.nullable(),
	/**
	 * channel flags combined as a bitfield. Currently only REQUIRE_TAG (1 << 4) is supported by GUILD_FORUM and GUILD_MEDIA channels. HIDE_MEDIA_DOWNLOAD_OPTIONS (1 << 15) is supported only by GUILD_MEDIA channels
	 */
	flags: z.union([z.literal(ChannelFlags.RequireTag), z.literal(ChannelFlags.HideMediaDownloadOptions), z.bigint()]).optional(),
	/**
	 * the set of tags that can be used in a GUILD_FORUM or a GUILD_MEDIA channel; limited to 20
	 */
	available_tags: z.array(ForumTagStructure).optional(),
	/**
	 * the emoji to show in the add reaction button on a thread in a GUILD_FORUM or a GUILD_MEDIA channel
	 */
	default_reaction_emoji: DefaultReactionStructure.optional().nullable(),
	/**
	 * the initial rate_limit_per_user to set on newly created threads in a channel. this field is copied to the thread at creation time and does not live update.
	 */
	default_thread_rate_limit_per_user: Integer.optional(),
	/**
	 * the default sort order type used to order posts in GUILD_FORUM and GUILD_MEDIA channels
	 */
	default_sort_order: SortOrderTypesEnum.optional().nullable(),
	/**
	 * the default forum layout type used to display posts in GUILD_FORUM channels
	 */
	default_forum_layout: ForumLayoutTypesEnum.optional(),
});

export type ModifyChannelGuildChannelJSONInfer = z.infer<typeof ModifyChannelGuildChannelJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#modify-channel-json-params-thread}
 */
export const ModifyChannelThreadJSON = z.object({
	/**
	 * 1-100 character channel name
	 */
	name: z.string().min(1).max(100),
	/**
	 * whether the thread is archived
	 */
	archived: z.boolean(),
	/**
	 * the thread will stop showing in the channel list after auto_archive_duration minutes of inactivity, can be set to: 60, 1440, 4320, 10080
	 */
	auto_archive_duration: z.union([z.literal(60), z.literal(1_440), z.literal(4_320), z.literal(10_080)]),
	/**
	 * whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it
	 */
	locked: z.boolean(),
	/**
	 * whether non-moderators can add other non-moderators to a thread; only available on private threads
	 */
	invitable: z.boolean(),
	/**
	 * amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission manage_messages, manage_thread, or manage_channel, are unaffected
	 */
	rate_limit_per_user: Integer.min(0).max(21_600).nullable(),
	/**
	 * channel flags combined as a bitfield; PINNED can only be set for threads in forum and media channels
	 */
	flags: z.union([ChannelFlagsEnum, z.bigint()]).optional(),
	/**
	 * the IDs of the set of tags that have been applied to a thread in a GUILD_FORUM or a GUILD_MEDIA channel; limited to 5
	 */
	applied_tags: z.array(Snowflake).optional(),
});

export type ModifyChannelThreadJSONInfer = z.infer<typeof ModifyChannelThreadJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#modify-channel}
 */
export function ModifyChannel(channelId: SnowflakeInfer, reason: string, json: ModifyChannelGroupDMJSONInfer | ModifyChannelGuildChannelJSONInfer | ModifyChannelThreadJSONInfer): RestMakeRequestOptions<ChannelStructureInfer> {
	return {
		method: "PATCH",
		path: `/channels/${Snowflake.parse(channelId)}`,
		/**
		 * TODO: Parse the JSON body
		 */
		body: JSON.stringify(json),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#deleteclose-channel}
 */
export function DeleteChannel(channelId: SnowflakeInfer, reason: string): RestMakeRequestOptions<ChannelStructureInfer> {
	return {
		method: "DELETE",
		path: `/channels/${Snowflake.parse(channelId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-messages-query-string-params}
 */
export const GetChannelMessagesQuery = z.object({
	/**
	 * Get messages around this message ID
	 */
	around: Snowflake.optional(),
	/**
	 * Get messages before this message ID
	 */
	before: Snowflake.optional(),
	/**
	 * Get messages after this message ID
	 */
	after: Snowflake.optional(),
	/**
	 * Max number of messages to return (1-100)
	 */
	limit: Integer.min(1).max(100).default(50).optional(),
});

export type GetChannelMessagesQueryInfer = z.infer<typeof GetChannelMessagesQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-messages}
 */
export function GetChannelMessages(channelId: SnowflakeInfer, query?: GetChannelMessagesQueryInfer): RestMakeRequestOptions<MessageStructureInfer[]> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}/messages`,
		query: GetChannelMessagesQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-message}
 */
export function GetChannelMessage(channelId: SnowflakeInfer, messageId: SnowflakeInfer): RestMakeRequestOptions<MessageStructureInfer> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}/messages/${Snowflake.parse(messageId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#create-message-jsonform-params}
 */
export const CreateMessageJSONForm = z.object({
	/**
	 * Message contents (up to 2000 characters)
	 */
	content: z.string().max(2_000).optional(),
	/**
	 * Can be used to verify a message was sent (up to 25 characters). Value will appear in the Message Create event.
	 */
	nonce: z.union([Integer.max(25), z.string().max(25)]).optional(),
	/**
	 * true if this is a TTS message
	 */
	tts: z.boolean().optional(),
	/**
	 * Up to 10 rich embeds (up to 6000 characters)
	 */
	embeds: z.array(EmbedStructure).max(10).optional(),
	/**
	 * Allowed mentions for the message
	 */
	allowed_mentions: AllowedMentionsStructure.optional(),
	/**
	 * Include to make your message a reply
	 */
	message_reference: MessageReferenceStructure.optional(),
	/**
	 * TODO: Components to include with the message
	 */
	components: z.array(z.any()).optional(),
	/**
	 * IDs of up to 3 stickers in the server to send in the message
	 */
	sticker_ids: z.array(Snowflake).max(3).optional(),
	/**
	 * Contents of the file being sent. See Uploading Files
	 */
	files: z.unknown().optional(),
	/**
	 * JSON-encoded body of non-file params, only for multipart/form-data requests. See Uploading Files
	 */
	payload_json: z.string().optional(),
	/**
	 * Attachment objects with filename and description. See Uploading Files
	 */
	attachments: z.array(AttachmentStructure).optional(),
	/**
	 * Message flags combined as a bitfield (only SUPPRESS_EMBEDS and SUPPRESS_NOTIFICATIONS can be set)
	 */
	flags: z.union([z.literal(MessageFlags.SuppressEmbeds), z.literal(MessageFlags.SuppressNotifications), z.bigint()]).optional(),
	/**
	 * If true and nonce is present, it will be checked for uniqueness in the past few minutes. If another message was created by the same author with the same nonce, that message will be returned and no new message will be created.
	 */
	enforce_nonce: z.boolean().optional(),
	/**
	 * A poll!
	 */
	poll: PollStructure.optional(),
});

export type CreateMessageJSONFormInfer = z.infer<typeof CreateMessageJSONForm>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#create-message}
 */
export function CreateMessage(channelId: SnowflakeInfer, json: CreateMessageJSONFormInfer): RestMakeRequestOptions<MessageStructureInfer> {
	const form = new FormData();
	form.append("payload_json", JSON.stringify(json));

	return {
		method: "POST",
		path: `/channels/${Snowflake.parse(channelId)}/messages`,
		body: form,
		headers: { "Content-Type": "multipart/form-data" },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#crosspost-message}
 */
export function CrosspostMessage(channelId: SnowflakeInfer, messageId: SnowflakeInfer): RestMakeRequestOptions<MessageStructureInfer> {
	return {
		method: "POST",
		path: `/channels/${Snowflake.parse(channelId)}/messages/${Snowflake.parse(messageId)}/crosspost`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#create-reaction}
 */
export function CreateReaction(channelId: SnowflakeInfer, messageId: SnowflakeInfer, emoji: string): RestMakeRequestOptions<void> {
	return {
		method: "PUT",
		path: `/channels/${Snowflake.parse(channelId)}/messages/${Snowflake.parse(messageId)}/reactions/${encodeURIComponent(emoji)}/@me`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#delete-own-reaction}
 */
export function DeleteOwnReaction(channelId: SnowflakeInfer, messageId: SnowflakeInfer, emoji: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/channels/${Snowflake.parse(channelId)}/messages/${Snowflake.parse(messageId)}/reactions/${encodeURIComponent(emoji)}/@me`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#delete-user-reaction}
 */
export function DeleteUserReaction(channelId: SnowflakeInfer, messageId: SnowflakeInfer, emoji: string, userId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/channels/${Snowflake.parse(channelId)}/messages/${Snowflake.parse(messageId)}/reactions/${encodeURIComponent(emoji)}/${Snowflake.parse(userId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#get-reactions-reaction-types}
 */
export enum ReactionTypes {
	Normal = 0,
	Burst = 1,
}

export const ReactionTypesEnum = z.nativeEnum(ReactionTypes);

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#get-reactions-query-string-params}
 */
export const GetReactionsQuery = z.object({
	/**
	 * The type of reaction
	 */
	type: ReactionTypesEnum.optional(),
	/**
	 * Get users after this user ID
	 */
	after: Snowflake.optional(),
	/**
	 * Max number of users to return (1-100)
	 */
	limit: Integer.min(1).max(100).default(25).optional(),
});

export type GetReactionsQueryInfer = z.infer<typeof GetReactionsQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#get-reactions}
 */
export function GetReactions(channelId: SnowflakeInfer, messageId: SnowflakeInfer, emoji: string, query?: GetReactionsQueryInfer): RestMakeRequestOptions<UserStructureInfer[]> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}/messages/${Snowflake.parse(messageId)}/reactions/${encodeURIComponent(emoji)}`,
		query: GetReactionsQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#delete-all-reactions}
 */
export function DeleteAllReactions(channelId: SnowflakeInfer, messageId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/channels/${Snowflake.parse(channelId)}/messages/${Snowflake.parse(messageId)}/reactions`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#delete-all-reactions-for-emoji}
 */
export function DeleteAllReactionsForEmoji(channelId: SnowflakeInfer, messageId: SnowflakeInfer, emoji: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/channels/${Snowflake.parse(channelId)}/messages/${Snowflake.parse(messageId)}/reactions/${encodeURIComponent(emoji)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#edit-message-jsonform-params}
 */
export const EditMessageJSONForm = z.object({
	/**
	 * Message contents (up to 2000 characters)
	 */
	content: z.string().max(2_000).optional().nullable(),
	/**
	 * Up to 10 rich embeds (up to 6000 characters)
	 */
	embeds: z.array(EmbedStructure).max(10).optional().nullable(),
	/**
	 * Message flags combined as a bitfield (only SUPPRESS_EMBEDS can be set)
	 */
	flags: z.union([z.literal(MessageFlags.SuppressEmbeds), z.bigint()]).optional().nullable(),
	/**
	 * Allowed mentions for the message
	 */
	allowed_mentions: AllowedMentionsStructure.optional().nullable(),
	/**
	 * TODO: Components to include with the message
	 */
	components: z.array(z.any()).optional().nullable(),
	/**
	 * Contents of the file being sent. See Uploading Files
	 */
	files: z.unknown().optional().nullable(),
	/**
	 * JSON-encoded body of non-file params, only for multipart/form-data requests. See Uploading Files
	 */
	payload_json: z.string().optional().nullable(),
	/**
	 * Attachment objects with filename and description. See Uploading Files
	 */
	attachments: z.array(AttachmentStructure).optional().nullable(),
});

export type EditMessageJSONFormInfer = z.infer<typeof EditMessageJSONForm>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#edit-message}
 */
export function EditMessage(channelId: SnowflakeInfer, messageId: SnowflakeInfer, json: EditMessageJSONFormInfer): RestMakeRequestOptions<MessageStructureInfer> {
	const form = new FormData();
	form.append("payload_json", JSON.stringify(json));

	return {
		method: "PATCH",
		path: `/channels/${Snowflake.parse(channelId)}/messages/${Snowflake.parse(messageId)}`,
		body: form,
		headers: { "Content-Type": "multipart/form-data" },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#delete-message}
 */
export function DeleteMessage(channelId: SnowflakeInfer, reason: string, messageId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/channels/${Snowflake.parse(channelId)}/messages/${Snowflake.parse(messageId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#bulk-delete-messages-json-params}
 */
export const BulkDeleteMessagesJSON = z.object({
	/**
	 * An array of message ids to delete (2-100)
	 */
	messages: z.array(Snowflake).min(2).max(100),
});

export type BulkDeleteMessagesJSONInfer = z.infer<typeof BulkDeleteMessagesJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#bulk-delete-messages}
 */
export function BulkDeleteMessages(channelId: SnowflakeInfer, reason: string, json: BulkDeleteMessagesJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "POST",
		path: `/channels/${Snowflake.parse(channelId)}/messages/bulk-delete`,
		body: JSON.stringify(BulkDeleteMessagesJSON.parse(json)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#edit-channel-permissions-json-params}
 */
export const EditChannelPermissionsJSON = z.object({
	/**
	 * the bitwise value of all allowed permissions (default "0")
	 */
	allow: z.string().optional().nullable(),
	/**
	 * the bitwise value of all disallowed permissions (default "0")
	 */
	deny: z.string().optional().nullable(),
	/**
	 * 0 for a role or 1 for a member
	 */
	type: z.union([z.literal(0), z.literal(1)]).optional().nullable(),
});

export type EditChannelPermissionsJSONInfer = z.infer<typeof EditChannelPermissionsJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#edit-channel-permissions}
 */
export function EditChannelPermissions(channelId: SnowflakeInfer, overwriteId: SnowflakeInfer, reason: string, json: EditChannelPermissionsJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PUT",
		path: `/channels/${Snowflake.parse(channelId)}/permissions/${Snowflake.parse(overwriteId)}`,
		body: JSON.stringify(EditChannelPermissionsJSON.parse(json)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-invites}
 */
export function GetChannelInvites(channelId: SnowflakeInfer): RestMakeRequestOptions<InviteMetadataStructureInfer[] | InviteStructureInfer[]> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}/invites`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#create-channel-invite-json-params}
 */
export const CreateChannelInviteJSON = z.object({
	/**
	 * duration of invite in seconds before expiry, or 0 for never. between 0 and 604800 (7 days)
	 */
	max_age: Integer.min(0).max(604_800).default(86_400).optional(),
	/**
	 * max number of uses or 0 for unlimited. between 0 and 100
	 */
	max_uses: Integer.min(0).max(100).default(0).optional(),
	/**
	 * whether this invite only grants temporary membership
	 */
	temporary: z.boolean().optional(),
	/**
	 * if true, don't try to reuse a similar invite (useful for creating many unique one time use invites)
	 */
	unique: z.boolean().optional(),
	/**
	 * the type of target for this voice channel invite
	 */
	target_type: InviteTargetTypesEnum.optional(),
	/**
	 * the id of the user whose stream to display for this invite, required if target_type is 1, the user must be streaming in the channel
	 */
	target_user_id: Snowflake.optional(),
	/**
	 * the id of the embedded application to open for this invite, required if target_type is 2, the application must have the EMBEDDED flag
	 */
	target_application_id: Snowflake.optional(),
});

export type CreateChannelInviteJSONInfer = z.infer<typeof CreateChannelInviteJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#create-channel-invite}
 */
export function CreateChannelInvite(channelId: SnowflakeInfer, reason: string, json: CreateChannelInviteJSONInfer): RestMakeRequestOptions<InviteStructureInfer> {
	return {
		method: "POST",
		path: `/channels/${Snowflake.parse(channelId)}/invites`,
		body: JSON.stringify(CreateChannelInviteJSON.parse(json)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#delete-channel-permission}
 */
export function DeleteChannelPermission(channelId: SnowflakeInfer, overwriteId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/channels/${Snowflake.parse(channelId)}/permissions/${Snowflake.parse(overwriteId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#follow-announcement-channel-json-params}
 */
export const FollowAnnouncementChannelJSON = z.object({
	/**
	 * id of target channel
	 */
	webhook_channel_id: Snowflake,
});

export type FollowAnnouncementChannelJSONInfer = z.infer<typeof FollowAnnouncementChannelJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#follow-announcement-channel}
 */
export function FollowAnnouncementChannel(channelId: SnowflakeInfer, reason: string, json: FollowAnnouncementChannelJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "POST",
		path: `/channels/${Snowflake.parse(channelId)}/followers`,
		body: JSON.stringify(FollowAnnouncementChannelJSON.parse(json)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#trigger-typing-indicator}
 */
export function TriggerTypingIndicator(channelId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "POST",
		path: `/channels/${Snowflake.parse(channelId)}/typing`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#get-pinned-messages}
 */
export function GetPinnedMessages(channelId: SnowflakeInfer): RestMakeRequestOptions<MessageStructureInfer[]> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}/pins`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#pin-message}
 */
export function PinMessage(channelId: SnowflakeInfer, messageId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "PUT",
		path: `/channels/${Snowflake.parse(channelId)}/pins/${Snowflake.parse(messageId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#unpin-message}
 */
export function UnpinMessage(channelId: SnowflakeInfer, messageId: SnowflakeInfer, reason: string): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/channels/${Snowflake.parse(channelId)}/pins/${Snowflake.parse(messageId)}`,
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#group-dm-add-recipient-json-params}
 */
export const GroupDMAddRecipientJSON = z.object({
	/**
	 * access token of a user that has granted your app the gdm.join scope
	 */
	access_token: z.string(),
	/**
	 * nickname of the user being added
	 */
	nick: z.string().optional(),
});

export type GroupDMAddRecipientJSONInfer = z.infer<typeof GroupDMAddRecipientJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#group-dm-add-recipient}
 */
export function GroupDMAddRecipient(channelId: SnowflakeInfer, userId: SnowflakeInfer, json: GroupDMAddRecipientJSONInfer): RestMakeRequestOptions<void> {
	return {
		method: "PUT",
		path: `/channels/${Snowflake.parse(channelId)}/recipients/${Snowflake.parse(userId)}`,
		body: JSON.stringify(GroupDMAddRecipientJSON.parse(json)),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#group-dm-remove-recipient}
 */
export function GroupDMRemoveRecipient(channelId: SnowflakeInfer, userId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/channels/${Snowflake.parse(channelId)}/recipients/${Snowflake.parse(userId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-from-message-json-params}
 */
export const StartThreadFromMessageJSON = z.object({
	/**
	 * 1-100 character channel name
	 */
	name: z.string().min(1).max(100),
	/**
	 * the thread will stop showing in the channel list after auto_archive_duration minutes of inactivity, can be set to: 60, 1440, 4320, 10080
	 */
	auto_archive_duration: z.union([z.literal(60), z.literal(1_440), z.literal(4_320), z.literal(10_080)]),
	/**
	 * amount of seconds a user has to wait before sending another message (0-21600)
	 */
	rate_limit_per_user: Integer.min(0).max(21_600).nullable(),
});

export type StartThreadFromMessageJSONInfer = z.infer<typeof StartThreadFromMessageJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-from-message}
 */
export function StartThreadFromMessage(channelId: SnowflakeInfer, messageId: SnowflakeInfer, reason: string, json: StartThreadFromMessageJSONInfer): RestMakeRequestOptions<ChannelStructureInfer> {
	return {
		method: "POST",
		path: `/channels/${Snowflake.parse(channelId)}/messages/${Snowflake.parse(messageId)}/threads`,
		body: JSON.stringify(StartThreadFromMessageJSON.parse(json)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-without-message-json-params}
 */
export const StartThreadWithoutMessageJSON = z.object({
	/**
	 * 1-100 character channel name
	 */
	name: z.string().min(1).max(100),
	/**
	 * the thread will stop showing in the channel list after auto_archive_duration minutes of inactivity, can be set to: 60, 1440, 4320, 10080
	 */
	auto_archive_duration: z.union([z.literal(60), z.literal(1_440), z.literal(4_320), z.literal(10_080)]).optional(),
	/**
	 * the type of thread to create
	 */
	type: z.union([z.literal(ChannelTypes.AnnouncementThread), z.literal(ChannelTypes.PrivateThread), z.literal(ChannelTypes.PublicThread)]).optional(),
	/**
	 * whether non-moderators can add other non-moderators to a thread; only available when creating a private thread
	 */
	invitable: z.boolean().optional(),
	/**
	 * amount of seconds a user has to wait before sending another message (0-21600)
	 */
	rate_limit_per_user: Integer.min(0).max(21_600).optional().nullable(),
});

export type StartThreadWithoutMessageJSONInfer = z.infer<typeof StartThreadWithoutMessageJSON>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-without-message}
 */
export function StartThreadWithoutMessage(channelId: SnowflakeInfer, reason: string, json: StartThreadWithoutMessageJSONInfer): RestMakeRequestOptions<ChannelStructureInfer> {
	return {
		method: "POST",
		path: `/channels/${Snowflake.parse(channelId)}/threads`,
		body: JSON.stringify(StartThreadWithoutMessageJSON.parse(json)),
		headers: { "X-Audit-Log-Reason": reason },
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel-forum-and-media-thread-message-params-object}
 */
export const StartThreadInForumOrMediaChannelForumAndMediaThreadMessageParams = z.object({
	/**
	 * Message contents (up to 2000 characters)
	 */
	content: z.string().max(2_000).optional(),
	/**
	 * Up to 10 rich embeds (up to 6000 characters)
	 */
	embeds: z.array(EmbedStructure).max(10).optional(),
	/**
	 * Allowed mentions for the message
	 */
	allowed_mentions: AllowedMentionsStructure.optional(),
	/**
	 * TODO: Components to include with the message
	 */
	components: z.array(z.any()).optional(),
	/**
	 * IDs of up to 3 stickers in the server to send in the message
	 */
	sticker_ids: z.array(Snowflake).max(3).optional(),
	/**
	 * Attachment objects with filename and description. See Uploading Files
	 */
	attachments: z.array(AttachmentStructure).optional(),
	/**
	 * Message flags combined as a bitfield (only SUPPRESS_EMBEDS and SUPPRESS_NOTIFICATIONS can be set)
	 */
	flags: z.union([z.literal(MessageFlags.SuppressEmbeds), z.literal(MessageFlags.SuppressNotifications), z.bigint()]).optional(),
});

export type StartThreadInForumOrMediaChannelForumAndMediaThreadMessageParamsInfer = z.infer<typeof StartThreadInForumOrMediaChannelForumAndMediaThreadMessageParams>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel-jsonform-params}
 */
export const StartThreadInForumOrMediaChannelJSONForm = z.object({
	/**
	 * 1-100 character channel name
	 */
	name: z.string().min(1).max(100),
	/**
	 * duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080
	 */
	auto_archive_duration: z.union([z.literal(60), z.literal(1_440), z.literal(4_320), z.literal(10_080)]).optional(),
	/**
	 * amount of seconds a user has to wait before sending another message (0-21600)
	 */
	rate_limit_per_user: Integer.min(0).max(21_600).optional(),
	/**
	 * contents of the first message in the forum/media thread
	 */
	message: StartThreadInForumOrMediaChannelForumAndMediaThreadMessageParams.optional(),
	/**
	 * the IDs of the set of tags that have been applied to a thread in a GUILD_FORUM or a GUILD_MEDIA channel
	 */
	applied_tags: z.array(Snowflake).optional(),
	/**
	 * Contents of the file being sent. See Uploading Files
	 */
	files: z.unknown().optional(),
	/**
	 * JSON-encoded body of non-file params, only for multipart/form-data requests. See Uploading Files
	 */
	payload_json: z.string().optional(),
});

export type StartThreadInForumOrMediaChannelJSONFormInfer = z.infer<typeof StartThreadInForumOrMediaChannelJSONForm>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-in-forum-or-media-channel}
 */
export function StartThreadInForumOrMediaChannel(channelId: SnowflakeInfer, reason: string, json: StartThreadInForumOrMediaChannelJSONFormInfer): RestMakeRequestOptions<ChannelStructureInfer> {
	const form = new FormData();
	form.append("payload_json", JSON.stringify(json));

	return {
		method: "POST",
		path: `/channels/${Snowflake.parse(channelId)}/threads`,
		body: form,
		headers: {
			"Content-Type": "multipart/form-data",
			"X-Audit-Log-Reason": reason,
		},
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#join-thread}
 */
export function JoinThread(channelId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "PUT",
		path: `/channels/${Snowflake.parse(channelId)}/thread-members/@me`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#add-thread-member}
 */
export function AddThreadMember(channelId: SnowflakeInfer, userId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "PUT",
		path: `/channels/${Snowflake.parse(channelId)}/thread-members/${Snowflake.parse(userId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#leave-thread}
 */
export function LeaveThread(channelId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/channels/${Snowflake.parse(channelId)}/thread-members/@me`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#remove-thread-member}
 */
export function RemoveThreadMember(channelId: SnowflakeInfer, userId: SnowflakeInfer): RestMakeRequestOptions<void> {
	return {
		method: "DELETE",
		path: `/channels/${Snowflake.parse(channelId)}/thread-members/${Snowflake.parse(userId)}`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#get-thread-member-query-string-params}
 */
export const GetThreadMemberQuery = z.object({
	/**
	 * Whether to include a guild member object for the thread member
	 */
	with_member: z.boolean().optional(),
});

export type GetThreadMemberQueryInfer = z.infer<typeof GetThreadMemberQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#get-thread-member}
 */
export function GetThreadMember(channelId: SnowflakeInfer, userId: SnowflakeInfer, query?: GetThreadMemberQueryInfer): RestMakeRequestOptions<ThreadMemberStructureInfer> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}/thread-members/${Snowflake.parse(userId)}`,
		query: GetThreadMemberQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-thread-members-query-string-params}
 */
export const ListThreadMembersQuery = z.object({
	/**
	 * Whether to include a guild member object for each thread member
	 */
	with_member: z.boolean().optional(),
	/**
	 * Get thread members after this user ID
	 */
	after: Snowflake.optional(),
	/**
	 * Max number of thread members to return (1-100). Defaults to 100.
	 */
	limit: Integer.min(1).max(100).default(100).optional(),
});

export type ListThreadMembersQueryInfer = z.infer<typeof ListThreadMembersQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-thread-members}
 */
export function ListThreadMembers(channelId: SnowflakeInfer, query?: ListThreadMembersQueryInfer): RestMakeRequestOptions<ThreadMemberStructureInfer[]> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}/thread-members`,
		query: ListThreadMembersQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-public-archived-threads-query-string-params}
 */
export const ListPublicArchivedThreadsQuery = z.object({
	/**
	 * returns threads archived before this timestamp
	 */
	before: ISO8601Timestamp.optional(),
	/**
	 * optional maximum number of threads to return
	 */
	limit: Integer.optional(),
});

export type ListPublicArchivedThreadsQueryInfer = z.infer<typeof ListPublicArchivedThreadsQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-public-archived-threads-response-body}
 */
export const ListPublicArchivedThreadsResponse = z.object({
	/**
	 * the public, archived threads
	 */
	threads: z.array(ChannelStructure),
	/**
	 * a thread member object for each returned thread the current user has joined
	 */
	members: z.array(ThreadMemberStructure),
	/**
	 * whether there are potentially additional threads that could be returned on a subsequent call
	 */
	has_more: z.boolean(),
});

export type ListPublicArchivedThreadsResponseInfer = z.infer<typeof ListPublicArchivedThreadsResponse>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-public-archived-threads}
 */
export function ListPublicArchivedThreads(channelId: SnowflakeInfer, query?: ListPublicArchivedThreadsQueryInfer): RestMakeRequestOptions<ListPublicArchivedThreadsResponseInfer> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}/threads/archived/public`,
		query: ListPublicArchivedThreadsQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-private-archived-threads-query-string-params}
 */
export const ListPrivateArchivedThreadsQuery = z.object({
	/**
	 * returns threads archived before this timestamp
	 */
	before: ISO8601Timestamp.optional(),
	/**
	 * optional maximum number of threads to return
	 */
	limit: Integer.optional(),
});

export type ListPrivateArchivedThreadsQueryInfer = z.infer<typeof ListPrivateArchivedThreadsQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-private-archived-threads-response-body}
 */
export const ListPrivateArchivedThreadsResponse = z.object({
	/**
	 * the private, archived threads
	 */
	threads: z.array(ChannelStructure),
	/**
	 * a thread member object for each returned thread the current user has joined
	 */
	members: z.array(ThreadMemberStructure),
	/**
	 * whether there are potentially additional threads that could be returned on a subsequent call
	 */
	has_more: z.boolean(),
});

export type ListPrivateArchivedThreadsResponseInfer = z.infer<typeof ListPrivateArchivedThreadsResponse>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-private-archived-threads}
 */
export function ListPrivateArchivedThreads(channelId: SnowflakeInfer, query?: ListPrivateArchivedThreadsQueryInfer): RestMakeRequestOptions<ListPrivateArchivedThreadsResponseInfer> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}/threads/archived/private`,
		query: ListPrivateArchivedThreadsQuery.parse(query),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads-query-string-params}
 */
export const ListJoinedPrivateArchivedThreadsQuery = z.object({
	/**
	 * returns threads before this id
	 */
	before: Snowflake.optional(),
	/**
	 * optional maximum number of threads to return
	 */
	limit: Integer.optional(),
});

export type ListJoinedPrivateArchivedThreadsQueryInfer = z.infer<typeof ListJoinedPrivateArchivedThreadsQuery>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads-response-body}
 */
export const ListJoinedPrivateArchivedThreadsResponse = z.object({
	/**
	 * the private, archived threads the current user has joined
	 */
	threads: z.array(ChannelStructure),
	/**
	 * a thread member object for each returned thread the current user has joined
	 */
	members: z.array(ThreadMemberStructure),
	/**
	 * whether there are potentially additional threads that could be returned on a subsequent call
	 */
	has_more: z.boolean(),
});

export type ListJoinedPrivateArchivedThreadsResponseInfer = z.infer<typeof ListJoinedPrivateArchivedThreadsResponse>;

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads}
 */
export function ListJoinedPrivateArchivedThreads(channelId: SnowflakeInfer, query?: ListJoinedPrivateArchivedThreadsQueryInfer): RestMakeRequestOptions<ListJoinedPrivateArchivedThreadsResponseInfer> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}/users/@me/threads/archived/private`,
		query: ListJoinedPrivateArchivedThreadsQuery.parse(query),
	};
}
