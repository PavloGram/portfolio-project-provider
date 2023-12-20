import { enPackage, ruPackage, uaPackage } from '@/app/lib/langLibrary'
import {create} from 'zustand'

export const useModal = create((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
  }))

  export const useLang = create((set) => ({
    currentLang: 'en',
    changeLangToEn: () => set({ currentLang: 'en' }),
    changeLangToUa: () => set({ currentLang: 'ua' }),
    changeLangToRu: () => set({ currentLang: 'ru' }),
    
  }))

  export const useLangPack = create((set) => ({
    currentLangPack: enPackage,
    changeLangToEn: () => set({ currentLangPack: enPackage }),
    changeLangToUa: () => set({ currentLangPack: uaPackage }),
    changeLangToRu: () => set({ currentLangPack: ruPackage }),
    
  }))