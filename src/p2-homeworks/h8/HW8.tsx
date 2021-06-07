import React, {useState} from 'react'
import {Check18AC, homeWorkReducer, SortDownAC, SortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import S from './HW8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((ch: UserType) => (
        <div className={S.user} key={ch._id}>
            <div className={S.name}>
                {ch.name}
            </div>
            <div className={S.age_box}>
                <div className={S.age}>{ch.age}</div>
            </div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortDownAC()))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, Check18AC()))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            <div className={S.HW}>
                {finalPeople}
                <div className={S.button}><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div className={S.button}><SuperButton onClick={sortDown}>sort Down</SuperButton></div>
                <div className={S.button}><SuperButton onClick={check18}>check 18</SuperButton></div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
