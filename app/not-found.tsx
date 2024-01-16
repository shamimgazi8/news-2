import Link from "next/link";
import Image from "next/image";
import Header from "@/modules/frontend/@layout/header";
import Footer from "@/modules/frontend/@layout/footer";

const NotFound = () => {
  return (
    <>
      <section className="pt-8 lg:pt-[80px]">
        <div className="container ">
          <div className=" flex justify-center items-center flex-col gap-[26px]">
            <div>
              <Image
                src="/images/notFound.jpg"
                alt="Not Found"
                width={830}
                height={441}
                className={`mb-2 `}
              />
            </div>
            <div>
              <p className=" mb-0 text-[18px leading-[25px] text-center">
                দুঃখিত, আমরা সেই পৃষ্ঠাটি খুঁজে পাইনি
              </p>
              <p className=" mb-0 text-[18px leading-[25px] text-center">
                পৃষ্ঠার ঠিকানা চেক করুন বা নীচে এটি অনুসন্ধান করুন।
              </p>
            </div>
            <div className=" w-[616px]">
              <input
                className=" w-full text-[18px] leading-[25px] px-[16px] py-[13px] border-[1px] rounded-lg outline-none "
                placeholder="অনুসন্ধান করুন"
              />
            </div>
            <div>
              <Link href="/" className="text-[18px] text-primary">
                হোমপেইজে ফিরুন
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;

<div className="text-center flex flex-col justify-center">
  <div className="mb-[40px] w-[830px]"></div>
  <div></div>
</div>;
