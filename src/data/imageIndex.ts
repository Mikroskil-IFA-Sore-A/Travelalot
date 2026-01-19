export function buildImageIndex() {
    const modules = import.meta.glob(
        '/src/assets/**/*.{jpg,jpeg,png,webp}',
        { eager: true }
    ) as Record<string, { default: string }>;

    const images: Record<
        string,
        Record<
            string,
            {
                main: string[];
                hotspots: string[];
                cuisines: string[];
            }
        >
    > = {};

    Object.entries(modules).forEach(([path, mod]) => {
        const parts = path.split('/');

        // Expected:
        // /src/assets/<continent>/<category>/<country>-<anything>.<ext>
        const assetsIndex = parts.findIndex(p => p === 'assets');
        if (assetsIndex === -1) return;

        const continent = parts[assetsIndex + 1];
        const category = parts[assetsIndex + 2];
        const filename = parts[assetsIndex + 3];

        if (!continent || !category || !filename) return;
        if (!['main', 'hotspots', 'cuisines'].includes(category)) return;

        const country = filename.split('-')[1]?.toLowerCase();
        if (!country) return;

        const fileContinent = filename.split('-')[0];
        if (fileContinent !== continent) return;

        if (!images[continent]) {
            images[continent] = {};
        }

        if (!images[continent][country]) {
            images[continent][country] = {
                main: [],
                hotspots: [],
                cuisines: []
            };
        }

        images[continent][country][category as 'main' | 'hotspots' | 'cuisines']
            .push(mod.default);
    });

    return images;
}
