type Props = {
    continent?: string;
    slug?: string;
};

export default function({ continent, slug }: Props) {
    return (
        <main>
            <h1>Destination not available</h1>

            <p>
                We couldn't find information for{" "}
                <strong>{slug}</strong>
                {continent && <> in <strong>{continent}</strong></>}.
            </p>

            {continent && (
                <>
                    <h2>Popular destinations in {continent}</h2>
                </>
            )}
        </main>
    );
}
