import React, {ChangeEvent, useState} from 'react'
import s from './HW4.module.css'
import {ReactCheckbox} from "./common/c3-SuperCheckbox/Checkbox/ReactCheckbox";
import {SuperInput} from "./common/c1-SuperInputText/SuperInput";
import {MyButton} from "./common/c2-SuperButton/MyButton";

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <SuperInput
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    //spanClassName={s.testSpanError}

                />

                <SuperInput
                   // className={s.blue} // проверьте, рабоет ли смешивание классов
                />

                {/*----------------------------------------------------*/}

                <MyButton>
                    default
                </MyButton>

                <MyButton
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </MyButton>

                <MyButton disabled>
                    disabled
                </MyButton>

                {/*----------------------------------------------------*/}

                <ReactCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </ReactCheckbox>

                {/*// onChange тоже должен работать*/}
                <ReactCheckbox checked={checked} onChange={testOnChange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4
