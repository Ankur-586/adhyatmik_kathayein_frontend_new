// src/components/home/BrowseCategories/CategoryCard.jsx

const CategoryCard = ({ category }) => {
    return (
        <article
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                cursor-pointer
                shadow-sm
            "
        >

            <img
                src={category.image}
                alt={category.title}
                className="
                    h-56
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                "
            />

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/10
                    to-transparent
                "
            />

            <div
                className="
                    absolute
                    bottom-5
                    left-5
                "
            >
                <h3
                    className="
                        text-2xl
                        font-bold
                        text-white
                    "
                >
                    {category.title}
                </h3>
            </div>

        </article>
    );
};

export default CategoryCard;