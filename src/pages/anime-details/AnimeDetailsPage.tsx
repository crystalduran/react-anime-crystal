import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from "../../components/nav-bar/NavBar";
import Loading from '../../components/loading/Loading';
import styles from "./AnimeDetailsPage.module.css";


interface AnimeDetails {
    title: string;
    title_japanese: string;
    type: string;
    source: string;
    episodes: number;
    status: string;
    rating: string;
    synopsis: string;
    images: { webp: { image_url: string } };
    genres: { name: string }[];
    demographics: { name: string }[];
    streaming: { url: string }[];
}

interface Character {
    name: string;
    images: { webp: { image_url: string } };
}

interface CharacterData {
    character: {
        name: string;
        images: {
            webp: {
                image_url: string;
            };
        };
    };
}

const AnimeDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const [animeDetails, setAnimeDetails] = useState<AnimeDetails | null>(null);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                // Primera petición para obtener detalles del anime
                const animeResponse = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
                if (!animeResponse.ok) {
                    throw new Error(`HTTP error: Status ${animeResponse.status}`);
                }
                const animeData = await animeResponse.json();
                setAnimeDetails(animeData.data);

                // Agregar un delay antes de la segunda petición
                await new Promise((resolve) => setTimeout(resolve, 1000));

                // Segunda petición para obtener los personajes
                const charactersResponse = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
                if (!charactersResponse.ok) {
                    throw new Error(`HTTP error: Status ${charactersResponse.status}`);
                }
                const charactersData: Character[] = (await charactersResponse.json()).data
                    .slice(0, 10)
                    .map((char: CharacterData) => ({
                        name: char.character.name,
                        images: char.character.images,
                    }));

                setCharacters(charactersData);
                setError(null);
            } catch (err) {
                setError((err as Error).message);
                setAnimeDetails(null);
                setCharacters([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <Loading onLoadingComplete={() => setLoading(false)} />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div>
                <NavBar />
            </div>
            <main className={styles.mainAnimeDetails}>
                <h5>Anime / {animeDetails?.title}</h5>
                <h1>{animeDetails?.title} ({animeDetails?.title_japanese})</h1>
                <div className={styles.sectionAnimeDetails}>
                    <img src={animeDetails?.images.webp.image_url} alt={animeDetails?.title} />
                    <div className={styles.infoAnimeDetails}>
                        <h3>Overview</h3>
                        <p><strong>Type:</strong> {animeDetails?.type}</p>
                        <p><strong>Source:</strong> {animeDetails?.source}</p>
                        <p><strong>Episodes:</strong> {animeDetails?.episodes}</p>
                        <p><strong>Status:</strong> {animeDetails?.status}</p>
                        <p><strong>Rating:</strong> {animeDetails?.rating}</p>
                        <p><strong>Genres:</strong> {animeDetails?.genres.map(genre => genre.name).join(', ')}</p>
                        <p><strong>Demographics:</strong> {animeDetails?.demographics.map(demo => demo.name).join(', ')}</p>
                    </div>
                    <div className={styles.synopsisAnimeDetails}>
                        <h3>Synopsis</h3>
                        <p>{animeDetails?.synopsis}</p>
                    </div>
                </div>


                <h2>Characters</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {characters.map((char, index) => (
                        <div key={index} style={{ margin: '10px' }}>
                            <img src={char.images.webp.image_url} alt={char.name} />
                            <p>{char.name}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>

    );
};

export default AnimeDetailsPage;



