import { GuildMemberStructure, Integer, Snowflake, UserStructure } from "@lunajs/core";
import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#typing-start-typing-start-event-fields}
 */
export const TypingStartFields = z.object({
	/**
	 * ID of the channel
	 */
	channel_id: Snowflake,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake.optional(),
	/**
	 * ID of the user
	 */
	user_id: Snowflake,
	/**
	 * Unix time (in seconds) of when the user started typing
	 */
	timestamp: Integer,
	/**
	 * Member who started typing if this happened in a guild
	 */
	member: GuildMemberStructure.optional(),
});

export type TypingStartFieldsInfer = z.infer<typeof TypingStartFields>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-buttons}
 */
export const ActivityButton = z.object({
	/**
	 * Text shown on the button (1-32 characters)
	 */
	label: z.string().min(1).max(32),
	/**
	 * URL opened when clicking the button (1-512 characters)
	 */
	url: z.string().min(1).max(512),
});

export type ActivityButtonInfer = z.infer<typeof ActivityButton>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-flags}
 */
export enum ActivityFlags {
	Instance = 1,
	Join = 2,
	Spectate = 4,
	JoinRequest = 8,
	Sync = 16,
	Play = 32,
	PartyPrivacyFriends = 64,
	PartyPrivacyVoiceChannel = 128,
	Embedded = 256,
}

export const ActivityFlagsEnum = z.nativeEnum(ActivityFlags);

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-secrets}
 */
export const ActivitySecrets = z.object({
	/**
	 * Secret for joining a party
	 */
	join: z.string().optional(),
	/**
	 * Secret for spectating a game
	 */
	spectate: z.string().optional(),
	/**
	 * Secret for a specific instanced match
	 */
	match: z.string().optional(),
});

export type ActivitySecretsInfer = z.infer<typeof ActivitySecrets>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-assets}
 */
export const ActivityAssets = z.object({
	/**
	 * ID of the large asset
	 */
	large_image: z.string().optional(),
	/**
	 * Text displayed when hovering over the large image of the activity
	 */
	large_text: z.string().optional(),
	/**
	 * ID of the small asset
	 */
	small_image: z.string().optional(),
	/**
	 * Text displayed when hovering over the small image of the activity
	 */
	small_text: z.string().optional(),
});

export type ActivityAssetsInfer = z.infer<typeof ActivityAssets>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-party}
 */
export const ActivityParty = z.object({
	/**
	 * ID of the party
	 */
	id: z.string().optional(),
	/**
	 * Used to show the party's current and maximum size
	 */
	size: z.array(Integer, Integer).length(2).optional(),
});

export type ActivityPartyInfer = z.infer<typeof ActivityParty>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-emoji}
 */
export const ActivityEmoji = z.object({
	/**
	 * Name of the emoji
	 */
	name: z.string(),
	/**
	 * ID of the emoji
	 */
	id: Snowflake.optional(),
	/**
	 * Whether the emoji is animated
	 */
	animated: z.boolean().optional(),
});

export type ActivityEmojiInfer = z.infer<typeof ActivityEmoji>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-timestamps}
 */
export const ActivityTimestamps = z.object({
	/**
	 * Unix time (in milliseconds) of when the activity started
	 */
	start: Integer.optional(),
	/**
	 * Unix time (in milliseconds) of when the activity ends
	 */
	end: Integer.optional(),
});

export type ActivityTimestampsInfer = z.infer<typeof ActivityTimestamps>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-types}
 */
export enum ActivityTypes {
	Game = 0,
	Streaming = 1,
	Listening = 2,
	Watching = 3,
	Custom = 4,
	Competing = 5,
}

export const ActivityTypesEnum = z.nativeEnum(ActivityTypes);

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-structure}
 */
export const ActivityStructure = z.object({
	/**
	 * Activity's name
	 */
	name: z.string(),
	/**
	 * Activity type
	 */
	type: ActivityTypesEnum,
	/**
	 * Stream URL, is validated when type is 1
	 */
	url: z.string().optional().nullable(),
	/**
	 * Unix timestamp (in milliseconds) of when the activity was added to the user's session
	 */
	created_at: Integer,
	/**
	 * Unix timestamps for start and/or end of the game
	 */
	timestamps: ActivityTimestamps.optional(),
	/**
	 * Application ID for the game
	 */
	application_id: Snowflake.optional(),
	/**
	 * What the player is currently doing
	 */
	details: z.string().optional().nullable(),
	/**
	 * User's current party status, or text used for a custom status
	 */
	state: z.string().optional().nullable(),
	/**
	 * Emoji used for a custom status
	 */
	emoji: ActivityEmoji.optional().nullable(),
	/**
	 * Information for the current party of the player
	 */
	party: ActivityParty.optional(),
	/**
	 * Images for the presence and their hover texts
	 */
	assets: ActivityAssets.optional(),
	/**
	 * Secrets for Rich Presence joining and spectating
	 */
	secrets: ActivitySecrets.optional(),
	/**
	 * Whether or not the activity is an instanced game session
	 */
	instance: z.boolean().optional(),
	/**
	 * Activity flags ORd together, describes what the payload includes
	 */
	flags: ActivityFlagsEnum.optional(),
	/**
	 * Custom buttons shown in the Rich Presence (max 2)
	 */
	buttons: z.array(ActivityButton).optional(),
});

export type ActivityStructureInfer = z.infer<typeof ActivityStructure>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#client-status-object}
 */
export const ClientStatus = z.object({
	/**
	 * User's status set for an active desktop (Windows, Linux, Mac) application session
	 */
	desktop: z.string().optional(),
	/**
	 * User's status set for an active mobile (iOS, Android) application session
	 */
	mobile: z.string().optional(),
	/**
	 * User's status set for an active web (browser, bot user) application session
	 */
	web: z.string().optional(),
});

export type ClientStatusInfer = z.infer<typeof ClientStatus>;

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway-events#presence-update-presence-update-event-fields}
 */
export const PresenceUpdateFields = z.object({
	/**
	 * User whose presence is being updated
	 */
	user: UserStructure,
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake,
	/**
	 * Either "idle", "dnd", "online", or "offline"
	 */
	status: z.union([z.literal("idle"), z.literal("dnd"), z.literal("online"), z.literal("offline")]),
	/**
	 * User's current activities
	 */
	activities: z.array(ActivityStructure),
	/**
	 * User's platform-dependent status
	 */
	client_status: ClientStatus,
});

export type PresenceUpdateFieldsInfer = z.infer<typeof PresenceUpdateFields>;

