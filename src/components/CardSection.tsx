import Card, { ECardType, CardType } from "@src/components/Card"
import { BasePropsType } from "@src/types/basePropsType"

const gridClassNames = {
  [ECardType.column]: "grid md:grid-cols-4 grid-flow-col gap-4",
  [ECardType.row]: "grid auto-rows-min auto-rows-max grid-flow-col gap-4",
  [ECardType.float]: ""
}

export default function CardSection({ title, cards, type, className }: CardSectionType) {
  return (
    <div className={className}>
      <h2 className="text-lg relative border-b border-slate-100 dark:border-slate-700 mb-6 pb-2 font-bold text-slate-700 dark:text-slate-200 before:content-[''] before:w-3/12 before:border-b before:border-green before:top-full before:absolute before:left-0 ">
        {title}
      </h2>
      <div className={gridClassNames[type]}>
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
          className=""
        />
      </div>
    </div>
  )
}

export type CardSectionType = BasePropsType & {
  title: string
  type: ECardType
  cards?: CardType[]
}
