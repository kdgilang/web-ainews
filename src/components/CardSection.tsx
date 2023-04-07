import Card, { ECardType, CardType } from "@src/components/Card"
import Title from "@src/components/Title"
import { BasePropsType } from "@src/types/basePropsType"
import { ArticleType } from "@src/types/newsDtoType"

const gridClassNames = {
  [ECardType.column]: "grid md:grid-cols-4 grid-flow-col gap-4",
  [ECardType.row]: "grid md:grid-rows-3 gap-4",
  [ECardType.float]: ""
}

export default function CardSection({ title, cards, type, className }: CardSectionType) {
  return (
    <div className={className}>
      <Title value={title} />
      <div className={gridClassNames[type]}>
        {cards && cards.map((item, index) => (<Card
            key={`card-${index}`}
            { ...item }
            type={type}
            maxTitleLength={100}
            tag="executive"
            description=""
            content=""
            className=""
          />
        )
        )}
      </div>
    </div>
  )
}

export type CardSectionType = BasePropsType & {
  title: string
  type: ECardType
  cards: ArticleType[]
}
