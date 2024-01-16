import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight, MdPlayArrow } from "react-icons/md";
import AdvertiseSpace1 from "../../news/categories/@components/Advertisement_Space/AdvertiseSpace1";
import { TbPhotoShare } from "react-icons/tb";

export default function ImageGalleryTop() {
  return (
    <div>
      <div className=" grid grid-cols-[830px_1fr] gap-[26px] border-b-[1px] pb-[26px] mb-[26px]  border-gray-200">
        <Link href={"/"} className="group hover:text-inherit">
          <div className=" grid gap-[0px] relative">
            <TbPhotoShare className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer p-1" />
            <Image
              height={396}
              width={830}
              alt=" video"
              src={"/images/videoGallery/5.png"}
            />
            <div className=" bg-[#00000acc] px-[24px] py-[16px]">
              <h1 className=" text-[16px] text-white mb-0  leading-[21px] font-normal line-clamp-1 group-hover:text-primary transition-all">
                শীতের সকালে প্রায়ই কুয়াশার চাদরে ঢেকে যায় গ্রাম বাংলার প্রতিটি
                প্রান্তর। <span className=" text-primary">|</span>{" "}
                <span>ছবি: সোয়েল রানা</span>
              </h1>
            </div>
          </div>
        </Link>
        <AdvertiseSpace1 />
      </div>
      <div className=" grid grid-cols-4 gap-[26px] mb-[26px] pb-[26px] border-b-[1px] border-gray-200">
        {new Array(4).fill(
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
                যেভাবে যাত্রী সেজে গাড়িতে উঠে ছিনতাই
              </h1>
              <p className=" mb-0 text-[13px]">ডিসেম্বর ২৭,২০২৩</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
