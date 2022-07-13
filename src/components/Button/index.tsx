import { ReactNode } from 'react'
import { ButtonContainer, ButtonVariants } from './styles'

type ButtonProps = {
  children: ReactNode
  bgColor: ButtonVariants
}

export function Button({ children, bgColor = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={bgColor}>{children}</ButtonContainer>
}
