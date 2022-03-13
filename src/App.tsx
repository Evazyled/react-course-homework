import React from 'react'
import Card from './Card'
import './App.css'

const App = () => (
    <div className="wrapper">
        <Card
            title="Спортивный костюм Adidas Original"
            price={5000}
            imgPath="/Adidas-1.jpg"
        />
        <Card
            title="Кроссовки Adidas"
            price={8000}
            imgPath="/adidas-boots.jpg"
        />
    </div>
)

export default App
