import { BasePropsType } from "@src/types/basePropsType"
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function SearchForm({ className }: BasePropsType) {
  return (
    <div className={`bg-white dark:bg-slate-900 relative pointer-events-auto ${className}`}>
      <form className="mt-6 flex gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Search
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 flex-auto rounded border border-slate-900/10 dark:border-green/40 bg-white/5 px-3.5 py-2 text-slate-900 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="flex-none transition rounded bg-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}