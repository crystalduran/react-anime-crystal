import { ReactNode, useState } from 'react';
import { ProfileContext } from './ProfileContext';

const ProfileProvider = ({ children }: { children: ReactNode}) => {
    const [selectedProfileId, setSelectedProfileId] = useState<number | null>(null);

    return (
        <ProfileContext.Provider value={{ selectedProfileId, setSelectedProfileId}}>
            {children}
        </ProfileContext.Provider>
    );
};

export { ProfileProvider };