export const DEFAULT_ACCOUNT_ID = "c81c6db8-45c2-4cf9-91f5-f39102a15c99";

export enum HttpMethod {
    Get = 'GET',
    Post = 'POST',
    Put = 'PUT',
}

export type BouncerDTO = {
    id: string;
    domain: string;
    nftContractAddress: string;  
    rules: BouncerRuleDTO[];
}

export type BouncerUpsertCommand = {
    id?: string;
    domain: string;
    nftContractAddress: string;
    rules?: BouncerRuleDTO[];
}

export type BouncerRuleDTO = {
    conditionType: BouncerRuleConditionTypeEnum
    conditionParam?: string | string[];
    pass: string;
}

export enum BouncerRuleConditionTypeEnum {
    OwnsOne = 'OwnsOne',
    OwnsAnyOf = 'OwnsAnyOf',
    OwnsAny = 'OwnsAny',
    OwnsWithAttribute = 'OwnsWithAttribute',
    OwnsWithId = 'OwnsWithId',
}

