import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { darkTheme } from './styles/themes/dark'
import { lightTheme } from './styles/themes/light'

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const storageTheme = JSON.parse(
      localStorage.getItem('@ignite-timer:theme-1.0.0')!,
    )

    if (storageTheme && storageTheme === 'dark') {
      return 'dark'
    } else {
      return 'light'
    }
  })

  const isDarkTheme = theme === 'dark'

  function handleToggleTheme() {
    const updatedTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(updatedTheme)
  }

  useEffect(() => {
    localStorage.setItem('@ignite-timer:theme-1.0.0', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
