import Hero from "../../components/home/Hero/Hero";
import FeaturedStories from "../../components/home/FeaturedStories/FeaturedStories";
import FeaturedVideos from "../../components/home/FeaturedVideos/FeaturedVideos";
import BrowseCategories from "../../components/home/BrowseCategories/BrowseCategories";
import LatestShorts from "../../components/home/LatestShorts/LatestShorts";
import QuoteOfTheDay from "../../components/home/QuoteOfTheDay/QuoteOfTheDay";
import JoinCommunity from "../../components/home/JoinCommunity/JoinCommunity";

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedStories />
            <FeaturedVideos />
            <BrowseCategories />
            <LatestShorts />
            <QuoteOfTheDay />
            <JoinCommunity />
        </>
    );
};

export default Home;