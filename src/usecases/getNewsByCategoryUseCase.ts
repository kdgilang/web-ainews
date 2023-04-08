import newsProvider, { NewsParamsType } from '@src/providers/newsProvider'
import { ArticleType, NewsItemType } from "@src/types/newsDtoType"
import moment from 'moment'

export type NewsByCategoryUseCaseParamsType = {
  region: string
  slug: string
}

export default async function getNewsByCategoryUseCase(params: NewsByCategoryUseCaseParamsType): Promise<NewsItemType> {
  const { region, slug } = params
  const newsParams: NewsParamsType = {
    path: 'top-headlines',
    query: `country=${region}&category=${slug}`
  }

  const response = await newsProvider(newsParams)

  response?.articles?.forEach((article: ArticleType) => {
    article.publishedAt = moment(article.publishedAt).format('LL')
  })

  return response
}