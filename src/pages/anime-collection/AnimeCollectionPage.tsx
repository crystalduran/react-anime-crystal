import animeList from "../../data/anime.json";
import NavBar from "../../components/nav-bar/NavBar";
import AnimeCard from "../../components/anime-card/AnimeCard";
import styles from "./AnimeCollectionPage.module.css";
import Footer from "../../components/footer/Footer";

const AnimeCollectionPage = () => {
    return (
        <>
            <NavBar />
            <main className={styles.mainAnimeCollection}>
                <h1>My collection of anime</h1>
                <p>Here you'll find anime that hold cherished memories from my childhood, alongside others that have become recent favorites.</p>
                <div className={styles.animeCollectionGrid}>
                    {animeList.map((anime) => (
                        <AnimeCard key={anime.id} id={anime.id} title={anime.title} imageUrl={anime.imageUrl} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default AnimeCollectionPage;
