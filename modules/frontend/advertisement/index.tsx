import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

export default function Advertisement() {
  return (
    <div className=" container">
      <div className=" mt-[30px]">
        <h1 className=" text-[42px] leading-[57px] font-semibold">বিজ্ঞাপন</h1>
        <div className=" flex gap-[5px] items-center pb-3 border-b-[1px] border-gray-200 mb-[26px]">
          <Link href={"/"}>
            <p className=" mb-0 text-base hover:text-primary">হোম</p>
          </Link>
          <IoIosArrowForward className="text-primary" />
          <p className=" mb-0 text-base">বিজ্ঞাপন</p>
        </div>
        <div className=" grid gap-[25px]">
          <p>
            সর্বশেষ জাতীয় গণমাধ্যম জরিপ (জাতীয় গণমাধ্যম জরিপ ২০২১, ক্যান্টার
            এমআরবি) অনুসারে, প্রতিদিন ৫০ লাখের বেশি মানুষ নিউজপেপারর ছাপা
            পত্রিকা পড়ে থাকেন। এই জরিপ অনুসারে নিউজপেপার বাংলাদেশের সর্বোচ্চ
            পঠিত পত্রিকা। জরিপে দেখা গেছে, শুধু পাঠকসংখ্যাতেই নয়, দেশের সবচেয়ে
            শিক্ষিত এবং আর্থসামাজিকভাবে শীর্ষ স্তরের মানুষদের মধ্যে নিউজপেপার
            সবচেয়ে জনপ্রিয়। সে কারণে কোনো পণ্য, সেবা বা ব্র্যান্ডের তথ্য
            সাধারণভাবে টার্গেট পাঠকের কাছে এবং বিশেষভাবে সমাজে মতামত তৈরি করার
            মতো মানুষের কাছে পৌঁছাতে নিউজপেপার অন্য পত্রিকার চেয়ে বহুগুণ এগিয়ে
            রয়েছে।
          </p>
          <p>
            আবার পাঠকসংখ্যা ও পেজভিউর হিসাবে নিউজপেপার অনলাইন সংস্করণ বা
            নিউজপেপার ডটকম বিশ্বে বাংলা ভাষার শীর্ষতম ওয়েবসাইট। প্রতি মাসে এর
            ভিজিটর প্রায় ১ কোটি ৬০ লাখ। এদের কারণে নিউজপেপারর অনলাইন সংস্করণের
            পেজভিউ প্রতি মাসে প্রায় ২২ কোটি। এ কারণে অ্যালেক্সার হিসাবে
            নিউজপেপার পোর্টাল দক্ষিণ এশিয়ায় শীর্ষ পাঁচটি গণমাধ্যমের একটি।
          </p>
          <p>
            ১ কোটি ৯৬ লাখ অনুসারী নিয়ে নিউজপেপারর ফেসবুক পেজ বাংলাদেশের যেকোনো
            শ্রেণিতে সর্বোচ্চ। অনুরাগী, অনুসারী ও পাঠকদের সঙ্গে কোনো পণ্য, সেবা
            বা ব্র্যান্ডকে যুক্ত করার দিক থেকে এই পেজ এখন ব্যক্তি ও
            প্রাতিষ্ঠানিক পেজের মধ্যে বাংলাদেশে সবার শীর্ষে।
          </p>
          <p>
            ছাপা পত্রিকা এবং অনলাইন পোর্টালের জন্য আলাদা রেট কার্ড আছে।
            নিউজপেপারর অফিসে এসে অথবা নির্ধারিত এজেন্ট পয়েন্টে গিয়ে বিজ্ঞাপন
            দেওয়া যায়।
          </p>
          <div>
            <div className=" flex items-center gap-[10px] mb-[10px] ">
              <GoDotFill className="text-primary" />
              <p className=" text-[18px] font-semibold leading-[25px] mb-0">
                বিজ্ঞাপনের জন্য যোগাযোগ
              </p>
            </div>
            <p className=" mb-0">ফোন: +৮৮ ০২ ১২৩৪৫৬৮</p>
            <p className="  font-medium">
              ইমেইল: ad@newspaper.com, adsales@newspaper.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
