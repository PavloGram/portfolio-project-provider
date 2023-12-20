'use client'
import React, { useEffect } from 'react'
import logo from "../../public/logoNoBgZip.png";
import Image from "next/image";
import { useLang, useLangPack } from '@/store';

function AboutCom() {
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
        <div className="max-w-[1140px] mx-auto my-[50px] xl:my-[90px] px-3 flex flex-wrap gap-5 justify-center">
          
          <div className='w-[420px] h-[300px]'>
            <Image src={logo} alt="logo"  />
            </div>
          <div className=" min-w-[320px] max-w-[100%] md:max-w-[50%]">
            <p>
              {currentLangPack.about}
            </p>
          </div>
        </div>
      </section>
  )
}

export default AboutCom