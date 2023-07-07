import { useUserPreferences } from "../../context/userPreferences.context";
import "./header-styles.css";

export default function Header() {
  const { darkMode, setDarkMode } = useUserPreferences()

  function changeSyleMode() {

    if (darkMode === "light") {
      setDarkMode('dark');
    } else {
      setDarkMode('light');
    }

  }

  return (
    <header className="homePageHeader">
      <h1>Music Trends</h1>
      {darkMode}
      <div>
        <button onClick={() => { changeSyleMode() }}>Change DarkMode </button>
      </div>
    </header>
  );
}
