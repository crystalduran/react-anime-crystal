import { useEffect } from "react";
import Spinner from "../../assets/loading-16-svgrepo-com.svg";
import styles from './Loading.module.css';

interface LoadingProps {
    onLoadingComplete: () => void;
}

const Loading = ( {onLoadingComplete} : LoadingProps ) => {
    useEffect(() => {
        const timer = setTimeout(onLoadingComplete, 3000);
        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <div className={styles.containerSpinner}>
            <img src={Spinner} alt="Spinner"  className={styles.spinner} />
        </div>
    );
};


export default Loading;