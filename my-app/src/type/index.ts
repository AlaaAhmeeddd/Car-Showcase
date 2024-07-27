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

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}

export interface carDetailsProps {
    isOpen: boolean,
    closeModal: () => void,
    car: CarProps,
}