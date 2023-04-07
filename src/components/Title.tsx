import { BasePropsType } from "@src/types/basePropsType"

export default function Title({ value }: TitleType) {
  return (
    <h2 className="text-lg relative border-b border-slate-100 dark:border-slate-700 mb-6 pb-2 font-bold text-slate-700 dark:text-slate-200 before:content-[''] before:w-3/12 before:border-b before:border-green before:top-full before:absolute before:left-0 ">
        {value}
    </h2>
  )
}

export type TitleType = BasePropsType & {
  value: string
}
