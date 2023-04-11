import newsProvider, { NewsParamsType } from '@src/providers/newsProvider'
import { ArticleType, NewsItemType } from "@src/types/newsDtoType"
import moment from 'moment'

export type NewsByKeywordsUseCaseParamsType = {
  lang: string
  q: string
}

export default async function getNewsByCategoryUseCase(params: NewsByKeywordsUseCaseParamsType): Promise<NewsItemType> {
  const { lang, q } = params
  const newsParams: NewsParamsType = {
    path: 'everything',
    query: `q=${q}&language=${lang || 'en'}`
  }

  const response = await newsProvider(newsParams)

  response?.articles?.forEach((article: ArticleType) => {
    article.publishedAt = moment(article.publishedAt).format('LL')
  })

  return response
}