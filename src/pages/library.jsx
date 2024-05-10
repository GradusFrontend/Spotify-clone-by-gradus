import { FaPlay } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { RxDotsHorizontal } from "react-icons/rx";
import Track from "../components/Track";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { PLaylistContext } from "../context/PlaylistCTX";
import { artistsString, getAverageRGB, toMinutes } from "../helpers/utils";


function Library() {
    const [playlist, setPlaylist] = useState([])
    const { playlist_ctx, setPLaylist_ctx } = useContext(PLaylistContext)
    const [bgColor, setBgColor] = useState([])
    const [user, setUser] = useState({})
    const img_ref = useRef(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        const URL = import.meta.env.VITE_API_URL
        setUser(JSON.parse(localStorage.getItem(user)))
        console.log(user);

        axios.get(`${URL}/me/top/tracks`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setPlaylist(res.data.items)
                setPLaylist_ctx(res.data.items)
                console.log(playlist);
                console.log(playlist_ctx);
            })
    }, [])

    useEffect(() => {
        if (img_ref.current && bgColor) {
            setBgColor(getAverageRGB(img_ref.current));
        }
    })


    return (
        <>
            <div
                className="backdrop backdrop-blur-[70px] absolute top-0 left-0 right-0 h-[70%] w-screen z-[-1] bg-gradient-to-b from-[#1fdf6570] to-[#161616]"
                style={{
                    backgroundColor: bgColor
                }}


            ></div>

            <main className=" text-white pl-[340px] mt-6">
                {
                    playlist ? (
                        <section className="flex gap-6">
                            <div className="playlist_img">
                                <img ref={img_ref} className="max-w-[290px] max-h-[290px] w-[250px] h-[250px] rounded object-cover shadow-[0px_0px_65px_4px_rgba(0,0,0,0.54)]" src='https://misc.scdn.co/liked-songs/liked-songs-640.png' alt="playlist-card" />
                            </div>
                            <div className="playlist_info flex flex-col justify-end gap-3">
                                <h3 className="text-base">Плейлист</h3>
                                <h1 className="text-7xl font-bold w-[80%]">Любимые треки</h1>
                                <p className="text-[#cbc8c4]"></p>
                                <div className="flex  text-[#cbc8c4]">
                                    <span className="text-white cursor-pointer hover:underline"></span>
                                    <h5>{playlist.length}  треков</h5>
                                </div>
                            </div>
                        </section>
                    ) : (
                        <span>loading...</span>
                    )
                }


                <section className="mt-8 pt-8">
                    <div className="tools flex gap-10">
                        <button className="p-5 rounded-full bg-[#1fdf64] flex items-center justify-center hover:scale-[1.03]">
                            <FaPlay color="black" size={24} />
                        </button>

                        <button className="">
                            <RxDotsHorizontal size={30} color="#cbc8c4" />
                        </button>
                    </div>

                    <div className="tracks_grid w-[97%] mt-8 mb-[130px] font-medium text-[#cbc8c4]">
                        <div className="thead border-b-[1px] px-5 pb-2 mb-5 border-[#cbc8c44c] text-[#cbc8c4] grid grid-cols-5">
                            <h4 className="flex gap-5 col-start-1 col-end-3"><span>#</span> Назвние</h4>
                            <h4>Альбом</h4>
                            <h4>Дата обновления</h4>
                            <h4 className="flex justify-center">
                                <LuClock3 color="[#cbc8c4]" />
                            </h4>
                        </div>

                        {
                            !playlist ? (<span>loading...</span>) : (
                                playlist.map((item, idx) => (
                                    <Track
                                        img={item.album.images[0].url}
                                        name={item.name}
                                        singers={artistsString(item.artists)}
                                        duration={toMinutes(item.duration_ms)}
                                        album={item.album.name}
                                        date={item.album.release_date}
                                        src={item.preview_url}
                                        index={idx}
                                        key={idx}
                                    />
                                ))
                            )
                        }
                    </div>
                </section>
            </main>
        </>
    );
}

export default Library;