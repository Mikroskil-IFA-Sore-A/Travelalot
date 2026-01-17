import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Footer from '@/components/Footer';

export default function AppLayout() {
    return (
        <div className="transition-opacity opacity-100 duration-300">
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </div>
    );
}