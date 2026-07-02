import Container from "../../ui/Container";
import ShortsRow from "./ShortsRow";

const LatestShorts = () => {
    return (
        <section className="py-16">

            <Container>

                <div className="mb-10 flex items-end justify-between">

                    <div>

                        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
                            Latest Shorts
                        </p>

                        <h2 className="mt-2 text-4xl font-bold">
                            Spiritual Shorts
                        </h2>

                    </div>

                    <button className="font-semibold text-amber-600">
                        View All →
                    </button>

                </div>

                <ShortsRow />

            </Container>

        </section>
    );
};

export default LatestShorts;