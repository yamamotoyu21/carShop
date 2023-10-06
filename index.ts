import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    text?: string;
    btnType?: "button" | "submit";
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}