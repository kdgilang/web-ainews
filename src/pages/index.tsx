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
        <meta name="description" content="AI News provide relevant news you needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Suspense fallback={<HomeSkeleton />}>
        <Default>
      
          <SearchForm className="mb-16 w-4/6 mx-auto" />

          <div className="lg:flex">
            <div className="lg:flex-initial lg:w-4/6 lg:pr-8">
              <Card 
                type={ECardType.float}
                label="executive"
                {...business.articles[0]}
                className=""
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
                        label="executive"
                      />
                    )
                  )}
              </div>
              <div className="mt-6 lg:mt-0 lg:flex-initial lg:w-4/12">
                <div className="md:sticky md:top-20 md:z-50">
                  <Title value="Super story" />
                  <Card 
                    type={ECardType.column} 
                    label="executive"
                    {...business.articles[0]}
                    className=""
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

Home.getInitialProps = async (ctx: NextPageContext) => {
  // console.log((ctx.req?.headers.c))
  const res = await fetch(NEWS_API_PATH,
    ctx?.req?.headers?.cookie ? {
      headers: {
        cookie: ctx.req.headers.cookie
      }
    } : {}
  )
  const json = await res.json()
  return { news: json }
}

export default Home