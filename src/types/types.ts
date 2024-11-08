export interface ButtonType {
    name: string;
    href?: string;
    className?: string;
    onClick?: () => void;
}

export interface ArtistType {
    name: string,
    description: string,
    monthListeners: number,
    songs: number,
    ticketPrice: number,
    tour: string[],
}
