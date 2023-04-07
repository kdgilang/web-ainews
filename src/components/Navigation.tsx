import Link from 'next/link'
import { categories } from '@src/consts/staticData'
import { useRouter } from 'next/router'
import classNames from '@src/helpers/classNames'

export default function Navigation() {
  const router = useRouter()

  return (
    <nav className="block ml-8 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
      <ul className="flex space-x-8">
        <li>
          <Link className={classNames(
            "hover:text-slate-500 dark:hover:text-slate-400 before:content-[''] transition-all before:w-0 before:transition-all relative before:border-b-2 before:border-green before:top-full before:absolute before:left-0 hover:before:w-4/6 focus:before:w-4/6",
            router.asPath === '/' ? 'before:w-4/6' : ''
          )}
            href="/"
          >
            Home
          </Link>
        </li>
        {categories?.map(item => (
          <li key={`menu-${item.id}`}>
            <Link className={classNames(
              "before:content-[''] transition-all before:w-0 before:transition-all relative before:border-b-2 before:border-green before:top-full before:absolute before:left-0 hover:before:w-4/6 focus:before:w-4/6",
              router.asPath === `/categories/${item.name}` ? 'before:w-4/6' : ''
            )}
              href={`/categories/${item.name}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}