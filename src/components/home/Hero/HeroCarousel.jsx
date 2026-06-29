// src/components/home/Hero/HeroCarousel.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import HeroSlide from "./HeroSlide";
import heroSlides from "./heroSlides";

const HeroCarousel = () => {
    return (
        <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            slidesPerView={1}
            loop={true}
            effect="fade"
            speed={900}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
        >
            {heroSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <HeroSlide slide={slide} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroCarousel;