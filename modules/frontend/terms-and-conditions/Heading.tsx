import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Heading() {
  return (
    <div className=" border-b-[1px] border-gray-200 pb-3">
      <h1 className=" mb-3 text-[42px] font-semibold leading-[58px]">
        শর্তাবলি
      </h1>
      <div className=" flex gap-[5px] items-center">
        <Link href={"/"}>
          <p className=" mb-0 text-base hover:text-[#FE0000] transition-all">
            হোম
          </p>
        </Link>
        <IoIosArrowForward className="text-[#FE0000]" />
        <Link href={"/terms-and-condition"}>
          <p className=" mb-0 text-base hover:text-[#FE0000] transition-all">
            শর্তাবলি
          </p>
        </Link>
      </div>
    </div>
  );
}
