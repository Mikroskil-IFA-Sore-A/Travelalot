export type Country = {
    slug: string;
    name: string;
    desc: string;
    images: string[];
};

export type Continent = {
    slug: string;
    countries: Record<string, Country>;
};

export type Entries = Record<string, Continent>;
