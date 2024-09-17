import { createContext } from "react";

// this stores the state of the selected profile globally so any component can access it without the need to pass it as props between multiple levels of components
interface ProfileContextType {
    selectedProfileId: number | null;
    setSelectedProfileId: (id: number | null) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export { ProfileContext };
