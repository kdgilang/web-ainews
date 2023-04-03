import Image from 'next/image'
import { BasePropsType } from '@src/types/basePropsType'
import Link from 'next/link'

export type CardType = BasePropsType & {
  id: string
  type: ECardType
  imageSrc: string
  imageAlt: string
  title: string
  tag?: string
  author: string
  date: string,
  href: string
  body?: string
}

export enum ECardType {
  row,
  column,
  float
}

const product = {
  id: 1,
  name: 'Basic Tee',
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  imageAlt: "Front of men's Basic Tee in black.",
  price: '$35',
  color: 'Black',
}

const containerClassNames = {
  [ECardType.column]: "",
  [ECardType.row]: "flex",
  [ECardType.float]: ""
}

const contentClassNames = {
  [ECardType.column]: "mt-4",
  [ECardType.row]: "ml-4",
  [ECardType.float]: "mt-4 md:absolute md:px-8 md:mt-0 md:py-4 md:bg-white md:dark:bg-slate-900 md:left-8 md:right-8 lg:right-auto md:bottom-8 rounded md:shadow md:bg-opacity-75"
}

const titleClassNames = {
  [ECardType.column]: "text-md",
  [ECardType.row]: "tex-md",
  [ECardType.float]: "text-xl"
}

export default function Card(
  { id, title, body, type, imageSrc, imageAlt, tag, author, date, href, className }: CardType) {

  return (
    <div key={id} className={`group relative ${containerClassNames[type]} ${className}`}>
      <div className="w-full aspect-video overflow-hidden rounded-md bg-gray-200  lg:aspect-none group-hover:opacity-75">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width="120"
          height="86"
          blurDataURL="/placeholder.png"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className={`transition ${contentClassNames[type]}`}>
        <h3 className={`font-bold text-slate-700 dark:text-slate-200 ${titleClassNames[type]}`}>
          <Link href={href} rel="noopener noreferrer" target="_blank">
            <span aria-hidden="true" className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-2 text-xs text-slate-600 dark:text-slate-200">
          <span>By {author}</span> | <span>{date}</span>
        </p>
        { body && <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
          { body }
        </p> }
      </div>
    </div>
  )
}
