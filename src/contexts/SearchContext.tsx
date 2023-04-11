import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { BasePropsType } from '@src/types/basePropsType'
import { SearchModel } from '@src/models/searchModel'


export class SearchContextModel {
  search: SearchModel
  setSearch: Dispatch<SetStateAction<SearchModel>>

  constructor() {
    this.search = new SearchModel()
    this.setSearch = () => {}
  }
}

export const SearchContext = createContext<SearchContextModel>(new SearchContextModel())

export default function Context({ children }: BasePropsType) {
  const [search, setSearch] = useState<SearchModel>(new SearchModel())

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      { children }
    </SearchContext.Provider>
  )
}
