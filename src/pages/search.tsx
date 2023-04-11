import Head from 'next/head'
import Default from '@src/layouts/Default'
import { NextPageContext } from 'next'
import { NEWS_SEARCH_API_PATH } from '@src/consts/pathApi'
import { NewsItemType } from '@src/types/newsDtoType'
import { BasePropsType } from '@src/types/basePropsType'
import SearchForm from '@src/components/SearchForm'
import BreadCrumb from '@src/components/BreadCrumb'
import  SearchContext from '@src/contexts/SearchContext'
import SearchResult from '@src/components/SearchResult'
import 'react-loading-skeleton/dist/skeleton.css'

export type SearchPropsType = BasePropsType & {
  news: NewsItemType,
  keywords: string
}

export default function Search({ news, keywords }: SearchPropsType) {
  
  return (
    <>
      <Head>
        <title>{`${keywords} | Search`}</title>
        <meta name="description" content={`search result for ${keywords}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchContext>
        <Default>
          <SearchForm className="mb-16 md:w-4/6 mx-auto" />

          <BreadCrumb className="mt-6 lg:mt-10" />

          <div className="mt-6 md:mt-10">
            <SearchResult items={news.articles} keywords={keywords} />
          </div>
        </Default>
      </SearchContext>
    </>
  )
}

export async function getServerSideProps({ req, res, query }: NextPageContext) {
  res?.setHeader(
    'Cache-Control',
    'public, s-maxage=100, stale-while-revalidate=59'
  )
  const keywords = query?.q
  const newsRes = await fetch(`${NEWS_SEARCH_API_PATH}?q=${keywords}`,
    req?.headers?.cookie ? {
      headers: {
        cookie: req.headers.cookie
      }
    } : {}
  )
  const news = await newsRes.json()
  return { props: { news, keywords } }
}