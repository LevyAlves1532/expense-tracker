import { useContext } from "react"

import { UserContext } from "../context/userContext";

import { languages } from "../lang/languages";

export const useLanguage = () => {
  const { language } = useContext(UserContext);

  const t = (path: string) => {
    const keys = path.split('.');
    let resultPath: any = languages[language];
    
    keys.forEach(key => {
      if (resultPath[key] && typeof resultPath === 'object') {
        resultPath = resultPath[key];
      } else if (!resultPath[key] && typeof resultPath === 'object') {
        resultPath = path;
      }
    });
    
    return resultPath;
  }

  const convertMoney = (money: number = 0) => {
    const convertedMoney = money.toLocaleString(language, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    const acronym = {
      'pt-BR': 'R$',
      'en-US': '$',
      'es-ES': '€',
    };
    
    return `${acronym[language]}${convertedMoney}`;
  }

  return { t, convertMoney };
}
