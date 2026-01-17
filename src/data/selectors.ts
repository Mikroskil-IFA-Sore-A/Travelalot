import { entries } from './data';
import type { Continent, Country } from './types';

export function getContinent(slug?: string): Continent | null {
    if (!slug) return null;
    return entries[slug] ?? null;
}

export function getCountry(continentSlug?: string, countrySlug?: string): Country | null {
    const continent = getContinent(continentSlug);
    if (!continent || !countrySlug)
        return null;

    return continent.countries[countrySlug] ?? null;
}