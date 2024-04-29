import { useContext } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { IoPauseSharp, IoPlay  } from "react-icons/io5";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { TrackContext } from "../App";
import { useState } from "react";
import { useEffect } from "react";


export default function Player(params) {
    const [play, setPlay] = useState(false)

    const {track} = useContext(TrackContext)

    useEffect(() => {
        const audio = document.querySelector('audio')


        audio.play()

    }, [track])

    return (
        <section className="fixed left-0 right-0 bottom-0 h-[116px] bg-[#181818] z-10 flex items-center justify-between p-5" >
            <div className="flex items-center gap-4 " >
                <img
                    className="w-[70px] h-[70px]"
                    src="https://plus.unsplash.com/premium_photo-1676834376020-a17554ed4fbb?q=80&w=2097&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="" 
                />
                <div className="text-white flex flex-col items-start " >
                    <span>{track?.name}</span>
                    <span>{track?.singers}</span>
                </div>
                <button className="text-white" >
                    <FaRegArrowAltCircleDown size={18} />
                </button>
            </div>

            <div className="flex items-center flex-col justify-center gap-2" >
                <audio src={track?.src} controls hidden ></audio>
                <div className="flex items-center gap-2" >
                    <button className="text-[#c4c4c4]" >
                        <MdSkipPrevious size={24} />
                    </button>
                    <button className="p-[8px] text-center bg-white rounded-full" >
                        {
                            true ? <IoPlay size={24} /> : <IoPauseSharp size={24} />  
                        }
                    </button>
                    <button className="text-[#c4c4c4]" >
                        <MdSkipNext size={24} />
                    </button>
                </div>
                <div className="w-full flex items-center gap-2 text-[#c4c4c4]" >
                    <span>0:57</span>
                    <input type="range" className="custom-range w-[630px]" />
                    <span>0:57</span>
                </div>
            </div>
            <div>
                <button></button>
                <input type="range" />
                <button></button>
                <button></button>
            </div>
        </section>
    )
}