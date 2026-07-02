const FooterBrand = () => {
    return (

        <div>

            <h2 className="text-3xl font-bold">
                Adhyatmik Kathayein
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-neutral-400">

                Discover timeless wisdom from the Ramayana,
                Mahabharata, Bhagavad Gita and sacred Puranas.

            </p>

            <div className="mt-8 flex gap-4">

                <button className="rounded-full border border-neutral-700 px-4 py-2">
                    YT
                </button>

                <button className="rounded-full border border-neutral-700 px-4 py-2">
                    FB
                </button>

                <button className="rounded-full border border-neutral-700 px-4 py-2">
                    IG
                </button>

                <button className="rounded-full border border-neutral-700 px-4 py-2">
                    TG
                </button>

            </div>

        </div>
    );
};

export default FooterBrand;