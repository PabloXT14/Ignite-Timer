import { ReactNode } from "react";
import { ButtonContainer, ButtonVariants } from "./styles";

type ButtonProps = {
    children: ReactNode;
    bg_color: ButtonVariants;
}

export function Button({ children, bg_color = 'primary' }: ButtonProps) {
    return (
        <ButtonContainer variant={bg_color}>{children}</ButtonContainer>
    );
}