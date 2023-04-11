import newsProvider, { NewsParamsType } from '@src/providers/newsProvider'
import { NewsItemType } from "@src/types/newsDtoType"
import moment from 'moment'

export default async function getNewsUseCase(region: string = 'us'): Promise<NewsItemType[]> {
  try {
    let newsParams: NewsParamsType = {
      path: 'top-headlines',
      query: `country=${region}&category=business&pageSize=8`
    }
  
    const newsParams2 = {
      path: 'top-headlines',
      query: `country=${region}&category=technology&pageSize=8`
    }
  
    const newsParams3 = {
      path: 'top-headlines',
      query: `country=${region}&category=science&pageSize=8`
    }
  
    const response: NewsItemType[] = await Promise.all([
      await newsProvider(newsParams),
      await newsProvider(newsParams2),
      await newsProvider(newsParams3)
    ])
  
    response?.forEach(item => {
      item?.articles?.forEach(article => {
        article.publishedAt = moment(article.publishedAt).format('LL')
      })
    })
  
    return response
  } catch(err) {
    console.log(err)
    throw err
  }
}