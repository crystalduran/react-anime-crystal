import { useParams } from 'react-router-dom';
import { useFetchAnime } from '../../hooks/useFetchAnime';
import NavBar from "../../components/nav-bar/NavBar";
import Loading from '../../components/loading/Loading';
import styles from "./AnimeDetailsPage.module.css";
import Footer from '../../components/footer/Footer';

const AnimeDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const { animeDetails, characters, loading, error } = useFetchAnime(id!);

    if (loading) {
        return <Loading />;
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
                <div className={styles.sectionPrincipalAnimeDetails}>
                    <img src={animeDetails?.images.webp.image_url} alt={animeDetails?.title} width="225" height="325" />
                    <div className={styles.synopsisAnimeDetails}>
                        <h3>Synopsis</h3>
                        <p>{animeDetails?.synopsis}</p>
                    </div>
                </div>

                <div className={styles.sectionSecondaryAnimeDetails}>
                    <div className={styles.infoAnimeDetails}>
                        <h3>Overview</h3>
                        <p><strong>Type:</strong> {animeDetails?.type}</p>
                        <p><strong>Source:</strong> {animeDetails?.source}</p>
                        <p><strong>Episodes:</strong> {animeDetails?.episodes}</p>
                        <p><strong>Status:</strong> {animeDetails?.status}</p>
                        <p><strong>Rating:</strong> {animeDetails?.rating}</p>
                        <p><strong>Genres:</strong> {animeDetails?.genres.map(genre => genre.name).join(', ')}</p>
                        {animeDetails?.demographics?.length ? (
                            <p><strong>Demographics:</strong> {animeDetails.demographics.map(demo => demo.name).join(', ')}</p>
                        ) : null}
                    </div>
                    <div className={styles.sectionCharacters}>
                        <h3>Characters</h3>
                        <div className={styles.sectionCharactersContainer}>
                            {characters.filter(char => !char.images.webp.image_url.includes('questionmark'))
                                .map((char, index) => (
                                    <div key={index} className={styles.characterCard}>
                                        <img src={char.images.webp.image_url} alt={char.name} />
                                        <p>{char.name}</p>
                                    </div>
                                ))}
                        </div>
                    </div>

                </div>

            </main>
            <Footer />
        </>

    );
};

export default AnimeDetailsPage;



