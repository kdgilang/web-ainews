import { BasePropsType } from "@src/types/basePropsType"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { FormEvent, useContext, useState } from "react"
import { NEWS_SEARCH_API_PATH } from "@src/consts/pathApi"
import {  getCookie } from "cookies-next"
import { SearchContext } from "@src/contexts/SearchContext"
import { useRouter } from "next/router"
import classNames from "@src/helpers/classNames"

export default function SearchForm({ className }: BasePropsType) {
  const router = useRouter()
  const [keywords, setKeywords] = useState(router.query?.q)
  const { search, setSearch } = useContext(SearchContext)

  const handleSubmit = async (e: FormEvent<EventTarget>) => {
    e.preventDefault()

    setSearch({
      ...search,
      isLoading: true
    })

    const lang = `${getCookie('lang') || ''}`
    const newsRes = await (await fetch(`${NEWS_SEARCH_API_PATH}?q=${keywords}`,
    lang ? {
        headers: {
          cookie: `lang=${lang}`
        }
      } : {}
    )).json()
    
    setSearch({
      keywords: `${keywords}`,
      result: newsRes,
      isLoading: false
    })

    router.query.q = keywords
    router.push(router)
  }

  return (
    <div className={`bg-white dark:bg-slate-900 relative pointer-events-auto ${className}`}>
      <form className="mt-6 flex gap-x-4" action="/search" onSubmit={ (e: FormEvent<EventTarget>) => { handleSubmit(e) } }>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          name="q"
          type="text"
          value={keywords}
          className="min-w-0 flex-auto rounded border border-slate-900/10 dark:border-green/40 bg-white/5 px-3.5 py-2 text-slate-900 dark:text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          placeholder="Search..."
          onChange={(e) => { setKeywords(e.target.value) }}
        />
        <button
          type="submit"
          aria-label="submit search from"
          className={classNames(
            "flex-none transition rounded bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500",
            search.isLoading ? 'bg-green disabled' : '',
          )}
          disabled={search.isLoading}
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}