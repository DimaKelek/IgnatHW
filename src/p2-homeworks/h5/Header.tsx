import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import S from "./Nav.module.css"

function Header() {
    return (
        <div className={S.menu_box}>
            <div className={S.bubble}/>
            <NavLink to={PATH.PRE_JUNIOR}>
                <div className={S.pre_junior + " " + S.block}>
                    Pre Junior
                </div>
            </NavLink>
            <NavLink to={PATH.JUNIOR}>
                <div className={S.junior + " " + S.block}>
                    Junior
                </div>
            </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}>
                <div className={S.junior_plus + " " + S.block}>
                    Junior +
                </div>
            </NavLink>
        </div>
    )
}

export default Header
