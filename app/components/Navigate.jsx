import Image from "next/image";
import Link from "next/link";
import React from "react";
import ChevronUpIcon from "../ui/ChevronUpIcon";
import { useLangPack } from "@/store";

function Navigate() {
  const [scroll, setScroll] = React.useState(0);

  const langPack = useLangPack();
  const currentLangPack = langPack.currentLangPack;

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`trans hidden z-40 md:flex font-bold w-[800px] lg:w-[960px] xl:w-[1140px]   p-4 pl-0 fixed ${
          scroll > 200
            ? "top-0 bg-black/[0.6] text-white"
            : "top-[100px] bg-white text-black"
        } right-[50%] translate-x-[50%] rounded items-center pointer-events-auto`}
      >
        <div>
          <Link
            href="/"
            className="inline-block w-[105px] h-[75px] bg-logo-bg bg-cover "
          ></Link>
        </div>
        <nav className="flex gap-x-1  items-center text-[13px] lg:text-[16px] xl:gap-x-4 ml-auto">
          <Link
            href="/"
            className="hover:text-[#079fd1] transition-colors duration-300"
          >
            {currentLangPack.menu.home}
          </Link>

          <Link
            href="/internet"
            className="hover:text-[#079fd1] transition-colors duration-300"
          >
            {currentLangPack.menu.internet}
          </Link>
          <Link
            href="/film&tv"
            className="hover:text-[#079fd1] transition-colors duration-300"
          >
            {currentLangPack.menu.filmAndTv}
          </Link>

          <Link
            href="/web"
            className="hover:text-[#079fd1] transition-colors duration-300"
          >
            {currentLangPack.menu.camera}
          </Link>
          <Link
            href="/action"
            className="hover:text-[#079fd1] transition-colors duration-300"
          >
            {currentLangPack.menu.actions}
          </Link>
          <Link
            href="/contacts"
            className="hover:text-[#079fd1] transition-colors duration-300"
          >
            {currentLangPack.menu.contacts}
          </Link>
          <Link
            href="/about"
            className="hover:text-[#079fd1] transition-colors duration-300"
          >
            {currentLangPack.menu.about}
          </Link>
          <Link
            href="/pay"
            //  className="px-6 py-3 bg-[#079fd7] rounded"
            className="hover:text-[#079fd1] transition-colors duration-300"
          >
            {currentLangPack.menu.pay}
          </Link>
        </nav>
      </div>
      {scroll > 200 && (
        <button
          className="z-[41] fixed bottom-20 right-6 md:bottom-10 md:right-10  bg-[#079fd1] rounded-md"
          onClick={() => handleUpButton()}
        >
          <ChevronUpIcon width={40} height={40} />
        </button>
      )}
    </>
  );
}

export default Navigate;
