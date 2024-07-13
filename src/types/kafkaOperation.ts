export enum OFFSET_RESET_TYPES {
    EARLIEST = 'easrliest',
    LASTEST = 'latest',
    CUSTOM_OFFSET = 'custom_offset'
} 

export interface IReset {
    consumerGroupId: string;
    topicName: string;
    resetType: OFFSET_RESET_TYPES;
    partition?: number;
    offset?: number;
}