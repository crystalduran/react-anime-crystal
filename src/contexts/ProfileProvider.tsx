import { ReactNode, useState, useEffect } from 'react';
import { ProfileContext } from './ProfileContext';

const PROFILE_ID_KEY = 'profileId';
const TIMESTAMP_KEY = 'profileIdTimestamp';
const EXPIRY_TIME = 30 * 60 * 1000; 

// The ProfileProvider component manages the selected profile ID, persists it in localStorage, and ensures it's valid based on the expiry time
const ProfileProvider = ({ children }: { children: ReactNode }) => {
    const [selectedProfileId, setSelectedProfileId] = useState<number | null>(null);

    // useEffect hook runs on component mount to check if there's a stored profile ID and if it's still valid
    useEffect(() => {
        const storedProfileId = localStorage.getItem(PROFILE_ID_KEY);
        const storedTimestamp = localStorage.getItem(TIMESTAMP_KEY);

        if (storedProfileId && storedTimestamp) {
            const timestamp = Number(storedTimestamp);
            const now = Date.now();
            
            // If the stored profile ID is within the valid expiry time, set it as the selected profile
            if (now - timestamp < EXPIRY_TIME) {
                setSelectedProfileId(Number(storedProfileId));
            } else {
                localStorage.removeItem(PROFILE_ID_KEY);
                localStorage.removeItem(TIMESTAMP_KEY);
            }
        }
    }, []);

     // useEffect hook runs whenever the selectedProfileId state changes, storing the profile ID and current timestamp in localStorage
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