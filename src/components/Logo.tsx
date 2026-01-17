import { Link } from 'react-router-dom';

export default function() {
    return (
        <Link className='flex items-center gap-2' to='/'>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-white"
                >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900">Travelalot</span>
        </Link>
    );  
}