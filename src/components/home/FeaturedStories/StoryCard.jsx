const StoryCard = ({ story }) => {
    return (
        <article
            className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
            "
        >
            <img
                src={story.image}
                alt={story.title}
                className="
                    aspect-[4/3]
                    w-full
                    object-cover
                "
            />

            <div className="p-6">

                <span className="text-sm font-semibold text-amber-600">
                    {story.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold">
                    {story.title}
                </h3>

                <button className="mt-6 font-semibold text-amber-600 hover:text-amber-700">
                    Read Story →
                </button>

            </div>

        </article>
    );
};

export default StoryCard;