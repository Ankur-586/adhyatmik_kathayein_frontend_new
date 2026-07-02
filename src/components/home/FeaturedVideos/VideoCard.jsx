const VideoCard = ({ video }) => {
    return (
        <article className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-xl">

            <div className="relative">

                <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="aspect-video w-full object-cover"
                />

                {/* Play Button */}
                <button
                    className="
                        absolute
                        left-1/2
                        top-1/2
                        flex
                        h-16
                        w-16
                        -translate-x-1/2
                        -translate-y-1/2
                        items-center
                        justify-center
                        rounded-full
                        bg-white/90
                        text-2xl
                        shadow-lg
                    "
                >
                    ▶
                </button>

                <span className="absolute bottom-4 right-4 rounded bg-black/70 px-2 py-1 text-xs text-white">
                    {video.duration}
                </span>

            </div>

            <div className="p-6">

                <h3 className="text-2xl font-bold">
                    {video.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                    {video.views}
                </p>

            </div>

        </article>
    );
};

export default VideoCard;