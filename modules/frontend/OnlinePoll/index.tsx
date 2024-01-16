"use client";
import { Radio } from "antd";
import Image from "next/image";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import AdvertiseSpace1 from "../news/categories/@components/Advertisement_Space/AdvertiseSpace1";
import AdvertiseSpace2 from "../news/categories/@components/Advertisement_Space/AdvertiseSpace2";

export default function OnlinePoolPage() {
  return (
    <div className=" container">
      <div>
        <h1 className=" mb-0 text-[42px] font-semibold leading-[57px]">
          অনলাইন ভোট
        </h1>
        <div className=" flex gap-[10px] items-center mt-3">
          <p className=" mb-0 text-base">রাজধানী</p>
          <BsDot className="text-[#FE0000] text-[30px]" />
          <p className=" mb-0 text-base">জেলা</p>
          <BsDot className="text-[#FE0000] text-[30px]" />
          <p className=" mb-0 text-base">করোনাভাইরাস</p>
          <BsDot className="text-[#FE0000] text-[30px]" />
          <p className=" mb-0 text-base">অপরাধ</p>
        </div>
      </div>
      <div className=" grid grid-cols-4 mt-[40px] gap-[26px] pb-[40px]  border-b-[1px] border-gray-200">
        {new Array(3).fill(
          <div className=" flex flex-col gap-[15px]">
            <div>
              <Image
                height={190}
                width={295}
                src={"/images/home/world1.png"}
                alt="crime"
              />
            </div>
            <div className=" flex gap-[5px] items-center ">
              <p className=" text-[13px] mb-0 text-[#FE0000]">অর্থনীতি </p>
              <GoDotFill className=" text-[12px] text-[#424242]" />
              <p className=" text-[13px] mb-0 text-[#828282]">মুদ্রাস্ফীতি</p>
            </div>
            <h1 className=" mb-0 text-[16px] text-[#424242] font-normal hover:text-primary duration-300">
              দেশে এখন ঋণ দেওয়ার ক্ষেত্রে সর্বোচ্চ ১১ দশমিক ৮৯ শতাংশ সুদ আরোপ
              করতে পারবে ব্যাংকগুলো। এতে বিনিয়োগে নেতিবাচক প্রভাব পড়বে বলে আপনি
              মনে করেন কি?
            </h1>

            <div className=" w-full flex flex-col gap-[15px]">
              <div className=" w-full rounded h-[30px] bg-[#FDEEEC] flex items-center p-3 justify-between ">
                <Radio value={1}>হ্যাঁ</Radio>
                <p className=" mb-0">100%</p>
              </div>
              <div className=" w-full rounded h-[30px] bg-[#FDEEEC] flex items-center p-3 justify-between ">
                <Radio value={1}>না</Radio>
                <p className=" mb-0">100%</p>
              </div>
              <div className=" w-full rounded h-[30px] bg-[#FDEEEC] flex items-center p-3 justify-between ">
                <Radio value={1}>মন্তব্য নেই</Radio>
                <p className=" mb-0">100%</p>
              </div>
            </div>
            <div className=" w-full">
              <Link href={"/"}>
                <button className=" bg-[#FE0000] h-[40px] text-white w-full  py-[10px] rounded font-bold duration-300 hover:bg-gray-400 text-center">
                  Vote
                </button>
              </Link>
            </div>
          </div>
        )}
        <AdvertiseSpace1 />
      </div>
      <div className=" mb-[26px] border-gray-200 border-b-[1px]">
        <AdvertiseSpace2 />
      </div>
      <div className=" flex items-center gap-3 h-[36px] mb-[26px] cursor-pointer">
        <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px]" />
        <h1 className=" text-[28px]  font-semibold mb-0">ফলাফল</h1>
      </div>
      <div className=" mb-[40px]">
        {new Array(5).fill(0).map((_, i: any) => {
          const lst = i < 4;
          return (
            <div
              className={` grid grid-cols-[200px_1fr] gap-4 ${
                lst ? "border-b-[1px] border-gray-200 mb-[26px] pb-[26px]" : ""
              } `}
            >
              <div>
                <p className=" text-[18px] leading-[25px]">৩০ ডিসেম্বর ২০২৩</p>
              </div>
              <div className=" grid grid-cols-[400px_1fr] gap-3">
                <div className=" grid  gap-3">
                  <div>
                    <h1 className=" text-xl mb-3">
                      পবিত্র রমজানে ছোলাসহ প্রয়োজনীয় পণ্যের দাম নিয়ন্ত্রণে রাখতে
                      কার্যকর ব্যবস্থা?
                    </h1>
                    <p className=" mb-0 text-black text-base font-medium">
                      ভোট দিয়েছেন ৫১১১ জন
                    </p>
                  </div>
                  <div>
                    <div className=" w-full flex flex-col gap-[15px]">
                      <div className=" w-full rounded h-[30px] bg-[#FDEEEC] flex items-center p-3 justify-between ">
                        <Radio value={1}>হ্যাঁ</Radio>
                        <p className=" mb-0">100%</p>
                      </div>
                      <div className=" w-full rounded h-[30px] bg-[#FDEEEC] flex items-center p-3 justify-between ">
                        <Radio value={1}>না</Radio>
                        <p className=" mb-0">100%</p>
                      </div>
                      <div className=" w-full rounded h-[30px] bg-[#FDEEEC] flex items-center p-3 justify-between ">
                        <Radio value={1}>মন্তব্য নেই</Radio>
                        <p className=" mb-0">100%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <Image
                      height={160}
                      width={286}
                      src={"/images/videoGallery/8.png"}
                      alt="crime"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" flex justify-center mb-[20px]">
        <button className="px-[24px] py-[12px] border-[1px] text-[15px] text-black font-medium hover:bg-primary transition-all hover:text-white">
          আরও দেখুন
        </button>
      </div>
    </div>
  );
}
