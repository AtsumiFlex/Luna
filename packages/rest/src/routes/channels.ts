import type {
	ChannelStructureInfer,
	InviteMetadataStructureInfer,
	InviteStructureInfer,
	MessageStructureInfer,
	SnowflakeInfer,
	ThreadMemberStructureInfer,
	UserStructureInfer,
} from "@lunajs/core";
import { Snowflake } from "@lunajs/core";
import { FormData } from "undici";
import type { RestMakeRequestOptions } from "../globals/rest";
import type {
	BulkDeleteMessagesJSONInfer,
	CreateChannelInviteJSONInfer,
	CreateMessageJSONFormInfer,
	EditChannelPermissionsJSONInfer,
	EditMessageJSONFormInfer,
	FollowAnnouncementChannelJSONInfer,
	GetChannelMessagesQueryInfer,
	GetReactionsQueryInfer,
	GetThreadMemberQueryInfer,
	GroupDMAddRecipientJSONInfer,
	ListJoinedPrivateArchivedThreadsQueryInfer,
	ListJoinedPrivateArchivedThreadsResponseInfer,
	ListPrivateArchivedThreadsQueryInfer,
	ListPrivateArchivedThreadsResponseInfer,
	ListPublicArchivedThreadsQueryInfer,
	ListPublicArchivedThreadsResponseInfer,
	ListThreadMembersQueryInfer,
	ModifyChannelGroupDMJSONInfer,
	ModifyChannelGuildChannelJSONInfer,
	ModifyChannelThreadJSONInfer,
	StartThreadFromMessageJSONInfer,
	StartThreadInForumOrMediaChannelJSONFormInfer,
	StartThreadWithoutMessageJSONInfer,
} from "../libs/channels";
import {
	BulkDeleteMessagesJSON,
	CreateChannelInviteJSON,
	EditChannelPermissionsJSON,
	FollowAnnouncementChannelJSON,
	GetChannelMessagesQuery,
	GetReactionsQuery,
	GetThreadMemberQuery,
	GroupDMAddRecipientJSON,
	ListJoinedPrivateArchivedThreadsQuery,
	ListPrivateArchivedThreadsQuery,
	ListPublicArchivedThreadsQuery,
	ListThreadMembersQuery,
	StartThreadFromMessageJSON,
	StartThreadWithoutMessageJSON,
} from "../libs/channels";

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
 * @see {@link https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads}
 */
export function ListJoinedPrivateArchivedThreads(channelId: SnowflakeInfer, query?: ListJoinedPrivateArchivedThreadsQueryInfer): RestMakeRequestOptions<ListJoinedPrivateArchivedThreadsResponseInfer> {
	return {
		method: "GET",
		path: `/channels/${Snowflake.parse(channelId)}/users/@me/threads/archived/private`,
		query: ListJoinedPrivateArchivedThreadsQuery.parse(query),
	};
}
