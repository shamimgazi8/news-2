import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Business() {
  return (
    <section className=" pb-0">
      <div className=" container border-b-[1px] border-gray-200 pb-[60px] mb-[26px]">
        <div className=" flex items-center gap-3 h-[36px] mb-[26px] cursor-pointer">
          <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px]" />
          <Link href={"/"}>
            <h1 className=" text-[28px]  font-semibold mb-0 hover:text-primary transition-all">
              বাণিজ্য
            </h1>
          </Link>
        </div>
        <div className=" grid grid-cols-4">
          {new Array(4).fill(
            <Link href={"/"} className="group hover:text-inherit">
              <div className=" flex flex-col gap-3 pr-4">
                <Image
                  height={190}
                  width={295}
                  src={"/images/home/business.png"}
                  alt="crime"
                />

                <h1 className=" text-[20px] font-semibold mb-0 group-hover:text-primary transition-all">
                  আমদানি–রপ্তানিতে ভাটা কনটেইনার ডিপোর ব্যবসা কমে গেছে
                </h1>
                <p className="mb-0 line-clamp-2">
                  ডলার সংকটে পণ্য আমদানিতে ভাটা চলছে। রপ্তানিও খুব বেশি বাড়ছে
                  না। তাতে চট্টগ্রাম বন্দর দিয়ে আমদানি-রপ্তানি পণ্য ব্যবস্থাপনায়
                  নিয়োজিত বেসরকারি কনটেইনার ডিপোগুলোর ব্যবসা।
                </p>
                <p className=" text-[13px] mb-0">ডিসেম্বর ২৭,২০২৩</p>
              </div>
            </Link>
          )}
        </div>
        <div className="h-[1px] w-full  bg-[#DBDADE] mt-[47px] mb-[26px]"></div>
        <div className=" grid grid-cols-4 gap-[26px]">
          {new Array(4).fill(
            <Link href={"/"}>
              <div>
                <div className=" flex gap-[10px]">
                  <div>
                    <Image
                      height={190}
                      width={295}
                      src={"/images/home/business1.png"}
                      alt="crime"
                    />
                  </div>
                  <p className="mb-0 font-medium text-lg line-clamp-2">
                    ব্যাংকঋণের সর্বোচ্চ সুদের হার বেড়ে ১১.৮৯ শতাংশ
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Business;
