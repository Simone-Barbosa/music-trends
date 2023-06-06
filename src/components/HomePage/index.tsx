import axios from "axios";
import { useEffect, useState } from "react";
import CardBand from "../CardBand";
import './home-page.css'
import { useNavigate } from "react-router-dom";

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

  async function getArtists() {
    const response = await axios({
      method: "get",
      url: "https://api.spotify.com/v1/search?q=genre%3Asoul&type=artist&market=BR&limit=21&offset=0",
      headers: {
        Authorization:
          "Bearer BQBsIixr4KdulqvdPKOWrAl1bTOlAQrxVAWcCr3gWVt5AxpI6w2kWmL0_kzaZQjLdcwxJ9m1ASEriSjRpEUvF3Idtim0vN8vTnBcxDnPrcaR2fjPpzI",
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

  return (
    <div className="container">
      <header className="homePageHeader">
        <h1>Music Trends</h1>
      </header>

      <section className="cardBandsSection">
        {artists.map((artist) => {
          return (
            <CardBand
              name={artist.name}
              genres={artist.genres}
              backgroundImage={artist.images[1].url}
              onClick={() => clickCardBand(artist.id)}
            />
          );
        })}
      </section>
    </div>
  );
}