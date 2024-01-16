import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CartMedium() {
  return (
    <div>
      <Link href={"/"} className="group hover:text-inherit">
        <div>
          <div className="">
            <Image
              height={75}
              width={615}
              src={"/images/catagories/ct1.png"}
              alt="crime"
              className="mb-[5px]"
            />
          </div>
          <div className=" grid gap-3">
            <h1 className=" mb-0 text-xl line-clamp-2 group-hover:text-primary transition-all">
              নাশকতাকারীদের তথ্য দিলে ২০ হাজার থেকে ১ লাখ টাকা পুরস্কার: আইজিপি
            </h1>
            <p className=" mb-0 line-clamp-4">
              নির্বাচন নিয়ে নাশকতাকারীদের তথ্য দিলে ২০ হাজার টাকা থেকে ১ লাখ
              টাকা পুরস্কারের ঘোষণা দিয়েছেন পুলিশের মহাপরিদর্শক (আইজিপি) চৌধুরী
              আবদুল্লাহ আল-মামুন।
            </p>
            <p className=" mb-0">ডিসেম্বর ২৭,২০২৩</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
