import { useLoaderData } from "react-router-dom";
import ArtistCard from "../components/ArtistCard/ArtistCard";
import TicketCounter from "../components/TicketCounter/TicketCounter";
import { ArtistType } from "../types/types";

const SingleArtistPage = () => {
    const artist = useLoaderData() as ArtistType;
    const { tour } = artist;

    return <div className="container mx-auto my-8 space-y-4">
        <ArtistCard />
        { tour.length ? <TicketCounter /> : null}
    </div>
}

export default SingleArtistPage;
