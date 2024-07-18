import { CustomButtonProps } from "@/type";
import Image from "next/image";

export default function CustomButton({text, type, style, isDisabled, handleClick, textStyles, rightIcon}:CustomButtonProps) {
    return (
        <button 
            onClick={handleClick}
            disabled={isDisabled}
            type={type || "button"}
            className={`custom-btn ${style}`}
        >
            <span className={`flex-1 ${textStyles}`}>{text}</span>
            {
                rightIcon && (
                    <div className="relative w-6 h-6">
                        <Image
                        src={rightIcon}
                        alt="arrow_left"
                        fill
                        className="object-contain"
                        />
                    </div>
                )
            }
        </button>
    )
}
