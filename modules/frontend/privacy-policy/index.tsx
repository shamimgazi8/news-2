import Link from "next/link";
import React from "react";
import Heading from "./@components/Heading";
import Privacy from "./@components/Privacy";

export default function PrivacyPolicy() {
  return (
    <div className=" w-[830px] m-auto mb-[60px]">
      <Heading />
      <Privacy />
      <Privacy />
      <Privacy />
      <Privacy />
    </div>
  );
}
