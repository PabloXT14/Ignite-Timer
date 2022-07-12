import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

// CRIANDO TIPAGEM DO NOSSO TEMA DE FORMA DINÂMICA
type ThemeType = typeof defaultTheme;

// SOBRESCREVENDO O MODULO DE TIPAGENS DEFAULT DO STYLE-COMPONENTS
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}