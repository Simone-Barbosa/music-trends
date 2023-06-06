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
  onClick,
}: CardBandProps & { onClick: () => void }) {

  const limitedGenre = genres.slice(0, 2);

  return (
    <div className="cardBox" onClick={onClick}>
      <p className="name"> {name}</p>

      <img src={backgroundImage} alt={`${name} cover`} width={'90%'} height={'60%'} />

      <p className="genres">
        {limitedGenre.map((genre) => {
          return <span>{genre} <br /> </span>;
        })}
      </p>

    </div>
  );
}