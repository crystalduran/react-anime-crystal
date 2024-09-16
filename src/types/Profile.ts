export interface ProfileData {
    id: number;
    name: string;
    imageUrl: string;
}

export interface ProfileImage extends ProfileData {
    selection: boolean;
    backgroundColor: 'mandysPink' | 'ebony';
    smaller: boolean;
}