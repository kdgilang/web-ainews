import Head from 'next/head'
import Default from '@src/layouts/Default'
import { BasePropsType } from '@src/types/basePropsType'
import { NewsDtoType } from '@src/types/newsDtoType'
import { categories } from '@src/consts/staticData'
import Link from 'next/link'
import classNames from '@src/helpers/classNames'
import { useRouter } from 'next/router'

type CategoriesPropsType = BasePropsType & {
  news: NewsDtoType
}

function Categories({ news }: CategoriesPropsType) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>AI News | Categories</title>
        <meta name="description" content="AI News provide relevant news you needs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <Default>
      <ul className="columns-3 space-y-8 mt-10">
      {categories?.map(item => (
          <li key={`menu-${item.id}`}>
            <Link className={classNames(
              "aspect-video uppercase text-md md:text-xl font-bold flex items-center justify-center bg-slate-100 dark:bg-slate-700 hover:bg-green/40 dark:hover:bg-green/40 text-slate-900 dark:text-white",
              router.asPath === `/categories/${item.name}` ? 'before:w-4/6' : ''
            )}
              href={`/categories/${item.name}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </Default>
    </>
  )
}

export default Categories