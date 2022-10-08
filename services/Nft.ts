
import {ERC721Token, execute, OwnedNftsDocument} from '../.graphclient'

export async function getOwned(ownerAddress: string): Promise<ERC721Token[]> {
    const result = (await execute(OwnedNftsDocument, { ownerAddress })) as ERC721Token[];
    return result;
}

