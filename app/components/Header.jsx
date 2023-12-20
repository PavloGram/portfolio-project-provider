"use client";
import React, { useState } from "react";
import menuIcon from "../../public/svg/menuIcon.svg?url";
import closeIcon from "../../public/svg/closeIcon.svg?url";
import Image from "next/image";
import Navigate from "./Navigate";
import logo from "../../public/logoNoBgZip.png";
import Link from "next/link";
import PhoneSvg from "../ui/PhoneIcon";
import MailSvg from "../ui/MailIcon";
import InstagramIcon from "../ui/InstagramIcon";
import FacebookIcon from "../ui/FacebookIcon";
import LangToggle from "../ui/LangToggle";
import { useLangPack } from "@/store";
import TwitterIcon from "../ui/TwitterIcon";

function Header() {
  const [actMobMeny, setActMobMenu] = useState(false);
  const langPack = useLangPack();
  const currentLangPack = langPack.currentLangPack;

  return (
    <header className="mx-auto">
      <div className="bg-[#079fd1] hidden md:block">
        <div className="max-w-[1140px] mx-auto hidden sm:flex z-40  text-white  text-xs  p-3 flex-wrap gap-2  justify-center xl:justify-between md:text-base ">
          <ul className="flex gap-x-[20px] items-center">
            {currentLangPack.footer.officeTel?.map((el) => {
              return (
                <li key={el.id}>
                  <Link
                    className="headerLink flex items-center gap-1  transition hover:text-black"
                    href={`tel:${el.telLink}`}
                  >
                    <PhoneSvg width={12} height={12} />
                    {el.telText}
                  </Link>
                </li>
              );
            })}

            <li>
              <Link
                href={`mailto:${currentLangPack.footer.officeEmail}`}
                className="headerLink flex items-center gap-1 transition hover:text-black"
              >
                <MailSvg width={14} height={14} />
                {currentLangPack.footer.officeEmail}
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Link
              href="http://metannet.speedtestcustom.com/"
              className="hover:text-black transition-colors duration-300"
            >
              {currentLangPack.footer.internetQuality}
            </Link>
            <Link href="/" className="headerLink">
              <FacebookIcon width={15} height={16} />
            </Link>
            <Link href="/" className="headerLink">
              <InstagramIcon width={15} height={16} />
            </Link>
            <Link href="/" className="headerLink">
              <TwitterIcon width={15} height={16} />
            </Link>
            <LangToggle />
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <Link href="/">
          <div className="mx-auto my-5 w-[210px] h-[150px]">
            <Image src={logo} alt="logo" priority={true} />
          </div>
        </Link>

        <div className="relative p-[10px] bg-[#079fd1] flex justify-between items-center ">
          <span className="uppercase font-bold text-white">menu</span>{" "}
          <LangToggle />
          <button type="button" onClick={() => setActMobMenu(!actMobMeny)}>
            <Image
              src={actMobMeny ? closeIcon : menuIcon}
              alt="icon"
              width={35}
              height={35}
            />
          </button>
          <div className="absolute top-[100%] left-0 w-full h-[600px]  overflow-hidden pointer-events-none ">
            <nav
              className={`trans shadow-[0_0_30px_0_rgba(0,0,0,0.08)] rounded-b-xl absolute top-0 left-0 flex flex-col items-center py-5 bg-white gap-2 w-full transition duration-300 ${
                actMobMeny ? "translate-y-0 " : "translate-y-[-100%] "
              } pointer-events-auto`}
            >
              <Link href="/" onClick={() => setActMobMenu(!actMobMeny)}>
                {currentLangPack.menu.home}
              </Link>
              <Link href="/internet" onClick={() => setActMobMenu(!actMobMeny)}>
                {currentLangPack.menu.internet}
              </Link>
              <Link href="/film&tv" onClick={() => setActMobMenu(!actMobMeny)}>
                {currentLangPack.menu.filmAndTv}
              </Link>

              <Link href="/web" onClick={() => setActMobMenu(!actMobMeny)}>
                {currentLangPack.menu.camera}
              </Link>
              <Link href="/action" onClick={() => setActMobMenu(!actMobMeny)}>
                {currentLangPack.menu.actions}
              </Link>
              <Link href="/contacts" onClick={() => setActMobMenu(!actMobMeny)}>
                {currentLangPack.menu.contacts}
              </Link>
              <Link href="/about" onClick={() => setActMobMenu(!actMobMeny)}>
                {currentLangPack.menu.about}
              </Link>
              <Link
                href="/pay"
                
                onClick={() => setActMobMenu(!actMobMeny)}
              >
                {currentLangPack.menu.pay}
              </Link>
              
              <div className="flex gap-x-3 mt-5">
                <Link
                  className="w-8 h-8 rounded-full bg-[#079fd1] flex justify-center items-center"
                  href="/"
                >
                  <FacebookIcon />
                </Link>
                <Link
                  className="w-8 h-8 rounded-full bg-[#079fd1] flex justify-center items-center"
                  href="/"
                >
                  <InstagramIcon width={18} height={20} />
                </Link>
                <Link
                  className="w-8 h-8 rounded-full bg-[#079fd1] flex justify-center items-center"
                  href="/"
                >
                  <TwitterIcon width={17} height={18} />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <Navigate />
    </header>
  );
}

export default Header;
