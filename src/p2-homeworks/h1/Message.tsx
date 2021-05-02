import React from 'react'
import S from './Message.module.css'

type MessageData = {
    avatar: string,
    name: string,
    message: string,
    time: string
}
export function Message(props: MessageData) {
    return (
        <div className={S.message}>
            <div className={S.img_box}>
                <img className={S.avatar} src={props.avatar} alt=""/>
            </div>
            <div className={S.message_box}>
                <div className={S.name}>
                    {props.name}
                </div>
                <div className={S.message_text}>
                    {props.message}
                </div>
                <div className={S.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}
