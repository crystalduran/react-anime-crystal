import { Link } from "react-router-dom";
import styles from "./AnimeCard.module.css";

interface AnimeCardProps {
    id: number;
    title: string;
    imageUrl: string;
}

const AnimeCard = ({ id, title, imageUrl } : AnimeCardProps) => {
    return (
        <Link to={`/anime/${id}`} style={{ textDecoration: 'none'}}>
            <div className={styles.animeCardContainer}>
                <img src={imageUrl} alt={`Portada de ${title}`} />
                <div className={styles.text}>{title}</div>
            </div>
        </Link>
    );
};

export default AnimeCard;