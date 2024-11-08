export interface ButtonType {
    name: string;
    href?: string;
    className?: string;
    onClick?: () => void;
}

export interface SelectType {
    name: string;
    id: string;
    options: string[];
}

export interface ArtistType {
    id: number;
    name: string,
    description: string,
    monthListeners: number,
    songs: number,
    ticketPrice: number,
    tour: string[],
}
