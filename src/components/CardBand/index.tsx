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
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p>{name}</p>
      <img src= {backgroundImage} alt={`${name} cover`} width={'50%'} height={'50%'}/>
      <p>
        {genres.map((genre) => {
          return <span>{genre} - </span>;
        })}
      </p>
    </div>
  );
}
