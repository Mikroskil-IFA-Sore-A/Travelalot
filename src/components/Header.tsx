import { useState } from 'react';
import { ChevronDown, MapPin, Globe } from 'lucide-react';

import Logo from '@components/Logo';
import SearchBar from '@components/SearchBar';
import NavLink from '@components/NavLink';

import { entries } from '@data/data';

export default function () {
    const [open, setOpen] = useState(false);
    const [mobileDestOpen, setMobileDestOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
            <div className="grid items-center
                            grid-cols-[min-content_1fr_min-content] gap-x-4 justify-center h-16.5 py-3 px-[max(1rem,calc(50vw-720px+1rem))]">

                <div className='px-3'>
                    <Logo />
                </div>

                <SearchBar />

                {/* Dekstop Navbar */}
                <nav className="hidden lg:flex items-center gap-2">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>

                    <div className="relative group">
                        <button className="px-3 py-2 hover:bg-gray-100 rounded-md flex items-center gap-1 transition-colors">
                            Destinations
                            <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                        </button>

                        <div className="absolute left-[-600%] top-full mt-2 w-screen max-w-5xl bg-white border border-gray-200 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {Object.values(entries).map(continent => (
                                    <div key={continent.slug} className="space-y-3">
                                        <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1">{continent.name}</h3>
                                        <ul className="space-y-1">
                                            {Object.values(continent.countries).map(country => (
                                                <li key={country.slug}>
                                                    <a
                                                        href={`/${continent.slug}/${country.slug}`}
                                                        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                                                    >
                                                        {country.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
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
                    <NavLink to="/about">About</NavLink>

                    <div className="border-t border-gray-200 mt-2 pt-2">
                        <button
                            onClick={() => setMobileDestOpen(!mobileDestOpen)}
                            className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                            <span>Destinations</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDestOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Mobile Destinations Content */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out
        ${mobileDestOpen ? 'max-h-[60vh] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="pl-4 pr-2 py-2 space-y-4 overflow-y-auto max-h-[55vh] scrollbar-thin scrollbar-thumb-gray-300">
                                {Object.values(entries).map(continent => (
                                    <div key={continent.slug} className="space-y-1">
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider sticky top-0 bg-white py-1">
                                            {continent.name}
                                        </div>
                                        <div className="space-y-1">
                                            {Object.values(continent.countries).map(country => (
                                                <a
                                                    key={country.slug}
                                                    href={`/${continent.slug}/${country.slug}`}
                                                    onClick={() => {
                                                        setOpen(false);
                                                        setMobileDestOpen(false);
                                                    }}
                                                    className="block px-3 py-2 text-sm text-gray-700 active:bg-blue-50 active:text-blue-600 rounded-md transition-colors"
                                                >
                                                    {country.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </header>
    );
}