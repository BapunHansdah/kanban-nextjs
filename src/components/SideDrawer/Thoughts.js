import React from "react";

import { LampOn } from "../../assets/icons/LampOn";


export default function Thoughts() {
  return (
    <div className={"hidden md:block relative mt-[45px] mx-[22px] mb-0 pb-[30px]"}>
      <div className={"mx-auto flex justify-center items-center bg-grey-light-2 rounded-full w-[66px] h-[66px]"}>
        <span className={"absolute rounded-full w-[33px] h-[33px] bg-lamp-yellow bg-opacity-70 blur-[17px]"}></span>
        <LampOn />
      </div>
      <section className={"-mt-[33px] pt-[37px] bg-grey-light-2 flex flex-col items-center gap-3 rounded-2xl"}>
        <h2 className={"text-sm font-medium text-pure-black"}>Thoughts Time</h2>
        <p className={"text-xs font-normal text-grey mx-5 text-center"}>
          {"We don't have any notice for you, till then you can share your thoughts with your peers."}
        </p>
        <button className={"py-3 px-7 bg-white text-sm font-medium mb-5 rounded"}>Write a message</button>
      </section>
    </div>
  );
}
