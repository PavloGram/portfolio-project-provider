import { enPackage, ruPackage, uaPackage } from "@/app/lib/langLibrary";
import { create } from "zustand";

export const useModal = create((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export const useLangObj = create((set) => ({
  currentLang: { lang: "en", langPack: enPackage },
  changeLangToEn: () =>
    set({ currentLang: { lang: "en", langPack: enPackage } }),
  changeLangToUa: () =>
    set({ currentLang: { lang: "ua", langPack: uaPackage } }),
  changeLangToRu: () =>
    set({ currentLang: { lang: "ru", langPack: ruPackage } }),
}));

// export const useLangPack = create((set) => ({
//   currentLangPack: enPackage,
//   changeLangToEn: () => set({ currentLangPack: enPackage }),
//   changeLangToUa: () => set({ currentLangPack: uaPackage }),
//   changeLangToRu: () => set({ currentLangPack: ruPackage }),
// }));

// export const useLang = create((set) => ({
//   currentLang: "en",
//   changeLangToEn: () => set({ currentLang: "en" }),
//   changeLangToUa: () => set({ currentLang: "ua" }),
//   changeLangToRu: () => set({ currentLang: "ru" }),
// }));
