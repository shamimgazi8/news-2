import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Heading() {
  return (
    <div className=" border-b-[1px] border-gray-200 pb-3">
      <h1 className=" mb-3 text-[42px] font-semibold leading-[58px]">
        গোপনীয়তা নীতি
      </h1>
      <div className=" flex gap-[5px] items-center">
        <Link href={"/"}>
          <p className=" mb-0 text-base hover:text-[#FE0000] transition-all">
            হোম
          </p>
        </Link>
        <IoIosArrowForward className="text-[#FE0000]" />
        <Link href={"/privacy-policy"}>
          <p className=" mb-0 text-base hover:text-[#FE0000] transition-all">
            গোপনীয়তা নীতি
          </p>
        </Link>
      </div>
    </div>
  );
}
