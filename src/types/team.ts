export interface ITeam {
    name: string;
    description: string;
    organizationId: number;
    createdAt?: Date;
    UpdatedAt?: Date;
    createdBy: number;
    updatedBy: number;
}

export interface ITeamProject {
    teamId: number;
    projectId: number;
    createdAt?: Date;
    createdBy: number;
}