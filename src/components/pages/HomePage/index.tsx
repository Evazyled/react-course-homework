import React from 'react'
import PageWrapper from '../../common/PageWrapper'
import ProductCard from '../../common/ProductCard'
import style from './HomePage.module.scss'

const HomePage = () => (
    <PageWrapper>
        <main className={style.content}>
            <ProductCard
                price={5000}
                title="Спортивный костюм Adidas"
                imgPath="/Adidas-1.jpg"
            />

            <ProductCard
                price={7000}
                title="Кроссовки Adidas Original"
                imgPath="adidas-boots.jpg"
            />
        </main>
    </PageWrapper>
)

export default HomePage
