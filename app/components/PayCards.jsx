"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import bankIcon from "../../public/bOA.png";
import { useLang, useLangObj, useLangPack } from "@/store";

function PayCards() {
  const langObj = useLangObj();
  const currentLangPack = langObj.currentLang.langPack;

  return (
    <section>
      <div className="max-w-1140px flex justify-center items-center my-[50px] xl:my-[90px]">
        <div className="relative h-[300px] min-w-[350px] w-[450px]  flex justify-center items-center shadow-[0_0_12px_0_rgba(0,0,0,0.2)] rounded-xl overflow-hidden">
          <Link
            href="/"
            className="linkWrap absolute  w-full h-full transition-colors duration-300 hover:bg-black/70 flex flex-col justify-center items-center gap-y-5"
          >
            <p className="linkText text-[28px] ">{currentLangPack.payText}</p>
            <p className=" block p-2 border-2 border-white rounded">
              {currentLangPack.pay}
            </p>
          </Link>
          <Image src={bankIcon} alt="bank icon" width={318} height={159} />
        </div>
      </div>
    </section>
  );
}

export default PayCards;
