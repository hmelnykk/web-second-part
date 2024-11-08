import { useState } from "react";
import Button from "../../components/Buttons/Button";
import ShowroomCard from "../../components/ShowroomCard/ShowroomCard";
import { db } from "../../db";
import { Link } from "react-router-dom";

const Showroom = () => {
    const [openStep, setOpenStep] = useState<number>(1);

    return <div className="space-y-8">
        <div className="grid grid-cols-3 gap-4">
            {
                db.slice(0, openStep * 3)
                .map((el, idx) => {
                    return <ShowroomCard key={idx} item={el} />
                })
            }
            {
                openStep * 3 >= db.length ?
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
            db.length > openStep * 3 ?
            <div className="flex justify-center">
                <Button
                    name="View More"
                    onClick={() => {setOpenStep(openStep + 1)}}
                    className="bg-primary hover:bg-primary/50" />
            </div>
            : null
        }
    </div>
}

export default Showroom;
