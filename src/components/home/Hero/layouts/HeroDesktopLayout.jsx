// src/components/home/Hero/layouts/HeroDesktopLayout.jsx

import HeroContent from "../HeroContent";

const HeroDesktopLayout = ({ slide }) => {
    return (
        <div
            className="
                relative
                z-10
                hidden
                h-full
                items-center
                md:flex
            "
        >
            <div className="w-full px-8 md:px-12 lg:px-16">
                <div className="max-w-[540px]">
                    <HeroContent slide={slide} />
                </div>
            </div>
        </div>
    );
};

export default HeroDesktopLayout;