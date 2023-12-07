import './home-page.css';
import ModalPreferences from '../ModalPreferences';
import { getUserPreferences } from '../../shared/local-storage';
import GenreSection from '../GenreSection';
import { listOfGenres } from '../../shared/genres';
import { useEffect } from 'react';

export default function HomePage() {
    const userPreferences = getUserPreferences() as string[];

    function checkUserPreferences() {
        if (userPreferences?.length) return false;

        return true;
    }

    // useEffect(() => {}, [userPreferences]);

    return (
        <>
            <div className="homePageStart">
                <p>Welcome to the Music Trends Site!</p>
                <p> Here you will see the most popular musics and artists of the moment! </p>
            </div>

            {userPreferences.map((selectedGenre) => {
                const genreLabel = listOfGenres.find((genre) => genre.value === selectedGenre)?.label || '';
                return <GenreSection genre={selectedGenre as string} title={genreLabel} />;
            })}

            <ModalPreferences open={checkUserPreferences()} showButton={false} modalText="Welcome to music trends! Select your favorite genres:" />
        </>
    );
}
