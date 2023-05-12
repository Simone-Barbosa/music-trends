import { useState } from "react";
import CardBand from "./components/CardBand";

function App() {
  const [likes, setLikes] = useState<number>(0);

  return (
    <>
      <h1>Music Trends</h1>
      <CardBand name="Deep Purple" genres={["rock classico", "hard rock"]} />
      <CardBand name="Péricles" genres={["pagode", "samba"]} />
      <div>
        <span>================================</span>
        <p>Curtidas: {likes}</p>
        <button
          onClick={() => {
            setLikes(likes + 1);
          }}
        >
          Curtir
        </button>
      </div>
    </>
  );
}

export default App;
