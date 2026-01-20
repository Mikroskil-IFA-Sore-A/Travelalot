import { useState, useRef, useEffect } from 'react';
import { Search, TrendingUp, X, Clock, ArrowLeft } from 'lucide-react';
import { entries } from '@data/data';

interface Destination {
    continent: string;
    country: string;
    slug: string;
    popular?: boolean;
}

// Flatten entries into a searchable array
const destinations: Destination[] = Object.values(entries).flatMap(continent =>
    Object.values(continent.countries).map(country => ({
        continent: continent.name,
        country: country.name,
        slug: `/${continent.slug}/${country.slug}`,
        popular: Math.random() > 0.6
    }))
);

const RECENT_SEARCHES_KEY = 'travelalot_recent_searches';
const MAX_RECENT = 5;

export default function SearchBar() {
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileFullscreen, setIsMobileFullscreen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [recentSearches, setRecentSearches] = useState<string[]>([]);

    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Detect if mobile
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Load recent searches from memory (not localStorage to avoid artifact restrictions)
    useEffect(() => {
        // In real app, load from localStorage here
        setRecentSearches(['Japan', 'France', 'Indonesia']);
    }, []);

    // Prevent body scroll when mobile search is open
    useEffect(() => {
        if (isMobileFullscreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileFullscreen]);

    const addToRecentSearches = (countryName: string) => {
        const updated = [
            countryName,
            ...recentSearches.filter(s => s !== countryName)
        ].slice(0, MAX_RECENT);

        setRecentSearches(updated);
    };

    const clearRecentSearches = () => {
        setRecentSearches([]);
    };

    // Filter destinations
    const filteredDestinations = search.trim() === ''
        ? []
        : destinations.filter(d =>
            d.country.toLowerCase().includes(search.toLowerCase()) ||
            d.continent.toLowerCase().includes(search.toLowerCase())
        );

    const popularDestinations = destinations.filter(d => d.popular).slice(0, 6);

    const showRecent = search.trim() === '' && isOpen && recentSearches.length > 0;
    const showPopular = search.trim() === '' && isOpen && !showRecent;
    const showResults = search.trim() !== '' && filteredDestinations.length > 0;
    const showNoResults = search.trim() !== '' && filteredDestinations.length === 0;

    // Close dropdown when clicking outside (desktop only)
    useEffect(() => {
        if (isMobile) return;

        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSelectedIndex(-1);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobile]);

    const handleDestinationClick = (dest: Destination) => {
        addToRecentSearches(dest.country);
        window.location.href = dest.slug;
        closeSearch();
    };

    const handleRecentClick = (countryName: string) => {
        const dest = destinations.find(d => d.country === countryName);
        if (dest) handleDestinationClick(dest);
    };

    const closeSearch = () => {
        setIsOpen(false);
        setIsMobileFullscreen(false);
        setSearch('');
        setSelectedIndex(-1);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!isOpen) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setIsOpen(true);
                if (isMobile) setIsMobileFullscreen(true);
            }
            return;
        }

        const maxIndex = showResults
            ? filteredDestinations.length - 1
            : showRecent
                ? recentSearches.length - 1
                : showPopular
                    ? popularDestinations.length - 1
                    : -1;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => (prev < maxIndex ? prev + 1 : 0));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => (prev > 0 ? prev - 1 : maxIndex));
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            e.preventDefault();
            if (showResults) {
                handleDestinationClick(filteredDestinations[selectedIndex]!);
            } else if (showRecent) {
                handleRecentClick(recentSearches[selectedIndex]!);
            } else if (showPopular) {
                handleDestinationClick(popularDestinations[selectedIndex]!);
            }
        } else if (e.key === 'Escape') {
            closeSearch();
            inputRef.current?.blur();
        }
    };

    const clearSearch = () => {
        setSearch('');
        setSelectedIndex(-1);
        inputRef.current?.focus();
    };

    const handleMouseEnter = (index: number) => {
        setSelectedIndex(index);
    };

    const handleFocus = () => {
        setIsOpen(true);
        if (isMobile) {
            setIsMobileFullscreen(true);
        }
    };

    // Mobile fullscreen overlay
    if (isMobileFullscreen && isMobile) {
        return (
            <div className="fixed inset-0 z-9999 bg-white flex flex-col">
                {/* Mobile Search Header */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-200 bg-white sticky top-0">
                    <button
                        onClick={closeSearch}
                        className="p-2 hover:bg-gray-100 rounded-lg active:scale-95 transition-transform"
                        aria-label="Close search"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-700" />
                    </button>

                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />

                        <input
                            ref={inputRef}
                            type="search"
                            value={search}
                            onChange={e => {
                                setSearch(e.target.value);
                                setSelectedIndex(-1);
                            }}
                            onFocus={handleFocus}
                            onKeyDown={handleKeyDown}
                            placeholder="Search destinations..."
                            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 px-10 text-gray-900 placeholder-gray-500 
                     focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500
                     transition-all duration-200"
                            autoComplete="off"
                        />

                        {search && (
                            <button
                                onClick={clearSearch}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 active:scale-90 transition-all"
                                aria-label="Clear search"
                            >
                                <X size={20} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Results */}
                <div className="flex-1 overflow-y-auto overscroll-contain">
                    {/* Recent Searches */}
                    {showRecent && (
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                    <Clock className="w-4 h-4" />
                                    Recent Searches
                                </div>
                                <button
                                    onClick={clearRecentSearches}
                                    className="text-sm text-blue-600 hover:text-blue-700 font-medium active:scale-95 transition-transform"
                                >
                                    Clear
                                </button>
                            </div>
                            <div className="space-y-2">
                                {recentSearches.map((term, idx) => {
                                    const dest = destinations.find(d => d.country === term);
                                    if (!dest) return null;

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleRecentClick(term)}
                                            className={`w-full text-left p-4 rounded-xl transition-all active:scale-[0.97] ${selectedIndex === idx
                                                ? 'bg-blue-50 border-2 border-blue-200'
                                                : 'bg-gray-50 border-2 border-transparent active:bg-gray-100'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-white rounded-lg">
                                                    <Clock className="w-5 h-5 text-gray-500" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-base font-semibold text-gray-900 truncate">{dest.country}</div>
                                                    <div className="text-sm text-gray-500">{dest.continent}</div>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Popular Destinations */}
                    {showPopular && (
                        <div className="p-4">
                            <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                <TrendingUp className="w-4 h-4" />
                                Popular Destinations
                            </div>
                            <div className="space-y-2">
                                {popularDestinations.map((dest, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleDestinationClick(dest)}
                                        className={`w-full text-left p-4 rounded-xl transition-all active:scale-[0.97] ${selectedIndex === idx
                                            ? 'bg-blue-50 border-2 border-blue-200'
                                            : 'bg-gray-50 border-2 border-transparent active:bg-gray-100'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white rounded-lg">
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-base font-semibold text-gray-900 truncate">{dest.country}</div>
                                                <div className="text-sm text-gray-500">{dest.continent}</div>
                                            </div>
                                            <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-semibold whitespace-nowrap">
                                                Popular
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Search Results */}
                    {showResults && (
                        <div className="p-4">
                            <div className="mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                {filteredDestinations.length} {filteredDestinations.length === 1 ? 'Result' : 'Results'}
                            </div>
                            <div className="space-y-2">
                                {filteredDestinations.map((dest, idx) => (
                                    <button
                                        key={dest.slug}
                                        onClick={() => handleDestinationClick(dest)}
                                        className={`w-full text-left p-4 rounded-xl transition-all active:scale-[0.97] ${selectedIndex === idx
                                            ? 'bg-blue-50 border-2 border-blue-200'
                                            : 'bg-gray-50 border-2 border-transparent active:bg-gray-100'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-white rounded-lg">
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-base font-semibold text-gray-900 truncate">
                                                    {highlightMatch(dest.country, search)}
                                                </div>
                                                <div className="text-sm text-gray-500">{dest.continent}</div>
                                            </div>
                                            {dest.popular && (
                                                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-semibold whitespace-nowrap">
                                                    Popular
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* No Results */}
                    {showNoResults && (
                        <div className="p-8 text-center">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                                <Search className="w-10 h-10 text-gray-400" />
                            </div>
                            <p className="text-lg font-semibold text-gray-700 mb-2">No destinations found</p>
                            <p className="text-sm text-gray-500 mb-6">
                                Try searching for "Indonesia", "Japan", or "France"
                            </p>
                            <button
                                onClick={clearSearch}
                                className="px-6 py-2.5 bg-blue-500 text-white rounded-lg font-medium active:scale-95 transition-transform"
                            >
                                Clear Search
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Desktop/Tablet view
    return (
        <div className="relative w-full" ref={searchRef}>

            {/* Search Input */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />

                <input
                    ref={inputRef}
                    type="search"
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value);
                        setSelectedIndex(-1);
                    }}
                    onFocus={handleFocus}
                    onKeyDown={handleKeyDown}
                    placeholder="Search destinations..."
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 px-2 placeholder:opacity-0 md:placeholder:opacity-100 md:px-10 text-gray-900 placeholder-gray-500 
                     focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500
                     transition-all duration-200"
                    autoComplete="off"
                />

                {search && (
                    <button
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Clear search"
                    >
                        <X size={18} />
                    </button>
                )}
            </div>

            {/* Desktop Dropdown */}
            {isOpen && !isMobile && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">

                    {/* Recent Searches */}
                    {showRecent && (
                        <div className="p-3">
                            <div className="flex items-center justify-between px-3 py-2">
                                <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase">
                                    <Clock className="w-4 h-4" />
                                    Recent
                                </div>
                                <button
                                    onClick={clearRecentSearches}
                                    className="text-xs text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Clear
                                </button>
                            </div>
                            <div className="space-y-1">
                                {recentSearches.map((term, idx) => {
                                    const dest = destinations.find(d => d.country === term);
                                    if (!dest) return null;

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleRecentClick(term)}
                                            onMouseEnter={() => handleMouseEnter(idx)}
                                            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${selectedIndex === idx ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-700'
                                                }`}
                                        >
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-gray-400" />
                                                <div className="flex-1">
                                                    <div className="text-sm font-medium">{dest.country}</div>
                                                    <div className="text-xs text-gray-500">{dest.continent}</div>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Popular */}
                    {showPopular && (
                        <div className="p-3">
                            <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-500 uppercase">
                                <TrendingUp className="w-4 h-4" />
                                Popular
                            </div>
                            <div className="space-y-1">
                                {popularDestinations.map((dest, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleDestinationClick(dest)}
                                        onMouseEnter={() => handleMouseEnter(idx)}
                                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${selectedIndex === idx ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-700'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1">
                                                <div className="text-sm font-medium">{dest.country}</div>
                                                <div className="text-xs text-gray-500">{dest.continent}</div>
                                            </div>
                                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                                                Popular
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Results */}
                    {showResults && (
                        <div className="p-3">
                            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">
                                {filteredDestinations.length} Results
                            </div>
                            <div className="space-y-1">
                                {filteredDestinations.map((dest, idx) => (
                                    <button
                                        key={dest.slug}
                                        onClick={() => handleDestinationClick(dest)}
                                        onMouseEnter={() => handleMouseEnter(idx)}
                                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${selectedIndex === idx ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-700'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                                <div className="min-w-0">
                                                    <div className="text-sm font-medium truncate">
                                                        {highlightMatch(dest.country, search)}
                                                    </div>
                                                    <div className="text-xs text-gray-500">{dest.continent}</div>
                                                </div>
                                            </div>
                                            {dest.popular && (
                                                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                                                    Popular
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* No Results */}
                    {showNoResults && (
                        <div className="p-8 text-center">
                            <Search className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                            <p className="text-gray-600 font-medium mb-1">No destinations found</p>
                            <p className="text-gray-500 text-sm">Try "Indonesia", "Japan", or "France"</p>
                        </div>
                    )}

                    {/* Keyboard Tip */}
                    <div className="border-t border-gray-100 px-4 py-2 bg-gray-50">
                        <p className="text-center text-xs text-gray-500">
                            <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded font-mono">↑↓</kbd> navigate •
                            <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded font-mono mx-1">Enter</kbd> select •
                            <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded font-mono">Esc</kbd> close
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

// Helper function to highlight matching text
function highlightMatch(text: string, query: string) {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
        <>
            {parts.map((part, i) =>
                part.toLowerCase() === query.toLowerCase() ? (
                    <mark key={i} className="bg-yellow-200 text-gray-900 font-semibold rounded px-0.5">
                        {part}
                    </mark>
                ) : (
                    part
                )
            )}
        </>
    );
}