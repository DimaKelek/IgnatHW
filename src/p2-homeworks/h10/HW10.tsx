import React from "react";
import S from "./HW10.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import preloader from "./kappa.png"
import {MyButton} from "../h4/common/c2-SuperButton/MyButton";

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 5000)
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10
            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={S.HW10}>
                        <div className={S.preloader}>
                            <img src={preloader} alt="preloader"/>
                        </div>
                        <div className={S.title}>Hello Ignat :P</div>
                    </div>
                ) : (
                    <div className={S.HW10}>
                        <div className={S.button}>
                           <MyButton onClick={setLoading}>Set loading...</MyButton>
                        </div>
                    </div>
                )
            }
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
