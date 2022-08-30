
import {execute, OwnedNftsDocument} from '../.graphclient'

export async function getOwned(ownerAddress: string): Promise<unknown> {
    const result = await execute(OwnedNftsDocument, { ownerAddress });
    return result;
}

