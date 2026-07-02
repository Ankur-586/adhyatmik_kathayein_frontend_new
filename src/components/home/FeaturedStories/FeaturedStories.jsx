import Container from "../../ui/Container";
import StoryGrid from "./StoryGrid";

const FeaturedStories = () => {
    return (
        <section className="py-16">

            <Container>

                <div className="mb-12 flex items-end justify-between">

                    <div>

                        <p className="text-amber-600 font-semibold uppercase tracking-wider">
                            Featured Stories
                        </p>

                        <h2 className="mt-2 text-4xl font-bold">
                            Timeless Spiritual Stories
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-2xl">
                            Explore the wisdom of Sanatan Dharma through inspiring
                            stories from the Puranas, Ramayana and Mahabharata.
                        </p>

                    </div>

                    <button className="font-semibold text-amber-600 hover:text-amber-700">
                        View All →
                    </button>

                </div>

                <StoryGrid />

            </Container>

        </section>
    );
};

export default FeaturedStories;