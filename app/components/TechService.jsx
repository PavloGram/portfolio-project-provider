'use client'
import { useLangObj } from "@/store";
import Link from "next/link";
import React from "react";

function TechService() {
  const langObj = useLangObj();
  const currentLangPack = langObj.currentLang.langPack;
  return (
    <section className="w-full h-[280px] flex flex-row justify-center items-center bg-tech-bg bg-center">
      <div className="w-[1140px] mx-auto text-white  flex flex-col items-center gap-y-4 md:flex-row md:justify-between md:px-20">
        <h2 className="text-[25px]">{currentLangPack.techServ}</h2>
        <div className="flex flex-col text-[20px]">
          {currentLangPack.techCall.map((el) => {
            return (
              <Link key={el.id} href={`tel:${el.telLink}`}>
                {el.telText}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechService;
