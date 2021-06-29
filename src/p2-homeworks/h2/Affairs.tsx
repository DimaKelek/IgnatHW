import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import S from "./Affairs.module.css"
import {MyButton} from "../h4/common/c2-SuperButton/MyButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
            name={a.name}
            priority={a.priority}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={S.filter}>

            {mappedAffairs}

            <MyButton onClick={setAll}>All</MyButton>
            <MyButton onClick={setHigh}>High</MyButton>
            <MyButton onClick={setMiddle}>Middle</MyButton>
            <MyButton onClick={setLow}>Low</MyButton>
        </div>
    )
}

export default Affairs
