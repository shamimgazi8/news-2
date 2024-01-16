import { Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";

export default function CommentShareReadmore() {
  return (
    <div>
      <div className=" flex justify-between mt-[26px] mb-[26] pb-[26px] border-b-[1px] border-gray-200">
        <div>
          <p className=" text-[18px] font-semibold leadin-[25px] mb-0 text-black">
            মন্তব্য
            <span className=" text-[#4B465C]"> (১২ মন্তব্য)</span>
          </p>
        </div>

        <div className=" flex items-center gap-3 ">
          <p className=" text-[18px]  leadin-[25px] mb-0 text-black text-center">
            বাছাই
          </p>
          <div>
            <Select
              defaultValue="নতুনতম"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "নতুনতম",
                  label: "নতুনতম",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className=" flex gap-[16px] mt-[26px] mb-[26] pb-[26px] border-b-[1px] border-gray-200">
        <div className=" h-[48px] w-[48px]  ">
          <Image
            height={190}
            width={295}
            src={"/images/home/comment.png"}
            className=" rounded-full"
            alt="crime"
          />
        </div>
        <input
          placeholder="আপনার মন্তব্য শেয়ার করুন..."
          className=" border-[1px] border-gray-200 outline-none w-full px-[16px] py-[10px]"
        />
      </div>
      <div className=" mt-[28px] flex justify-between">
        <div className=" flex gap-[6px] items-center">
          <IoShareSocialOutline className=" text-[#FE0000] text-[20px]" />
          <p className=" mb-0 text-[15px] ">শেয়ার</p>
        </div>
        <div>
          <Link href={"/sing-in"}>
            <p className=" mb-0 text-[18px] text-[#FE0000] font-medium leading-[25px]">
              সাইন-ইন
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
