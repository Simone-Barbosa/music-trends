import { createContext, useContext, useState } from "react";

export type DarkMode = 'dark' | 'light'

interface UserPreferencesContextType {
  darkMode: DarkMode;
  setDarkMode: any;
}

export const UserPreferencesContext = createContext(
  {} as UserPreferencesContextType
);

export default function UserPreferencesProvider({ children }: any) {
  const [darkMode, setDarkMode] = useState<DarkMode>("light");

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
