import '@src/styles/globals.css'
import type { AppProps } from 'next/app'
import BaseContext from '@src/contexts/BaseContext'
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseContext>
      <NextNProgress color="#1b8415" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component {...pageProps} />
    </BaseContext>
  )
}
