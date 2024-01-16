import Link from "next/link";
import React from "react";
import { RxCross2 } from "react-icons/rx";

const BreakingNews = () => {
  return (
    <>
      <section className=" pb-0">
        <div className="container border-b-[1px] border-gray-200 pb-[26px] mb-[26px]">
          <div className=" flex flex-col gap-6">
            <Link href={"/"}>
              <h1 className=" mb-0 text-[28px] font-semibold hover:text-primary transition-all">
                সদ্যপ্রাপ্ত সংবাদ
              </h1>
            </Link>
            <div className=" grid grid-cols-3 gap-[26px]">
              {new Array(3).fill(
                <Link href="/" className="group hover:text-inherit">
                  <div className=" flex flex-col gap-2 pr-4  border border-gray-100 p-[24px]">
                    <h1 className=" text-[16px] font-semibold mb-0 group-hover:text-primary transition-all ">
                      ড. ইউনূসকে দোষী সাব্যস্ত করা বাংলাদেশের মানবাধিকারের
                      অবরুদ্ধ দশার প্রতীক: অ্যামনেস্টি
                    </h1>

                    <p className=" text-[13px] mb-0">ডিসেম্বর ২৭,২০২৩</p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BreakingNews;
