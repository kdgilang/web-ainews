import Link from 'next/link'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { BaseContext } from '@src/contexts/BaseContext'

export default function Header() {
  const {state, setState} = useContext(BaseContext)
  const [ toggleTheme, setToggleTheme] = useState(false)

  const handleThemeMode = () => {
    setToggleTheme(!toggleTheme)

    document.getElementsByTagName('html')[0].className = !toggleTheme ? 'dark' : ''
  }
  
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-100/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
      <div className="max-w-8xl mx-auto">
        <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <Link className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto" href="/">
              <span className="sr-only">AI News home page</span>
              <Image src="logo.svg" alt="AI News logo" width="100" height="50" className="dark:hidden"/>
              <Image src="logo-dark.svg" alt="AI News logo" width="100" height="50" className="hidden dark:inline"/>
            </Link>
            <nav className="block ml-8 text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
              <ul className="flex space-x-8">
                <li><Link className="hover:text-sky-500 dark:hover:text-sky-400" href="/docs/installation">Docs</Link></li>
                <li><Link href="https://tailwindui.com/?ref=top" className="hover:text-sky-500 dark:hover:text-sky-400">Components</Link></li>
                <li><Link className="hover:text-sky-500 dark:hover:text-sky-400" href="/blog">Blog</Link></li>
              </ul>
            </nav>
            <div className="ml-auto flex items-center dark:border-slate-800">
              <label className="sr-only" id="headlessui-listbox-label-3" data-headlessui-state="">Theme</label>
              <button 
                onClick={handleThemeMode}
                className="hover:bg-slate-500 dark:hover:text-slate-200 rounded-full p-1">
                <Image src="icon-dark-mode.svg" alt="icon dark mode" width="28" height="28" className="dark:hidden" />

                <Image src="icon-light-mode.svg" alt="icon light mode" width="28" height="28" className="hidden dark:inline"/>
              </button>
              <Link href="https://github.com/kdgilang" className="ml-6 block text-slate-700 dark:text-slate-200 hover:text-slate-500 dark:hover:text-slate-300">
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
