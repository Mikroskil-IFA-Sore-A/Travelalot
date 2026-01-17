import { useParams, Link } from 'react-router-dom';
import { getContinent } from '../data/selectors';

import NotFound from './NotFound';

export default function() {
    const { continent } = useParams();
    const data = getContinent(continent);

    if (!data)
        return <NotFound />

    return (
        <div>
            <h1>{data.slug.toUpperCase()}</h1>

            <ul>
                {Object.values(data.countries).map((c) => (
                    <li key={c.slug}>
                        <Link to={`/${data.slug}/${c.slug}`}>{c.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
