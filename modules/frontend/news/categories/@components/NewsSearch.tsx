import { Select } from "antd";
import Image from "next/image";
import React from "react";
import { FiMapPin } from "react-icons/fi";

const NewsSearch = () => {
  return (
    <div className=" felx flex-col self-start">
      <div className=" bg-[#FAFCFF] p-[26px] ">
        <div className="  flex gap-[10px]">
          <FiMapPin className=" text-[#FE0000] text-[24px]" />
          <p className=" mb-[26px] text-xl">আমার এলাকার খবর</p>
        </div>
        <div className=" flex flex-col gap-[20px]">
          <Select
            defaultValue="বিভাগ"
            className=" w-[100%]"
            options={[
              {
                label: "বিভাগ",
                value: "বিভাগ",
              },
              {
                label: "বিভাগ",
                value: "বিভাগ",
              },
            ]}
          />
          <Select
            defaultValue="জেলা"
            className=" w-[100%]"
            options={[
              {
                label: "জেলা",
                value: "জেলা",
              },
              {
                label: "জেলা",
                value: "জেলা",
              },
            ]}
          />
          <Select
            defaultValue="উপজেলা"
            className=" w-[100%]"
            options={[
              {
                label: "উপজেলা",
                value: "উপজেলা",
              },
              {
                label: "উপজেলা",
                value: "উপজেলা",
              },
            ]}
          />
          <button className=" text-[13px] font-medium leading-[17px] p-2 w-full bg-[#FE0000] text-white rounded hover:bg-slate-400 transition-all">
            খুঁজুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsSearch;
