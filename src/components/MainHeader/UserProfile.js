import React from "react";

import { ArrowDown } from "../../assets/icons/ArrowDown";
// import CurrentUser from "../../assets/images/current-user.jpg";


export default function UserProfile() {
  return (
    <div className={"flex items-center gap-3"}>
      <div className={"hidden my-0 mx-[10px] lg:flex flex-col gap-[3px] items-end"}>
        <span className={"text-base font-normal text-black"}>Anima Agrawal</span>
        <span className={"text-sm font-normal text-grey"}>U.P, India</span>
      </div>
      <img
        src={"/assets/images/current-user.jpg"}
        alt="Anima Agrawal"
        width="38px"
        height="38px"
        className={"rounded-full"}
      />
      <ArrowDown />
    </div>
  );
}
