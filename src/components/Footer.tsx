import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {

  return (
    <div className="flex flex-col items-center py-10 border-t border-slate-900/10 lg:px-8 dark:border-green/40">
      <Link className="flex-none w-100 overflow-hidden md:w-auto mb-4" href="/">
        <span className="sr-only">AI News home page</span>
        <Image src="/logo.svg" alt="AI News logo" width="100" height="50" className="dark:hidden" />
        <Image src="/logo-dark.svg" alt="AI News logo" width="100" height="50" className="hidden dark:inline" />
      </Link>
      <p className="mb-8 text-slate-700 dark:text-slate-200">© 2023 AI News. All rights reserved.</p>
      <nav className="block text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
        <ul className="flex space-x-8">
          <li><Link target="_blank" rel="noopener noreferrer" className="transition hover:text-green" href="https://github.com/kdgilang/web-ainews">Docs</Link></li>
          <li><Link target="_blank" rel="noopener noreferrer" className="transition hover:text-green" href="https://github.com/kdgilang/" >Components</Link></li>
          <li><Link target="_blank" rel="noopener noreferrer" className="transition hover:text-green" href="https://github.com/kdgilang/">Blog</Link></li>
        </ul>
      </nav>
    </div>
  )
}
