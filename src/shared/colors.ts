import { DarkMode } from "../context/userPreferences.context";

interface MusicTrendsColors {
  background_music_trends: string;
  font_color_music_trends: string;
}

type MusicTrendsColorsProperties =
  | "background_music_trends"
  | "font_color_music_trends";

  const lightModeColors: MusicTrendsColors = {
    background_music_trends: "rgb(225, 223, 223)",
    font_color_music_trends: "blue",
  };
  
  const darkModeColors: MusicTrendsColors = {
    background_music_trends: "black",
    font_color_music_trends: "green",
  };


  export const getStyleMode = (
  darkMode: DarkMode,
  modeColors: MusicTrendsColorsProperties
) => {
  if (darkMode === "light") {
    return lightModeColors[modeColors];
  }

  return darkModeColors[modeColors];
};