import { NEWS_API_KEY } from '@src/consts/config'

export default async function newsProvider(path: string, query: string) {
  return (await fetch(`https://newsapi.org/v2/${path}?${query}&apiKey=${NEWS_API_KEY}`)).json()
}
