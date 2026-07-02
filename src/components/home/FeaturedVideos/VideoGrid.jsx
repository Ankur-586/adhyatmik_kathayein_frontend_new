import VideoCard from "./VideoCard";
import videoData from "./videoData";

const VideoGrid = () => {
    return (
        <div className="grid gap-8 md:grid-cols-2">
            {videoData.map((video) => (
                <VideoCard
                    key={video.id}
                    video={video}
                />
            ))}
        </div>
    );
};

export default VideoGrid;