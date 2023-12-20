"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import promoImg from "../../public/promotional-offer.jpg";
import { useLang, useLangPack } from "@/store";

function ActionCom() {
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
    <section>
      <ul className="max-w-[1140px] my-[50px] xl:my-[90px] mx-auto px-10">
        {currentLangPack.actions.map((el) => {
          return (
            <li
              key={el.id}
              className=" flex gap-16 flex-col items-center md:flex-row shadow-[0_0_12px_0_rgba(0,0,0,0.2)] rounded-xl p-5"
            >
              <Image
                src={promoImg}
                alt="promo"
                width={509}
                height={309}
                className=" w-[200px]"
              />
              <p>{el.desc}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ActionCom;
