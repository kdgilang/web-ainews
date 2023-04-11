import { BasePropsType } from '@src/types/basePropsType'
import Card, { ECardType } from '@src/components/Card'
import Title from '@src/components/Title'
import { useContext } from 'react'
import { SearchContext } from '@src/contexts/SearchContext'
import { NewsItemType } from '@src/types/newsDtoType'
import Skeleton from 'react-loading-skeleton'

export type SearchResultPropsType = BasePropsType & {
  items: NewsItemType,
  keywords: string
}

export default function SearchResult({ items, keywords }: SearchResultPropsType) {
  const { search } = useContext(SearchContext)
  const { isLoading } = search
  return (
    <>
      <Title value={keywords ? `Search result for "${keywords}"` : 'No keywords are provided'} />
      <div className="space-y-6">
        {isLoading && Array.from({length: 6}, (_, i) => (
          <div key={`skeleton${i}`} className="group relative flex">
            <div className="relative aspect-[16/9] w-4/12 overflow-hidden rounded bg-gray-200 group-hover:opacity-75">
              <Skeleton containerClassName="w-full h-full object-cover left-0 top-0"
                className="w-full h-full object-cover"
                highlightColor="#EFEFEF"
                baseColor="#CCCCCC" />
            </div>
            <div className="z-10 transition w-4/6 ml-4 py-2">
              <Skeleton highlightColor="#EFEFEF" baseColor="#CCCCCC" height={20} />
              <Skeleton highlightColor="#EFEFEF" baseColor="#CCCCCC" height={20} />
              <Skeleton highlightColor="#EFEFEF" baseColor="#CCCCCC" height={20} />
              <Skeleton highlightColor="#EFEFEF" baseColor="#CCCCCC" height={20} />
              <Skeleton highlightColor="#EFEFEF" baseColor="#CCCCCC" height={20} />
              <Skeleton highlightColor="#EFEFEF" baseColor="#CCCCCC" height={20} />
            </div>
          </div>
        ))
        }
        {items?.articles?.length ? items.articles.map((item, index) => (
          <Card
            key={`card-science-${index}`}
            {...item}
            type={ECardType.row}
          />
        )
        ) : <div className="bg-slate-700 text-center py-6 px-10 rounded">
          <h1 className="text-xl">No items found.</h1>
        </div>
        }
      </div>
    </>
  )
}