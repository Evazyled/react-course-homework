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

    const handler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!event.target.value) {
            return setEmailError('Email не может быть пустым')
        }
        if (!re.test(String(event.target.value).toLowerCase())) {
            return setEmailError('Некоректный Email')
        }

        return setEmailError('')
    }

    return (
        <label className={style.wrapper} htmlFor={id}>
            <span>{title}</span>
            <input
                id={id}
                placeholder={placeholder}
                value={value}
                type={type}
                onChange={handler}
            />
            <div className={style.text__error}>{emailError}</div>
        </label>
    )
}

export default Input
