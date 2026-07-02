import Container from "../../ui/Container";
import VideoGrid from "./VideoGrid";

const FeaturedVideos = () => {
    return (
        <section className="py-16">

            <Container>

                <div className="mb-10 flex items-end justify-between">

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
                            Featured Videos
                        </p>

                        <h2 className="mt-2 text-4xl font-bold">
                            Watch & Learn
                        </h2>

                        <p className="mt-3 max-w-2xl text-gray-600">
                            Explore spiritual wisdom through beautifully narrated videos.
                        </p>

                    </div>

                    <button className="font-semibold text-amber-600">
                        View All →
                    </button>

                </div>

                <VideoGrid />

            </Container>

        </section>
    );
};

export default FeaturedVideos;