import { ArtistType } from "../../types/types";
import Button from "../Buttons/Button";

const CatalogItem = ({ item }: { item: ArtistType }) => {
    const { id, name, description, tour, ticketPrice } = item;
    return <div className="grid grid-cols-5 space-y-8 items-center border-b">
        <div>
            <p className="font-semibold">{name}</p>
            <p>{description}</p>
        </div>
        <div>
            <p>{tour.length > 0 ? 'In Tour' : 'Currently not in a tour'}</p>
        </div>
        <div>{`Price for a ticket: ${ticketPrice}$`}</div>
        <div></div>
        <Button name="Buy a ticket" href={`/catalog/${id}`} className="font-semibold bg-primary hover:bg-primary/60" />
    </div>
}

export default CatalogItem;
