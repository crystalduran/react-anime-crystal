import { AnimeDetails }  from "../types/AnimeDetails";
import { Character, CharacterData } from "../types/Character";

export const fetchAnimeDetails = async (id: string): Promise<AnimeDetails> => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
    if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
    }
    const data = await response.json();
    return data.data;
};

export const fetchAnimeCharacters = async (id: string): Promise<Character[]> => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
    if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
    }
    const data = await response.json();
    // Extract the first 10 characters and map each one to create an array of Character objects having only the name and images
    const characters: Character[] = data.data.slice(0, 10).map((char: CharacterData) => ({
        name: char.character.name,
        images: char.character.images,
    }));

    return characters;
};
