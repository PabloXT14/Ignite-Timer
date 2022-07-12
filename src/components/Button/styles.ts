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
    width: 6.5rem;
    height: 2.5rem;

    border: 0;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    color: ${props => props.theme.white};

    background: ${props => props.theme["green-500"]};
    margin: 1rem;
    cursor: pointer;
`;