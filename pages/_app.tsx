import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import PlausibleProvider from 'next-plausible'
import type { AppProps } from 'next/app'
import 'styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <PlausibleProvider domain="ernestoarellano.dev">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default App
