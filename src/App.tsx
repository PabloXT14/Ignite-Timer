import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button bgColor="primary">Send</Button>
      <Button bgColor="secondary">Send</Button>
      <Button bgColor="danger">Send</Button>
      <Button bgColor="success">Send</Button>
      <GlobalStyle />
    </ThemeProvider>
  )
}
