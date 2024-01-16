"use client";
import { Checkbox, Collapse } from "antd";
import Link from "next/link";
import AdvertiseSpace1 from "../categories/@components/Advertisement_Space/AdvertiseSpace1";
import NewsTilesWide from "./@components/NewsTilesWideSearch";

function SearchTab() {
  const items = [
    {
      key: "1",
      label: "লেখক",
      children: (
        <div>
          <div className=" flex gap-[6px] mb-[12px] ">
            <Checkbox />
            <p className=" text-[15px] mb-0 leading-[20px]">আবদুল হাকিম</p>
          </div>
          <div className=" flex gap-[6px] mb-[12px]">
            <Checkbox />
            <p className=" text-[15px] mb-0 leading-[20px]">জাহানারা ইমাম</p>
          </div>
          <div className=" flex gap-[6px] mb-[12px]">
            <Checkbox />
            <p className=" text-[15px] mb-0 leading-[20px]">হালিমা খাতুন</p>
          </div>
          <div className=" flex gap-[6px] mb-[12px]">
            <Checkbox />
            <p className=" text-[15px] mb-0 leading-[20px]">
              শহীদুল্লা কায়সার
            </p>
          </div>
          <div className=" flex gap-[6px] mb-[12px]">
            <Checkbox />
            <p className=" text-[15px] mb-0 leading-[20px]">জহির রায়হান</p>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "অনুচ্ছেদ",
      children: <p>hello world</p>,
    },
    {
      key: "3",
      label: "ধরণ",
      children: <p>hello world</p>,
    },
    {
      key: "4",
      label: "সাজানো",
      children: <p>hello world</p>,
    },
    {
      key: "5",
      label: "তারিখ",
      children: <p>hello world</p>,
    },
  ];
  return (
    <section>
      <div className=" container">
        <div className=" grid grid-cols-[1fr_2fr_1fr] items-center mb-[26px] pb-[28px] border-b-[1px] border-gray-200">
          <div className=" flex items-start flex-col gap-3 h-[36px] mb-[26px] cursor-pointer">
            <Link href="/">
              <h1 className=" text-[42px] leading-[55px]  font-semibold mb-0 hover:text-primary duration-300">
                অনুসন্ধান
              </h1>
            </Link>
          </div>
          <div>
            <input
              className=" w-full text-[18px] leading-[25px] px-[16px] py-[13px] border-[1px] rounded-lg outline-none "
              placeholder="অনুসন্ধান করুন"
            />
          </div>
        </div>
        <div className=" grid grid-cols-[1fr_2fr_1fr] items-start gap-[25px]">
          <div>
            <div className=" mb-[20px] pb-[20px] border-b-[1px] border-gray-200">
              <p className=" mb-0 text-[18px] leading-[25px]">
                প্রাপ্ত ফলাফল: ১২৪৫৭৮
              </p>
            </div>
            <Collapse
              expandIconPosition="end"
              defaultActiveKey={["1"]}
              size="small"
              ghost
              items={items}
            />
          </div>
          <div>
            {new Array(10).fill(0).map((_, i: any) => {
              const lst = i < 9;
              return (
                <div
                  className={`${
                    lst
                      ? " pb-[16px] mb-[16px] border-b-[1px] border-gray-200 "
                      : ""
                  }`}
                >
                  <NewsTilesWide />
                </div>
              );
            })}
          </div>
          <div>
            <AdvertiseSpace1 />
          </div>
        </div>
      </div>
    </section>
  );
}
export default SearchTab;
