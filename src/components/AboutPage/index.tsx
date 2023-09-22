import { usePreferencesUser } from '../../context/userPreferences.context';
import { getStyleMode } from '../../shared/colors';
import './about-page-styles.css';

export default function PageAbout() {
    const { darkMode } = usePreferencesUser();

    return (
        <div
            className="containerAbout"
            style={{
                background: getStyleMode(darkMode, 'background_music_trends'),
                color: getStyleMode(darkMode, 'font_color_music_trends'),
            }}
        >
            <div>
                <img className="Image" src={'https://www.vilage.com.br/blog/wp-content/uploads/2021/04/como-registrar-uma-musica.png'} />
            </div>

            <div className="boxAbout">
                <div
                    className="cardTextAbout"
                    style={{
                        background: getStyleMode(darkMode, 'background_card_band'),
                        border: getStyleMode(darkMode, 'border_card_band'),
                    }}
                >
                    <h2> About Us</h2>

                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus, purus vitae cursus rutrum, arcu ex commodo lectus, eu rutrum arcu magna et urna.
                        Cras tempus non felis id sagittis. Quisque neque dolor, luctus sit amet mauris in, bibendum sagittis est. Fusce nisi ex, imperdiet ac ante eu, imperdiet
                        condimentum tellus. Donec auctor ligula purus, a varius nibh varius non. Vestibulum lobortis in lectus eget hendrerit. Curabitur convallis cursus lacus, a
                        posuere nisi pellentesque sed. Fusce ut blandit tellus, sed facilisis arcu. Fusce non ornare eros, at congue lectus. Proin vulputate tristique ante, quis
                        scelerisque urna mattis vel. Etiam blandit commodo accumsan. Etiam odio urna, lobortis in risus nec, suscipit porttitor est. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse fermentum nisl a nulla interdum, sed interdum eros facilisis. Fusce dignissim libero
                        in mauris auctor, sed tempor diam fringilla. Etiam eu neque orci.{' '}
                    </p>
                </div>
            </div>
        </div>
    );
}
