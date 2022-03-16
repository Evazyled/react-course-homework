import React from 'react'

import style from './ProductCard.module.scss'

type ProductCardProps = {
    price: number
    title: string
    imgPath: string
}

const ProductCard: React.FC<ProductCardProps> = ({
    price,
    title,

    imgPath,
}) => {
    const [isAdd, setIsAdd] = React.useState('Добавить в козину')

    const addToBasket = () => {
        setIsAdd('Товар в корзине')
    }
    const removeFromBasket = () => {
        setIsAdd('Добавить в козину')
    }

    return (
        <div className={style.card_content}>
            <div className={style.card_inner}>
                <img src={imgPath} alt="" />
                <div className={style.card_buttons}>
                    <button className="" type="button" onClick={addToBasket}>
                        {isAdd}
                    </button>
                    <button
                        className=""
                        type="button"
                        onClick={removeFromBasket}
                    >
                        Убрать из корзины
                    </button>
                </div>
            </div>
            <div> {title}</div>
            <div> {`₽ ${price}`}</div>
        </div>
    )
}

export default ProductCard
