import 'tailwindcss/tailwind.css'

import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9858073319449415"
        crossOrigin="anonymous"></script>
      <Component {...pageProps} />
    </>
  )
}
