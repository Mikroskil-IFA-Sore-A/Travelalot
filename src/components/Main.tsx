export default function({ children}: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col items-center
                         grid-cols-[min-content_1fr_min-content_min-content] gap-x-4 py-3 px-[max(1rem,calc(50vw-720px+1rem))]">
            {children}
        </main>
    );
}