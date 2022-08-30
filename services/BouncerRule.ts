import { ERC721Token } from "../.graphclient";
import { BouncerRuleCondition, BouncerRuleConditionTypeEnum, BouncerRuleDTO } from "../types";

export class BouncerRule {
    public condition: BouncerRuleCondition;
    public pass: string;
    
    constructor(
        ruleDto: BouncerRuleDTO
    ) {
        this.condition = ruleDto.condition;
        this.pass = ruleDto.pass;
    }        


    // Return true if the condition matches
    public matches(ownedNfts: ERC721Token[]): boolean {
        
        switch (this.condition.conditionType) {

            case BouncerRuleConditionTypeEnum.OwnsOne: {
                // Check if the address owns at least one NFT
                if (ownedNfts.length == 0) return false
            }
            case BouncerRuleConditionTypeEnum.OwnsAnyOf: {
                // Check if the address owns any of the NFTs in the parameter
                return ownedNfts.some(nft => this.condition.parameter?.includes(nft.identifier))
            }
            case BouncerRuleConditionTypeEnum.OwnsWithAttribute: {
                // Check if the address owns any NFTs with the attribute in the parameter
                return false;
            }
            default: {
                throw new Error(`Unknown condition type: ${this.condition.conditionType}`);
            }
        }
        
    }
}