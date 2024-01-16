import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight, MdPlayArrow } from "react-icons/md";

export default function SelectedVideo() {
  return (
    <div className="  border-b-[1px] border-gray-200 pb-[60px]">
      <div className=" flex items-center gap-3 h-[36px] mb-[26px] cursor-pointer mt-[60px] ">
        <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px] " />
        <h1 className=" text-[28px]  font-semibold mb-0">নির্বাচিত ভিডিও</h1>
      </div>
      <div className=" grid grid-cols-4 gap-[26px]">
        {new Array(4).fill(
          <Link href={"/"} className="group hover:text-inherit">
            <div className=" flex flex-col gap-[17px] relative">
              <div>
                <div>
                  <MdPlayArrow className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer" />
                </div>
                <Image
                  height={190}
                  width={615}
                  src={"/images/home/video1.png"}
                  alt="crime"
                />
              </div>
              <div className="grid gap-3">
                <h1 className=" mb-0 text-[18px]  font-semibold line-clamp-2 group-hover:text-primary transition-all">
                  আমদানি–রপ্তানিতে ভাটা কনটেইনার ডিপোর ব্যবসা কমে গেছে
                </h1>
                <p className=" text-[13px] text-gray-400 mb-0">
                  ডিসেম্বর ২৭,২০২৩
                </p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
