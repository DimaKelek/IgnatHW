import React from 'react'
import {AffairType} from "./HW2";
import S from "./Affairs.module.css"
import {MyButton} from "../h4/common/c2-SuperButton/MyButton";

type AffairPropsType = {
    name: string
    priority: string
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id) // need to fix

    const priority = {
        color: props.priority === "low" ? "green" : (props.priority === "middle" ? "yellow" : "red")
    };
    return (
        <div className={S.affair}>
            <div className={S.name}>{props.name}</div>
            <div style={priority} className={S.priority}>[{props.priority}]</div>
            <MyButton onClick={deleteCallback}>X</MyButton>
        </div>
    )
}

export default Affair
