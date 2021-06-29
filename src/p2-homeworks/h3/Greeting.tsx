import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {SuperInput} from "../h4/common/c1-SuperInputText/SuperInput";
import {MyButton} from "../h4/common/c2-SuperButton/MyButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void// need to fix any
    error?: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers, onEnter}) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div className={s.container}>
            <SuperInput
                value={name}
                onChange={setNameCallback}
                className={error ? inputClass : ""}
                onKeyDown={onEnter}
            />
            <MyButton onClick={addUser} disabled={name === ""}>add</MyButton>
            <span>{totalUsers}</span>
            <div className={s.errorText}>{error}</div>
        </div>
    )
}

export default Greeting
