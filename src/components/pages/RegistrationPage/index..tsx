import React, { useEffect, useState } from 'react'
import style from './RegistrationPage.module.scss'
import Form from '../../common/Form'
import ButtonAuth from '../../common/ButtonAuth'
import PageWrapper from '../../common/PageWrapper'
import Input from '../../common/Form/Input'
import PasswordInput from '../../common/Form/PasswordInput'

const RegistrationPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [isEqualPassword, setIsEqualPassword] = useState(false)

    const submitHandler = () => {
        if (password === repeatPassword) {
            setIsEqualPassword(false)
        } else if (password !== repeatPassword) {
            setIsEqualPassword(true)
        }
    }

    // useEffect(() => {
    //     if (password.length >= 10) {
    //         setHasPasswordError(false)
    //     } else if (password.length > 0) {
    //         setHasPasswordError(true)
    //     }
    // }, [password])
    return (
        <PageWrapper>
            <Form title="Регистрация">
                <Input
                    title="name"
                    id="name"
                    placeholder="Введите имя"
                    value={name}
                    setValue={setName}
                />
                <Input
                    title="Email"
                    id="email"
                    placeholder="Введите почту"
                    value={email}
                    setValue={setEmail}
                />
                <PasswordInput
                    title="Password"
                    id="password"
                    placeholder="Введите пароль"
                    value={password}
                    setValue={setPassword}
                    type="password"
                />
                <PasswordInput
                    title=" Repeat Password"
                    id="repeat_password"
                    placeholder="Повторите пароль"
                    value={repeatPassword}
                    setValue={setRepeatPassword}
                    type="password"
                />
                {/* {hasPasswordError && (
                    <div>пароль должен содеражть больше 10 символов</div>
                )} */}

                {isEqualPassword && <div>Введённые пароли не совпадают</div>}

                <ButtonAuth title="Регистрация" onClick={submitHandler} />
            </Form>
        </PageWrapper>
    )
}

export default RegistrationPage
