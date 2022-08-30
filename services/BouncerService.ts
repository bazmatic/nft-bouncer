import { SupabaseClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";
import { BouncerDTO, BouncerUpsertCommand, DEFAULT_ACCOUNT_ID } from "../types";

const BOUNCER_TABLE = 'bouncer';

export class BouncerService {
    constructor(private dbClient: SupabaseClient) {
        
    }
    public async insertBouncer(bouncer: BouncerUpsertCommand): Promise<unknown> {
        const id = randomUUID();
        const result = await this.dbClient
            .from(BOUNCER_TABLE)
            .insert([
                {
                    id,
                    account_id: DEFAULT_ACCOUNT_ID,
                    domain: bouncer.domain,
                    nft_contract_address: bouncer.nftContractAddress,
                }
            ])
        console.log(JSON.stringify(result))
        if (result.error) {
            throw result.error;
        }
        //TODO: Insert rules
        return {id};
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