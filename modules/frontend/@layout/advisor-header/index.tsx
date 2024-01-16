"use client";
import { useAdvisorsPublicProfileQuery } from "@/appstore/advisor/api";
import { CamelCase } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { AiOutlineTags } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiLanguage } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";

const AdvisorHeader = ({ type, advisorSlug }: any) => {
  const { data: profileData, isFetching } = useAdvisorsPublicProfileQuery({
    rcicNumber: advisorSlug,
  });
  const path = usePathname();
  const pathName = path.split("/");
  const finalPathFrontend = pathName[1];
  const finalPathAdmin = pathName[4];
  const finalPathName =
    type && type == "secure" ? finalPathAdmin : finalPathFrontend;
  console.log({ profileData });

  const jsonString =
    profileData?.socialLink && profileData?.socialLink !== null
      ? profileData?.socialLink
      : "[]";
  const socialLinks = jsonString ? JSON.parse(jsonString) : [];

  return (
    <section className="py-5 lg:pt-[60px]">
      <div className="container">
        <div className="max-w-[970px] w-full ">
          <div className="h-[270px]">
            <Image
              src={
                profileData?.bannerImage && profileData?.bannerImage !== ""
                  ? profileData?.bannerImage
                  : "/images/misc/advisor-details.png"
              }
              alt="Advisor Details"
              width={960}
              height={690}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-[970px] w-full">
          <div className="flex flex-col lg:flex-row  items-center lg:items-end gap-3 lg:gap-[30px] px-[30px] pb-[30px] -mt-[40px] rounded-md border border-t-0">
            <div className="w-[125px] h-[125px]  z-10 relative border-white rounded-[6px] bg-white shrink-0">
              <Image
                src={
                  profileData?.picture && profileData?.picture !== ""
                    ? profileData?.picture
                    : "/images/misc/avatar-sm.png"
                }
                alt="Advisor Details"
                width={125}
                height={125}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-3 mt-5">
              <div className="w-[100%]">
                <h3 className="mb-2 text-center lg:text-start">
                  <span className="pr-1">
                    {CamelCase(profileData?.firstName)}
                  </span>
                  <span>{profileData?.lastName}</span>
                </h3>

                <div className="flex flex-col lg:flex-row justify-start items-center  lg:justify-between gap-2 lg:gap-5 w-full">
                  <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start lg:justify-start gap-2 lg:gap-5">
                    <div className="flex items-center gap-2">
                      <AiOutlineTags className="shrink-0" />
                      <span className="whitespace-nowrap">
                        RCIC ({profileData?.rcicNumber})
                      </span>
                    </div>
                    {profileData?.province && (
                      <div className="flex items-center gap-2">
                        <RiMapPinLine className="shrink-0	" />
                        <span className="text-base">
                          {profileData?.province}, {profileData?.country}
                        </span>
                      </div>
                    )}
                    {profileData?.languages && (
                      <div className="flex items-start lg:items-center gap-2">
                        <HiLanguage className="shrink-0	mt-1 lg:mt-0" />
                        <span className="text-base text-center lg:text-start w-[200px] md:w-full inline-block">
                          {profileData?.languages}
                        </span>
                      </div>
                    )}
                    {/* {profileData?.businessAddress && (
                      <div className="flex items-start gap-2">
                        <RiMapPinLine className="mt-1 shrink-0	" />
                        <span className="text-sm">
                          {profileData?.businessAddress}
                        </span>
                      </div>
                    )} */}
                  </div>
                  {socialLinks.length > 0 && (
                    <div className="flex items-center gap-3">
                      {socialLinks?.map((item: any, i: any) => {
                        const rendredMidea = () => {
                          if (
                            item?.media === "Facebook" &&
                            item?.link &&
                            item?.link !== ""
                          ) {
                            return (
                              <a href={`${item?.link}`} target="_blank">
                                <FaFacebook className="text-xl" />
                              </a>
                            );
                          }
                          if (
                            item?.media === "Twitter" &&
                            item?.link &&
                            item?.link !== ""
                          ) {
                            return (
                              <a href={`${item?.link}`} target="_blank">
                                <FaTwitter className="text-xl" />
                              </a>
                            );
                          }
                          if (
                            item?.media === "Instagram" &&
                            item?.link &&
                            item?.link !== ""
                          ) {
                            return (
                              <a href={`${item?.link}`} target="_blank">
                                <FaInstagram className="text-xl" />
                              </a>
                            );
                          }
                          if (
                            item?.media === "Linkedin" &&
                            item?.link &&
                            item?.link !== ""
                          ) {
                            return (
                              <a href={`${item?.link}`} target="_blank">
                                <FaLinkedin className="text-xl" />
                              </a>
                            );
                          }
                          return null;
                        };
                        return <>{rendredMidea()}</>;
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[675px]">
            <ul className="flex gap-5 lg:gap-[30px] overflow-auto">
              <li>
                <Link
                  href={`${
                    type == "secure"
                      ? `/author/advisors/${`ascdascd`}/all-post`
                      : `/${profileData?.rcicNumber}`
                  }`}
                  className={`inline-block py-[10px] whitespace-nowrap ${
                    path == `/${profileData?.rcicNumber}` ? `text-primary` : ``
                  }`}
                >
                  All Post
                </Link>
              </li>
              {/* <li>
                <Link
                  href={`${
                    type == "secure"
                      ? `/author/advisors/${`ascdascd`}/about`
                      : `/advisors/${profileData?.rcicNumber}/about`
                  }`}
                  className={`inline-block py-[10px] ${
                    finalPathName == "about" ? `text-primary` : ``
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={`${
                    type == "secure"
                      ? `/author/advisors/${`ascdascd`}/services`
                      : `/advisors/${profileData?.rcicNumber}/services`
                  }`}
                  className={`inline-block py-[10px] ${
                    finalPathName == "services" ? `text-primary` : ``
                  }`}
                >
                  Services
                </Link>
              </li> */}
              <li>
                <Link
                  href={`${
                    type == "secure"
                      ? `/author/advisors/${`ascdascd`}/contact`
                      : `/${profileData?.rcicNumber}/about`
                  }`}
                  className={`inline-block py-[10px] whitespace-nowrap ${
                    path == `/${profileData?.rcicNumber}/about`
                      ? `text-primary`
                      : ``
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={`${
                    type == "secure"
                      ? `/author/advisors/${`ascdascd`}/contact`
                      : `/${profileData?.rcicNumber}/contact`
                  }`}
                  className={`inline-block py-[10px] whitespace-nowrap ${
                    path == `/${profileData?.rcicNumber}/contact`
                      ? `text-primary`
                      : ``
                  }`}
                >
                  Contact Info
                </Link>
              </li>
            </ul>
            <div className="w-full h-[2px] bg-[#f1f1f1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorHeader;
