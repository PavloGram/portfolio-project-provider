"use client";
import React from "react";
import Link from "next/link";
import ClockIcon from "../ui/ClockIcon";
import MailSvg from "../ui/MailIcon";
import PhoneSvg from "../ui/PhoneIcon";
import MapsIcon from "../ui/MapsIcon";
import InstagramIcon from "../ui/InstagramIcon";
import FacebookIcon from "../ui/FacebookIcon";
import { useLangPack } from "@/store";
import TwitterIcon from "../ui/TwitterIcon";

function Footer() {

  const langPack = useLangPack();
  const currentLangPack = langPack.currentLangPack;


  return (
    <>
      <footer className="bg-[#079fd1] w-full text-white py-16 px-2 text-center md:text-left ">
        <div className=" flex flex-wrap justify-center mx-auto items-start md:gap-x-7">
          <div className="w-[500px] md:w-[330px] lg:w-[220px] xl:w-[255px]">
            <Link href="/"></Link>
            <h2 className="text-[30px]  my-6 font-black uppercase ">
              {currentLangPack.footer.title}
            </h2>
            <p className="mb-4 max-w-[500px] md:max-w-[330px] lg:max-w-[220px] xl:max-w-[255px]">
            {currentLangPack.footer.desc}
            </p>
            <ul className="flex justify-center gap-x-2 md:justify-start">
              <li>
                <Link
                  href="/"
                  className="w-10 h-10 flex justify-center items-center rounded bg-[#157696] hover:bg-[#079fd1] transition-colors duration-300"
                >
                  <FacebookIcon width={16} height={17} />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="w-10 h-10 flex justify-center items-center rounded bg-[#157696] hover:bg-[#079fd1] transition-colors duration-300"
                >
                  <InstagramIcon width={16} height={17} />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="w-10 h-10 flex justify-center items-center rounded bg-[#157696] hover:bg-[#079fd1] transition-colors duration-300"
                >
                  <TwitterIcon width={16} height={17} />
                </Link>
              </li>
            </ul>
          </div>
          <div className=" w-[500px] md:w-[330px] lg:w-[220px] xl:w-[255px]">
            <h2 className="my-7 text-[25px] font-bold"> {currentLangPack.footer.goodLink}</h2>
            <ul className=" flex flex-col gap-y-[10px]">
              <li>
                <Link href="http://metannet.speedtestcustom.com/">
                {currentLangPack.footer.speedDetect}
                </Link>
              </li>
              <li>
                <Link href="/pay">{currentLangPack.menu.pay}</Link>
              </li>

              <li>
                <Link href="/">{currentLangPack.footer.internetQuality}</Link>
              </li>

              <li>
                <Link href="/">{currentLangPack.footer.publicContract}</Link>
              </li>
              <li>
                <Link href="/">{currentLangPack.footer.routSetting}</Link>
              </li>
            </ul>
          </div>
          <address className="not-italic  w-[500px] md:w-[330px] lg:w-[220px] xl:w-[255px]">
            <h2 className="text-[25px] my-7 font-bold">{currentLangPack.footer.contactForMe}</h2>
            <ul className="flex flex-col gap-y-3">
              <li className="flex flex-col items-center gap-x-3 md:flex-row">
                <MapsIcon width={20} height={20} />
                <p>{currentLangPack.footer.place}</p>
              </li>
              <li className="flex flex-col items-center gap-x-3 md:flex-row   ">
                <PhoneSvg width={18} height={20} />

                <ul className="flex flex-col">
                  {currentLangPack.footer.officeTel?.map((el) => {
                    return (<li key={el.id}>
                      <Link  href={`tel:${el.telLink}`}>
                    {el.telText}
                  </Link>
                    </li> )
                  })}                  
                </ul>
              </li>
              <li className="flex flex-col items-center gap-x-3 md:flex-row">
                <MailSvg width={18} height={20} />

                <a href={`mailto:${currentLangPack.footer.officeEmail}`}>{currentLangPack.footer.officeEmail}</a>
              </li>
              <li className="flex flex-col items-center gap-x-3 md:flex-row">
                <ClockIcon width={20} height={20} />
                <p>{currentLangPack.footer.timeForWork}</p>
              </li>
            </ul>
          </address>

          <nav className=" w-[500px] md:w-[330px] lg:w-[220px] xl:w-[255px]">
            <h2 className="text-[25px] my-7 font-bold">{currentLangPack.footer.nav}</h2>
            <ul className="flex flex-col gap-y-2">
              <li>
                <Link href="/">{currentLangPack.menu.home}</Link>
              </li>
              <li>
                <Link href="/internet">{currentLangPack.menu.internet}</Link>
              </li>
              <li>
                <Link href="/film&tv">{currentLangPack.menu.filmAndTv}</Link>
              </li>
              <li>
                <Link href="/web">{currentLangPack.menu.camera}</Link>
              </li>
              <li>
                <Link href="/action">{currentLangPack.menu.actions}</Link>
              </li>
              <li>
                <Link href="/contacts">{currentLangPack.menu.contacts}</Link>
              </li>
              <li>
                <Link href="/about">{currentLangPack.menu.about}</Link>
              </li>
              <li>
                <Link href="/pay">{currentLangPack.menu.pay}</Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </footer>
      <div className="  bg-[#079fd1] w-full   ">
        <div className="max-w-[960px] xl:max-w-[1140px] flex justify-center  mx-auto border-t border-white text-white py-7 px-6 text-center">
          <p>{currentLangPack.rights}</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
