'use client'
import Reviews from "./components/Reviews";
import Banner from "./components/Banner";
import TechService from "./ui/TechService";
import { useLang, useLangPack } from "@/store";
import { useEffect } from "react";



export default function Home() {
  const lang = useLang();
  const currentLang = lang.currentLang;
  const langPack = useLangPack();
  const currentLangPack = langPack.currentLangPack;

  useEffect(() => {
    if (currentLang === "en") {
      return langPack.changeLangToEn();
    }
    if (currentLang === "ua") {
      return langPack.changeLangToUa();
    }
    if (currentLang === "ru") {
      return langPack.changeLangToRu();
    }
  }, [currentLangPack, currentLang]);


  return (
    <main>
      <Banner />
      <Reviews />
      <TechService />
    </main>
  );
}
