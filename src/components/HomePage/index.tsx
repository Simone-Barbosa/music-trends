import axios from "axios";
import { useEffect, useState } from "react";
import CardBand from "../CardBand";
import "./home-page.css";
import { useNavigate } from "react-router-dom";
import { FirstContext } from "../../App";

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
      method: "get",
      url: "https://api.spotify.com/v1/search?q=genre%3Apower&type=artist&market=BR&limit=25&offset=0",
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

  return (
    <FirstContext.Consumer>
      {(value) => (
        <>
          <div className="container">
            <p>{value}</p>
            <section className="cardBandsSection">
              {artists.map((artist) => {
                return (
                  <CardBand
                    key={artist.id}
                    name={artist.name}
                    genres={artist.genres}
                    backgroundImage={artist.images[1].url}
                    onClick={() => clickCardBand(artist.id)}
                  />
                );
              })}
            </section>
          </div>
        </>
      )}
    </FirstContext.Consumer>
  );
}
