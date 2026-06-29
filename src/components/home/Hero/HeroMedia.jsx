// src/components/home/Hero/HeroMedia.jsx

const HeroMedia = ({ image, title }) => {
    return (
        <img
            src={image}
            alt={title}
            className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                select-none
            "
            draggable="false"
        />
    );
};

export default HeroMedia;