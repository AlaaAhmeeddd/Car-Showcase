import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    type?: "button" | "submit";
    style?: string;
    textStyles?: string;
    text: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}