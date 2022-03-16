import React from 'react'

import style from './FormAuthWrapper.module.scss'

const FormAuthWrapper: React.FC = ({ children }) => (
    <div className={style.content}>{children}</div>
)

export default FormAuthWrapper
