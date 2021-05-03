import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import S from "./Nav.module.css"

function Header() {
    return (
        <div className={S.menu_box}>
            <div className={S.bubble}/>
            <NavLink to={PATH.PRE_JUNIOR} activeClassName={S.active}>
                <div className={S.pre_junior + " " + S.block}>Pre Junior</div>
            </NavLink>
            <NavLink to={PATH.JUNIOR} activeClassName={S.active}>
                <div className={S.junior + " " + S.block}>Junior</div>
            </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} activeClassName={S.active}>
                <div className={S.junior_plus + " " + S.block}>Junior +</div>
            </NavLink>
        </div>
    )
}

export default Header
