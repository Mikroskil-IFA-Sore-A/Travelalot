export type CountryType = {
    slug: string;
    name: string;
    desc: string;
    images: string[];
};

export const CountryEntries: Record<string, Record<string, CountryType>> = {
    africa: {
        egypt: {
            slug: "egypt",
            name: "Egypt",
            desc: "Egypt offers a rich blend of ancient wonders (Pyramids, Nile cruises, Luxor temples) and vibrant culture, \
            driven by its unique history, friendly people, Red Sea diving, and growing infrastructure",
            images: []
        }
    }
}