import { Search } from 'lucide-react';

import { useState } from 'react';

export default function() {
    const [search, setSearch] = useState('');
    const [list, setList] = useState([
        "Go to the store",
        "Wash the dishes",
        "Learn some code",
    ]);

    return (
        <>
            <Search className="fixed translate-1/3 text-gray-400" 
                    size={24} />
            
            <input type="text"
                   placeholder="Search destinations..."
                   className="w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </>
    );
}