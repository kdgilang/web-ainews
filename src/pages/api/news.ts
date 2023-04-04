// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import newsProvider from '@src/providers/newsProvider'
import getNewsUseCase from '@src/usecases/getNewsUseCase'

type Data = {
  name: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const imageRes = await getNewsUseCase()
    const newsRes = await newsProvider('top-headlines', 'q=tesla&from=2023-03-04&sortBy=publishedAt')
    res.status(200).json({ name: imageRes })
  } catch(err) {
    res.status(400)
  }
}
