import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import S from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(100);

    return (
        <div className={S.ranges}>
            <hr/>
            homeworks 11
            {/*should work (должно работать)*/}
            <span>Start value: {value1}</span>
            <span>End value: {value2}</span>
            <div className={S.range}>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div className={S.doubleRange}>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRangeFirst={setValue1}
                    onChangeRangeSecond={setValue2}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
