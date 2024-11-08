import { useState } from "react";

const Roadmap = ({ road }: { road: string[] }) => {
    const [currentPoint, setCurrentPoint] = useState<number>(0);

    return (
        <div className="flex gap-2 items-center">
            {
                road.map((el, idx) => {
                    const pointColor = idx <= currentPoint ? 'bg-primary' : 'bg-slate-300';
                    const roadColor = idx < currentPoint ? 'bg-primary' : 'bg-slate-300';
                    return <>
                        <div onClick={() => {setCurrentPoint(idx)}}>
                            <div className={`p-3 rounded-full ${pointColor}`}>
                            <p className="text-sm select-none">{el}</p>
                            </div>
                        </div>
                        {
                            road.length - idx - 1 > 0 ?
                            <div className={`flex-grow rounded-default h-2 ${roadColor}`}></div>
                            : null
                        }
                    </>
                })
            }
        </div>
    );
}

export default Roadmap;