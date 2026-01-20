type Props = {
    continent?: string;
    slug?: string;
};

export default function({ continent, slug }: Props) {
    return (
        <div className='flex flex-col items-center justify-center h-150'>
            <h1 className='text-6xl font-bold'>Destination not available</h1>
            <h3 className="text-lg text-gray-500 max-w-md mt-4">
                We couldn't find information for{" "}
                <strong>{slug}</strong>
                {continent && <> in <strong>{continent}</strong></>}.
            </h3>
        </div>
    );
}
