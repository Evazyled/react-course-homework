import React from 'react'
import style from './Form.module.scss'

type FormPropsType = {
    title: string
}

const Form: React.FC<FormPropsType> = ({ children, title }) => (
    <div className={style.form}>
        <div className={style.form__title}>{title}</div>
        <form className={style.form__body}>{children}</form>
    </div>
)

export default Form
