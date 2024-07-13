export enum TopicMessageCompressionTypeEnum {
    gzip = 'gzip',
    snappy = 'snappy',
    lz4 = 'lz4',
    zstd = 'zstd',
    none = 'none'
};

export enum TopicCleanupPolicyEnum {
    delete = 'delete',
    compact = 'compact'
};

export enum TopicStatusEnum {
    Accepted = 'Accepted',
    Rejected = 'Rejected',
    Pending = 'Pending'
};

export interface ITopic {
    id?: number;
    name: string;
    eventType: string;
    subEventType: string;
    description: string;
    status: TopicStatusEnum;
    rejectReason?: string;
    messageSize: number;
    messageFrequency: number;
    isSequenceRequired: boolean;
    compressionType: TopicMessageCompressionTypeEnum;
    isDataComplianceRequired: boolean; //any sensitive data then need to encrypt
    tier: string;
    portfolio: string;
    replicationFactor: number;
    retentionPeriod: number;
    partitionCount: number;
    clusterId: number;
    organizationId: number;
    platformId: number;
    regionId: number;
    environmentId: number;
    teamId: number;
    projectId: number;
    cleanupPolicy: TopicCleanupPolicyEnum;
};

export interface ITopicFilters {
    organizationId?: number;
    projectId?: number;
    teamId?: number;
    platformId?: number;
    regionId?: number;
    environmentId?: number;
    clusterId?: number;
    isAdmin?: boolean;
    status?: TopicStatusEnum;
}

export interface ITopicPromotionRequest {
    topicId: number;
    environmentId: number;
    status: TopicStatusEnum;
    replicationFactor: number;
    retentionPeriod: number;
    partitionCount: number;
    createdBy?: number;
    approvedBy?: number;
    rejectReason?: string;
};

export interface ITopicConfigUpdateRequest {
    id?: number;
    topicId: number;
    status: TopicStatusEnum;
    messageSize: number;
    compressionType: TopicMessageCompressionTypeEnum;
    retentionPeriod: number;
    cleanupPolicy: TopicCleanupPolicyEnum;
    rejectReason?: string;
    createdBy?: number;
    approvedBy?: number;
};