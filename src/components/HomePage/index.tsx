import './home-page.css';
import GenreSection from '../GenreSection';

export default function HomePage() {
    return (
        <>
            <div className="homePageStart">
                <p>Welcome to the Music Trends Site!</p>
                <p> Here you will see the most popular musics and artists of the moment! </p>
            </div>

            <GenreSection genre="pop" title="Genero Pop" />
            <GenreSection genre="rock" title="Genero Rock" />
        </>
    );
}
