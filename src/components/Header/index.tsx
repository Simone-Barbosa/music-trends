import { usePreferencesUser } from "../../context/userPreferences.context";
import { getStyleMode } from "../../shared/colors";
import "./header-styles.css";
import { FaRegSun } from "react-icons/fa"
import { BsFillMoonStarsFill } from "react-icons/bs"

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
      <a href="/" className="homePageTitle" style={{ color: getStyleMode(darkMode, "font_color_music_trends") }}>Music Trends</a>

      <div className="headerLinks">

        <div>
        <a href="/about" style={{ color: getStyleMode(darkMode, "font_color_music_trends")}}>About</a>
        </div>

        <button className="buttonDarkMode"
          onClick={() => { changeSyleMode() }}>
          {(darkMode === 'light' ? <FaRegSun size={30} color={getStyleMode(darkMode, 'font_color_music_trends')} /> : <BsFillMoonStarsFill size={30} color={getStyleMode(darkMode, 'font_color_music_trends')} />)}
        </button>
      </div>
    </header>
  );
}
