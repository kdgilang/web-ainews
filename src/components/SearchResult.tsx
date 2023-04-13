import { BasePropsType } from '@src/types/basePropsType'
import Card, { ECardType } from '@src/components/Card'
import Title from '@src/components/Title'
import { useContext, useEffect } from 'react'
import { SearchContext } from '@src/contexts/SearchContext'
import { ArticleType } from '@src/types/newsDtoType'
import Skeleton from '@src/components/Skeleton'
import { NewsModel } from '@src/models/newsModel'

export type SearchResultPropsType = BasePropsType & {
  items: ArticleType[],
  keywords: string
}

export default function SearchResult({ items, keywords }: SearchResultPropsType) {
  const { search } = useContext(SearchContext)
  const { isLoading } = search
  const { setSearch } = useContext(SearchContext)

  useEffect(() => {
    setSearch({
      keywords: `${keywords}`,
      result: new NewsModel(),
      isLoading: false
    })
  }, [items, keywords, setSearch])

  return (
    <>
      <Title value={`Search result for "${keywords}"`} />
      <div className="space-y-6">
        {
          isLoading ? Array.from({length: 6}, (_, i) => (
            <div key={`skeleton-${i}`} className="group relative flex">
              <div className="relative aspect-[16/9] w-4/12 overflow-hidden rounded bg-gray-200 group-hover:opacity-75">
                <Skeleton />
              </div>
              <div className="z-10 transition w-4/6 ml-4 py-2">
                <Skeleton height={20} />
                <Skeleton height={20} />
                <Skeleton height={20} />
                <Skeleton height={20} />
              </div>
            </div>
          )) :
          items?.length ? items.map((item, index) => (
            <Card
              key={`card-science-${index}`}
              {...item}
              type={ECardType.row}
            />
          ) ) : <div className="bg-slate-700 text-center py-6 px-10 rounded">
            <h1 className="text-xl">No items found.</h1>
          </div>
        }
      </div>
    </>
  )
}