import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import S from "./MyButton.module.css"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonPropsType = DefaultButtonPropsType & {
    onClick?: () => void
    disabled?: boolean
}

export const MyButton: React.FC<MyButtonPropsType> = props => {
    const {disabled, title, onClick, className, children, ...restProps} = props
    return (
        <div className={S.button_box}>
            <button
                className={S.button}
                onClick={props.onClick}
                disabled={disabled}

                {...restProps}
            >{children}</button>
        </div>
    );
}