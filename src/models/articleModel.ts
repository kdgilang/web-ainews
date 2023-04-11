import { ArticleType } from "@src/types/newsDtoType";

export class ArticleModel implements ArticleType {
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string

  constructor() {
    this.author = ''
    this.title = ''
    this.description = ''
    this.url = ''
    this.urlToImage = ''
    this.publishedAt = ''
    this.content = ''
  }
}
