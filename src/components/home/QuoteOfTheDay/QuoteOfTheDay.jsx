// src/components/home/QuoteOfTheDay/QuoteOfTheDay.jsx

import Container from "../../ui/Container";
import quoteData from "./quoteData";

const QuoteOfTheDay = () => {
    return (
        <section className="py-20">

            <Container>

                <div
                    className="
                        rounded-[40px]
                        bg-gradient-to-r
                        from-orange-50
                        via-amber-50
                        to-yellow-50
                        px-10
                        py-20
                        text-center
                        shadow-sm
                    "
                >

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
                        Quote of the Day
                    </p>

                    <h2 className="mt-4 text-5xl">
                        ❝
                    </h2>

                    <h3 className="mx-auto mt-6 max-w-4xl text-3xl font-bold leading-relaxed">
                        {quoteData.verse}
                    </h3>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-700">
                        {quoteData.translation}
                    </p>

                    <p className="mt-8 font-semibold text-amber-700">
                        {quoteData.source}
                    </p>

                    <button
                        className="
                            mt-10
                            rounded-xl
                            bg-amber-600
                            px-8
                            py-4
                            font-semibold
                            text-white
                            transition
                            hover:bg-amber-700
                        "
                    >
                        Read Full Chapter
                    </button>

                </div>

            </Container>

        </section>
    );
};

export default QuoteOfTheDay;