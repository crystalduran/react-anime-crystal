import { useEffect } from "react";
import ProfileCharacter from "../profile-character/ProfileCharacter";
import characters from "../../data/charactersProfile.json";
import { useProfile } from "../../hooks/useProfile";
import styles from './Welcome.module.css';

type WelcomeProps = {
    onNext: () => void;
};

const Welcome = ({ onNext }: WelcomeProps) => {
    const { selectedProfileId } = useProfile();

    const selectedProfile = characters.find(character => character.id === selectedProfileId);

    useEffect(() => {
        const timer = setTimeout(onNext, 4000);
        return () => clearTimeout(timer);
    }, [onNext]);

    if (!selectedProfile) return null;

    return (
        <div className={`${styles.welcomeContainer} ${styles.column}`}>
            <h1>Hello!</h1>
            <h2>Welcome to the collection of anime I've liked the most</h2>
            <h3>I hope you discover some new favorites among them!</h3>
            <ProfileCharacter id={selectedProfile.id} name={selectedProfile.name} imageUrl={selectedProfile.imageUrl} selection={false} backgroundColor="ebony" smaller={false}/>
        </div>
    );
};

export default Welcome;