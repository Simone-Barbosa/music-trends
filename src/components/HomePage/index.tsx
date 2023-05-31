import axios from "axios";
import { useEffect, useState } from "react";
import CardBand from "../CardBand";
import './home-page.css'

interface Artist {
    id?: string;
    name: string;
    genres: string[];
    backgroundColor?: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
  }
  
export default function HomePage(){
    const [artists, setArtists] = useState<Artist[]>([]);

  async function getArtists() {
    const response = await axios({
      method: "get",
      url: "https://api.spotify.com/v1/search?q=genre%3Asoul&type=artist&market=BR&limit=21&offset=0",
      headers: {
        Authorization:
          "Bearer BQCDuL6nt5gkiokY9OpQJ_PbwGHHdD1o8tFtOV8zgew9ymBYR43EY21JvoyJ6aF-ijj98XaehU0SLgaUTgCrp3i2Y5k_o8bO5oDF3mh252AtRs9AUwg",
      },
    });
    setArtists(response.data.artists.items);
  }

  useEffect(() => {
    getArtists();
  }, []);

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
            />
          );
        })}
      </section>
    </div>
  );
}