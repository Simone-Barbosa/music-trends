import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../axios';
import { getStyleMode } from '../../shared/colors';
import CardBand from '../CardBand';
import { usePreferencesUser } from '../../context/userPreferences.context';

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

interface GenreSectionProps {
    genre: string;
    title: string;
}

export default function GenreSection({ genre, title }: GenreSectionProps) {
    const [artists, setArtists] = useState<Artist[]>([]);
    const navigate = useNavigate();
    //genre composto: power%20metal / hard%20rock
    async function getArtists() {
        const response = await axiosInstance.get(`search?q=genre%3A${genre}&type=artist&market=BR&limit=25&offset=0`);
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
            {title}
            <section
                className="cardBandsSection"
                style={{
                    background: getStyleMode(darkMode, 'background_music_trends'),
                    color: getStyleMode(darkMode, 'font_color_music_trends'),
                }}
            >
                {artists.slice(0, 5).map((artist) => {
                    return <CardBand key={artist.id} name={artist.name} genres={artist.genres} backgroundImage={artist.images[1].url} onClick={() => clickCardBand(artist.id)} />;
                })}
            </section>
        </>
    );
}


// code review