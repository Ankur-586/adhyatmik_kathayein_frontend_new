// src/components/home/Hero/HeroContent.jsx

const HeroContent = ({ slide }) => {
    return (
        <div className="max-w-2xl">

            {/* Badge */}
            <span className="inline-flex rounded-full bg-amber-500/20 px-4 py-2 text-sm font-semibold text-amber-300 backdrop-blur-sm">
                {slide.badge}
            </span>

            {/* Title */}
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
                {slide.title}
            </h1>

            {/* Description */}
            <p className="mt-6 text-base leading-7 text-gray-200 lg:text-lg">
                {slide.description}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

                <button
                    className="
                        rounded-xl
                        bg-amber-600
                        px-7
                        py-3.5
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:bg-amber-700
                    "
                >
                    {slide.primaryButton.text}
                </button>

                <button
                    className="
                        rounded-xl
                        border
                        border-white/40
                        bg-white/10
                        px-7
                        py-3.5
                        font-semibold
                        text-white
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:bg-white/20
                    "
                >
                    {slide.secondaryButton.text}
                </button>

            </div>

        </div>
    );
};

export default HeroContent;