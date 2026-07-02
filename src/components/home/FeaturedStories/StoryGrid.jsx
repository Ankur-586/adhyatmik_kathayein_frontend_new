import StoryCard from "./StoryCard";
import storyData from "./storyData";

const StoryGrid = () => {
    return (
        <div
            className="
                grid
                gap-8
                sm:grid-cols-2
                lg:grid-cols-3
            "
        >
            {storyData.map((story) => (
                <StoryCard
                    key={story.id}
                    story={story}
                />
            ))}
        </div>
    );
};

export default StoryGrid;