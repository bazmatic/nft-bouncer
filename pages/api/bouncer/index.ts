// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { BouncerService } from '../../../services/BouncerService';

import { dbClient } from '../../../services/db';
import { BouncerDTO, BouncerUpsertCommand, HttpMethod } from '../../../types'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === HttpMethod.Post) {
        // Create a new bouncer
        const bouncerUpsertCommand = req.body as BouncerUpsertCommand;

        const bouncerService = new BouncerService(dbClient);
        const result = await bouncerService.insertBouncer(bouncerUpsertCommand)
        res.status(200).json(result)
    } else {
        res.status(400).json({ error: "Method not allowed" })
    }
}

