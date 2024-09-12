import { useProfile } from "../../hooks/useProfile";
import'./ProfileCharacter.css';

interface ProfileCharacterProps {
    id: number;
    name: string;
    imageUrl: string;
    selection: boolean;
    backgroundColor: 'mandysPink' | 'ebony';
}

const ProfileCharacter = ({ id, name, imageUrl, selection, backgroundColor }: ProfileCharacterProps) => {
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
        <div className="profile-circle" onClick={handleClick} style={{ backgroundColor: colorMap[backgroundColor], cursor: selection ? 'pointer' : 'default' }}>
            <img src={imageUrl} alt={name} width="100" height="100" />
        </div>
    );
};

export default ProfileCharacter;