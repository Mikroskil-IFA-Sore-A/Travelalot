import { useParams, Navigate, Link } from 'react-router-dom';
import { CountryEntries } from '../data';

export default function CountryPage() {
    const { continent } = useParams();
    if (!continent)
        return <Navigate to='/404' />;

    const countries = CountryEntries[continent];
    if (!countries)
        return <Navigate to='/404' />;

    return (
        <div>
            <h1>{continent.toUpperCase()}</h1>
            <ul>
                {Object.values(countries).map((c) => (
                    <li key={c.slug}>
                        <Link to={`/${continent}/${c.slug}`}>{c.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}