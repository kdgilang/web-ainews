import Header from "@src/components/Header"
import Footer from "@src/components/Footer"
import Card, { ECardType } from "@src/components/Card"
import CardSection from "@src/components/CardSection"
import SubscribeForm from "@src/components/SubscribeForm"

export default function Default() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-2xl px-4 py-10 md:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
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
            />
          </div>
          <div className="mt-6 md:mt-0 md:flex-initial md:w-4/12">
            <CardSection title="Featured story" type={ECardType.row} />
          </div>
        </div>

        <CardSection title="Trending now" type={ECardType.column} className="mt-6 md:mt-10" />

        <SubscribeForm className="mt-6 md:mt-10" />
      </div>
      <Footer />
    </>
  )
}
