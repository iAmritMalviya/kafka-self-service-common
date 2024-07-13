import { ITeam } from "./team";

export interface IProject {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    organizationId?: number;
    teams?: ITeam[];
}