import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>AI News | 404</title>
        <meta name="description" content="Page not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-slate-900">
        <h1 className="text-9xl font-extrabold text-slate-900 dark:text-white tracking-widest">404</h1>
        <div className="uppercase bg-green px-2 py-1 text-sm rounded rotate-12 absolute text-slate-900 dark:text-white text-xs">
          Page Not Found
        </div>
        <button className="mt-5">
          <a
            className="relative rounded inline-block text-sm font-medium text-slate-900 dark:text-white group hover:text-green hover:dark:text-green focus:outline-none focus:ring"
          >
            <span className="relative block px-8 py-3 border border-current rounded">
              <Link href="/">Go Home</Link>
            </span>
          </a>
        </button>
      </div>
    </>
  )
}
