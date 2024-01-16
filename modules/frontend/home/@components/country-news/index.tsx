import CartMedium from "@/modules/frontend/news/categories/@components/CartMedium";

import React from "react";

import CartSmall from "../crime/@components/CartSmall";

import AdvertiseSpace1 from "@/modules/frontend/news/categories/@components/Advertisement_Space/AdvertiseSpace1";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";

const topStoriesData = [
  {
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
const CountryNews = () => {
  return (
    <section className=" pb-0">
      <div className=" container mb-[26px] pb-[26px] border-b-[1px] border-gray-200">
        <div className=" flex items-center gap-3 h-[36px] mb-[26px] cursor-pointer">
          <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px]" />
          <Link href="/">
            <h1 className=" text-[28px]  font-semibold mb-0 hover:text-primary duration-300">
              দেশের খবর
            </h1>
          </Link>
        </div>
        <div className=" grid grid-cols-[2fr_1fr_1fr] ">
          <div className=" border-r-[1px] border-gray-200 pr-[13px] mr-[13px]">
            <CartMedium />
          </div>
          <div className=" grid  border-r-[1px] border-gray-200 pr-[13px] mr-[13px] ">
            <CartSmall />
            <div className=" border-b-[1px] border-gray-200 mb-[13px] pb-[13px]"></div>
            <CartSmall />
          </div>
          <div>
            {/* <NewsSearch /> */}
            <AdvertiseSpace1 />
            <div>
              <p>News Search</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryNews;
{
  /* <section className=" pb-0">
<div className="container border-b-[1px] border-gray-200 pb-[26px] mb-[26px]">
  <div className=" flex items-center gap-3 h-[36px] mb-[26px] cursor-pointer">
    <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px]" />
    <Link href="/">
      <h1 className=" text-[28px]  font-semibold mb-0 hover:text-primary duration-300">
        দেশের খবর
      </h1>
    </Link>
  </div>
  <div className="grid grid-cols-[1fr_308px] gap-5">
    <div className="grid grid-cols-3 gap-3 border-r pr-3">
      {topStoriesData?.map((item: any, i: any) => {
        const isFirst = i == 0;
        const isSecond = i == 1;
        return (
          <BlogCard
            key={i}
            data={item}
            classes={{
              root: isFirst
                ? "col-span-2 row-span-2 border-r pr-3"
                : isSecond
                ? "border-b pb-4"
                : "mt-3",
              imageWrapper: isFirst
                ? "mb-4 md:!h-[350px]"
                : "!mb-4 md:!h-[190px]",
              imageStyle: isFirst
                ? "!h-full object-cover"
                : "h-full object-cover",
              title: isFirst ? "text-28px " : "text-xl !mb-0",
              desc: isFirst ? "mb-3" : "hidden",
              date: isFirst ? "" : "hidden",
            }}
          />
        );
      })}
    </div>
    <div>test</div>
  </div>
</div>
</section> */
}
