import React from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'
import Login from './views/auth/login/login'
import Register from './views/auth/register/register'
import Landing from './views/landing/landing'
import { AnimatePresence } from 'framer-motion';


const AnimatedRoutes = () => {
    const location = useLocation()

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Landing/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
