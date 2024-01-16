import React from "react";

export default function ReadMore() {
  return (
    <div>
      <div className=" mt-[30px] mb-[26] pb-[26px] border-b-[1px] border-gray-200">
        <h1 className=" text-xl">
          <span className=" text-[#FE0000]">রাজনীতি </span>
          থেকে আরও পড়ুন
        </h1>
        <div className=" flex gap-3">
          <button className=" px-[16px] py-[8px] text-base rounded bg-gray-100 text-[#4B465C] hover:bg-primary transition-all hover:text-white">
            আইন ও বিচার
          </button>
          <button className=" px-[16px] py-[8px] text-base rounded bg-gray-100 text-[#4B465C] hover:bg-primary transition-all hover:text-white">
            তথ্যমন্ত্রী
          </button>
          <button className=" px-[16px] py-[8px] text-base rounded bg-gray-100 text-[#4B465C] hover:bg-primary transition-all hover:text-white">
            হাছান মাহ্‌মুদ
          </button>
          <button className=" px-[16px] py-[8px] text-base rounded bg-gray-100 text-[#4B465C] hover:bg-primary transition-all hover:text-white">
            রাজনীতি
          </button>
          <button className=" px-[16px] py-[8px] text-base rounded bg-gray-100 text-[#4B465C] hover:bg-primary transition-all hover:text-white">
            ড. মুহাম্মদ ইউনূস
          </button>
        </div>
      </div>
    </div>
  );
}
