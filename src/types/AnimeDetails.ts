export interface AnimeDetails {
    title: string;
    title_japanese: string;
    type: string;
    source: string;
    episodes: number;
    status: string;
    rating: string;
    synopsis: string;
    images: { webp: { image_url: string } };
    genres: { name: string }[];
    demographics: { name: string }[];
    streaming: { url: string }[];
}