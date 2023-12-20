"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CheckIcon from "../ui/CheckIcon";
import { useLang, useLangPack } from "@/store";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Card({ srcImg }) {
  const [currentTarrifArr, setCurrentTarrifArr] = useState([]);
  const lang = useLang();
  const currentLang = lang.currentLang;
  const langPack = useLangPack();
  const currentLangPack = langPack.currentLangPack;

  const path = usePathname();

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

  useEffect(() => {
    if (path === "/internet") {
      return setCurrentTarrifArr(currentLangPack.internetPack);
    }
    if (path === "/film&tv") {
      return setCurrentTarrifArr(currentLangPack.tvPack);
    }
    if (path === "/web") {
      return setCurrentTarrifArr(currentLangPack.securetyPack);
    }
  }, [currentLangPack, currentLang]);

  return (
    <section>
      <h1 className=" text-[#157696] text-21px md:text-[25px] lg:text-[30px] xl:text-[38px] text-center mt-7 xl:mt-[50px]">
        Тарифи на послугу
      </h1>
      <div className="max-w-[1140px] my-[50px] xl:my-[90]px pt-5 px-5 flex flex-wrap gap-5 mx-auto ">
        {currentTarrifArr?.map((el) => {
          return (
            <div
              key={el.id}
              className="w-[353px] mx-auto  shadow-[0_0_30px_0_rgba(0,0,0,0.08)] rounded-2xl my-10 border-t-4 border-[#fe974e]"
            >
              <div className="relative border-b border-black  py-[60px]">
                <div className="w-[128px] h-[128px] mx-auto">
                  <Image src={srcImg} alt="icon" />
                </div>
                <p className="text-center">{el.price}</p>
                <p className="absolute bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%] inline-block px-[30px] py-[13px] bg-[#079fd1] text-white rounded-[30px] whitespace-nowrap">
                  {el.tarrifName}
                </p>
              </div>
              <div className="w-[320px] mx-auto py-[60px] pl-16">
                <ul>
                  {el.benefits.map( e => {
                    return (
                       <li key={e.id} className="flex gap-x-2 mb-4">
                    <CheckIcon width={17} height={17} />

                    <p>{e.desc}</p>
                  </li>
                    )
                  })}
                 
                
                </ul>
                <div className="flex flex-col ">
                  <p >{el.telling}</p>
                  <ul>
                    {el.numForCall.map(e => {
                    return (<li key={e.id}><Link href={e.telLink}>{e.telText}</Link></li>)
                  })}
                  </ul>
                                   
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Card;
