import 'styled-components'

import { lightTheme } from '../styles/themes/light'

// CRIANDO TIPAGEM DO NOSSO TEMA DE FORMA DINÂMICA
type ThemeType = typeof lightTheme

// SOBRESCREVENDO O MODULO DE TIPAGENS DEFAULT DO STYLE-COMPONENTS

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
