import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button bg_color='primary'>Send</Button>
      <Button bg_color='secondary'>Send</Button>
      <Button bg_color='danger'>Send</Button>
      <Button bg_color='success'>Send</Button>
      <GlobalStyle />
    </ThemeProvider>
  )
}
