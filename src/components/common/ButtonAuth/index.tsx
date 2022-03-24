import React from 'react'

import style from './ButtonAuth.module.scss'

type ButtonAuthPropsType = {
    title: string
    onClick: () => void
}

const ButtonAuth = ({ title, onClick }: ButtonAuthPropsType) => (
    <button className={style.content} type="button" onClick={onClick}>
        {title}
    </button>
)

export default ButtonAuth
