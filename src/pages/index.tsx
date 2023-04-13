import Head from 'next/head'
import Default from '@src/layouts/Default'
import Card, { ECardType } from "@src/components/Card"
import CardSection from "@src/components/CardSection"
import SubscribeForm from "@src/components/SubscribeForm"
import Title from "@src/components/Title"
import HomeSkeleton from "@src/components/HomeSkeleton"
import { Suspense } from 'react'
import { NEWS_API_PATH } from '@src/consts/pathApi'
import { BasePropsType } from '@src/types/basePropsType'
import { NewsDtoType } from '@src/types/newsDtoType'
import 'react-loading-skeleton/dist/skeleton.css'
import { NextPageContext } from 'next'
import SearchForm from "@src/components/SearchForm"

type HompePropsType = BasePropsType & {
  news: NewsDtoType
}

function Home({ news }: HompePropsType) {
  const { business, technology, science,  } = news
  
  return (
    <>
      <Head>
        <title>AI News | Home</title>
        <meta name="description" content="AI News relevant news you needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Suspense fallback={<HomeSkeleton />}>
        <Default>
      
          <SearchForm isLink={true} className="mb-16 md:w-4/6 mx-auto" />

          <div className="lg:flex">
            <div className="lg:flex-initial lg:w-4/6 lg:pr-8">
              <Card 
                type={ECardType.float}
                {...business.articles[0]}
                description=""
                content=""
              />
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-initial lg:w-4/12">
              <CardSection
                title="Featured story"
                type={ECardType.row}
                cards={business?.articles?.slice(1, 5)} />
            </div>
          </div>

          <CardSection
            title="Trending now"
            type={ECardType.column}
            className="mt-6 md:mt-10"
            cards={technology?.articles?.slice(0, 4)} />

          <SubscribeForm className="mt-6 md:mt-10" />

          <div className="mt-6 md:mt-10">
            <Title value="Latest story" />

            <div className="lg:flex">
              <div className="lg:flex-initial lg:w-4/6 lg:pr-8 grid gap-6">
                {science?.articles?.map((item, index) => (<Card
                      key={`card-science-${index}`}
                      { ...item }
                      type={ECardType.row}
                      rowReverse={true}
                    />
                  )
                )}
              </div>
              <div className="mt-6 lg:mt-0 lg:flex-initial lg:w-4/12">
                <div className="md:sticky md:top-20 md:z-50">
                  <Title value="Super story" />
                  <Card 
                    type={ECardType.column}
                    {...business.articles[0]}
                  />
                </div>
              </div>
            </div>
          </div>
        </Default>
      </Suspense>
    </>
  )
}

export async function getServerSideProps({req, res}: NextPageContext) {
  res?.setHeader(
    'Cache-Control',
    'public, s-maxage=100, stale-while-revalidate=59'
  )
  const news = await (await fetch(NEWS_API_PATH,
    req?.headers?.cookie ? {
      headers: {
        cookie: req.headers.cookie
      }
    } : {}
  )).json()
  
  return { props: { news } }
}

export default Home