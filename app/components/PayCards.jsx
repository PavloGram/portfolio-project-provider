'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import bankIcon from '../../public/bOA.png'
import { useLang, useLangPack } from '@/store'

function PayCards() {

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
  )
}

export default PayCards