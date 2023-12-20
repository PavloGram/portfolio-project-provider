'use client'
import React from "react";
import { Carousel } from "react-responsive-carousel";
import {useLangObj} from "@/store";
import Image from "next/image";

function Banner() {

  const langObj = useLangObj();
  const currentLangPack = langObj.currentLang.langPack;


  return (
    <section className="relative">
      <div className=" absolute top-0 left-0 w-full h-full z-40"></div>
      <Carousel
        set
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        interval={5000}
      >
        {currentLangPack.homePage.map((el, i) => {
          return (
            <div
              key={el.id}
              className={` w-full h-[600px] md:h-[730px] lg:h-[920px] ${el.bg} bg-cover bg-center flex flex-col justify-center md:flex-row items-center`}
            >
              <div className="max-w-[1140px] p-5 flex flex-col gap-y-10 text-center md:text-left md:flex-row">
                <div className="">
                  <h1 className="text-[31px] md:text-[40px] lg:text-[40px]">
                    {el.title}
                  </h1>
                  <p className="md:text-[22px]">{el.description}</p>
                </div>
          
                  <Image
                    src={el.iconUrl}
                    alt="logo"
                    className="hidden md:block w-[420px] h-[300px]"
                  />
            
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
    
  );
}

export default Banner;
