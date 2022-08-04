import {defineStore} from "pinia";
import i18n, {getCurrentLanguage, getLocale, setCurrentLanguage} from "@/lang";

import ElementPlusLocaleZhCn from 'element-plus/lib/locale/lang/zh-cn';
import ElementPlusLocaleEn from 'element-plus/lib/locale/lang/en';
import type {LANGUAGE} from "@/config";

const element = {
  'zh': ElementPlusLocaleZhCn,
  'en': ElementPlusLocaleEn,
}

const useLanguage = defineStore({
  id: 'language-pinia',
  state: () => ({
    language: <LANGUAGE> getLocale(),
    // @ts-ignore
    locale: element[getLocale()]
  }),
  getters: {
    getLanguage(): LANGUAGE {
      return this.language || getCurrentLanguage() + '';
    }
  },
  actions: {
    setLanguage(lang: LANGUAGE) {
      this.language = lang;
      this.locale = element[lang];
      setCurrentLanguage(this.language);
      // @ts-ignore
      i18n.global.locale = this.language;
    }
  }
})

export default useLanguage;
