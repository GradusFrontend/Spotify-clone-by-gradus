import { useContext } from "react";
import { TrackContext } from "../context/TrackCTX";


function Track({src, img, name, singers, album, date, duration, index}) {
    const {track, setTrack} = useContext(TrackContext)

    return ( 
        <div 
            onClick={() => setTrack({img, name, singers, album, date, duration, index, src})}
            className="track grid grid-cols-5 items-center px-5 py-2 rounded cursor-pointer hover:bg-[#2a2a2a]"
        >
            {}
            <div className="flex items-center gap-5 col-start-1 col-end-3">
                <span className="text-lg">{index + 1}</span>
                <img className="w-11 h-11 rounded" src={img} alt={name} />
                <div>
                    <h4 className="text-white cursor-pointer hover:underline">{name}</h4>
                    <h4 className="text-sm hover:underline">{singers}</h4>
                </div>
            </div>

            <h4>{album}</h4>
            <h4>{date}</h4>
            <h4 className="flex justify-center">{duration}</h4>
        </div>
     );
}

export default Track;