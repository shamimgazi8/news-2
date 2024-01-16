import Image from "next/image";
import { IoMdPlayCircle } from "react-icons/io";
import React from "react";
import { MdKeyboardDoubleArrowRight, MdPlayArrow } from "react-icons/md";

const VideoGallery = () => {
  return (
    <section className=" bg-[#4B4B4B]">
      <div className="container pt-[60px]">
        <div className=" flex items-center gap-3 h-[36px] mb-[26px] cursor-pointer">
          <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px] " />
          <h1 className=" text-[28px] text-white  font-semibold mb-0">
            ভিডিও গ্যালারী
          </h1>
        </div>
        <div className=" grid grid-cols-[1fr_1fr] gap-[26px]">
          <div className=" flex flex-col gap-[29px] relative">
            <div>
              <div>
                <MdPlayArrow className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer" />
              </div>
              <Image
                height={190}
                width={615}
                src={"/images/home/video.png"}
                alt="crime"
              />
            </div>
            <div className=" flex-flex-col gap-[10px]">
              <p className=" mb-0 text-white text-[9px]">গ্যালারী</p>
              <h1 className=" mb-0 text-white text-[28px] font-semibold">
                নতুন বই পেয়ে শিক্ষার্থীদের উচ্ছ্বাস
              </h1>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-[26px]">
            {new Array(4).fill(
              <div className=" flex flex-col gap-[17px] relative">
                <div>
                  <div>
                    <MdPlayArrow className="bg-[#FE0000] rounded-full text-white text-[25px] absolute top-0 left-0 m-[10px] cursor-pointer" />
                  </div>
                  <Image
                    height={190}
                    width={615}
                    src={"/images/home/video1.png"}
                    alt="crime"
                  />
                </div>
                <div className="">
                  <h1 className=" mb-0 text-[18px] text-white font-semibold">
                    বিশ্বজুড়ে বর্ণিল বর্ষবরণের আয়োজন
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
