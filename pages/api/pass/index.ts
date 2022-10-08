// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getPasses } from '../../../services/BouncerService';

// Given an address, check the NFTs owned by that address and return the applicable Bouncer passes
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<unknown>
) {
    const passes = await (getPasses(req.query.bouncer as string, req.query.punter as string));
    res.status(200).json({ passes })
}
