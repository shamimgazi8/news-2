import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CartSmall() {
  return (
    <div>
      {" "}
      <Link href="#" className="group hover:text-inherit">
        <div>
          <div className="mb-4">
            <Image
              height={190}
              width={295}
              src={"/images/home/crime3.png"}
              alt="crime"
            />
          </div>
          <h1 className=" text-xl mb-0 group-hover:text-primary transition-all ">
            ব্যাংক কর্মকর্তার অর্থ হাতাতে ভিসেরা প্রতিবেদনে ‘জালিয়াতি’।
          </h1>
        </div>
      </Link>
    </div>
  );
}
