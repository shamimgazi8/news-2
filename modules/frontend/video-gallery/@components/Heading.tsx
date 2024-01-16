import React from "react";
import { BsDot } from "react-icons/bs";

export default function Heading() {
  return (
    <div>
      <h1 className=" mb-0 text-[42px] font-semibold leading-[57px]">ভিডিও</h1>
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
  );
}
