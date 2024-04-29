import { FaPlay } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { RxDotsHorizontal } from "react-icons/rx";
import Track from "../components/Track";
import { useEffect, useState } from "react";
import axios from "axios";


function Playlist() {
    const token = localStorage.getItem('token')
    const URL = import.meta.env.VITE_API_URL

    const id = location.pathname.split('/').at(-1)

    // const [playlist, setPlaylist] = useState({})
    const [playlist, setPlaylist] = useState({})
    useEffect(() => {
        axios.get(`${URL}/playlists/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res.data.owner.display_name);
                setPlaylist(res.data)
            })
    }, [])
    console.log(playlist);

    function toMinutes(num) {
        let duration = num / 60000

        return ((duration.toFixed(2)).split('.').join(':'));
    }

    function artistsString(arr) {
        let str = ''

        if (arr.length > 1) {
            arr.forEach(element => {
                str += `${element.name}, `
            });

            str = str.slice(0, -1)
        } else {
            str = arr[0].name
        }
    }

    return (
        <>
            <div className="backdrop backdrop-blur-[70px] absolute top-0 left-0 right-0 h-[70%] w-screen z-[-1] bg-gradient-to-b from-[#1fdf6570] to-[#161616]"></div>

            <main className=" text-white pl-[340px] mt-6">
                {/* <section className="flex gap-6">
                    <div className="playlist_img">
                        <img className="max-w-[290px] max-h-[290px] w-[250px] h-[250px] rounded object-cover shadow-[0px_0px_65px_4px_rgba(0,0,0,0.54)]" src={playlist.images[0].url} alt="playlist-card" />
                    </div>
                    <div className="playlist_info flex flex-col justify-end gap-3">
                        <h3 className="text-base">{playlist.type}</h3>
                        <h1 className="text-7xl font-bold w-[80%]">{playlist.name}</h1>
                        <p className="text-[#cbc8c4]">{playlist.description}</p>
                        <div className="flex  text-[#cbc8c4]">
                            <span className="text-white cursor-pointer hover:underline">{playlist.owner.display_name}</span>
                            <h5>, {playlist.tracks.items.length} треков</h5>
                        </div>
                    </div>
                </section> */}

                <section className="mt-8 pt-8">
                    <div className="tools flex gap-10">
                        <button className="p-5 rounded-full bg-[#1fdf64] flex items-center justify-center hover:scale-[1.03]">
                            <FaPlay color="black" size={24} />
                        </button>

                        <button className="">
                            <RxDotsHorizontal size={30} color="#cbc8c4" />
                        </button>
                    </div>

                    <div className="tracks_grid w-[97%] mt-8 font-medium text-[#cbc8c4]">
                        <div className="thead border-b-[1px] px-5 pb-2 mb-5 border-[#cbc8c44c] text-[#cbc8c4] grid grid-cols-5">
                            <h4 className="flex gap-5 col-start-1 col-end-3"><span>#</span> Назвние</h4>
                            <h4>Альбом</h4>
                            <h4>Дата обновления</h4>
                            <h4 className="flex justify-center">
                                <LuClock3 color="[#cbc8c4]" />
                            </h4>
                        </div>

                        {
                            playlist.tracks.map((item, idx) => (
                                <Track
                                    img={item.track.album.images[0].url}
                                    name={item.track.name}
                                    singers={artistsString(item.track.artists)}
                                    duration={toMinutes(item.track.duration_ms)}
                                    album={item.track.album.name}
                                    date={item.track.release_date}
                                    index={idx + 1}
                                    key={item.track.id}
                                />
                            ))
                        }
                    </div>
                </section>
            </main>
        </>
    );
}

export default Playlist;