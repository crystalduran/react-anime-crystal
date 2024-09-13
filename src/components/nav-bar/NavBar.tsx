import { useNavigate, NavLink } from "react-router-dom";
import { useProfile } from "../../hooks/useProfile";
import characters from "../../data/charactersProfile.json";
import ProfileCharacter from "../profile-character/ProfileCharacter";
import styles from './NavBar.module.css';

interface Character {
    id: number;
    name: string;
    imageUrl: string;
}

const NavBar = () => {
    const { selectedProfileId } = useProfile();
    const selectedProfile: Character | undefined = characters.find(character => character.id === selectedProfileId);
    const navigate = useNavigate();

    if (!selectedProfile) {
        navigate('/');
        return null;
    }

    return (
        <nav className={styles.navBar}>
            <NavLink to="/anime-collection" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Anime Collection</NavLink>
            <NavLink to="/what-is-anime" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>What is anime?</NavLink>
            <NavLink to="https://docs.api.jikan.moe/" className={styles.externalLink} target="_blank" rel="noopener noreferrer">API</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Contact</NavLink>
            <ProfileCharacter id={selectedProfile.id} name={selectedProfile.name} imageUrl={selectedProfile.imageUrl} selection={false} backgroundColor="mandysPink" smaller={true} />
        </nav>
    );
};

export default NavBar;