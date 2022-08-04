
import {createI18n} from "vue-i18n";

import en from '@/lang/en'
import zhCN from '@/lang/zh-cn'

const langKey = 'i18nLang-key'

const messages = {
  en: {
    ...en
  },
  zh: {
    ...zhCN
  }
}

export const getCurrentLanguage = () => {
  return sessionStorage.getItem(langKey)
}

export const setCurrentLanguage = (lang: string) => {
  return sessionStorage.setItem(langKey, lang)
}

export const getLocale = () => {
  const sessionStorageLang = getCurrentLanguage()
  if (sessionStorageLang) return sessionStorageLang;
  const language = navigator.language.toLowerCase();
  const locales = Object.keys(messages)
  for(const locale of locales) {
    if (language.includes(locale)) {
      return locale
    }
  }
  return 'en';
}

const i18n = createI18n({
  locale: getLocale(),
  messages: messages
})

export default i18n;
