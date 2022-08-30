import { BouncerDTO } from ".";
import { ERC721Token } from "../.graphclient";
import { BouncerRule } from "../services/BouncerRule";

export class Bouncer {

    private rules: BouncerRule[];
    constructor(dto: BouncerDTO) {
        this.rules = dto.rules.map(ruleDto => new BouncerRule(ruleDto));
    }

    public getPasses(ownedNfts: ERC721Token[]): string[] {
        // Check the rules against the NFTs
        // Return the applicable passes
        return this.rules.filter(rule => rule.matches(ownedNfts)).map(rule => rule.pass);
    }
}