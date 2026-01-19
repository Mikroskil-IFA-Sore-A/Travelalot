import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getContinent } from '../data/selectors';
import NotFound from './NotFound';

export default function ContinentPage() {
    const { continent } = useParams();
    const data = getContinent(continent);

    if (!data) return <NotFound />;

    const carouselCountries = Object.values(data.countries).filter(
        (c) => c.images && c.images.length > 0
    );

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (carouselCountries.length === 0) return;

        const interval = setInterval(() => {
            setCurrent((prev) =>
                (prev + 1) % carouselCountries.length
            );
        }, 4000);

        return () => clearInterval(interval);
        }, [carouselCountries.length]);

    const prev = () => {
        setCurrent((prev) =>
            prev === 0 ? carouselCountries.length - 1 : prev - 1
        );
    };

    const next = () => {
        setCurrent((prev) => (prev + 1) % carouselCountries.length);
    };

    return (
        <main className="max-w-7xl mx-auto px-4 py-10">
            {/* Overview */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                    <h1 className="text-3xl font-bold mb-4 uppercase">
                        {data.name}
                    </h1>

                    <p className="text-gray-600 text-lg">
                        {data.desc}
                    </p>
                </div>

                {/* Tailwind Carousel */}
                <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow">
                    {carouselCountries.map((c, index) => (
                        <img
                            key={c.slug}
                            src={c.images[0]}
                            alt={c.name}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                                index === current
                                    ? 'opacity-100'
                                    : 'opacity-0'
                            }`}
                        />
                    ))}

                    {/* Controls */}
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
                        aria-label="Previous"
                    >
                        ‹
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
                        aria-label="Next"
                    >
                        ›
                    </button>
                </div>
            </section>

            {/* Destinations */}
            <section className="mt-14">
                <h2 className="text-xl font-semibold mb-6">
                    Popular Destinations
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {Object.values(data.countries).map((c) => (
                        <article
                            key={c.slug}
                            className="bg-white rounded-xl shadow hover:shadow-md transition"
                        >
                            {c.images[0] && (
                                <img
                                    src={c.images[0]}
                                    alt={c.name}
                                    className="h-48 w-full object-cover rounded-t-xl"
                                    loading="lazy"
                                />
                            )}

                            <div className="p-4">
                                <Link
                                    to={`/${data.slug}/${c.slug}`}
                                    className="font-semibold text-lg text-gray-900 hover:underline"
                                >
                                    {c.name}
                                </Link>

                                <p className="text-gray-600 mt-2 text-sm">
                                    {c.shortDesc}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
