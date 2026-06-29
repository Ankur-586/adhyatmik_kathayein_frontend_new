// src/components/home/Hero/Hero.jsx

import Container from "../../ui/Container";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
    return (
        <section className="py-8 lg:py-10">
            <Container>
                <HeroCarousel />
            </Container>
        </section>
    );
};

export default Hero;