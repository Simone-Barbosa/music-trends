import { useEffect, useState } from "react";
import CardBand from "./components/CardBand";
import "./general-styles.css";
import axios from "axios";

function App() {
  const [artists, setArtists] = useState([]);

  async function getArtists() {
    const response = await axios({
      method: "get",
      url: "https://api.spotify.com/v1/search?q=genre%3Arock&type=artist&market=BR&limit=10&offset=0",
      headers: {
        Authorization:
          "Bearer BQDOuT5FxH3ffbxcRrzeEwRdLzBqHDEXidvKL6FBCcXOOr9J3zb9fmu3iGrsIA8GAZkzxxxyY78CsLb7qWujSnGsDIdKiXFCdgEMC5el5hVxpO7TLNb_",
      },
    });
    console.log(response);
  }

  useEffect(() => {
    getArtists();
    console.log("Executou useEffect");
  }, []);

  const artistTest = [
    {
      name: "Deep Purple",
      genres: ["Rock Clássico", "Hard Rock"],
      backgroundColor: "green",
    },
    {
      name: "Péricles",
      genres: ["Pagode", "Samba"],
      backgroundColor: "purple",
    },
    {
      name: "Legião Urbana",
      genres: ["Rock", "nacional"],
      backgroundColor: "blue",
    },
  ];

  return (
    <>
      <header className="homePageHeader">
        <h1>Music Trends</h1>
      </header>

      <section className="cardBandsSection">
        {artistTest.map((artist) => {
          return (
            <CardBand
              name={artist.name}
              genres={artist.genres}
              backgroundColor={artist.backgroundColor}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
