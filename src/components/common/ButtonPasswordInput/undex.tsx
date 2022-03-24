import React from 'react'

type ButtonPasswordInputPropsType = {
    title: string
    onClick: () => void
}

const ButtonPasswordInput = ({
    title,
    onClick,
}: ButtonPasswordInputPropsType) => (
    <button type="button" onClick={onClick}>
        {title}
    </button>
)

export default ButtonPasswordInput
