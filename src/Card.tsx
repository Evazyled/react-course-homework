import React from 'react'

type CardProps = {
    price: number
    title: string
    imgPath: string
}

const Card: React.FC<CardProps> = ({
    price,
    title,

    imgPath,
}) => {
    const [count, setCount] = React.useState(0)

    const addToBasket = () => {
        setCount(count + 1)
    }
    const removeFromBasket = () => {
        if (count > 0) setCount(count - 1)
    }

    return (
        <div className="cardStyle" style={{ border: '1px solid black' }}>
            <div className="content">
                <header>{`Товаров в корзине: ${count}`}</header>
                <img src={imgPath} alt="" width={300} height={300} />
                <div className="cardBtn">
                    <button className="" type="button" onClick={addToBasket}>
                        Добавить в корзину
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

export default Card
