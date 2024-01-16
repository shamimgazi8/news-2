import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight, MdPlayArrow } from "react-icons/md";
import { TbPhotoShare } from "react-icons/tb";

export default function EntertainmentImage() {
  return (
    <div>
      <div className=" flex items-center gap-3  my-[26px] cursor-pointer ">
        <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px] " />
        <h1 className=" text-[28px]  font-semibold mb-0 hover:text-primary transition-all">
          বিনোদন
        </h1>
      </div>
      <Link href={"/"} className="group hover:text-inherit">
        <div className=" bg-gradient-to-t from-black  w-full h-[470px] flex justify-end flex-col  mt-[28px] relative">
          <TbPhotoShare className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer p-1" />
          <Image
            height={13}
            width={1300}
            alt=" video"
            src={"/images/videoGallery/2.png"}
            className="h-full w-full absolute object-cover mix-blend-overlay "
          />
          <div className=" m-[24px] flex flex-col gap-[10px] absolute">
            <h1 className=" text-[28px] font-semibold text-[#FFF] mb-0 group-hover:text-primary transition-all line-clamp-2">
              নতুন বছরে বলিউডে বাজছে কোন তারকা জুটির বিয়ের সানাই
            </h1>
            <p className=" mb-0 text-[13px] leading-[17px] text-white">
              ডিসেম্বর ২৭,২০২৩
            </p>
          </div>
        </div>
      </Link>
      <div className=" flex items-center gap-3  my-[26px] cursor-pointer ">
        <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px] " />
        <h1 className=" text-[28px]  font-semibold mb-0 hover:text-primary transition-all">
          বিনোদন
        </h1>
      </div>
      <div className=" grid grid-cols-[1fr_1fr] gap-[26px] mb-[26px] border-b-[1px] border-gray-200 pb-[60px]">
        <Link href={"/"} className="group hover:text-inherit">
          <div className=" bg-gradient-to-t from-black  w-full h-full flex justify-end flex-col  relative">
            <TbPhotoShare className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer p-1" />
            <Image
              height={13}
              width={1300}
              alt=" video"
              src={"/images/videoGallery/4.png"}
              className="h-full w-full absolute object-cover mix-blend-overlay "
            />
            <div className=" m-[24px] flex flex-col gap-[10px] absolute">
              <h1 className=" text-[28px] font-semibold text-[#FFF] mb-0 group-hover:text-primary transition-all line-clamp-2">
                নির্বাচন থেকে সরে দাঁড়ালেন জাপার প্রার্থী, জানালেন চাপ ও হুমকির
                কথা
              </h1>
              <p className=" mb-0 text-[13px] leading-[17px] text-white">
                ডিসেম্বর ২৭,২০২৩
              </p>
            </div>
          </div>
        </Link>
        <div className="grid grid-cols-2 grid-rows-2 gap-[26px]">
          {new Array(4).fill(
            <Link href={"/"} className="group hover:text-inherit">
              <div className=" grid gap-[12px] relative">
                <TbPhotoShare className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer p-1" />
                <Image
                  height={396}
                  width={700}
                  alt=" video"
                  src={"/images/videoGallery/3.png"}
                />
                <h1 className=" text-[20px] mb-0 font-semibold leading-[26px] line-clamp-2  group-hover:text-primary transition-all">
                  বিশ্বের শীর্ষ আয় করা শত সিনেমার তালিকায় ভারতের যে তিন সিনেমা
                </h1>
                <p className=" mb-0 text-[13px]">ডিসেম্বর ২৭,২০২৩</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
