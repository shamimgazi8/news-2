import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { RiFacebookBoxLine } from "react-icons/ri";
import AdvertiseSpace1 from "../../news/categories/@components/Advertisement_Space/AdvertiseSpace1";

export default function ImageGalleryDetailsPage() {
  return (
    <div className="container">
      <div className=" mt-[40px]">
        <span className=" mb-[6px] border-b-[2px] border-primary text-xl">
          বিশ্ব
        </span>
        <h1 className=" text-[42px] leading-[55px] font-semibold mb-0 mt-[26px]">
          ট্রুডো-সোফির বিচ্ছেদ: আজ দুজনার দুটি পথ দুটি দিকে গেছে বেঁকে
        </h1>
        <div className=" flex justify-between items-center mt-[26px] pb-[26px] mb-[40px] border-b-[1px] border-gray-200">
          <div className=" grid gap-[6px] ">
            <p className=" mb-0 text-[13px] leading-[17px]">রয়টার্স</p>
            <p className=" mb-0 text-[13px] leading-[17px]">
              তারিখ: ০৩ জানুয়ারি ২০২৪
            </p>
          </div>
          <div>
            <ul className=" flex gap-4">
              <li>
                <a href="#" target="_blank">
                  <RiFacebookBoxLine className="text-[24px]" />
                </a>
              </li>
              <li>
                <a href="#" className="_blank">
                  <BsTwitterX className="text-[24px]" />
                </a>
              </li>
              <li>
                <Link href="#">
                  <FaWhatsapp className="text-[24px]" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaInstagram className="text-[24px]" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <IoLogoYoutube className="text-[24px]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-[616px]  m-auto pb-[26px] mb-[26px] border-b-[1px] border-gray-200">
          <p className=" text-[18px] leading-[32px]">
            দীর্ঘ ১৮ বছরের দাম্পত্যজীবনের ইতি টেনেছেন জাস্টিন ট্রুডো ও সোফি
            গ্রেগোয়ার। কানাডার প্রধানমন্ত্রী ট্রুডো গতকাল বুধবার এ ঘোষণা দেন।
            সোফিও একই ঘোষণা দিয়েছেন। এ ঘোষণার মধ্য দিয়ে দুজনার দুটি পথ দুটি দিকে
            গেছে বেঁকে। ট্রুডো-সোফির দাম্পত্যজীবন অনেকের কাছেই অনুকরণীয় ছিল। তাই
            তাঁদের বিচ্ছেদের অপ্রত্যাশিত ঘোষণা অনেককেই হতবাক করেছে। ট্রুডো-সোফির
            দাম্পত্যজীবনের নানা মুহূর্ত ছবিতে তুলে ধরেছে বার্তা সংস্থা রয়টার্স।
            কানাডার প্রধানমন্ত্রী ট্রুডো গতকাল বুধবার এ ঘোষণা দেন। সোফিও একই
            ঘোষণা দিয়েছেন। এ ঘোষণার মধ্য দিয়ে দুজনার দুটি পথ দুটি দিকে গেছে
            বেঁকে। কানাডার প্রধানমন্ত্রী ট্রুডো গতকাল বুধবার এ ঘোষণা দেন। সোফিও
            একই ঘোষণা দিয়েছেন। এ ঘোষণার মধ্য দিয়ে দুজনার দুটি পথ দুটি দিকে গেছে
            বেঁকে।কানাডার প্রধানমন্ত্রী ট্রুডো গতকাল বুধবার এ ঘোষণা দেন। সোফিও
            একই ঘোষণা দিয়েছেন। এ ঘোষণার মধ্য দিয়ে দুজনার দুটি পথ দুটি দিকে গেছে
            বেঁকে।
          </p>
          <button className=" text-[18px] font-semibold leading-[25px] text-gray-500 border px-3 py-1 border-gray-200 rounded-2xl mb-4">
            ০১/২০
          </button>
          <Image
            height={446}
            width={673}
            src={"/images/videoGallery/7.png"}
            alt="crime"
          />
          <p className=" text-[18px] leading-[32px] mt-2 mb-0">
            বিয়ের আনুষ্ঠানিকতা শেষে জাস্টিন ট্রুডো ও নববধূ সোফি গ্রেগোয়ার।
          </p>
        </div>
        <div className=" w-[616px]  m-auto pb-[26px] mb-[26px] border-b-[1px] border-gray-200">
          <button className=" text-[18px] font-semibold leading-[25px] text-gray-500 border px-3 py-1 border-gray-200 rounded-2xl mb-4">
            ০২/২০
          </button>
          <Image
            height={446}
            width={673}
            src={"/images/videoGallery/7.png"}
            alt="crime"
          />
          <p className=" text-[18px] leading-[32px] mt-2 mb-0">
            নির্বাচনের রাতের পার্টিতে স্ত্রী সোফি গ্রেগোয়ারকে ভালোবাসার চুম্বন
            জাস্টিন ট্রুডোর।
          </p>
        </div>
        <div className=" w-[295px] m-auto">
          <AdvertiseSpace1 />
        </div>
        <div className=" w-[616px]  m-auto pb-[26px] mb-[26px] border-b-[1px] border-gray-200">
          <button className=" text-[18px] font-semibold leading-[25px] text-gray-500 border px-3 py-1 border-gray-200 rounded-2xl mb-4">
            ০৩/২০
          </button>
          <Image
            height={446}
            width={673}
            src={"/images/videoGallery/7.png"}
            alt="crime"
          />
          <p className=" text-[18px] leading-[32px] mt-2 mb-0">
            নির্বাচনের রাতের পার্টিতে স্ত্রী সোফি গ্রেগোয়ারকে ভালোবাসার চুম্বন
            জাস্টিন ট্রুডোর।
          </p>
        </div>
      </div>
    </div>
  );
}
