import { useState } from "react";
import Button from "../../components/Buttons/Button";
import ShowroomCard from "../../components/ShowroomCard/ShowroomCard";
import { db } from "../../db";

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
