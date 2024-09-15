export interface Character {
    name: string;
    images: { webp: { image_url: string } };
}

export interface CharacterData {
    character: {
        name: string;
        images: {
            webp: {
                image_url: string;
            };
        };
    };
}