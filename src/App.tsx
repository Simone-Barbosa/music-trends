import { useEffect, useState } from "react";
import CardBand from "./components/CardBand";
import "./general-styles.css";
import axios from "axios";

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

function App() {
  const [artists, setArtists] = useState<Artist[]>([]);


  async function getArtists() {
    const response = await axios({
      method: "get",
      url: "https://api.spotify.com/v1/search?q=genre%3Arock&type=artist&market=BR&limit=15&offset=0",
      headers: {
        Authorization:
          "Bearer BQBNTdrx-IYRh2cer1Gt-J34PGzoldFzhYfIvXKjH-y8_ztvhTSU4npiuoZsrHnEuIIYjRGS8cAwmwU4bGOSjDHOqgvSo-UKqe-2RVkKoEE8e1E6tiQ",
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
        <h1 className="title">Music Trends</h1>
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

export default App;
