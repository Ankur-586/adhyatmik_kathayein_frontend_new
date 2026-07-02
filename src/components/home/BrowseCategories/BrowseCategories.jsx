// src/components/home/BrowseCategories/BrowseCategories.jsx

import Container from "../../ui/Container";
import CategoryGrid from "./CategoryGrid";

const BrowseCategories = () => {
    return (
        <section className="py-16">

            <Container>

                <div className="mb-12 flex items-end justify-between">

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
                            Browse Categories
                        </p>

                        <h2 className="mt-2 text-4xl font-bold">
                            Explore Sacred Scriptures
                        </h2>

                        <p className="mt-3 max-w-2xl text-gray-600">
                            Discover timeless wisdom from the Ramayana,
                            Mahabharata, Bhagavad Gita, Puranas and many
                            other sacred texts.
                        </p>

                    </div>

                    <button
                        className="
                            font-semibold
                            text-amber-600
                            hover:text-amber-700
                        "
                    >
                        View All →
                    </button>

                </div>

                <CategoryGrid />

            </Container>

        </section>
    );
};

export default BrowseCategories;