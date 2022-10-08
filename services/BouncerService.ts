import { SupabaseClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";
import { ERC721Token } from "../.graphclient";
import { BouncerDTO, BouncerRuleConditionTypeEnum, BouncerRuleDTO, BouncerUpsertCommand, DEFAULT_ACCOUNT_ID } from "../types";
import { dbClient } from "./Db";
import { getOwned } from "./Nft";

const BOUNCER_TABLE = 'bouncer';
const BOUNCER_RULE_TABLE = 'bouncer_rule';

export class BouncerService {
    constructor(private _dbClient: SupabaseClient) {
        
    }
    public async insertBouncer(bouncerUpsertCommand: BouncerUpsertCommand): Promise<unknown> {
        const id = randomUUID();
        const bouncerResult = await this._dbClient
            .from(BOUNCER_TABLE)
            .upsert([
                {
                    id,
                    accountId: DEFAULT_ACCOUNT_ID,
                    domain: bouncerUpsertCommand.domain,
                    nftContractAddress: bouncerUpsertCommand.nftContractAddress,
                } as BouncerUpsertCommand
            ])
        if (bouncerResult.error) {
            throw bouncerResult.error;
        }

        if (bouncerUpsertCommand.rules) {   
            const rulesResult = await this._dbClient
                .from(BOUNCER_RULE_TABLE)
                .insert(bouncerUpsertCommand?.rules.map(rule => ({
                    bouncerId: id,
                    conditionType: rule.conditionType,
                    conditionParam: rule.conditionParam,
                    pass: rule.pass,
                } as BouncerRuleDTO))
            )
            if (rulesResult.error) {
                throw rulesResult.error;
            }
    
        }
        const result = await this.getBouncer(id);
        return result;
    }

    public async getBouncer(id: string): Promise<BouncerDTO> {
        const result = await this._dbClient
            .from(BOUNCER_TABLE)
            .select(`
                id,
                domain,
                nftContractAddress,
                rules: bouncer_rule (
                    conditionType,
                    conditionParam,
                    pass
                )
            `)
            .eq('id', id)
            .single()
        if (result.error) {
            throw result.error;
        }
        return {
            id: result.data.id,
            domain: result.data.domain,
            nftContractAddress: result.data.nftContractAddress,
            rules: result.data.rules
        } as BouncerDTO
    }
}

//Given a bouncer and an address, return a list of passes which are applicable to the address
export async function getPasses(bouncerId: string, punterAddress: string): Promise<string[]> {
    const bouncerService = new BouncerService(dbClient);
    const bouncerDto: BouncerDTO = await bouncerService.getBouncer(bouncerId);
    const ownedNfts = await getOwned(punterAddress);
    return bouncerDto.rules.filter(rule => ruleMatches(rule, ownedNfts)).map(rule => rule.pass);
}

function ruleMatches(rule: BouncerRuleDTO, ownedNfts: ERC721Token[] ): boolean {
        
    switch (rule.conditionType) {

        case BouncerRuleConditionTypeEnum.OwnsOne: {
            // Check if the address owns at least one NFT
            if (ownedNfts.length == 0) return false
        }
        case BouncerRuleConditionTypeEnum.OwnsAnyOf: {
            // Check if the address owns any of the NFTs in the parameter
            return ownedNfts.some(nft => rule.conditionParam?.includes(nft.identifier))
        }
        case BouncerRuleConditionTypeEnum.OwnsWithAttribute: {
            // Check if the address owns any NFTs with the attribute in the parameter
            return false;
        }
        default: {
            throw new Error(`Unknown condition type: ${rule.conditionType}`);
        }
    }
}