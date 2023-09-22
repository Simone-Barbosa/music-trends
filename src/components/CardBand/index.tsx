import { usePreferencesUser } from '../../context/userPreferences.context';
import { getStyleMode } from '../../shared/colors';
import './card-band-styles.css';

interface CardBandProps {
    name: string;
    genres: string[];
    backgroundColor?: string;
    backgroundImage: string;
}

export default function CardBand({ genres, name, backgroundImage, onClick }: CardBandProps & { onClick: () => void }) {
    const limitedGenre = genres.slice(0, 2);

    const { darkMode } = usePreferencesUser();

    return (
        <div
            className="cardBox"
            style={{
                background: getStyleMode(darkMode, 'background_card_band'),
                borderColor: getStyleMode(darkMode, 'border_card_band'),
            }}
            onClick={onClick}
        >
            <p> {name}</p>

            <img src={backgroundImage} alt={`${name} cover`} width={'90%'} height={'60%'} />

            <p>
                {limitedGenre.map((genre) => {
                    return (
                        <span>
                            {genre} <br />{' '}
                        </span>
                    );
                })}
            </p>
        </div>
    );
}
