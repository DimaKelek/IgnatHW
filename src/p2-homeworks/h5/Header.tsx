import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import S from "./Nav.module.css"

function Header() {
    return (
        <div className={S.menu}>
            <div className={S.menu_container}>
                <div className={S.bubble}/>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={S.active}>
                    <div className={`${S.pre_junior} ${S.button}`}>Pre Junior</div>
                </NavLink>
                <NavLink to={PATH.JUNIOR} activeClassName={S.active}>
                    <div className={`${S.junior} ${S.button}`}>Junior</div>
                </NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={S.active}>
                    <div className={`${S.junior_plus} ${S.button}`}>Junior +</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Header
