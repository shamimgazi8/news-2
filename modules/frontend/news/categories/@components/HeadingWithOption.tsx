import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";

export default function HeadingWithOption() {
  return (
    <div>
      <div className=" flex items-start flex-col gap-3 h-[36px] mb-[26px] cursor-pointer">
        <Link href="/">
          <h1 className=" text-[42px] leading-[55px]  font-semibold mb-0 hover:text-primary duration-300">
            দেশের খবর
          </h1>
        </Link>
      </div>
      <div className=" flex gap-[10px] items-center">
        <p className=" mb-0 text-[16px] leading-[21px]">রাজধানী</p>
        <GoDotFill className="text-[#FE0000] text-[10px]" />
        <p className=" mb-0 text-[16px] leading-[21px]">জেলা</p>
        <GoDotFill className="text-[#FE0000] text-[10px]" />
        <p className=" mb-0 text-[16px] leading-[21px]">করোনাভাইরাস</p>
        <GoDotFill className="text-[#FE0000] text-[10px]" />
        <p className=" mb-0 text-[16px] leading-[21px]">অপরাধ</p>
      </div>
    </div>
  );
}
