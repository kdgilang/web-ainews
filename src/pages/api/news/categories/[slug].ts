// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NewsItemType } from '@src/types/newsDtoType'
import getNewsByCategoryUseCase, { NewsByCategoryUseCaseParamsType } from '@src/usecases/getNewsByCategoryUseCase'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsItemType>
) {
  try {
    const { slug } = req.query
    const { region } = req.cookies
    
    const params = {
      region,
      slug
    } as NewsByCategoryUseCaseParamsType

    const newsRes = await getNewsByCategoryUseCase(params)

    res.status(200).json(newsRes)
  } catch(err) {
    res.status(400)
  }
}
