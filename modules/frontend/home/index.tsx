import React from "react";
import TopStories from "./@components/top-stories";
import BreakingNews from "./@components/breaking-news";
import CountryNews from "./@components/country-news";
import Opinion from "./@components/opinion";
import Gallery from "./@components/gallery";
import VideoGallery from "./@components/video-gallery";
import Crime from "./@components/crime";
import World from "./@components/world";
import Business from "./@components/business";
import Comments from "./@components/comments";

const Home = () => {
  return (
    <>
      <BreakingNews />
      <TopStories />
      <CountryNews />
      <Crime />
      <World />
      <Business />
      <Comments />
      <Gallery />
      <VideoGallery />
      <Opinion />
    </>
  );
};

export default Home;
