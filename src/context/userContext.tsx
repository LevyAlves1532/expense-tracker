import { createContext, ReactNode, useState } from "react";

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
  updateUser?: (userData: UserType) => void,
  clearUser?: () => void;
};

export const UserContext = createContext<UserContextType>();

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [ user, setUser ] = useState<UserType | null>(null);

  // Function to update user data
  const updateUser = (userData: UserType) => {
    setUser(userData);
  }

  // Function to clear user data (e.g., on logout)
  const clearUser = () => {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  )
};

export default UserProvider;
