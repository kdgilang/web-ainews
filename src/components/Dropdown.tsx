import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { BasePropsType } from '@src/types/basePropsType'
import classNames from '@src/helpers/classNames'

export type DropdownItemType = {
  label: string
  value: string
  href: string
}

export type DropdownType = BasePropsType & {
  items: DropdownItemType[]
  value: DropdownItemType
  onDropdownChange?(val: DropdownItemType): void
}

export class DropdownItemModel implements DropdownItemType {
  label: string
  value: string
  href: string
  constructor() {
    this.label = '',
    this.value = '',
    this.href = ''
  }
}

export default function Dropdown({ className, items, value, onDropdownChange }: DropdownType) {
  const [selectedValue, setSelectedValue] = useState<DropdownItemType>(value || new DropdownItemModel())

  useEffect(() => {
    if (value) {
      setSelectedValue(value)
    }

  }, [value])

  return (
    <Menu as="div" className={ classNames(
        className || '',
        'relative inline-block text-left'
    ) }>
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 text-xs font-semibold text-white hover:bg-gray-50">
          { selectedValue.label }
          <ChevronDownIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-40 bg-slate-900/90 origin-top-right divide-y divide-gray-100 rounded text-white focus:outline-none">
          <div className="py-1">
            {items?.map((item, index) => (
              <Menu.Item key={`${item.value}-${index}`}>
                {({ active }) => (
                  <a
                    href={item.href}
                    className={classNames(
                      active ? 'bg-white/40' : ' text-white',
                      'block px-4 py-2 text-sm'
                    )}
                    onClick={() => {
                      setSelectedValue(item)
                      if (typeof onDropdownChange !== 'undefined') {
                        onDropdownChange(item)
                      }
                    }}
                  >
                    { item.label }
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}