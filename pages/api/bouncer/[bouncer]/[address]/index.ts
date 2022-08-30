// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


// Given an address, check the NFTs owned by that address and return the applicable Bouncer passes
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<unknown>
) {
    res.status(200).json({ pass: "VIP" })
}
