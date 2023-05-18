import { useState } from "react";
import CardBand from "./components/CardBand";
import "./styles.css";

function App() {
  const [likes, setLikes] = useState<number>(0);

  return (
    <>
      <header>
        <h1 id="title">Music Trends</h1>
      </header>

      <section>
        {/* <div className="main"> */}

        <div className="box1" id="purple">
          <CardBand
            name="Deep Purple"
            genres={["Rock Clássico", "Hard Rock"]}
          />
        </div>

        <div className="box2" id="red">
          <CardBand name="Péricles" genres={["Pagode", "Samba"]} />
        </div>

        <div className="box3" id="green">
          <CardBand name="Legião Urbana" genres={["Rock", "MPB"]} />
        </div>

        {/* </div> */}
      </section>

      <div>
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
