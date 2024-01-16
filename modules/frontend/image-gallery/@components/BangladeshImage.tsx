import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight, MdPlayArrow } from "react-icons/md";
import AdvertiseSpace1 from "../../news/categories/@components/Advertisement_Space/AdvertiseSpace1";
import { TbPhotoShare } from "react-icons/tb";

export default function BangladeshImage() {
  return (
    <div>
      <div>
        <div className=" flex items-center gap-3 h-[36px] mb-[26px] cursor-pointer mt-[26px] ">
          <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px] " />
          <h1 className=" text-[28px]  font-semibold mb-0 hover:text-primary transition-all">
            বাংলাদেশ
          </h1>
        </div>
        <div className=" grid grid-cols-[935px_1fr] border-b-[1px] pb-[26px] mb-[26px] border-gray-200 ">
          <div className=" grid grid-cols-[615px_1fr] pr-[13px] mr-[13px] border-r-[1px] border-gray-200 gap-[26px]">
            <Link href={"/"} className="group hover:text-inherit">
              <div className=" grid gap-[25px] relative">
                <TbPhotoShare className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer p-1" />
                <Image
                  height={396}
                  width={700}
                  alt=" video"
                  src={"/images/videoGallery/5.png"}
                />
                <h1 className=" text-[28px] mb-0 font-semibold leading-[36px] line-clamp-2 group-hover:text-primary transition-all">
                  শর্ষেখেতের মাঝে বাঁশের খুঁটিতে বসে আছে একটি পাখি
                </h1>
              </div>
            </Link>
            <div>
              <Link href={"/"} className="group hover:text-inherit">
                <div className=" grid gap-[12px] relative">
                  <TbPhotoShare className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer p-1" />
                  <Image
                    height={396}
                    width={700}
                    alt=" video"
                    src={"/images/videoGallery/5.png"}
                  />
                  <h1 className=" text-[20px] mb-0 font-semibold leading-[26px] line-clamp-2  group-hover:text-primary transition-all">
                    শর্ষেখেতের মাঝে বাঁশের খুঁটিতে বসে আছে একটি পাখি
                  </h1>
                  <p className=" mb-0 text-[13px]">ডিসেম্বর ২৭,২০২৩</p>
                </div>
              </Link>
            </div>
            <div className=" grid grid-cols-3 col-span-2 gap-[26px] border-t-[1px] border-gray-200 pt-[20px]">
              {new Array(3).fill(
                <Link href={"/"} className="group hover:text-inherit">
                  <div className=" grid gap-[12px] relative">
                    <TbPhotoShare className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer p-1" />
                    <Image
                      height={396}
                      width={700}
                      alt=" video"
                      src={"/images/videoGallery/5.png"}
                    />
                    <h1 className=" text-[20px] mb-0 font-semibold leading-[26px] line-clamp-2  group-hover:text-primary transition-all">
                      হলুদ শর্ষে ফুলে ছেয়ে আছে চারপাশ। সেলফিতে মুহূর্ত ধরে
                      রাখছেন দুই নারী।
                    </h1>
                    <p className=" mb-0 text-[13px]">ডিসেম্বর ২৭,২০২৩</p>
                  </div>
                </Link>
              )}
            </div>
          </div>
          <div>
            <AdvertiseSpace1 />
          </div>
        </div>
      </div>
    </div>
  );
}
