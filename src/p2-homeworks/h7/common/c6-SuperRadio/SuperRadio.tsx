import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import S from '../../HW7.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = props => {
    const {type, name, options, value, onChange, onChangeOption, ...restProps} = props

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                onChange={onChangeCallback}
                value={o}
                name={name}
                checked={o === value}

                {...restProps}
            />
            <span className={S.fakeRadio}/>
            { o }
        </label>
    )) : []

    return (
        <div className={S.radio_box}>{mappedOptions}</div>
    )
}

export default SuperRadio
