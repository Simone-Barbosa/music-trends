import axios from "axios";
import "./artist-page-styles.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
    album: {
      name: string;
      release_date: string;
    };
  }[];
}

export default function ArtistPage() {
  const { id } = useParams<{ id: string }>();

  const [artist, setArtist] = useState<ArtistProps>();
  const [tracks, setTracks] = useState<ArtistTracksProps>();

  async function getArtistData() {
    const response = await axios({
      method: "get",
      url: `https://api.spotify.com/v1/artists/${id}`,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_LEARNING_TOKEN}`,
      },
    });

    setArtist({
      name: response.data.name,
      genres: response.data.genres,
      popularity: response.data.popularity,
      totalFollowers: response.data.followers.total,
      artistPhoto: response.data.images[0],
    });
  }

  async function getArtistTracks() {
    const response = await axios({
      method: "get",
      url: `https://api.spotify.com/v1/artists/${id}/top-tracks/?market=BR`,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_LEARNING_TOKEN}`,
      },
    });

    setTracks({
      topTracks: response.data.tracks,
    });
  }

  useEffect(() => {
    getArtistData();
    getArtistTracks();
  }, []);

  return (
    <>
      {!artist ? (
        <p className="loadingPage">Carregando página do artista...</p>
      ) : (
        <div className="container">
          <h1>{artist.name}</h1>

          <div className="containerArtist">
            <div className="containerPhoto">
              <img src={artist?.artistPhoto.url} />
            </div>

            <div className="containerData">
              <div className="cardDataArtist">
                <h2> Polularidade</h2>
                <p> {artist?.popularity} </p>
              </div>

              <div className="cardDataArtist">
                <h2>Seguidores</h2>
                <p>{artist?.totalFollowers}</p>
              </div>

              <div className="cardDataArtist">
                <h2>Gênero musical</h2>
                <p>
                  {artist?.genres.map((genre) => {
                    return <span> {genre} , </span>;
                  })}
                </p>
              </div>
            </div>
          </div>

          <h1>Top Músicas</h1>

          <div className="containerMusics">
            {tracks?.topTracks.map((track) => {
              return (
                <div className="cardTracks" key={track.name}>
                  <h4>{track.name}</h4>
                  <p>Rank: {track.popularity}</p>
                  <p> Album: {track.album.name}</p>
                  <p> Lançado: {track.album.release_date}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
