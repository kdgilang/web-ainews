import { useRouter } from 'next/router'
import Head from 'next/head'
import { NextPageContext } from 'next'
import Default from '@src/layouts/Default'
import Card, { ECardType } from "@src/components/Card"
import CardSection from "@src/components/CardSection"
import { NEWS_API_PATH } from '@src/consts/pathApi'
import Title from "@src/components/Title"
import { BasePropsType } from '@src/types/bobPropsType'
import { NewsDtoType } from '@src/types/newsDtoType'
import SubscribeForm from "@src/components/SubscribeForm"

export type CategoryPropsType = BasePropsType & {
  news: NewsDtoType
}

const Category = ({ news }: CategoryPropsType) => {
  const { business, technology, science,  } = news
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Head>
        <title>{ slug } | Category </title>
        <meta name="description" content="AI News provide relevant news you needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Default>
        <Card 
          type={ECardType.float}
          {...business.articles?.[0]}
          className="w-full"
          description=""
          content=""
          label={`${slug}`}
          imageClassName="md:aspect-[2.39/1]"
        />

        <div className="mt-6 md:mt-10">
          <Title value="Latest story" />

          <div className="lg:flex">
            <div className="lg:flex-initial lg:w-4/6 lg:pr-8 grid gap-6">
                {science?.articles?.map((item, index) => (<Card
                      key={`card-science-${index}`}
                      { ...item }
                      type={ECardType.row}
                      label="executive"
                    />
                  )
                )}
            </div>
            <div className="mt-6 lg:mt-0 lg:flex-initial lg:w-4/12">
              <CardSection
                title="Recommended"
                type={ECardType.row}
                cards={business?.articles?.slice(1, 5)} />
              
              <SubscribeForm className="mt-6" isMinimal={true} />

              <div className="lg:sticky lg:top-20 lg:z-50 mt-6">
                <Title value="Super story" />
                <Card 
                  type={ECardType.column}
                  label="executive"
                  {...business.articles?.[0]}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  )
}

Category.getInitialProps = async (ctx: NextPageContext) => {
  // console.log((ctx.req?.headers.c))
  const res = await fetch(NEWS_API_PATH,
    ctx?.req?.headers?.cookie ? {
      headers: {
        cookie: ctx.req.headers.cookie
      }
    } : {}
  )

  const json = await res.json()

  console.log(json)
  return { news: json }
}


export default Category