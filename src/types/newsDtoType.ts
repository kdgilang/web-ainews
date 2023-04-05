export type NewsDtoType = {
  business: NewsItemType
  technology: NewsItemType
  science: NewsItemType
}

export type NewsItemType = {
  status: string
  totalResults: number
  articles: ArticleType[]
}

export type ArticleType = {
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}