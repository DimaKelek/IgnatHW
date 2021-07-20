import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import S from "./SuperRange.module.css";
import {Slider} from "@material-ui/core";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value?: number | number[]
};

const SuperRange: React.FC<SuperRangePropsType> = props => {
    const {onChangeRange, value, ...restProps} = props

    const onChangeCallback = (e: ChangeEvent<{}>, value: number | number[]) => {
        onChangeRange && onChangeRange(value as number);
    }

    return (
        <div className={S.range}>
            <Slider
                value={value}
                onChange={onChangeCallback}
            />
        </div>
    );
}

export default SuperRange;
