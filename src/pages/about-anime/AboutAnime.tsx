import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav-bar/NavBar";
import styles from "./AboutAnime.module.css";

const AboutAnime = () => (
    <>

        <NavBar />
        <div className={styles.mainAboutAnime}>
            <h1>What is anime?</h1>
            <p>Anime refers to a style of animation that originated in Japan and has become popular worldwide. It encompasses a wide range of genres and themes, making it accessible to audiences of all ages. The term "anime" is derived from the English word "animation," but in Japan, it specifically refers to animated works, including television series, films, and web series.</p>
            <p>The roots of anime can be traced back to the early 20th century, with the pioneering work of Japanese animators such as Jun'ichi Kōuchi and Seitarō Kitayama, who produced some of the earliest Japanese animated films in the 1910s and 1920s. However, anime as a distinct and recognizable form of media began to take shape in the 1960s with the influence of Osamu Tezuka, often referred to as the "God of Manga," whose work on "Astro Boy" (Tetsuwan Atom) helped define the visual and thematic style of modern anime. Since then, anime has evolved into a global cultural phenomenon, known for its diverse storytelling, unique artistic style, and its significant impact on popular culture around the world.</p>

            <h3>Resources and useful links</h3>
            <p>For those interested in exploring more about anime, here are some resources and useful links to access series, read manga, and stay updated on the latest news:</p>
            <div className={styles.resourcesContainer}>
                <div>
                    <h4>Anime streaming platforms</h4>
                    <div className={styles.imagesResources}>
                        <a href="https://www.crunchyroll.com" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Crunchyroll_Logo.png/640px-Crunchyroll_Logo.png" width="60" height="53" alt="Crunchyroll" /></a>
                        <a href="https://www.disneyplus.com" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" width="100" height="56" alt="Disney Plus" /></a>
                        <a href="https://www.netflix.com/do/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png" width="60" height="60" alt="Netflix" /></a>
                    </div>
                </div>
                <div>
                    <h4>Official manga platforms</h4>
                    <div className={styles.imagesResources}>
                        <a href="https://www.viz.com/shonenjump" target="_blank" rel="noopener noreferrer"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOGX4T70IJ_t5bvwLy-f4G4RalDSzuTvHy0A&s" width="60" height="60" alt="Shounen Jump" /></a>
                        <a href="https://mangaplus.shueisha.co.jp" target="_blank" rel="noopener noreferrer"><img src="https://cdn6.aptoide.com/imgs/e/7/2/e72396a7f8cefc7f2a691247ad46450e_icon.png" width="60" height="60" alt="Manga plus" /></a>
                    </div>
                </div>
                <div>
                    <h4>Communities and forums</h4>
                    <div className={styles.imagesResources}>
                        <a href="https://myanimelist.net/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/MyAnimeList_Logo.png" width="60" height="60" alt="MyAnimeList" /></a>
                        <a href="https://www.reddit.com/r/anime/" target="_blank" rel="noopener noreferrer"><img src="https://seeklogo.com/images/R/reddit-icon-new-2023-logo-3F12137D65-seeklogo.com.png" width="60" height="60" alt="Reddit" /></a>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>

);

export default AboutAnime;