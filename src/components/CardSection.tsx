import Card, { ECardType, CardType } from "@src/components/Card"
import { BasePropsType } from "@src/types/basePropsType"

export default function CardSection({ title, cards, type }: CardSectionType) {
  return (
    <div>
      <h2 className="text-lg border-b-2 border-slate-100 mb-6 pb-2 font-bold text-slate-700 dark:text-slate-200">
        {title}
      </h2>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <Card
          id="234"
          title="The time to unlock Industry 4.0 growth is now"
          type={type}
          imageSrc="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          imageAlt="item alt"
          tag="executive"
          author="jhon doel"
          date="AUGUST 25, 2021"
          href="https://jnews.io/writy/2021/06/29/govt-distributes-free-medicines-to-support-self-isolating-patients/"
        />
      </div>
    </div>
  )
}

export type CardSectionType = BasePropsType & {
  title: string
  type: ECardType
  cards: CardType[]
}