export interface ICluster {
    id?: number;
    name: string;
    bootstrapUrl: string;
    organizationId: number;
    platformId: number;
    regionId: number;
    environmentId: number;
    createdBy: number;
    createdAt?: Date;
    repoUrl?: string;
}

export interface IClusterBroker {
    id?: number;
    clusterId: number;
    brokerUrl: string;
    brokerPort: number;
}

export interface IUserCluster {
    name: string;
    cluster_id: number;
    brokers: IClusterBroker[]
}

export interface IClusterFilters {
    projectId?: number;
    teamId?: number;
    platformId?: number;
    regionId?: number;
    environmentId?: number;
    clusterId?: number;
    isAdmin?: boolean;
}