import axios from "axios";
import { useEffect, useState } from "react";
import CardBand from "../CardBand";
import "./home-page.css";
import { useNavigate } from "react-router-dom";
import { useUserPreferences } from "../../context/userPreferences.context";

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
      url: "https://api.spotify.com/v1/search?q=genre%3Ahard%20rock&type=artist&market=BR&limit=25&offset=0",
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

  const{darkMode, setDarkMode} = useUserPreferences()

  function getStyleMode(){

    setDarkMode('light');

    if(darkMode === "light"){
      return ({background: "rgb(225, 223, 223)"})
    }

    if(darkMode === "dark"){
      return ({background: "black"})
    }

    return({background: "white"})

  }

  //sintaxe style: <section className="cardBandsSection" style={{background: "green"}}>

  return (
        <>
        {darkMode}
          <div className="container">
            <section className="cardBandsSection" style={getStyleMode()}>
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
