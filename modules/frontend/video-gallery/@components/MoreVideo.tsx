import React from "react";
import { MdKeyboardDoubleArrowRight, MdPlayArrow } from "react-icons/md";
import AdvertiseSpace1 from "../../news/categories/@components/Advertisement_Space/AdvertiseSpace1";
import AdvertiseSpace3 from "../../news/categories/@components/Advertisement_Space/AdvertiseSpace3";
import AdvertiseSpace4 from "../../news/categories/@components/Advertisement_Space/AdvertiseSpace4";
import Link from "next/link";
import Image from "next/image";

export default function MoreVideo() {
  return (
    <div className=" mb-[35px]">
      <div className=" flex items-center gap-3  my-[26px] cursor-pointer ">
        <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px] " />
        <h1 className=" text-[28px]  font-semibold mb-0 hover:text-primary transition-all">
          আরও - ভিডিও
        </h1>
      </div>
      <div className=" grid grid-cols-[1fr_616px_295px] gap-3">
        <div>
          <AdvertiseSpace3 />
        </div>
        <div>
          {new Array(5).fill(0).map((_, i: any) => {
            const lst = i < 4;
            return (
              <Link href={"/"} className="group hover:text-inherit">
                <div
                  className={` flex gap-[12px] ${
                    lst
                      ? " mb-[26px] pb-[26px] border-b-[1px] border-gray-200 "
                      : ""
                  } `}
                >
                  <div>
                    <h1 className=" text-[20px] mb-0 font-semibold leading-[26px] line-clamp-2  group-hover:text-primary transition-all">
                      ভয়াবহ বিমান দুর্ঘটনায় যেভাবে বেঁচে গেলেন শত শত যাত্রী
                    </h1>
                    <p className=" mb-0 text-[13px]">ডিসেম্বর ২৭,২০২৩</p>
                  </div>
                  <div className="relative">
                    <MdPlayArrow className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer" />
                    <Image
                      height={221}
                      width={386}
                      alt=" video"
                      src={"/images/videoGallery/3.png"}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div>
          <AdvertiseSpace1 />
        </div>
      </div>
    </div>
  );
}
