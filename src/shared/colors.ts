import { DarkMode } from '../context/userPreferences.context';

interface MusicTrendsColors {
    background_music_trends: string;
    background_card_band: string;
    border_card_band: string;
    font_color_music_trends: string;
}

type MusicTrendsColorsProperties = 'background_music_trends' | 'background_card_band' | 'border_card_band' | 'font_color_music_trends';

const lightModeColors: MusicTrendsColors = {
    background_music_trends: 'rgb(225, 223, 223)',
    background_card_band: 'whitesmoke',
    border_card_band: 'black',
    font_color_music_trends: 'black',
};

const darkModeColors: MusicTrendsColors = {
    background_music_trends: 'black',
    background_card_band: 'rgb(42, 39, 39)',
    border_card_band: 'grey',
    font_color_music_trends: 'white',
};

export const getStyleMode = (darkMode: DarkMode, modeColors: MusicTrendsColorsProperties) => {
    if (darkMode === 'light') {
        return lightModeColors[modeColors];
    }

    return darkModeColors[modeColors];
};
