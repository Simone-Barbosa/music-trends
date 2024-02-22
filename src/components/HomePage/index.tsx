import './home-page.css';
import ModalPreferences from '../ModalPreferences';
import { getUserPreferences } from '../../shared/local-storage';
import GenreSection from '../GenreSection';
import { listOfGenres } from '../../shared/genres';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [userPreferences, setUserPreferences] = useState<string[]>(getUserPreferences());
    const [userText, setUserText] = useState<string>('o usuário nunca alterou os generos preferidos');
    // const userPreferences = getUserPreferences() as string[];

    function checkUserPreferences() {
        if (userPreferences?.length) return false;

        return true;
    }

    function mudaTexto(texto: string){
        setUserText(texto)
    }


    useEffect(() => {
        console.log('atualizou');

    }, [userPreferences]);
    console.log('userPreferences = ', userPreferences);
    return (
        <>
            <div className="homePageStart">
                <p>Welcome to the Music Trends Site!</p>
                <p> Here you will see the most popular musics and artists of the moment! </p>
            </div>
            {userText}
            <br/>

            {/* {userPreferences.map((selectedGenre) => {
                const genreLabel = listOfGenres.find((genre) => genre.value === selectedGenre)?.label || '';
                return <GenreSection genre={selectedGenre as string} title={genreLabel} key={'selectedGenre-' + selectedGenre} />;
            })} */}
            <ModalPreferences open={checkUserPreferences()} showButton={true} modalText="Welcome to music trends! Select your favorite genres:" executaFuncao={mudaTexto} />
        </>
    );
}
