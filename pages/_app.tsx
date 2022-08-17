import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
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
