import { createContext, useContext, useState } from "react";

export type DarkMode = 'dark' | 'light'

interface UserPreferencesContextType {
  darkMode: DarkMode;
  setDarkMode: any;
}

export const UserPreferencesContext = createContext(
  {} as UserPreferencesContextType
);

function checkStyleModeLocalStorage(): DarkMode {

  const currentMode: DarkMode = localStorage.getItem('styleMode') as DarkMode;

  if(!currentMode){
    return 'light'
  }

  return currentMode;

}

const currentMode = localStorage.getItem('styleMode');
console.log('preferenes provider = ', currentMode);

export default function UserPreferencesProvider({ children }: any) {

  const [darkMode, setDarkMode] = useState<DarkMode>(checkStyleModeLocalStorage());

  return (
    <UserPreferencesContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </UserPreferencesContext.Provider>
  );
}

export function usePreferencesUser() {
  const { darkMode, setDarkMode } = useContext(UserPreferencesContext);

  console.log('usePreferences = ', darkMode);

  return { darkMode, setDarkMode };
}
