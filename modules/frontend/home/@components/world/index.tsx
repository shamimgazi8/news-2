import { Radio } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function World() {
  return (
    <section className=" pb-0">
      <div className=" container border-b-[1px] border-gray-200 pb-[26px] mb-[26px]">
        <div className=" flex items-center gap-3 h-[36px] mb-[26px] cursor-pointer">
          <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px]" />
          <Link href={"/"}>
            <h1 className=" text-[28px]  font-semibold mb-0 hover:text-primary transition-all">
              বিশ্ব
            </h1>
          </Link>
        </div>
        <div className=" grid grid-cols-[615px_295px_295px] gap-[20px]">
          <div>
            <Link href={"/"}>
              <div className=" bg-gradient-to-t from-black  w-full h-[396px] flex justify-end flex-col mb-[26px] relative ">
                <Image
                  height={960}
                  width={540}
                  src={"/images/home/world.png"}
                  alt="crime"
                  className="h-full w-full absolute object-cover mix-blend-overlay "
                />
                <div className=" m-[24px] flex flex-col gap-[10px] absolute">
                  <span className=" text-[9px] text-black mb-0 bg-white px-[4px] h-[18px] w-[20px]">
                    বিশ্ব
                  </span>
                  <h1 className=" text-[28px] font-semibold text-[#FFF] mb-0 hover:text-primary duration-300">
                    জাপানে ভূমিকম্পে ১৩ জনের প্রাণহানি, এক দিনে ১৫৫ কম্পন
                  </h1>
                  <p className=" text-[16px] text-[#FFF] mb-0">
                    নতুন বছরের প্রথম দিনে বড় দুর্যোগের মুখোমুখি হয়েছে জাপানবাসী।
                    গতকাল সোমবার ১ দিনে দেশটিতে ১৫৫টি ভূমিকম্প অনুভূত হয়েছে, এতে
                    প্রাণ গেছে ১৩ জনের।
                  </p>
                  <p className=" text-[16px] mt-[2px] text-[#FFF] mb-0">
                    ডিসেম্বর ২৭,২০২৩
                  </p>
                </div>
              </div>
            </Link>
            <div className="h-[1px] w-full  bg-[#DBDADE] my-[25px]"></div>

            <div className=" grid grid-cols-3 ">
              <Link href={"/"} className="group hover:text-inherit">
                <div className=" flex flex-col gap-3 pr-4">
                  <h1 className=" text-base font-semibold mb-0 group-hover:text-primary line-clamp-2">
                    দক্ষিণ কোরিয়ার বিরোধী নেতাকে ছুরিকাঘাত
                  </h1>
                  <p className=" text-[12px] mb-0 leading-4">
                    আজ মঙ্গলবার সকালে দেশটির বন্দর শহর বুসানে এক সংবাদ সম্মেলনে
                    বিরোধী ডেমোক্রেটিক পার্টির এই নেতাকে ছুরিকাঘাত করা হয়।
                  </p>
                  <p className=" text-[12px] mb-0 ">ডিসেম্বর ২৭,২০২৩</p>
                </div>
              </Link>

              <Link href={"/"} className="group hover:text-inherit">
                <div className="border-l border-r pr-3 pl-3">
                  <div className=" flex flex-col gap-3">
                    <h1 className="text-base font-semibold mb-0 group-hover:text-primary line-clamp-2">
                      ‘আমেরিকান আইডল’ প্রযোজকের বিরুদ্ধে যৌন নিপীড়নের মামলা
                    </h1>
                    <p className=" text-[12px] leading-4 mb-0">
                      আজ মঙ্গলবার সকালে দেশটির বন্দর শহর বুসানে এক সংবাদ
                      সম্মেলনে বিরোধী ডেমোক্রেটিক পার্টির এই নেতাকে ছুরিকাঘাত
                      করা হয়।
                    </p>
                    <p className=" text-[12px] mb-0">ডিসেম্বর ২৭,২০২৩</p>
                  </div>
                </div>
              </Link>

              <Link href={"/"} className="group hover:text-inherit">
                <div className=" flex flex-col gap-3 pl-4">
                  <h1 className=" text-base font-semibold mb-0 group-hover:text-primary line-clamp-2">
                    ছোট নৌকায় করে যুক্তরাজ্যে অবৈধ অভিবাসী যাওয়া ৩৬% কমেছে
                  </h1>
                  <p className=" text-[12px] mb-0 leading-4">
                    আজ মঙ্গলবার সকালে দেশটির বন্দর শহর বুসানে এক সংবাদ সম্মেলনে
                    বিরোধী ডেমোক্রেটিক পার্টির এই নেতাকে ছুরিকাঘাত করা হয়।
                  </p>
                  <p className=" text-[12px] mb-0">ডিসেম্বর ২৭,২০২৩</p>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div className="border-l border-r pr-3 pl-3">
              <div className=" grid grid-rows-2">
                <div>
                  <Link href={"/"}>
                    <div className=" flex flex-col gap-[17px]">
                      <div>
                        <Image
                          height={190}
                          width={295}
                          src={"/images/home/world1.png"}
                          alt="crime"
                        />
                      </div>
                      <h1 className="mb-0 text-[20px] hover:text-primary duration-300">
                        মিয়ানমারে জান্তার বিরুদ্ধে লড়ছেন নারীরাও
                      </h1>
                    </div>
                  </Link>
                  <div className="h-[1px] w-full  bg-[#DBDADE] my-[30px]"></div>
                </div>
                <Link href={"/"}>
                  <div className=" flex flex-col gap-[17px]">
                    <div>
                      <Image
                        height={190}
                        width={295}
                        src={"/images/home/world1.png"}
                        alt="crime"
                      />
                    </div>
                    <h1 className="mb-0 text-[20px] hover:text-primary duration-300">
                      মিয়ানমারে জান্তার বিরুদ্ধে লড়ছেন নারীরাও
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-[15px]">
            <Link href={"/"}>
              <h1 className=" mb-[15px] text-[20px] font-medium">অনলাইন ভোট</h1>
              <div className=" mb-[15px]">
                <Image
                  height={190}
                  width={295}
                  src={"/images/home/world1.png"}
                  alt="crime"
                />
              </div>
              <div className=" flex gap-[5px] items-center mb-[7px]">
                <p className=" text-[13px] mb-0 text-[#FE0000]">অর্থনীতি </p>
                <GoDotFill className=" text-[12px] text-[#424242]" />
                <p className=" text-[13px] mb-0 text-[#828282]">মুদ্রাস্ফীতি</p>
              </div>
              <h1 className=" mb-0 text-[16px] text-[#424242] font-normal hover:text-primary duration-300">
                দেশে এখন ঋণ দেওয়ার ক্ষেত্রে সর্বোচ্চ ১১ দশমিক ৮৯ শতাংশ সুদ আরোপ
                করতে পারবে ব্যাংকগুলো। এতে বিনিয়োগে নেতিবাচক প্রভাব পড়বে বলে
                আপনি মনে করেন কি?
              </h1>
            </Link>
            <div className=" w-full flex flex-col gap-[15px]">
              <div className=" w-full rounded h-[30px] bg-[#FDEEEC] flex items-center p-3 justify-between ">
                <Radio value={1}>হ্যাঁ</Radio>
                <p className=" mb-0">100%</p>
              </div>
              <div className=" w-full rounded h-[30px] bg-[#FDEEEC] flex items-center p-3 justify-between ">
                <Radio value={1}>না</Radio>
                <p className=" mb-0">100%</p>
              </div>
              <div className=" w-full rounded h-[30px] bg-[#FDEEEC] flex items-center p-3 justify-between ">
                <Radio value={1}>মন্তব্য নেই</Radio>
                <p className=" mb-0">100%</p>
              </div>
            </div>
            <div className=" w-full">
              <Link href={"/"}>
                <button className=" bg-[#FE0000] h-[40px] text-white w-full  py-[10px] rounded font-bold duration-300 hover:bg-gray-400 text-center">
                  Vote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      ;
    </section>
  );
}

export default World;
