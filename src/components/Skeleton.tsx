import classNames from '@src/helpers/classNames'
import { BasePropsType } from '@src/types/basePropsType'
import BaseSkeleton from 'react-loading-skeleton'

type SkeletonPropsType = BasePropsType & {
  containerClassName?: string
  count?: number,
  height?: number
}

export default function Skeleton({ containerClassName, className, count, height}: SkeletonPropsType) {
  return <BaseSkeleton 
    containerClassName={classNames(
      "w-full h-full object-cover left-0 top-0",
      containerClassName || "",
    )}
    className={classNames(
      "w-full h-full object-cover",
      className || ""
    )}
    highlightColor="#EFEFEF"
    baseColor="#CCCCCC"
    count={count}
    height={height}
  />
}