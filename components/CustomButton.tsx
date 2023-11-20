"use client";

import { MouseEventHandler } from 'react';
import Image from 'next/image';

 interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
}
const CustomButton = ({title, containerStyles,handleClick,type='button'}:CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={type}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
            {title}
            </span>
        </button>
    )
}

export default CustomButton