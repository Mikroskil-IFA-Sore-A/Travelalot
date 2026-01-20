import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountry } from '../data/selectors';
import { ArrowLeft, ChevronLeft, ChevronRight, Utensils } from 'lucide-react';
import CountryNotFound from './CountryNotFound';

export default function CountryPage() {
    const { continent, country } = useParams();
    const data = getCountry(continent, country);
    const [currentSlide, setCurrentSlide] = useState(0);

    if (!data) {
        return <CountryNotFound continent={continent} slug={country} />;
    }

    const hotspots = data.hotspots ?? [];
    const hasHotspots = hotspots.length > 0;

    const currentHotspot = hasHotspots ? hotspots[currentSlide] : undefined;

    const nextSlide = () =>
        setCurrentSlide((prev) =>
            prev === hotspots.length - 1 ? 0 : prev + 1
        );

    const prevSlide = () =>
        setCurrentSlide((prev) =>
            prev === 0 ? hotspots.length - 1 : prev - 1
        );

    return (
        <div className="w-full pb-16 animate-in fade-in duration-500">

            {/* Header */}
            <div className="container mx-auto px-4 mt-6 mb-8">
                <Link
                    to={`/${continent}`}
                    className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6"
                >
                    <ArrowLeft size={16} className="mr-2" />
                    Back to {continent}
                </Link>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                            {data.name}
                        </h1>
                        <p className="text-lg text-gray-700 border-l-4 border-blue-500 pl-4 mb-6">
                            {data.desc}
                        </p>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative">
                            {data.heroImage ? (
                                <img
                                    src={data.heroImage}
                                    alt={data.name}
                                    loading='lazy'
                                    decoding='async'
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400">
                                    No Image
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hotspots */}
            {currentHotspot && (
                <section className="bg-gray-900 py-12 text-white my-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8">Hotspots</h2>

                        <div className="relative w-full aspect-video md:aspect-[21/9] bg-black rounded-xl overflow-hidden shadow-2xl">
                            {currentHotspot.image ? (
                                <img
                                    src={currentHotspot.image}
                                    alt={currentHotspot.name}
                                    loading='lazy'
                                    decoding='async'
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400">
                                    No Image
                                </div>
                            )}

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                                <h3 className="text-2xl font-bold mb-1">
                                    {currentHotspot.name}
                                </h3>
                                <p className="text-gray-300">
                                    {currentHotspot.desc}
                                </p>
                            </div>

                            {hotspots.length > 1 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 p-3 rounded-full"
                                        aria-label='previous slide'
                                    >
                                        <ChevronLeft />
                                    </button>

                                    <button
                                        onClick={nextSlide}
                                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 p-3 rounded-full"
                                        aria-label='next slide'
                                    >
                                        <ChevronRight />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Cuisines */}
            {data.cuisines && data.cuisines.length > 0 && (
                <section className="container mx-auto px-4 mb-12">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                        <Utensils className="text-blue-500" />
                        Local Cuisines
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {data.cuisines.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm h-40"
                            >
                                <div className="w-1/3 bg-gray-200">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            loading='lazy'
                                            decoding='async'
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                                            No Image
                                        </div>
                                    )}
                                </div>

                                <div className="w-2/3 p-4 flex flex-col justify-center">
                                    <h3 className="font-bold text-lg">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-1">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
