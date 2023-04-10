import Head from 'next/head'
import Link from 'next/link'

export default function Maintenance() {
  return (
    <>
      <Head>
        <title>AI News | Under Maintenance</title>
        <meta name="description" content="Site Under Maintenance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-white dark:bg-slate-900">
        <h1 className="text-9xl font-extrabold text-slate-900 dark:text-white tracking-widest">uh oh</h1>
        <div className="uppercase font-bold bg-green px-2 py-1 text-sm rounded rotate-12 absolute text-white text-xs">
          Under Maintenance
        </div>
      </div>
    </>
  )
}
