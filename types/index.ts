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
    name: string;
    domain: string;
    nftContractAddress: string;
    rules: BouncerRuleDTO[];
}

export type BouncerRuleDTO = {
    condition: BouncerRuleCondition;
    pass: string;
}

export type BouncerRuleCondition = {
    conditionType: BouncerRuleConditionTypeEnum;
    parameter?: string | string[];
}

export enum BouncerRuleConditionTypeEnum {
    IsContractOwner = 'IsContractOwner',
    OwnsOne = 'OwnsOne',
    OwnsAnyOf = 'OwnsAnyOf',
    OwnsAny = 'OwnsAny',
    OwnsWithAttribute = 'OwnsWithAttribute',
    OwnsWithId = 'OwnsWithId',
}

