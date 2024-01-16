import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Opinion = () => {
  return (
    <section>
      <div className="container">
        <div className=" grid grid-cols-1 lg:grid-cols-4 mt-[60px]  divide-x">
          <div className="pl-3 pr-3">
            <div className=" flex items-center gap-3 h-[36px] mb-[26px] cursor-pointer">
              <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px] " />
              <h1 className="text-[28px] text-black  mb-0">বাংলাদেশ</h1>
            </div>

            <Link
              href="#"
              className=" flex flex-col gap-4 group hover:text-inherit"
            >
              <div>
                <Image
                  height={190}
                  width={295}
                  src={"/images/home/option.png"}
                  alt="crime"
                />
              </div>
              <h1 className="mb-0 text-xl text-black group-hover:text-primary transition-all">
                ভোটের দিন প্রাইভেট কার ও গণপরিবহন চলবে
              </h1>
            </Link>

            <div className="h-[1px] w-full  bg-[#DBDADE] my-[30px]"></div>

            <Link
              href="#"
              className="flex flex-col gap-2 group hover:text-inherit mb-5"
            >
              <h1 className="text-base mb-0 group-hover:text-primary transition-all line-clamp-2">
                ভোটের দিন প্রাইভেট কার, সিএনজিচালিত অটোরিকশা ও গণপরিবহন চলাচলে
                নিষেধাজ্ঞা না।
              </h1>
              <p className="text-xs mb-0 line-clamp-3">
                স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের সিনিয়র সচিব মো.
                মোস্তাফিজুর রহমান। স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের
                সিনিয়র সচিব মো. মোস্তাফিজুর রহমান।
              </p>
              <p className="text-[13px] mb-0">ডিসেম্বর ২৭,২০২৩</p>
            </Link>

            <Link
              href="#"
              className=" flex flex-col gap-2  group hover:text-inherit"
            >
              <h1 className="text-base mb-0 group-hover:text-primary transition-all line-clamp-2">
                ভোটের দিন প্রাইভেট কার, সিএনজিচালিত অটোরিকশা ও গণপরিবহন চলাচলে
                নিষেধাজ্ঞা না।
              </h1>
              <p className="text-xs mb-0 line-clamp-3">
                স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের সিনিয়র সচিব মো.
                মোস্তাফিজুর রহমান। স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের
                সিনিয়র সচিব মো. মোস্তাফিজুর রহমান।
              </p>
              <p className="text-[13px] mb-0">ডিসেম্বর ২৭,২০২৩</p>
            </Link>
          </div>

          <div className="2 pl-3 pr-3">
            <div className=" flex items-center gap-3 h-[36px] mb-[26px] cursor-pointer">
              <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px] " />
              <h1 className=" text-[28px] text-black   font-semibold mb-0">
                অপরাধ
              </h1>
            </div>
            <Link
              href="#"
              className=" flex flex-col gap-4 group hover:text-inherit"
            >
              <div>
                <Image
                  height={190}
                  width={295}
                  src={"/images/home/option.png"}
                  alt="crime"
                />
              </div>
              <h1 className="mb-0 text-xl text-black group-hover:text-primary transition-all">
                ভোটের দিন প্রাইভেট কার ও গণপরিবহন চলবে
              </h1>
            </Link>

            <div className="h-[1px] w-full  bg-[#DBDADE] my-[30px]"></div>

            <Link
              href="#"
              className="flex flex-col gap-2 group hover:text-inherit mb-5"
            >
              <h1 className="text-base mb-0 group-hover:text-primary transition-all line-clamp-2">
                ভোটের দিন প্রাইভেট কার, সিএনজিচালিত অটোরিকশা ও গণপরিবহন চলাচলে
                নিষেধাজ্ঞা না।
              </h1>
              <p className="text-xs mb-0 line-clamp-3">
                স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের সিনিয়র সচিব মো.
                মোস্তাফিজুর রহমান। স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের
                সিনিয়র সচিব মো. মোস্তাফিজুর রহমান।
              </p>
              <p className="text-[13px] mb-0">ডিসেম্বর ২৭,২০২৩</p>
            </Link>

            <Link
              href="#"
              className=" flex flex-col gap-2  group hover:text-inherit"
            >
              <h1 className="text-base mb-0 group-hover:text-primary transition-all line-clamp-2">
                ভোটের দিন প্রাইভেট কার, সিএনজিচালিত অটোরিকশা ও গণপরিবহন চলাচলে
                নিষেধাজ্ঞা না।
              </h1>
              <p className="text-xs mb-0 line-clamp-3">
                স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের সিনিয়র সচিব মো.
                মোস্তাফিজুর রহমান। স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের
                সিনিয়র সচিব মো. মোস্তাফিজুর রহমান।
              </p>
              <p className="text-[13px] mb-0">ডিসেম্বর ২৭,২০২৩</p>
            </Link>
          </div>

          <div className="2 pl-3 pr-3">
            <div className=" flex items-center gap-3 h-[36px] mb-[26px] cursor-pointer">
              <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px] " />
              <h1 className=" text-[28px] text-black   font-semibold mb-0">
                বিশ্ব
              </h1>
            </div>
            <Link
              href="#"
              className=" flex flex-col gap-4 group hover:text-inherit"
            >
              <div>
                <Image
                  height={190}
                  width={295}
                  src={"/images/home/option.png"}
                  alt="crime"
                />
              </div>
              <h1 className="mb-0 text-xl text-black group-hover:text-primary transition-all">
                ভোটের দিন প্রাইভেট কার ও গণপরিবহন চলবে
              </h1>
            </Link>

            <div className="h-[1px] w-full  bg-[#DBDADE] my-[30px]"></div>

            <Link
              href="#"
              className="flex flex-col gap-2 group hover:text-inherit mb-5"
            >
              <h1 className="text-base mb-0 group-hover:text-primary transition-all line-clamp-2">
                ভোটের দিন প্রাইভেট কার, সিএনজিচালিত অটোরিকশা ও গণপরিবহন চলাচলে
                নিষেধাজ্ঞা না।
              </h1>
              <p className="text-xs mb-0 line-clamp-3">
                স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের সিনিয়র সচিব মো.
                মোস্তাফিজুর রহমান। স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের
                সিনিয়র সচিব মো. মোস্তাফিজুর রহমান।
              </p>
              <p className="text-[13px] mb-0">ডিসেম্বর ২৭,২০২৩</p>
            </Link>

            <Link
              href="#"
              className=" flex flex-col gap-2  group hover:text-inherit"
            >
              <h1 className="text-base mb-0 group-hover:text-primary transition-all line-clamp-2">
                ভোটের দিন প্রাইভেট কার, সিএনজিচালিত অটোরিকশা ও গণপরিবহন চলাচলে
                নিষেধাজ্ঞা না।
              </h1>
              <p className="text-xs mb-0 line-clamp-3">
                স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের সিনিয়র সচিব মো.
                মোস্তাফিজুর রহমান। স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের
                সিনিয়র সচিব মো. মোস্তাফিজুর রহমান।
              </p>
              <p className="text-[13px] mb-0">ডিসেম্বর ২৭,২০২৩</p>
            </Link>
          </div>

          <div className="2 pl-3 pr-3">
            <div className=" flex items-center gap-3 h-[36px] mb-[26px] cursor-pointer">
              <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px] " />
              <h1 className=" text-[28px] text-black   font-semibold mb-0">
                বাণিজ্য
              </h1>
            </div>
            <Link
              href="#"
              className=" flex flex-col gap-4 group hover:text-inherit"
            >
              <div>
                <Image
                  height={190}
                  width={295}
                  src={"/images/home/option.png"}
                  alt="crime"
                />
              </div>
              <h1 className="mb-0 text-xl text-black group-hover:text-primary transition-all">
                ভোটের দিন প্রাইভেট কার ও গণপরিবহন চলবে
              </h1>
            </Link>

            <div className="h-[1px] w-full  bg-[#DBDADE] my-[30px]"></div>

            <Link
              href="#"
              className="flex flex-col gap-2 group hover:text-inherit mb-5"
            >
              <h1 className="text-base mb-0 group-hover:text-primary transition-all line-clamp-2">
                ভোটের দিন প্রাইভেট কার, সিএনজিচালিত অটোরিকশা ও গণপরিবহন চলাচলে
                নিষেধাজ্ঞা না।
              </h1>
              <p className="text-xs mb-0 line-clamp-3">
                স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের সিনিয়র সচিব মো.
                মোস্তাফিজুর রহমান। স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের
                সিনিয়র সচিব মো. মোস্তাফিজুর রহমান।
              </p>
              <p className="text-[13px] mb-0">ডিসেম্বর ২৭,২০২৩</p>
            </Link>

            <Link
              href="#"
              className=" flex flex-col gap-2  group hover:text-inherit"
            >
              <h1 className="text-base mb-0 group-hover:text-primary transition-all line-clamp-2">
                ভোটের দিন প্রাইভেট কার, সিএনজিচালিত অটোরিকশা ও গণপরিবহন চলাচলে
                নিষেধাজ্ঞা না।
              </h1>
              <p className="text-xs mb-0 line-clamp-3">
                স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের সিনিয়র সচিব মো.
                মোস্তাফিজুর রহমান। স্বরাষ্ট্র মন্ত্রণালয়ের জননিরাপত্তা বিভাগের
                সিনিয়র সচিব মো. মোস্তাফিজুর রহমান।
              </p>
              <p className="text-[13px] mb-0">ডিসেম্বর ২৭,২০২৩</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opinion;
