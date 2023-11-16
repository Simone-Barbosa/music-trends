import { usePreferencesUser } from '../../context/userPreferences.context';
import { getStyleMode } from '../../shared/colors';
import './header-styles.css';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { Button } from 'antd';
import { useState } from 'react';
import ModalPreferences from '../ModalPreferences';

export default function Header() {
    const { darkMode, setDarkMode } = usePreferencesUser();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    function changeSyleMode() {
        const getMode = {
            dark: 'light',
            light: 'dark',
        };
        localStorage.setItem('styleMode', getMode[darkMode]);
        setDarkMode(getMode[darkMode]);
    }
    console.log(isModalOpen);
    return (
        <>
            <header
                className="homePageHeader"
                style={{
                    background: getStyleMode(darkMode, 'background_card_band'),
                    color: getStyleMode(darkMode, 'font_color_music_trends'),
                }}
            >
                <a href="/" className="homePageTitle" style={{ color: getStyleMode(darkMode, 'font_color_music_trends') }}>
                    Music Trends
                </a>

                <div className="headerLinks">
                    <div>
                        <a href="/about" style={{ color: getStyleMode(darkMode, 'font_color_music_trends') }}>
                            About
                        </a>
                    </div>

                    <button
                        className="buttonDarkMode"
                        onClick={() => {
                            changeSyleMode();
                        }}
                    >
                        {darkMode === 'light' ? (
                            <BsSunFill size={30} color={getStyleMode(darkMode, 'font_color_music_trends')} />
                        ) : (
                            <BsFillMoonStarsFill size={30} color={getStyleMode(darkMode, 'font_color_music_trends')} />
                        )}
                    </button>
                </div>

                <Button type="primary" onClick={showModal}>
                    Set Preferences
                </Button>
            </header>
            <ModalPreferences open={isModalOpen} />
        </>
    );
}
