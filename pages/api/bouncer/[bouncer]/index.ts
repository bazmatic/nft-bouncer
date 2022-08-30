// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { BouncerService } from '../../../../services/BouncerService';
import { dbClient } from '../../../../services/db';
import { HttpMethod } from '../../../../types';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === HttpMethod.Get) {
        const bouncerService = new BouncerService(dbClient);
        const result = await bouncerService.getBouncer(req.query.bouncer as string);
        res.status(200).json(result)
    } else {
        res.status(400).json({ error: "Method not allowed" })
    }
}

