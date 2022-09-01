import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}
