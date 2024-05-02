import { useContext } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoPauseSharp, IoPlay, IoVolumeHigh } from "react-icons/io5";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { useState } from "react";
import { TrackContext } from "../context/TrackCTX"
import { useEffect } from "react";
import { PLaylistContext } from "../context/PlaylistCTX";
import { artistsString, toMinutes } from "../helpers/utils";
// import { PlayerContext } from "../context/PlayerCTX";


export default function Player(params) {
    const [play, setPlay] = useState(false)
    const [currTime, setCurrTime] = useState('00:00')

    const { track, setTrack } = useContext(TrackContext)
    const { playlist_ctx } = useContext(PLaylistContext)
    // let audio = null
    let audio = document.querySelector('audio')
    console.log(audio);
    useEffect(() => {
        let audio = document.querySelector('audio')
        audio.src = track?.src
        audio.play()
        setPlay(true)

    }, [track])


    function nextTrack() {
        const curr_track = playlist_ctx[track.index + 1]
        const next_track = {
            img: curr_track.track.album.images[0].url,
            name: curr_track.track.name,
            singers: artistsString(curr_track.track.artists),
            duration: toMinutes(curr_track.track.duration_ms),
            album: curr_track.track.album.name,
            date: curr_track.track.release_date,
            src: curr_track.track.preview_url,
            index: track.index + 1
        }
        setTrack(next_track)
    }
    function prevTrack() {
        const curr_track = playlist_ctx[track.index - 1]
        const prev_track = {
            img: curr_track.track.album.images[0].url,
            name: curr_track.track.name,
            singers: artistsString(curr_track.track.artists),
            duration: toMinutes(curr_track.track.duration_ms),
            album: curr_track.track.album.name,
            date: curr_track.track.release_date,
            src: curr_track.track.preview_url,
            index: track.index - 1
        }
        setTrack(prev_track)
    }

    return (

        <section section className="fixed left-0 right-0 bottom-0 h-[116px] bg-[#181818] z-10 flex items-center justify-between p-5" >
            <div className="flex items-center gap-4 " >
                <img
                    className="w-[65px] h-[65px] rounded"
                    src={track?.img}
                    alt=""
                />
                <div className="text-white flex flex-col items-start w-[200px]" >
                    <span>{track?.name}</span>
                    <span>{track?.singers}</span>
                </div>
                <button className="text-white" >
                    <FaRegArrowAltCircleDown size={18} />
                </button>
            </div>

            <div className="flex items-center flex-col justify-center gap-2" >
                <audio
                // onTimeUpdate={(e) => {
                //     console.log(String(e.target.currentTime).split('.').at(0));
                //     let time = `00:${String(e.target.currentTime).split('.').at(0)}`
                //     // setCurrTime(time)
                // }}
                 src={track?.src} controls hidden ></audio>
                <div className="flex items-center gap-2" >
                    <button
                        onClick={prevTrack}
                        className="text-[#c4c4c4]"
                    >
                        <MdSkipPrevious size={24} />
                    </button>
                    <button
                        onClick={() => {
                            console.log({ play });
                            setPlay(!play)
                            console.log(play);
                            // audio.pause()
                        }}
                        className="p-[8px] text-center bg-white rounded-full" >
                        {
                            play ? <IoPlay size={24} /> : <IoPauseSharp size={24} />
                        }
                    </button>
                    <button
                        onClick={nextTrack}
                        className="text-[#c4c4c4]"
                    >
                        <MdSkipNext size={24} />
                    </button>
                </div>
                <div className="w-full flex items-center gap-2 text-[#c4c4c4]" >
                    {
                        audio ? (
                            <>
                                <span>00:01</span>
                                <input
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        audio.currentTime = +e.target.value
                                    }}
                                    type="range" value={0} min={0} max={audio.duration} className="custom-range w-[630px]" />
                                <span>00:29</span>
                            </>
                        ) : (
                            <span>Loading...</span>
                        )
                    }
                </div>
            </div>
            <div>
                <button></button>
                <div className="flex items-center gap-2">
                    <IoVolumeHigh color="white" size={24} />
                    <input
                        onChange={(e) => {
                            audio.volume = +e.target.value / 10
                            console.log(audio.currentTime);
                        }}
                        min={0} max={10} value={10} type="range" />
                </div>
                <button></button>
                <button></button>
            </div>
        </section >
    )
}