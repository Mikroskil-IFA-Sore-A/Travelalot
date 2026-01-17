import { useState } from 'react';

import Logo from '@components/Logo';
import SearchBar from '@components/SearchBar';
import NavLink from '@components/NavLink';

export default function() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
            <div className="grid items-center
                            grid-cols-[min-content_1fr_min-content] gap-x-4 justify-center h-16.5 py-3 px-[max(1rem,calc(50vw-720px+1rem))]">
                
                <div className='px-3'>
                    <Logo />
                </div>

                <div className="">
                    <SearchBar />
                </div>

                {/* Dekstop Navbar */}
                <nav className="hidden lg:flex items-center gap-2">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>

                {/* Burger button (utk media with kecil) unlike bootstrap tailwind harus implementasi sendiri */}
                <button onClick={() => setOpen(!open)}
                        className="lg:hidden inline-flex items-center justify-center rounded-md px-3 py-3 text-gray-900 border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 max-w-min"
                        aria-label="Toggle Menu" /* Entah kenapa wajib ada title */>
                    
                    {/* Berdasarkan docs tailwind 'sr-only' truly hide unlike 'hidden' which remove the element from DOM */}
                    <span className="sr-only">Open Menu</span>
                    
                    {/* Icon (ada animasi nya) aku curi dari website org lain */}
                    <div className="relative h-5 w-6 cursor-pointer">
                        <span className={`absolute left-0 top-0 h-0.5 w-full rounded-2xl bg-current transition-transform duration-300
                              ${open ? "translate-y-2 rotate-45" : ""}`}
                        />
                        <span className={`absolute left-0 top-2 h-0.5 w-full rounded-2xl bg-current transition-opacity duration-300
                              ${open ? "opacity-0" : "opacity-100"}`}
                        />
                        <span className={`absolute left-0 top-4 h-0.5 w-full rounded-2xl bg-current transition-transform duration-300
                              ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out
                           ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <nav className="flex flex-col gap-1 px-4 py-3">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </div>

        </header>
    );
}