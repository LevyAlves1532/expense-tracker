import { useContext } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { LanguagesTypes } from "../types";
import { UserContext } from "../context/userContext";

const ChangeLanguage = () => {
  const { language, changeLanguage } = useContext(UserContext);
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-2.5">
      <label htmlFor="change-language" className="text-sm font-medium">{t('language')}:</label>
      <select 
        id="change-language"
        value={language} 
        className="w-40 text-amber-500 bg-amber-50 outline-0 cursor-pointer p-2.5 rounded-lg border border-gray-200/50 appearance-none"
        onChange={({ target }) => 
          changeLanguage && changeLanguage(target.value as LanguagesTypes)}
      >
        {(t('languages') as { label: string, lang: LanguagesTypes }[])
        .map((lang, index) => (
          <option value={lang.lang} key={index}>{lang.label}</option>
        ))}
      </select>
    </div>
  );
}

export default ChangeLanguage;
