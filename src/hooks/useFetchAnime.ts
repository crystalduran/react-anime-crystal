import { useState, useEffect } from 'react';
import { fetchAnimeDetails, fetchAnimeCharacters } from '../services/animeService';
import { AnimeDetails } from '../types/AnimeDetails';
import { Character } from '../types/Character';

export const useFetchAnime = (id: string) => {
    const [animeDetails, setAnimeDetails] = useState<AnimeDetails | null>(null);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const animeData = await fetchAnimeDetails(id);
                setAnimeDetails(animeData);

                // Simulate a delay between requests
                await new Promise(resolve => setTimeout(resolve, 1000));

                const characterData = await fetchAnimeCharacters(id);
                setCharacters(characterData);
            } catch (err) {
                setError((err as Error).message);
                setAnimeDetails(null);
                setCharacters([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    return { animeDetails, characters, loading, error };
};
