import React from "react";
import Crime from "../home/@components/crime";
import AdvertiseSpace2 from "../news/categories/@components/Advertisement_Space/AdvertiseSpace2";
import NewsTilesWide from "../news/search/@components/NewsTilesWideSearch";
import AdvertiseSpace1 from "../news/categories/@components/Advertisement_Space/AdvertiseSpace1";

export default function MostReadPage() {
  return (
    <div className=" container ">
      <Crime />
      <div className=" mb-[26px] pb-[26px] border-b-[1px] border-gray-200">
        <AdvertiseSpace2 />
      </div>
      <div className=" flex justify-end">
        <div>
          <div className=" grid grid-cols-[616px_300px] gap-[27px]">
            <div>
              {new Array(5).fill(0).map((_, i: any) => {
                const lst = i < 4;
                return (
                  <div
                    className={`${
                      lst
                        ? " pb-[16px] mb-[16px] border-b-[1px] border-gray-200 "
                        : ""
                    }`}
                  >
                    <NewsTilesWide />
                  </div>
                );
              })}
            </div>
            <div>
              <AdvertiseSpace1 />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mb-[20px] mt-[40px]">
        <button className="px-[24px] py-[12px] border-[1px] text-[15px] text-black font-medium hover:bg-primary transition-all hover:text-white">
          আরও দেখুন
        </button>
      </div>
    </div>
  );
}
