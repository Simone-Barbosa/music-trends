import './card-band-styles.css';

interface CardBandProps {
    name: string;
    genres: string[];
    backgroundColor?: string;
    backgroundImage: string;
}

export default function CardBand({ genres, name, backgroundImage, onClick }: CardBandProps & { onClick: () => void }) {
    const limitedGenre = genres.slice(0, 1);

    return (
        <div
            className="cardBox"
            onClick={onClick}
        >

            <img style={{borderRadius: '50%'}} src={backgroundImage} alt={`${name} cover`} width={'100%'} />
            <p> {name}</p>

            <p>
                {limitedGenre.map((genre) => {
                    return (
                        <span>
                            {genre} <br />
                        </span>
                    );
                })}
            </p>
        </div>
    );
}
