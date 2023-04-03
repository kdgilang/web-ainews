import Head from 'next/head'
import Default from '@src/layouts/Default'
import Card, { ECardType } from "@src/components/Card"
import CardSection from "@src/components/CardSection"
import SubscribeForm from "@src/components/SubscribeForm"
import Title from "@src/components/Title"

export default function Home() {
  return (
    <>
      <Head>
        <title>AI News</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Default>
      <div className="md:flex">
          <div className="md:flex-initial md:w-4/6 md:pr-8">
            <Card 
              id="234"
              title="The time to unlock Industry 4.0 growth is now"
              type={ECardType.float}
              imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              imageAlt="item alt"
              tag="executive"
              author="jhon doel"
              date="AUGUST 25, 2021"
              href="https://jnews.io/writy/2021/06/29/govt-distributes-free-medicines-to-support-self-isolating-patients/"
              className=""
            />
          </div>
          <div className="mt-6 md:mt-0 md:flex-initial md:w-4/12">
            <CardSection title="Featured story" type={ECardType.row} />
          </div>
        </div>

        <CardSection title="Trending now" type={ECardType.column} className="mt-6 md:mt-10" />

        <SubscribeForm className="mt-6 md:mt-10" />

        <div className="mt-6 md:mt-10">
          <Title value="Latest story" />

          <div className="md:flex">
            <div className="md:flex-initial md:w-4/6 md:pr-8 grid gap-4">
              <Card 
                id="234"
                title="The time to unlock Industry 4.0 growth is now"
                type={ECardType.row}
                imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                imageAlt="item alt"
                tag="executive"
                author="jhon doel"
                date="AUGUST 25, 2021"
                body="When we say we are just thrilled we mean the 'just' in the sense of very, and we also mean..."
                href="https://jnews.io/writy/2021/06/29/govt-distributes-free-medicines-to-support-self-isolating-patients/"
                rowReverse={true}
              />
                            <Card 
                id="234"
                title="The time to unlock Industry 4.0 growth is now"
                type={ECardType.row}
                imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                imageAlt="item alt"
                tag="executive"
                author="jhon doel"
                date="AUGUST 25, 2021"
                body="When we say we are just thrilled we mean the 'just' in the sense of very, and we also mean..."
                href="https://jnews.io/writy/2021/06/29/govt-distributes-free-medicines-to-support-self-isolating-patients/"
                rowReverse={true}
              />
                            <Card 
                id="234"
                title="The time to unlock Industry 4.0 growth is now"
                type={ECardType.row}
                imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                imageAlt="item alt"
                tag="executive"
                author="jhon doel"
                date="AUGUST 25, 2021"
                body="When we say we are just thrilled we mean the 'just' in the sense of very, and we also mean..."
                href="https://jnews.io/writy/2021/06/29/govt-distributes-free-medicines-to-support-self-isolating-patients/"
                rowReverse={true}
              />

<Card 
                id="234"
                title="The time to unlock Industry 4.0 growth is now"
                type={ECardType.row}
                imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                imageAlt="item alt"
                tag="executive"
                author="jhon doel"
                date="AUGUST 25, 2021"
                body="When we say we are just thrilled we mean the 'just' in the sense of very, and we also mean..."
                href="https://jnews.io/writy/2021/06/29/govt-distributes-free-medicines-to-support-self-isolating-patients/"
                rowReverse={true}
              />
            </div>
            <div className="mt-6 md:mt-0 md:flex-initial md:w-4/12">
              <div className="md:sticky md:top-20 md:z-50">
                <Title value="Super story" />

                <Card 
                  id="234"
                  title="The time to unlock Industry 4.0 growth is now"
                  type={ECardType.column}
                  imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  imageAlt="item alt"
                  tag="executive"
                  author="jhon doel"
                  date="AUGUST 25, 2021"
                  body="When we say we are just thrilled we mean the 'just' in the sense of very, and we also mean..."
                  href="https://jnews.io/writy/2021/06/29/govt-distributes-free-medicines-to-support-self-isolating-patients/"
                />
              </div>
            </div>
          </div>
        </div>
      </Default>
    </>
  )
}
