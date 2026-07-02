import Container from "../../ui/Container";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
    return (
        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
            <Container size="wide">
                <HeroCarousel />
            </Container>
        </section>
    );
};

export default Hero;