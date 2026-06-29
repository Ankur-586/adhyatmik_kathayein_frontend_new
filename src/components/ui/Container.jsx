// src/components/ui/Container.jsx

const containerSizes = {
    narrow: "max-w-5xl",      // Articles
    default: "max-w-7xl",     // Most sections
    wide: "max-w-[1600px]",   // Hero
    full: "max-w-full",       // Full-width layouts
};

const Container = ({
    children,
    size = "default",
    className = "",
}) => {
    return (
        <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${containerSizes[size]} ${className}`}>
            {children}
        </div>
    );
};

export default Container;