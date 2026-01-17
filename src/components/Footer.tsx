import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center
                         bg-white border-t border-slate-200 gap-x-4 min-h-16.5 py-6 px-[max(1rem,calc(50vw-720px+1rem))]">

            <div className="flex flex-row gap-2 items-center mb-3">
                <p className="font-bold">FOLLOW:</p>
                <a href="https://github.com/Mikroskil-IFA-Sore-A"
                   rel="noopener noreferrer"
                   target="_blank"
                   className="text-md flex flex-row gap-1 items-center">
                    <FaGithub size={14} />Github
                </a>
                
            </div>

            <p className="text-sm text-gray-600 whitespace-nowrap">
                © {new Date().getFullYear()} Travelalot | Gateway to Great Destinations <br />
                Site last updated: {new Date().toISOString().split('T')[0]}
            </p>
        </footer>
    );
}
