// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NewsItemType } from '@src/types/newsDtoType'
import getNewsByKeywordsUseCase, { NewsByKeywordsUseCaseParamsType } from '@src/usecases/getNewsByKeywordsUseCase'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsItemType | any>
) {
  try {
    const { q } = req.query
    const { lang } = req.cookies
    
    const params = {
      q,
      lang
    } as NewsByKeywordsUseCaseParamsType
    
    const newsRes = await getNewsByKeywordsUseCase(params)

    res.status(200).json(newsRes)
  } catch(err) {
    res.status(400).json(err)
  }
}
