import { useLang } from "@/store";
import React from "react";

function LangToggle() {
  const lang = useLang();

  const currentLang = lang.currentLang;

  return (
    <div className="flex gap-x-2">
      <button
        type="button"
        onClick={() => lang.changeLangToEn()}
        className={`${
          currentLang === "en"
            ? "bg-white text-[#079fd1]"
            : "bg-[#079fd1] text-white"
        } w-8 h-8  rounded-full  border-2 border-white hover:bg-white hover:text-[#079fd1]  transition text-[14px] font-bold`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => lang.changeLangToUa()}
        className={`${
          currentLang === "ua"
          ? "bg-white text-[#079fd1]"
          : "bg-[#079fd1] text-white"
        } w-8 h-8  rounded-full  border-2 border-white hover:bg-white hover:text-[#079fd1] transition text-[14px] font-bold`}
      >
        UA
      </button>
      <button
        type="button"
        onClick={() => lang.changeLangToRu()}
        className={`${
          currentLang === "ru"
          ? "bg-white text-[#079fd1]"
          : "bg-[#079fd1] text-white"
        } w-8 h-8  rounded-full  border-2 border-white hover:bg-white hover:text-[#079fd1]  transition text-[14px] font-bold`}
      >
        RU
      </button>
    </div>
  );
}

export default LangToggle;
