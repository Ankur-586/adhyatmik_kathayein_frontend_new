// src/components/home/Hero/HeroSlide.jsx

import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";

const HeroSlide = ({ slide }) => {
    
    return (

        /* ====================================================
            Hero Container

            relative        → Positioning context for overlay and image.
            h-[58vh]        → Hero occupies 58% of the viewport height.
            min-h-[480px]   → Prevents the Hero from becoming too short.
            max-h-[540px]   → Prevents the Hero from becoming too tall.
            overflow-hidden → Clips the image inside rounded corners.
            rounded-[36px]  → Premium rounded appearance.
            ==================================================== */

        <div className="relative h-[58vh] min-h-[480px] max-h-[540px] overflow-hidden rounded-[36px]">

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