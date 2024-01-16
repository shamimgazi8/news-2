import Image from "next/image";
import React from "react";

export default function AdvertiseSpace2() {
  return (
    <div className=" w-full flex items-center justify-center">
      <Image
        height={127}
        width={1040}
        src={"/images/catagories/adv2.png"}
        alt="crime"
        className="my-[26px]"
      />
    </div>
  );
}
