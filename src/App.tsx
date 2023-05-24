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
      url: "https://api.spotify.com/v1/search?q=genre%3Arock&type=artist&market=BR&limit=10&offset=0",
      headers: {
        Authorization:
          "Bearer BQCdGWd-CCVSvlf5mCsQpN_aDCToVy-MHVRmZivGl_T-7UGaQm-gdZ8RrWYtJ2Go-M2KjVazUV69wjwCqRKP17bRDv9RYGi3WPNgIo7xAt_jlQ8tf9g",
      },
    });
    setArtists(response.data.artists.items);
    
  }

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <>
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
    </>
  );
}

export default App;
