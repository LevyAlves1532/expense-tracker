import { createContext, ReactNode, useEffect, useState } from "react";

import { LanguagesTypes } from "../types";

export type UserType = {
  id: number;
  full_name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  profile_image_url: string;
};

export type UserContextType = {
  user: UserType | null;
  language: LanguagesTypes;
  updateUser?: (userData: UserType) => void,
  changeLanguage?: (lang: LanguagesTypes) => void,
  clearUser?: () => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  language: 'pt-BR',
});

const STORAGE_USER_NAME = '@expense_tracker:user';
const STORAGE_LANGUAGE_NAME = '@expense_tracker:language';

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [ user, setUser ] = useState<UserType | null>(null);
  const [ language, setLanguage ] = useState<LanguagesTypes>('pt-BR');

  useEffect(() => {
    const userStorage = localStorage.getItem(STORAGE_USER_NAME);
    const languageStorage = localStorage.getItem(STORAGE_LANGUAGE_NAME);

    if (userStorage)
      setUser(JSON.parse(userStorage) as UserType);

    if (languageStorage)
      setLanguage(languageStorage as LanguagesTypes);
  }, [])

  // Function to update user data
  const updateUser = (userData: UserType) => {
    setUser(userData);
    localStorage.setItem(STORAGE_USER_NAME, JSON.stringify(userData));
  }

  // Function to update the language
  const changeLanguage = (lang: LanguagesTypes) => {
    setLanguage(lang);
    localStorage.setItem(STORAGE_LANGUAGE_NAME, lang);
  }

  // Function to clear user data (e.g., on logout)
  const clearUser = () => {
    localStorage.removeItem(STORAGE_USER_NAME);
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, language, updateUser, changeLanguage, clearUser }}>
      {children}
    </UserContext.Provider>
  )
};

export default UserProvider;
