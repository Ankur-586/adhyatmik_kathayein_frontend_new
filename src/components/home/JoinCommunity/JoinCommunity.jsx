// src/components/home/JoinCommunity/JoinCommunity.jsx

import Container from "../../ui/Container";
import socialLinks from "./socialLinks";

const JoinCommunity = () => {
    return (
        <section className="py-20">

            <Container>

                <div
                    className="
                        rounded-[40px]
                        bg-gradient-to-r
                        from-amber-600
                        via-orange-500
                        to-yellow-500
                        px-8
                        py-20
                        text-center
                        text-white
                    "
                >

                    <p className="text-sm uppercase tracking-[0.3em] font-semibold">
                        Join Our Community
                    </p>

                    <h2 className="mt-4 text-5xl font-bold">
                        Never Miss a Spiritual Story
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
                        Receive new stories, videos, reels and daily spiritual
                        inspiration directly from Adhyatmik Kathayein.
                    </p>

                    {/* Email */}

                    <div className="mx-auto mt-10 flex max-w-xl overflow-hidden rounded-2xl bg-white">

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="
                                flex-1
                                px-6
                                py-4
                                text-black
                                outline-none
                            "
                        />

                        <button
                            className="
                                bg-black
                                px-8
                                font-semibold
                                text-white
                                transition
                                hover:bg-neutral-800
                            "
                        >
                            Subscribe
                        </button>

                    </div>

                    {/* Social */}

                    <div className="mt-10 flex justify-center gap-6">

                        {socialLinks.map((item) => (

                            <a
                                key={item.id}
                                href={item.url}
                                className="
                                    rounded-full
                                    border
                                    border-white/30
                                    px-6
                                    py-3
                                    transition
                                    hover:bg-white
                                    hover:text-black
                                "
                            >
                                {item.name}
                            </a>

                        ))}

                    </div>

                </div>

            </Container>

        </section>
    );
};

export default JoinCommunity;