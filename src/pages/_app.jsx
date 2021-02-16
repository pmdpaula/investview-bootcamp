// import { useState } from 'react'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
// import { AppProps } from 'next/app'

import GlobalStyle from '../theme/GlobalStyle'
// import theme from '../theme'
import ThemeLight from '../theme/light'
import ThemeDark from '../theme/dark'

import Head from 'next/head'
// import usePersistedState from '../utils/usePersistedState'

// export default function App({ Component, pageProps }: AppProps): JSX.Element {
const App = ({ Component, pageProps }) => {
  // const [themeMode, setThemeMode] = usePersistedState('theme', ThemeDark)
  const [theme, setTheme] = useState(ThemeDark)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? ThemeDark : ThemeLight)
  }

  return (
    <>
      <Head>
        <title>Instalura - Projeto base</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
