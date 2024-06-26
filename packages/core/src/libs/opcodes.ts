/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes}
 */
export enum GatewayOpcodes {
	/**
	 * Client Action: Receive
	 * Description: An event was dispatched.
	 */
	Dispatch = 0,
	/**
	 * Client Action: Send/Receive
	 * Description: Fired periodically by the client to keep the connection alive.
	 */
	Heartbeat = 1,
	/**
	 * Client Action: Send
	 * Description: Starts a new session during the initial handshake.
	 */
	Identify = 2,
	/**
	 * Client Action: Send
	 * Description: Update the client's presence.
	 */
	PresenceUpdate = 3,
	/**
	 * Client Action: Send
	 * Description: Used to join/leave or move between voice channels.
	 */
	VoiceStateUpdate = 4,
	/**
	 * Client Action: Send
	 * Description: Resume a previous session that was disconnected.
	 */
	Resume = 6,
	/**
	 * Client Action: Receive
	 * Description: You should attempt to reconnect and resume immediately.
	 */
	Reconnect = 7,
	/**
	 * Client Action: Send
	 * Description: Request information about offline guild members in a large guild.
	 */
	RequestGuildMembers = 8,
	/**
	 * Client Action: Receive
	 * Description: The session has been invalidated. You should reconnect and identify/resume accordingly.
	 */
	InvalidSession = 9,
	/**
	 * Client Action: Receive
	 * Description: Sent immediately after connecting, contains the heartbeat_interval to use.
	 */
	Hello = 10,
	/**
	 * Client Action: Receive
	 * Description: Sent in response to receiving a heartbeat to acknowledge that it has been received.
	 */
	HeartbeatACK = 11,
}

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
	HeartbeatACK = 6,
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
	 * A client has disconnected from the voice channel
	 */
	ClientDisconnect = 13,
}

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

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#http-http-response-codes}
 */
export enum HTTPStatusCode {
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
	/**
	 * The server had an error processing your request (these are rare).
	 */
	ServerErrors = 500,
}

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-json-error-codes}
 */
export enum JSONErrorCodes {
	GeneralError = 0,
	UnknownAccount = 10_001,
	UnknownApplication = 10_002,
	UnknownChannel = 10_003,
	UnknownGuild = 10_004,
	UnknownIntegration = 10_005,
	UnknownInvite = 10_006,
	UnknownMember = 10_007,
	UnknownMessage = 10_008,
	UnknownPermissionOverwrite = 10_009,
	UnknownProvider = 10_010,
	UnknownRole = 10_011,
	UnknownToken = 10_012,
	UnknownUser = 10_013,
	UnknownEmoji = 10_014,
	UnknownWebhook = 10_015,
	UnknownWebhookService = 10_016,
	UnknownSession = 10_020,
	UnknownBan = 10_026,
	UnknownSKU = 10_027,
	UnknownStoreListing = 10_028,
	UnknownEntitlement = 10_029,
	UnknownBuild = 10_030,
	UnknownLobby = 10_031,
	UnknownBranch = 10_032,
	UnknownStoreDirectoryLayout = 10_033,
	UnknownRedistributable = 10_036,
	UnknownGiftCode = 10_038,
	UnknownStream = 10_049,
	UnknownPremiumServerSubscribeCooldown = 10_050,
	UnknownGuildTemplate = 10_057,
	UnknownDiscoverableServerCategory = 10_059,
	UnknownSticker = 10_060,
	UnknownInteraction = 10_062,
	UnknownApplicationCommand = 10_063,
	UnknownVoiceState = 10_065,
	UnknownApplicationCommandPermissions = 10_066,
	UnknownStageInstance = 10_067,
	UnknownGuildMemberVerificationForm = 10_068,
	UnknownGuildWelcomeScreen = 10_069,
	UnknownGuildScheduledEvent = 10_070,
	UnknownGuildScheduledEventUser = 10_071,
	UnknownTag = 10_087,
	BotsCannotUseThisEndpoint = 20_001,
	OnlyBotsCanUseThisEndpoint = 20_002,
	ExplicitContentCannotBeSent = 20_009,
	UnauthorizedActionOnApplication = 20_012,
	SlowmodeRateLimit = 20_016,
	OwnerOnlyAction = 20_018,
	AnnouncementRateLimit = 20_022,
	UnderMinimumAge = 20_024,
	WriteRateLimitOnChannel = 20_028,
	WriteRateLimitOnServer = 20_029,
	ForbiddenWordsInServerSettings = 20_031,
	PremiumSubscriptionLevelTooLow = 20_035,
	MaxGuildsReached = 30_001,
	MaxFriendsReached = 30_002,
	MaxPinsReached = 30_003,
	MaxRecipientsReached = 30_004,
	MaxGuildRolesReached = 30_005,
	MaxWebhooksReached = 30_007,
	MaxEmojisReached = 30_008,
	MaxReactionsReached = 30_010,
	MaxGroupDMsReached = 30_011,
	MaxGuildChannelsReached = 30_013,
	MaxAttachmentsReached = 30_015,
	MaxInvitesReached = 30_016,
	MaxAnimatedEmojisReached = 30_018,
	MaxServerMembersReached = 30_019,
	MaxServerCategoriesReached = 30_030,
	GuildAlreadyHasTemplate = 30_031,
	MaxApplicationCommandsReached = 30_032,
	MaxThreadParticipantsReached = 30_033,
	MaxDailyApplicationCommandCreatesReached = 30_034,
	MaxBansForNonGuildMembersExceeded = 30_035,
	MaxBansFetchesReached = 30_037,
	MaxUncompletedGuildScheduledEventsReached = 30_038,
	MaxStickersReached = 30_039,
	MaxPruneRequestsReached = 30_040,
	MaxGuildWidgetSettingsUpdatesReached = 30_042,
	MaxEditsToOldMessagesReached = 30_046,
	MaxPinnedThreadsInForumChannelReached = 30_047,
	MaxTagsInForumChannelReached = 30_048,
	BitrateTooHighForChannelType = 30_052,
	MaxPremiumEmojisReached = 30_056,
	MaxWebhooksPerGuildReached = 30_058,
	MaxChannelPermissionOverwritesReached = 30_060,
	ChannelsTooLargeForGuild = 30_061,
	Unauthorized = 40_001,
	AccountVerificationRequired = 40_002,
	OpeningDirectMessagesTooFast = 40_003,
	SendMessagesDisabled = 40_004,
	RequestEntityTooLarge = 40_005,
	FeatureDisabledServerSide = 40_006,
	UserBannedFromGuild = 40_007,
	ConnectionRevoked = 40_012,
	TargetUserNotConnectedToVoice = 40_032,
	MessageAlreadyCrossposted = 40_033,
	ApplicationCommandNameExists = 40_041,
	ApplicationInteractionFailed = 40_043,
	CannotSendMessageInForumChannel = 40_058,
	InteractionAlreadyAcknowledged = 40_060,
	TagNamesMustBeUnique = 40_061,
	ServiceResourceRateLimited = 40_062,
	NoTagsAvailableForNonModerators = 40_066,
	TagRequiredForForumPost = 40_067,
	EntitlementAlreadyGranted = 40_074,
	CloudflareBlockingRequest = 40_333,
	MissingAccess = 50_001,
	InvalidAccountType = 50_002,
	CannotExecuteActionOnDMChannel = 50_003,
	GuildWidgetDisabled = 50_004,
	CannotEditMessageFromAnotherUser = 50_005,
	CannotSendEmptyMessage = 50_006,
	CannotSendMessagesToUser = 50_007,
	CannotSendMessagesInNonTextChannel = 50_008,
	ChannelVerificationLevelTooHigh = 50_009,
	OAuth2ApplicationDoesNotHaveBot = 50_010,
	OAuth2ApplicationLimitReached = 50_011,
	InvalidOAuth2State = 50_012,
	LackPermissionsToPerformAction = 50_013,
	InvalidAuthenticationTokenProvided = 50_014,
	NoteTooLong = 50_015,
	InvalidNumberOfMessagesToDelete = 50_016,
	InvalidMFALevel = 50_017,
	MessageCanOnlyBePinnedToChannelSentIn = 50_019,
	InvalidInviteCode = 50_020,
	CannotExecuteActionOnSystemMessage = 50_021,
	CannotExecuteActionOnChannelType = 50_024,
	InvalidOAuth2AccessTokenProvided = 50_025,
	MissingRequiredOAuth2Scope = 50_026,
	InvalidWebhookTokenProvided = 50_027,
	InvalidRole = 50_028,
	InvalidRecipients = 50_033,
	MessageTooOldToBulkDelete = 50_034,
	InvalidFormBody = 50_035,
	InviteAcceptedToGuildBotNotIn = 50_036,
	InvalidActivityAction = 50_039,
	InvalidAPIVersionProvided = 50_041,
	FileUploadedExceedsMaximumSize = 50_045,
	InvalidFileUploaded = 50_046,
	CannotSelfRedeemGift = 50_054,
	InvalidGuild = 50_055,
	InvalidSKU = 50_057,
	InvalidRequestOrigin = 50_067,
	InvalidMessageType = 50_068,
	PaymentSourceRequiredToRedeemGift = 50_070,
	CannotModifySystemWebhook = 50_073,
	CannotDeleteChannelRequiredForCommunityGuilds = 50_074,
	CannotEditStickersWithinMessage = 50_080,
	InvalidStickerSent = 50_081,
	OperationOnArchivedThread = 50_083,
	InvalidThreadNotificationSettings = 50_084,
	BeforeValueEarlierThanThreadCreationDate = 50_085,
	CommunityServerChannelsMustBeText = 50_086,
	EventEntityTypeMismatch = 50_091,
	ServerNotAvailableInLocation = 50_095,
	ServerNeedsMonetizationEnabled = 50_097,
	ServerNeedsMoreBoosts = 50_101,
	RequestBodyContainsInvalidJSON = 50_109,
	OwnerCannotBePendingMember = 50_131,
	OwnershipCannotBeTransferredToBot = 50_132,
	AssetResizeBelowMaximumSizeFailed = 50_138,
	CannotMixSubscriptionAndNonSubscriptionRolesForEmoji = 50_144,
	CannotConvertBetweenPremiumAndNormalEmoji = 50_145,
	UploadedFileNotFound = 50_146,
	VoiceMessagesDoNotSupportAdditionalContent = 50_159,
	VoiceMessagesMustHaveSingleAudioAttachment = 50_160,
	VoiceMessagesMustHaveSupportingMetadata = 50_161,
	VoiceMessagesCannotBeEdited = 50_162,
	CannotDeleteGuildSubscriptionIntegration = 50_163,
	CannotSendVoiceMessagesInChannel = 50_173,
	UserAccountMustBeVerified = 50_178,
	NoPermissionToSendSticker = 50_600,
	TwoFactorRequired = 60_003,
	NoUsersWithDiscordTagExist = 80_004,
	ReactionBlocked = 90_001,
	UserCannotUseBurstReactions = 90_002,
	ApplicationNotYetAvailable = 110_001,
	APIResourceOverloaded = 130_000,
	StageAlreadyOpen = 150_006,
	CannotReplyWithoutPermissionToReadMessageHistory = 160_002,
	ThreadAlreadyCreatedForMessage = 160_004,
	ThreadLocked = 160_005,
	MaxActiveThreadsReached = 160_006,
	MaxActiveAnnouncementThreadsReached = 160_007,
	InvalidJSONForLottieFile = 170_001,
	UploadedLottiesCannotContainRasterizedImages = 170_002,
	StickerMaxFramerateExceeded = 170_003,
	StickerFrameCountExceedsMax = 170_004,
	LottieAnimationMaxDimensionsExceeded = 170_005,
	StickerFrameRateTooSmallOrLarge = 170_006,
	StickerAnimationDurationExceedsMax = 170_007,
	CannotUpdateFinishedEvent = 180_000,
	FailedToCreateStageForEvent = 180_002,
	MessageBlockedByAutoModeration = 200_000,
	TitleBlockedByAutoModeration = 200_001,
	WebhooksPostedToForumChannelsNeedThreadNameOrId = 220_001,
	WebhooksPostedToForumChannelsCannotHaveBothThreadNameAndId = 220_002,
	WebhooksCanOnlyCreateThreadsInForumChannels = 220_003,
	WebhookServicesCannotBeUsedInForumChannels = 220_004,
	MessageBlockedByHarmfulLinksFilter = 240_000,
	CannotEnableOnboardingRequirementsNotMet = 350_000,
	CannotUpdateOnboardingBelowRequirements = 350_001,
	FailedToBanUsers = 500_000,
	PollVotingBlocked = 520_000,
	PollExpired = 520_001,
	InvalidChannelTypeForPoll = 520_002,
	CannotEditPollMessage = 520_003,
	CannotUseEmojiIncludedWithPoll = 520_004,
	CannotExpireNonPollMessage = 520_006,
}

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#rpc-rpc-error-codes}
 */
export enum RPCErrors {
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
	SelectChannelTimeout = 5_001,
	/**
	 * An asynchronous GET_GUILD command timed out.
	 */
	GetGuildTimeout = 5_002,
	/**
	 * You tried to join a user to a voice channel but the user was already in one.
	 */
	SelectVoiceForceRequired = 5_003,
	/**
	 * You tried to capture more than one shortcut key at once.
	 */
	CaptureShortcutAlreadyListening = 5_004,
}

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
