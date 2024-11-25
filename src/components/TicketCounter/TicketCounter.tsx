import { useLoaderData } from "react-router-dom";
import { ArtistType } from "../../types/types";
import Counter from "../Inputs/Counter";
import { useState } from "react";
import Button from "../Buttons/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addItem } from "../../features/cart/cartSlicer";

const TicketCounter = () => {
    const [tickets, setTickets] = useState<number>(2);
    const artist = useLoaderData() as ArtistType;
    const { ticketPrice } = artist;
    const dispatch = useDispatch<AppDispatch>();

    return <div className="p-4 border rounded-default space-y-2 flex justify-around items-center">
        <p>{`Price for a ticket: ${ticketPrice}$`}</p>
        <Counter start={2} onChange={(value) => {setTickets(value)}} />
        <Button name={`Buy ${tickets} tickets for ${tickets * ticketPrice}$`} className="font-semibold bg-primary hover:bg-primary/60"
            onClick={() => {
                dispatch(addItem({
                    name: `${artist.name}`,
                    price: artist.ticketPrice,
                    quantity: tickets,
                }));
                alert(`You have added ${tickets} tickets to your cart!`);
            }}
        />
    </div>
}

export default TicketCounter;
