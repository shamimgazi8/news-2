import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propTypes {
  data?: any;
  classes?: {
    root?: any;
  };
}
const BlogCard = ({ data, classes }: any) => {
  return (
    <Link
      href="#"
      className={`grid  group hover:text-inherit ${
        classes?.root ? classes.root : ""
      }`}
    >
      <div
        className={`mb-3  ${classes?.imageWrapper ? classes.imageWrapper : ""}`}
      >
        <Image
          src="/images/home/top-stories.png"
          alt="Top Stories"
          width={960}
          height={540}
          className={`object-cover ${
            classes?.imageStyle ? classes.imageStyle : ""
          }`}
        />
      </div>
      <div>
        <span
          className={`hidden text-white px-2 rounded-sm mb-[10px] ${
            classes?.badge ? classes.badge : ""
          } bg-primary`}
        >
          Gallery
        </span>
        <h2
          className={`line-clamp-2  group-hover:text-primary transition-all mb-[10px] ${
            classes?.title ? classes.title : ""
          }`}
        >
          {data?.title}
        </h2>
        {data?.desc && (
          <p className={`line-clamp-4 ${classes?.desc ? classes?.desc : ""}`}>
            {data?.desc}
          </p>
        )}

        <p className={`mb-0 ${classes?.date ? classes?.date : ""}`}>
          ডিসেম্বর ২৭,২০২৩
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
