import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeadingWithOverlay() {
  return (
    <Link href={"/"} className="group hover:text-inherit">
      <div className=" bg-gradient-to-t from-black  w-full h-[396px] flex justify-end flex-col relative ">
        <Image
          width={960}
          height={540}
          src={"/images/catagories/ct1.png"}
          alt="crime"
          className="h-full w-full absolute object-cover mix-blend-overlay "
        />

        <div className=" m-[24px] flex flex-col gap-[10px] absolute">
          <div>
            <span className=" text-[9px] text-black mb-0 bg-white p-[2px]">
              গাজীপুর-৪
            </span>
          </div>
          <h1 className=" text-[28px] font-semibold text-[#FFF] mb-0 group-hover:text-primary transition-all line-clamp-2">
            নির্বাচন থেকে সরে দাঁড়ালেন জাপার প্রার্থী, জানালেন চাপ ও হুমকির কথা
          </h1>
        </div>
      </div>
    </Link>
  );
}
