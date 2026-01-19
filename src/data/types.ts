export type Country = {
    slug: string;
    name: string;
    desc: string;
    shortDesc: string;
    images: string[];
    heroImage?: string;
    hotspots?: Hotspot[];
    cuisines?: Cuisine[];
};

export type Continent = {
    slug: string;
    name: string;
    desc: string;
    countries: Record<string, Country>;
};

export type Hotspot = {
    name: string;
    desc: string;
    image?: string;
};

export type Cuisine = {
    name: string;
    desc: string;
    image?: string;
};

export type Entries = Record<string, Continent>;
