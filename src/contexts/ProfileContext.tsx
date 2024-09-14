import { createContext } from "react";

interface ProfileContextType {
    selectedProfileId: number | null;
    setSelectedProfileId: (id: number | null) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export { ProfileContext };
