"use client";
import { useLangObj } from "@/store";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function Hero() {
  const [currentPage, setCurrentPage] = useState("");
  const langObj = useLangObj();
  const currentLangPack = langObj.currentLang.langPack;

  const path = usePathname();

  useEffect(() => {
    if (path === "/internet") {
      return setCurrentPage(currentLangPack.menu.internet);
    }
    if (path === "/film&tv") {
      return setCurrentPage(currentLangPack.menu.filmAndTv);
    }
    if (path === "/web") {
      return setCurrentPage(currentLangPack.menu.camera);
    }
    if (path === "/action") {
      return setCurrentPage(currentLangPack.menu.actions);
    }
    if (path === "/contacts") {
      return setCurrentPage(currentLangPack.menu.contacts);
    }
    if (path === "/about") {
      return setCurrentPage(currentLangPack.menu.about);
    }
    if (path === "/vacancies") {
      return setCurrentPage(currentLangPack.menu.vacancies);
    }
    if (path === "/pay") {
      return setCurrentPage(currentLangPack.menu.pay);
    }
  }, [currentLangPack, path]);

  return (
    <section className="hero  w-full h-[276px] lg:h-[460px] bg-cover bg-top flex justify-center items-center text-white font-bold text-[20px]">
      <div>
        <p>{`${currentLangPack.positionOrSite}${currentPage} `}</p>
      </div>
    </section>
  );
}

export default Hero;
