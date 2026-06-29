// src/components/home/Hero/HeroSlide.jsx

import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";

const HeroSlide = ({ slide }) => {
    return (
        <div className="relative h-[65vh] min-h-[500px] overflow-hidden rounded-[36px] lg:h-[72vh] xl:h-[75vh]">

            {/* Background Image */}
            <HeroMedia
                image={slide.image}
                title={slide.title}
            />

            {/* Dark Overlay */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black/75
                    via-black/45
                    to-black/10
                "
            />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">

                <div className="w-full px-8 md:px-12 lg:px-16">

                    <HeroContent slide={slide} />

                </div>

            </div>

        </div>
    );
};

export default HeroSlide;