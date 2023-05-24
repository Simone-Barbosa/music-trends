import "./card-band-styles.css";

interface CardBandProps {
  name: string;
  genres: string[];
  backgroundColor?: string;
  backgroundImage: string;
}

export default function CardBand({
  genres,
  name,
  backgroundImage,
}: CardBandProps) {
  return (
    <div
      className="cardBox"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h3>Artista</h3>
      <p>{name}</p>
      <p>
        {genres.map((genre) => {
          return <span>{genre} - </span>;
        })}
      </p>
    </div>
  );
}
