// src/components/home/Hero/Hero.jsx

import HeroDesktop from "./HeroDesktop";
import HeroMobile from "./HeroMobile";

const Hero = () => {
    return (
        <>
            {/* Desktop & Tablet */}
            <div className="hidden lg:block">
                <HeroDesktop />
            </div>

            {/* Mobile */}
            <div className="block lg:hidden">
                <HeroMobile />
            </div>
        </>
    );
};

export default Hero;

// import Container from "../../ui/Container";
// import HeroCarousel from "./HeroCarousel";

// const Hero = () => {
//     return (
//         <section className="py-8 lg:py-10">
//             <Container size="wide">
//                 <HeroCarousel />
//             </Container>
//         </section>
//     );
// };

// export default Hero;