interface CardBandProps {
  name: string;
  genres: string[];
}

export default function CardBand({ genres, name }: CardBandProps) {
  return (
    <>
      <h3>Artista</h3>
      <p>{name}</p>
      <p>
        {genres.map((genre) => {
          return <span>{genre} - </span>;
        })}
      </p>
    </>
  );
}

// teste de commit