import { SupabaseClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";
import { BouncerUpsertCommand, DEFAULT_ACCOUNT_ID } from "../types";

const BOUNCER_TABLE = 'bouncer';
const BOUNCER_RULE_TABLE = 'bouncer_rule';

export class BouncerService {
    constructor(private dbClient: SupabaseClient) {
        
    }
    public async insertBouncer(bouncer: BouncerUpsertCommand): Promise<unknown> {
        const id = randomUUID();
        const bouncerResult = await this.dbClient
            .from(BOUNCER_TABLE)
            .insert([
                {
                    id,
                    account_id: DEFAULT_ACCOUNT_ID,
                    domain: bouncer.domain,
                    nft_contract_address: bouncer.nftContractAddress,
                }
            ])
        if (bouncerResult.error) {
            throw bouncerResult.error;
        }
        
        const rulesResult = await this.dbClient
            .from(BOUNCER_RULE_TABLE)
            .insert(bouncer.rules.map(rule => ({
                bouncer_id: id,
                condition_type: rule.condition.conditionType,
                condition_param: rule.condition.parameter,
                pass: rule.pass,
            }))
        )
        if (rulesResult.error) {
            throw rulesResult.error;
        }

        const result = await this.getBouncer(id);

        //TODO: Insert rules
        return result;
    }


    public async getBouncer(id: string): Promise<unknown> {
        const result = await this.dbClient
            .from(BOUNCER_TABLE)
            .select(`
                id,
                domain,
                nft_contract_address,
                rules: bouncer_rule (
                    condition_type,
                    condition_param,
                    pass
                )
            `)
            .eq('id', id)
            .single()
        if (result.error) {
            throw result.error;
        }
        return result.data;
    }
}