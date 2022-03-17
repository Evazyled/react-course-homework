import React from 'react'

import style from './ButtonProductCard.module.scss'

type ButtonProductCardProps = {
    onClick: () => void
}

const ButtonProductCard: React.FC<ButtonProductCardProps> = ({
    onClick,
    children,
}) => (
    <button className={style.buttonProductCard} type="button" onClick={onClick}>
        {children}
    </button>
)

export default ButtonProductCard
