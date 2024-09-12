import { useProfile } from "../../hooks/useProfile";
import { useNavigate } from "react-router-dom";
import ProfileCharacter from "../../components/profile-character/ProfileCharacter";
import characters from "../../data/charactersProfile.json";
import animeList from "../../data/anime.json";
import AnimeCard from "../../components/anime-card/AnimeCard";

interface Character {
    id: number;
    name: string;
    imageUrl: string;
}

const AnimeCollectionPage = () => {
    const { selectedProfileId } = useProfile();
    const selectedProfile: Character | undefined = characters.find(character => character.id === selectedProfileId);
    const navigate = useNavigate();

    if (!selectedProfile) {
        navigate('/');
        return null;
    }

    return (
        <>
            <div>
                <nav>
                    <ProfileCharacter id={selectedProfile.id} name={selectedProfile.name} imageUrl={selectedProfile.imageUrl} selection={false} backgroundColor="mandysPink"/>
                </nav>
            </div>
            <main>
                <h1>My favorites animes</h1>
                <div className="anime-list-container">
                    {animeList.map((anime) => (
                        <AnimeCard key={anime.id} id={anime.id} title={anime.title} imageUrl={anime.imageUrl} />
                    ))}
                </div>
            </main>
        </>

    );
};

export default AnimeCollectionPage
