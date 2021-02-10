import { AppProps } from 'next/app'
import Head from 'next/head'
import store from 'store'

import { Provider } from 'react-redux'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Starships</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="A simple project to show starships" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
