import Image from "next/image";
import React from "react";
import { MdPlayArrow } from "react-icons/md";
import AdvertiseSpace1 from "../../news/categories/@components/Advertisement_Space/AdvertiseSpace1";
import MoreVideo from "../@components/MoreVideo";
import Link from "next/link";
import CommentShareReadmore from "../../news/details/@components/CommentShareReadmore";
import ReadMore from "../../news/details/@components/ReadMore";
import AdvertiseSpace2 from "../../news/categories/@components/Advertisement_Space/AdvertiseSpace2";
import SelectedVideo from "../@components/SelectedVideo";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { RiFacebookBoxLine } from "react-icons/ri";

export default function VideoGalleryDetailsPage() {
  return (
    <div className=" container">
      <div className=" grid grid-cols-[830px_400px] gap-[26px]  mt-[45px]  mb-[26px] pb-[26px] border-b-[1px] border-gray-200">
        <div className=" ">
          <div className=" absolute h-[480px] w-[880px]">
            <MdPlayArrow className="bg-[#FE0000] rounded-full text-white text-[50px] absolute top-[40%] left-[45%] m-[10px] cursor-pointer" />
          </div>
          <div className=" mb-[26px] pb-[26px] border-b-[1px] border-gray-200">
            <Image
              height={480}
              width={880}
              src={"/images/videoGallery/6.png"}
              alt="crime"
            />
            <h1 className="text-[42px] leading-[55x] font-semibold mt-[26px] line-clamp-2 mb-[26px]">
              জাপানে কেন ‘সময়ের সঙ্গে প্রতিযোগিতা’য় উদ্ধারকর্মীরা
            </h1>
            <div className=" flex justify-between">
              <p className=" mb-0 text-[18px] leading-[25px]">
                প্রকাশ: ০৩ জানুয়ারি ২০২৪, ১৩: ২৯
              </p>
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
          <ReadMore />
          <CommentShareReadmore />
        </div>
        <div>
          <div className=" border-b-[1px] border-gray-200 w-[295px]">
            <AdvertiseSpace1 />
          </div>
          <div className=" mt-[26px] mb-[26px] border-b-[1px] border-gray-200">
            <h1 className=" text-xl">পরবর্তী ভিডিও</h1>
          </div>
          <div>
            {new Array(4).fill(0).map((_, i: any) => {
              const lst = i < 3;
              return (
                <Link href={"/"} className="group hover:text-inherit">
                  <div
                    className={`flex gap-[12px] mb-[26px] pb-[26px] ${
                      lst ? "border-b-[1px] border-gray-200 " : ""
                    }`}
                  >
                    <div>
                      <h1 className=" text-[20px] mb-0 font-semibold leading-[26px] line-clamp-2  group-hover:text-primary transition-all">
                        আমার দেশ, আমার চাওয়া 'যে পরিবর্তন আসুক, সবার মতামতে হোক'
                      </h1>
                      <p className=" mb-0 text-[13px]">ডিসেম্বর ২৭,২০২৩</p>
                    </div>
                    <div className="relative">
                      <MdPlayArrow className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer" />
                      <Image
                        height={221}
                        width={386}
                        alt=" video"
                        src={"/images/videoGallery/3.png"}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <AdvertiseSpace2 />
      <SelectedVideo />
    </div>
  );
}
