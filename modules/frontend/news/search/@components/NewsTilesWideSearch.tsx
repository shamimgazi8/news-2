import Image from "next/image";
import Link from "next/link";

export default function NewsTilesWide() {
  return (
    <Link href={"/"} className="group hover:text-inherit">
      <div>
        <div className=" grid grid-cols-[2fr_1fr] gap-[13px] ">
          <div className=" w-full flex flex-col gap-[6px] ">
            <h1 className=" text-xl mb-[6px]  line-clamp-2 leading-[26px] group-hover:text-primary transition-all ">
              বিশ্বকাপ দলে না থেকেও যে কারণে ব্যর্থতার তদন্তে তামিম
            </h1>
            <p className=" text-base mb-0 leading-[21px] line-clamp-2">
              বিশ্বকাপের পারফরম্যান্স মূল্যায়ন কমিটিকে যখন বিশ্বকাপ শুরুর তিন
              মাস আগের ঘটনাতেও তদন্তের আলো ফেলতে হয়।
            </p>
            <p className=" mb-0 text-[13px] leading-[17px]">ডিসেম্বর ২৭,২০২৩</p>
          </div>
          <div>
            <Image
              height={130}
              width={202}
              src={"/images/catagories/tamim.png"}
              alt="crime"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
