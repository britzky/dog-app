import { Routes, Route } from 'react-router';
import { Dog } from '../pages/dog/Dog.jsx'
import { Home } from '../pages/home/Home.jsx'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dog" element={<Dog />} />
        </Routes>
    )
}