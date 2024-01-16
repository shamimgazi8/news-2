import React from "react";
import HeadingWithOverlay from "./@components/HeadingWithOverlay";
import CartMedium from "./@components/CartMedium";
import HeadingWithOption from "./@components/HeadingWithOption";
import NewsSearch from "./@components/NewsSearch";
import Image from "next/image";
import AdvertiseSpace1 from "./@components/Advertisement_Space/AdvertiseSpace1";
import AdvertiseSpace2 from "./@components/Advertisement_Space/AdvertiseSpace2";
import NewsList from "./@components/NewsList";

const Categories = () => {
  return (
    <section>
      <div className=" container ">
        <HeadingWithOption />
        <div className=" grid grid-cols-[3fr_1fr]   mt-[26px] gap-[13px] border-b-[1px] border-gray-200 pb-[26px] ">
          <div className="grid grid-cols-[2fr_1fr] gap-[26px] self-start border-gray-200  border-r-[1px] pr-[13px]">
            <HeadingWithOverlay />
            <CartMedium />
            <div className="col-span-2 border-t-[1px] border-gray-200 pt-[26px]">
              <div className=" grid grid-cols-3 gap-[26px]">
                {new Array(3).fill(<CartMedium />)}
              </div>
            </div>
          </div>
          <div>
            <div>
              <AdvertiseSpace1 />
              <NewsSearch />
            </div>
          </div>
        </div>
        <AdvertiseSpace2 />
        <NewsList />
      </div>
    </section>
  );
};

export default Categories;
