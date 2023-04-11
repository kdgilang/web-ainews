import { NewsItemType } from '@src/types/newsDtoType'
import { NewsModel } from './newsModel'

export class SearchModel {
  keywords: string
  isLoading: boolean
  result: NewsItemType

  constructor() {
    this.keywords = ''
    this.isLoading = false
    this.result = new NewsModel()
  }
}

