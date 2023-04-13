import Card, { ECardType, CardType } from "@src/components/Card"
import Title from "@src/components/Title"
import { BasePropsType } from "@src/types/basePropsType"
import { ArticleType } from "@src/types/newsDtoType"

const gridClassNames = {
  [ECardType.column]: "grid md:grid-cols-4 md:grid-flow-col gap-6",
  [ECardType.row]: "grid md:grid-rows-4 gap-4",
  [ECardType.float]: ""
}

export default function CardSection({ title, cards, type, className }: CardSectionType) {
  return (
    <div className={className}>
      <Title value={title} />
      <div className={gridClassNames[type]}>
        {cards?.map((item, index) => (<Card
            key={`card-${title.replace(' ','')}-${index}`}
            { ...item }
            type={type}
            maxTitleLength={50}
            description=""
            content=""
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
