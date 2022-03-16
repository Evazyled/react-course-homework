import React from 'react'

import TextField from '@mui/material/TextField'
import style from './RegistrationPage.module.scss'
import Form from '../../common/Form'
import FormAuthWrapper from '../../common/FormAuthWrapper'
import ButtonAuth from '../../common/ButtonAuth'
import PageWrapper from '../../common/PageWrapper'

const RegistrationPage = () => (
    <PageWrapper>
        <main className={style.content}>
            <Form>
                <FormAuthWrapper>
                    <h2>Регистрация</h2>
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
                    <ButtonAuth>Зарегистрироваться</ButtonAuth>
                </FormAuthWrapper>
            </Form>
        </main>
    </PageWrapper>
)

export default RegistrationPage
