import { CustomButtonProps } from "@/type";

export default function CustomButton({text, type, style, isDisabled}:CustomButtonProps) {
    return (
        <button 
            disabled={isDisabled}
            type={type || "button"}
            className={style}
        >
            {text}
        </button>
    )
}
