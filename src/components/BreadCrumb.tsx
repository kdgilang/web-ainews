import { HomeIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import classNames from '@src/helpers/classNames'
import { BasePropsType } from '@src/types/basePropsType'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const convertBreadcrumb = (text: string) => {
  return text
    .replace(/-/g, ' ')
    .replace(/oe/g, 'ö')
    .replace(/ae/g, 'ä')
    .replace(/ue/g, 'ü')
    .toUpperCase()
}


export default function BreadCrumb({ className }: BasePropsType) {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState<CrumbType[]>()

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return { label: path, href: '/' + linkPath.slice(0, i + 1).join('/') }
      })

      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }

  return (
    <nav className={classNames(
      "flex",
      className ? className : ""
    )} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-green">
          <HomeIcon className="mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
          home
        </Link>
        {breadcrumbs?.map((item, index) => index < (breadcrumbs.length - 1) ?  
          (
            <li className="inline-flex items-center" key={item.href}>
              <Link href={item.href} className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-green">
                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            </li>
          ) : (
          
          <li className="inline-flex items-center" key={item.href}>
            <span className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400">
              <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              <span>{item.label}</span>
            </span>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export type CrumbType = {
  label: string
  href: string
}