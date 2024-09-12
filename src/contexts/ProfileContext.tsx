import { createContext } from "react";

interface ProfileContextType {
    selectedProfileId: number | null;
    setSelectedProfileId: (id: number) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export { ProfileContext };
