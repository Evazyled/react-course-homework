import React from 'react'

import style from './Form.module.scss'

const Form: React.FC = ({ children }) => (
    <div className={style.content}>{children}</div>
)

export default Form
