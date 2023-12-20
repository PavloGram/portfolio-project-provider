"use client";
import { useLangObj, useModal } from "@/store";
import React, { useEffect } from "react";

function Contact() {
  const langObj = useLangObj();
  const currentLangPack = langObj.currentLang.langPack;
  const modal = useModal();
  return (
    <section className="pt-[75px] pb-[65px] bg-contact-bg ">
      <div className=" max-w-[1140px]  p-[10px] mx-auto flex flex-col items-center lg:flex-row lg:justify-between">
        <p className="text-[23px] text-white text-center mb-[30px] lg:mb-0 font-bold md:text-[40px] lg:text-left">
          {currentLangPack.callback}
        </p>{" "}
        <div className="h-[70px]">
          <button
            onClick={() => modal.open()}
            type="button"
            className="py-[22px] px-[34px] bg-white text-[#079fd1] rounded mb-[30px] lg:mb-0 text-[17px] whitespace-nowrap"
          >
            {currentLangPack.callbackBtn}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
