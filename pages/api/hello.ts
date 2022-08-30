// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  //const data = await getOwned("0x123", "0x123");
  res.status(200).json({})
}
