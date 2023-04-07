import Image from 'next/image'
import { BasePropsType } from '@src/types/basePropsType'
import Link from 'next/link'
import { Suspense, useEffect, useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import { NEXT_PUBLIC_OPEN_API_KEY } from '@src/consts/config'
import Skeleton from 'react-loading-skeleton'
import { ArticleType } from '@src/types/newsDtoType'
import useTruncate from '@src/hooks/useTruncate'

export type CardType = BasePropsType & ArticleType & {
  type: ECardType
  tag?: string
  rowReverse?: boolean
  maxTitleLength?: number
}

export enum ECardType {
  row,
  column,
  float
}

const titleClassNames = {
  [ECardType.column]: "text-md",
  [ECardType.row]: "tex-md",
  [ECardType.float]: "text-xl"
}

export default function Card(
  { title, description, type, urlToImage, rowReverse, tag, author, publishedAt, url, className, maxTitleLength }: CardType) {
  const [imgSrc, setImgSrc] = useState(urlToImage || '')
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const truncatedTitle = useTruncate(title, maxTitleLength || 0)

  useEffect(() => {
    const fetchImage = async () => {
      const configuration = new Configuration({
        apiKey: NEXT_PUBLIC_OPEN_API_KEY,
      })
      const openai = new OpenAIApi(configuration)

      const response = await openai.createImage({
        prompt: `a ${title} digital art`,
        n: 1,
        size: "512x512",
      })
  
      setImgSrc(response.data.data[0].url || '')

      setIsImageLoaded(true)
    }

    fetchImage()
      .catch(() => setImgSrc(urlToImage || ''))
      .finally(() => setIsImageLoaded(true))
  })

  const containerClassNames = {
    [ECardType.column]: "",
    [ECardType.row]: `flex ${rowReverse ? 'flex-row-reverse' : ''}`,
    [ECardType.float]: ""
  }

  const imageClassNames = {
    [ECardType.column]: "w-full",
    [ECardType.row]: "w-4/12",
    [ECardType.float]: ""
  }

  const contentClassNames = {
    [ECardType.column]: "mt-4 w-full",
    [ECardType.row]: `w-4/6 ${rowReverse ? 'mr-4' : 'ml-4'}`,
    [ECardType.float]: "mt-4 md:absolute md:w-4/6 md:px-8 md:mt-0 md:py-4 md:bg-white md:dark:bg-slate-900 md:left-8 md:right-8 lg:right-auto md:bottom-8 rounded md:shadow md:bg-opacity-75"
  }

  return (
    <div className={`group relative ${containerClassNames[type]} ${className}`}>
      <div className={`relative ${imageClassNames[type]} aspect-[16/9] overflow-hidden rounded bg-gray-200 group-hover:opacity-75`}>
        <Image
          src={imgSrc}
          alt={title}
          width="200"
          height="150"
          placeholder="blur"
          blurDataURL="/placeholder.png"
          className="h-full w-full object-cover object-center"
        />
        { !isImageLoaded && <Skeleton
          containerClassName="w-full h-full object-cover absolute left-0 top-0"
          className="w-full h-full object-cover"
          highlightColor="#EFEFEF"
          baseColor="#CCCCCC" /> }
      </div>
      <div className={`z-10 transition ${contentClassNames[type]}`}>
        <h3 className={`font-bold text-slate-700 dark:text-slate-200 ${titleClassNames[type]}`}>
          <Link href={ url || '#' } rel="noopener noreferrer" target="_blank">
            <span aria-hidden="true" className="absolute inset-0" />
            { truncatedTitle }
          </Link>
        </h3>
        <p className="mt-2 text-xs text-slate-600 dark:text-slate-200">
          <span>By {author ? author : 'unknown'}</span> | <span>{publishedAt}</span>
        </p>
        { description && <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
          { description }
        </p> }
      </div>
    </div>
  )
}
