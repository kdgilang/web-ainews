import { NEWS_API_KEY } from '@src/consts/config'

export type NewsParamsType = {
  path: string
  query: string
}

export default async function newsProvider(params: NewsParamsType) {
  const { path, query } = params
  return (await fetch(`https://newsapi.org/v2/${path}?${query}&apiKey=${NEWS_API_KEY}`)).json()
}
