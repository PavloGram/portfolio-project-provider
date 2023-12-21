"use client";
import React from "react";
import { useLangObj } from "@/store";
import logo from "../../public/logoNoBgZip.jpg";
import Image from "next/image";

function Banner() {
  const langObj = useLangObj();
  const currentLangPack = langObj.currentLang.langPack;

  return (
    <section >
      <div
        className={` w-full h-[600px] md:h-[730px] lg:h-[920px] bg-blue-hero-bg bg-cover bg-center flex flex-col justify-center md:flex-row items-center`}
      >
        <div className="max-w-[1140px] p-5 flex flex-col gap-y-10 text-center md:text-left md:flex-row">
          <div className="">
            <h1 className="text-[31px] md:text-[40px] lg:text-[40px]">
              {currentLangPack.homePage.title}
            </h1>
            <p className="md:text-[22px]">
              {currentLangPack.homePage.description}
            </p>
          </div>

          <Image
                    src={logo}
                    alt="logo"
                    className="hidden md:block w-[420px] h-[200px]"
                  />
        </div>
      </div>
    </section>
  );
}

export default Banner;
