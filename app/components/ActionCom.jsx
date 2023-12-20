"use client";
import React from "react";
import Image from "next/image";
import promoImg from "../../public/promotional-offer.jpg";
import { useLangObj } from "@/store";

function ActionCom() {
  const langObj = useLangObj();
  const currentLangPack = langObj.currentLang.langPack;
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
