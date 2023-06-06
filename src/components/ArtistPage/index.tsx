import './artist-page-styles.css'
import { useParams } from "react-router-dom";

export default function ArtistPage() {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <span className="title">Aqui será renderizada a página do artista</span>
            <p>ID do Artista selecionado: {id}</p>
        </div>
    )
}