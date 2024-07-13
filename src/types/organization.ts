export interface IOrganization {
    id: number;
    name: string;
    subDomainName: string;
    ticketServiceUrl: string;
    createdAt: Date;
    createdBy: number;
    updatedBy: number;
    updatedAt: Date;
    processInPlace: boolean;
    hasIdp: boolean;
    logoUrl: string;
  }

