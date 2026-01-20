import { MapPin, Star } from 'lucide-react';
import { Country } from '@/data/types';

interface CardProps {
    entries: Country | null;
}

export default function Card(props: CardProps) {

    const rating = (Math.random() * 5).toFixed(1)
    const review = Math.floor(Math.random() * 1000)
    const price = [
        '$1,099', '$899', '$1,299', '$1,199', '$599', '$3,000', '$1,000', '$399', '$1,999'
    ]
    const index = Math.floor(Math.random() * price.length)

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="relative h-48 overflow-hidden">
                <img src={props.entries?.images[0]}
                    alt={props.entries?.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        {props.entries?.name}
                    </h3>
                </div>
                <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{rating}</span>
                    <span className="text-gray-500 text-sm">({review} reviews)</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                    {props.entries?.shortDesc}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-bold">{price[index]}</span>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
}
