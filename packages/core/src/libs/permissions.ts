import { z } from "zod";

/**
 * Enumeration of bitwise permission flags.
 * Represents various permissions that can be assigned to a user or role.
 *
 * @see {@link https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags}
 */
export enum BitwisePermissionFlags {
	/**
	 * Allows creation of instant invites.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.CreateInstantInvite;
	 * console.log(permission); // Output: 1
	 */
	CreateInstantInvite = 1,
	/**
	 * Allows kicking members.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.KickMembers;
	 * console.log(permission); // Output: 2
	 */
	KickMembers = 2,
	/**
	 * Allows banning members.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.BanMembers;
	 * console.log(permission); // Output: 4
	 */
	BanMembers = 4,
	/**
	 * Allows all permissions and bypasses channel permission overwrites.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.Administrator;
	 * console.log(permission); // Output: 8
	 */
	Administrator = 8,
	/**
	 * Allows management and editing of channels.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ManageChannels;
	 * console.log(permission); // Output: 16
	 */
	ManageChannels = 16,
	/**
	 * Allows management and editing of the guild.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ManageGuild;
	 * console.log(permission); // Output: 32
	 */
	ManageGuild = 32,
	/**
	 * Allows for the addition of reactions to messages.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.AddReactions;
	 * console.log(permission); // Output: 64
	 */
	AddReactions = 64,
	/**
	 * Allows for viewing of audit logs.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ViewAuditLog;
	 * console.log(permission); // Output: 128
	 */
	ViewAuditLog = 128,
	/**
	 * Allows for using priority speaker in a voice channel.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.PrioritySpeaker;
	 * console.log(permission); // Output: 256
	 */
	PrioritySpeaker = 256,
	/**
	 * Allows the user to go live.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.Stream;
	 * console.log(permission); // Output: 512
	 */
	Stream = 512,
	/**
	 * Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ViewChannel;
	 * console.log(permission); // Output: 1024
	 */
	ViewChannel = 1_024,
	/**
	 * Allows for sending messages in a channel and creating threads in a forum (does not allow sending messages in threads).
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.SendMessages;
	 * console.log(permission); // Output: 2048
	 */
	SendMessages = 2_048,
	/**
	 * Allows for sending of /tts messages.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.SendTtsMessages;
	 * console.log(permission); // Output: 4096
	 */
	SendTtsMessages = 4_096,
	/**
	 * Allows for deletion of other users' messages.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ManageMessages;
	 * console.log(permission); // Output: 8192
	 */
	ManageMessages = 8_192,
	/**
	 * Links sent by users with this permission will be auto-embedded.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.EmbedLinks;
	 * console.log(permission); // Output: 16384
	 */
	EmbedLinks = 16_384,
	/**
	 * Allows for uploading images and files.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.AttachFiles;
	 * console.log(permission); // Output: 32768
	 */
	AttachFiles = 32_768,
	/**
	 * Allows for reading of message history.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ReadMessageHistory;
	 * console.log(permission); // Output: 65536
	 */
	ReadMessageHistory = 65_536,
	/**
	 * Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.MentionEveryone;
	 * console.log(permission); // Output: 131072
	 */
	MentionEveryone = 131_072,
	/**
	 * Allows the usage of custom emojis from other servers.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.UseExternalEmojis;
	 * console.log(permission); // Output: 262144
	 */
	UseExternalEmojis = 262_144,
	/**
	 * Allows for viewing guild insights.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ViewGuildInsights;
	 * console.log(permission); // Output: 524288
	 */
	ViewGuildInsights = 524_288,
	/**
	 * Allows for joining of a voice channel.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.Connect;
	 * console.log(permission); // Output: 1048576
	 */
	Connect = 1_048_576,
	/**
	 * Allows for speaking in a voice channel.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.Speak;
	 * console.log(permission); // Output: 2097152
	 */
	Speak = 2_097_152,
	/**
	 * Allows for muting members in a voice channel.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.MuteMembers;
	 * console.log(permission); // Output: 4194304
	 */
	MuteMembers = 4_194_304,
	/**
	 * Allows for deafening of members in a voice channel.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.DeafenMembers;
	 * console.log(permission); // Output: 8388608
	 */
	DeafenMembers = 8_388_608,
	/**
	 * Allows for moving of members between voice channels.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.MoveMembers;
	 * console.log(permission); // Output: 16777216
	 */
	MoveMembers = 16_777_216,
	/**
	 * Allows for using voice-activity-detection in a voice channel.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.UseVad;
	 * console.log(permission); // Output: 33554432
	 */
	UseVad = 33_554_432,
	/**
	 * Allows for modification of own nickname.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ChangeNickname;
	 * console.log(permission); // Output: 67108864
	 */
	ChangeNickname = 67_108_864,
	/**
	 * Allows for modification of other users' nicknames.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ManageNicknames;
	 * console.log(permission); // Output: 134217728
	 */
	ManageNicknames = 134_217_728,
	/**
	 * Allows management and editing of roles.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ManageRoles;
	 * console.log(permission); // Output: 268435456
	 */
	ManageRoles = 268_435_456,
	/**
	 * Allows management and editing of webhooks.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ManageWebhooks;
	 * console.log(permission); // Output: 536870912
	 */
	ManageWebhooks = 536_870_912,
	/**
	 * Allows for editing and deleting emojis, stickers, and soundboard sounds created by all users.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ManageGuildExpressions;
	 * console.log(permission); // Output: 1073741824
	 */
	ManageGuildExpressions = 1_073_741_824,
	/**
	 * Allows members to use application commands, including slash commands and context menu commands.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.UseApplicationCommands;
	 * console.log(permission); // Output: 2147483648
	 */
	UseApplicationCommands = 2_147_483_648,
	/**
	 * Allows for requesting to speak in stage channels. (This permission is under active development and may be changed or removed.)
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.RequestToSpeak;
	 * console.log(permission); // Output: 4294967296
	 */
	RequestToSpeak = 4_294_967_296,
	/**
	 * Allows for editing and deleting scheduled events created by all users.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ManageEvents;
	 * console.log(permission); // Output: 8589934592
	 */
	ManageEvents = 8_589_934_592,
	/**
	 * Allows for deleting and archiving threads, and viewing all private threads.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ManageThreads;
	 * console.log(permission); // Output: 17179869184
	 */
	ManageThreads = 17_179_869_184,
	/**
	 * Allows for creating public and announcement threads.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.CreatePublicThreads;
	 * console.log(permission); // Output: 34359738368
	 */
	CreatePublicThreads = 34_359_738_368,
	/**
	 * Allows for creating private threads.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.CreatePrivateThreads;
	 * console.log(permission); // Output: 68719476736
	 */
	CreatePrivateThreads = 68_719_476_736,
	/**
	 * Allows the usage of custom stickers from other servers.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.UseExternalStickers;
	 * console.log(permission); // Output: 137438953472
	 */
	UseExternalStickers = 137_438_953_472,
	/**
	 * Allows for sending messages in threads.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.SendMessagesInThreads;
	 * console.log(permission); // Output: 274877906944
	 */
	SendMessagesInThreads = 274_877_906_944,
	/**
	 * Allows for using Activities (applications with the EMBEDDED flag) in a voice channel.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.UseEmbeddedActivities;
	 * console.log(permission); // Output: 549755813888
	 */
	UseEmbeddedActivities = 549_755_813_888,
	/**
	 * Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from speaking in voice and stage channels.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ModerateMembers;
	 * console.log(permission); // Output: 1099511627776
	 */
	ModerateMembers = 1_099_511_627_776,
	/**
	 * Allows for viewing role subscription insights.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.ViewCreatorMonetizationAnalytics;
	 * console.log(permission); // Output: 2199023255552
	 */
	ViewCreatorMonetizationAnalytics = 2_199_023_255_552,
	/**
	 * Allows for using soundboard in a voice channel.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.UseSoundboard;
	 * console.log(permission); // Output: 4398046511104
	 */
	UseSoundboard = 4_398_046_511_104,
	/**
	 * Allows for creating emojis, stickers, and soundboard sounds, and editing and deleting those created by the current user. Not yet available to developers, see changelog.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.CreateGuildExpressions;
	 * console.log(permission); // Output: 8796093022208
	 */
	CreateGuildExpressions = 8_796_093_022_208,
	/**
	 * Allows for creating scheduled events, and editing and deleting those created by the current user. Not yet available to developers, see changelog.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.CreateEvents;
	 * console.log(permission); // Output: 17592186044416
	 */
	CreateEvents = 17_592_186_044_416,
	/**
	 * Allows the usage of custom soundboard sounds from other servers.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.UseExternalSounds;
	 * console.log(permission); // Output: 35184372088832
	 */
	UseExternalSounds = 35_184_372_088_832,
	/**
	 * Allows sending voice messages.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.SendVoiceMessages;
	 * console.log(permission); // Output: 70368744177664
	 */
	SendVoiceMessages = 70_368_744_177_664,
	/**
	 * Allows sending polls.
	 *
	 * @example
	 * const permission = BitwisePermissionFlags.SendPolls;
	 * console.log(permission); // Output: 281474976710656
	 */
	SendPolls = 281_474_976_710_656,
}

/**
 * Zod schema for bitwise permission flags enumeration.
 * This schema is used for validating {@link BitwisePermissionFlags} values.
 *
 * @example
 * const isValidPermission = BitwisePermissionFlagsEnum.safeParse(BitwisePermissionFlags.Administrator).success;
 */
export const BitwisePermissionFlagsEnum = z.nativeEnum(BitwisePermissionFlags);
