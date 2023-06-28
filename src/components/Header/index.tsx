import { useUserPreferences } from "../../context/userPreferences.context";
import "./header-styles.css";

export default function Header() {
  const {darkMode, setDarkMode} = useUserPreferences()
  
  return (
    <header className="homePageHeader">
      <h1>Music Trends</h1>
      {darkMode}
      <div>
      <button onClick={()=>{setDarkMode('light')}}>Change DarkMode </button>
      </div>
    </header>
  );
}
