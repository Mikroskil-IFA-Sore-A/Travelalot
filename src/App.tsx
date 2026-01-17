import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import About from '@pages/About';
import ContinentPage from '@pages/ContinentPage';
import CountryPage from '@pages/CountryPage';
import AppLayout from '@layouts/AppLayout';

export default function App() {
    return (
        <>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path=":continent" element={<ContinentPage />} />
                    <Route path=":continent/:country" element={<CountryPage />} />
                </Route>
            </Routes>
        </>
    );
}