/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { ChangeEvent, useEffect, useState } from 'react'
import ButtonPasswordInput from '../../ButtonPasswordInput/undex'

import style from '../Input/Input.module.scss'

type PasswordInputPropsType = {
    title: string
    id: string
    placeholder: string
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    type?: 'text' | 'password'
}

const PasswordInput = ({
    title,
    id,
    placeholder,
    value,
    setValue,
    type = 'password',
}: PasswordInputPropsType) => {
    const handler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const [isValid, setIsValid] = useState(false)
    const [isBlur, setIsBlur] = useState(false)
    const [borderColor, setBorderColor] = useState('')
    const [hide, setHide] = useState(true)
    const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsBlur(true)

        if (value.length > 10) {
            setIsValid(true)
            setBorderColor(style.input__success)
        } else if (value.length > 0) {
            setIsValid(false)
            setBorderColor(style.input__error)
        }
        console.log(event)
    }

    const showHidePassword = () => {
        setHide((prev) => !prev)
    }

    return (
        <label className={style.wrapper} htmlFor={id}>
            <span>{title}</span>
            <div>
                <input
                    className={borderColor}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    type={hide ? 'password' : 'text'}
                    onChange={handler}
                    onBlur={blurHandler}
                />

                <ButtonPasswordInput
                    onClick={showHidePassword}
                    title={hide ? 'Показать пароль' : 'Скрыть пароль'}
                />
            </div>
        </label>
    )
}

export default PasswordInput
