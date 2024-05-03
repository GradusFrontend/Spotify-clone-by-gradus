import { useContext } from "react";
import { TrackContext } from "../context/TrackCTX";
import AudioSpinner from "./Audio";


function MiniTrack({ src, img, name, singers, album, date, duration, index }) {
    const { track, setTrack } = useContext(TrackContext)

    return (
        <div
            onClick={() => setTrack({ img, name, singers, album, date, duration, index, src })}
            className="mini_track flex items-center justify-between p-2 rounded transition duration-300 ease-in-out cursor-pointer select-none hover:bg-[#2a2a2a]">
            <div className="mini_track_info flex items-center gap-3.5">
                <img className="w-12 rounded" src={img} alt={name} />
                <div className="track_texts">
                    <h5 className="text-base font-medium">{name}</h5>
                    <h6 className="text-sm text-[#969696]">{singers}</h6>
                </div>
            </div>
            {
                index === track?.index ? <AudioSpinner /> :
                <span className="track_duration text-base font-semibold text-[#969696]">{duration}</span>
            }
        </div>
    );
}

export default MiniTrack;