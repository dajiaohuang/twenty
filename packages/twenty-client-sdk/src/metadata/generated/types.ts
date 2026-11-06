export default {
    "scalars": [
        1,
        4,
        6,
        7,
        10,
        11,
        13,
        15,
        18,
        25,
        27,
        28,
        33,
        37,
        39,
        46,
        60,
        68,
        78,
        84,
        96,
        100,
        101,
        103,
        108,
        114,
        120,
        125,
        131,
        134,
        135,
        136,
        137,
        145,
        147,
        161,
        165,
        167,
        169,
        216,
        217,
        244,
        248,
        249,
        251,
        262,
        268,
        272,
        276,
        279,
        286,
        303,
        305,
        311,
        313,
        326,
        333,
        334,
        335,
        347,
        349,
        366,
        367,
        368,
        369,
        370,
        371,
        373,
        374,
        375,
        378,
        379,
        381,
        384,
        389,
        393,
        402,
        409,
        411,
        414,
        418,
        419,
        424,
        428,
        451,
        453,
        454,
        462,
        474,
        476,
        481,
        486,
        506,
        518,
        519,
        521,
        546,
        548,
        550,
        615,
        635,
        642,
        644,
        648,
        659,
        665,
        666,
        668,
        669,
        671,
        672,
        673,
        676,
        677,
        678,
        683,
        685,
        688,
        693,
        694,
        695,
        698,
        699
    ],
    "types": {
        "ActivateWorkspaceInput": {
            "displayName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "String": {},
        "AddQuerySubscriptionInput": {
            "eventStreamId": [
                1
            ],
            "operationSignature": [
                333
            ],
            "queryId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Agent": {
            "applicationId": [
                546
            ],
            "createdAt": [
                217
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "isCustom": [
                4
            ],
            "isSystem": [
                4
            ],
            "label": [
                1
            ],
            "modelConfiguration": [
                333
            ],
            "modelId": [
                1
            ],
            "name": [
                1
            ],
            "prompt": [
                1
            ],
            "responseFormat": [
                333
            ],
            "roleId": [
                546
            ],
            "triggers": [
                333
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "Boolean": {},
        "AgentChatChannel": {
            "applicationId": [
                546
            ],
            "color": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isAccessible": [
                4
            ],
            "isCustom": [
                4
            ],
            "name": [
                1
            ],
            "position": [
                6
            ],
            "roleIds": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "Float": {},
        "AgentChatChannelAssignmentFilter": {},
        "AgentChatChannelRole": {
            "canAccessAllAgentChatChannels": [
                4
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AgentChatChannelSummary": {
            "assignedCount": [
                10
            ],
            "assignedToMeCount": [
                10
            ],
            "channelId": [
                546
            ],
            "doneCount": [
                10
            ],
            "hasUnreadAssignedToMe": [
                4
            ],
            "hasUnreadOpen": [
                4
            ],
            "mentionedCount": [
                10
            ],
            "needsInputCount": [
                10
            ],
            "openCount": [
                10
            ],
            "snoozedCount": [
                10
            ],
            "unassignedCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "Int": {},
        "AgentChatChannelThreadFilter": {},
        "AgentChatChannelThreadIds": {
            "endCursor": [
                1
            ],
            "hasNextPage": [
                4
            ],
            "threadIds": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "AgentChatChannelThreadStatus": {},
        "AgentChatEvent": {
            "event": [
                333
            ],
            "threadId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AgentChatInboxAction": {},
        "AgentChatOpenThreadsSummary": {
            "assignedThreadCount": [
                10
            ],
            "assignedToMeThreadCount": [
                10
            ],
            "hasUnreadAssignedThread": [
                4
            ],
            "hasUnreadMentionThread": [
                4
            ],
            "hasUnreadOpenThread": [
                4
            ],
            "mentionThreadCount": [
                10
            ],
            "needsInputThreadCount": [
                10
            ],
            "openThreadCount": [
                10
            ],
            "unassignedThreadCount": [
                10
            ],
            "unreadOpenThreadCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "AgentChatThread": {
            "contextWindowTokens": [
                10
            ],
            "conversationSize": [
                10
            ],
            "createdAt": [
                217
            ],
            "deletedAt": [
                217
            ],
            "id": [
                18
            ],
            "isAssistantParticipant": [
                4
            ],
            "title": [
                1
            ],
            "totalCacheReadTokens": [
                10
            ],
            "totalInputCredits": [
                6
            ],
            "totalInputTokens": [
                10
            ],
            "totalOutputCredits": [
                6
            ],
            "totalOutputTokens": [
                10
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "ID": {},
        "AgentChatThreadParticipant": {
            "archivedAt": [
                217
            ],
            "id": [
                546
            ],
            "isSubscribed": [
                4
            ],
            "lastMentionedAt": [
                217
            ],
            "lastReadAt": [
                217
            ],
            "mentionsResolvedAt": [
                217
            ],
            "snoozedUntil": [
                217
            ],
            "threadId": [
                546
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "AgentIdInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "AgentMessage": {
            "agentId": [
                546
            ],
            "createdAt": [
                217
            ],
            "id": [
                546
            ],
            "parts": [
                22
            ],
            "processedAt": [
                217
            ],
            "reactions": [
                23
            ],
            "role": [
                1
            ],
            "senderUserWorkspaceId": [
                546
            ],
            "senderWorkspaceMemberId": [
                546
            ],
            "status": [
                1
            ],
            "threadId": [
                546
            ],
            "turnId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "AgentMessagePart": {
            "createdAt": [
                217
            ],
            "errorMessage": [
                1
            ],
            "fileFilename": [
                1
            ],
            "fileId": [
                546
            ],
            "fileMediaType": [
                1
            ],
            "fileUrl": [
                1
            ],
            "id": [
                546
            ],
            "messageId": [
                546
            ],
            "orderIndex": [
                10
            ],
            "providerExecuted": [
                4
            ],
            "providerMetadata": [
                333
            ],
            "reasoningContent": [
                1
            ],
            "sourceDocumentFilename": [
                1
            ],
            "sourceDocumentMediaType": [
                1
            ],
            "sourceDocumentSourceId": [
                1
            ],
            "sourceDocumentTitle": [
                1
            ],
            "sourceUrlSourceId": [
                1
            ],
            "sourceUrlTitle": [
                1
            ],
            "sourceUrlUrl": [
                1
            ],
            "state": [
                1
            ],
            "textContent": [
                1
            ],
            "toolCallId": [
                1
            ],
            "toolInput": [
                333
            ],
            "toolName": [
                1
            ],
            "toolOutput": [
                333
            ],
            "type": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AgentMessageReactionSummary": {
            "agentIds": [
                546
            ],
            "emoji": [
                1
            ],
            "hasAssistantReacted": [
                4
            ],
            "workspaceMemberIds": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "AgentRun": {
            "createdAt": [
                217
            ],
            "creatorName": [
                1
            ],
            "creatorSource": [
                1
            ],
            "credits": [
                6
            ],
            "endedAt": [
                217
            ],
            "errorMessage": [
                1
            ],
            "id": [
                546
            ],
            "input": [
                1
            ],
            "inputTokens": [
                10
            ],
            "modelId": [
                1
            ],
            "outputTokens": [
                10
            ],
            "reply": [
                1
            ],
            "startedAt": [
                217
            ],
            "status": [
                25
            ],
            "threadId": [
                546
            ],
            "threadTitle": [
                1
            ],
            "toolNames": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AgentTurnStatus": {},
        "AggregateChartConfiguration": {
            "aggregateFieldMetadataId": [
                546
            ],
            "aggregateOperation": [
                27
            ],
            "configurationType": [
                676
            ],
            "description": [
                1
            ],
            "displayDataLabel": [
                4
            ],
            "filter": [
                333
            ],
            "firstDayOfTheWeek": [
                10
            ],
            "label": [
                1
            ],
            "numberFormat": [
                147
            ],
            "prefix": [
                1
            ],
            "ratioAggregateConfig": [
                446
            ],
            "suffix": [
                1
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AggregateOperations": {},
        "AiChatAssistantMode": {},
        "AiChatUsage": {
            "consumedValue": [
                103
            ],
            "kind": [
                1
            ],
            "limitValue": [
                103
            ],
            "periodEnd": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "AiChatUserCreditsUsage": {
            "consumedValue": [
                103
            ],
            "limitValue": [
                103
            ],
            "periodEnd": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "AiDataPolicy": {
            "dataResidency": [
                1
            ],
            "isZeroDataRetentionRequired": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AiDataPolicyInput": {
            "dataResidency": [
                1
            ],
            "isZeroDataRetentionRequired": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AiModelTier": {},
        "AiRunUsage": {
            "inputTokens": [
                10
            ],
            "outputTokens": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "AiSystemPromptPreview": {
            "estimatedTokenCount": [
                10
            ],
            "sections": [
                36
            ],
            "__typename": [
                1
            ]
        },
        "AiSystemPromptSection": {
            "content": [
                1
            ],
            "estimatedTokenCount": [
                10
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AllMetadataName": {},
        "Analytics": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AnalyticsType": {},
        "ApiConfig": {
            "mutationMaximumAffectedRecords": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "ApiKey": {
            "createdAt": [
                217
            ],
            "expiresAt": [
                217
            ],
            "id": [
                546
            ],
            "name": [
                1
            ],
            "revokedAt": [
                217
            ],
            "role": [
                468
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "ApiKeyForRole": {
            "expiresAt": [
                217
            ],
            "id": [
                546
            ],
            "name": [
                1
            ],
            "revokedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "ApiKeyToken": {
            "token": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppConnection": {
            "accessToken": [
                1
            ],
            "authFailedAt": [
                1
            ],
            "authFailedReason": [
                1
            ],
            "externalAccountId": [
                1
            ],
            "handle": [
                1
            ],
            "id": [
                18
            ],
            "name": [
                1
            ],
            "providerName": [
                1
            ],
            "providerType": [
                1
            ],
            "scope": [
                165
            ],
            "scopes": [
                1
            ],
            "userWorkspaceId": [
                1
            ],
            "visibility": [
                1
            ],
            "workspaceMemberId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppKeyValue": {
            "key": [
                1
            ],
            "scope": [
                46
            ],
            "value": [
                333
            ],
            "__typename": [
                1
            ]
        },
        "AppKeyValueScope": {},
        "AppMessageAttachmentInput": {
            "fileId": [
                546
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppMessageFolderInput": {
            "externalId": [
                1
            ],
            "isSynced": [
                4
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppMessageInput": {
            "attachments": [
                47
            ],
            "externalId": [
                1
            ],
            "folderExternalIds": [
                1
            ],
            "participants": [
                50
            ],
            "receivedAt": [
                217
            ],
            "subject": [
                1
            ],
            "text": [
                1
            ],
            "threadExternalId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AppMessageParticipantInput": {
            "displayName": [
                1
            ],
            "handle": [
                1
            ],
            "personId": [
                546
            ],
            "role": [
                375
            ],
            "workspaceMemberId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "Application": {
            "agents": [
                3
            ],
            "applicationRegistration": [
                80
            ],
            "applicationRegistrationId": [
                546
            ],
            "applicationVariables": [
                83
            ],
            "autoUpgrade": [
                4
            ],
            "availablePackages": [
                333
            ],
            "canBeUninstalled": [
                4
            ],
            "commandMenuItems": [
                160
            ],
            "createdAt": [
                217
            ],
            "defaultLogicFunctionRole": [
                468
            ],
            "defaultRoleId": [
                1
            ],
            "description": [
                1
            ],
            "frontComponents": [
                293
            ],
            "grantedIframeMediaPermissions": [
                315
            ],
            "healthCheckLogicFunctionId": [
                546
            ],
            "id": [
                546
            ],
            "isUninstallBlockedByOtherWorkspaceInstallations": [
                4
            ],
            "logicFunctions": [
                346
            ],
            "logoFileId": [
                546
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "objects": [
                395
            ],
            "packageJsonChecksum": [
                1
            ],
            "packageJsonFileId": [
                546
            ],
            "requestedIframeMediaPermissions": [
                315
            ],
            "runOnUserPreferences": [
                4
            ],
            "settingsCustomTabFrontComponentId": [
                546
            ],
            "settingsMenuItems": [
                505
            ],
            "universalIdentifier": [
                1
            ],
            "version": [
                1
            ],
            "yarnLockChecksum": [
                1
            ],
            "yarnLockFileId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationAuthorization": {
            "applicationId": [
                546
            ],
            "applicationName": [
                1
            ],
            "applicationUniversalIdentifier": [
                1
            ],
            "createdAt": [
                217
            ],
            "id": [
                546
            ],
            "lastAuthorizedAt": [
                217
            ],
            "lastUsedAt": [
                217
            ],
            "scopes": [
                1
            ],
            "workspaceId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationCapabilityGrant": {
            "grantedCapabilities": [
                1
            ],
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationConnectedAccountDTO": {
            "applicationId": [
                546
            ],
            "archivedAt": [
                217
            ],
            "authFailedAt": [
                217
            ],
            "authFailedReason": [
                1
            ],
            "connectionParameters": [
                442
            ],
            "connectionProviderId": [
                546
            ],
            "createdAt": [
                217
            ],
            "handle": [
                1
            ],
            "handleAliases": [
                1
            ],
            "id": [
                546
            ],
            "isOwnedByCurrentUser": [
                4
            ],
            "lastCredentialsRefreshedAt": [
                217
            ],
            "lastSignedInAt": [
                217
            ],
            "name": [
                1
            ],
            "provider": [
                1
            ],
            "scope": [
                165
            ],
            "scopes": [
                1
            ],
            "updatedAt": [
                217
            ],
            "userWorkspaceId": [
                546
            ],
            "visibility": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationConnectionProvider": {
            "applicationId": [
                1
            ],
            "displayName": [
                1
            ],
            "id": [
                546
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "oauth": [
                56
            ],
            "scope": [
                169
            ],
            "type": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationConnectionProviderOAuthConfig": {
            "isClientCredentialsConfigured": [
                4
            ],
            "scopes": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExport": {
            "application": [
                58
            ],
            "coverage": [
                59
            ],
            "files": [
                61
            ],
            "manifest": [
                333
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExportApplication": {
            "displayName": [
                1
            ],
            "sourceType": [
                78
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExportCoverageEntry": {
            "metadataName": [
                1
            ],
            "reason": [
                1
            ],
            "status": [
                60
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationExportCoverageStatus": {},
        "ApplicationExportFile": {
            "content": [
                1
            ],
            "folder": [
                1
            ],
            "path": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileCompletionError": {
            "fileId": [
                546
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileUploadError": {
            "fileFolder": [
                286
            ],
            "filePath": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileUploadRequestInput": {
            "fileFolder": [
                286
            ],
            "filePath": [
                1
            ],
            "size": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationFileUploadTarget": {
            "contentType": [
                1
            ],
            "expiresAt": [
                217
            ],
            "fileFolder": [
                286
            ],
            "fileId": [
                546
            ],
            "filePath": [
                1
            ],
            "uploadUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationHealthCheckAction": {
            "label": [
                1
            ],
            "location": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationHealthCheckResult": {
            "action": [
                66
            ],
            "description": [
                1
            ],
            "status": [
                68
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationHealthStatus": {},
        "ApplicationMonitoring": {
            "activity": [
                70
            ],
            "bucketSizeInSeconds": [
                10
            ],
            "creditUsage": [
                71
            ],
            "creditsUsed": [
                6
            ],
            "failedRunCount": [
                10
            ],
            "functions": [
                72
            ],
            "issues": [
                73
            ],
            "lifecycle": [
                74
            ],
            "lifecycleFailureCount": [
                10
            ],
            "lookbackInHours": [
                10
            ],
            "periodEnd": [
                217
            ],
            "periodStart": [
                217
            ],
            "rateLimitEventCount": [
                10
            ],
            "runCount": [
                10
            ],
            "versions": [
                75
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationMonitoringActivityBucket": {
            "bucketStart": [
                217
            ],
            "errorCount": [
                10
            ],
            "rateLimitedJobCount": [
                10
            ],
            "rateLimitedRequestCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationMonitoringCreditBucket": {
            "bucketStart": [
                217
            ],
            "creditsUsed": [
                6
            ],
            "operationLabel": [
                1
            ],
            "operationType": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationMonitoringFunction": {
            "failedRunCount": [
                10
            ],
            "logicFunctionName": [
                1
            ],
            "p95DurationMs": [
                6
            ],
            "runCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationMonitoringIssue": {
            "affectedInstallCount": [
                10
            ],
            "errorCode": [
                1
            ],
            "eventCount": [
                10
            ],
            "lastSeenAt": [
                217
            ],
            "level": [
                1
            ],
            "logicFunctionName": [
                1
            ],
            "source": [
                1
            ],
            "versions": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationMonitoringLifecycleBucket": {
            "bucketStart": [
                217
            ],
            "failedCount": [
                10
            ],
            "installCount": [
                10
            ],
            "uninstallCount": [
                10
            ],
            "upgradeCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationMonitoringVersion": {
            "activeInstallCount": [
                10
            ],
            "failedRunCount": [
                10
            ],
            "runCount": [
                10
            ],
            "version": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationPreferences": {
            "applicationId": [
                546
            ],
            "connectionProviders": [
                55
            ],
            "hasUserHealthCheck": [
                4
            ],
            "settingsMenuItems": [
                505
            ],
            "variables": [
                647
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistration": {
            "createdAt": [
                217
            ],
            "galleryImagesUrls": [
                1
            ],
            "id": [
                546
            ],
            "isConfigured": [
                4
            ],
            "isListed": [
                4
            ],
            "isPreInstalled": [
                4
            ],
            "latestAvailableVersion": [
                1
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "oAuthClientId": [
                1
            ],
            "oAuthRedirectUris": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "ownerWorkspaceId": [
                546
            ],
            "sourcePackage": [
                1
            ],
            "sourceType": [
                78
            ],
            "universalIdentifier": [
                1
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistrationSourceType": {},
        "ApplicationRegistrationStats": {
            "activeInstalls": [
                10
            ],
            "autoUpdateEnabled": [
                10
            ],
            "creditsUsedBreakdown": [
                214
            ],
            "mostInstalledVersion": [
                1
            ],
            "suspendedInstalls": [
                10
            ],
            "totalCreditsUsed": [
                6
            ],
            "versionDistribution": [
                657
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistrationSummary": {
            "id": [
                546
            ],
            "latestAvailableVersion": [
                1
            ],
            "logoUrl": [
                1
            ],
            "sourceType": [
                78
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationRegistrationVariable": {
            "createdAt": [
                217
            ],
            "description": [
                1
            ],
            "id": [
                546
            ],
            "isDeprecated": [
                4
            ],
            "isFilled": [
                4
            ],
            "isRequired": [
                4
            ],
            "isSecret": [
                4
            ],
            "key": [
                1
            ],
            "options": [
                333
            ],
            "type": [
                1
            ],
            "updatedAt": [
                217
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationTokenPair": {
            "applicationAccessToken": [
                88
            ],
            "applicationRefreshToken": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationVariable": {
            "description": [
                1
            ],
            "id": [
                546
            ],
            "isDeprecated": [
                4
            ],
            "isRequired": [
                4
            ],
            "isSecret": [
                4
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "options": [
                333
            ],
            "scope": [
                84
            ],
            "type": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ApplicationVariableScope": {},
        "ApprovedAccessDomain": {
            "createdAt": [
                217
            ],
            "domain": [
                1
            ],
            "id": [
                546
            ],
            "isValidated": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AuthBypassProviders": {
            "google": [
                4
            ],
            "microsoft": [
                4
            ],
            "password": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "AuthProviders": {
            "google": [
                4
            ],
            "magicLink": [
                4
            ],
            "microsoft": [
                4
            ],
            "password": [
                4
            ],
            "sso": [
                485
            ],
            "__typename": [
                1
            ]
        },
        "AuthToken": {
            "expiresAt": [
                217
            ],
            "token": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AuthTokenPair": {
            "accessOrWorkspaceAgnosticToken": [
                88
            ],
            "refreshToken": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "AuthTokens": {
            "tokens": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "AuthorizeApp": {
            "redirectUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AutocompleteResult": {
            "placeId": [
                1
            ],
            "text": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "AvailableWorkspace": {
            "displayName": [
                1
            ],
            "id": [
                546
            ],
            "inviteHash": [
                1
            ],
            "loginToken": [
                1
            ],
            "logo": [
                1
            ],
            "personalInviteToken": [
                1
            ],
            "sso": [
                484
            ],
            "workspaceUrls": [
                700
            ],
            "__typename": [
                1
            ]
        },
        "AvailableWorkspaces": {
            "availableWorkspacesForSignIn": [
                93
            ],
            "availableWorkspacesForSignUp": [
                93
            ],
            "__typename": [
                1
            ]
        },
        "AvailableWorkspacesAndAccessTokens": {
            "availableWorkspaces": [
                94
            ],
            "tokens": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "AxisNameDisplay": {},
        "BarChartConfiguration": {
            "aggregateFieldMetadataId": [
                546
            ],
            "aggregateOperation": [
                27
            ],
            "axisNameDisplay": [
                96
            ],
            "color": [
                1
            ],
            "configurationType": [
                676
            ],
            "description": [
                1
            ],
            "displayDataLabel": [
                4
            ],
            "displayLegend": [
                4
            ],
            "filter": [
                333
            ],
            "firstDayOfTheWeek": [
                10
            ],
            "groupMode": [
                100
            ],
            "isCumulative": [
                4
            ],
            "layout": [
                101
            ],
            "numberFormat": [
                147
            ],
            "omitNullValues": [
                4
            ],
            "primaryAxisDateGranularity": [
                409
            ],
            "primaryAxisGroupByFieldMetadataId": [
                546
            ],
            "primaryAxisGroupBySubFieldName": [
                1
            ],
            "primaryAxisManualSortOrder": [
                1
            ],
            "primaryAxisOrderBy": [
                311
            ],
            "rangeMax": [
                6
            ],
            "rangeMin": [
                6
            ],
            "secondaryAxisGroupByDateGranularity": [
                409
            ],
            "secondaryAxisGroupByFieldMetadataId": [
                546
            ],
            "secondaryAxisGroupBySubFieldName": [
                1
            ],
            "secondaryAxisManualSortOrder": [
                1
            ],
            "secondaryAxisOrderBy": [
                311
            ],
            "splitMultiValueFields": [
                4
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BarChartData": {
            "data": [
                333
            ],
            "formattedToRawLookup": [
                333
            ],
            "groupMode": [
                100
            ],
            "hasTooManyGroups": [
                4
            ],
            "indexBy": [
                1
            ],
            "keys": [
                1
            ],
            "layout": [
                101
            ],
            "series": [
                102
            ],
            "showDataLabels": [
                4
            ],
            "showLegend": [
                4
            ],
            "xAxisLabel": [
                1
            ],
            "yAxisLabel": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BarChartDataInput": {
            "configuration": [
                333
            ],
            "objectMetadataId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "BarChartGroupMode": {},
        "BarChartLayout": {},
        "BarChartSeries": {
            "key": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BigInt": {},
        "Billing": {
            "billingUrl": [
                1
            ],
            "isBillingEnabled": [
                4
            ],
            "stripePublishableKey": [
                1
            ],
            "trialPeriods": [
                129
            ],
            "__typename": [
                1
            ]
        },
        "BillingCustomer": {
            "hasPaymentMethod": [
                4
            ],
            "id": [
                546
            ],
            "userCreditsFallback": [
                648
            ],
            "__typename": [
                1
            ]
        },
        "BillingEndTrialPeriod": {
            "billingPortalUrl": [
                1
            ],
            "billingSubscriptions": [
                124
            ],
            "currentBillingSubscription": [
                124
            ],
            "hasPaymentMethod": [
                4
            ],
            "status": [
                519
            ],
            "__typename": [
                1
            ]
        },
        "BillingEntitlement": {
            "key": [
                108
            ],
            "value": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "BillingEntitlementKey": {},
        "BillingLicensedProduct": {
            "description": [
                1
            ],
            "images": [
                1
            ],
            "metadata": [
                121
            ],
            "name": [
                1
            ],
            "prices": [
                115
            ],
            "__typename": [
                1
            ]
        },
        "BillingMeteredProduct": {
            "description": [
                1
            ],
            "images": [
                1
            ],
            "metadata": [
                121
            ],
            "name": [
                1
            ],
            "prices": [
                116
            ],
            "__typename": [
                1
            ]
        },
        "BillingPartnerCode": {
            "isEditable": [
                4
            ],
            "partnerCode": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BillingPaymentIntent": {
            "clientSecret": [
                1
            ],
            "paymentIntentType": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BillingPlan": {
            "baseProducts": [
                109
            ],
            "downgradePlanKeys": [
                114
            ],
            "isCheckoutDefault": [
                4
            ],
            "isSellable": [
                4
            ],
            "meteredProducts": [
                110
            ],
            "planKey": [
                114
            ],
            "resourceCreditProducts": [
                109
            ],
            "upgradePlanKeys": [
                114
            ],
            "__typename": [
                1
            ]
        },
        "BillingPlanKey": {},
        "BillingPriceLicensed": {
            "creditAmount": [
                6
            ],
            "isSellable": [
                4
            ],
            "priceUsageType": [
                131
            ],
            "recurringInterval": [
                518
            ],
            "stripePriceId": [
                1
            ],
            "unitAmount": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "BillingPriceMetered": {
            "priceUsageType": [
                131
            ],
            "recurringInterval": [
                518
            ],
            "stripePriceId": [
                1
            ],
            "tiers": [
                117
            ],
            "__typename": [
                1
            ]
        },
        "BillingPriceTier": {
            "flatAmount": [
                6
            ],
            "unitAmount": [
                6
            ],
            "upTo": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "BillingProduct": {
            "description": [
                1
            ],
            "images": [
                1
            ],
            "metadata": [
                121
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BillingProductDTO": {
            "description": [
                1
            ],
            "images": [
                1
            ],
            "metadata": [
                121
            ],
            "name": [
                1
            ],
            "on_BillingLicensedProduct": [
                109
            ],
            "on_BillingMeteredProduct": [
                110
            ],
            "__typename": [
                1
            ]
        },
        "BillingProductKey": {},
        "BillingProductMetadata": {
            "isLegacy": [
                1
            ],
            "planKey": [
                114
            ],
            "priceUsageBased": [
                131
            ],
            "productKey": [
                120
            ],
            "__typename": [
                1
            ]
        },
        "BillingResourceCreditUsage": {
            "periodEnd": [
                217
            ],
            "periodStart": [
                217
            ],
            "productKey": [
                120
            ],
            "unitPriceCents": [
                6
            ],
            "userCreditsUsed": [
                6
            ],
            "workspaceCreditsExtraGranted": [
                6
            ],
            "workspaceCreditsGranted": [
                6
            ],
            "workspaceCreditsGrantedForSeats": [
                6
            ],
            "workspaceCreditsSeats": [
                10
            ],
            "workspaceCreditsTotalGranted": [
                6
            ],
            "workspaceCreditsUsed": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "BillingSession": {
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "BillingSubscription": {
            "billingSubscriptionItems": [
                126
            ],
            "cancelAt": [
                217
            ],
            "collectionMethod": [
                125
            ],
            "currentPeriodEnd": [
                217
            ],
            "hasUserCredits": [
                4
            ],
            "id": [
                546
            ],
            "interval": [
                518
            ],
            "metadata": [
                333
            ],
            "phases": [
                127
            ],
            "status": [
                519
            ],
            "__typename": [
                1
            ]
        },
        "BillingSubscriptionCollectionMethod": {},
        "BillingSubscriptionItem": {
            "billingProduct": [
                119
            ],
            "creditAmount": [
                6
            ],
            "hasReachedCurrentPeriodCap": [
                4
            ],
            "id": [
                546
            ],
            "quantity": [
                6
            ],
            "stripePriceId": [
                1
            ],
            "unitAmount": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "BillingSubscriptionSchedulePhase": {
            "end_date": [
                6
            ],
            "items": [
                128
            ],
            "start_date": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "BillingSubscriptionSchedulePhaseItem": {
            "price": [
                1
            ],
            "quantity": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "BillingTrialPeriod": {
            "duration": [
                6
            ],
            "isCreditCardRequired": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "BillingUpdate": {
            "billingSubscriptions": [
                124
            ],
            "currentBillingSubscription": [
                124
            ],
            "__typename": [
                1
            ]
        },
        "BillingUsageType": {},
        "BooleanFieldComparison": {
            "is": [
                4
            ],
            "isNot": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "CalendarChannel": {
            "connectedAccountId": [
                546
            ],
            "contactAutoCreationPolicy": [
                134
            ],
            "createdAt": [
                217
            ],
            "excludePrivateEvents": [
                4
            ],
            "handle": [
                1
            ],
            "id": [
                546
            ],
            "isContactAutoCreationEnabled": [
                4
            ],
            "isSyncEnabled": [
                4
            ],
            "syncStage": [
                135
            ],
            "syncStageStartedAt": [
                217
            ],
            "syncStatus": [
                136
            ],
            "syncedAt": [
                217
            ],
            "throttleFailureCount": [
                6
            ],
            "updatedAt": [
                217
            ],
            "visibility": [
                137
            ],
            "__typename": [
                1
            ]
        },
        "CalendarChannelContactAutoCreationPolicy": {},
        "CalendarChannelSyncStage": {},
        "CalendarChannelSyncStatus": {},
        "CalendarChannelVisibility": {},
        "CalendarConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "CallRecordingSummaryConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "CallRecordingTranscriptConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "CampaignAudiencePreviewDTO": {
            "duplicateEmails": [
                10
            ],
            "globallyUnsubscribed": [
                10
            ],
            "hardSuppressed": [
                10
            ],
            "sendable": [
                10
            ],
            "topicUnsubscribed": [
                10
            ],
            "totalMembers": [
                10
            ],
            "trackingRefused": [
                10
            ],
            "withoutEmail": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "CancelMessageCampaignInput": {
            "campaignId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CancelMessageCampaignOutputDTO": {
            "campaignId": [
                1
            ],
            "canceledMessageCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "Captcha": {
            "provider": [
                145
            ],
            "siteKey": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CaptchaDriverType": {},
        "ChannelSyncSuccess": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ChartNumberFormat": {},
        "ChatConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "ChatStreamCatchupChunks": {
            "chunks": [
                333
            ],
            "error": [
                150
            ],
            "maxSeq": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ChatStreamError": {
            "code": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ChatThreadsConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "CheckUserExist": {
            "availableWorkspacesCount": [
                6
            ],
            "exists": [
                4
            ],
            "isEmailVerified": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ClaimableApplicationRegistration": {
            "author": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                1
            ],
            "isOwned": [
                4
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "sourcePackage": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ClientAiEvaluationModelConfig": {
            "description": [
                1
            ],
            "inputCostPerMillionTokens": [
                6
            ],
            "isAvailable": [
                4
            ],
            "isDeprecated": [
                4
            ],
            "label": [
                1
            ],
            "maxCriteriaPerQuestion": [
                6
            ],
            "maxScoreLevels": [
                6
            ],
            "medianLatencyMs": [
                6
            ],
            "modelId": [
                1
            ],
            "outputCostPerMillionTokens": [
                6
            ],
            "providerLabel": [
                1
            ],
            "supportedQuestionTypes": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ClientAiModelConfig": {
            "contextWindowTokens": [
                6
            ],
            "costPerTask": [
                6
            ],
            "dataResidency": [
                1
            ],
            "effort": [
                1
            ],
            "efforts": [
                1
            ],
            "inputCostPerMillionTokens": [
                6
            ],
            "intelligenceIndex": [
                6
            ],
            "isBenchmarkInherited": [
                4
            ],
            "isDeprecated": [
                4
            ],
            "label": [
                1
            ],
            "maxOutputTokens": [
                6
            ],
            "modelFamily": [
                389
            ],
            "modelFamilyLabel": [
                1
            ],
            "modelId": [
                1
            ],
            "nativeCapabilities": [
                391
            ],
            "outputCostPerMillionTokens": [
                6
            ],
            "outputTokensPerSecond": [
                6
            ],
            "providerLabel": [
                1
            ],
            "providerName": [
                1
            ],
            "sdkPackage": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ClientAiModelTierConfig": {
            "modelId": [
                1
            ],
            "tier": [
                33
            ],
            "__typename": [
                1
            ]
        },
        "ClientConfig": {
            "aiEvaluationModels": [
                154
            ],
            "aiModelTiers": [
                156
            ],
            "aiModels": [
                155
            ],
            "allowRequestsToTwentyIcons": [
                4
            ],
            "analyticsEnabled": [
                4
            ],
            "api": [
                40
            ],
            "appVersion": [
                1
            ],
            "authProviders": [
                87
            ],
            "billing": [
                104
            ],
            "calendarBookingPageId": [
                1
            ],
            "canManageFeatureFlags": [
                4
            ],
            "captcha": [
                144
            ],
            "defaultSubdomain": [
                1
            ],
            "enterpriseInstanceType": [
                1
            ],
            "frontDomain": [
                1
            ],
            "isAttachmentPreviewEnabled": [
                4
            ],
            "isBookCallOnboardingStepEnabled": [
                4
            ],
            "isClickHouseConfigured": [
                4
            ],
            "isCloudflareIntegrationEnabled": [
                4
            ],
            "isCompanyEnrichmentEnabled": [
                4
            ],
            "isConfigVariablesInDbEnabled": [
                4
            ],
            "isCookieSessionEnabled": [
                4
            ],
            "isEmailVerificationRequired": [
                4
            ],
            "isEmailingDomainInDemoMode": [
                4
            ],
            "isGoogleCalendarEnabled": [
                4
            ],
            "isGoogleMessagingEnabled": [
                4
            ],
            "isImapSmtpCaldavEnabled": [
                4
            ],
            "isMicrosoftCalendarEnabled": [
                4
            ],
            "isMicrosoftMessagingEnabled": [
                4
            ],
            "isMultiWorkspaceEnabled": [
                4
            ],
            "isOnboardingAiChatEnabled": [
                4
            ],
            "isWorkspaceSchemaDDLLocked": [
                4
            ],
            "maintenance": [
                158
            ],
            "publicFeatureFlags": [
                440
            ],
            "publicFunctionDomain": [
                1
            ],
            "sentry": [
                503
            ],
            "serverUrl": [
                1
            ],
            "signInPrefilled": [
                4
            ],
            "support": [
                520
            ],
            "__typename": [
                1
            ]
        },
        "ClientConfigMaintenanceMode": {
            "endAt": [
                217
            ],
            "link": [
                1
            ],
            "startAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "CollectionHash": {
            "collectionName": [
                37
            ],
            "hash": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CommandMenuItem": {
            "applicationId": [
                546
            ],
            "availabilityCoreObjectName": [
                1
            ],
            "availabilityObjectMetadataId": [
                546
            ],
            "availabilityType": [
                161
            ],
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalPinnedExpression": [
                1
            ],
            "coreWorkflowVersionId": [
                546
            ],
            "createdAt": [
                217
            ],
            "engineComponentKey": [
                251
            ],
            "frontComponent": [
                293
            ],
            "frontComponentId": [
                546
            ],
            "hotKeys": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "isPinned": [
                4
            ],
            "label": [
                1
            ],
            "navigationTargetObjectMetadataId": [
                546
            ],
            "pageLayoutId": [
                546
            ],
            "payload": [
                162
            ],
            "position": [
                6
            ],
            "shortLabel": [
                1
            ],
            "universalIdentifier": [
                546
            ],
            "updatedAt": [
                217
            ],
            "workflowVersionId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CommandMenuItemAvailabilityType": {},
        "CommandMenuItemPayload": {
            "on_ObjectMetadataCommandMenuItemPayload": [
                401
            ],
            "on_PathCommandMenuItemPayload": [
                426
            ],
            "__typename": [
                1
            ]
        },
        "CompleteApplicationFileUploadsResult": {
            "errors": [
                62
            ],
            "files": [
                284
            ],
            "__typename": [
                1
            ]
        },
        "ConnectedAccountPublicDTO": {
            "applicationId": [
                546
            ],
            "archivedAt": [
                217
            ],
            "authFailedAt": [
                217
            ],
            "authFailedReason": [
                1
            ],
            "connectionParameters": [
                442
            ],
            "connectionProviderId": [
                546
            ],
            "createdAt": [
                217
            ],
            "handle": [
                1
            ],
            "handleAliases": [
                1
            ],
            "id": [
                546
            ],
            "lastCredentialsRefreshedAt": [
                217
            ],
            "lastSignedInAt": [
                217
            ],
            "name": [
                1
            ],
            "provider": [
                1
            ],
            "scope": [
                165
            ],
            "scopes": [
                1
            ],
            "updatedAt": [
                217
            ],
            "userWorkspaceId": [
                546
            ],
            "visibility": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ConnectedAccountScope": {},
        "ConnectedImapSmtpCaldavAccount": {
            "connectionParameters": [
                318
            ],
            "handle": [
                1
            ],
            "id": [
                546
            ],
            "provider": [
                1
            ],
            "userWorkspaceId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ConnectionCursor": {},
        "ConnectionParametersInput": {
            "connectionSecurity": [
                244
            ],
            "host": [
                1
            ],
            "password": [
                1
            ],
            "port": [
                6
            ],
            "username": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ConnectionProviderScope": {},
        "CreateAgentChatChannelInput": {
            "color": [
                1
            ],
            "icon": [
                1
            ],
            "name": [
                1
            ],
            "roleIds": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CreateAgentInput": {
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "label": [
                1
            ],
            "modelConfiguration": [
                333
            ],
            "modelId": [
                1
            ],
            "name": [
                1
            ],
            "prompt": [
                1
            ],
            "responseFormat": [
                333
            ],
            "roleId": [
                546
            ],
            "triggers": [
                333
            ],
            "__typename": [
                1
            ]
        },
        "CreateApiKeyInput": {
            "expiresAt": [
                1
            ],
            "name": [
                1
            ],
            "revokedAt": [
                1
            ],
            "roleId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CreateAppMessageChannelInput": {
            "connectedAccountId": [
                546
            ],
            "displayName": [
                1
            ],
            "handle": [
                1
            ],
            "messagingProviderUniversalIdentifier": [
                546
            ],
            "participantHandleFieldUniversalIdentifier": [
                546
            ],
            "visibility": [
                371
            ],
            "__typename": [
                1
            ]
        },
        "CreateApplicationFileUploadsResult": {
            "errors": [
                63
            ],
            "targets": [
                65
            ],
            "__typename": [
                1
            ]
        },
        "CreateApplicationRegistration": {
            "applicationRegistration": [
                77
            ],
            "clientSecret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateApplicationRegistrationInput": {
            "name": [
                1
            ],
            "oAuthRedirectUris": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateApprovedAccessDomainInput": {
            "domain": [
                1
            ],
            "email": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateCalendarEventInput": {
            "addConferencing": [
                4
            ],
            "attendees": [
                1
            ],
            "connectedAccountId": [
                1
            ],
            "description": [
                1
            ],
            "endsAt": [
                1
            ],
            "isFullDay": [
                4
            ],
            "location": [
                1
            ],
            "sendInvitations": [
                4
            ],
            "startsAt": [
                1
            ],
            "timeZone": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateCalendarEventOutput": {
            "calendarEventId": [
                1
            ],
            "conferenceLink": [
                1
            ],
            "error": [
                1
            ],
            "iCalUid": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "CreateCommandMenuItemInput": {
            "availabilityCoreObjectName": [
                1
            ],
            "availabilityObjectMetadataId": [
                546
            ],
            "availabilityType": [
                161
            ],
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalPinnedExpression": [
                1
            ],
            "coreWorkflowVersionId": [
                546
            ],
            "engineComponentKey": [
                251
            ],
            "frontComponentId": [
                546
            ],
            "hotKeys": [
                1
            ],
            "icon": [
                1
            ],
            "isPinned": [
                4
            ],
            "label": [
                1
            ],
            "navigationTargetObjectMetadataId": [
                546
            ],
            "pageLayoutId": [
                546
            ],
            "payload": [
                333
            ],
            "position": [
                6
            ],
            "shortLabel": [
                1
            ],
            "workflowVersionId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CreateEmailGroupChannelInput": {
            "displayName": [
                1
            ],
            "handle": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateEmailGroupChannelOutput": {
            "forwardingAddress": [
                1
            ],
            "messageChannel": [
                365
            ],
            "__typename": [
                1
            ]
        },
        "CreateEmailingDomainInput": {
            "domain": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateFieldInput": {
            "defaultValue": [
                333
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                4
            ],
            "isAuditLogged": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isNullable": [
                4
            ],
            "isRemoteCreation": [
                4
            ],
            "isSearchable": [
                4
            ],
            "isSystem": [
                4
            ],
            "isUIEditable": [
                4
            ],
            "isUIReadOnly": [
                4
            ],
            "isUnique": [
                4
            ],
            "label": [
                1
            ],
            "morphRelationsCreationPayload": [
                333
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                546
            ],
            "options": [
                333
            ],
            "relationCreationPayload": [
                333
            ],
            "settings": [
                333
            ],
            "type": [
                279
            ],
            "__typename": [
                1
            ]
        },
        "CreateFrontComponentInput": {
            "builtComponentChecksum": [
                1
            ],
            "builtComponentPath": [
                1
            ],
            "componentName": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                546
            ],
            "name": [
                1
            ],
            "sourceComponentPath": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateIndexFieldInput": {
            "fieldMetadataId": [
                546
            ],
            "subFieldName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateIndexInput": {
            "fields": [
                186
            ],
            "indexType": [
                326
            ],
            "objectMetadataId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CreateLogicFunctionFromSourceInput": {
            "cronTriggerSettings": [
                333
            ],
            "databaseEventTriggerSettings": [
                333
            ],
            "description": [
                1
            ],
            "httpRouteTriggerSettings": [
                333
            ],
            "id": [
                546
            ],
            "name": [
                1
            ],
            "serverRouteTriggerSettings": [
                333
            ],
            "source": [
                333
            ],
            "timeoutSeconds": [
                6
            ],
            "toolTriggerSettings": [
                333
            ],
            "universalIdentifier": [
                546
            ],
            "workflowActionTriggerSettings": [
                333
            ],
            "__typename": [
                1
            ]
        },
        "CreateMcpServerInput": {
            "connectionProviderId": [
                546
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateMessageSuppressionInput": {
            "emailAddress": [
                1
            ],
            "unsubscribeTopicId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CreateNavigationMenuItemInput": {
            "agentChatChannelId": [
                546
            ],
            "color": [
                1
            ],
            "folderId": [
                546
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "link": [
                1
            ],
            "name": [
                1
            ],
            "nativePageKey": [
                1
            ],
            "pageLayoutId": [
                546
            ],
            "position": [
                6
            ],
            "targetObjectMetadataId": [
                546
            ],
            "targetRecordId": [
                546
            ],
            "type": [
                393
            ],
            "userWorkspaceId": [
                546
            ],
            "viewId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CreateObjectInput": {
            "color": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isRemote": [
                4
            ],
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "nameSingular": [
                1
            ],
            "primaryKeyColumnType": [
                1
            ],
            "primaryKeyFieldMetadataSettings": [
                333
            ],
            "shortcut": [
                1
            ],
            "skipNameField": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "CreateOneFieldMetadataInput": {
            "field": [
                184
            ],
            "__typename": [
                1
            ]
        },
        "CreateOneIndexInput": {
            "index": [
                187
            ],
            "__typename": [
                1
            ]
        },
        "CreateOneObjectInput": {
            "object": [
                192
            ],
            "__typename": [
                1
            ]
        },
        "CreatePageLayoutInput": {
            "name": [
                1
            ],
            "objectMetadataId": [
                546
            ],
            "type": [
                419
            ],
            "__typename": [
                1
            ]
        },
        "CreatePageLayoutTabInput": {
            "layoutMode": [
                418
            ],
            "pageLayoutId": [
                546
            ],
            "position": [
                6
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreatePageLayoutWidgetInput": {
            "configuration": [
                333
            ],
            "objectMetadataId": [
                546
            ],
            "pageLayoutTabId": [
                546
            ],
            "position": [
                333
            ],
            "title": [
                1
            ],
            "type": [
                677
            ],
            "__typename": [
                1
            ]
        },
        "CreateRecordExportInput": {
            "fieldMetadataIds": [
                546
            ],
            "filter": [
                333
            ],
            "objectMetadataId": [
                546
            ],
            "orderBy": [
                333
            ],
            "__typename": [
                1
            ]
        },
        "CreateRelatedRecordPathInput": {
            "firstFieldMetadataId": [
                546
            ],
            "isInherent": [
                4
            ],
            "objectMetadataId": [
                546
            ],
            "secondFieldMetadataId": [
                546
            ],
            "thirdFieldMetadataId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CreateRoleInput": {
            "canAccessAllAgentChatChannels": [
                4
            ],
            "canAccessAllTools": [
                4
            ],
            "canBeAssignedToAgents": [
                4
            ],
            "canBeAssignedToApiKeys": [
                4
            ],
            "canBeAssignedToUsers": [
                4
            ],
            "canDestroyAllObjectRecords": [
                4
            ],
            "canReadAllObjectRecords": [
                4
            ],
            "canSoftDeleteAllObjectRecords": [
                4
            ],
            "canUpdateAllObjectRecords": [
                4
            ],
            "canUpdateAllSettings": [
                4
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateSkillInput": {
            "content": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreateUnsubscribeTopicInput": {
            "description": [
                1
            ],
            "name": [
                1
            ],
            "visibility": [
                550
            ],
            "__typename": [
                1
            ]
        },
        "CreateUsageLimitInput": {
            "burstValue": [
                103
            ],
            "limitKind": [
                1
            ],
            "limitValue": [
                103
            ],
            "operationType": [
                635
            ],
            "periodCount": [
                10
            ],
            "periodUnit": [
                1
            ],
            "resourceType": [
                642
            ],
            "spenderId": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                644
            ],
            "__typename": [
                1
            ]
        },
        "CreateValidationRuleInput": {
            "description": [
                1
            ],
            "errorFieldMetadataId": [
                546
            ],
            "expression": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                4
            ],
            "message": [
                1
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFieldGroupInput": {
            "id": [
                546
            ],
            "isVisible": [
                4
            ],
            "name": [
                1
            ],
            "position": [
                6
            ],
            "viewId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFieldInput": {
            "aggregateOperation": [
                27
            ],
            "fieldMetadataId": [
                546
            ],
            "id": [
                546
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "size": [
                6
            ],
            "viewFieldGroupId": [
                546
            ],
            "viewId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFilterGroupInput": {
            "id": [
                546
            ],
            "logicalOperator": [
                665
            ],
            "parentViewFilterGroupId": [
                546
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "viewId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewFilterInput": {
            "fieldMetadataId": [
                546
            ],
            "id": [
                546
            ],
            "operand": [
                666
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "relationTargetFieldMetadataId": [
                546
            ],
            "subFieldName": [
                1
            ],
            "value": [
                333
            ],
            "viewFilterGroupId": [
                546
            ],
            "viewId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewGroupInput": {
            "fieldValue": [
                1
            ],
            "id": [
                546
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "viewId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewInput": {
            "anyFieldFilterValue": [
                1
            ],
            "calendarEndFieldMetadataId": [
                546
            ],
            "calendarFieldMetadataId": [
                546
            ],
            "calendarLayout": [
                659
            ],
            "groupLoadLimit": [
                10
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isCompact": [
                4
            ],
            "kanbanAggregateOperation": [
                27
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                546
            ],
            "kanbanColumnWidth": [
                10
            ],
            "key": [
                668
            ],
            "mainGroupByFieldMetadataId": [
                546
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                546
            ],
            "openRecordIn": [
                669
            ],
            "position": [
                6
            ],
            "shouldHideEmptyGroups": [
                4
            ],
            "type": [
                672
            ],
            "visibility": [
                673
            ],
            "__typename": [
                1
            ]
        },
        "CreateViewSortInput": {
            "direction": [
                671
            ],
            "fieldMetadataId": [
                546
            ],
            "id": [
                546
            ],
            "subFieldName": [
                1
            ],
            "viewId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "CreateWebhookInput": {
            "description": [
                1
            ],
            "id": [
                546
            ],
            "operations": [
                1
            ],
            "roleId": [
                546
            ],
            "secret": [
                1
            ],
            "targetUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "CreditUsedItem": {
            "creditsUsed": [
                6
            ],
            "icon": [
                1
            ],
            "label": [
                1
            ],
            "operation": [
                635
            ],
            "resource": [
                642
            ],
            "__typename": [
                1
            ]
        },
        "CursorPaging": {
            "after": [
                167
            ],
            "before": [
                167
            ],
            "first": [
                10
            ],
            "last": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "DatabaseEventAction": {},
        "DateTime": {},
        "DeleteApprovedAccessDomainInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOneFieldInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOneIndexInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DeleteOneObjectInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DeleteSso": {
            "identityProviderId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DeleteSsoInput": {
            "identityProviderId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DeleteTwoFactorAuthenticationMethod": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewFieldGroupInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewFieldInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewFilterInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewGroupInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DeleteViewSortInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DeletedWorkspaceMember": {
            "avatarUrl": [
                1
            ],
            "id": [
                546
            ],
            "name": [
                296
            ],
            "userEmail": [
                1
            ],
            "userWorkspaceId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewFieldGroupInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewFieldInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewFilterInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewGroupInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DestroyViewSortInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "DevelopmentApplication": {
            "id": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DomainRecord": {
            "key": [
                1
            ],
            "status": [
                1
            ],
            "type": [
                1
            ],
            "validationType": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DomainValidRecords": {
            "domain": [
                1
            ],
            "id": [
                546
            ],
            "isCustomDomainEnabled": [
                4
            ],
            "records": [
                237
            ],
            "__typename": [
                1
            ]
        },
        "DuplicatedDashboard": {
            "createdAt": [
                1
            ],
            "id": [
                546
            ],
            "pageLayoutId": [
                546
            ],
            "position": [
                6
            ],
            "title": [
                1
            ],
            "updatedAt": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "DuplicatedMessageList": {
            "createdAt": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                546
            ],
            "memberCount": [
                6
            ],
            "name": [
                1
            ],
            "position": [
                6
            ],
            "updatedAt": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EditSso": {
            "id": [
                546
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                486
            ],
            "type": [
                313
            ],
            "__typename": [
                1
            ]
        },
        "EditSsoInput": {
            "id": [
                546
            ],
            "status": [
                486
            ],
            "__typename": [
                1
            ]
        },
        "EmailAccountConnectionParameters": {
            "CALDAV": [
                168
            ],
            "IMAP": [
                168
            ],
            "SMTP": [
                168
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EmailConnectionSecurity": {},
        "EmailPasswordResetLink": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "EmailThreadConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "EmailingDomain": {
            "createdAt": [
                217
            ],
            "domain": [
                1
            ],
            "id": [
                546
            ],
            "status": [
                248
            ],
            "tenantStatus": [
                249
            ],
            "unsubscribeHostnameStatus": [
                548
            ],
            "updatedAt": [
                217
            ],
            "verificationRecords": [
                654
            ],
            "verifiedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "EmailingDomainStatus": {},
        "EmailingDomainTenantStatus": {},
        "EmailsConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "EngineComponentKey": {},
        "EnqueueJobInput": {
            "delayMs": [
                10
            ],
            "jobId": [
                1
            ],
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "payload": [
                333
            ],
            "retryLimit": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobItemInput": {
            "jobId": [
                1
            ],
            "payload": [
                333
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobResult": {
            "enqueued": [
                4
            ],
            "jobId": [
                1
            ],
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobsInput": {
            "delayMs": [
                10
            ],
            "jobs": [
                253
            ],
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "payloads": [
                333
            ],
            "retryLimit": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EnqueueJobsResult": {
            "availableBytes": [
                6
            ],
            "enqueued": [
                4
            ],
            "enqueuedJobsCount": [
                10
            ],
            "jobIds": [
                1
            ],
            "jobs": [
                257
            ],
            "logicFunctionUniversalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EnqueuedJob": {
            "jobId": [
                1
            ],
            "sizeBytes": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseLicenseInfoDTO": {
            "expiresAt": [
                217
            ],
            "isValid": [
                4
            ],
            "licensee": [
                1
            ],
            "subscriptionId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EnterpriseSubscriptionStatusDTO": {
            "cancelAt": [
                217
            ],
            "currentPeriodEnd": [
                217
            ],
            "expiresAt": [
                217
            ],
            "isCancellationScheduled": [
                4
            ],
            "licensee": [
                1
            ],
            "status": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogDateRangeInput": {
            "end": [
                217
            ],
            "start": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "EventLogFieldFilterInput": {
            "field": [
                1
            ],
            "operand": [
                262
            ],
            "values": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogFilterOperand": {},
        "EventLogFiltersInput": {
            "dateRange": [
                260
            ],
            "eventType": [
                1
            ],
            "fieldFilters": [
                261
            ],
            "objectMetadataId": [
                1
            ],
            "recordId": [
                1
            ],
            "userWorkspaceId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogPageInfo": {
            "endCursor": [
                1
            ],
            "hasNextPage": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "EventLogQueryInput": {
            "after": [
                1
            ],
            "filters": [
                263
            ],
            "first": [
                10
            ],
            "table": [
                268
            ],
            "__typename": [
                1
            ]
        },
        "EventLogQueryResult": {
            "pageInfo": [
                264
            ],
            "records": [
                267
            ],
            "totalCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "EventLogRecord": {
            "event": [
                1
            ],
            "isCustom": [
                4
            ],
            "objectMetadataId": [
                1
            ],
            "properties": [
                333
            ],
            "recordId": [
                1
            ],
            "timestamp": [
                217
            ],
            "userId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "EventLogTable": {},
        "EventSubscription": {
            "eventStreamId": [
                1
            ],
            "metadataEvents": [
                380
            ],
            "objectRecordEventsWithQueryIds": [
                408
            ],
            "queueJobEvents": [
                336
            ],
            "__typename": [
                1
            ]
        },
        "ExecuteOneLogicFunctionInput": {
            "id": [
                546
            ],
            "payload": [
                333
            ],
            "__typename": [
                1
            ]
        },
        "FeatureFlag": {
            "key": [
                272
            ],
            "value": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "FeatureFlagKey": {},
        "Field": {
            "applicationId": [
                546
            ],
            "createdAt": [
                217
            ],
            "defaultValue": [
                333
            ],
            "description": [
                1
            ],
            "disabledFieldPermissionActions": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "isAuditLogged": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isNullable": [
                4
            ],
            "isSearchable": [
                4
            ],
            "isSystem": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "isUIEditable": [
                4
            ],
            "isUIReadOnly": [
                4
            ],
            "isUnique": [
                4
            ],
            "label": [
                1
            ],
            "morphId": [
                546
            ],
            "morphRelations": [
                461
            ],
            "name": [
                1
            ],
            "object": [
                395
            ],
            "objectMetadataId": [
                546
            ],
            "options": [
                333
            ],
            "relation": [
                461
            ],
            "settings": [
                333
            ],
            "type": [
                279
            ],
            "universalIdentifier": [
                1
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "FieldConfiguration": {
            "configurationType": [
                676
            ],
            "fieldDisplayMode": [
                276
            ],
            "fieldMetadataId": [
                1
            ],
            "isUIEditable": [
                4
            ],
            "nestedRelationFieldMetadataId": [
                1
            ],
            "viewId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FieldConnection": {
            "edges": [
                277
            ],
            "pageInfo": [
                415
            ],
            "__typename": [
                1
            ]
        },
        "FieldDisplayMode": {},
        "FieldEdge": {
            "cursor": [
                167
            ],
            "node": [
                273
            ],
            "__typename": [
                1
            ]
        },
        "FieldFilter": {
            "and": [
                278
            ],
            "id": [
                547
            ],
            "isActive": [
                132
            ],
            "isSystem": [
                132
            ],
            "isUIEditable": [
                132
            ],
            "isUIReadOnly": [
                132
            ],
            "objectMetadataId": [
                547
            ],
            "or": [
                278
            ],
            "__typename": [
                1
            ]
        },
        "FieldMetadataType": {},
        "FieldPermission": {
            "canReadFieldValue": [
                4
            ],
            "canUpdateFieldValue": [
                4
            ],
            "fieldMetadataId": [
                546
            ],
            "id": [
                546
            ],
            "objectMetadataId": [
                546
            ],
            "roleId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "FieldPermissionInput": {
            "canReadFieldValue": [
                4
            ],
            "canUpdateFieldValue": [
                4
            ],
            "fieldMetadataId": [
                546
            ],
            "objectMetadataId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "FieldRichTextConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "FieldsConfiguration": {
            "configurationType": [
                676
            ],
            "newFieldDefaultVisibility": [
                4
            ],
            "shouldAllowUserToSeeHiddenFields": [
                4
            ],
            "viewId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "File": {
            "createdAt": [
                217
            ],
            "id": [
                546
            ],
            "path": [
                1
            ],
            "size": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "FileAttachmentInput": {
            "filename": [
                1
            ],
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "FileFolder": {},
        "FileUploadTarget": {
            "contentType": [
                1
            ],
            "expiresAt": [
                217
            ],
            "fileId": [
                546
            ],
            "uploadUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FileWithSignedUrl": {
            "createdAt": [
                217
            ],
            "id": [
                546
            ],
            "path": [
                1
            ],
            "size": [
                6
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FilesConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "FindAvailableSSOIDP": {
            "id": [
                546
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                486
            ],
            "type": [
                313
            ],
            "workspace": [
                697
            ],
            "__typename": [
                1
            ]
        },
        "FindMessageSuppressionsInput": {
            "limit": [
                10
            ],
            "offset": [
                10
            ],
            "reason": [
                378
            ],
            "searchTerm": [
                1
            ],
            "unsubscribeTopicId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "FormFieldConfiguration": {
            "configurationType": [
                676
            ],
            "fieldMetadataId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "FrontComponent": {
            "applicationGrantedCapabilities": [
                1
            ],
            "applicationGrantedIframeMediaPermissions": [
                315
            ],
            "applicationId": [
                546
            ],
            "applicationName": [
                1
            ],
            "applicationTokenPair": [
                82
            ],
            "applicationVariables": [
                333
            ],
            "builtComponentChecksum": [
                1
            ],
            "builtComponentPath": [
                1
            ],
            "componentName": [
                1
            ],
            "createdAt": [
                217
            ],
            "description": [
                1
            ],
            "frontComponentSharedDependenciesChecksum": [
                1
            ],
            "id": [
                546
            ],
            "isHeadless": [
                4
            ],
            "name": [
                1
            ],
            "sourceComponentPath": [
                1
            ],
            "universalIdentifier": [
                546
            ],
            "updatedAt": [
                217
            ],
            "usesSdkClient": [
                4
            ],
            "widgetAvailability": [
                295
            ],
            "__typename": [
                1
            ]
        },
        "FrontComponentConfiguration": {
            "configurationType": [
                676
            ],
            "frontComponentId": [
                546
            ],
            "headerCommandMenuItemUniversalIdentifiers": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "FrontComponentWidgetAvailability": {
            "objectMetadataId": [
                546
            ],
            "pageLayoutType": [
                419
            ],
            "__typename": [
                1
            ]
        },
        "FullName": {
            "firstName": [
                1
            ],
            "lastName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GenerateInput": {
            "input": [
                480
            ],
            "instructions": [
                1
            ],
            "modelId": [
                1
            ],
            "responseFormat": [
                333
            ],
            "runId": [
                546
            ],
            "scope": [
                333
            ],
            "__typename": [
                1
            ]
        },
        "GenerateResult": {
            "error": [
                1
            ],
            "object": [
                333
            ],
            "runId": [
                546
            ],
            "success": [
                4
            ],
            "text": [
                1
            ],
            "usage": [
                34
            ],
            "__typename": [
                1
            ]
        },
        "GetApiKeyInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "GetAuthorizationUrlForSSO": {
            "authorizationURL": [
                1
            ],
            "id": [
                546
            ],
            "type": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GetAuthorizationUrlForSSOInput": {
            "identityProviderId": [
                546
            ],
            "workspaceInviteHash": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GettingStartedProgress": {
            "completedStepActionKeys": [
                303
            ],
            "isHidden": [
                4
            ],
            "selectedStepActionKey": [
                303
            ],
            "snoozedUntil": [
                1
            ],
            "steps": [
                304
            ],
            "__typename": [
                1
            ]
        },
        "GettingStartedStepActionKey": {},
        "GettingStartedStepDefinition": {
            "actionKey": [
                303
            ],
            "description": [
                1
            ],
            "doneChatThreadId": [
                1
            ],
            "doneDescription": [
                1
            ],
            "doneTitle": [
                1
            ],
            "doneWorkflowId": [
                1
            ],
            "icon": [
                1
            ],
            "iconColor": [
                1
            ],
            "kind": [
                305
            ],
            "prompt": [
                1
            ],
            "promptLabel": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GettingStartedStepKind": {},
        "GettingStartedWorkflow": {
            "versionId": [
                1
            ],
            "workflowId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GettingStartedWorkflowPreview": {
            "actions": [
                308
            ],
            "stepActionKey": [
                303
            ],
            "trigger": [
                309
            ],
            "__typename": [
                1
            ]
        },
        "GettingStartedWorkflowPreviewAction": {
            "title": [
                1
            ],
            "type": [
                678
            ],
            "__typename": [
                1
            ]
        },
        "GettingStartedWorkflowPreviewTrigger": {
            "databaseEventAction": [
                1
            ],
            "title": [
                1
            ],
            "type": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GrantApplicationCapabilitiesInput": {
            "applicationId": [
                546
            ],
            "capabilities": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "GraphOrderBy": {},
        "GridPosition": {
            "column": [
                6
            ],
            "columnSpan": [
                6
            ],
            "row": [
                6
            ],
            "rowSpan": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "IdentityProviderType": {},
        "IframeConfiguration": {
            "configurationType": [
                676
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "IframeMediaPermission": {
            "camera": [
                4
            ],
            "microphone": [
                4
            ],
            "origin": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "IframeMediaPermissionInput": {
            "camera": [
                4
            ],
            "microphone": [
                4
            ],
            "origin": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ImapSmtpCaldavConnectionSuccess": {
            "connectedAccountId": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "ImapSmtpCaldavPublicConnectionParameters": {
            "CALDAV": [
                319
            ],
            "IMAP": [
                319
            ],
            "SMTP": [
                319
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ImapSmtpCaldavPublicConnectionParams": {
            "connectionSecurity": [
                244
            ],
            "host": [
                1
            ],
            "port": [
                6
            ],
            "username": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Impersonate": {
            "loginToken": [
                88
            ],
            "workspace": [
                701
            ],
            "__typename": [
                1
            ]
        },
        "InboxThreadRecordInput": {
            "objectNameSingular": [
                1
            ],
            "recordId": [
                546
            ],
            "threadId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "Index": {
            "applicationId": [
                546
            ],
            "createdAt": [
                217
            ],
            "id": [
                546
            ],
            "indexFieldMetadataList": [
                324
            ],
            "indexType": [
                326
            ],
            "indexWhereClause": [
                1
            ],
            "isCustom": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "isUnique": [
                4
            ],
            "name": [
                1
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "IndexEdge": {
            "cursor": [
                167
            ],
            "node": [
                322
            ],
            "__typename": [
                1
            ]
        },
        "IndexField": {
            "createdAt": [
                217
            ],
            "fieldMetadataId": [
                546
            ],
            "id": [
                546
            ],
            "order": [
                6
            ],
            "subFieldName": [
                1
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "IndexFilter": {
            "and": [
                325
            ],
            "id": [
                547
            ],
            "isCustom": [
                132
            ],
            "or": [
                325
            ],
            "__typename": [
                1
            ]
        },
        "IndexType": {},
        "IngestAppMessagesInput": {
            "messageChannelId": [
                546
            ],
            "messages": [
                49
            ],
            "__typename": [
                1
            ]
        },
        "IngestAppMessagesOutput": {
            "messages": [
                329
            ],
            "__typename": [
                1
            ]
        },
        "IngestedAppMessage": {
            "externalId": [
                1
            ],
            "hasAttachments": [
                4
            ],
            "messageId": [
                546
            ],
            "messageThreadId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "InitiateTwoFactorAuthenticationProvisioning": {
            "uri": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "InvalidatePassword": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "InviteSuggestion": {
            "displayName": [
                1
            ],
            "email": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "JSON": {},
        "JSONObject": {},
        "JobState": {},
        "JobStatus": {
            "attemptsMade": [
                10
            ],
            "enqueuedAt": [
                6
            ],
            "failedReason": [
                1
            ],
            "finishedAt": [
                6
            ],
            "jobId": [
                1
            ],
            "progress": [
                10
            ],
            "startedAt": [
                6
            ],
            "state": [
                335
            ],
            "__typename": [
                1
            ]
        },
        "LineChartConfiguration": {
            "aggregateFieldMetadataId": [
                546
            ],
            "aggregateOperation": [
                27
            ],
            "axisNameDisplay": [
                96
            ],
            "color": [
                1
            ],
            "configurationType": [
                676
            ],
            "description": [
                1
            ],
            "displayDataLabel": [
                4
            ],
            "displayLegend": [
                4
            ],
            "filter": [
                333
            ],
            "firstDayOfTheWeek": [
                10
            ],
            "isCumulative": [
                4
            ],
            "isStacked": [
                4
            ],
            "numberFormat": [
                147
            ],
            "omitNullValues": [
                4
            ],
            "primaryAxisDateGranularity": [
                409
            ],
            "primaryAxisGroupByFieldMetadataId": [
                546
            ],
            "primaryAxisGroupBySubFieldName": [
                1
            ],
            "primaryAxisManualSortOrder": [
                1
            ],
            "primaryAxisOrderBy": [
                311
            ],
            "rangeMax": [
                6
            ],
            "rangeMin": [
                6
            ],
            "secondaryAxisGroupByDateGranularity": [
                409
            ],
            "secondaryAxisGroupByFieldMetadataId": [
                546
            ],
            "secondaryAxisGroupBySubFieldName": [
                1
            ],
            "secondaryAxisManualSortOrder": [
                1
            ],
            "secondaryAxisOrderBy": [
                311
            ],
            "splitMultiValueFields": [
                4
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "LineChartData": {
            "formattedToRawLookup": [
                333
            ],
            "hasTooManyGroups": [
                4
            ],
            "series": [
                341
            ],
            "showDataLabels": [
                4
            ],
            "showLegend": [
                4
            ],
            "xAxisLabel": [
                1
            ],
            "yAxisLabel": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "LineChartDataInput": {
            "configuration": [
                333
            ],
            "objectMetadataId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "LineChartDataPoint": {
            "x": [
                1
            ],
            "y": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "LineChartSeries": {
            "data": [
                340
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ListAppConnectionsInput": {
            "providerName": [
                1
            ],
            "scope": [
                165
            ],
            "userWorkspaceId": [
                1
            ],
            "visibility": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ListAppMessageChannelsInput": {
            "connectedAccountId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ListAppMessageFoldersInput": {
            "messageChannelId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "Location": {
            "lat": [
                6
            ],
            "lng": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunction": {
            "applicationId": [
                546
            ],
            "canRunOnDemand": [
                4
            ],
            "createdAt": [
                217
            ],
            "cronTriggerSettings": [
                333
            ],
            "databaseEventTriggerSettings": [
                333
            ],
            "description": [
                1
            ],
            "executionMode": [
                347
            ],
            "handlerName": [
                1
            ],
            "httpRouteTriggerSettings": [
                333
            ],
            "id": [
                546
            ],
            "name": [
                1
            ],
            "runtime": [
                1
            ],
            "sourceHandlerPath": [
                1
            ],
            "timeoutSeconds": [
                6
            ],
            "toolTriggerSettings": [
                333
            ],
            "universalIdentifier": [
                546
            ],
            "updatedAt": [
                217
            ],
            "workflowActionTriggerSettings": [
                333
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionExecutionMode": {},
        "LogicFunctionExecutionResult": {
            "data": [
                333
            ],
            "duration": [
                6
            ],
            "error": [
                333
            ],
            "logs": [
                1
            ],
            "status": [
                349
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionExecutionStatus": {},
        "LogicFunctionIdInput": {
            "id": [
                18
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionLogs": {
            "logs": [
                1
            ],
            "name": [
                1
            ],
            "universalIdentifier": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "LogicFunctionLogsInput": {
            "applicationId": [
                546
            ],
            "applicationUniversalIdentifier": [
                546
            ],
            "id": [
                546
            ],
            "name": [
                1
            ],
            "universalIdentifier": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "LoginToken": {
            "loginToken": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceApp": {
            "author": [
                1
            ],
            "category": [
                1
            ],
            "description": [
                1
            ],
            "id": [
                1
            ],
            "isListed": [
                4
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "sourcePackage": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppDetail": {
            "aboutDescription": [
                1
            ],
            "author": [
                1
            ],
            "billsCredits": [
                4
            ],
            "category": [
                1
            ],
            "defaultRoleUniversalIdentifier": [
                1
            ],
            "description": [
                1
            ],
            "emailSupport": [
                1
            ],
            "galleryImages": [
                1
            ],
            "id": [
                1
            ],
            "installCount": [
                10
            ],
            "isListed": [
                4
            ],
            "issueReportUrl": [
                1
            ],
            "latestAvailableVersion": [
                1
            ],
            "logoUrl": [
                1
            ],
            "manifest": [
                333
            ],
            "name": [
                1
            ],
            "objects": [
                356
            ],
            "pricingDescription": [
                1
            ],
            "requestedCapabilities": [
                1
            ],
            "requestedIframeMediaPermissions": [
                315
            ],
            "roles": [
                357
            ],
            "screenshots": [
                1
            ],
            "sourcePackage": [
                1
            ],
            "sourceType": [
                78
            ],
            "termsUrl": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "websiteUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppObject": {
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRole": {
            "canAccessAllTools": [
                4
            ],
            "canDestroyAllObjectRecords": [
                4
            ],
            "canReadAllObjectRecords": [
                4
            ],
            "canSoftDeleteAllObjectRecords": [
                4
            ],
            "canUpdateAllObjectRecords": [
                4
            ],
            "canUpdateAllSettings": [
                4
            ],
            "description": [
                1
            ],
            "fieldPermissions": [
                358
            ],
            "icon": [
                1
            ],
            "label": [
                1
            ],
            "objectPermissions": [
                359
            ],
            "permissionFlagUniversalIdentifiers": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRoleFieldPermission": {
            "canReadFieldValue": [
                4
            ],
            "canUpdateFieldValue": [
                4
            ],
            "fieldUniversalIdentifier": [
                1
            ],
            "objectUniversalIdentifier": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MarketplaceAppRoleObjectPermission": {
            "canDestroyObjectRecords": [
                4
            ],
            "canReadObjectRecords": [
                4
            ],
            "canSoftDeleteObjectRecords": [
                4
            ],
            "canUpdateObjectRecords": [
                4
            ],
            "objectUniversalIdentifier": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "McpServer": {
            "applicationId": [
                546
            ],
            "connectionProviderId": [
                546
            ],
            "createdAt": [
                217
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "tools": [
                361
            ],
            "toolsSyncError": [
                1
            ],
            "toolsSyncedAt": [
                217
            ],
            "updatedAt": [
                217
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "McpServerTool": {
            "annotations": [
                333
            ],
            "description": [
                1
            ],
            "inputSchema": [
                333
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MessageCampaignBodyConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "MessageCampaignDetailsConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "MessageCampaignSendBlockerDTO": {
            "code": [
                1
            ],
            "message": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MessageChannel": {
            "connectedAccount": [
                164
            ],
            "connectedAccountId": [
                546
            ],
            "contactAutoCreationPolicy": [
                366
            ],
            "createdAt": [
                217
            ],
            "displayName": [
                1
            ],
            "excludeGroupEmails": [
                4
            ],
            "excludeNonProfessionalEmails": [
                4
            ],
            "handle": [
                1
            ],
            "id": [
                546
            ],
            "importProgress": [
                10
            ],
            "isContactAutoCreationEnabled": [
                4
            ],
            "isSyncEnabled": [
                4
            ],
            "messageFolderImportPolicy": [
                373
            ],
            "messagingProviderUniversalIdentifier": [
                546
            ],
            "participantHandleFieldUniversalIdentifier": [
                546
            ],
            "pendingGroupEmailsAction": [
                367
            ],
            "syncStage": [
                368
            ],
            "syncStageStartedAt": [
                217
            ],
            "syncStatus": [
                369
            ],
            "syncedAt": [
                217
            ],
            "throttleFailureCount": [
                6
            ],
            "throttleRetryAfter": [
                217
            ],
            "type": [
                370
            ],
            "updatedAt": [
                217
            ],
            "visibility": [
                371
            ],
            "__typename": [
                1
            ]
        },
        "MessageChannelContactAutoCreationPolicy": {},
        "MessageChannelPendingGroupEmailsAction": {},
        "MessageChannelSyncStage": {},
        "MessageChannelSyncStatus": {},
        "MessageChannelType": {},
        "MessageChannelVisibility": {},
        "MessageFolder": {
            "createdAt": [
                217
            ],
            "externalId": [
                1
            ],
            "id": [
                546
            ],
            "isSentFolder": [
                4
            ],
            "isSynced": [
                4
            ],
            "messageChannelId": [
                546
            ],
            "name": [
                1
            ],
            "parentFolderId": [
                1
            ],
            "pendingSyncAction": [
                374
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "MessageFolderImportPolicy": {},
        "MessageFolderPendingSyncAction": {},
        "MessageParticipantRole": {},
        "MessageSuppression": {
            "createdAt": [
                217
            ],
            "emailAddress": [
                1
            ],
            "id": [
                546
            ],
            "reason": [
                378
            ],
            "source": [
                379
            ],
            "unsubscribeTopicId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "MessageSuppressionList": {
            "records": [
                376
            ],
            "totalCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "MessageSuppressionReason": {},
        "MessageSuppressionSource": {},
        "MetadataEvent": {
            "metadataName": [
                1
            ],
            "properties": [
                407
            ],
            "recordId": [
                1
            ],
            "type": [
                381
            ],
            "updatedCollectionHash": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MetadataEventAction": {},
        "MetadataTranslation": {
            "canonicalValue": [
                1
            ],
            "locale": [
                1
            ],
            "metadataName": [
                1
            ],
            "objectMetadataId": [
                546
            ],
            "property": [
                1
            ],
            "provenance": [
                384
            ],
            "recordId": [
                546
            ],
            "sourceValue": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MetadataTranslationOverrideInput": {
            "locale": [
                1
            ],
            "property": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MetadataTranslationProvenance": {},
        "MetadataTranslationsInput": {
            "fieldMetadataId": [
                546
            ],
            "locale": [
                1
            ],
            "objectMetadataId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "MinimalMetadata": {
            "collectionHashes": [
                159
            ],
            "objectMetadataItems": [
                387
            ],
            "views": [
                388
            ],
            "__typename": [
                1
            ]
        },
        "MinimalObjectMetadata": {
            "color": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "isRemote": [
                4
            ],
            "isSystem": [
                4
            ],
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "nameSingular": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "MinimalView": {
            "id": [
                546
            ],
            "key": [
                668
            ],
            "objectMetadataId": [
                546
            ],
            "type": [
                672
            ],
            "__typename": [
                1
            ]
        },
        "ModelFamily": {},
        "Mutation": {
            "activateSkill": [
                512,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "activateWorkspace": [
                682,
                {
                    "data": [
                        0,
                        "ActivateWorkspaceInput!"
                    ]
                }
            ],
            "addAgentChatMessageReaction": [
                23,
                {
                    "emoji": [
                        1,
                        "String!"
                    ],
                    "messageId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "addQueryToEventStream": [
                4,
                {
                    "input": [
                        2,
                        "AddQuerySubscriptionInput!"
                    ]
                }
            ],
            "approveApplicationIframeMediaPermissions": [
                51,
                {
                    "applicationId": [
                        546,
                        "UUID!"
                    ],
                    "approvedIframeMediaPermissions": [
                        316,
                        "[IframeMediaPermissionInput!]!"
                    ]
                }
            ],
            "assignAgentChatThread": [
                4,
                {
                    "assigneeWorkspaceMemberId": [
                        546
                    ],
                    "threadId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "assignRoleToAgent": [
                4,
                {
                    "agentId": [
                        546,
                        "UUID!"
                    ],
                    "roleId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "assignRoleToApiKey": [
                4,
                {
                    "apiKeyId": [
                        546,
                        "UUID!"
                    ],
                    "roleId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "attachRecordToInboxThread": [
                4,
                {
                    "input": [
                        321,
                        "InboxThreadRecordInput!"
                    ]
                }
            ],
            "authorizeApp": [
                91,
                {
                    "clientId": [
                        1,
                        "String!"
                    ],
                    "codeChallenge": [
                        1
                    ],
                    "issuer": [
                        1
                    ],
                    "redirectUrl": [
                        1,
                        "String!"
                    ],
                    "scope": [
                        1
                    ],
                    "state": [
                        1
                    ]
                }
            ],
            "cancelMessageCampaign": [
                143,
                {
                    "input": [
                        142,
                        "CancelMessageCampaignInput!"
                    ]
                }
            ],
            "cancelSwitchBillingInterval": [
                130
            ],
            "cancelSwitchBillingPlan": [
                130
            ],
            "cancelSwitchResourceCreditPrice": [
                130
            ],
            "checkCustomDomainValidRecords": [
                238
            ],
            "checkPublicDomainValidRecords": [
                238,
                {
                    "domain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "checkoutSession": [
                123,
                {
                    "plan": [
                        114,
                        "BillingPlanKey!"
                    ],
                    "recurringInterval": [
                        518,
                        "SubscriptionInterval!"
                    ],
                    "requirePaymentMethod": [
                        4,
                        "Boolean!"
                    ],
                    "successUrlPath": [
                        1
                    ]
                }
            ],
            "claimApplicationRegistrationOwnership": [
                77,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "completeAppTarballUpload": [
                77,
                {
                    "fileId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "completeApplicationFileUploads": [
                163,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "fileIds": [
                        546,
                        "[UUID!]!"
                    ]
                }
            ],
            "completeBookCallOnboardingStep": [
                413,
                {
                    "hasBookedCall": [
                        4,
                        "Boolean!"
                    ],
                    "isAutoSkipped": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "completeFileUpload": [
                288,
                {
                    "fileId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "completeNewWorkspaceLogoUpload": [
                288,
                {
                    "fileId": [
                        1,
                        "String!"
                    ],
                    "workspaceId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "completeWorkspaceLogoUpload": [
                288,
                {
                    "fileId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "completeWorkspaceMemberProfilePictureUpload": [
                288,
                {
                    "fileId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createAgentChatChannel": [
                5,
                {
                    "input": [
                        170,
                        "CreateAgentChatChannelInput!"
                    ]
                }
            ],
            "createApiKey": [
                41,
                {
                    "input": [
                        172,
                        "CreateApiKeyInput!"
                    ]
                }
            ],
            "createAppMessageChannel": [
                365,
                {
                    "input": [
                        173,
                        "CreateAppMessageChannelInput!"
                    ]
                }
            ],
            "createApplicationFileUploads": [
                174,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "files": [
                        64,
                        "[ApplicationFileUploadRequestInput!]!"
                    ]
                }
            ],
            "createApplicationRegistration": [
                175,
                {
                    "input": [
                        176,
                        "CreateApplicationRegistrationInput!"
                    ]
                }
            ],
            "createApprovedAccessDomain": [
                85,
                {
                    "input": [
                        177,
                        "CreateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "createBillingPaymentMethodSetupIntent": [
                112
            ],
            "createCalendarEvent": [
                179,
                {
                    "input": [
                        178,
                        "CreateCalendarEventInput!"
                    ]
                }
            ],
            "createChatThread": [
                17,
                {
                    "channelId": [
                        546
                    ]
                }
            ],
            "createCommandMenuItem": [
                160,
                {
                    "input": [
                        180,
                        "CreateCommandMenuItemInput!"
                    ]
                }
            ],
            "createDevelopmentApplication": [
                236,
                {
                    "name": [
                        1,
                        "String!"
                    ],
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createEmailGroupChannel": [
                182,
                {
                    "input": [
                        181,
                        "CreateEmailGroupChannelInput!"
                    ]
                }
            ],
            "createEmailingDomain": [
                247,
                {
                    "input": [
                        183,
                        "CreateEmailingDomainInput!"
                    ]
                }
            ],
            "createFileUpload": [
                287,
                {
                    "fieldMetadataId": [
                        1
                    ],
                    "fieldMetadataUniversalIdentifier": [
                        1
                    ],
                    "fileFolder": [
                        286,
                        "FileFolder!"
                    ],
                    "filename": [
                        1,
                        "String!"
                    ],
                    "size": [
                        6,
                        "Float!"
                    ]
                }
            ],
            "createFrontComponent": [
                293,
                {
                    "input": [
                        185,
                        "CreateFrontComponentInput!"
                    ]
                }
            ],
            "createManyNavigationMenuItems": [
                392,
                {
                    "inputs": [
                        191,
                        "[CreateNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "createManyViewFieldGroups": [
                662,
                {
                    "inputs": [
                        206,
                        "[CreateViewFieldGroupInput!]!"
                    ]
                }
            ],
            "createManyViewFields": [
                661,
                {
                    "inputs": [
                        207,
                        "[CreateViewFieldInput!]!"
                    ]
                }
            ],
            "createManyViewGroups": [
                667,
                {
                    "inputs": [
                        210,
                        "[CreateViewGroupInput!]!"
                    ]
                }
            ],
            "createMcpServer": [
                360,
                {
                    "input": [
                        189,
                        "CreateMcpServerInput!"
                    ]
                }
            ],
            "createMessageSuppression": [
                376,
                {
                    "input": [
                        190,
                        "CreateMessageSuppressionInput!"
                    ]
                }
            ],
            "createNavigationMenuItem": [
                392,
                {
                    "input": [
                        191,
                        "CreateNavigationMenuItemInput!"
                    ]
                }
            ],
            "createNewWorkspaceLogoUpload": [
                287,
                {
                    "filename": [
                        1,
                        "String!"
                    ],
                    "size": [
                        6,
                        "Float!"
                    ],
                    "workspaceId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createOIDCIdentityProvider": [
                509,
                {
                    "input": [
                        507,
                        "SetupOIDCSsoInput!"
                    ]
                }
            ],
            "createObjectEvent": [
                38,
                {
                    "event": [
                        1,
                        "String!"
                    ],
                    "objectMetadataId": [
                        546,
                        "UUID!"
                    ],
                    "properties": [
                        333
                    ],
                    "recordId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "createOneAgent": [
                3,
                {
                    "input": [
                        171,
                        "CreateAgentInput!"
                    ]
                }
            ],
            "createOneField": [
                273,
                {
                    "input": [
                        193,
                        "CreateOneFieldMetadataInput!"
                    ]
                }
            ],
            "createOneIndex": [
                322,
                {
                    "input": [
                        194,
                        "CreateOneIndexInput!"
                    ]
                }
            ],
            "createOneLogicFunction": [
                346,
                {
                    "input": [
                        188,
                        "CreateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "createOneObject": [
                395,
                {
                    "input": [
                        195,
                        "CreateOneObjectInput!"
                    ]
                }
            ],
            "createOneRole": [
                468,
                {
                    "createRoleInput": [
                        201,
                        "CreateRoleInput!"
                    ]
                }
            ],
            "createPageLayout": [
                416,
                {
                    "input": [
                        196,
                        "CreatePageLayoutInput!"
                    ]
                }
            ],
            "createPageLayoutTab": [
                417,
                {
                    "input": [
                        197,
                        "CreatePageLayoutTabInput!"
                    ]
                }
            ],
            "createPageLayoutWidget": [
                420,
                {
                    "input": [
                        198,
                        "CreatePageLayoutWidgetInput!"
                    ]
                }
            ],
            "createPublicDomain": [
                439,
                {
                    "applicationId": [
                        1,
                        "String!"
                    ],
                    "domain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "createRelatedRecordPath": [
                460,
                {
                    "input": [
                        200,
                        "CreateRelatedRecordPathInput!"
                    ]
                }
            ],
            "createSAMLIdentityProvider": [
                509,
                {
                    "input": [
                        508,
                        "SetupSAMLSsoInput!"
                    ]
                }
            ],
            "createSkill": [
                512,
                {
                    "input": [
                        202,
                        "CreateSkillInput!"
                    ]
                }
            ],
            "createSubscriptionPaymentIntent": [
                112,
                {
                    "idempotencyKey": [
                        1,
                        "String!"
                    ],
                    "plan": [
                        114,
                        "BillingPlanKey!"
                    ],
                    "recurringInterval": [
                        518,
                        "SubscriptionInterval!"
                    ],
                    "requirePaymentMethod": [
                        4,
                        "Boolean!"
                    ],
                    "successUrlPath": [
                        1
                    ]
                }
            ],
            "createUnsubscribeTopic": [
                549,
                {
                    "input": [
                        203,
                        "CreateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "createUsageLimit": [
                633,
                {
                    "input": [
                        204,
                        "CreateUsageLimitInput!"
                    ]
                }
            ],
            "createValidationRule": [
                653,
                {
                    "input": [
                        205,
                        "CreateValidationRuleInput!"
                    ]
                }
            ],
            "createView": [
                658,
                {
                    "input": [
                        211,
                        "CreateViewInput!"
                    ]
                }
            ],
            "createViewField": [
                661,
                {
                    "input": [
                        207,
                        "CreateViewFieldInput!"
                    ]
                }
            ],
            "createViewFieldGroup": [
                662,
                {
                    "input": [
                        206,
                        "CreateViewFieldGroupInput!"
                    ]
                }
            ],
            "createViewFilter": [
                663,
                {
                    "input": [
                        209,
                        "CreateViewFilterInput!"
                    ]
                }
            ],
            "createViewFilterGroup": [
                664,
                {
                    "input": [
                        208,
                        "CreateViewFilterGroupInput!"
                    ]
                }
            ],
            "createViewGroup": [
                667,
                {
                    "input": [
                        210,
                        "CreateViewGroupInput!"
                    ]
                }
            ],
            "createViewSort": [
                670,
                {
                    "input": [
                        212,
                        "CreateViewSortInput!"
                    ]
                }
            ],
            "createWebhook": [
                674,
                {
                    "input": [
                        213,
                        "CreateWebhookInput!"
                    ]
                }
            ],
            "deactivateSkill": [
                512,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteAgentChatChannel": [
                4,
                {
                    "channelId": [
                        546,
                        "UUID!"
                    ],
                    "destinationChannelId": [
                        546
                    ]
                }
            ],
            "deleteAppKeyValue": [
                4,
                {
                    "key": [
                        1,
                        "String!"
                    ],
                    "scope": [
                        46
                    ]
                }
            ],
            "deleteAppMessageChannel": [
                365,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteApplicationRegistration": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteApprovedAccessDomain": [
                4,
                {
                    "input": [
                        218,
                        "DeleteApprovedAccessDomainInput!"
                    ]
                }
            ],
            "deleteCommandMenuItem": [
                160,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteConnectedAccount": [
                164,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteCurrentWorkspace": [
                682
            ],
            "deleteEmailGroupChannel": [
                365,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteEmailingDomain": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteFrontComponent": [
                293,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteManyNavigationMenuItems": [
                392,
                {
                    "ids": [
                        546,
                        "[UUID!]!"
                    ]
                }
            ],
            "deleteMcpServer": [
                360,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteMessageSuppression": [
                4,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteNavigationMenuItem": [
                392,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteOneAgent": [
                3,
                {
                    "input": [
                        20,
                        "AgentIdInput!"
                    ]
                }
            ],
            "deleteOneField": [
                273,
                {
                    "input": [
                        219,
                        "DeleteOneFieldInput!"
                    ]
                }
            ],
            "deleteOneIndex": [
                322,
                {
                    "input": [
                        220,
                        "DeleteOneIndexInput!"
                    ]
                }
            ],
            "deleteOneLogicFunction": [
                346,
                {
                    "input": [
                        350,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "deleteOneObject": [
                395,
                {
                    "input": [
                        221,
                        "DeleteOneObjectInput!"
                    ]
                }
            ],
            "deleteOneRole": [
                1,
                {
                    "roleId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deletePublicDomain": [
                4,
                {
                    "domain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteQueuedChatMessage": [
                4,
                {
                    "messageId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteRelatedRecordPath": [
                460,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteSSOIdentityProvider": [
                222,
                {
                    "input": [
                        223,
                        "DeleteSsoInput!"
                    ]
                }
            ],
            "deleteSkill": [
                512,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteTwoFactorAuthenticationMethod": [
                224,
                {
                    "twoFactorAuthenticationMethodId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteUnsubscribeTopic": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteUsageLimit": [
                4,
                {
                    "usageLimitId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteUser": [
                646
            ],
            "deleteUserFromWorkspace": [
                650,
                {
                    "workspaceMemberIdToDelete": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteValidationRule": [
                653,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteView": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteViewField": [
                661,
                {
                    "input": [
                        226,
                        "DeleteViewFieldInput!"
                    ]
                }
            ],
            "deleteViewFieldGroup": [
                662,
                {
                    "input": [
                        225,
                        "DeleteViewFieldGroupInput!"
                    ]
                }
            ],
            "deleteViewFilter": [
                663,
                {
                    "input": [
                        227,
                        "DeleteViewFilterInput!"
                    ]
                }
            ],
            "deleteViewFilterGroup": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "deleteViewGroup": [
                667,
                {
                    "input": [
                        228,
                        "DeleteViewGroupInput!"
                    ]
                }
            ],
            "deleteViewSort": [
                4,
                {
                    "input": [
                        229,
                        "DeleteViewSortInput!"
                    ]
                }
            ],
            "deleteWebhook": [
                674,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "deleteWorkspaceInvitation": [
                1,
                {
                    "appTokenId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayout": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayoutTab": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyPageLayoutWidget": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyView": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyViewField": [
                661,
                {
                    "input": [
                        232,
                        "DestroyViewFieldInput!"
                    ]
                }
            ],
            "destroyViewFieldGroup": [
                662,
                {
                    "input": [
                        231,
                        "DestroyViewFieldGroupInput!"
                    ]
                }
            ],
            "destroyViewFilter": [
                663,
                {
                    "input": [
                        233,
                        "DestroyViewFilterInput!"
                    ]
                }
            ],
            "destroyViewFilterGroup": [
                4,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "destroyViewGroup": [
                667,
                {
                    "input": [
                        234,
                        "DestroyViewGroupInput!"
                    ]
                }
            ],
            "destroyViewSort": [
                4,
                {
                    "input": [
                        235,
                        "DestroyViewSortInput!"
                    ]
                }
            ],
            "detachRecordFromInboxThread": [
                4,
                {
                    "input": [
                        321,
                        "InboxThreadRecordInput!"
                    ]
                }
            ],
            "disconnectConnectedAccount": [
                164,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "duplicateDashboard": [
                239,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "duplicateMessageList": [
                240,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "editSSOIdentityProvider": [
                241,
                {
                    "input": [
                        242,
                        "EditSsoInput!"
                    ]
                }
            ],
            "emailPasswordResetLink": [
                245,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "workspaceId": [
                        546
                    ]
                }
            ],
            "endSubscriptionTrialPeriod": [
                106
            ],
            "enqueueJob": [
                254,
                {
                    "input": [
                        252,
                        "EnqueueJobInput!"
                    ]
                }
            ],
            "enqueueJobs": [
                256,
                {
                    "input": [
                        255,
                        "EnqueueJobsInput!"
                    ]
                }
            ],
            "enrichWorkspaceCompany": [
                686
            ],
            "executeOneLogicFunction": [
                348,
                {
                    "input": [
                        270,
                        "ExecuteOneLogicFunctionInput!"
                    ]
                }
            ],
            "generate": [
                298,
                {
                    "input": [
                        297,
                        "GenerateInput!"
                    ]
                }
            ],
            "generateApiKeyToken": [
                43,
                {
                    "apiKeyId": [
                        546,
                        "UUID!"
                    ],
                    "expiresAt": [
                        1,
                        "String!"
                    ]
                }
            ],
            "generateFrontComponentApplicationTokenPair": [
                82,
                {
                    "applicationId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "generatePlaygroundToken": [
                88
            ],
            "generateTransientToken": [
                529
            ],
            "generateTwoFactorAuthenticationRecoveryCode": [
                543,
                {
                    "otp": [
                        1
                    ],
                    "userId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "getAuthTokensFromLoginToken": [
                90,
                {
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromOTP": [
                90,
                {
                    "captchaToken": [
                        1
                    ],
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ],
                    "otp": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromSSOExchangeToken": [
                90,
                {
                    "ssoExchangeToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAuthTokensFromTwoFactorAuthenticationRecoveryCode": [
                544,
                {
                    "captchaToken": [
                        1
                    ],
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ],
                    "recoveryCode": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAuthorizationUrlForSSO": [
                300,
                {
                    "input": [
                        301,
                        "GetAuthorizationUrlForSSOInput!"
                    ]
                }
            ],
            "getLoginTokenFromCredentials": [
                353,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "locale": [
                        1
                    ],
                    "origin": [
                        1,
                        "String!"
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "goBackToPreviousOnboardingStep": [
                412
            ],
            "grantApplicationCapabilities": [
                53,
                {
                    "input": [
                        310,
                        "GrantApplicationCapabilitiesInput!"
                    ]
                }
            ],
            "impersonate": [
                320,
                {
                    "userId": [
                        546,
                        "UUID!"
                    ],
                    "workspaceId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "ingestAppMessages": [
                328,
                {
                    "input": [
                        327,
                        "IngestAppMessagesInput!"
                    ]
                }
            ],
            "initiateOTPProvisioning": [
                330,
                {
                    "loginToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "initiateOTPProvisioningForAuthenticatedUser": [
                330
            ],
            "installApplication": [
                51,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ],
                    "version": [
                        1
                    ]
                }
            ],
            "installMarketplaceApp": [
                4,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ],
                    "version": [
                        1
                    ]
                }
            ],
            "markAgentChatThreadAsDoneInChannel": [
                4,
                {
                    "threadId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "moveAgentChatThreadToChannel": [
                4,
                {
                    "channelId": [
                        546
                    ],
                    "threadId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "prepareGettingStartedWorkflow": [
                306,
                {
                    "stepActionKey": [
                        303,
                        "GettingStartedStepActionKey!"
                    ]
                }
            ],
            "refreshEnterpriseValidityToken": [
                4
            ],
            "releaseEnterpriseServerBinding": [
                258
            ],
            "removeAgentChatMessageReaction": [
                23,
                {
                    "emoji": [
                        1,
                        "String!"
                    ],
                    "messageId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "removeQueryFromEventStream": [
                4,
                {
                    "input": [
                        463,
                        "RemoveQueryFromEventStreamInput!"
                    ]
                }
            ],
            "removeRecordShare": [
                455,
                {
                    "principal": [
                        452,
                        "RecordSharePrincipalInput!"
                    ],
                    "target": [
                        459,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "removeRoleFromAgent": [
                4,
                {
                    "agentId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "renewApplicationToken": [
                82,
                {
                    "applicationRefreshToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "renewToken": [
                90,
                {
                    "appToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "reopenAgentChatThreadInChannel": [
                4,
                {
                    "threadId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "reportAppConnectionAuthFailure": [
                4,
                {
                    "input": [
                        464,
                        "ReportAppConnectionAuthFailureInput!"
                    ]
                }
            ],
            "resendEmailVerificationToken": [
                465,
                {
                    "email": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resendWorkspaceInvitation": [
                499,
                {
                    "appTokenId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetCommandMenuItem": [
                160,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "resetPageLayoutTabToDefault": [
                417,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetPageLayoutToDefault": [
                416,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetPageLayoutWidgetToDefault": [
                420,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "resetTimelineActivityType": [
                524,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "retryChatMessage": [
                491,
                {
                    "modelId": [
                        1
                    ],
                    "threadId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "revokeAllOtherUserSessions": [
                10
            ],
            "revokeApiKey": [
                41,
                {
                    "input": [
                        466,
                        "RevokeApiKeyInput!"
                    ]
                }
            ],
            "revokeApplicationAuthorization": [
                4,
                {
                    "applicationAuthorizationId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "revokeTwoFactorAuthenticationRecoveryCode": [
                4,
                {
                    "userId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "revokeUserSession": [
                4,
                {
                    "userSessionId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "rotateApplicationRegistrationClientSecret": [
                470,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "runAgent": [
                482,
                {
                    "input": [
                        478,
                        "RunAgentInput!"
                    ]
                }
            ],
            "runApplicationHealthCheck": [
                67,
                {
                    "applicationId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "runMyApplicationHealthCheck": [
                67,
                {
                    "applicationId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "saveImapSmtpCaldavAccount": [
                317,
                {
                    "connectionParameters": [
                        243,
                        "EmailAccountConnectionParameters!"
                    ],
                    "handle": [
                        1,
                        "String!"
                    ],
                    "id": [
                        546
                    ]
                }
            ],
            "sendAppChannelMessage": [
                490,
                {
                    "input": [
                        489,
                        "SendAppChannelMessageInput!"
                    ]
                }
            ],
            "sendChatMessage": [
                491,
                {
                    "browsingContext": [
                        333
                    ],
                    "channelId": [
                        546
                    ],
                    "fileAttachments": [
                        285,
                        "[FileAttachmentInput!]"
                    ],
                    "isAssistantMentioned": [
                        4
                    ],
                    "isAssistantParticipant": [
                        4
                    ],
                    "mentionedWorkspaceMemberIds": [
                        546,
                        "[UUID!]"
                    ],
                    "messageId": [
                        546,
                        "UUID!"
                    ],
                    "modelId": [
                        1
                    ],
                    "recipientWorkspaceMemberIds": [
                        546,
                        "[UUID!]"
                    ],
                    "shouldAssistantReply": [
                        4
                    ],
                    "text": [
                        1,
                        "String!"
                    ],
                    "threadId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "sendEmail": [
                494,
                {
                    "input": [
                        493,
                        "SendEmailInput!"
                    ]
                }
            ],
            "sendInboxMessage": [
                498,
                {
                    "input": [
                        497,
                        "SendInboxMessageInput!"
                    ]
                }
            ],
            "sendInvitations": [
                499,
                {
                    "emails": [
                        1,
                        "[String!]!"
                    ],
                    "roleId": [
                        546
                    ]
                }
            ],
            "sendMessageCampaign": [
                501,
                {
                    "input": [
                        500,
                        "SendMessageCampaignInput!"
                    ]
                }
            ],
            "sendMessageCampaignTest": [
                496,
                {
                    "input": [
                        502,
                        "SendMessageCampaignTestInput!"
                    ]
                }
            ],
            "setAppKeyValue": [
                45,
                {
                    "input": [
                        504,
                        "SetAppKeyValueInput!"
                    ]
                }
            ],
            "setBillingPartnerCode": [
                111,
                {
                    "partnerCode": [
                        1,
                        "String!"
                    ]
                }
            ],
            "setEnterpriseKey": [
                258,
                {
                    "enterpriseKey": [
                        1,
                        "String!"
                    ]
                }
            ],
            "setRecordPrivate": [
                455,
                {
                    "isPrivate": [
                        4,
                        "Boolean!"
                    ],
                    "target": [
                        459,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "setRecordShare": [
                455,
                {
                    "accessLevel": [
                        451,
                        "RecordShareAccessLevel!"
                    ],
                    "principal": [
                        452,
                        "RecordSharePrincipalInput!"
                    ],
                    "target": [
                        459,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "setResourceCreditSubscriptionPrice": [
                130,
                {
                    "priceId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "signIn": [
                95,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "locale": [
                        1
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "signOut": [
                4,
                {
                    "refreshToken": [
                        1
                    ]
                }
            ],
            "signUp": [
                95,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "locale": [
                        1
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "signUpInNewWorkspace": [
                510,
                {
                    "input": [
                        511
                    ]
                }
            ],
            "signUpInWorkspace": [
                510,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "locale": [
                        1
                    ],
                    "password": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ],
                    "workspaceId": [
                        546
                    ],
                    "workspaceInviteHash": [
                        1
                    ],
                    "workspacePersonalInviteToken": [
                        1
                    ]
                }
            ],
            "skipSyncEmailOnboardingStep": [
                413,
                {
                    "isAutoSkipped": [
                        4,
                        "Boolean!"
                    ]
                }
            ],
            "snoozeAgentChatThreadInChannel": [
                4,
                {
                    "snoozedUntil": [
                        217,
                        "DateTime!"
                    ],
                    "threadId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "startChannelSync": [
                146,
                {
                    "connectedAccountId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "startWorkspaceSetupChat": [
                514,
                {
                    "companyContext": [
                        333
                    ],
                    "personContext": [
                        333
                    ]
                }
            ],
            "stopAgentChatStream": [
                4,
                {
                    "threadId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "stopImpersonation": [
                515
            ],
            "switchBillingPlan": [
                130,
                {
                    "plan": [
                        114
                    ]
                }
            ],
            "switchSubscriptionInterval": [
                130
            ],
            "syncAppMessageFolders": [
                372,
                {
                    "input": [
                        522,
                        "SyncAppMessageFoldersInput!"
                    ]
                }
            ],
            "syncApplication": [
                696,
                {
                    "dryRun": [
                        4
                    ],
                    "inferDeletionFromMissingEntities": [
                        4
                    ],
                    "manifest": [
                        333,
                        "JSON!"
                    ]
                }
            ],
            "syncMarketplaceCatalog": [
                4
            ],
            "syncMcpServerTools": [
                360,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "trackAnalytics": [
                38,
                {
                    "event": [
                        1
                    ],
                    "name": [
                        1
                    ],
                    "properties": [
                        333
                    ],
                    "type": [
                        39,
                        "AnalyticsType!"
                    ]
                }
            ],
            "transferApplicationRegistrationOwnership": [
                77,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ],
                    "targetWorkspaceSubdomain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "triggerAddPeopleToMessageListJob": [
                531,
                {
                    "input": [
                        530,
                        "TriggerAddPeopleToMessageListJobInput!"
                    ]
                }
            ],
            "triggerInstallApplication": [
                535,
                {
                    "input": [
                        532,
                        "TriggerInstallApplicationInput!"
                    ]
                }
            ],
            "triggerInstallApplicationJob": [
                534,
                {
                    "input": [
                        533,
                        "TriggerInstallApplicationJobInput!"
                    ]
                }
            ],
            "triggerUninstallApplication": [
                539,
                {
                    "input": [
                        536,
                        "TriggerUninstallApplicationInput!"
                    ]
                }
            ],
            "triggerUninstallApplicationJob": [
                538,
                {
                    "input": [
                        537,
                        "TriggerUninstallApplicationJobInput!"
                    ]
                }
            ],
            "triggerUpgradeApplication": [
                541,
                {
                    "input": [
                        540,
                        "TriggerUpgradeApplicationInput!"
                    ]
                }
            ],
            "uninstallApplication": [
                4,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateAgentChatChannel": [
                5,
                {
                    "channelId": [
                        546,
                        "UUID!"
                    ],
                    "input": [
                        551,
                        "UpdateAgentChatChannelInput!"
                    ]
                }
            ],
            "updateAgentChatThreadInboxState": [
                19,
                {
                    "action": [
                        15,
                        "AgentChatInboxAction!"
                    ],
                    "snoozedUntil": [
                        217
                    ],
                    "threadIds": [
                        546,
                        "[UUID!]!"
                    ]
                }
            ],
            "updateApiKey": [
                41,
                {
                    "input": [
                        553,
                        "UpdateApiKeyInput!"
                    ]
                }
            ],
            "updateAppMessageChannel": [
                365,
                {
                    "input": [
                        554,
                        "UpdateAppMessageChannelInput!"
                    ]
                }
            ],
            "updateApplication": [
                51,
                {
                    "id": [
                        546,
                        "UUID!"
                    ],
                    "input": [
                        555,
                        "UpdateApplicationInput!"
                    ]
                }
            ],
            "updateApplicationRegistration": [
                77,
                {
                    "input": [
                        556,
                        "UpdateApplicationRegistrationInput!"
                    ]
                }
            ],
            "updateApplicationRegistrationVariable": [
                81,
                {
                    "input": [
                        558,
                        "UpdateApplicationRegistrationVariableInput!"
                    ]
                }
            ],
            "updateCalendarChannel": [
                133,
                {
                    "input": [
                        560,
                        "UpdateCalendarChannelInput!"
                    ]
                }
            ],
            "updateCommandMenuItem": [
                160,
                {
                    "input": [
                        562,
                        "UpdateCommandMenuItemInput!"
                    ]
                }
            ],
            "updateEmailGroupChannel": [
                365,
                {
                    "input": [
                        563,
                        "UpdateEmailGroupChannelInput!"
                    ]
                }
            ],
            "updateFrontComponent": [
                293,
                {
                    "input": [
                        565,
                        "UpdateFrontComponentInput!"
                    ]
                }
            ],
            "updateGettingStarted": [
                302,
                {
                    "input": [
                        567,
                        "UpdateGettingStartedInput!"
                    ]
                }
            ],
            "updateLabPublicFeatureFlag": [
                271,
                {
                    "input": [
                        568,
                        "UpdateLabPublicFeatureFlagInput!"
                    ]
                }
            ],
            "updateManyNavigationMenuItems": [
                392,
                {
                    "inputs": [
                        581,
                        "[UpdateOneNavigationMenuItemInput!]!"
                    ]
                }
            ],
            "updateManyObjects": [
                395,
                {
                    "inputs": [
                        582,
                        "[UpdateOneObjectInput!]!"
                    ]
                }
            ],
            "updateManyViewGroups": [
                667,
                {
                    "inputs": [
                        604,
                        "[UpdateViewGroupInput!]!"
                    ]
                }
            ],
            "updateMcpServer": [
                360,
                {
                    "input": [
                        571,
                        "UpdateMcpServerInput!"
                    ]
                }
            ],
            "updateMessageChannel": [
                365,
                {
                    "input": [
                        573,
                        "UpdateMessageChannelInput!"
                    ]
                }
            ],
            "updateMessageFolder": [
                372,
                {
                    "input": [
                        575,
                        "UpdateMessageFolderInput!"
                    ]
                }
            ],
            "updateMessageFolders": [
                372,
                {
                    "input": [
                        577,
                        "UpdateMessageFoldersInput!"
                    ]
                }
            ],
            "updateMyUserApplicationVariable": [
                4,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "key": [
                        1,
                        "String!"
                    ],
                    "value": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateNavigationMenuItem": [
                392,
                {
                    "input": [
                        581,
                        "UpdateOneNavigationMenuItemInput!"
                    ]
                }
            ],
            "updateOneAgent": [
                3,
                {
                    "input": [
                        552,
                        "UpdateAgentInput!"
                    ]
                }
            ],
            "updateOneApplicationVariable": [
                4,
                {
                    "applicationId": [
                        546
                    ],
                    "key": [
                        1,
                        "String!"
                    ],
                    "value": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateOneField": [
                273,
                {
                    "input": [
                        580,
                        "UpdateOneFieldMetadataInput!"
                    ]
                }
            ],
            "updateOneLogicFunction": [
                4,
                {
                    "input": [
                        569,
                        "UpdateLogicFunctionFromSourceInput!"
                    ]
                }
            ],
            "updateOneObject": [
                395,
                {
                    "input": [
                        582,
                        "UpdateOneObjectInput!"
                    ]
                }
            ],
            "updateOneRole": [
                468,
                {
                    "updateRoleInput": [
                        589,
                        "UpdateRoleInput!"
                    ]
                }
            ],
            "updatePageLayout": [
                416,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        583,
                        "UpdatePageLayoutInput!"
                    ]
                }
            ],
            "updatePageLayoutTab": [
                417,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        584,
                        "UpdatePageLayoutTabInput!"
                    ]
                }
            ],
            "updatePageLayoutWidget": [
                420,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        586,
                        "UpdatePageLayoutWidgetInput!"
                    ]
                }
            ],
            "updatePageLayoutWithTabsAndWidgets": [
                416,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        588,
                        "UpdatePageLayoutWithTabsInput!"
                    ]
                }
            ],
            "updatePasswordViaResetToken": [
                331,
                {
                    "newPassword": [
                        1,
                        "String!"
                    ],
                    "passwordResetToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "updateSkill": [
                512,
                {
                    "input": [
                        591,
                        "UpdateSkillInput!"
                    ]
                }
            ],
            "updateTimelineActivityType": [
                524,
                {
                    "input": [
                        592,
                        "UpdateTimelineActivityTypeInput!"
                    ]
                }
            ],
            "updateUnsubscribeTopic": [
                549,
                {
                    "input": [
                        593,
                        "UpdateUnsubscribeTopicInput!"
                    ]
                }
            ],
            "updateUsageLimit": [
                633,
                {
                    "input": [
                        594,
                        "UpdateUsageLimitInput!"
                    ]
                }
            ],
            "updateUserCreditsFallback": [
                105,
                {
                    "userCreditsFallback": [
                        648,
                        "UserCreditsFallback!"
                    ]
                }
            ],
            "updateUserEmail": [
                4,
                {
                    "newEmail": [
                        1,
                        "String!"
                    ],
                    "verifyEmailRedirectPath": [
                        1
                    ]
                }
            ],
            "updateValidationRule": [
                653,
                {
                    "input": [
                        595,
                        "UpdateValidationRuleInput!"
                    ]
                }
            ],
            "updateView": [
                658,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        606,
                        "UpdateViewInput!"
                    ]
                }
            ],
            "updateViewField": [
                661,
                {
                    "input": [
                        599,
                        "UpdateViewFieldInput!"
                    ]
                }
            ],
            "updateViewFieldGroup": [
                662,
                {
                    "input": [
                        597,
                        "UpdateViewFieldGroupInput!"
                    ]
                }
            ],
            "updateViewFilter": [
                663,
                {
                    "input": [
                        602,
                        "UpdateViewFilterInput!"
                    ]
                }
            ],
            "updateViewFilterGroup": [
                664,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "input": [
                        601,
                        "UpdateViewFilterGroupInput!"
                    ]
                }
            ],
            "updateViewGroup": [
                667,
                {
                    "input": [
                        604,
                        "UpdateViewGroupInput!"
                    ]
                }
            ],
            "updateViewSort": [
                670,
                {
                    "input": [
                        607,
                        "UpdateViewSortInput!"
                    ]
                }
            ],
            "updateWebhook": [
                674,
                {
                    "input": [
                        609,
                        "UpdateWebhookInput!"
                    ]
                }
            ],
            "updateWorkspace": [
                682,
                {
                    "data": [
                        613,
                        "UpdateWorkspaceInput!"
                    ]
                }
            ],
            "updateWorkspaceAllowedEmbeddingOrigins": [
                682,
                {
                    "data": [
                        611,
                        "UpdateWorkspaceAllowedEmbeddingOriginsInput!"
                    ]
                }
            ],
            "updateWorkspaceIframeMediaPermissions": [
                682,
                {
                    "data": [
                        612,
                        "UpdateWorkspaceIframeMediaPermissionsInput!"
                    ]
                }
            ],
            "updateWorkspaceMemberRole": [
                691,
                {
                    "roleId": [
                        546,
                        "UUID!"
                    ],
                    "workspaceMemberId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "updateWorkspaceMemberSettings": [
                4,
                {
                    "input": [
                        614,
                        "UpdateWorkspaceMemberSettingsInput!"
                    ]
                }
            ],
            "upgradeApplication": [
                4,
                {
                    "appRegistrationId": [
                        1,
                        "String!"
                    ],
                    "targetVersion": [
                        1,
                        "String!"
                    ]
                }
            ],
            "uploadAppTarball": [
                77,
                {
                    "file": [
                        615,
                        "Upload!"
                    ],
                    "universalIdentifier": [
                        1
                    ]
                }
            ],
            "uploadApplicationFile": [
                284,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "file": [
                        615,
                        "Upload!"
                    ],
                    "fileFolder": [
                        286,
                        "FileFolder!"
                    ],
                    "filePath": [
                        1,
                        "String!"
                    ]
                }
            ],
            "uploadFilesFieldFileByUniversalIdentifier": [
                288,
                {
                    "fieldMetadataUniversalIdentifier": [
                        1,
                        "String!"
                    ],
                    "file": [
                        615,
                        "Upload!"
                    ]
                }
            ],
            "uploadNewWorkspaceLogo": [
                288,
                {
                    "file": [
                        615,
                        "Upload!"
                    ],
                    "workspaceId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "uploadWorkspaceLogo": [
                288,
                {
                    "file": [
                        615,
                        "Upload!"
                    ]
                }
            ],
            "uploadWorkspaceMemberProfilePicture": [
                288,
                {
                    "file": [
                        615,
                        "Upload!"
                    ]
                }
            ],
            "upsertFieldPermissions": [
                280,
                {
                    "upsertFieldPermissionsInput": [
                        616,
                        "UpsertFieldPermissionsInput!"
                    ]
                }
            ],
            "upsertFieldsWidget": [
                658,
                {
                    "input": [
                        619,
                        "UpsertFieldsWidgetInput!"
                    ]
                }
            ],
            "upsertObjectPermissions": [
                403,
                {
                    "upsertObjectPermissionsInput": [
                        620,
                        "UpsertObjectPermissionsInput!"
                    ]
                }
            ],
            "upsertPermissionFlags": [
                469,
                {
                    "upsertPermissionFlagsInput": [
                        621,
                        "UpsertPermissionFlagsInput!"
                    ]
                }
            ],
            "upsertRowLevelPermissionPredicates": [
                623,
                {
                    "input": [
                        622,
                        "UpsertRowLevelPermissionPredicatesInput!"
                    ]
                }
            ],
            "upsertViewWidget": [
                658,
                {
                    "input": [
                        624,
                        "UpsertViewWidgetInput!"
                    ]
                }
            ],
            "validateApprovedAccessDomain": [
                85,
                {
                    "input": [
                        651,
                        "ValidateApprovedAccessDomainInput!"
                    ]
                }
            ],
            "verifyEmailAndGetLoginToken": [
                655,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "emailVerificationToken": [
                        1,
                        "String!"
                    ],
                    "origin": [
                        1,
                        "String!"
                    ]
                }
            ],
            "verifyEmailAndGetWorkspaceAgnosticToken": [
                95,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ],
                    "emailVerificationToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "verifyEmailingDomain": [
                247,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "verifyTwoFactorAuthenticationMethodForAuthenticatedUser": [
                656,
                {
                    "otp": [
                        1,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "NativeModelCapabilities": {
            "twitterSearch": [
                4
            ],
            "webSearch": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "NavigationMenuItem": {
            "agentChatChannelId": [
                546
            ],
            "applicationId": [
                546
            ],
            "color": [
                1
            ],
            "createdAt": [
                217
            ],
            "folderId": [
                546
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "link": [
                1
            ],
            "name": [
                1
            ],
            "nativePageKey": [
                1
            ],
            "pageLayoutId": [
                546
            ],
            "position": [
                6
            ],
            "targetObjectMetadataId": [
                546
            ],
            "targetRecordId": [
                546
            ],
            "targetRecordIdentifier": [
                448
            ],
            "type": [
                393
            ],
            "updatedAt": [
                217
            ],
            "userWorkspaceId": [
                546
            ],
            "viewId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "NavigationMenuItemType": {},
        "NotesConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "Object": {
            "applicationId": [
                546
            ],
            "color": [
                1
            ],
            "createdAt": [
                217
            ],
            "description": [
                1
            ],
            "disabledObjectPermissionActions": [
                1
            ],
            "duplicateCriteria": [
                1
            ],
            "fields": [
                398,
                {
                    "filter": [
                        278,
                        "FieldFilter!"
                    ],
                    "paging": [
                        215,
                        "CursorPaging!"
                    ]
                }
            ],
            "fieldsList": [
                273
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "imageIdentifierFieldMetadataId": [
                546
            ],
            "indexMetadataList": [
                322
            ],
            "indexMetadatas": [
                400,
                {
                    "filter": [
                        325,
                        "IndexFilter!"
                    ],
                    "paging": [
                        215,
                        "CursorPaging!"
                    ]
                }
            ],
            "isActive": [
                4
            ],
            "isAuditLogged": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isRemote": [
                4
            ],
            "isSearchable": [
                4
            ],
            "isSystem": [
                4
            ],
            "isUICreatable": [
                4
            ],
            "isUIEditable": [
                4
            ],
            "isUIReadOnly": [
                4
            ],
            "labelIdentifierFieldMetadataId": [
                546
            ],
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "nameSingular": [
                1
            ],
            "openRecordIn": [
                402
            ],
            "searchFieldMetadataList": [
                488
            ],
            "shortcut": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "ObjectConnection": {
            "edges": [
                397
            ],
            "pageInfo": [
                415
            ],
            "__typename": [
                1
            ]
        },
        "ObjectEdge": {
            "cursor": [
                167
            ],
            "node": [
                395
            ],
            "__typename": [
                1
            ]
        },
        "ObjectFieldsConnection": {
            "edges": [
                277
            ],
            "pageInfo": [
                415
            ],
            "__typename": [
                1
            ]
        },
        "ObjectFilter": {
            "and": [
                399
            ],
            "id": [
                547
            ],
            "isActive": [
                132
            ],
            "isRemote": [
                132
            ],
            "isSearchable": [
                132
            ],
            "isSystem": [
                132
            ],
            "isUICreatable": [
                132
            ],
            "isUIEditable": [
                132
            ],
            "isUIReadOnly": [
                132
            ],
            "or": [
                399
            ],
            "universalIdentifier": [
                547
            ],
            "__typename": [
                1
            ]
        },
        "ObjectIndexMetadatasConnection": {
            "edges": [
                323
            ],
            "pageInfo": [
                415
            ],
            "__typename": [
                1
            ]
        },
        "ObjectMetadataCommandMenuItemPayload": {
            "objectMetadataItemId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ObjectOpenRecordIn": {},
        "ObjectPermission": {
            "canDestroyObjectRecords": [
                4
            ],
            "canReadObjectRecords": [
                4
            ],
            "canSoftDeleteObjectRecords": [
                4
            ],
            "canUpdateObjectRecords": [
                4
            ],
            "objectMetadataId": [
                546
            ],
            "restrictedFields": [
                333
            ],
            "rowLevelPermissionPredicateGroups": [
                472
            ],
            "rowLevelPermissionPredicates": [
                471
            ],
            "__typename": [
                1
            ]
        },
        "ObjectPermissionInput": {
            "canDestroyObjectRecords": [
                4
            ],
            "canReadObjectRecords": [
                4
            ],
            "canSoftDeleteObjectRecords": [
                4
            ],
            "canUpdateObjectRecords": [
                4
            ],
            "objectMetadataId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordCount": {
            "objectNamePlural": [
                1
            ],
            "totalCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordEvent": {
            "action": [
                216
            ],
            "objectNameSingular": [
                1
            ],
            "properties": [
                407
            ],
            "recordId": [
                1
            ],
            "userId": [
                1
            ],
            "workspaceMemberId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordEventProperties": {
            "after": [
                333
            ],
            "before": [
                333
            ],
            "diff": [
                333
            ],
            "updatedFields": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordEventWithQueryIds": {
            "objectRecordEvent": [
                406
            ],
            "queryIds": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ObjectRecordGroupByDateGranularity": {},
        "ObjectRecordsPermissions": {
            "canDestroyAllRecords": [
                4
            ],
            "canReadAllRecords": [
                4
            ],
            "canSoftDeleteAllRecords": [
                4
            ],
            "canUpdateAllRecords": [
                4
            ],
            "objectMetadataId": [
                546
            ],
            "restrictedFields": [
                333
            ],
            "rowLevelRecordsPermissions": [
                477
            ],
            "__typename": [
                1
            ]
        },
        "OnboardingStatus": {},
        "OnboardingStepNavigation": {
            "onboardingStatus": [
                411
            ],
            "previousOnboardingStatus": [
                411
            ],
            "__typename": [
                1
            ]
        },
        "OnboardingStepSuccess": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "OpenRecordIn": {},
        "PageInfo": {
            "endCursor": [
                167
            ],
            "hasNextPage": [
                4
            ],
            "hasPreviousPage": [
                4
            ],
            "startCursor": [
                167
            ],
            "__typename": [
                1
            ]
        },
        "PageLayout": {
            "applicationId": [
                546
            ],
            "createdAt": [
                217
            ],
            "defaultTabToFocusOnMobileAndSidePanelId": [
                546
            ],
            "deletedAt": [
                217
            ],
            "id": [
                546
            ],
            "isFirstTabPinned": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                546
            ],
            "tabs": [
                417
            ],
            "type": [
                419
            ],
            "universalIdentifier": [
                546
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutTab": {
            "applicationId": [
                546
            ],
            "createdAt": [
                217
            ],
            "deletedAt": [
                217
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "isOverridden": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "layoutMode": [
                418
            ],
            "pageLayoutId": [
                546
            ],
            "position": [
                6
            ],
            "title": [
                1
            ],
            "universalIdentifier": [
                546
            ],
            "updatedAt": [
                217
            ],
            "widgets": [
                420
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutTabLayoutMode": {},
        "PageLayoutType": {},
        "PageLayoutWidget": {
            "applicationGrantedIframeMediaPermissions": [
                315
            ],
            "applicationId": [
                546
            ],
            "applicationName": [
                1
            ],
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalDisplay": [
                333
            ],
            "configuration": [
                675
            ],
            "createdAt": [
                217
            ],
            "deletedAt": [
                217
            ],
            "gridPosition": [
                312
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "isOverridden": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "objectMetadataId": [
                546
            ],
            "pageLayoutTabId": [
                546
            ],
            "position": [
                423
            ],
            "title": [
                1
            ],
            "type": [
                677
            ],
            "universalIdentifier": [
                546
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetCanvasPosition": {
            "layoutMode": [
                418
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetGridPosition": {
            "column": [
                10
            ],
            "columnSpan": [
                10
            ],
            "layoutMode": [
                418
            ],
            "row": [
                10
            ],
            "rowSpan": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetPosition": {
            "on_PageLayoutWidgetCanvasPosition": [
                421
            ],
            "on_PageLayoutWidgetGridPosition": [
                422
            ],
            "on_PageLayoutWidgetVerticalListPosition": [
                425
            ],
            "__typename": [
                1
            ]
        },
        "PageLayoutWidgetVerticalListHeightBehavior": {},
        "PageLayoutWidgetVerticalListPosition": {
            "heightBehavior": [
                424
            ],
            "index": [
                10
            ],
            "layoutMode": [
                418
            ],
            "__typename": [
                1
            ]
        },
        "PathCommandMenuItemPayload": {
            "path": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PermissionFlag": {
            "applicationId": [
                546
            ],
            "createdAt": [
                217
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "permissionType": [
                1
            ],
            "universalIdentifier": [
                546
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "PermissionFlagType": {},
        "PieChartConfiguration": {
            "aggregateFieldMetadataId": [
                546
            ],
            "aggregateOperation": [
                27
            ],
            "color": [
                1
            ],
            "configurationType": [
                676
            ],
            "dateGranularity": [
                409
            ],
            "description": [
                1
            ],
            "displayDataLabel": [
                4
            ],
            "displayLegend": [
                4
            ],
            "filter": [
                333
            ],
            "firstDayOfTheWeek": [
                10
            ],
            "groupByFieldMetadataId": [
                546
            ],
            "groupBySubFieldName": [
                1
            ],
            "hideEmptyCategory": [
                4
            ],
            "manualSortOrder": [
                1
            ],
            "numberFormat": [
                147
            ],
            "orderBy": [
                311
            ],
            "showCenterMetric": [
                4
            ],
            "splitMultiValueFields": [
                4
            ],
            "timezone": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PieChartData": {
            "data": [
                432
            ],
            "formattedToRawLookup": [
                333
            ],
            "hasTooManyGroups": [
                4
            ],
            "showCenterMetric": [
                4
            ],
            "showDataLabels": [
                4
            ],
            "showLegend": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "PieChartDataInput": {
            "configuration": [
                333
            ],
            "objectMetadataId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "PieChartDataItem": {
            "key": [
                1
            ],
            "value": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "PlaceDetailsResult": {
            "city": [
                1
            ],
            "country": [
                1
            ],
            "location": [
                345
            ],
            "postcode": [
                1
            ],
            "state": [
                1
            ],
            "street": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PreviewMessageCampaignAudienceInput": {
            "listId": [
                1
            ],
            "unsubscribeTopicId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PreviewMessageCampaignSendInput": {
            "campaignId": [
                1
            ],
            "scheduledAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "PreviewMessageCampaignSendOutputDTO": {
            "audience": [
                141
            ],
            "blockers": [
                364
            ],
            "__typename": [
                1
            ]
        },
        "PublicApplicationRegistration": {
            "id": [
                546
            ],
            "logoUrl": [
                1
            ],
            "name": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "websiteUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PublicConnectionParametersOutput": {
            "connectionSecurity": [
                244
            ],
            "host": [
                1
            ],
            "port": [
                6
            ],
            "username": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PublicDomain": {
            "applicationId": [
                546
            ],
            "createdAt": [
                217
            ],
            "domain": [
                1
            ],
            "id": [
                546
            ],
            "isValidated": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "PublicFeatureFlag": {
            "key": [
                272
            ],
            "metadata": [
                441
            ],
            "__typename": [
                1
            ]
        },
        "PublicFeatureFlagMetadata": {
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "imagePath": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "PublicImapSmtpCaldavConnectionParameters": {
            "CALDAV": [
                438
            ],
            "IMAP": [
                438
            ],
            "SMTP": [
                438
            ],
            "__typename": [
                1
            ]
        },
        "PublicWorkspaceData": {
            "authBypassProviders": [
                86
            ],
            "authProviders": [
                87
            ],
            "displayName": [
                1
            ],
            "id": [
                546
            ],
            "logo": [
                1
            ],
            "workspaceUrls": [
                700
            ],
            "__typename": [
                1
            ]
        },
        "PublicWorkspaceDataSummary": {
            "displayName": [
                1
            ],
            "id": [
                546
            ],
            "logo": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Query": {
            "agentChatChannelRoles": [
                8
            ],
            "agentChatChannelSummaries": [
                9
            ],
            "agentChatChannelThreadIds": [
                12,
                {
                    "after": [
                        1
                    ],
                    "assignment": [
                        7
                    ],
                    "channelId": [
                        546,
                        "UUID!"
                    ],
                    "filter": [
                        11
                    ],
                    "first": [
                        10
                    ],
                    "status": [
                        13
                    ]
                }
            ],
            "agentChatChannels": [
                5
            ],
            "agentChatOpenThreadsSummary": [
                16
            ],
            "agentRuns": [
                24,
                {
                    "agentId": [
                        546,
                        "UUID!"
                    ],
                    "limit": [
                        10,
                        "Int!"
                    ]
                }
            ],
            "aiChatUsage": [
                29
            ],
            "aiChatUserCreditsUsage": [
                30
            ],
            "apiKey": [
                41,
                {
                    "input": [
                        299,
                        "GetApiKeyInput!"
                    ]
                }
            ],
            "apiKeys": [
                41
            ],
            "appConnection": [
                44,
                {
                    "id": [
                        18,
                        "ID!"
                    ]
                }
            ],
            "appConnections": [
                44,
                {
                    "filter": [
                        342
                    ]
                }
            ],
            "appKeyValue": [
                45,
                {
                    "key": [
                        1,
                        "String!"
                    ],
                    "scope": [
                        46
                    ]
                }
            ],
            "appMessageChannels": [
                365,
                {
                    "filter": [
                        343
                    ]
                }
            ],
            "appMessageFolders": [
                372,
                {
                    "filter": [
                        344
                    ]
                }
            ],
            "applicationConnectedAccounts": [
                54,
                {
                    "applicationId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "applicationConnectionProviders": [
                55,
                {
                    "applicationId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "applicationCoreGraphqlSchema": [
                1,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "applicationRegistrationTarballUrl": [
                1,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "applicationSdkClientChecksums": [
                487,
                {
                    "applicationId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "barChartData": [
                98,
                {
                    "input": [
                        99,
                        "BarChartDataInput!"
                    ]
                }
            ],
            "billingPartnerCode": [
                111
            ],
            "billingPlans": [
                113
            ],
            "billingPortalSession": [
                123,
                {
                    "forPaymentMethodUpdate": [
                        4
                    ],
                    "returnUrlPath": [
                        1
                    ]
                }
            ],
            "callRecordingIdForCalendarEvent": [
                546,
                {
                    "calendarEventId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "chatMessages": [
                21,
                {
                    "agentUniversalIdentifier": [
                        546
                    ],
                    "threadId": [
                        546
                    ],
                    "threadKey": [
                        1
                    ]
                }
            ],
            "chatStreamCatchupChunks": [
                149,
                {
                    "agentUniversalIdentifier": [
                        546
                    ],
                    "threadId": [
                        546
                    ],
                    "threadKey": [
                        1
                    ]
                }
            ],
            "chatThread": [
                17,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "checkUserExists": [
                152,
                {
                    "captchaToken": [
                        1
                    ],
                    "email": [
                        1,
                        "String!"
                    ]
                }
            ],
            "checkWorkspaceInviteHashIsValid": [
                690,
                {
                    "inviteHash": [
                        1,
                        "String!"
                    ]
                }
            ],
            "checkWorkspaceSubdomainAvailability": [
                516,
                {
                    "subdomain": [
                        1,
                        "String!"
                    ]
                }
            ],
            "commandMenuItem": [
                160,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "commandMenuItems": [
                160
            ],
            "currentUser": [
                646
            ],
            "currentUserApplicationAuthorizations": [
                52
            ],
            "currentUserSessions": [
                649
            ],
            "currentWorkspace": [
                682
            ],
            "enterpriseCheckoutSession": [
                1,
                {
                    "billingInterval": [
                        1
                    ]
                }
            ],
            "enterprisePortalSession": [
                1,
                {
                    "returnUrlPath": [
                        1
                    ]
                }
            ],
            "enterpriseSubscriptionStatus": [
                259
            ],
            "eventLogs": [
                266,
                {
                    "input": [
                        265,
                        "EventLogQueryInput!"
                    ]
                }
            ],
            "exportApplication": [
                57,
                {
                    "shouldIncludeDependencies": [
                        4
                    ],
                    "universalIdentifier": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "field": [
                273,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "fields": [
                275,
                {
                    "filter": [
                        278,
                        "FieldFilter!"
                    ],
                    "paging": [
                        215,
                        "CursorPaging!"
                    ]
                }
            ],
            "findApplicationRegistrationByClientId": [
                437,
                {
                    "clientId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationByUniversalIdentifier": [
                77,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findApplicationRegistrationMonitoring": [
                69,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "periodEnd": [
                        217
                    ],
                    "periodStart": [
                        217
                    ]
                }
            ],
            "findApplicationRegistrationStats": [
                79,
                {
                    "id": [
                        1,
                        "String!"
                    ],
                    "periodEnd": [
                        217
                    ],
                    "periodStart": [
                        217
                    ]
                }
            ],
            "findApplicationRegistrationVariables": [
                81,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findClaimableApplicationRegistration": [
                153,
                {
                    "sourcePackage": [
                        1
                    ],
                    "universalIdentifier": [
                        1
                    ]
                }
            ],
            "findInstallApplicationJobStatus": [
                336,
                {
                    "jobId": [
                        1
                    ],
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findManyAgents": [
                3
            ],
            "findManyApplicationRegistrations": [
                77
            ],
            "findManyApplications": [
                51
            ],
            "findManyLogicFunctions": [
                346
            ],
            "findManyMarketplaceApps": [
                354,
                {
                    "universalIdentifiers": [
                        1,
                        "[String!]"
                    ]
                }
            ],
            "findManyPublicDomains": [
                439
            ],
            "findMarketplaceAppDetail": [
                355,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findOneAgent": [
                3,
                {
                    "input": [
                        20,
                        "AgentIdInput!"
                    ]
                }
            ],
            "findOneApplication": [
                51,
                {
                    "id": [
                        546
                    ],
                    "universalIdentifier": [
                        546
                    ]
                }
            ],
            "findOneApplicationRegistration": [
                77,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findOneLogicFunction": [
                346,
                {
                    "input": [
                        350,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "findUninstallApplicationJobStatus": [
                336,
                {
                    "jobId": [
                        1
                    ],
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findUpgradeApplicationJobStatus": [
                336,
                {
                    "jobId": [
                        1
                    ],
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findWorkspaceAiStats": [
                684
            ],
            "findWorkspaceFromInviteHash": [
                682,
                {
                    "inviteHash": [
                        1,
                        "String!"
                    ]
                }
            ],
            "findWorkspaceInvitations": [
                689
            ],
            "frontComponent": [
                293,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "frontComponents": [
                293
            ],
            "getAddressDetails": [
                433,
                {
                    "placeId": [
                        1,
                        "String!"
                    ],
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAiSystemPromptPreview": [
                35
            ],
            "getApiKeyRoles": [
                468
            ],
            "getApprovedAccessDomains": [
                85
            ],
            "getAutoCompleteAddress": [
                92,
                {
                    "address": [
                        1,
                        "String!"
                    ],
                    "country": [
                        1
                    ],
                    "isFieldCity": [
                        4
                    ],
                    "token": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getAvailablePackages": [
                333,
                {
                    "input": [
                        350,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "getConnectedImapSmtpCaldavAccount": [
                166,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "getEmailingDomains": [
                247
            ],
            "getInviteSuggestions": [
                332
            ],
            "getJobs": [
                336,
                {
                    "jobIds": [
                        1,
                        "[String!]!"
                    ]
                }
            ],
            "getLogicFunctionSourceCode": [
                1,
                {
                    "input": [
                        350,
                        "LogicFunctionIdInput!"
                    ]
                }
            ],
            "getPageLayout": [
                416,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutTab": [
                417,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutTabs": [
                417,
                {
                    "pageLayoutId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutWidget": [
                420,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayoutWidgets": [
                420,
                {
                    "pageLayoutTabId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getPageLayouts": [
                416,
                {
                    "objectMetadataId": [
                        1
                    ],
                    "pageLayoutType": [
                        419
                    ]
                }
            ],
            "getPermissionFlags": [
                427
            ],
            "getPublicWorkspaceDataByDomain": [
                443,
                {
                    "origin": [
                        1
                    ]
                }
            ],
            "getPublicWorkspaceDataById": [
                444,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "getResourceCreditUsage": [
                122
            ],
            "getRole": [
                468,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "getRoles": [
                468
            ],
            "getSSOIdentityProviders": [
                290
            ],
            "getToolIndex": [
                528
            ],
            "getToolInputSchema": [
                333,
                {
                    "toolName": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getUsageAnalytics": [
                630,
                {
                    "input": [
                        631
                    ]
                }
            ],
            "getView": [
                658,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewField": [
                661,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFieldGroup": [
                662,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFieldGroups": [
                662,
                {
                    "viewId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFields": [
                661,
                {
                    "viewId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFilter": [
                663,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFilterGroup": [
                664,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewFilterGroups": [
                664,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViewFilters": [
                663,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViewGroup": [
                667,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewGroups": [
                667,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViewSort": [
                670,
                {
                    "id": [
                        1,
                        "String!"
                    ]
                }
            ],
            "getViewSorts": [
                670,
                {
                    "viewId": [
                        1
                    ]
                }
            ],
            "getViews": [
                658,
                {
                    "objectMetadataId": [
                        1
                    ],
                    "viewTypes": [
                        672,
                        "[ViewType!]"
                    ]
                }
            ],
            "getWorkspaceCreationDefaults": [
                687
            ],
            "gettingStartedProgress": [
                302
            ],
            "gettingStartedWorkflowPreviews": [
                307
            ],
            "githubClaimAuthorizationUrl": [
                1,
                {
                    "applicationRegistrationId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "isApplicationStopped": [
                4,
                {
                    "applicationUniversalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "lineChartData": [
                338,
                {
                    "input": [
                        339,
                        "LineChartDataInput!"
                    ]
                }
            ],
            "listPlans": [
                113
            ],
            "mcpServer": [
                360,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "mcpServers": [
                360
            ],
            "messageSuppressions": [
                377,
                {
                    "input": [
                        291,
                        "FindMessageSuppressionsInput!"
                    ]
                }
            ],
            "metadataTranslations": [
                382,
                {
                    "input": [
                        385,
                        "MetadataTranslationsInput!"
                    ]
                }
            ],
            "minimalMetadata": [
                386
            ],
            "mostlyEmptyFieldMetadataIds": [
                546,
                {
                    "objectMetadataId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "myApplicationPreferences": [
                76
            ],
            "myCalendarChannels": [
                133,
                {
                    "connectedAccountId": [
                        546
                    ]
                }
            ],
            "myConnectedAccounts": [
                164
            ],
            "myMessageChannels": [
                365,
                {
                    "connectedAccountId": [
                        546
                    ]
                }
            ],
            "myMessageFolders": [
                372,
                {
                    "messageChannelId": [
                        546
                    ]
                }
            ],
            "myUserApplicationVariables": [
                692
            ],
            "navigationMenuItem": [
                392,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "navigationMenuItems": [
                392
            ],
            "object": [
                395,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "objectRecordCounts": [
                405
            ],
            "objects": [
                396,
                {
                    "filter": [
                        399,
                        "ObjectFilter!"
                    ],
                    "paging": [
                        215,
                        "CursorPaging!"
                    ]
                }
            ],
            "pieChartData": [
                430,
                {
                    "input": [
                        431,
                        "PieChartDataInput!"
                    ]
                }
            ],
            "previewMessageCampaignAudience": [
                141,
                {
                    "input": [
                        434,
                        "PreviewMessageCampaignAudienceInput!"
                    ]
                }
            ],
            "previewMessageCampaignSend": [
                436,
                {
                    "input": [
                        435,
                        "PreviewMessageCampaignSendInput!"
                    ]
                }
            ],
            "publicMarketplaceAppDetail": [
                355,
                {
                    "universalIdentifier": [
                        1,
                        "String!"
                    ]
                }
            ],
            "publicMarketplaceApps": [
                354
            ],
            "recordPermissions": [
                450,
                {
                    "targets": [
                        459,
                        "[RecordTargetInput!]!"
                    ]
                }
            ],
            "recordSharing": [
                455,
                {
                    "target": [
                        459,
                        "RecordTargetInput!"
                    ]
                }
            ],
            "relatedRecordPaths": [
                460
            ],
            "skill": [
                512,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "skills": [
                512
            ],
            "timelineActivityTypes": [
                524
            ],
            "twoFactorAuthenticationRecoveryStatus": [
                545,
                {
                    "userId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "unsubscribeTopics": [
                549
            ],
            "usageLimits": [
                633
            ],
            "usageQuotaDefinitions": [
                637
            ],
            "usageQuotaScopeConsumption": [
                639,
                {
                    "input": [
                        640,
                        "UsageQuotaScopeInput!"
                    ]
                }
            ],
            "usageQuotasWithConsumption": [
                641
            ],
            "validatePasswordResetToken": [
                652,
                {
                    "passwordResetToken": [
                        1,
                        "String!"
                    ]
                }
            ],
            "validationRules": [
                653,
                {
                    "objectMetadataId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "validationRulesReadingField": [
                653,
                {
                    "fieldMetadataId": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "webhook": [
                674,
                {
                    "id": [
                        546,
                        "UUID!"
                    ]
                }
            ],
            "webhooks": [
                674
            ],
            "__typename": [
                1
            ]
        },
        "RatioAggregateConfig": {
            "fieldMetadataId": [
                546
            ],
            "optionValue": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RecordExport": {
            "downloadPath": [
                1
            ],
            "errorMessage": [
                1
            ],
            "filename": [
                1
            ],
            "id": [
                546
            ],
            "progress": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "RecordIdentifier": {
            "id": [
                546
            ],
            "imageIdentifier": [
                1
            ],
            "labelIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RecordPermissionsDTO": {
            "canDelete": [
                4
            ],
            "canRead": [
                4
            ],
            "canSoftDelete": [
                4
            ],
            "canUpdate": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RecordPermissionsResult": {
            "objectMetadataId": [
                546
            ],
            "permissions": [
                449
            ],
            "recordId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "RecordShareAccessLevel": {},
        "RecordSharePrincipalInput": {
            "roleId": [
                546
            ],
            "workspaceMemberId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "RecordSharePrincipalType": {},
        "RecordShareRowCause": {},
        "RecordSharingDTO": {
            "canManageSharing": [
                4
            ],
            "hasManagedGeneralAccess": [
                4
            ],
            "isPrivate": [
                4
            ],
            "isShareable": [
                4
            ],
            "permissions": [
                449
            ],
            "roles": [
                457
            ],
            "shares": [
                456
            ],
            "__typename": [
                1
            ]
        },
        "RecordSharingGrantDTO": {
            "accessLevel": [
                451
            ],
            "id": [
                18
            ],
            "principalId": [
                546
            ],
            "principalRoleId": [
                546
            ],
            "principalType": [
                453
            ],
            "rowCause": [
                454
            ],
            "__typename": [
                1
            ]
        },
        "RecordSharingRoleDTO": {
            "canRead": [
                4
            ],
            "canUpdate": [
                4
            ],
            "id": [
                546
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RecordTableConfiguration": {
            "configurationType": [
                676
            ],
            "isUIEditable": [
                4
            ],
            "recordLimit": [
                10
            ],
            "viewId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RecordTargetInput": {
            "objectMetadataId": [
                546
            ],
            "recordId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "RelatedRecordPath": {
            "firstFieldMetadataId": [
                546
            ],
            "id": [
                546
            ],
            "isInherent": [
                4
            ],
            "objectMetadataId": [
                546
            ],
            "secondFieldMetadataId": [
                546
            ],
            "thirdFieldMetadataId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "Relation": {
            "sourceFieldMetadata": [
                273
            ],
            "sourceObjectMetadata": [
                395
            ],
            "targetFieldMetadata": [
                273
            ],
            "targetObjectMetadata": [
                395
            ],
            "type": [
                462
            ],
            "__typename": [
                1
            ]
        },
        "RelationType": {},
        "RemoveQueryFromEventStreamInput": {
            "eventStreamId": [
                1
            ],
            "queryId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ReportAppConnectionAuthFailureInput": {
            "id": [
                18
            ],
            "reason": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ResendEmailVerificationToken": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RevokeApiKeyInput": {
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "RichTextBody": {
            "blocknote": [
                1
            ],
            "markdown": [
                1
            ],
            "tiptap": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Role": {
            "agents": [
                3
            ],
            "apiKeys": [
                42
            ],
            "applicationId": [
                546
            ],
            "canAccessAllAgentChatChannels": [
                4
            ],
            "canAccessAllTools": [
                4
            ],
            "canBeAssignedToAgents": [
                4
            ],
            "canBeAssignedToApiKeys": [
                4
            ],
            "canBeAssignedToUsers": [
                4
            ],
            "canDestroyAllObjectRecords": [
                4
            ],
            "canReadAllObjectRecords": [
                4
            ],
            "canSoftDeleteAllObjectRecords": [
                4
            ],
            "canUpdateAllObjectRecords": [
                4
            ],
            "canUpdateAllSettings": [
                4
            ],
            "description": [
                1
            ],
            "fieldPermissions": [
                280
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isEditable": [
                4
            ],
            "label": [
                1
            ],
            "objectPermissions": [
                403
            ],
            "permissionFlags": [
                469
            ],
            "rowLevelPermissionPredicateGroups": [
                472
            ],
            "rowLevelPermissionPredicates": [
                471
            ],
            "universalIdentifier": [
                546
            ],
            "workspaceMembers": [
                691
            ],
            "__typename": [
                1
            ]
        },
        "RolePermissionFlag": {
            "flag": [
                1
            ],
            "id": [
                546
            ],
            "roleId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "RotateClientSecret": {
            "clientSecret": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicate": {
            "fieldMetadataId": [
                1
            ],
            "id": [
                1
            ],
            "objectMetadataId": [
                1
            ],
            "operand": [
                476
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                6
            ],
            "relationFieldMetadataId": [
                1
            ],
            "roleId": [
                1
            ],
            "rowLevelPermissionPredicateGroupId": [
                1
            ],
            "subFieldName": [
                1
            ],
            "value": [
                333
            ],
            "workspaceMemberFieldMetadataId": [
                1
            ],
            "workspaceMemberSubFieldName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateGroup": {
            "canDestroyRecords": [
                4
            ],
            "canReadRecords": [
                4
            ],
            "canSoftDeleteRecords": [
                4
            ],
            "canUpdateRecords": [
                4
            ],
            "id": [
                1
            ],
            "logicalOperator": [
                474
            ],
            "objectMetadataId": [
                1
            ],
            "parentRowLevelPermissionPredicateGroupId": [
                1
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                6
            ],
            "roleId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateGroupInput": {
            "canDestroyRecords": [
                4
            ],
            "canReadRecords": [
                4
            ],
            "canSoftDeleteRecords": [
                4
            ],
            "canUpdateRecords": [
                4
            ],
            "id": [
                546
            ],
            "logicalOperator": [
                474
            ],
            "objectMetadataId": [
                546
            ],
            "parentRowLevelPermissionPredicateGroupId": [
                546
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateGroupLogicalOperator": {},
        "RowLevelPermissionPredicateInput": {
            "fieldMetadataId": [
                546
            ],
            "id": [
                546
            ],
            "operand": [
                476
            ],
            "positionInRowLevelPermissionPredicateGroup": [
                6
            ],
            "relationFieldMetadataId": [
                546
            ],
            "rowLevelPermissionPredicateGroupId": [
                546
            ],
            "subFieldName": [
                1
            ],
            "value": [
                333
            ],
            "workspaceMemberFieldMetadataId": [
                1
            ],
            "workspaceMemberSubFieldName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RowLevelPermissionPredicateOperand": {},
        "RowLevelRecordsPermissions": {
            "canDestroyRecords": [
                4
            ],
            "canReadRecords": [
                4
            ],
            "canSoftDeleteRecords": [
                4
            ],
            "canUpdateRecords": [
                4
            ],
            "predicateGroups": [
                472
            ],
            "predicates": [
                471
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentInput": {
            "additionalInstructions": [
                1
            ],
            "agentUniversalIdentifier": [
                1
            ],
            "input": [
                480
            ],
            "messages": [
                480
            ],
            "prompt": [
                1
            ],
            "responseFormat": [
                333
            ],
            "runAsWorkspaceMemberId": [
                546
            ],
            "thread": [
                483
            ],
            "waitForCompletion": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentMessageAttachmentInput": {
            "fileId": [
                546
            ],
            "filename": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentMessageInput": {
            "attachments": [
                479
            ],
            "content": [
                1
            ],
            "role": [
                481
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentMessageRole": {},
        "RunAgentResult": {
            "error": [
                1
            ],
            "result": [
                333
            ],
            "runId": [
                546
            ],
            "status": [
                1
            ],
            "success": [
                4
            ],
            "threadId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "RunAgentThreadInput": {
            "key": [
                1
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SSOConnection": {
            "id": [
                546
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                486
            ],
            "type": [
                313
            ],
            "__typename": [
                1
            ]
        },
        "SSOIdentityProvider": {
            "id": [
                546
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                486
            ],
            "type": [
                313
            ],
            "__typename": [
                1
            ]
        },
        "SSOIdentityProviderStatus": {},
        "SdkClientChecksums": {
            "core": [
                1
            ],
            "metadata": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SearchField": {
            "createdAt": [
                217
            ],
            "fieldMetadataId": [
                546
            ],
            "id": [
                546
            ],
            "position": [
                6
            ],
            "tsVectorFieldMetadataId": [
                546
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "SendAppChannelMessageInput": {
            "idempotencyKey": [
                546
            ],
            "messageChannelId": [
                546
            ],
            "messageThreadId": [
                546
            ],
            "text": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendAppChannelMessageOutput": {
            "messageId": [
                546
            ],
            "messageThreadId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "SendChatMessageResult": {
            "mentionedParticipantWorkspaceMemberIds": [
                546
            ],
            "messageId": [
                1
            ],
            "queued": [
                4
            ],
            "recipientParticipantWorkspaceMemberIds": [
                546
            ],
            "streamId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailAttachmentInput": {
            "id": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailInput": {
            "bcc": [
                1
            ],
            "body": [
                1
            ],
            "cc": [
                1
            ],
            "connectedAccountId": [
                1
            ],
            "draftMessageId": [
                1
            ],
            "files": [
                492
            ],
            "fromHandle": [
                1
            ],
            "inReplyTo": [
                1
            ],
            "subject": [
                1
            ],
            "targetRecord": [
                495
            ],
            "to": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailOutput": {
            "error": [
                1
            ],
            "messageThreadId": [
                1
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailTargetRecordInput": {
            "objectNameSingular": [
                1
            ],
            "recordId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "SendEmailViaDomainOutput": {
            "messageId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SendInboxMessageInput": {
            "idempotencyKey": [
                1
            ],
            "text": [
                1
            ],
            "threadKey": [
                1
            ],
            "title": [
                1
            ],
            "toolCall": [
                333
            ],
            "workspaceMemberIds": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "SendInboxMessageResult": {
            "threadId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "SendInvitations": {
            "errors": [
                1
            ],
            "result": [
                689
            ],
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "SendMessageCampaignInput": {
            "campaignId": [
                1
            ],
            "scheduledAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "SendMessageCampaignOutputDTO": {
            "audience": [
                141
            ],
            "campaignId": [
                1
            ],
            "queuedCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "SendMessageCampaignTestInput": {
            "body": [
                1
            ],
            "fromAddress": [
                1
            ],
            "subject": [
                1
            ],
            "toAddress": [
                1
            ],
            "unsubscribeTopicId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Sentry": {
            "dsn": [
                1
            ],
            "environment": [
                1
            ],
            "release": [
                1
            ],
            "tracesSampleRate": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "SetAppKeyValueInput": {
            "key": [
                1
            ],
            "scope": [
                46
            ],
            "value": [
                333
            ],
            "__typename": [
                1
            ]
        },
        "SettingsMenuItem": {
            "applicationId": [
                546
            ],
            "createdAt": [
                217
            ],
            "frontComponentId": [
                546
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "position": [
                6
            ],
            "scope": [
                506
            ],
            "slug": [
                1
            ],
            "title": [
                1
            ],
            "universalIdentifier": [
                546
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "SettingsMenuItemScope": {},
        "SetupOIDCSsoInput": {
            "clientID": [
                1
            ],
            "clientSecret": [
                1
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SetupSAMLSsoInput": {
            "certificate": [
                1
            ],
            "fingerprint": [
                1
            ],
            "id": [
                546
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "ssoURL": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SetupSso": {
            "id": [
                546
            ],
            "issuer": [
                1
            ],
            "name": [
                1
            ],
            "status": [
                486
            ],
            "type": [
                313
            ],
            "__typename": [
                1
            ]
        },
        "SignUp": {
            "loginToken": [
                88
            ],
            "workspace": [
                701
            ],
            "__typename": [
                1
            ]
        },
        "SignUpInNewWorkspaceInput": {
            "captchaToken": [
                1
            ],
            "displayName": [
                1
            ],
            "partner": [
                1
            ],
            "subdomain": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Skill": {
            "applicationId": [
                546
            ],
            "content": [
                1
            ],
            "createdAt": [
                217
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "isCustom": [
                4
            ],
            "isSystem": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "StandaloneRichTextConfiguration": {
            "body": [
                467
            ],
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "StartWorkspaceSetupChatResult": {
            "outcome": [
                699
            ],
            "thread": [
                17
            ],
            "__typename": [
                1
            ]
        },
        "StopImpersonation": {
            "canRestoreImpersonatorSession": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "SubdomainAvailabilityDTO": {
            "available": [
                4
            ],
            "isValid": [
                4
            ],
            "suggestedSubdomain": [
                1
            ],
            "suggestedSubdomains": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "Subscription": {
            "eventLogsLive": [
                267,
                {
                    "fieldFilters": [
                        261,
                        "[EventLogFieldFilterInput!]"
                    ],
                    "table": [
                        268,
                        "EventLogTable!"
                    ]
                }
            ],
            "exportRecords": [
                447,
                {
                    "input": [
                        199,
                        "CreateRecordExportInput!"
                    ]
                }
            ],
            "logicFunctionLogs": [
                351,
                {
                    "input": [
                        352,
                        "LogicFunctionLogsInput!"
                    ]
                }
            ],
            "onAgentChatEvent": [
                14,
                {
                    "agentUniversalIdentifier": [
                        546
                    ],
                    "runId": [
                        546
                    ],
                    "threadId": [
                        546
                    ],
                    "threadKey": [
                        1
                    ]
                }
            ],
            "onEventSubscription": [
                269,
                {
                    "eventStreamId": [
                        1,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                1
            ]
        },
        "SubscriptionInterval": {},
        "SubscriptionStatus": {},
        "Support": {
            "supportDriver": [
                521
            ],
            "supportFrontChatId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "SupportDriver": {},
        "SyncAppMessageFoldersInput": {
            "folders": [
                48
            ],
            "messageChannelId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "TasksConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "TimelineActivityType": {
            "action": [
                1
            ],
            "applicationId": [
                546
            ],
            "createdAt": [
                217
            ],
            "emit": [
                525
            ],
            "frontComponentUniversalIdentifier": [
                546
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "objectUniversalIdentifier": [
                546
            ],
            "replacesTimelineActivityTypeUniversalIdentifier": [
                546
            ],
            "universalIdentifier": [
                546
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "TimelineActivityTypeEmit": {
            "objectUniversalIdentifier": [
                546
            ],
            "on": [
                1
            ],
            "through": [
                526
            ],
            "__typename": [
                1
            ]
        },
        "TimelineActivityTypeEmitThrough": {
            "happensAtFieldUniversalIdentifier": [
                546
            ],
            "relationFieldUniversalIdentifier": [
                546
            ],
            "triggerFieldUniversalIdentifiers": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "TimelineConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "ToolIndexEntry": {
            "category": [
                1
            ],
            "description": [
                1
            ],
            "frontComponentId": [
                1
            ],
            "icon": [
                1
            ],
            "inputSchema": [
                333
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "objectName": [
                1
            ],
            "widgetName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TransientToken": {
            "transientToken": [
                88
            ],
            "__typename": [
                1
            ]
        },
        "TriggerAddPeopleToMessageListJobInput": {
            "messageListId": [
                546
            ],
            "personFilter": [
                333
            ],
            "__typename": [
                1
            ]
        },
        "TriggerAddPeopleToMessageListJobResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerInstallApplicationInput": {
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerInstallApplicationJobInput": {
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerInstallApplicationJobResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerInstallApplicationResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUninstallApplicationInput": {
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUninstallApplicationJobInput": {
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUninstallApplicationJobResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUninstallApplicationResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUpgradeApplicationInput": {
            "targetVersion": [
                1
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TriggerUpgradeApplicationResult": {
            "jobId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TwoFactorAuthenticationMethodSummary": {
            "status": [
                1
            ],
            "strategy": [
                1
            ],
            "twoFactorAuthenticationMethodId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "TwoFactorAuthenticationRecoveryCode": {
            "expiresAt": [
                217
            ],
            "recoveryCode": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "TwoFactorAuthenticationRecoveryCodeRedemption": {
            "provisioningUri": [
                1
            ],
            "tokens": [
                89
            ],
            "__typename": [
                1
            ]
        },
        "TwoFactorAuthenticationRecoveryStatus": {
            "hasVerifiedTwoFactorAuthenticationMethod": [
                4
            ],
            "isAwaitingRecoveryEnrollment": [
                4
            ],
            "pendingRecoveryCodeExpiresAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "UUID": {},
        "UUIDFilterComparison": {
            "eq": [
                546
            ],
            "gt": [
                546
            ],
            "gte": [
                546
            ],
            "iLike": [
                546
            ],
            "in": [
                546
            ],
            "is": [
                4
            ],
            "isNot": [
                4
            ],
            "like": [
                546
            ],
            "lt": [
                546
            ],
            "lte": [
                546
            ],
            "neq": [
                546
            ],
            "notILike": [
                546
            ],
            "notIn": [
                546
            ],
            "notLike": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UnsubscribeHostnameStatus": {},
        "UnsubscribeTopic": {
            "createdAt": [
                217
            ],
            "description": [
                1
            ],
            "id": [
                546
            ],
            "name": [
                1
            ],
            "updatedAt": [
                217
            ],
            "visibility": [
                550
            ],
            "__typename": [
                1
            ]
        },
        "UnsubscribeTopicVisibility": {},
        "UpdateAgentChatChannelInput": {
            "color": [
                1
            ],
            "icon": [
                1
            ],
            "name": [
                1
            ],
            "position": [
                6
            ],
            "roleIds": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpdateAgentInput": {
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "label": [
                1
            ],
            "modelConfiguration": [
                333
            ],
            "modelId": [
                1
            ],
            "name": [
                1
            ],
            "prompt": [
                1
            ],
            "responseFormat": [
                333
            ],
            "roleId": [
                546
            ],
            "triggers": [
                333
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApiKeyInput": {
            "expiresAt": [
                1
            ],
            "id": [
                546
            ],
            "name": [
                1
            ],
            "revokedAt": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateAppMessageChannelInput": {
            "displayName": [
                1
            ],
            "id": [
                546
            ],
            "isSyncEnabled": [
                4
            ],
            "messagingProviderUniversalIdentifier": [
                546
            ],
            "visibility": [
                371
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationInput": {
            "autoUpgrade": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationInput": {
            "id": [
                1
            ],
            "update": [
                557
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationPayload": {
            "name": [
                1
            ],
            "oAuthRedirectUris": [
                1
            ],
            "oAuthScopes": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationVariableInput": {
            "id": [
                1
            ],
            "update": [
                559
            ],
            "__typename": [
                1
            ]
        },
        "UpdateApplicationRegistrationVariablePayload": {
            "description": [
                1
            ],
            "resetValue": [
                4
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCalendarChannelInput": {
            "id": [
                546
            ],
            "update": [
                561
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCalendarChannelInputUpdates": {
            "contactAutoCreationPolicy": [
                134
            ],
            "excludePrivateEvents": [
                4
            ],
            "isContactAutoCreationEnabled": [
                4
            ],
            "isSyncEnabled": [
                4
            ],
            "visibility": [
                137
            ],
            "__typename": [
                1
            ]
        },
        "UpdateCommandMenuItemInput": {
            "availabilityCoreObjectName": [
                1
            ],
            "availabilityObjectMetadataId": [
                546
            ],
            "availabilityType": [
                161
            ],
            "engineComponentKey": [
                251
            ],
            "hotKeys": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isPinned": [
                4
            ],
            "label": [
                1
            ],
            "pageLayoutId": [
                546
            ],
            "position": [
                6
            ],
            "shortLabel": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateEmailGroupChannelInput": {
            "displayName": [
                1
            ],
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpdateFieldInput": {
            "defaultValue": [
                333
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                4
            ],
            "isAuditLogged": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isNullable": [
                4
            ],
            "isSearchable": [
                4
            ],
            "isSystem": [
                4
            ],
            "isUIEditable": [
                4
            ],
            "isUIReadOnly": [
                4
            ],
            "isUnique": [
                4
            ],
            "label": [
                1
            ],
            "morphRelationsUpdatePayload": [
                333
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                546
            ],
            "options": [
                333
            ],
            "settings": [
                333
            ],
            "translations": [
                383
            ],
            "universalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateFrontComponentInput": {
            "id": [
                546
            ],
            "update": [
                566
            ],
            "__typename": [
                1
            ]
        },
        "UpdateFrontComponentInputUpdates": {
            "description": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateGettingStartedInput": {
            "completedStepActionKey": [
                303
            ],
            "completedStepChatThreadId": [
                1
            ],
            "isHidden": [
                4
            ],
            "selectedStepActionKey": [
                303
            ],
            "snoozedUntil": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLabPublicFeatureFlagInput": {
            "publicFeatureFlag": [
                1
            ],
            "value": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLogicFunctionFromSourceInput": {
            "id": [
                546
            ],
            "update": [
                570
            ],
            "__typename": [
                1
            ]
        },
        "UpdateLogicFunctionFromSourceInputUpdates": {
            "cronTriggerSettings": [
                333
            ],
            "databaseEventTriggerSettings": [
                333
            ],
            "description": [
                1
            ],
            "handlerName": [
                1
            ],
            "httpRouteTriggerSettings": [
                333
            ],
            "name": [
                1
            ],
            "sourceHandlerCode": [
                1
            ],
            "sourceHandlerPath": [
                1
            ],
            "timeoutSeconds": [
                6
            ],
            "toolTriggerSettings": [
                333
            ],
            "workflowActionTriggerSettings": [
                333
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMcpServerInput": {
            "id": [
                546
            ],
            "update": [
                572
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMcpServerInputUpdates": {
            "connectionProviderId": [
                546
            ],
            "isActive": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "url": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageChannelInput": {
            "id": [
                546
            ],
            "update": [
                574
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageChannelInputUpdates": {
            "contactAutoCreationPolicy": [
                366
            ],
            "excludeGroupEmails": [
                4
            ],
            "excludeNonProfessionalEmails": [
                4
            ],
            "isContactAutoCreationEnabled": [
                4
            ],
            "isSyncEnabled": [
                4
            ],
            "messageFolderImportPolicy": [
                373
            ],
            "visibility": [
                371
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageFolderInput": {
            "id": [
                546
            ],
            "update": [
                576
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageFolderInputUpdates": {
            "isSynced": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UpdateMessageFoldersInput": {
            "ids": [
                546
            ],
            "update": [
                576
            ],
            "__typename": [
                1
            ]
        },
        "UpdateNavigationMenuItemInput": {
            "color": [
                1
            ],
            "folderId": [
                546
            ],
            "icon": [
                1
            ],
            "link": [
                1
            ],
            "name": [
                1
            ],
            "pageLayoutId": [
                546
            ],
            "position": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "UpdateObjectPayload": {
            "color": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "imageIdentifierFieldMetadataId": [
                546
            ],
            "isActive": [
                4
            ],
            "isLabelSyncedWithName": [
                4
            ],
            "isSearchable": [
                4
            ],
            "labelIdentifierFieldMetadataId": [
                546
            ],
            "labelPlural": [
                1
            ],
            "labelSingular": [
                1
            ],
            "namePlural": [
                1
            ],
            "nameSingular": [
                1
            ],
            "openRecordIn": [
                402
            ],
            "shortcut": [
                1
            ],
            "translations": [
                383
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOneFieldMetadataInput": {
            "id": [
                546
            ],
            "update": [
                564
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOneNavigationMenuItemInput": {
            "id": [
                546
            ],
            "update": [
                578
            ],
            "__typename": [
                1
            ]
        },
        "UpdateOneObjectInput": {
            "id": [
                546
            ],
            "update": [
                579
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutInput": {
            "name": [
                1
            ],
            "objectMetadataId": [
                546
            ],
            "type": [
                419
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutTabInput": {
            "icon": [
                1
            ],
            "layoutMode": [
                418
            ],
            "position": [
                6
            ],
            "title": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutTabWithWidgetsInput": {
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "layoutMode": [
                418
            ],
            "position": [
                6
            ],
            "title": [
                1
            ],
            "widgets": [
                587
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutWidgetInput": {
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalDisplay": [
                333
            ],
            "configuration": [
                333
            ],
            "isActive": [
                4
            ],
            "objectMetadataId": [
                546
            ],
            "pageLayoutTabId": [
                546
            ],
            "position": [
                333
            ],
            "title": [
                1
            ],
            "type": [
                677
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutWidgetWithIdInput": {
            "conditionalAvailabilityExpression": [
                1
            ],
            "conditionalDisplay": [
                333
            ],
            "configuration": [
                333
            ],
            "id": [
                546
            ],
            "objectMetadataId": [
                546
            ],
            "pageLayoutTabId": [
                546
            ],
            "position": [
                333
            ],
            "title": [
                1
            ],
            "type": [
                677
            ],
            "__typename": [
                1
            ]
        },
        "UpdatePageLayoutWithTabsInput": {
            "isFirstTabPinned": [
                4
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                546
            ],
            "tabs": [
                585
            ],
            "type": [
                419
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRoleInput": {
            "id": [
                546
            ],
            "update": [
                590
            ],
            "__typename": [
                1
            ]
        },
        "UpdateRolePayload": {
            "canAccessAllAgentChatChannels": [
                4
            ],
            "canAccessAllTools": [
                4
            ],
            "canBeAssignedToAgents": [
                4
            ],
            "canBeAssignedToApiKeys": [
                4
            ],
            "canBeAssignedToUsers": [
                4
            ],
            "canDestroyAllObjectRecords": [
                4
            ],
            "canReadAllObjectRecords": [
                4
            ],
            "canSoftDeleteAllObjectRecords": [
                4
            ],
            "canUpdateAllObjectRecords": [
                4
            ],
            "canUpdateAllSettings": [
                4
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "label": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateSkillInput": {
            "content": [
                1
            ],
            "description": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "label": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateTimelineActivityTypeInput": {
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "label": [
                1
            ],
            "translations": [
                383
            ],
            "__typename": [
                1
            ]
        },
        "UpdateUnsubscribeTopicInput": {
            "description": [
                1
            ],
            "id": [
                1
            ],
            "name": [
                1
            ],
            "visibility": [
                550
            ],
            "__typename": [
                1
            ]
        },
        "UpdateUsageLimitInput": {
            "id": [
                546
            ],
            "payload": [
                204
            ],
            "__typename": [
                1
            ]
        },
        "UpdateValidationRuleInput": {
            "id": [
                546
            ],
            "update": [
                596
            ],
            "__typename": [
                1
            ]
        },
        "UpdateValidationRuleInputUpdates": {
            "description": [
                1
            ],
            "errorFieldMetadataId": [
                546
            ],
            "expression": [
                1
            ],
            "icon": [
                1
            ],
            "isActive": [
                4
            ],
            "message": [
                1
            ],
            "name": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldGroupInput": {
            "id": [
                546
            ],
            "update": [
                598
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldGroupInputUpdates": {
            "deletedAt": [
                1
            ],
            "isVisible": [
                4
            ],
            "name": [
                1
            ],
            "position": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldInput": {
            "id": [
                546
            ],
            "update": [
                600
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFieldInputUpdates": {
            "aggregateOperation": [
                27
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "size": [
                6
            ],
            "viewFieldGroupId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFilterGroupInput": {
            "id": [
                546
            ],
            "logicalOperator": [
                665
            ],
            "parentViewFilterGroupId": [
                546
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "viewId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFilterInput": {
            "id": [
                546
            ],
            "update": [
                603
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewFilterInputUpdates": {
            "fieldMetadataId": [
                546
            ],
            "operand": [
                666
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "relationTargetFieldMetadataId": [
                546
            ],
            "subFieldName": [
                1
            ],
            "value": [
                333
            ],
            "viewFilterGroupId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewGroupInput": {
            "id": [
                546
            ],
            "update": [
                605
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewGroupInputUpdates": {
            "fieldMetadataId": [
                546
            ],
            "fieldValue": [
                1
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewInput": {
            "anyFieldFilterValue": [
                1
            ],
            "calendarEndFieldMetadataId": [
                546
            ],
            "calendarFieldMetadataId": [
                546
            ],
            "calendarLayout": [
                659
            ],
            "groupLoadLimit": [
                10
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isCompact": [
                4
            ],
            "kanbanAggregateOperation": [
                27
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                546
            ],
            "kanbanColumnWidth": [
                10
            ],
            "mainGroupByFieldMetadataId": [
                546
            ],
            "name": [
                1
            ],
            "openRecordIn": [
                669
            ],
            "position": [
                6
            ],
            "shouldHideEmptyGroups": [
                4
            ],
            "translations": [
                383
            ],
            "type": [
                672
            ],
            "visibility": [
                673
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewSortInput": {
            "id": [
                546
            ],
            "update": [
                608
            ],
            "__typename": [
                1
            ]
        },
        "UpdateViewSortInputUpdates": {
            "direction": [
                671
            ],
            "subFieldName": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWebhookInput": {
            "id": [
                546
            ],
            "update": [
                610
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWebhookInputUpdates": {
            "description": [
                1
            ],
            "operations": [
                1
            ],
            "roleId": [
                546
            ],
            "secret": [
                1
            ],
            "targetUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWorkspaceAllowedEmbeddingOriginsInput": {
            "operation": [
                1
            ],
            "origin": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWorkspaceIframeMediaPermissionsInput": {
            "camera": [
                4
            ],
            "microphone": [
                4
            ],
            "origin": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWorkspaceInput": {
            "aiAdditionalInstructions": [
                1
            ],
            "aiAgentModelTier": [
                33
            ],
            "aiChatDirectMessageAssistantMode": [
                28
            ],
            "aiChatInboxAssistantMode": [
                28
            ],
            "aiChatModelTier": [
                33
            ],
            "aiDataPolicy": [
                32
            ],
            "aiEvaluationModelId": [
                1
            ],
            "aiModelIdByTier": [
                333
            ],
            "allowImpersonation": [
                4
            ],
            "customDomain": [
                1
            ],
            "defaultRoleId": [
                546
            ],
            "displayName": [
                1
            ],
            "editableProfileFields": [
                1
            ],
            "eventLogRetentionDays": [
                6
            ],
            "inviteHash": [
                1
            ],
            "isAutoModelSelectionEnabled": [
                4
            ],
            "isCampaignClickTrackingEnabled": [
                4
            ],
            "isCampaignOpenTrackingEnabled": [
                4
            ],
            "isGoogleAuthBypassEnabled": [
                4
            ],
            "isGoogleAuthEnabled": [
                4
            ],
            "isInternalMessagesImportEnabled": [
                4
            ],
            "isMicrosoftAuthBypassEnabled": [
                4
            ],
            "isMicrosoftAuthEnabled": [
                4
            ],
            "isPasswordAuthBypassEnabled": [
                4
            ],
            "isPasswordAuthEnabled": [
                4
            ],
            "isPublicInviteLinkEnabled": [
                4
            ],
            "isTwoFactorAuthenticationEnforced": [
                4
            ],
            "logo": [
                1
            ],
            "subdomain": [
                1
            ],
            "trashRetentionDays": [
                6
            ],
            "workspaceDiscoverability": [
                688
            ],
            "__typename": [
                1
            ]
        },
        "UpdateWorkspaceMemberSettingsInput": {
            "update": [
                333
            ],
            "workspaceMemberId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "Upload": {},
        "UpsertFieldPermissionsInput": {
            "fieldPermissions": [
                281
            ],
            "roleId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpsertFieldsWidgetFieldInput": {
            "fieldMetadataId": [
                546
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "viewFieldId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpsertFieldsWidgetGroupInput": {
            "fields": [
                617
            ],
            "id": [
                546
            ],
            "isVisible": [
                4
            ],
            "name": [
                1
            ],
            "position": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "UpsertFieldsWidgetInput": {
            "fields": [
                617
            ],
            "groups": [
                618
            ],
            "widgetId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpsertObjectPermissionsInput": {
            "objectPermissions": [
                404
            ],
            "roleId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpsertPermissionFlagsInput": {
            "permissionFlagKeys": [
                1
            ],
            "roleId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpsertRowLevelPermissionPredicatesInput": {
            "objectMetadataId": [
                546
            ],
            "predicateGroups": [
                473
            ],
            "predicates": [
                475
            ],
            "roleId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpsertRowLevelPermissionPredicatesResult": {
            "predicateGroups": [
                472
            ],
            "predicates": [
                471
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetInput": {
            "view": [
                628
            ],
            "viewFields": [
                625
            ],
            "viewFilterGroups": [
                626
            ],
            "viewFilters": [
                627
            ],
            "viewSorts": [
                629
            ],
            "widgetId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewFieldInput": {
            "aggregateOperation": [
                27
            ],
            "fieldMetadataId": [
                546
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "size": [
                6
            ],
            "viewFieldId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewFilterGroupInput": {
            "id": [
                546
            ],
            "logicalOperator": [
                665
            ],
            "parentViewFilterGroupId": [
                546
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewFilterInput": {
            "fieldMetadataId": [
                546
            ],
            "id": [
                546
            ],
            "operand": [
                666
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "relationTargetFieldMetadataId": [
                546
            ],
            "subFieldName": [
                1
            ],
            "value": [
                333
            ],
            "viewFilterGroupId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewSettingsInput": {
            "calendarEndFieldMetadataId": [
                546
            ],
            "calendarFieldMetadataId": [
                546
            ],
            "calendarLayout": [
                659
            ],
            "kanbanAggregateOperation": [
                27
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                546
            ],
            "kanbanColumnWidth": [
                10
            ],
            "mainGroupByFieldMetadataId": [
                546
            ],
            "openRecordIn": [
                669
            ],
            "shouldHideEmptyGroups": [
                4
            ],
            "type": [
                672
            ],
            "__typename": [
                1
            ]
        },
        "UpsertViewWidgetViewSortInput": {
            "direction": [
                671
            ],
            "fieldMetadataId": [
                546
            ],
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UsageAnalytics": {
            "periodEnd": [
                217
            ],
            "periodStart": [
                217
            ],
            "timeSeries": [
                643
            ],
            "usageByApplication": [
                632
            ],
            "usageByModel": [
                632
            ],
            "usageByOperationType": [
                632
            ],
            "usageByUser": [
                632
            ],
            "userDailyUsage": [
                645
            ],
            "__typename": [
                1
            ]
        },
        "UsageAnalyticsInput": {
            "operationTypes": [
                635
            ],
            "periodEnd": [
                217
            ],
            "periodStart": [
                217
            ],
            "userWorkspaceId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UsageBreakdownItem": {
            "creditsUsed": [
                6
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "userCreditsUsed": [
                6
            ],
            "workspaceCreditsUsed": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "UsageLimit": {
            "burstValue": [
                103
            ],
            "createdAt": [
                217
            ],
            "id": [
                546
            ],
            "limitKind": [
                1
            ],
            "limitValue": [
                103
            ],
            "operationType": [
                635
            ],
            "periodCount": [
                10
            ],
            "periodUnit": [
                1
            ],
            "resourceType": [
                642
            ],
            "spenderId": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                644
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "UsageLimitOperationDefinition": {
            "allowedUnits": [
                644
            ],
            "operationType": [
                635
            ],
            "__typename": [
                1
            ]
        },
        "UsageOperationType": {},
        "UsageQuotaDefinition": {
            "allowedOperations": [
                634
            ],
            "allowedSpenderTypes": [
                1
            ],
            "limitKind": [
                1
            ],
            "operatorOnlyScopes": [
                638
            ],
            "resourceType": [
                642
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaDefinitions": {
            "definitions": [
                636
            ],
            "hasAllowancePeriod": [
                4
            ],
            "isIntraWorkspaceLimitEntitled": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaOperatorOnlyScope": {
            "operationType": [
                635
            ],
            "periodUnit": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                644
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaScopeConsumption": {
            "consumedValue": [
                103
            ],
            "periodEnd": [
                217
            ],
            "periodStart": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaScopeInput": {
            "operationType": [
                635
            ],
            "periodUnit": [
                1
            ],
            "resourceType": [
                642
            ],
            "spenderId": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                644
            ],
            "__typename": [
                1
            ]
        },
        "UsageQuotaWithConsumption": {
            "consumedValue": [
                103
            ],
            "id": [
                546
            ],
            "isEnforced": [
                4
            ],
            "limitValue": [
                103
            ],
            "operationType": [
                635
            ],
            "periodEnd": [
                217
            ],
            "periodStart": [
                217
            ],
            "periodUnit": [
                1
            ],
            "remainingValue": [
                103
            ],
            "resourceType": [
                642
            ],
            "spenderId": [
                1
            ],
            "spenderLabel": [
                1
            ],
            "spenderType": [
                1
            ],
            "unit": [
                644
            ],
            "__typename": [
                1
            ]
        },
        "UsageResourceType": {},
        "UsageTimeSeries": {
            "creditsUsed": [
                6
            ],
            "date": [
                1
            ],
            "workspaceCreditsUsed": [
                6
            ],
            "__typename": [
                1
            ]
        },
        "UsageUnit": {},
        "UsageUserDaily": {
            "dailyUsage": [
                643
            ],
            "userWorkspaceId": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "User": {
            "availableWorkspaces": [
                94
            ],
            "canAccessFullAdminPanel": [
                4
            ],
            "canImpersonate": [
                4
            ],
            "createdAt": [
                217
            ],
            "currentUserWorkspace": [
                650
            ],
            "currentWorkspace": [
                682
            ],
            "deletedAt": [
                217
            ],
            "deletedWorkspaceMembers": [
                230
            ],
            "disabled": [
                4
            ],
            "email": [
                1
            ],
            "firstName": [
                1
            ],
            "hasPassword": [
                4
            ],
            "id": [
                546
            ],
            "isEmailVerified": [
                4
            ],
            "isWorkspaceCreator": [
                4
            ],
            "lastName": [
                1
            ],
            "locale": [
                1
            ],
            "onboardingStatus": [
                411
            ],
            "previousOnboardingStatus": [
                411
            ],
            "supportUserHash": [
                1
            ],
            "updatedAt": [
                217
            ],
            "userVars": [
                334
            ],
            "userWorkspaces": [
                650
            ],
            "workspaceMember": [
                691
            ],
            "workspaceMembers": [
                691
            ],
            "workspaces": [
                650
            ],
            "__typename": [
                1
            ]
        },
        "UserApplicationVariableValue": {
            "description": [
                1
            ],
            "isDeprecated": [
                4
            ],
            "isRequired": [
                4
            ],
            "isSecret": [
                4
            ],
            "key": [
                1
            ],
            "label": [
                1
            ],
            "options": [
                333
            ],
            "type": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "UserCreditsFallback": {},
        "UserSession": {
            "authProvider": [
                1
            ],
            "city": [
                1
            ],
            "country": [
                1
            ],
            "createdAt": [
                217
            ],
            "expiresAt": [
                217
            ],
            "id": [
                546
            ],
            "ipAddress": [
                1
            ],
            "isCurrent": [
                4
            ],
            "isImpersonating": [
                4
            ],
            "lastActiveAt": [
                217
            ],
            "region": [
                1
            ],
            "userAgent": [
                1
            ],
            "workspaceId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "UserWorkspace": {
            "createdAt": [
                217
            ],
            "deletedAt": [
                217
            ],
            "id": [
                546
            ],
            "isImpersonating": [
                4
            ],
            "locale": [
                1
            ],
            "objectPermissions": [
                403
            ],
            "objectRecordsPermissions": [
                410
            ],
            "objectsPermissions": [
                403
            ],
            "permissionFlags": [
                428
            ],
            "twoFactorAuthenticationMethodSummary": [
                542
            ],
            "updatedAt": [
                217
            ],
            "user": [
                646
            ],
            "userId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ValidateApprovedAccessDomainInput": {
            "approvedAccessDomainId": [
                546
            ],
            "validationToken": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "ValidatePasswordResetToken": {
            "email": [
                1
            ],
            "hasPassword": [
                4
            ],
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ValidationRule": {
            "description": [
                1
            ],
            "errorFieldMetadataId": [
                546
            ],
            "expression": [
                1
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "message": [
                1
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "VerificationRecord": {
            "key": [
                1
            ],
            "priority": [
                6
            ],
            "status": [
                1
            ],
            "type": [
                1
            ],
            "value": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "VerifyEmailAndGetLoginToken": {
            "loginToken": [
                88
            ],
            "workspaceUrls": [
                700
            ],
            "__typename": [
                1
            ]
        },
        "VerifyTwoFactorAuthenticationMethod": {
            "success": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "VersionDistributionEntry": {
            "count": [
                10
            ],
            "version": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "View": {
            "anyFieldFilterValue": [
                1
            ],
            "applicationId": [
                546
            ],
            "calendarEndFieldMetadataId": [
                546
            ],
            "calendarFieldMetadataId": [
                546
            ],
            "calendarLayout": [
                659
            ],
            "createdAt": [
                217
            ],
            "createdByUserWorkspaceId": [
                546
            ],
            "deletedAt": [
                217
            ],
            "groupLoadLimit": [
                10
            ],
            "icon": [
                1
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "isCompact": [
                4
            ],
            "isCustom": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "kanbanAggregateOperation": [
                27
            ],
            "kanbanAggregateOperationFieldMetadataId": [
                546
            ],
            "kanbanColumnWidth": [
                10
            ],
            "key": [
                668
            ],
            "mainGroupByFieldMetadataId": [
                546
            ],
            "name": [
                1
            ],
            "objectMetadataId": [
                546
            ],
            "openRecordIn": [
                669
            ],
            "position": [
                6
            ],
            "shouldHideEmptyGroups": [
                4
            ],
            "type": [
                672
            ],
            "universalIdentifier": [
                546
            ],
            "updatedAt": [
                217
            ],
            "viewFieldGroups": [
                662
            ],
            "viewFields": [
                661
            ],
            "viewFilterGroups": [
                664
            ],
            "viewFilters": [
                663
            ],
            "viewGroups": [
                667
            ],
            "viewSorts": [
                670
            ],
            "visibility": [
                673
            ],
            "workspaceId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ViewCalendarLayout": {},
        "ViewConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "ViewField": {
            "aggregateOperation": [
                27
            ],
            "applicationId": [
                546
            ],
            "createdAt": [
                217
            ],
            "deletedAt": [
                217
            ],
            "fieldMetadataId": [
                546
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "isOverridden": [
                4
            ],
            "isSystemSideEffect": [
                4
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "size": [
                6
            ],
            "universalIdentifier": [
                546
            ],
            "updatedAt": [
                217
            ],
            "viewFieldGroupId": [
                546
            ],
            "viewId": [
                546
            ],
            "workspaceId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ViewFieldGroup": {
            "createdAt": [
                217
            ],
            "deletedAt": [
                217
            ],
            "id": [
                546
            ],
            "isActive": [
                4
            ],
            "isOverridden": [
                4
            ],
            "isVisible": [
                4
            ],
            "name": [
                1
            ],
            "position": [
                6
            ],
            "updatedAt": [
                217
            ],
            "viewFields": [
                661
            ],
            "viewId": [
                546
            ],
            "workspaceId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ViewFilter": {
            "createdAt": [
                217
            ],
            "deletedAt": [
                217
            ],
            "fieldMetadataId": [
                546
            ],
            "id": [
                546
            ],
            "operand": [
                666
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "relationTargetFieldMetadataId": [
                546
            ],
            "subFieldName": [
                1
            ],
            "updatedAt": [
                217
            ],
            "value": [
                333
            ],
            "viewFilterGroupId": [
                546
            ],
            "viewId": [
                546
            ],
            "workspaceId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ViewFilterGroup": {
            "createdAt": [
                217
            ],
            "deletedAt": [
                217
            ],
            "id": [
                546
            ],
            "logicalOperator": [
                665
            ],
            "parentViewFilterGroupId": [
                546
            ],
            "positionInViewFilterGroup": [
                6
            ],
            "updatedAt": [
                217
            ],
            "viewId": [
                546
            ],
            "workspaceId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ViewFilterGroupLogicalOperator": {},
        "ViewFilterOperand": {},
        "ViewGroup": {
            "createdAt": [
                217
            ],
            "deletedAt": [
                217
            ],
            "fieldValue": [
                1
            ],
            "id": [
                546
            ],
            "isVisible": [
                4
            ],
            "position": [
                6
            ],
            "updatedAt": [
                217
            ],
            "viewId": [
                546
            ],
            "workspaceId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ViewKey": {},
        "ViewOpenRecordIn": {},
        "ViewSort": {
            "createdAt": [
                217
            ],
            "deletedAt": [
                217
            ],
            "direction": [
                671
            ],
            "fieldMetadataId": [
                546
            ],
            "id": [
                546
            ],
            "subFieldName": [
                1
            ],
            "updatedAt": [
                217
            ],
            "viewId": [
                546
            ],
            "workspaceId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "ViewSortDirection": {},
        "ViewType": {},
        "ViewVisibility": {},
        "Webhook": {
            "applicationId": [
                546
            ],
            "createdAt": [
                217
            ],
            "deletedAt": [
                217
            ],
            "description": [
                1
            ],
            "id": [
                546
            ],
            "operations": [
                1
            ],
            "role": [
                468
            ],
            "secret": [
                1
            ],
            "targetUrl": [
                1
            ],
            "updatedAt": [
                217
            ],
            "__typename": [
                1
            ]
        },
        "WidgetConfiguration": {
            "on_AggregateChartConfiguration": [
                26
            ],
            "on_BarChartConfiguration": [
                97
            ],
            "on_CalendarConfiguration": [
                138
            ],
            "on_CallRecordingSummaryConfiguration": [
                139
            ],
            "on_CallRecordingTranscriptConfiguration": [
                140
            ],
            "on_ChatConfiguration": [
                148
            ],
            "on_ChatThreadsConfiguration": [
                151
            ],
            "on_EmailThreadConfiguration": [
                246
            ],
            "on_EmailsConfiguration": [
                250
            ],
            "on_FieldConfiguration": [
                274
            ],
            "on_FieldRichTextConfiguration": [
                282
            ],
            "on_FieldsConfiguration": [
                283
            ],
            "on_FilesConfiguration": [
                289
            ],
            "on_FormFieldConfiguration": [
                292
            ],
            "on_FrontComponentConfiguration": [
                294
            ],
            "on_IframeConfiguration": [
                314
            ],
            "on_LineChartConfiguration": [
                337
            ],
            "on_MessageCampaignBodyConfiguration": [
                362
            ],
            "on_MessageCampaignDetailsConfiguration": [
                363
            ],
            "on_NotesConfiguration": [
                394
            ],
            "on_PieChartConfiguration": [
                429
            ],
            "on_RecordTableConfiguration": [
                458
            ],
            "on_StandaloneRichTextConfiguration": [
                513
            ],
            "on_TasksConfiguration": [
                523
            ],
            "on_TimelineConfiguration": [
                527
            ],
            "on_ViewConfiguration": [
                660
            ],
            "on_WorkflowConfiguration": [
                679
            ],
            "on_WorkflowRunConfiguration": [
                680
            ],
            "on_WorkflowVersionConfiguration": [
                681
            ],
            "__typename": [
                1
            ]
        },
        "WidgetConfigurationType": {},
        "WidgetType": {},
        "WorkflowActionType": {},
        "WorkflowConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowRunConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "WorkflowVersionConfiguration": {
            "configurationType": [
                676
            ],
            "__typename": [
                1
            ]
        },
        "Workspace": {
            "activationStatus": [
                683
            ],
            "aiAdditionalInstructions": [
                1
            ],
            "aiAgentModelTier": [
                33
            ],
            "aiChatDirectMessageAssistantMode": [
                28
            ],
            "aiChatInboxAssistantMode": [
                28
            ],
            "aiChatModelTier": [
                33
            ],
            "aiDataPolicy": [
                31
            ],
            "aiEvaluationModelId": [
                1
            ],
            "aiModelIdByTier": [
                333
            ],
            "allowImpersonation": [
                4
            ],
            "allowedEmbeddingOrigins": [
                1
            ],
            "billingCustomer": [
                105
            ],
            "billingEntitlements": [
                107
            ],
            "billingSubscriptions": [
                124
            ],
            "createdAt": [
                217
            ],
            "currentBillingSubscription": [
                124
            ],
            "customDomain": [
                1
            ],
            "databaseSchema": [
                1
            ],
            "defaultRole": [
                468
            ],
            "deletedAt": [
                217
            ],
            "displayName": [
                1
            ],
            "editableProfileFields": [
                1
            ],
            "eventLogRetentionDays": [
                6
            ],
            "featureFlags": [
                271
            ],
            "hasValidEnterpriseValidityToken": [
                4
            ],
            "hasValidSignedEnterpriseKey": [
                4
            ],
            "id": [
                546
            ],
            "iframeMediaPermissions": [
                315
            ],
            "installedApplications": [
                51
            ],
            "inviteHash": [
                1
            ],
            "isAutoModelSelectionEnabled": [
                4
            ],
            "isCampaignClickTrackingEnabled": [
                4
            ],
            "isCampaignOpenTrackingEnabled": [
                4
            ],
            "isCustomDomainEnabled": [
                4
            ],
            "isGoogleAuthBypassEnabled": [
                4
            ],
            "isGoogleAuthEnabled": [
                4
            ],
            "isInternalMessagesImportEnabled": [
                4
            ],
            "isMicrosoftAuthBypassEnabled": [
                4
            ],
            "isMicrosoftAuthEnabled": [
                4
            ],
            "isPasswordAuthBypassEnabled": [
                4
            ],
            "isPasswordAuthEnabled": [
                4
            ],
            "isPublicInviteLinkEnabled": [
                4
            ],
            "isTrialAvailable": [
                4
            ],
            "isTwoFactorAuthenticationEnforced": [
                4
            ],
            "logo": [
                1
            ],
            "logoFileId": [
                546
            ],
            "metadataVersion": [
                6
            ],
            "subdomain": [
                1
            ],
            "trashRetentionDays": [
                6
            ],
            "updatedAt": [
                217
            ],
            "viewFields": [
                661
            ],
            "viewFilterGroups": [
                664
            ],
            "viewFilters": [
                663
            ],
            "viewGroups": [
                667
            ],
            "viewSorts": [
                670
            ],
            "views": [
                658
            ],
            "workspaceCustomApplication": [
                51
            ],
            "workspaceCustomApplicationId": [
                1
            ],
            "workspaceDiscoverability": [
                688
            ],
            "workspaceMembersCount": [
                6
            ],
            "workspaceUrls": [
                700
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceActivationStatus": {},
        "WorkspaceAiStats": {
            "conversationsCount": [
                10
            ],
            "skillsCount": [
                10
            ],
            "toolsCount": [
                10
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceCompanyEnrichmentOutcome": {},
        "WorkspaceCompanyEnrichmentResult": {
            "enrichment": [
                333
            ],
            "isBookCallOnboardingStepPending": [
                4
            ],
            "outcome": [
                685
            ],
            "personEnrichment": [
                333
            ],
            "personOutcome": [
                698
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceCreationDefaultsDTO": {
            "displayName": [
                1
            ],
            "subdomain": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceDiscoverability": {},
        "WorkspaceInvitation": {
            "email": [
                1
            ],
            "expiresAt": [
                217
            ],
            "id": [
                546
            ],
            "roleId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceInviteHashValid": {
            "isValid": [
                4
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceMember": {
            "avatarUrl": [
                1
            ],
            "calendarStartDay": [
                10
            ],
            "colorScheme": [
                1
            ],
            "dateFormat": [
                693
            ],
            "id": [
                546
            ],
            "locale": [
                1
            ],
            "name": [
                296
            ],
            "numberFormat": [
                694
            ],
            "openRecordIn": [
                414
            ],
            "roles": [
                468
            ],
            "timeFormat": [
                695
            ],
            "timeZone": [
                1
            ],
            "uiScale": [
                1
            ],
            "userEmail": [
                1
            ],
            "userId": [
                546
            ],
            "userWorkspaceId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceMemberApplicationVariables": {
            "userWorkspaceId": [
                546
            ],
            "variables": [
                647
            ],
            "workspaceMemberId": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceMemberDateFormatEnum": {},
        "WorkspaceMemberNumberFormatEnum": {},
        "WorkspaceMemberTimeFormatEnum": {},
        "WorkspaceMigration": {
            "actions": [
                333
            ],
            "applicationUniversalIdentifier": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceNameAndId": {
            "displayName": [
                1
            ],
            "id": [
                546
            ],
            "__typename": [
                1
            ]
        },
        "WorkspacePersonEnrichmentOutcome": {},
        "WorkspaceSetupChatOutcome": {},
        "WorkspaceUrls": {
            "customUrl": [
                1
            ],
            "subdomainUrl": [
                1
            ],
            "__typename": [
                1
            ]
        },
        "WorkspaceUrlsAndId": {
            "id": [
                546
            ],
            "workspaceUrls": [
                700
            ],
            "__typename": [
                1
            ]
        }
    }
}