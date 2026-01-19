export function buildImageIndex() {
    const modules = import.meta.glob('../assets/**/*.jpg', {
        eager: true
    }) as Record<string, { default: string }>;

    const images: Record<string, Record<string, string[]>> = {};

    Object.entries(modules).forEach(([path, mod]) => {
        const file = path.split('/').pop();
        if (!file) return;

        const parts = file.split('-');
        if (parts.length < 2) return;

        const continent = parts[0] as string;
        const country = parts[1] as string;

        if (!images[continent]) {
            images[continent] = {};
        }

        if (!images[continent][country]) {
            images[continent][country] = [];
        }

        images[continent][country].push(mod.default);
    });

    return images;
}
