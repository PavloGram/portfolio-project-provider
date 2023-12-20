"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import conatctsThumb from "../../public/tabThumb.png";
import FormLoader from "../ui/FormLoader";
import { useLang, useLangPack } from "@/store";
import ReqMsg from "../ui/ReqMsg";

function ContactForm() {
  const lang = useLang();
  const currentLang = lang.currentLang;
  const langPack = useLangPack();
  const currentLangPack = langPack.currentLangPack;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [isActLoader, setIsActLoader] = useState(false);
  const [isActMsg, setIsActMsg] = useState(false);
  const [reqMsg, setReqMsg] = useState("success");

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

  function toggleStateMsg() {
    setIsActMsg(false);
  }

  function handleSubmit (e) {
    e.preventDefault();
    const data = {
      name,
      tel,
      email,
      message,
    };
    // console.log(data);
    setIsActLoader(true);

    setName("");
    setTel("");
    setEmail("");
    setMessage("");

    fetch("/api/contactForm", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then(() => {
        setIsActLoader(false);
        setReqMsg("success");
        setIsActMsg(true);
        setTimeout(toggleStateMsg, 2500);
      })
      .catch(() => {
        {
          setIsActLoader(false);
          setReqMsg("error");
          setIsActMsg(true);
          setTimeout(toggleStateMsg, 2500);
        }
      })
    
  };

  return (
    <section>
      <div className="max-w-[1140px] mx-auto  md:flex gap-10 text-[17px] my-[50px] xl:my-[90px]">
        <div className="px-9  max-w-[600px] md:max-w-[50%] mx-auto">
          <h1 className="text-[#157696] font-bold text-[22px] mb-10 md:text-[28px] lg:text-[38px]">
            {currentLangPack.formTitle}
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-y-7"
          >
            <input
              value={name}
              name="name"
              type="text"
              placeholder={currentLangPack.formText.name}
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full placeholder:text-[#616161] placeholder:text-[18px] py-2 pl-[30px] pr-3 border-b border-[#f1f1f] outline-none"
            />
            <input
              value={email}
              name="email"
              type="email"
              placeholder={currentLangPack.formText.email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full placeholder:text-[#616161] placeholder:text-[18px] py-2 pl-[30px] pr-3 border-b border-[#f1f1f] outline-none"
            />
            <input
              value={tel}
              name="phone"
              type="tel"
              placeholder={currentLangPack.formText.telNumber}
              required
              onChange={(e) => setTel(e.target.value)}
              className="w-full placeholder:text-[#616161] placeholder:text-[18px] py-2 pl-[30px] pr-3 border-b border-[#f1f1f] outline-none"
            />
            <textarea
              value={message}
              name="message"
              placeholder={currentLangPack.formText.message}
              rows={6}
              required
              onChange={(e) => setMessage(e.target.value)}
              className="w-full placeholder:text-[#616161] placeholder:text-[18px] py-2 pl-[30px] pr-3 border-b border-[#f1f1f] outline-none"
            />
            <button
              type="submit"
              // onClick={() => setIsActMsg(!isActMsg)}
              className="text-[17px] px-[30px] py-[15px] bg-[#079fd1] rounded text-white font-bold leading-normal hover:bg-black transition-colors duration-300"
            >
              {currentLangPack.formText.send}
            </button>
          </form>
        </div>
        <div className="max-w-[600px] md:max-w-[50%] mt-10 mx-auto p-3">
          <Image src={conatctsThumb} alt="thumb" width={631} height={571} />
        </div>
      </div>
      {isActLoader && <FormLoader />}
      <ReqMsg value={reqMsg} isActive={isActMsg} />
    </section>
  );
}

export default ContactForm;
