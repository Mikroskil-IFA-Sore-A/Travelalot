import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountry } from '../data/selectors'; 
import { MapPin, ArrowLeft, ChevronLeft, ChevronRight, Plane, Utensils } from 'lucide-react';

import CountryNotFound from './CountryNotFound';

export default function CountryPage() {
    const { continent, country } = useParams();
    const data = getCountry(continent, country);

    const [currentSlide, setCurrentSlide] = useState(0);

    if (!data) {
        return <CountryNotFound continent={continent} slug={country} />;
    }

    const images = data.images || [];
    const hasImages = images.length > 0;

    const mockCuisines = [
        { name: "Traditional Dish", desc: "A famous local delicacy served in restaurants.", img: images[0] },
        { name: "Street Food", desc: "Popular snacks found in the city markets.", img: images[1] },
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    return (
        <div className="w-full pb-16 animate-in fade-in duration-500">

            <div className="container mx-auto px-4 mt-6 mb-8">
                <Link to={`/${continent}`} className="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors mb-6">
                    <ArrowLeft size={16} className="mr-2" /> Back to <span className="capitalize ml-1">{continent}</span>
                </Link>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="lg:w-1/2">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full tracking-wider mb-3">
                            Destination
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            {data.name}
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 border-l-4 border-blue-500 pl-4">
                            {data.desc}
                        </p>
                        <div className="flex items-center text-gray-500 font-medium">
                            <MapPin className="text-red-500 mr-2" size={20} />
                            Located in <span className="capitalize ml-1">{continent}</span>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative">
                            {hasImages ? (
                                <img 
                                    src={images[0]} 
                                    alt={data.name} 
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400 flex-col">
                                    <MapPin size={48} className="mb-2 opacity-50" />
                                    <span>No Image Available</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {hasImages && images.length > 1 && (
                <section className="bg-gray-900 py-12 text-white my-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                             Hotspots
                        </h2>
                        
                        <div className="relative w-full aspect-video md:aspect-[21/9] bg-black rounded-xl overflow-hidden group shadow-2xl">
                            <img 
                                src={images[currentSlide]} 
                                alt="Gallery" 
                                className="w-full h-full object-cover transition-all duration-500"
                            />

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    Explore {data.name}
                                </h3>
                                <p className="text-gray-300">Gallery Image {currentSlide + 1} of {images.length}</p>
                            </div>

                            <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-md transition-all">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full backdrop-blur-md transition-all">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </section>
            )}

            <section className="container mx-auto px-4 mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                    <Utensils className="text-blue-500" /> Local Cuisines
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {mockCuisines.map((item, idx) => (
                        <div key={idx} className="flex bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-40">
                            <div className="w-1/3 bg-gray-200 relative">
                                {item.img && <img src={item.img} alt={item.name} className="w-full h-full object-cover" />}
                            </div>
                            <div className="w-2/3 p-4 flex flex-col justify-center">
                                <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-6 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                            <Plane className="rotate-45" /> Fly to {data.name}
                        </h3>
                        <p className="text-blue-100">Get the best deals for your trip to {data.name}, {continent}.</p>
                    </div>
                    <div className="text-center md:text-right bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <p className="text-sm text-blue-200 mb-1">Starting from</p>
                        <div className="text-3xl font-bold mb-3">IDR 5.500.000</div>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-6 rounded-lg transition-colors w-full">
                            Book Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
