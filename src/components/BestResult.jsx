import { useContext } from "react";
import { TrackContext } from "../context/TrackCTX";


function BestResult({ img, name, singers, album, date, duration, index, src }) {
    const { track, setTrack } = useContext(TrackContext)
    return ( 
        <div
        onClick={() => setTrack({ img, name, singers, album, date, duration, index, src })}
         className="best_result w-full h-[82%] bg-[#1a1a1a] rounded-md p-4 flex flex-col gap-3 cursor-pointer select-none transition duration-300 ease-in-out hover:bg-[#2d2d2d]">
            <img className="w-[110px] rounded" src={img} alt={name} />
            <h2 className="text-3xl font-bold">{name}</h2>
            <div className="type-owner flex gap-1">
                <span className="text-[#a7a7a7]">Трек •</span>
                <h5>{singers}</h5>
            </div>
        </div>
     );
}

export default BestResult;