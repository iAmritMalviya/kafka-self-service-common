export interface IEnvironment {
    id?: number,
    name: string,
    description: string,
    createdAt? : Date,
    updatedAt?: Date,
    createdBy?: number,
    updatedBy?: number
}
