import React from "react";
import S from "./MyButton.module.css"

type MyButtonPropsType = {
    title: string
    onClick: () => void
    disabled?: boolean
}

export function MyButton(props: MyButtonPropsType) {
    const disabled = props.disabled && props.disabled
    return (
        <div className={S.button_box}>
            <button
                className={S.button}
                onClick={props.onClick}
                disabled={disabled}
            >{props.title}</button>
        </div>
    );
}