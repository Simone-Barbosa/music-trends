import { useState } from "react";
import CardBand from "./components/CardBand";
import "./styles.css"

function App() {
  // const [likes, setLikes] = useState<number>(0);

  return (
    <>
      <h1 id="title">Music Trends</h1>

      <div id="purple">
        <CardBand name="Deep Purple" genres={["Rock Clássico", "Hard Rock"]} />
      </div>

      <div id="red">
        <CardBand name="Péricles" genres={["Pagode", "Samba"]} />
      </div>

      <div id="green">
        <CardBand name="Legião Urbana" genres={["Rock", "MPB"]} />
      </div>

    </>
  );
}

export default App;

{/* <div>
<span>================================</span>
<p>Curtidas: {likes}</p>
<button
  onClick={() => {
    setLikes(likes + 1);
  }}
>
  Curtir
</button>
</div> */}