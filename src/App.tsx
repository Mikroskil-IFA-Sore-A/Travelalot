import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContinentPage from './pages/ContinentPage';
import CountryPage from './pages/CountryPage';
import NotFound from './pages/NotFound';

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/:continent'>
                    <Route index element={<ContinentPage />} />
                    <Route path=':country' element={<CountryPage />} />
                </Route>
                <Route path='404' element={<NotFound />} />
            </Routes>
        </>
    );
}