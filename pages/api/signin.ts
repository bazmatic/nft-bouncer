
import { SignInWithPasswordCredentials } from '@supabase/supabase-js'
import { NextApiRequest, NextApiResponse } from 'next'
import { dbClient } from '../../services/Db'
import { HttpMethod } from '../../types'

//q4P8Z7K9!NpG2eW DB password

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === HttpMethod.Post) {
        // Sign in
        const credentials: SignInWithPasswordCredentials = {
            email: req.body.email,
            password: req.body.password,
        }

        const authResponse = await dbClient.auth.signInWithPassword(credentials)
        if (authResponse.error) {
            res.status(400).json({ error: authResponse.error })
        }
        else {
            res.status(200).json({ data: authResponse })
        }
    }
}