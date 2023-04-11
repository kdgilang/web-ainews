import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Dropdown, { DropdownItemModel, DropdownItemType } from './Dropdown'
import { multilingual, regions } from '@src/consts/staticData'
import { setCookie, getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import Navigation from './Navigation'
import { Switch } from '@headlessui/react'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'
import classNames from '@src/helpers/classNames'

export default function Header() {
  const [dropdownRegions, setDropdownRegions] = useState<DropdownItemType[]>(new Array<DropdownItemModel>())
  const [languages, setLanguages] = useState<DropdownItemType[]>(new Array<DropdownItemModel>())
  const [region, setRegion] = useState<DropdownItemType>(new DropdownItemModel())
  const [lang, setLang] = useState<DropdownItemType>(new DropdownItemModel())
  const [enabled, setEnabled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // detect system prefers color
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setEnabled(true)
    }

    let newRegions = new Array<DropdownItemModel>()
    regions.forEach(r => {
      newRegions.push({
        label: r.name,
        value: r.shortName,
        href: '#'
      })
    })

    let newLanguages = new Array<DropdownItemModel>()
    multilingual.forEach(l => {
      newLanguages.push({
        label: l.name,
        value: l.shortName,
        href: '#'
      })
    })

    setDropdownRegions(newRegions)
    setLanguages(newLanguages)

  }, []) // eslint-disable-line

  useEffect(() => {
    document.getElementsByTagName('html')[0].className = enabled ? 'dark' : ''
  }, [enabled])

  useEffect(() => {
    const cookieRegion = getCookie('region')
    const regionFound = dropdownRegions?.find(item => item.value === cookieRegion) || dropdownRegions[0]

    if (regionFound) {
      setRegion(regionFound)
    }
  }, [dropdownRegions])

  useEffect(() => {
    const cookieLang = getCookie('lang')
    const langFound = languages?.find(item => item.value === cookieLang) || languages[0]

    if (langFound) {
      setLang(langFound)
    }
  }, [languages])
  
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-green/40 bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-green/40 px-4">
          <div className="relative flex items-center">
            <Link className="mr-3 w-[2.0625rem] overflow-hidden md:w-auto hidden sm:block" href="/">
              <span className="sr-only">AI News home page</span>
              <Image src="/logo.svg" alt="AI News logo" width="100" height="50" className="dark:hidden"/>
              <Image src="/logo-dark.svg" alt="AI News logo" width="100" height="50" className="hidden dark:inline"/>
            </Link>
            <Navigation />
            <div className="ml-auto flex items-center dark:border-slate-800">
              { router.pathname === '/search' ? 
                <Dropdown
                  className="mr-6"
                  items={languages}
                  value={lang}
                  onDropdownChange={(item) => { 
                    setCookie('lang', item.value)
                    router.reload()
                  }}
                /> :
                <Dropdown
                  className="mr-6"
                  items={dropdownRegions}
                  value={region}
                  onDropdownChange={(item) => { 
                    setCookie('region', item.value)
                    router.reload()
                  }}
                />
              }

              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? 'bg-slate-700' : 'bg-slate-500'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable dark mode</span>
                <span className={classNames(
                  "inline-block transform rounded-full transition bg-white",
                  enabled ? 'translate-x-6' : 'translate-x-1',
                )}>
                  {enabled ? <MoonIcon className={classNames(
                    "h-4 w-4 text-slate-900",
                  )} /> : <SunIcon className={classNames(
                    "h-4 w-4 text-slate-900 ",
                  )} />}
                </span>
              </Switch>
              <Link href="https://github.com/kdgilang" rel="noopener noreferrer" target="_blank" className="ml-6 block text-slate-700 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-300">
                <span className="sr-only">AI News on GitHub</span>
                <svg viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
