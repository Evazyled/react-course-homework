import React, { useEffect, useState } from 'react'
import style from './AuthPage.module.scss'
import Form from '../../common/Form'
import ButtonAuth from '../../common/ButtonAuth'

import PageWrapper from '../../common/PageWrapper'
import Input from '../../common/Form/Input'

const AuthPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hasError, setHasError] = useState(false)
    const submitHandler = () => {
        if (password.length > 10) {
            setHasError(false)
        } else {
            setHasError(true)
        }
    }
    const checkPassword = () => {
        if (password.length > 10) {
            setHasError(false)
        } else {
            setHasError(true)
        }
    }
    useEffect(checkPassword, [password])
    return (
        <PageWrapper>
            <Form title="Авторизация">
                <Input
                    title="Email"
                    id="email"
                    placeholder="Введите почту"
                    value={email}
                    setValue={setEmail}
                />
                <Input
                    title="Password"
                    id="password"
                    placeholder="Введите пароль"
                    value={password}
                    setValue={setPassword}
                    type="password"
                />
                {hasError && (
                    <div>пароль должен содеражть больше 10 символов</div>
                )}
                <ButtonAuth title="Войти" onClick={submitHandler} />
            </Form>
        </PageWrapper>
    )
}

export default AuthPage
