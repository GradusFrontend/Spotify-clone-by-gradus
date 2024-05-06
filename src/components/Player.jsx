import { useContext } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoPauseSharp, IoPlay, IoVolumeHigh } from "react-icons/io5";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { useState } from "react";
import { TrackContext } from "../context/TrackCTX"
import { useEffect } from "react";
import { PLaylistContext } from "../context/PlaylistCTX";
import { artistsString, toMinutes } from "../helpers/utils";
import { useRef } from "react";
// import { PlayerContext } from "../context/PlayerCTX";


export default function Player(params) {
    const { track, setTrack } = useContext(TrackContext)

    const [play, setPlay] = useState(track?.isPlaying || false)
    const [currTime, setCurrTime] = useState(0)
    const { playlist_ctx } = useContext(PLaylistContext)

    const audio_ref = useRef(null)

    useEffect(() => {
        if (track) {
            audio_ref.current.src = track?.src

            if (track.isPlaying) {
                audio_ref.current.play()
                setPlay(true)
            } else {
                audio_ref.current.pause()
                setPlay(false)
            }
        }

    }, [track])

    useEffect(() => {
        if (play) {
            audio_ref.current.play()
        } else {
            audio_ref.current.pause()
        }
    }, [play])


    function updatePlayTime(currTime) {
        let audio = document.querySelector('audio')
        audio.currentTime = currTime
    }


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
            index: track.index + 1,
            isPlaying: true
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
            index: track.index - 1,
            isPlaying: true
        }
        setTrack(prev_track)
    }


    return (

        <section className="fixed left-0 right-0 bottom-0 h-[116px] bg-[#181818] z-10 flex items-center justify-between p-5" >
            <div className="flex items-center gap-4 " >
                <img
                    className="w-[65px] h-[65px] rounded"
                    src={track?.img}
                    alt=""
                />
                <div className="text-white flex flex-col items-start w-[150px]" >
                    <span>{track?.name}</span>
                    <span>{track?.singers}</span>
                </div>
                <button className="text-white" >
                    <FaRegArrowAltCircleDown size={18} />
                </button>
            </div>

            <div className="flex items-center flex-col justify-center gap-2" >
                <audio
                    controls
                    hidden
                    preload="metadata"
                    ref={audio_ref}
                    onTimeUpdate={(e) => {
                        setCurrTime(e.target.currentTime);
                    }}
                    onEnded={(e) => {
                        nextTrack()
                    }}
                />
                <div className="flex items-center gap-2" >
                    <button
                        onClick={prevTrack}
                        className="text-[#c4c4c4]"
                    >
                        <MdSkipPrevious size={24} />
                    </button>
                    <button
                        onClick={() => {
                            setPlay(!play)
                        }}
                        className="p-[8px] text-center bg-white rounded-full" >
                        {
                           play ? <IoPauseSharp size={24} />:  <IoPlay size={24} /> 
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
                    <span>00:{Math.round(currTime)}</span>
                    <input
                        onChange={(e) => {
                            updatePlayTime(e.target.value);
                        }}
                        type="range"
                        value={Math.round(currTime)}
                        min={0}
                        max={30}
                        className="custom-range w-[630px]"
                    />
                    <span>00:30</span>
                </div>
            </div>
            <div>
                <button></button>
                <div className="flex items-center gap-2">
                    <IoVolumeHigh color="white" size={24} />
                    <input
                        onChange={(e) => {
                            audio_ref.current.volume = +e.target.value / 10
                        }}
                        min={0} max={10} defaultValue={10} type="range" />
                </div>
                <button></button>
                <button></button>
            </div>
        </section >
    )
}