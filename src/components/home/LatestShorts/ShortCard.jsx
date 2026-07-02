const ShortCard = ({ short }) => {
    return (
        <article
            className="
                min-w-[220px]
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-sm
                transition
                hover:-translate-y-2
                hover:shadow-xl
            "
        >
            <img
                src={short.thumbnail}
                alt={short.title}
                className="
                    aspect-[9/16]
                    w-full
                    object-cover
                "
            />

            <div className="p-4">

                <h3 className="font-semibold">
                    {short.title}
                </h3>

            </div>

        </article>
    );
};

export default ShortCard;