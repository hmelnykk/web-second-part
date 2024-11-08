import { useEffect, useState } from "react";
import Button from "../../components/Buttons/Button";
import ShowroomCard from "../../components/ShowroomCard/ShowroomCard";
import { Link } from "react-router-dom";
import { ArtistType } from "../../types/types";
import axios from "axios";
import Spinner from "../../components/Spinner/Spinner";

const Showroom = () => {
    const [openStep, setOpenStep] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [artists, setArtists] = useState<ArtistType[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/artists').then(res => {
            setArtists(res.data);
            setIsLoading(false);
        })
    }, []);

    return (
        isLoading ?
        <Spinner />
        :
        <div className="space-y-8">
            <div className="grid grid-cols-3 gap-4">
                {
                    artists.slice(0, openStep * 3)
                    .map((el, idx) => {
                        return <ShowroomCard key={idx} item={el} />
                    })
                }
                {
                    openStep * 3 >= artists.length ?
                    <Link to="/catalog">
                        <div className="p-4 rounded-default bg-primary">
                            <p className="font-semibold">Want to See more?</p>
                            <p>Click here and open a whole world of artists</p>
                        </div>
                    </Link>
                    : null
                }
            </div>
            {
                artists.length > openStep * 3 ?
                <div className="flex justify-center">
                    <Button
                        name="View More"
                        onClick={() => {setOpenStep(openStep + 1)}}
                        className="bg-primary hover:bg-primary/50" />
                </div>
                : null
            }
        </div>
    );
}

export default Showroom;
