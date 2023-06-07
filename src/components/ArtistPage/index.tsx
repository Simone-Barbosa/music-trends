import axios from "axios";
import "./artist-page-styles.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface ArtistProps {
  totalFollowers: number;
  genres: string[];
  artistPhoto: {
    height: number;
    url: string;
    width: number;
  };
  name: string;
  popularity: number;
}

export default function ArtistPage() {
  const { id } = useParams<{ id: string }>();

  const [artist, setArtist] = useState<ArtistProps>();

  async function getArtistData() {
    const response = await axios({
      method: "get",
      url: `https://api.spotify.com/v1/artists/${id}`,
      headers: {
        Authorization:
          `Bearer ${import.meta.env.VITE_API_LEARNING_TOKEN}`,
      },
    });
    console.log(response);
    setArtist({
      name: response.data.name,
      popularity: response.data.popularity,
      totalFollowers: response.data.followers.total,
      genres: response.data.genres,
      artistPhoto: response.data.images[0],
    });
  }

  useEffect(() => {
    getArtistData();
  }, []);

  return (
    <div>
      <span className="title">Aqui será renderizada a página do artista</span>
      <p>ID do Artista selecionado: {id}</p>
      {!artist ? <p>Carregando artista...</p> : <p>{JSON.stringify(artist)}</p>}
    </div>
  );
}
