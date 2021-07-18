import React from 'react'
import HW12 from "../../h12/HW12";
import {HW13} from "../../h13/HW13";
import S from "../../h12/HW12.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import {ThemeType} from "../../h12/bll/themeReducer";

function JuniorPlus() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.themes.theme)
    return (
        <div className={`${S.screen} ${S[theme + '-screen']}`}>
            <HW12/>
            <HW13/>
        </div>
    )
}

export default JuniorPlus

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз