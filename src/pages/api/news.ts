// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getNewsUseCase from '@src/usecases/getNewsUseCase'
import { NewsDtoType } from '@src/types/newsDtoType'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsDtoType>
) {
  try {
    const newsRes = await getNewsUseCase(req.cookies.region)
    const response: NewsDtoType = {
      business: newsRes[0],
      technology: newsRes[1],
      science: newsRes[2]
    }
    res.status(200).json(response)
  } catch(err) {
    res.status(400)
  }
}
