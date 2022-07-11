import styled, { css } from "styled-components";

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success';

type ButtonContainerProps = {
    variant: ButtonVariants;
}

const buttonColorVariants = {
    primary: '#8257E6',
    secondary: '#ff87f4',
    danger: '#ff3300',
    success: '#33ff00'

}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 6rem;
    height: 4rem;

    ${props => {
        return css`background-color: ${buttonColorVariants[props.variant]}`
    }}
`;