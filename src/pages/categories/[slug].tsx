import { useRouter } from 'next/router'
import Head from 'next/head'
import { NextPageContext } from 'next'
import Default from '@src/layouts/Default'
import Card, { ECardType } from "@src/components/Card"
import CardSection from "@src/components/CardSection"
import { NEWS_CATEGORY_API_PATH } from '@src/consts/pathApi'
import Title from "@src/components/Title"
import { BasePropsType } from '@src/types/basePropsType'
import { NewsItemType } from '@src/types/newsDtoType'
import SubscribeForm from "@src/components/SubscribeForm"
import BreadCrumb from '@src/components/BreadCrumb'

export type CategoryPropsType = BasePropsType & {
  news: NewsItemType
}

const Category = ({ news }: CategoryPropsType) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Head>
        <title>{ `${slug} | Category` }</title>
        <meta name="description" content="AI News provide relevant news you needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Default>
        <Card
          type={ECardType.float}
          {...news?.articles?.[0]}
          className="w-full"
          description=""
          content=""
          label={`${slug}`}
          imageClassName="md:aspect-[2.39/1]"
        />

        <BreadCrumb className="mt-6 lg:mt-10" />

        <div className="mt-6 md:mt-10">
          <Title value="Latest story" />

          <div className="lg:flex">
            <div className="lg:flex-initial lg:w-4/6 lg:pr-8 grid gap-6">
                {news?.articles?.map((item, index) => (<Card
                      key={`card-science-${index}`}
                      { ...item }
                      type={ECardType.row}
                    />
                  )
                )}
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-initial lg:w-4/12">
              <CardSection
                title="Recommended"
                type={ECardType.row}
                cards={news?.articles?.slice(1, 5)} />
              
              <SubscribeForm className="mt-6" isMinimal={true} />

              <div className="lg:sticky lg:top-20 lg:z-50 mt-6">
                <Title value="Super story" />
                <Card 
                  type={ECardType.column}
                  {...news?.articles?.[0]}
                />
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  )
}

export async function getServerSideProps({req, res, query}: NextPageContext) {
  const { slug } = query

  res?.setHeader(
    'Cache-Control',
    'public, s-maxage=100, stale-while-revalidate=59'
  )
  const newsRes = await fetch(NEWS_CATEGORY_API_PATH(slug as string),
    req?.headers?.cookie ? {
      headers: {
        cookie: req.headers.cookie
      }
    } : {}
  )

  const news = await newsRes.json()

  return { props: { news } }
}

export default Category