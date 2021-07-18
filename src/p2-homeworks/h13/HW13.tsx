import React from "react";
import S from "./HW13.module.css"
import {Request} from "./Request/Request";

export const HW13: React.FC<any> = props => {

    return (
        <div className={S.box}>
            <hr/>
            <span>homework 13</span>
            <Request />
        </div>
    )
}