import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";
import { IoMdPlayCircle } from "react-icons/io";
import { MdKeyboardDoubleArrowRight, MdPlayArrow } from "react-icons/md";
import VideogalleryTop from "./@components/VideogalleryTop";
import Heading from "./@components/Heading";
import AdvertiseSpace2 from "../news/categories/@components/Advertisement_Space/AdvertiseSpace2";
import SelectedVideo from "./@components/SelectedVideo";
import BangladeshVideo from "./@components/BangladeshVideo";
import Entertainment from "./@components/Entertainment";
import MoreVideo from "./@components/MoreVideo";

export default function VideoGallery() {
  const Data = [
    {
      date: "ডিসেম্বর ২৭,২০২৩",
      title: "নৌকা ও ঈগল ঘিরে বিভক্ত আওয়ামী লীগ, সমানতালে চলছে প্রচারণা",
      desc: "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
    },
    {
      title:
        "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই ব্যর্থ হয়ে যাবে: কমিশনার আনিছুর",
      desc: "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
    },
    {
      title:
        "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই ব্যর্থ হয়ে যাবে: কমিশনার আনিছুর",
      desc: "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
    },
  ];
  return (
    <>
      <div className=" container">
        <Heading />
      </div>
      <VideogalleryTop />
      <div className=" container">
        <SelectedVideo />
        <AdvertiseSpace2 />
        <BangladeshVideo />
        <Entertainment />
        <MoreVideo />
      </div>
    </>
  );
}
