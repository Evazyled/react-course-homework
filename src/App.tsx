import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthContainer from './containers/AuthContainer'
import RegistrationContainer from './containers/RegistrationContainer'
import HomePageContainer from './containers/HomePageContainer'

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePageContainer />} />
            <Route path="/login" element={<AuthContainer />} />
            <Route path="/registration" element={<RegistrationContainer />} />
        </Routes>
    </BrowserRouter>
)

export default App
