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

export interface optionsType {
    title: string,
    value: string,
}

export interface optionsProps {
    title: string,
    list: optionsType[],
}