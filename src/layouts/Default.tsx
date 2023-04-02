import Header from "@src/components/Header"
import Card, { ECardType } from "@src/components/Card"

export default function Default() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
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
          <div className="md:flex-initial md:w-4/12">
            <h2 className="text-lg border-b-2 border-slate-100 mb-6 pb-2 font-bold text-slate-700 dark:text-slate-200">
              Featured story
            </h2>
            <div className="grid grid-rows-4 grid-flow-col gap-4">
              <Card 
                id="234"
                title="The time to unlock Industry 4.0 growth is now"
                type={ECardType.row}
                imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                imageAlt="item alt"
                tag="executive"
                author="jhon doel"
                date="AUGUST 25, 2021"
                href="https://jnews.io/writy/2021/06/29/govt-distributes-free-medicines-to-support-self-isolating-patients/"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
