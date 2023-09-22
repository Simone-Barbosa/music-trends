import axios from 'axios';
import { useEffect, useState } from 'react';
import CardBand from '../CardBand';
import './home-page.css';
import { useNavigate } from 'react-router-dom';
import { usePreferencesUser } from '../../context/userPreferences.context';
import { getStyleMode } from '../../shared/colors';

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
        const response = await axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/search?q=genre%3Apop&type=artist&market=BR&limit=25&offset=0',
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_LEARNING_TOKEN}`,
            },
        });
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
    );
}
