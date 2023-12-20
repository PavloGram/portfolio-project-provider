"use client";
import React, { useEffect, useState } from "react";
import closeIcon from "../../public/svg/closeIcon.svg?url";
import Image from "next/image";
import { useLang, useLangPack, useModal } from "@/store";
import FormLoader from "../ui/FormLoader";
import { usaState } from "../lib/state";
import { usePathname } from "next/navigation";
import ReqMsg from "../ui/ReqMsg";

function Modal() {
  const [name, setName] = useState("");
  const [stateList, setStateList] = useState(usaState);
  const [state, setState] = useState('');
  const [tariff, setTariff] = useState([]);
  const [selectTariff, setSelectTariff] = useState([]);
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [isActLoader, setIsActLoader] = useState(false);
  const lang = useLang();
  const currentLang = lang.currentLang;
  const langPack = useLangPack();
  const currentLangPack = langPack.currentLangPack;
  const [reqMsg, setReqMsg] = useState("success");
  const [isActMsg, setIsActMsg] = useState(false);
  const modal = useModal();
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
  }, [currentLang]);

  useEffect(() => {
    if (currentLang === "en") {
      return setStateList(
        usaState.sort((a, b) => a.engName.localeCompare(b.engName))
      );
    } else {
      setStateList(usaState.sort((a, b) => a.uaName.localeCompare(b.uaName)));
    }
  }, [currentLang]);

  useEffect(() => {
    if (path === "/internet") {
      return setTariff(currentLangPack.internetPack);
    }
    if (path === "/film&tv") {
      return setTariff(currentLangPack.TvPack);
    }
    if (path === "/web") {
      return setTariff(currentLangPack.securetyPack);
    }
  }, [currentLangPack, currentLang, path]);

  function toggleStateMsg() {
    setIsActMsg(false);
  }


  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      state,
      selectTariff,
      tel,
      address
    };
   
    setIsActLoader(true);

    setName("");
    setState(currentLangPack.formText.state);
    setSelectTariff(currentLangPack.formText.terrif)
    setTel("");
    setAddress("")
   
   

    fetch("/api/modalForm", {
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
      });
  }

  return (
    <section>
      <div
        className={` ${
          modal.isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } fixed z-[1000] top-0 left-0 w-full h-full bg-black/[0.5] flex justify-center items-center  md:items-start xl:items-center overflow-y-auto transition-opacity duration-300`}
        onClick={() => modal.close()}
      >
        <div
          className={`${
            modal.isOpen ? "block" : "hidden"
          } relative mt-2  py-10 px-9 bg-white pointer-events-auto min-w-[260px]  max-w-[450px] rounded-md overflow-hidden`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="absolute top-0 right-0 w-9 h-9 bg-[#079fd1]"
            onClick={() => modal.close()}
          >
            <Image src={closeIcon} alt="icon" />
          </button>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
            <input
              value={name}
              name="name"
              type="text"
              className="leading-6 py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500"
              placeholder={currentLangPack.formText.name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <select
              name="location"
              className=" py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500"
              onChange={(e) => setState(e.target.value)}
              
           >
              <option>{currentLangPack.formText.state}</option>
              {stateList.map((el) => {
                return (
                  <option key={el.id} value={el.engName}>
                    {currentLang === "en" ? el.engName : el.ruName}
                  </option>
                );
              })}
            </select>

            <select
              name="price"
              onChange={(e) => setSelectTariff(e.target.value)}
              className="py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500"
            >
              <option>{currentLangPack.formText.terrif}</option>
              {tariff?.map((el) => {
                return (
                  <option key={el.id} value={el.tarrifName}>
                    {el.tarrifName}
                  </option>
                );
              })}
            </select>
            <input
              value={tel}
              type="tel"
              className="py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500"
              placeholder={currentLangPack.formText.telNumber}
              onChange={(e) => setTel(e.target.value)}
              required
            ></input>
            <textarea
              value={address}
              cols={40}
              rows={6}
              className="py-[10px] pr-4 pl-[30px] outline-none border border-[#ced4da] rounded focus:border-blue-500"
              placeholder={currentLangPack.formText.address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className=" py-[6px] px-3 mx-auto bg-[#079fd1] rounded text-[17px] text-white"
            >
              {currentLangPack.formText.sendApp}
            </button>
          </form>
        </div>

        {isActLoader && <FormLoader />}
        <ReqMsg value={reqMsg} isActive={isActMsg} />
      </div>
    </section>
  );
}

export default Modal;
