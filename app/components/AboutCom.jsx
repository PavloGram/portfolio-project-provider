'use client'
import React, { useEffect } from 'react'
import logo from "../../public/logoNoBgZip.jpg";
import Image from "next/image";
import {useLangObj} from '@/store';

function AboutCom() {
  const langObj = useLangObj();
  const currentLangPack = langObj.currentLang.langPack;
  return (
    <section>
        <div className="max-w-[1140px] mx-auto my-[50px] xl:my-[90px] px-3 flex flex-wrap gap-5 justify-center items-center">
          
          <div className='w-[420px] h-[300px]'>
            <Image src={logo} alt="logo"  />
            </div>
          <div className=" min-w-[320px] px-10 md:max-w-[50%] md:px-0">
            <p>
              {currentLangPack.about}
            </p>
          </div>
        </div>
      </section>
  )
}

export default AboutCom