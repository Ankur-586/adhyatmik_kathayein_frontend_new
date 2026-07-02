import ShortCard from "./ShortCard";
import shortsData from "./shortsData";

const ShortsRow = () => {
    return (
        <div className="flex gap-6 overflow-x-auto pb-2">

            {shortsData.map((short) => (
                <ShortCard
                    key={short.id}
                    short={short}
                />
            ))}

        </div>
    );
};

export default ShortsRow;