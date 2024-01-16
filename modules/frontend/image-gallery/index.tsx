import React from "react";
import Heading from "./@components/Heading";
import ImageGalleryTop from "./@components/ImageGalleryTop";
import BangladeshImage from "./@components/BangladeshImage";
import AdvertiseSpace2 from "../news/categories/@components/Advertisement_Space/AdvertiseSpace2";
import EntertainmentImage from "./@components/EntertainmentImage";
import MoreImage from "./@components/MoreImage";

export default function ImageGallery() {
  return (
    <div className=" container">
      <Heading />
      <ImageGalleryTop />
      <BangladeshImage />
      <AdvertiseSpace2 />
      <EntertainmentImage />
      <MoreImage />
    </div>
  );
}
