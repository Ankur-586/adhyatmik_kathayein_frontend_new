// src/components/home/Hero/layouts/HeroMobileLayout.jsx

const HeroMobileLayout = ({ slide }) => {
    return (
        <div
            className="
                absolute
                inset-0
                z-10
                flex
                items-end
                p-5
                md:hidden
            "
        >
            <div className="w-full">

                <span className="inline-flex rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-300">
                    {slide.badge}
                </span>

                <h2 className="mt-3 text-2xl font-bold text-white">
                    {slide.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-200">
                    {slide.description}
                </p>

                <div className="mt-5 flex flex-col gap-3">

                    <button className="rounded-xl bg-amber-600 px-5 py-3 font-semibold text-white">
                        {slide.primaryButton.text}
                    </button>

                    <button className="rounded-xl border border-white/40 bg-white/10 px-5 py-3 font-semibold text-white">
                        {slide.secondaryButton.text}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default HeroMobileLayout;