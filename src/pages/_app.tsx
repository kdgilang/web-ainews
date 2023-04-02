import '@src/styles/globals.css'
import type { AppProps } from 'next/app'
import BaseContext from '@src/contexts/BaseContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseContext>
      <Component {...pageProps} />
    </BaseContext>
  )
}
