import React from "react";
import { MdKeyboardDoubleArrowRight, MdPlayArrow } from "react-icons/md";
import AdvertiseSpace1 from "../../news/categories/@components/Advertisement_Space/AdvertiseSpace1";
import Image from "next/image";
import Link from "next/link";

export default function BangladeshVideo() {
  return (
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
              <MdPlayArrow className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer" />
              <Image
                height={396}
                width={700}
                alt=" video"
                src={"/images/videoGallery/1.png"}
              />
              <h1 className=" text-[28px] mb-0 font-semibold leading-[36px] line-clamp-2 group-hover:text-primary transition-all">
                ২০২৩ - আট বছরে সবচেয়ে দূষিত বায়ুর বছর
              </h1>
            </div>
          </Link>
          <div>
            <Link href={"/"} className="group hover:text-inherit">
              <div className=" grid gap-[12px] relative">
                <MdPlayArrow className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer" />
                <Image
                  height={396}
                  width={700}
                  alt=" video"
                  src={"/images/videoGallery/1.png"}
                />
                <h1 className=" text-[20px] mb-0 font-semibold leading-[26px] line-clamp-2  group-hover:text-primary transition-all">
                  যেভাবে যাত্রী সেজে গাড়িতে উঠে ছিনতাই
                </h1>
                <p className=" mb-0 text-[13px]">ডিসেম্বর ২৭,২০২৩</p>
              </div>
            </Link>
          </div>
          <div className=" grid grid-cols-3 col-span-2 gap-[26px] border-t-[1px] border-gray-200 pt-[20px]">
            {new Array(3).fill(
              <Link href={"/"} className="group hover:text-inherit">
                <div className=" grid gap-[12px] relative">
                  <MdPlayArrow className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer" />
                  <Image
                    height={396}
                    width={700}
                    alt=" video"
                    src={"/images/videoGallery/1.png"}
                  />
                  <h1 className=" text-[20px] mb-0 font-semibold leading-[26px] line-clamp-2  group-hover:text-primary transition-all">
                    যেভাবে যাত্রী সেজে গাড়িতে উঠে ছিনতাই
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
  );
}
