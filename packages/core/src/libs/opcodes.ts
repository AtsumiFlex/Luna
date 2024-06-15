import { z } from "zod";

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes}
 */
export enum GatewayOpcodes {
	/**
	 * An event was dispatched.
	 * Client Action: Receive
	 */
	Dispatch = 0,
	/**
	 * Fired periodically by the client to keep the connection alive.
	 * Client Action: Send/Receive
	 */
	Heartbeat = 1,
	/**
	 * Starts a new session during the initial handshake.
	 * Client Action: Send
	 */
	Identify = 2,
	/**
	 * Update the client's presence.
	 * Client Action: Send
	 */
	PresenceUpdate = 3,
	/**
	 * Used to join/leave or move between voice channels.
	 * Client Action: Send
	 */
	VoiceStateUpdate = 4,
	/**
	 * Resume a previous session that was disconnected.
	 * Client Action: Send
	 */
	Resume = 6,
	/**
	 * You should attempt to reconnect and resume immediately.
	 * Client Action: Receive
	 */
	Reconnect = 7,
	/**
	 * Request information about offline guild members in a large guild.
	 * Client Action: Send
	 */
	RequestGuildMembers = 8,
	/**
	 * The session has been invalidated. You should reconnect and identify/resume accordingly.
	 * Client Action: Receive
	 */
	InvalidSession = 9,
	/**
	 * Sent immediately after connecting, contains the heartbeat_interval to use.
	 * Client Action: Receive
	 */
	Hello = 10,
	/**
	 * Sent in response to receiving a heartbeat to acknowledge that it has been received.
	 * Client Action: Receive
	 */
	HeartbeatACK = 11,
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
	 * Sent By: Client
	 */
	Identify = 0,
	/**
	 * Select the voice protocol.
	 * Sent By: Client
	 */
	SelectProtocol = 1,
	/**
	 * Complete the websocket handshake.
	 * Sent By: Server
	 */
	Ready = 2,
	/**
	 * Keep the websocket connection alive.
	 * Sent By: Client
	 */
	Heartbeat = 3,
	/**
	 * Describe the session.
	 * Sent By: Server
	 */
	SessionDescription = 4,
	/**
	 * Indicate which users are speaking.
	 * Sent By: Client and Server
	 */
	Speaking = 5,
	/**
	 * Sent to acknowledge a received client heartbeat.
	 * Sent By: Server
	 */
	HeartbeatACK = 6,
	/**
	 * Resume a connection.
	 * Sent By: Client
	 */
	Resume = 7,
	/**
	 * Time to wait between sending heartbeats in milliseconds.
	 * Sent By: Server
	 */
	Hello = 8,
	/**
	 * Acknowledge a successful session resume.
	 * Sent By: Server
	 */
	Resumed = 9,
	/**
	 * A client has disconnected from the voice channel.
	 * Sent By: Server
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
	DecodeError = 4_002,
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
	ExplicitContentCannotBeSentToTheDesiredRecipients = 20_009,
	YouAreNotAuthorizedToPerformThisActionOnThisApplication = 20_012,
	ThisActionCannotBePerformedDueToSlowmodeRateLimit = 20_016,
	OnlyTheOwnerOfThisAccountCanPerformThisAction = 20_018,
	ThisMessageCannotBeEditedDueToAnnouncementRateLimits = 20_022,
	UnderMinimumAge = 20_024,
	TheChannelYouAreWritingHasHitTheWriteRateLimit = 20_028,
	TheWriteActionYouArePerformingOnTheServerHasHitTheWriteRateLimit = 20_029,
	YourStageTopicServerNameServerDescriptionOrChannelNamesContainWordsThatAreNotAllowed = 20_031,
	GuildPremiumSubscriptionLevelTooLow = 20_035,
	MaximumNumberOfGuildsReached = 30_001,
	MaximumNumberOfFriendsReached = 30_002,
	MaximumNumberOfPinsReachedForTheChannel = 30_003,
	MaximumNumberOfRecipientsReached = 30_004,
	MaximumNumberOfGuildRolesReached = 30_005,
	MaximumNumberOfWebhooksReached = 30_007,
	MaximumNumberOfEmojisReached = 30_008,
	MaximumNumberOfReactionsReached = 30_010,
	MaximumNumberOfGroupDMsReached = 30_011,
	MaximumNumberOfGuildChannelsReached = 30_013,
	MaximumNumberOfAttachmentsInAMessageReached = 30_015,
	MaximumNumberOfInvitesReached = 30_016,
	MaximumNumberOfAnimatedEmojisReached = 30_018,
	MaximumNumberOfServerMembersReached = 30_019,
	MaximumNumberOfServerCategoriesHasBeenReached = 30_030,
	GuildAlreadyHasATemplate = 30_031,
	MaximumNumberOfApplicationCommandsReached = 30_032,
	MaximumNumberOfThreadParticipantsHasBeenReached = 30_033,
	MaximumNumberOfDailyApplicationCommandCreatesHasBeenReached = 30_034,
	MaximumNumberOfBansForNonGuildMembersHaveBeenExceeded = 30_035,
	MaximumNumberOfBansFetchesHasBeenReached = 30_037,
	MaximumNumberOfUncompletedGuildScheduledEventsReached = 30_038,
	MaximumNumberOfStickersReached = 30_039,
	MaximumNumberOfPruneRequestsHasBeenReachedTryAgainLater = 30_040,
	MaximumNumberOfGuildWidgetSettingsUpdatesHasBeenReachedTryAgainLater = 30_042,
	MaximumNumberOfEditsToMessagesOlderThan1HourReachedTryAgainLater = 30_046,
	MaximumNumberOfPinnedThreadsInAForumChannelHasBeenReached = 30_047,
	MaximumNumberOfTagsInAForumChannelHasBeenReached = 30_048,
	BitrateIsTooHighForChannelOfThisType = 30_052,
	MaximumNumberOfPremiumEmojisReached = 30_056,
	MaximumNumberOfWebhooksPerGuildReached = 30_058,
	MaximumNumberOfChannelPermissionOverwritesReached = 30_060,
	TheChannelsForThisGuildAreTooLarge = 30_061,
	UnauthorizedProvideAValidTokenAndTryAgain = 40_001,
	YouNeedToVerifyYourAccountInOrderToPerformThisAction = 40_002,
	YouAreOpeningDirectMessagesTooFast = 40_003,
	SendMessagesHasBeenTemporarilyDisabled = 40_004,
	RequestEntityTooLargeTrySendingSomethingSmallerInSize = 40_005,
	ThisFeatureHasBeenTemporarilyDisabledServerSide = 40_006,
	TheUserIsBannedFromThisGuild = 40_007,
	ConnectionHasBeenRevoked = 40_012,
	TargetUserIsNotConnectedToVoice = 40_032,
	ThisMessageHasBeenAlreadyCrossposted = 40_033,
	AnApplicationCommandWithThatNameAlreadyExists = 40_041,
	ApplicationInteractionFailedToSend = 40_043,
	CannotSendAMessageInAForumChannel = 40_058,
	InteractionHasBeenAlreadyAcknowledged = 40_060,
	TagNamesMustBeUnique = 40_061,
	ServiceResourceIsBeingRateLimited = 40_062,
	ThereAreNoTagsAvailableThatCanBeSetByNonModerators = 40_066,
	ATagIsRequiredToCreateAForumPostInThisChannel = 40_067,
	AnEntitlementHasBeenAlreadyGrantedForThisResource = 40_074,
	CloudflareIsBlockingYourRequestThisCanOftenBeResolvedBySettingAProperUserAgent = 40_333,
	MissingAccess = 50_001,
	InvalidAccountType = 50_002,
	CannotExecuteActionOnADMChannel = 50_003,
	GuildWidgetDisabled = 50_004,
	CannotEditAMessageAuthoredByAnotherUser = 50_005,
	CannotSendAnEmptyMessage = 50_006,
	CannotSendMessagesToThisUser = 50_007,
	CannotSendMessagesInANonTextChannel = 50_008,
	ChannelVerificationLevelIsTooHighForYouToGainAccess = 50_009,
	OAuth2ApplicationDoesNotHaveABot = 50_010,
	OAuth2ApplicationLimitReached = 50_011,
	InvalidOAuth2State = 50_012,
	YouLackPermissionsToPerformThatAction = 50_013,
	InvalidAuthenticationTokenProvided = 50_014,
	NoteWasTooLong = 50_015,
	ProvidedTooFewOrTooManyMessagesToDeleteMustProvideAtLeast2AndFewerThan100MessagesToDelete = 50_016,
	InvalidMFALevel = 50_017,
	AMessageCanOnlyBePinnedToTheChannelItWasSentIn = 50_019,
	InviteCodeWasEitherInvalidOrTaken = 50_020,
	CannotExecuteActionOnASystemMessage = 50_021,
	CannotExecuteActionOnThisChannelType = 50_024,
	InvalidOAuth2AccessTokenProvided = 50_025,
	MissingRequiredOAuth2Scope = 50_026,
	InvalidWebhookTokenProvided = 50_027,
	InvalidRole = 50_028,
	InvalidRecipient = 50_033,
	AMessageProvidedWasTooOldToBulkDelete = 50_034,
	InvalidFormBodyReturnedForBothApplicationJSONAndMultipartFormDataBodiesOrInvalidContentTypeProvided = 50_035,
	AnInviteWasAcceptedToAGuildTheApplicationsBotIsNotIn = 50_036,
	InvalidActivityAction = 50_039,
	InvalidAPIVersionProvided = 50_041,
	FileUploadedExceedsTheMaximumSize = 50_045,
	InvalidFileUploaded = 50_046,
	CannotSelfRedeemThisGift = 5_054,
	InvalidGuild = 50_055,
	InvalidSKU = 50_057,
	InvalidRequestOrigin = 50_067,
	InvalidMessageType = 50_068,
	PaymentSourceRequiredToRedeemGift = 50_070,
	CannotModifyASystemWebhook = 50_073,
	CannotDeleteAChannelRequiredForCommunityGuilds = 50_074,
	CannotEditStickersWithinAMessage = 50_080,
	InvalidStickerSent = 50_081,
	TriedToPerformAnOperationOnAnArchivedThreadSuchAsEditingAMessageOrAddingAUserToTheThread = 50_083,
	InvalidThreadNotificationSettings = 50_084,
	BeforeValueIsEarlierThanTheThreadCreationDate = 50_085,
	CommunityServerChannelsMustBeTextChannels = 50_086,
	TheEntityTypeOfTheEventIsDifferentFromTheEntityYouAreTryingToStartTheEventFor = 50_091,
	ThisServerIsNotAvailableInYourLocation = 50_095,
	ThisServerNeedsMonetizationEnabledInOrderToPerformThisAction = 50_097,
	ThisServerNeedsMoreBoostsToPerformThisAction = 50_101,
	TheRequestBodyContainsInvalidJSON = 50_109,
	OwnerCannotBePendingMember = 50_131,
	OwnershipCannotBeTransferredToABotUser = 50_132,
	FailedToResizeAssetBelowTheMaximumSize262144 = 50_138,
	CannotMixSubscriptionAndNonSubscriptionRolesForAnEmoji = 50_144,
	CannotConvertBetweenPremiumEmojiAndNormalEmoji = 50_145,
	UploadedFileNotFound = 50_146,
	VoiceMessagesDoNotSupportAdditionalContent = 50_159,
	VoiceMessagesMustHaveASingleAudioAttachment = 50_160,
	VoiceMessagesMustHaveSupportingMetadata = 50_161,
	VoiceMessagesCannotBeEdited = 50_162,
	CannotDeleteGuildSubscriptionIntegration = 50_163,
	YouCannotSendVoiceMessagesInThisChannel = 50_173,
	TheUserAccountMustFirstBeVerified = 50_178,
	YouDoNotHavePermissionToSendThisSticker = 50_600,
	TwoFactorIsRequiredForThisOperation = 60_003,
	NoUsersWithDiscordTagExist = 80_004,
	ReactionWasBlocked = 90_001,
	UserCannotUseBurstReactions = 90_002,
	ApplicationNotYetAvailableTryAgainLater = 110_001,
	APIResourceIsCurrentlyOverloadedTryAgainALittleLater = 130_000,
	TheStageIsAlreadyOpen = 150_006,
	CannotReplyWithoutPermissionToReadMessageHistory = 160_002,
	AThreadHasBeenAlreadyCreatedForThisMessage = 160_004,
	ThreadIsLocked = 160_005,
	MaximumNumberOfActiveThreadsReached = 160_006,
	MaximumNumberOfActiveAnnouncementThreadsReached = 160_007,
	InvalidJSONForUploadedLottieFile = 170_001,
	UploadedLottiesCannotContainRasterizedImagesSuchAsPNGOrJPEG = 170_002,
	StickerMaximumFramerateExceeded = 170_003,
	StickerFrameCountExceedsMaximumOf1000Frames = 170_004,
	LottieAnimationMaximumDimensionsExceeded = 170_005,
	StickerFrameRateIsEitherTooSmallOrTooLarge = 170_006,
	StickerAnimationDurationExceedsMaximumOf5Seconds = 170_007,
	CannotUpdateAFinishedEvent = 180_000,
	FailedToCreateStageNeededForStageEvent = 180_002,
	MessageWasBlockedByAutomaticModeration = 200_000,
	TitleWasBlockedByAutomaticModeration = 200_001,
	WebhooksPostedToForumChannelsMustHaveAThreadNameOrThreadID = 220_001,
	WebhooksPostedToForumChannelsCannotHaveBothAThreadNameAndThreadID = 220_002,
	WebhooksCanOnlyCreateThreadsInForumChannels = 220_003,
	WebhookServicesCannotBeUsedInForumChannels = 220_004,
	MessageBlockedByHarmfulLinksFilter = 240_000,
	CannotEnableOnboardingRequirementsAreNotMet = 350_000,
	CannotUpdateOnboardingWhileBelowRequirements = 350_001,
	FailedToBanUsers = 500_000,
	PollVotingBlocked = 520_000,
	PollExpired = 520_001,
	InvalidChannelTypeForPollCreation = 520_002,
	CannotEditAPollMessage = 520_003,
	CannotUseAnEmojiIncludedWithThePoll = 520_004,
	CannotExpireANonPollMessage = 520_006,
}

export const JSONErrorCodesEnum = z.nativeEnum(JSONErrorCodes);

/**
 * @see {@link https://discord.com/developers/docs/topics/opcodes-and-status-codes#json-example-json-error-response}
 */
export const JSONErrorResponse = z.object({
	message: z.string(),
	code: JSONErrorCodesEnum,
});

export type JSONErrorResponseInfer = z.infer<typeof JSONErrorResponse>;

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
