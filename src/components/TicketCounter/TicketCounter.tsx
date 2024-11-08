import { useLoaderData } from "react-router-dom";
import { ArtistType } from "../../types/types";
import Counter from "../Inputs/Counter";
import { useState } from "react";
import Button from "../Buttons/Button";

const TicketCounter = () => {
    const [tickets, setTickets] = useState<number>(2);
    const artist = useLoaderData() as ArtistType;
    const { ticketPrice } = artist;

    return <div className="p-4 border rounded-default space-y-2 flex justify-around items-center">
        <p>{`Price for a ticket: ${ticketPrice}$`}</p>
        <Counter start={2} onChange={(value) => {setTickets(value)}} />
        <Button name={`Buy ${tickets} tickets for ${tickets * ticketPrice}$`} className="font-semibold bg-primary hover:bg-primary/60"/>
    </div>
}

export default TicketCounter;
