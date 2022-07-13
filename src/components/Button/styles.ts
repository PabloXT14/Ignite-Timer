import styled from 'styled-components'

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success'

type ButtonContainerProps = {
  variant: ButtonVariants
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 6.5rem;
  height: 2.5rem;

  border: 0;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};

  background: ${(props) => props.theme['green-500']};
  margin: 1rem;
  cursor: pointer;
`
