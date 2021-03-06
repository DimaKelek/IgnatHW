import React, {useState} from 'react'
import S from './Clock.module.css'
import {MyButton} from "../h4/common/c2-SuperButton/MyButton";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)

    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
           setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString() // fix with date
    const stringDate = date.toDateString() // fix with date

    return (<>
            <div className={S.clock}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={S.time}
                >
                    {stringTime}
                </div>

                {show && (
                <div className={S.date}>
                    {stringDate}
                </div>
                )}


            </div>
            <div className={S.controlPanel}>
                <MyButton onClick={start}>start</MyButton>
                <MyButton onClick={stop}>stop</MyButton>
            </div>
        </>
    )
}

export default Clock
