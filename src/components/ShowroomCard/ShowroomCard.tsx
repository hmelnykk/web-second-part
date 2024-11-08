import { ArtistType } from "../../types/types";

const ShowroomCard = ({ item }: {item: ArtistType}) => {
    const { name, description } = item;
    return <div className="p-4 border rounded-default">
        <p className="font-semibold">{name}</p>
        <p>{description}</p>
    </div>
}

export default ShowroomCard;
