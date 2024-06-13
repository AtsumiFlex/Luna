import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes}
 */
export enum GatewayOpcodes {
	/**
	 * An event was dispatched.
	 */
	Dispatch = 0,
	/**
	 * Fired periodically by the client to keep the connection alive.
	 */
	Heartbeat = 1,
	/**
	 * Starts a new session during the initial handshake.
	 */
	Identify = 2,
	/**
	 * Update the client's presence.
	 */
	PresenceUpdate = 3,
	/**
	 * Used to join/leave or move between voice channels.
	 */
	VoiceStateUpdate = 4,
	/**
	 * Resume a previous session that was disconnected.
	 */
	Resume = 6,
	/**
	 * You should attempt to reconnect and resume immediately.
	 */
	Reconnect = 7,
	/**
	 * Request information about offline guild members in a large guild.
	 */
	RequestGuildMembers = 8,
	/**
	 * The session has been invalidated. You should reconnect and identify/resume accordingly.
	 */
	InvalidSession = 9,
	/**
	 * Sent immediately after connecting, contains the heartbeat_interval to use.
	 */
	Hello = 10,
	/**
	 * Sent in response to receiving a heartbeat to acknowledge that it has been received.
	 */
	HeartbeatAck = 11,
}

export const GatewayOpcodesEnum = z.nativeEnum(GatewayOpcodes);

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes}
 */
export enum GatewayCloseCodes {
	/**
	 * We're not sure what went wrong. Try reconnecting?
	 */
	UnknownError = 4_000,
	/**
	 * You sent an invalid Gateway opcode or an invalid payload for an opcode. Don't do that!
	 */
	UnknownOpcode = 4_001,
	/**
	 * You sent an invalid payload to Discord. Don't do that!
	 */
	DecodeError = 4_002,
	/**
	 * You sent us a payload prior to identifying.
	 */
	NotAuthenticated = 4_003,
	/**
	 * The account token sent with your identify payload is incorrect.
	 */
	AuthenticationFailed = 4_004,
	/**
	 * You sent more than one identify payload. Don't do that!
	 */
	AlreadyAuthenticated = 4_005,
	/**
	 * The sequence sent when resuming the session was invalid. Reconnect and start a new session.
	 */
	InvalidSeq = 4_007,
	/**
	 * Woah nelly! You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this.
	 */
	RateLimited = 4_008,
	/**
	 * Your session timed out. Reconnect and start a new one.
	 */
	SessionTimedOut = 4_009,
	/**
	 * You sent us an invalid shard when identifying.
	 */
	InvalidShard = 4_010,
	/**
	 * The session would have handled too many guilds - you are required to shard your connection in order to connect.
	 */
	ShardingRequired = 4_011,
	/**
	 * You sent an invalid version for the gateway.
	 */
	InvalidAPIVersion = 4_012,
	/**
	 * You sent an invalid intent for a Gateway Intent. You may have incorrectly calculated the bitwise value.
	 */
	InvalidIntents = 4_013,
	/**
	 * You sent a disallowed intent for a Gateway Intent. You may have tried to specify an intent that you have not enabled or are not approved for.
	 */
	DisallowedIntents = 4_014,
}

export const GatewayCloseCodesEnum = z.nativeEnum(GatewayCloseCodes);

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-opcodes}
 */
export enum VoiceOpcodes {
	/**
	 * Begin a voice websocket connection.
	 */
	Identify = 0,
	/**
	 * Select the voice protocol.
	 */
	SelectProtocol = 1,
	/**
	 * Complete the websocket handshake.
	 */
	Ready = 2,
	/**
	 * Keep the websocket connection alive.
	 */
	Heartbeat = 3,
	/**
	 * Describe the session.
	 */
	SessionDescription = 4,
	/**
	 * Indicate which users are speaking.
	 */
	Speaking = 5,
	/**
	 * Sent to acknowledge a received client heartbeat.
	 */
	HeartbeatAck = 6,
	/**
	 * Resume a connection.
	 */
	Resume = 7,
	/**
	 * Time to wait between sending heartbeats in milliseconds.
	 */
	Hello = 8,
	/**
	 * Acknowledge a successful session resume.
	 */
	Resumed = 9,
	/**
	 * A client has disconnected from the voice channel.
	 */
	ClientDisconnect = 13,
}

export const VoiceOpcodesEnum = z.nativeEnum(VoiceOpcodes);

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#voice-voice-close-event-codes}
 */
export enum VoiceCloseCodes {
	/**
	 * You sent an invalid opcode.
	 */
	UnknownOpcode = 4_001,
	/**
	 * You sent an invalid payload in your identifying to the Gateway.
	 */
	FailedToDecodePayload = 4_002,
	/**
	 * You sent a payload before identifying with the Gateway.
	 */
	NotAuthenticated = 4_003,
	/**
	 * The token you sent in your identify payload is incorrect.
	 */
	AuthenticationFailed = 4_004,
	/**
	 * You sent more than one identify payload. Stahp.
	 */
	AlreadyAuthenticated = 4_005,
	/**
	 * Your session is no longer valid.
	 */
	SessionNoLongerValid = 4_006,
	/**
	 * Your session has timed out.
	 */
	SessionTimeout = 4_009,
	/**
	 * We can't find the server you're trying to connect to.
	 */
	ServerNotFound = 4_011,
	/**
	 * We didn't recognize the protocol you sent.
	 */
	UnknownProtocol = 4_012,
	/**
	 * Channel was deleted, you were kicked, voice server changed, or the main gateway session was dropped. Should not reconnect.
	 */
	Disconnected = 4_014,
	/**
	 * The server crashed. Our bad! Try resuming.
	 */
	VoiceServerCrashed = 4_015,
	/**
	 * We didn't recognize your encryption.
	 */
	UnknownEncryptionMode = 4_016,
}

export const VoiceCloseCodesEnum = z.nativeEnum(VoiceCloseCodes);

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#http-http-response-codes}
 */
export enum HTTPResponseCodes {
	/**
	 * The request completed successfully.
	 */
	OK = 200,
	/**
	 * The entity was created successfully.
	 */
	Created = 201,
	/**
	 * The request completed successfully but returned no content.
	 */
	NoContent = 204,
	/**
	 * The entity was not modified (no action was taken).
	 */
	NotModified = 304,
	/**
	 * The request was improperly formatted, or the server couldn't understand it.
	 */
	BadRequest = 400,
	/**
	 * The Authorization header was missing or invalid.
	 */
	Unauthorized = 401,
	/**
	 * The Authorization token you passed did not have permission to the resource.
	 */
	Forbidden = 403,
	/**
	 * The resource at the location specified doesn't exist.
	 */
	NotFound = 404,
	/**
	 * The HTTP method used is not valid for the location specified.
	 */
	MethodNotAllowed = 405,
	/**
	 * You are being rate limited, see Rate Limits.
	 */
	TooManyRequests = 429,
	/**
	 * There was not a gateway available to process your request. Wait a bit and retry.
	 */
	GatewayUnavailable = 502,
}

export const HTTPResponseCodesEnum = z.nativeEnum(HTTPResponseCodes);

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-json-error-codes}
 */
export enum JSONErrorCodes {
	/**
	 * General error (such as a malformed request body, amongst other things)
	 */
	GeneralError = 0,
	/**
	 * Unknown account
	 */
	UnknownAccount = 10_001,
	/**
	 * Unknown application
	 */
	UnknownApplication = 10_002,
	/**
	 * Unknown channel
	 */
	UnknownChannel = 10_003,
	/**
	 * Unknown guild
	 */
	UnknownGuild = 10_004,
	/**
	 * Unknown integration
	 */
	UnknownIntegration = 10_005,
	/**
	 * Unknown invite
	 */
	UnknownInvite = 10_006,
	/**
	 * Unknown member
	 */
	UnknownMember = 10_007,
	/**
	 * Unknown message
	 */
	UnknownMessage = 10_008,
	/**
	 * Unknown permission overwrite
	 */
	UnknownPermissionOverwrite = 10_009,
	/**
	 * Unknown provider
	 */
	UnknownProvider = 10_010,
	/**
	 * Unknown role
	 */
	UnknownRole = 10_011,
	/**
	 * Unknown token
	 */
	UnknownToken = 10_012,
	/**
	 * Unknown user
	 */
	UnknownUser = 10_013,
	/**
	 * Unknown emoji
	 */
	UnknownEmoji = 10_014,
	/**
	 * Unknown webhook
	 */
	UnknownWebhook = 10_015,
	/**
	 * Unknown webhook service
	 */
	UnknownWebhookService = 10_016,
	/**
	 * Unknown session
	 */
	UnknownSession = 10_020,
	/**
	 * Unknown ban
	 */
	UnknownBan = 10_026,
	/**
	 * Unknown SKU
	 */
	UnknownSKU = 10_027,
	/**
	 * Unknown Store Listing
	 */
	UnknownStoreListing = 10_028,
	/**
	 * Unknown entitlement
	 */
	UnknownEntitlement = 10_029,
	/**
	 * Unknown build
	 */
	UnknownBuild = 10_030,
	/**
	 * Unknown lobby
	 */
	UnknownLobby = 10_031,
	/**
	 * Unknown branch
	 */
	UnknownBranch = 10_032,
	/**
	 * Unknown store directory layout
	 */
	UnknownStoreDirectoryLayout = 10_033,
	/**
	 * Unknown redistributable
	 */
	UnknownRedistributable = 10_036,
	/**
	 * Unknown gift code
	 */
	UnknownGiftCode = 10_038,
	/**
	 * Unknown stream
	 */
	UnknownStream = 10_049,
	/**
	 * Unknown premium server subscribe cooldown
	 */
	UnknownPremiumServerSubscribeCooldown = 10_050,
	/**
	 * Unknown guild template
	 */
	UnknownGuildTemplate = 10_057,
	/**
	 * Unknown discoverable server category
	 */
	UnknownDiscoverableServerCategory = 10_059,
	/**
	 * Unknown sticker
	 */
	UnknownSticker = 10_060,
	/**
	 * Unknown interaction
	 */
	UnknownInteraction = 10_062,
	/**
	 * Unknown application command
	 */
	UnknownApplicationCommand = 10_063,
	/**
	 * Unknown voice state
	 */
	UnknownVoiceState = 10_065,
	/**
	 * Unknown application command permissions
	 */
	UnknownApplicationCommandPermissions = 10_066,
	/**
	 * Unknown Stage Instance
	 */
	UnknownStageInstance = 10_067,
	/**
	 * Unknown Guild Member Verification Form
	 */
	UnknownGuildMemberVerificationForm = 10_068,
	/**
	 * Unknown Guild Welcome Screen
	 */
	UnknownGuildWelcomeScreen = 10_069,
	/**
	 * Unknown Guild Scheduled Event
	 */
	UnknownGuildScheduledEvent = 10_070,
	/**
	 * Unknown Guild Scheduled Event User
	 */
	UnknownGuildScheduledEventUser = 10_071,
	/**
	 * Unknown Tag
	 */
	UnknownTag = 10_087,
	/**
	 * Bots cannot use this endpoint
	 */
	BotsCannotUseThisEndpoint = 20_001,
	/**
	 * Only bots can use this endpoint
	 */
	OnlyBotsCanUseThisEndpoint = 20_002,
	/**
	 * Explicit content cannot be sent to the desired recipient(s)
	 */
	ExplicitContentCannotBeSentToTheDesiredRecipients = 20_009,
	/**
	 * You are not authorized to perform this action on this application
	 */
	NotAuthorizedToPerformThisActionOnThisApplication = 20_012,
	/**
	 * This action cannot be performed due to slowmode rate limit
	 */
	ActionCannotBePerformedDueToSlowmodeRateLimit = 20_016,
	/**
	 * Only the owner of this account can perform this action
	 */
	OnlyTheOwnerOfThisAccountCanPerformThisAction = 20_018,
	/**
	 * This message cannot be edited due to announcement rate limits
	 */
	MessageCannotBeEditedDueToAnnouncementRateLimits = 20_022,
	/**
	 * Under minimum age
	 */
	UnderMinimumAge = 20_024,
	/**
	 * The channel you are writing has hit the write rate limit
	 */
	ChannelYouAreWritingHasHitTheWriteRateLimit = 20_028,
	/**
	 * The write action you are performing on the server has hit the write rate limit
	 */
	WriteActionYouArePerformingOnTheServerHasHitTheWriteRateLimit = 20_029,
	/**
	 * Your Stage topic, server name, server description, or channel names contain words that are not allowed
	 */
	StageTopicServerNameServerDescriptionOrChannelNamesContainWordsThatAreNotAllowed = 20_031,
	/**
	 * Guild premium subscription level too low
	 */
	GuildPremiumSubscriptionLevelTooLow = 20_035,
	/**
	 * Maximum number of guilds reached (100)
	 */
	MaximumNumberOfGuildsReached = 30_001,
	/**
	 * Maximum number of friends reached (1000)
	 */
	MaximumNumberOfFriendsReached = 30_002,
	/**
	 * Maximum number of pins reached for the channel (50)
	 */
	MaximumNumberOfPinsReachedForTheChannel = 30_003,
	/**
	 * Maximum number of recipients reached (10)
	 */
	MaximumNumberOfRecipientsReached = 30_004,
	/**
	 * Maximum number of guild roles reached (250)
	 */
	MaximumNumberOfGuildRolesReached = 30_005,
	/**
	 * Maximum number of webhooks reached (15)
	 */
	MaximumNumberOfWebhooksReached = 30_007,
	/**
	 * Maximum number of emojis reached
	 */
	MaximumNumberOfEmojisReached = 30_008,
	/**
	 * Maximum number of reactions reached (20)
	 */
	MaximumNumberOfReactionsReached = 30_010,
	/**
	 * Maximum number of group DMs reached (10)
	 */
	MaximumNumberOfGroupDMsReached = 30_011,
	/**
	 * Maximum number of guild channels reached (500)
	 */
	MaximumNumberOfGuildChannelsReached = 30_013,
	/**
	 * Maximum number of attachments in a message reached (10)
	 */
	MaximumNumberOfAttachmentsInAMessageReached = 30_015,
	/**
	 * Maximum number of invites reached (1000)
	 */
	MaximumNumberOfInvitesReached = 30_016,
	/**
	 * Maximum number of animated emojis reached
	 */
	MaximumNumberOfAnimatedEmojisReached = 30_018,
	/**
	 * Maximum number of server members reached
	 */
	MaximumNumberOfServerMembersReached = 30_019,
	/**
	 * Maximum number of server categories has been reached (5)
	 */
	MaximumNumberOfServerCategoriesHasBeenReached = 30_030,
	/**
	 * Guild already has a template
	 */
	GuildAlreadyHasATemplate = 30_031,
	/**
	 * Maximum number of application commands reached
	 */
	MaximumNumberOfApplicationCommandsReached = 30_032,
	/**
	 * Maximum number of thread participants has been reached (1000)
	 */
	MaximumNumberOfThreadParticipantsHasBeenReached = 30_033,
	/**
	 * Maximum number of daily application command creates has been reached (200)
	 */
	MaximumNumberOfDailyApplicationCommandCreatesHasBeenReached = 30_034,
	/**
	 * Maximum number of bans for non-guild members have been exceeded
	 */
	MaximumNumberOfBansForNonGuildMembersHaveBeenExceeded = 30_035,
	/**
	 * Maximum number of bans fetches has been reached
	 */
	MaximumNumberOfBansFetchesHasBeenReached = 30_037,
	/**
	 * Maximum number of uncompleted guild scheduled events reached (100)
	 */
	MaximumNumberOfUncompletedGuildScheduledEventsReached = 30_038,
	/**
	 * Maximum number of stickers reached
	 */
	MaximumNumberOfStickersReached = 30_039,
	/**
	 * Maximum number of prune requests has been reached. Try again later
	 */
	MaximumNumberOfPruneRequestsHasBeenReached = 30_040,
	/**
	 * Maximum number of guild widget settings updates has been reached. Try again later
	 */
	MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReached = 30_042,
	/**
	 * Maximum number of edits to messages older than 1 hour reached. Try again later
	 */
	MaximumNumberOfEditsToMessagesOlderThan1HourReached = 30_046,
	/**
	 * Maximum number of pinned threads in a forum channel has been reached
	 */
	MaximumNumberOfPinnedThreadsInAForumChannelHasBeenReached = 30_047,
	/**
	 * Maximum number of tags in a forum channel has been reached
	 */
	MaximumNumberOfTagsInAForumChannelHasBeenReached = 30_048,
	/**
	 * Bitrate is too high for channel of this type
	 */
	BitrateIsTooHighForChannelOfThisType = 30_052,
	/**
	 * Maximum number of premium emojis reached (25)
	 */
	MaximumNumberOfPremiumEmojisReached = 30_056,
	/**
	 * Maximum number of webhooks per guild reached (1000)
	 */
	MaximumNumberOfWebhooksPerGuildReached = 30_058,
	/**
	 * Maximum number of channel permission overwrites reached (1000)
	 */
	MaximumNumberOfChannelPermissionOverwritesReached = 30_060,
	/**
	 * The channels for this guild are too large
	 */
	TheChannelsForThisGuildAreTooLarge = 30_061,
	/**
	 * Unauthorized. Provide a valid token and try again
	 */
	Unauthorized = 40_001,
	/**
	 * You need to verify your account in order to perform this action
	 */
	YouNeedToVerifyYourAccountInOrderToPerformThisAction = 40_002,
	/**
	 * You are opening direct messages too fast
	 */
	YouAreOpeningDirectMessagesTooFast = 40_003,
	/**
	 * Send messages has been temporarily disabled
	 */
	SendMessagesHasBeenTemporarilyDisabled = 40_004,
	/**
	 * Request entity too large. Try sending something smaller in size
	 */
	RequestEntityTooLarge = 40_005,
	/**
	 * This feature has been temporarily disabled server-side
	 */
	ThisFeatureHasBeenTemporarilyDisabledServerSide = 40_006,
	/**
	 * The user is banned from this guild
	 */
	TheUserIsBannedFromThisGuild = 40_007,
	/**
	 * Connection has been revoked
	 */
	ConnectionHasBeenRevoked = 40_012,
	/**
	 * Target user is not connected to voice
	 */
	TargetUserIsNotConnectedToVoice = 40_032,
	/**
	 * This message has already been crossposted
	 */
	ThisMessageHasBeenCrossposted = 40_033,
	/**
	 * An application command with that name already exists
	 */
	AnApplicationCommandWithThatNameAlreadyExists = 40_041,
	/**
	 * Application interaction failed to send
	 */
	ApplicationInteractionFailedToSend = 40_043,
	/**
	 * Cannot send a message in a forum channel
	 */
	CannotSendAMessageInAForumChannel = 40_058,
	/**
	 * Interaction has already been acknowledged
	 */
	InteractionHasAlreadyBeenAcknowledged = 40_060,
	/**
	 * Tag names must be unique
	 */
	TagNamesMustBeUnique = 40_061,
	/**
	 * Service resource is being rate limited
	 */
	ServiceResourceIsBeingRateLimited = 40_062,
	/**
	 * There are no tags available that can be set by non-moderators
	 */
	ThereAreNoTagsAvailableThatCanBeSetByNonModerators = 40_066,
	/**
	 * A tag is required to create a forum post in this channel
	 */
	ATagIsRequiredToCreateAForumPostInThisChannel = 40_067,
	/**
	 * An entitlement has already been granted for this resource
	 */
	AnEntitlementHasBeenAlreadyGrantedForThisResource = 40_074,
	/**
	 * Cloudflare is blocking your request. This can often be resolved by setting a proper User Agent
	 */
	CloudflareIsBlockingYourRequest = 40_333,
	/**
	 * Missing access
	 */
	MissingAccess = 50_001,
	/**
	 * Invalid account type
	 */
	InvalidAccountType = 50_002,
	/**
	 * Cannot execute action on a DM channel
	 */
	CannotExecuteActionOnADMChannel = 50_003,
	/**
	 * Guild widget disabled
	 */
	GuildWidgetDisabled = 50_004,
	/**
	 * Cannot edit a message authored by another user
	 */
	CannotEditAMessageAuthoredByAnotherUser = 50_005,
	/**
	 * Cannot send an empty message
	 */
	CannotSendAnEmptyMessage = 50_006,
	/**
	 * Cannot send messages to this user
	 */
	CannotSendMessagesToThisUser = 50_007,
	/**
	 * Cannot send messages in a non-text channel
	 */
	CannotSendMessagesInANonTextChannel = 50_008,
	/**
	 * Channel verification level is too high for you to gain access
	 */
	ChannelVerificationLevelIsTooHighForYouToGainAccess = 50_009,
	/**
	 * OAuth2 application does not have a bot
	 */
	OAuth2ApplicationDoesNotHaveABot = 50_010,
	/**
	 * OAuth2 application limit reached
	 */
	OAuth2ApplicationLimitReached = 50_011,
	/**
	 * Invalid OAuth2 state
	 */
	InvalidOAuth2State = 50_012,
	/**
	 * You lack permissions to perform that action
	 */
	YouLackPermissionsToPerformThatAction = 50_013,
	/**
	 * Invalid authentication token provided
	 */
	InvalidAuthenticationTokenProvided = 50_014,
	/**
	 * Note was too long
	 */
	NoteWasTooLong = 50_015,
	/**
	 * Provided too few or too many messages to delete. Must provide at least 2 and fewer than 100 messages to delete
	 */
	ProvidedTooFewOrTooManyMessagesToDelete = 50_016,
	/**
	 * Invalid MFA Level
	 */
	InvalidMFALevel = 50_017,
	/**
	 * A message can only be pinned to the channel it was sent in
	 */
	AMessageCanOnlyBePinnedToTheChannelItWasSentIn = 50_019,
	/**
	 * Invite code was either invalid or taken
	 */
	InviteCodeWasEitherInvalidOrTaken = 50_020,
	/**
	 * Cannot execute action on a system message
	 */
	CannotExecuteActionOnASystemMessage = 50_021,
	/**
	 * Cannot execute action on this channel type
	 */
	CannotExecuteActionOnThisChannelType = 50_024,
	/**
	 * Invalid OAuth2 access token provided
	 */
	InvalidOAuth2AccessTokenProvided = 50_025,
	/**
	 * Missing required OAuth2 scope
	 */
	MissingRequiredOAuth2Scope = 50_026,
	/**
	 * Invalid webhook token provided
	 */
	InvalidWebhookTokenProvided = 50_027,
	/**
	 * Invalid role
	 */
	InvalidRole = 50_028,
	/**
	 * Invalid Recipient(s)
	 */
	InvalidRecipients = 50_033,
	/**
	 * A message provided was too old to bulk delete
	 */
	AMessageProvidedWasTooOldToBulkDelete = 50_034,
	/**
	 * Invalid form body (returned for both application/json and multipart/form-data bodies), or invalid Content-Type provided
	 */
	InvalidFormBody = 50_035,
	/**
	 * An invite was accepted to a guild the application's bot is not in
	 */
	AnInviteWasAcceptedToAGuildTheApplicationsBotIsNotIn = 50_036,
	/**
	 * Invalid Activity Action
	 */
	InvalidActivityAction = 50_039,
	/**
	 * Invalid API version provided
	 */
	InvalidAPIVersionProvided = 50_041,
	/**
	 * File uploaded exceeds the maximum size
	 */
	FileUploadedExceedsTheMaximumSize = 50_045,
	/**
	 * Invalid file uploaded
	 */
	InvalidFileUploaded = 50_046,
	/**
	 * Cannot self-redeem this gift
	 */
	CannotSelfRedeemThisGift = 5_054,
	/**
	 * Invalid Guild
	 */
	InvalidGuild = 50_055,
	/**
	 * Invalid SKU
	 */
	InvalidSKU = 50_057,
	/**
	 * Invalid request origin
	 */
	InvalidRequestOrigin = 50_067,
	/**
	 * Invalid message type
	 */
	InvalidMessageType = 50_068,
	/**
	 * Payment source required to redeem gift
	 */
	PaymentSourceRequiredToRedeemGift = 50_070,
	/**
	 * Cannot modify a system webhook
	 */
	CannotModifyASystemWebhook = 50_073,
	/**
	 * Cannot delete a channel required for Community guilds
	 */
	CannotDeleteAChannelRequiredForCommunityGuilds = 50_074,
	/**
	 * Cannot edit stickers within a message
	 */
	CannotEditStickersWithinAMessage = 50_080,
	/**
	 * Invalid sticker sent
	 */
	InvalidStickerSent = 50_081,
	/**
	 * Tried to perform an operation on an archived thread, such as editing a message or adding a user to the thread
	 */
	TriedToPerformAnOperationOnAnArchivedThread = 50_083,
	/**
	 * Invalid thread notification settings
	 */
	InvalidThreadNotificationSettings = 50_084,
	/**
	 * before value is earlier than the thread creation date
	 */
	BeforeValueIsEarlierThanTheThreadCreationDate = 50_085,
	/**
	 * Community server channels must be text channels
	 */
	CommunityServerChannelsMustBeTextChannels = 50_086,
	/**
	 * The entity type of the event is different from the entity you are trying to start the event for
	 */
	TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor = 50_091,
	/**
	 * This server is not available in your location
	 */
	ThisServerIsNotAvailableInYourLocation = 50_095,
	/**
	 * This server needs monetization enabled in order to perform this action
	 */
	ThisServerNeedsMonetizationEnabledInOrderToPerformThisAction = 50_097,
	/**
	 * This server needs more boosts to perform this action
	 */
	ThisServerNeedsMoreBoostsToPerformThisAction = 50_101,
	/**
	 * The request body contains invalid JSON.
	 */
	TheRequestBodyContainsInvalidJSON = 50_109,
	/**
	 * Owner cannot be pending member
	 */
	OwnerCannotBePendingMember = 50_131,
	/**
	 * Ownership cannot be transferred to a bot user
	 */
	OwnershipCannotBeTransferredToABotUser = 50_132,
	/**
	 * Failed to resize asset below the maximum size: 262144
	 */
	FailedToResizeAssetBelowTheMaximumSize = 50_138,
	/**
	 * Cannot mix subscription and non subscription roles for an emoji
	 */
	CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji = 50_144,
	/**
	 * Cannot convert between premium emoji and normal emoji
	 */
	CannotConvertBetweenPremiumEmojiAndNormalEmoji = 50_145,
	/**
	 * Uploaded file not found.
	 */
	UploadedFileNotFound = 50_146,
	/**
	 * Voice messages do not support additional content.
	 */
	VoiceMessagesDoNotSupportAdditionalContent = 50_159,
	/**
	 * Voice messages must have a single audio attachment.
	 */
	VoiceMessagesMustHaveASingleAudioAttachment = 50_160,
	/**
	 * Voice messages must have supporting metadata.
	 */
	VoiceMessagesMustHaveSupportingMetadata = 50_161,
	/**
	 * Voice messages cannot be edited.
	 */
	VoiceMessagesCannotBeEdited = 50_162,
	/**
	 * Cannot delete guild subscription integration
	 */
	CannotDeleteGuildSubscriptionIntegration = 50_163,
	/**
	 * You cannot send voice messages in this channel.
	 */
	YouCannotSendVoiceMessagesInThisChannel = 50_173,
	/**
	 * The user account must first be verified
	 */
	TheUserAccountMustFirstBeVerified = 50_178,
	/**
	 * You do not have permission to send this sticker.
	 */
	YouDoNotHavePermissionToSendThisSticker = 50_600,
	/**
	 * Two factor is required for this operation
	 */
	TwoFactorIsRequiredForThisOperation = 60_003,
	/**
	 * No users with DiscordTag exist
	 */
	NoUsersWithDiscordTagExist = 80_004,
	/**
	 * Reaction was blocked
	 */
	ReactionWasBlocked = 90_001,
	/**
	 * User cannot use burst reactions
	 */
	UserCannotUseBurstReactions = 90_002,
	/**
	 * Application not yet available. Try again later
	 */
	ApplicationNotYetAvailable = 110_001,
	/**
	 * API resource is currently overloaded. Try again a little later
	 */
	APIResourceIsCurrentlyOverloaded = 130_000,
	/**
	 * The Stage is already open
	 */
	TheStageIsAlreadyOpen = 150_006,
	/**
	 * Cannot reply without permission to read message history
	 */
	CannotReplyWithoutPermissionToReadMessageHistory = 160_002,
	/**
	 * A thread has already been created for this message
	 */
	AThreadHasBeenAlreadyCreatedForThisMessage = 160_004,
	/**
	 * Thread is locked
	 */
	ThreadIsLocked = 160_005,
	/**
	 * Maximum number of active threads reached
	 */
	MaximumNumberOfActiveThreadsReached = 160_006,
	/**
	 * Maximum number of active announcement threads reached
	 */
	MaximumNumberOfActiveAnnouncementThreadsReached = 160_007,
	/**
	 * Invalid JSON for uploaded Lottie file
	 */
	InvalidJSONForUploadedLottieFile = 170_001,
	/**
	 * Uploaded Lotties cannot contain rasterized images such as PNG or JPEG
	 */
	UploadedLottiesCannotContainRasterizedImagesSuchAsPNGOrJPEG = 170_002,
	/**
	 * Stickers maximum framerate exceeded
	 */
	StickerMaximumFramerateExceeded = 170_003,
	/**
	 * Stickers frame count exceeds maximum of 1000 frames
	 */
	StickerFrameCountExceedsMaximumOf1000Frames = 170_004,
	/**
	 * Lottie animation maximum dimensions exceeded
	 */
	LottieAnimationMaximumDimensionsExceeded = 170_005,
	/**
	 * Stickers frame rate is either too small or too large
	 */
	StickerFrameRateIsEitherTooSmallOrTooLarge = 170_006,
	/**
	 * Stickers animation duration exceeds maximum of 5 seconds
	 */
	StickerAnimationDurationExceedsMaximumOf5Seconds = 170_007,
	/**
	 * Cannot update a finished event
	 */
	CannotUpdateAFinishedEvent = 180_000,
	/**
	 * Failed to create stage needed for stage event
	 */
	FailedToCreateStageNeededForStageEvent = 180_002,
	/**
	 * Message was blocked by automatic moderation
	 */
	MessageWasBlockedByAutomaticModeration = 200_000,
	/**
	 * Title was blocked by automatic moderation
	 */
	TitleWasBlockedByAutomaticModeration = 200_001,
	/**
	 * Webhooks posted to forum channels must have a thread_name or thread_id
	 */
	WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadID = 220_001,
	/**
	 * Webhooks posted to forum channels cannot have both a thread_name and thread_id
	 */
	WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadID = 220_002,
	/**
	 * Webhooks posted to forum channels can only create threads in forum channels
	 */
	WebhooksPostedToForumChannelsCanOnlyCreateThreadsInForumChannels = 220_003,
	/**
	 * Webhook services cannot be used in forum channels
	 */
	WebhookServicesCannotBeUsedInForumChannels = 220_004,
	/**
	 * Message blocked by harmful links filter
	 */
	MessageBlockedByHarmfulLinksFilter = 240_000,
	/**
	 * Cannot enable onboarding, requirements are not met
	 */
	CannotEnableOnboardingRequirementsAreNotMet = 350_000,
	/**
	 * Cannot update onboarding while below requirements
	 */
	CannotUpdateOnboardingWhileBelowRequirements = 350_001,
	/**
	 * Failed to ban users
	 */
	FailedToBanUsers = 500_000,
	/**
	 * Poll voting blocked
	 */
	PollVotingBlocked = 520_000,
	/**
	 * Poll expired
	 */
	PollExpired = 520_001,
	/**
	 * Invalid channel type for poll creation
	 */
	InvalidChannelTypeForPollCreation = 520_002,
	/**
	 * Cannot edit a poll message
	 */
	CannotEditAPollMessage = 520_003,
	/**
	 * Cannot use an emoji included with the poll
	 */
	CannotUseAnEmojiIncludedWithThePoll = 520_004,
	/**
	 * Cannot expire a non-poll message
	 */
	CannotExpireANonPollMessage = 520_006,
}

export const JSONErrorCodesEnum = z.nativeEnum(JSONErrorCodes);

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-error-codes}
 */
export enum RPCErrorCodes {
	/**
	 * An unknown error occurred.
	 */
	UnknownError = 1_000,
	/**
	 * You sent an invalid payload.
	 */
	InvalidPayload = 4_000,
	/**
	 * Invalid command name specified.
	 */
	InvalidCommand = 4_002,
	/**
	 * Invalid guild ID specified.
	 */
	InvalidGuild = 4_003,
	/**
	 * Invalid event name specified.
	 */
	InvalidEvent = 4_004,
	/**
	 * Invalid channel ID specified.
	 */
	InvalidChannel = 4_005,
	/**
	 * You lack permissions to access the given resource.
	 */
	InvalidPermissions = 4_006,
	/**
	 * An invalid OAuth2 application ID was used to authorize or authenticate with.
	 */
	InvalidClientID = 4_007,
	/**
	 * An invalid OAuth2 application origin was used to authorize or authenticate with.
	 */
	InvalidOrigin = 4_008,
	/**
	 * An invalid OAuth2 token was used to authorize or authenticate with.
	 */
	InvalidToken = 4_009,
	/**
	 * The specified user ID was invalid.
	 */
	InvalidUser = 4_010,
	/**
	 * A standard OAuth2 error occurred; check the data object for the OAuth2 error details.
	 */
	OAuth2Error = 5_000,
	/**
	 * An asynchronous SELECT_TEXT_CHANNEL/SELECT_VOICE_CHANNEL command timed out.
	 */
	SelectChannelTimedOut = 5_001,
	/**
	 * An asynchronous GET_GUILD command timed out.
	 */
	GetGuildTimedOut = 5_002,
	/**
	 * You tried to join a user to a voice channel but the user was already in one.
	 */
	SelectVoiceForceRequired = 5_003,
	/**
	 * You tried to capture more than one shortcut key at once.
	 */
	CaptureShortcutAlreadyListening = 5_004,
}

export const RPCErrorCodesEnum = z.nativeEnum(RPCErrorCodes);

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-close-event-codes}
 */
export enum RPCCloseCodes {
	/**
	 * You connected to the RPC server with an invalid client ID.
	 */
	InvalidClientID = 4_000,
	/**
	 * You connected to the RPC server with an invalid origin.
	 */
	InvalidOrigin = 4_001,
	/**
	 * You are being rate limited.
	 */
	RateLimited = 4_002,
	/**
	 * The OAuth2 token associated with a connection was revoked, get a new one!
	 */
	TokenRevoked = 4_003,
	/**
	 * The RPC Server version specified in the connection string was not valid.
	 */
	InvalidVersion = 4_004,
	/**
	 * The encoding specified in the connection string was not valid.
	 */
	InvalidEncoding = 4_005,
}

export const RPCCloseCodesEnum = z.nativeEnum(RPCCloseCodes);
