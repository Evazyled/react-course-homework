import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import AuthPage from './components/pages/AuthPage'

import HomePage from './components/pages/HomePage'
import RegistrationPage from './components/pages/RegistrationPage/index.'
import AuthContainer from './containers/AuthContainer'
import RegistrationContainer from './containers/RegistrationContainer'

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
    </BrowserRouter>
)

export default App
