import Header from "@src/components/Header"
import Card, { ECardType } from "@src/components/Card"

export default function Default() {
  return (
    <>
      <Header />
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
    </>
  )
}
