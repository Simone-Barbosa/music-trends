import "./card-band-styles.css";

interface CardBandProps {
  name: string;
  genres: string[];
  backgroundColor: string;
}

export default function CardBand({
  genres,
  name,
  backgroundColor,
}: CardBandProps) {
  return (
    <div className="cardBox" style={{ backgroundColor: backgroundColor }}>
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
