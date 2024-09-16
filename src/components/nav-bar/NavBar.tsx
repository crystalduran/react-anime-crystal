import { useNavigate, NavLink } from "react-router-dom";
import { useState } from 'react';
import { useProfile } from "../../hooks/useProfile";
import { ProfileData } from "../../types/Profile";
import characters from "../../data/charactersProfile.json";
import ProfileCharacter from "../profile-character/ProfileCharacter";
import styles from './NavBar.module.css';

const NavBar = () => {
    const { selectedProfileId, setSelectedProfileId } = useProfile();
    const selectedProfile: ProfileData | undefined = characters.find(character => character.id === selectedProfileId);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const isAnimeRouteActive = location.pathname.startsWith('/anime');

    if (!selectedProfile) {
        navigate('/');
        return null;
    }

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleChangeCharacter = () => {
        setSelectedProfileId(null);
        localStorage.removeItem('profileId');
        navigate('/'); 
    };

    return (
        <nav className={styles.navBar}>
            <NavLink to="/anime-collection" className={({ isActive }) => isActive || isAnimeRouteActive ? styles.activeLink : styles.navLink}>Anime Collection</NavLink>
            <NavLink to="/what-is-anime" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>What is anime?</NavLink>
            <NavLink to="https://docs.api.jikan.moe/" className={styles.externalLink} target="_blank" rel="noopener noreferrer">API</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Contact</NavLink>

            <div className={styles.profileDropdown}>
                <div onClick={toggleDropdown} className={styles.profileTrigger}>
                    <ProfileCharacter id={selectedProfile.id} name={selectedProfile.name} imageUrl={selectedProfile.imageUrl} selection={false} backgroundColor="mandysPink" smaller={true} />
                    <span className={styles.dropdownArrow}>▼</span>
                </div>

                {dropdownOpen && (
                    <div className={styles.dropdownMenu}>
                        <button onClick={handleChangeCharacter} className={styles.dropdownItem}>Change character</button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;