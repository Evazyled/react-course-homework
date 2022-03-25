import React, { ChangeEvent, useState } from 'react'
import style from './Input.module.scss'

type InputPropsType = {
    title: string
    id: string
    placeholder: string
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    type?: 'text' | 'password'
}

const Input = ({
    title,
    id,
    placeholder,
    value,
    setValue,
    type = 'text',
}: InputPropsType) => {
    const [emailError, setEmailError] = useState('')
    const [isBlur, setIsBlur] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const [borderColor, setBorderColor] = useState('')

    const handler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        setIsBlur(true)

        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!event.target.value) {
            setIsValid(false)
            setEmailError('Email не может быть пустым')
        } else if (!re.test(String(event.target.value).toLowerCase())) {
            setIsValid(false)
            setEmailError('Некоректный Email')
        } else {
            setIsValid(true)
        }
    }

    return (
        <label className={style.wrapper} htmlFor={id}>
            <span>{title}</span>
            <input
                className={isValid ? style.input__success : style.input__error}
                id={id}
                placeholder={placeholder}
                value={value}
                type={type}
                onChange={handler}
                onBlur={blurHandler}
            />
            {!isValid && isBlur && (
                <div className={style.text__error}>{emailError}</div>
            )}
        </label>
    )
}

export default Input
