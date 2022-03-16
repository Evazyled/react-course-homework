import React from 'react'

import style from './ButtonAuth.module.scss'

const ButtonAuth: React.FC = ({ children }) => (
    <button className={style.content} type="button">
        {children}
    </button>
)

export default ButtonAuth
