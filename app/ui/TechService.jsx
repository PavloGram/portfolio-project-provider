import { useLangPack } from "@/store";
import Link from "next/link";
import React from "react";

function TechService() {
  const langPack = useLangPack();
  const currentLangPack = langPack.currentLangPack;
  return (
    <section className="w-full h-[280px] bg-tech-bg  bg-center">
      <div className="max-w-[1140px] mx-auto text-white py-[90px] flex flex-col items-center md:flex-row md:justify-between md:px-20">
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
