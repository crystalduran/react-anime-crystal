import { Link } from "react-router-dom";

interface AnimeCardProps {
    id: number;
    title: string;
    imageUrl: string;
}

const AnimeCard = ({ id, title, imageUrl } : AnimeCardProps) => {
    return (
        <Link to={`/anime/${id}`} style={{ textDecoration: 'none'}}>
            <div className="container">
                <img src={imageUrl} alt={`Portada de ${title}`} />
                <div className="text">{title}</div>
            </div>
        </Link>
    );
};

export default AnimeCard;