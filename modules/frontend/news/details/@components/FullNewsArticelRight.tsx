import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FullNewsArticelRight() {
  return (
    <>
      <Link href={"/"} className="group hover:text-inherit">
        <div className=" mt-4 flex flex-col gap-3">
          <h1 className=" mb-0 text-[18px] font-medium leading-[25px] line-clamp-2 group-hover:text-primary transition-all ">
            যে রাজনৈতিক বিরোধ থেকে শুরু হলো ‘এক-এগারো’
          </h1>
          <div className=" flex gap-[14px]">
            <div className=" flex flex-col gap-3">
              <p className="mb-0 text-base line-clamp-2">
                বিএনপির নেতৃত্বাধীন চারদলীয় জোট সরকারের...
              </p>
              <p className=" mb-0 text-[13px] text-gray-400">
                জানুয়ারি ০৩, ২০২৪
              </p>
            </div>
            <Image
              width={117}
              height={75}
              src={"/images/catagories/yunus.png"}
              alt="side"
            />
          </div>
          <div className=" w-full border-b-[1px] border-gray-200 mt-[26px] mb-[26px]"></div>
        </div>
      </Link>
    </>
  );
}
