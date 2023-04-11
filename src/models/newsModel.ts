import { ArticleType, NewsItemType } from "@src/types/newsDtoType"
import { ArticleModel } from "./articleModel"

export class NewsModel implements NewsItemType {
    status: string
    totalResults: number
    articles: ArticleType[]
  
    constructor() {
      this.status = ''
      this.totalResults = 0
      this. articles = new Array<ArticleModel>()
    }
  }