import ProfileCharacter from "../profile-character/ProfileCharacter";
import characters from "../../data/charactersProfile.json";
import styles from './ProfileSelection.module.css';

const ProfileSelection = () => (
    <div className={styles.profileSelection}>
        <h1>Select your profile to begin</h1>
        <div className={styles.profilesContainer}>
            {characters.map(character => (
                <>
                    <div className={styles.profileElement}>
                        <ProfileCharacter key={character.id} id={character.id} name={character.name} imageUrl={character.imageUrl} selection={true} backgroundColor="ebony" smaller={false}/>
                        <p>{character.name}</p>
                    </div>
                </>
            ))}
        </div>
    </div>
);

export default ProfileSelection;