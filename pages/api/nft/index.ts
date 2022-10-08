// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getOwned } from '../../../services/Nft';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const data = await getOwned("0x33fa40ac23dbe73cc70f11ff32f56f07842a62fe");
  res.status(200).json(data)
}
