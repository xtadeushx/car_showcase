"use client";

import { MouseEventHandler } from 'react';
import Image from 'next/image';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
    textStyles?: string,
    rightIcon?: string,
    isDisabled?: boolean
}
const CustomButton  = ({ title, containerStyles, handleClick, type = 'button', textStyles, rightIcon, isDisabled, ...attributes }: CustomButtonProps) => {
    return (
        <button
            disabled={isDisabled}
            type={type}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
            {...attributes}
        >
            <span className={`flex-1  ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="arrow_left"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    )
}

export default CustomButton