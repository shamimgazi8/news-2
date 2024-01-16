import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoLogoYoutube } from "react-icons/io";
import { RiFacebookBoxLine } from "react-icons/ri";

export default function FullNewsArticelHeading() {
  return (
    <div>
      <div>
        <div className=" flex gap-[10px] items-center mt-1 mb-[12px]">
          <p className=" t-[#4B465C] mb-0 text-[16px] leading-[21px]">
            বাংলাদেশ
          </p>
          <GoDotFill className="text-[#FE0000] text-[10px]" />
          <p className=" mb-0 text-[#4B465C] text-[16px] leading-[21px]">
            রাজনীতি
          </p>
        </div>
        <h1 className=" text-[42px] font-bold leadin-[55px] line-clamp-2">
          শ্রমিক-কর্মচারীদের মামলায় ড. ইউনূসের শাস্তি হয়েছে: তথ্যমন্ত্রী
        </h1>
        <div className=" flex justify-between items-center pb-[26px]  border-b-[1px] border-gray-200 mt-[26px]">
          <div>
            <p className=" mb-0 text-base font-semibold">নিজস্ব প্রতিবেদক</p>
            <p className=" mb-0 text-base">প্রকাশ: জানুয়ারি ০৩, ২০২৪</p>
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
      </div>
    </div>
  );
}
