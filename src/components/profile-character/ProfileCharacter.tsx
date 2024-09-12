import { useProfile } from "../../hooks/useProfile";
import styles from './ProfileCharacter.module.css';

interface ProfileCharacterProps {
    id: number;
    name: string;
    imageUrl: string;
    selection: boolean;
    backgroundColor: 'mandysPink' | 'ebony';
    smaller: boolean;
}

const ProfileCharacter = ({ id, name, imageUrl, selection, backgroundColor, smaller }: ProfileCharacterProps) => {
    const colorMap = {
        mandysPink: '#F4B3B3', 
        ebony: '#101624'
    };
    const { setSelectedProfileId } = useProfile();

    const handleClick = () => {
        if (selection) {
            setSelectedProfileId(id);
        }
    };

    return (
        <div className={styles.profileCircle} onClick={handleClick} style={{ backgroundColor: colorMap[backgroundColor], cursor: selection ? 'pointer' : 'default', height: smaller ? '60px' : '150px', width: smaller ? '60px' : '150px', border: smaller ? 'none' : '3px solid white' }}>
            <img src={imageUrl} alt={name} width="100" height="100" />
        </div>
    );
};

export default ProfileCharacter;