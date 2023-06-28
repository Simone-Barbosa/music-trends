import { createContext, useContext, useState } from "react";

interface UserPreferencesContextType {
  darkMode: string;
  setDarkMode: any;
}

export const UserPreferencesContext = createContext(
  {} as UserPreferencesContextType
);

export default function UserPreferencesProvider({ children }: any) {
  const [darkMode, setDarkMode] = useState<string>("light");

  return (
    <UserPreferencesContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </UserPreferencesContext.Provider>
  );
}

export function useUserPreferences() {
  const { darkMode, setDarkMode } = useContext(UserPreferencesContext);
  return { darkMode, setDarkMode };
}
