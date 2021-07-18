import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, ThemeType} from "./bll/themeReducer";

function HW12() {
    const themes: ThemeType[] = ["dark", "red", "some"]
    const theme = useSelector<AppStoreType, ThemeType>(state => state.themes.theme)
    const dispatch = useDispatch()

    const changeThemeHandler = (theme: ThemeType) => {
        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>homeworks 12</span>
            <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={changeThemeHandler}
            />
            <div />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
