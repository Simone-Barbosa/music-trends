import { useEffect, useState } from 'react';
import CardBand from '../CardBand';
import './home-page.css';
import { useNavigate } from 'react-router-dom';
import { usePreferencesUser } from '../../context/userPreferences.context';
import { getStyleMode } from '../../shared/colors';
import { axiosInstance } from '../../axios';

interface Artist {
    id: string;
    name: string;
    genres: string[];
    backgroundColor?: string;
    images: {
        height: number;
        url: string;
        width: number;
    }[];
}

export default function HomePage() {
    const [artists, setArtists] = useState<Artist[]>([]);
    const navigate = useNavigate();
    //genre composto: power%20metal / hard%20rock
    async function getArtists() {
        const response = await axiosInstance.get('search?q=genre%3Apop&type=artist&market=BR&limit=25&offset=0');
        setArtists(response.data.artists.items);
    }

    useEffect(() => {
        getArtists();
    }, []);

    const clickCardBand = (artistID: string) => {
        navigate(`/artist/${encodeURIComponent(artistID)}`);
    };

    const { darkMode } = usePreferencesUser();

    return (
        <>
            <div className="homePageStart">
                <h3>Music Trends</h3>
                <h4> Here we will have the Music Trends Introduction </h4>
            </div>
            <section
                className="cardBandsSection"
                style={{
                    background: getStyleMode(darkMode, 'background_music_trends'),
                    color: getStyleMode(darkMode, 'font_color_music_trends'),
                }}
            >
                {artists.map((artist) => {
                    return <CardBand key={artist.id} name={artist.name} genres={artist.genres} backgroundImage={artist.images[1].url} onClick={() => clickCardBand(artist.id)} />;
                })}
            </section>
        </>
    );
}
