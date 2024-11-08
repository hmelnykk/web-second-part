import { useLoaderData } from "react-router-dom";
import { ArtistType } from "../../types/types";
import Roadmap from "../Roadmap/Roadmap";

const ArtistCard = () => {
    const artist = useLoaderData() as ArtistType;
    const { name, description, monthListeners, songs, tour } = artist;

    return <div className="p-4 border rounded-default space-y-2">
        <div className="flex gap-2">
            <div className="text-sm p-1 rounded-default border">{`Month listeners: ${monthListeners}`}</div>
            <div className="text-sm p-1 rounded-default border">{`Songs: ${songs}`}</div>
        </div>
        <p className="text-3xl font-bold">{name}</p>
        <p>{description}</p>
        {
            tour.length ?
                <div className="max-w-[700px] mx-auto space-y-4">
                <p className="text-center">Tour Company:</p>
                <Roadmap road={tour} />
            </div>
            : null
        }
    </div>
}

export default ArtistCard;
