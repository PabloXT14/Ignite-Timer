import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['ignite-mid']};
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: ${(props) => props.theme['shape-tertiary']};
  }

  body {
    background: ${(props) => props.theme['color-background']};
    color: ${(props) => props.theme['text-base']};
    -webkit-font-smoothing: antialiased;
  }

  body, input-security, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
