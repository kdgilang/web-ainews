import Link from 'next/link'
import { categories } from '@src/consts/staticData'
import { useRouter } from 'next/router'
import classNames from '@src/helpers/classNames'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import Dropdown, { DropdownItemModel, DropdownItemType } from './Dropdown'

export default function Navigation() {
  const router = useRouter()
  const [menu, setMenu] = useState<DropdownItemType[]>(Array<DropdownItemModel>())

  useEffect(() => {
    let newMenu: DropdownItemType[] = []
    categories.forEach(m => {
      newMenu.push({
        label: m.label,
        value: m.name,
        href: `/categories/${m.name}`
      })
    })

    setMenu(newMenu)
  }, [])

  return (
    <nav className="block xl:ml-8 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
      <Dropdown
        className="relative block text-left lg:hidden"
        value={menu[0]}
        items={menu}
        buttonEl={(
          <Menu.Button className="block rounded text-slate-900 dark:text-white hover:bg-gray-50">
            <span className="sr-only">open navigation menu</span>
            <Bars3Icon className={classNames(
              "h-8 w-8 align-middle"
            )} aria-label="open navigation menu" />
          </Menu.Button>)
        }
      />

      <ul className="space-x-6 xl:space-x-8 hidden lg:flex">
        <li>
          <Link className={classNames(
            "hover:text-slate-500 dark:hover:text-slate-400 before:content-[''] transition-all before:w-0 before:transition-all relative before:border-b-2 before:border-green before:top-full before:absolute before:left-0 hover:before:w-4/6 focus:before:w-4/6",
            router.asPath === '/' ? "before:w-4/6" : ""
          )} href="/">
            Home
          </Link>
        </li>
        {categories?.map(item => (
          <li key={`menu-${item.id}`}>
            <Link className={classNames(
              "before:content-[''] transition-all before:w-0 before:transition-all relative before:border-b-2 before:border-green before:top-full before:absolute before:left-0 hover:before:w-4/6 focus:before:w-4/6",
              router.asPath === `/categories/${item.name}` ? "before:w-4/6" : ""
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