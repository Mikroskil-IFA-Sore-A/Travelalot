import { useParams } from 'react-router-dom';
import { getCountry } from '../data/selectors';

import CountryNotFound from './CountryNotFound';

export default function() {
    const { continent, country } = useParams();
    const data = getCountry(continent, country);

    if (!data)
        return <CountryNotFound continent={continent} slug={country} />

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.desc}</p>
        </div>
    );
}
