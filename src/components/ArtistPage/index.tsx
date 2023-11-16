import './artist-page-styles.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { usePreferencesUser } from '../../context/userPreferences.context';
import { getStyleMode } from '../../shared/colors';
import { axiosInstance } from '../../axios';
import { Progress } from 'antd';

const twoColors = { '0%': '#108ee9', '100%': '#4B0082' };

interface ArtistProps {
    name: string;
    genres: string[];
    popularity: number;
    totalFollowers: number;
    artistPhoto: {
        height: number;
        url: string;
        width: number;
    };
}

interface ArtistTracksProps {
    topTracks: {
        name: string;
        popularity: number;
        duration_ms: number;
        album: {
            name: string;
            release_date: string;
            images: any;
        };
    }[];
}

export default function ArtistPage() {
    const { id } = useParams<{ id: string }>();

    const [artist, setArtist] = useState<ArtistProps>();
    const [tracks, setTracks] = useState<ArtistTracksProps>();

    async function getArtistData() {
        const response = await axiosInstance.get(`artists/${id}`);

        setArtist({
            name: response.data.name,
            genres: response.data.genres,
            popularity: response.data.popularity,
            totalFollowers: response.data.followers.total,
            artistPhoto: response.data.images[0],
        });
    }

    async function getArtistTracks() {
        const response = await axiosInstance.get(`artists/${id}/top-tracks/?market=BR`);

        setTracks({
            topTracks: response.data.tracks,
        });
    }

    useEffect(() => {
        getArtistData();
        getArtistTracks();
    }, []);

    const { darkMode } = usePreferencesUser();

    return (
        <>
            {!artist ? (
                <p className="loadingPage">Carregando página do artista...</p>
            ) : (
                <div
                    className="container"
                    style={{
                        background: getStyleMode(darkMode, 'background_music_trends'),
                        color: getStyleMode(darkMode, 'font_color_music_trends'),
                    }}
                >
                    <div className="containerArtist">
                        <div className="containerPhoto">
                            <h1>{artist.name}</h1>
                            <img src={artist?.artistPhoto.url} />
                        </div>

                        <div className="containerData">
                            <div className="cardDataArtist">
                                <h2> Polularity</h2>
                                <Progress type="dashboard" percent={artist?.popularity} strokeColor={twoColors} strokeWidth={20} trailColor="Silver" />
                            </div>

                            <div className="cardDataArtist">
                                <h2>Followers</h2>
                                <p>{artist?.totalFollowers}</p>
                            </div>

                            <div className="cardDataArtist">
                                <h2>Musical Genres</h2>
                                <p>
                                    {artist?.genres.map((genre) => {
                                        return <p> {genre} </p>;
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="containerMusics">
                        <h1>Top Tracks</h1>
                        <div
                            className="cardTracksTitle"
                            style={{
                                background: getStyleMode(darkMode, 'background_card_band'),
                                border: getStyleMode(darkMode, 'border_card_band'),
                            }}
                        >
                            <div>
                                <p></p>
                                <p> Music </p>
                            </div>

                            <p> Album </p>
                            <p> Release </p>
                            <p> Duration </p>
                            <p> Popularity </p>
                        </div>

                        {tracks?.topTracks.map((track, index) => {
                            return (
                                <div
                                    className="cardTracks"
                                    style={{
                                        background: getStyleMode(darkMode, 'background_card_band'),
                                        border: getStyleMode(darkMode, 'border_card_band'),
                                    }}
                                    key={track.name}
                                >
                                    <div>
                                        <p> {index + 1} </p>
                                        <img src={track.album.images[2].url} />
                                        <p>{track.name}</p>
                                    </div>
                                    <p> {track.album.name}</p>
                                    <p> {track.album.release_date}</p>
                                    <p> {track.duration_ms}</p>
                                    <Progress steps={10} percent={track.popularity} size={10} showInfo={false} trailColor="graySilver" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
}
