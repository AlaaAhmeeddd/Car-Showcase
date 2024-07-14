import { CustomButtonProps } from "@/type";

export default function CustomButton({text, type, style, isDisabled, handleClick, textStyles}:CustomButtonProps) {
    return (
        <button 
            onClick={handleClick}
            disabled={isDisabled}
            type={type || "button"}
            className={`custom-btn ${style}`}
        >
            <span className={textStyles}>{text}</span>
        </button>
    )
}
