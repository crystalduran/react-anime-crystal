import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../hooks/useProfile";
import ProfileSelection from "../../components/profile-selection/ProfileSelection";
import Welcome from "../../components/welcome/Welcome";
import Loading from "../../components/loading/Loading";
import styles from './HomePage.module.css';

const HomePage = () => {
    const { selectedProfileId } = useProfile();
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedProfileId) {
            setStep(2);
        }
    }, [selectedProfileId]);

    const handleNextStep = () => {
        if (step === 2) setStep(3);
        else navigate('/anime-collection');
    };

    return (
        <div className={styles.componentsContainer}>
            {step === 1 && <ProfileSelection />}
            {step === 2 && selectedProfileId && <Welcome onNext={handleNextStep} />}
            {step === 3 && <Loading onLoadingComplete={handleNextStep} />}
            {(step === 1 || step === 2) && (
                <footer>
                    <p>Made by Crystal Durán</p>
                </footer>
            )}
        </div>
    );
};

export default HomePage;