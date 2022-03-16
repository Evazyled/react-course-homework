import React from 'react'
import TextField from '@mui/material/TextField'
import style from './AuthPage.module.scss'
import Form from '../../common/Form'
import ButtonAuth from '../../common/ButtonAuth'
import FormAuthWrapper from '../../common/FormAuthWrapper'
import PageWrapper from '../../common/PageWrapper'

const AuthPage = () => (
    <PageWrapper>
        <main className={style.content}>
            <Form>
                <FormAuthWrapper>
                    <h2>Авторизация</h2>
                    <TextField
                        id="filled-hidden-label-normal"
                        label="Имя пользователя"
                        margin="normal"
                    />
                    <TextField
                        id="filled-hidden-label-normal"
                        label="Пароль"
                        margin="normal"
                    />
                    <ButtonAuth>Войти</ButtonAuth>
                </FormAuthWrapper>
            </Form>
        </main>
    </PageWrapper>
)

export default AuthPage
