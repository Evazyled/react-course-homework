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
    const [hide, setHide] = useState(true)
    const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsBlur(true)

        if (value.length > 10) {
            setIsValid(true)
        } else if (value.length < 10) {
            setIsValid(false)
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
                    className={
                        isValid ? style.input__success : style.input__error
                    }
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
            {!isValid && isBlur && (
                <div className={style.text__error}>
                    Пароль дожен содержать больше 10 символов
                </div>
            )}
        </label>
    )
}

export default PasswordInput
