import { useParams, Navigate } from 'react-router-dom';
import { CountryEntries } from '../data';

export default function CountryPage() {
    const { continent, country } = useParams();
    if (!continent || !country)
        return <Navigate to='/404' />;

    const data = CountryEntries[continent]?.[country];
    if (!data)
        return <Navigate to='/404' />;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.desc}</p>

            {data.images.map((src) => (
                <img src={src} alt={data.name} />
            ))}
        </div>
    )
}