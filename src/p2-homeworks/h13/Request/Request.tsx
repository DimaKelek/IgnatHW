import React, {useState} from "react";
import S from "./Request.module.css"
import {ReactCheckbox} from "../../h4/common/c3-SuperCheckbox/Checkbox/ReactCheckbox";
import {MyButton} from "../../h4/common/c2-SuperButton/MyButton";
import {requestAPI} from "../API/Api";

type RequestPropsType = {

}

export const Request: React.FC<RequestPropsType> = props => {
    const [checked, setChecked] = useState<boolean>(false)
    const [res, setRes] = useState<string>("")
    async function request(success: boolean) {
        try {
            let response = await requestAPI.test(success)
            setRes(response.data.errorText)
        } catch (error) {
            setRes(error.response ? error.response.data.errorText : error.message)
        }
    }
    // const request = (success: boolean) => {
    //     requestAPI.test(success).then(response => {
    //         setRes(response.data.errorText)
    //     }).catch(error => {
    //         setRes(error.response ? error.response.data.errorText : error.message)
    //     })
    // }
    const onChangeCheckbox = () => {setChecked(!checked)}
    const requestCallback = () => {
        request(checked)
    }

    return (
        <div className={S.box}>
            <div>
                <ReactCheckbox checked={checked} onChange={onChangeCheckbox}>Label</ReactCheckbox>
                <MyButton onClick={requestCallback}>Button</MyButton>
            </div>
            <div>{res}</div>
        </div>
    )
}