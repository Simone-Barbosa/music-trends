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
        Authorization:
          `Bearer ${import.meta.env.VITE_API_LEARNING_TOKEN}`,
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
        Authorization:
          `Bearer ${import.meta.env.VITE_API_LEARNING_TOKEN}`,
      },
    });

    setTracks({
      topTracks: response.data.tracks,
    });

  }

  useEffect(() => {
    getArtistData();
  }, []);

  useEffect(() => {
    getArtistTracks();
  }, []);

  return (
    <>
      {!artist ? <p className="loadingPage" >Carregando página do artista...</p> :
        <div className="container">

          <header className="titleArtist">
            <h1>{artist?.name}</h1>
          </header>

          <div className="dataArtistSection">

            <div>
              {/* <img src={artist?.artistPhoto.url} width={'70%'} height={'70%'} /> */}
              <img src={artist?.artistPhoto.url} />

            </div>

            <div>

              <div className="cardDataArtist">
                <p className="subTitle"> Polularidade</p>
                <p> {artist?.popularity} </p>
              </div>

              <div className="cardDataArtist">
                <p className="subTitle">Seguidores</p>
                <p>{artist?.totalFollowers}</p>
              </div>

              <div className="cardDataArtist">
                <p className="subTitle">Gênero musical</p>

                <p>{artist?.genres.map((genre) => {
                  return <span> {genre} <br /> </span>
                }
                )}</p>
              </div>

            </div>

            <div className="cardTrackArtist">
              <p className="subTitle">Top Músicas</p>

              <ul>{tracks?.topTracks.map((track) => {
                return <li key={track.name}>
                  {track.name} | Rank: {track.popularity}
                  <br />
                  Album: {track.album.name}
                  <br />
                  Lançado: {track.album.release_date}
                  <br />
                  <br />
                </li>
              }
              )}</ul>
            </div>

          </div>

        </div >
      }
    </>

  );
}
