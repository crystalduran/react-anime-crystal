import { useContext } from "react";
import { ProfileContext } from "../contexts/ProfileContext";

// custom hook that encapsulates the logic for accessing the context of the selected profile, facilitating reuse in multiple components
export const useProfile = () => {
    const context = useContext(ProfileContext);
    if(!context) {
        throw new Error("useProfile must be used within a ProfileProvider");
    }
    return context;
}