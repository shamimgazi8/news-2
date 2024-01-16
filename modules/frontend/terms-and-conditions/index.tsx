import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Heading from "./Heading";
import Conditions from "./Conditions";

export default function TermsAndConditons() {
  return (
    <div className=" w-[830px] m-auto mb-[60px]">
      <Heading />
      <Conditions />
      <Conditions />
      <Conditions />
      <Conditions />
      <Conditions />
    </div>
  );
}
