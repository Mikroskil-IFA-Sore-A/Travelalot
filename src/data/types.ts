export type Country = {
    slug: string;
    name: string;
    desc: string;
    short: string;
    images: string[];
};

export type Continent = {
    slug: string;
    name: string;
    desc: string;
    countries: Record<string, Country>;
};

export type Entries = Record<string, Continent>;
