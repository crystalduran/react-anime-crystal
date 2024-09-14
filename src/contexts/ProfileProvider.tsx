import { ReactNode, useState, useEffect } from 'react';
import { ProfileContext } from './ProfileContext';

const PROFILE_ID_KEY = 'profileId';
const TIMESTAMP_KEY = 'profileIdTimestamp';
const EXPIRY_TIME = 30 * 60 * 1000; 

const ProfileProvider = ({ children }: { children: ReactNode }) => {
    const [selectedProfileId, setSelectedProfileId] = useState<number | null>(null);

    useEffect(() => {
        const storedProfileId = localStorage.getItem(PROFILE_ID_KEY);
        const storedTimestamp = localStorage.getItem(TIMESTAMP_KEY);

        if (storedProfileId && storedTimestamp) {
            const timestamp = Number(storedTimestamp);
            const now = Date.now();

            if (now - timestamp < EXPIRY_TIME) {
                setSelectedProfileId(Number(storedProfileId));
            } else {
                localStorage.removeItem(PROFILE_ID_KEY);
                localStorage.removeItem(TIMESTAMP_KEY);
            }
        }
    }, []);

    useEffect(() => {
        if (selectedProfileId !== null) {
            localStorage.setItem(PROFILE_ID_KEY, selectedProfileId.toString());
            localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
        }
    }, [selectedProfileId]);


    return (
        <ProfileContext.Provider value={{ selectedProfileId, setSelectedProfileId }}>
            {children}
        </ProfileContext.Provider>
    );
};

export { ProfileProvider };