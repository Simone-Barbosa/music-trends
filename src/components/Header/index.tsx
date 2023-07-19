import { usePreferencesUser } from "../../context/userPreferences.context";
import { getStyleMode } from "../../shared/colors";
import "./header-styles.css";
import {FaRegSun} from "react-icons/fa"
import {BsFillMoonStarsFill} from "react-icons/bs"

export default function Header() {
  const { darkMode, setDarkMode } = usePreferencesUser()

  function changeSyleMode() {

    const getMode = {
      dark: 'light',
      light: 'dark'
    }
    setDarkMode(getMode[darkMode])
  }

  return (
    <header className="homePageHeader" style={{
      background: getStyleMode(darkMode, "background_card_band"),
      color: getStyleMode(darkMode, "font_color_music_trends")
    }}>
      <h1>Music Trends</h1>
      <div>
        <FaRegSun/>
        <BsFillMoonStarsFill/>
        <button onClick={() => { changeSyleMode() }}>Change DarkMode </button>
      </div>
    </header>
  );
}
