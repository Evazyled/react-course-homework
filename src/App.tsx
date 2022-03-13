import React from 'react'
import Card from './Card'
import './App.css'
import AuthPage from './components/pages/AuthPage/AuthPage'

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
        <AuthPage />
    </div>
)

export default App
