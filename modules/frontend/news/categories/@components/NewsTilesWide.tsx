import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsTilesWide() {
  return (
    <Link href={"/"} className="group hover:text-inherit">
      <div>
        <div className=" grid grid-cols-[2fr_1fr] gap-[13px] 00">
          <div className=" w-full flex flex-col gap-[6px] ">
            <h1 className=" text-xl mb-[6px]  line-clamp-2 leading-[26px] group-hover:text-primary transition-all ">
              লক্ষ্মীপুর-১ আসনে স্বতন্ত্র প্রার্থী হাবিবুরের প্রার্থিতা বাতিল
              করল ইসি
            </h1>
            <p className=" text-base mb-0 leading-[21px]">
              নির্বাচনী অপরাধে লক্ষ্মীপুর-১ আসনে স্বতন্ত্র প্রার্থী মোহাম্মদ
              হাবিবুর রহমানের প্রার্থিতা বাতিল করেছে নির্বাচন কমিশন (ইসি)।
            </p>
            <p className=" mb-0 text-[13px] leading-[17px]">ডিসেম্বর ২৭,২০২৩</p>
          </div>
          <div>
            <Image
              height={130}
              width={202}
              src={"/images/catagories/sp1.png"}
              alt="crime"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
