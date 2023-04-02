import { HTMLAttributes } from 'react'

export type BasePropsType = HTMLAttributes<HTMLBaseElement> & {
  children?: string | JSX.Element | JSX.Element[] | boolean | null | undefined
}