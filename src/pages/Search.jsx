import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import BestResult from "../components/BestResult";
import MiniTrack from "../components/MiniTrack";
import Singer from "../components/Singer";
import MultiCard from "../components/MultiCard";
import { useState } from "react";
import axios from "axios";
import { artistsString, toMinutes } from "../helpers/utils";



function Search() {
    const URL = import.meta.env.VITE_API_URL
    const token = localStorage.getItem('token')

    const [results, setResults] = useState(null)

    return (
        <>
            <div className="searchInpBox text-white bg-[#2a2a2a] rounded-full flex items-center justify-between w-[30%] px-2.5 absolute top-3 left-[430px]">
                <div className="right flex items-center gap-2">
                    <CiSearch color="white" size={21} />
                    <input
                        onKeyUp={(e) => {
                            if (e.target.value.trim().length >= 1) {
                                axios.get(`${URL}/search?q=${e.target.value}&type=album%2Cplaylist%2Ctrack%2Cartist%2Cshow&limit=5`, {
                                    headers: {
                                        Authorization: `Bearer ${token}`
                                    }
                                })
                                    .then(res => {
                                        setResults(res.data)
                                    })
                                console.log(results);
                            }
                        }}
                        className="h-full w-[100%] bg-[#2a2a2a] outline-none py-4" placeholder="Что хочешь включить?" type="text" name="query" id="queryInput" />
                </div>
                <button><RxCross2 size={21} /></button>
            </div>

            {
                results ? (
                    <>
                        <main className="pl-[345px] h-fit mr-10 mt-6 text-white flex gap-5 justify-between">
                            <section className="w-[40%]">
                                <h2 className="text-3xl font-bold mb-5">Лучший результат</h2>
                                <BestResult
                                    img={results.tracks.items[0].album.images[0].url}
                                    name={results.tracks.items[0].name}
                                    singers={artistsString(results.tracks.items[0].artists)}
                                    duration={toMinutes(results.tracks.items[0].duration_ms)}
                                    album={results.tracks.items[0].album.name}
                                    date={results.tracks.items[0].album.release_date}
                                    src={results.tracks.items[0].preview_url}
                                    index={0}
                                    key={results.tracks.items[0].id}
                                />
                            </section>

                            <section className="result_tracks w-[60%]">
                                <h2 className="text-3xl font-bold mb-5">Треки</h2>
                                <div className="results flex flex-col">
                                    {
                                        results.tracks.items.slice(1, results.tracks.items.length + 1).map((item, idx) => (

                                            <MiniTrack
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
                                    }
                                </div>
                            </section>
                        </main>

                        <section className="songers pl-[345px] mt-8 text-white">
                            <h2 className="text-3xl font-bold mb-5">Исполнители</h2>

                            <div className="singers grid grid-cols-5">
                                {
                                    results.artists.items.map((item, idx) => (

                                        <Singer
                                            key={idx}
                                            nickName={item?.name}
                                            img_src={item?.images[0]?.url}
                                            role={item?.type}
                                        />
                                    ))
                                }
                            </div>
                        </section>

                        <section className="albums pl-[345px] mt-8 text-white">
                            <h2 className="text-3xl font-bold mb-5">Альбомы</h2>

                            <div className="albums_grid grid grid-cols-5">
                                {
                                    results.albums.items.map((item, idx) => (
                                        <MultiCard
                                            key={idx}
                                            img_src={item?.images[0]?.url}
                                            title={item?.name}
                                            subtitle={item?.type}
                                        />
                                    ))
                                }
                            </div>
                        </section>

                        <section className="playlists pl-[345px] mt-8 text-white">
                            <h2 className="text-3xl font-bold mb-5">Плейлисты</h2>

                            <div className="playlists_grid grid grid-cols-5">
                                {
                                    results.playlists.items.map((item, idx) => (
                                        <MultiCard
                                            img_src={item.images[0].url}
                                            title={item.name}
                                            subtitle={item.type}
                                        />
                                    ))
                                }
                            </div>
                        </section>

                        <section className="podcasts pl-[345px] mt-8 text-white mb-[150px]">
                            <h2 className="text-3xl font-bold mb-5">Подкасты</h2>

                            <div className="podcasts_grid grid grid-cols-5">
                                {
                                    results.shows.items.map((item, idx) => (
                                        <MultiCard
                                            img_src={item.images[0].url}
                                            title={item.name}
                                            subtitle={item.type}
                                        />
                                    ))
                                }
                            </div>
                        </section>

                        {/* <section className="releases pl-[345px] mt-8 text-white">
                            <h2 className="text-3xl font-bold mb-5">Выпуски</h2>

                            <div className="releases_grid grid grid-cols-5">
                                <MultiCard
                                    img_src={'/images/playlist-card.png'}
                                    title={'This MultiCard'}
                                    subtitle={'Subtitle'}
                                />
                                <MultiCard
                                    img_src={'/images/playlist-card.png'}
                                    title={'This MultiCard'}
                                    subtitle={'Subtitle'}
                                />
                                <MultiCard
                                    img_src={'/images/playlist-card.png'}
                                    title={'This MultiCard'}
                                    subtitle={'Subtitle'}
                                />
                                <MultiCard
                                    img_src={'/images/playlist-card.png'}
                                    title={'This MultiCard'}
                                    subtitle={'Subtitle'}
                                />
                                <MultiCard
                                    img_src={'/images/playlist-card.png'}
                                    title={'This MultiCard'}
                                    subtitle={'Subtitle'}
                                />
                            </div>
                        </section> */}
                    </>
                ) : (
                    <div className="pl-[340px] mt-10 text-white w-[90%] flex justify-center">
                        <h2 className="text-4xl font-semibold">Попробуйте что-нибудь найти</h2>
                    </div>
                )
            }


            {/* <section className="profiles pl-[345px] mt-8 text-white">
                <h2 className="text-3xl font-bold mb-5">Профили</h2>

                <div className="profiles-grid grid grid-cols-5">
                    <Singer
                        nickName={"Oneheart"}
                        img_src={"/images/playlist-card.png"}
                        role={'Исполнитель'}
                    />
                    <Singer
                        nickName={"Oneheart"}
                        img_src={"/images/playlist-card.png"}
                        role={'Исполнитель'}
                    />
                    <Singer
                        nickName={"Oneheart"}
                        img_src={"/images/playlist-card.png"}
                        role={'Исполнитель'}
                    />
                    <Singer
                        nickName={"Oneheart"}
                        img_src={"/images/playlist-card.png"}
                        role={'Исполнитель'}
                    />
                    <Singer
                        nickName={"Oneheart"}
                        img_src={"/images/playlist-card.png"}
                        role={'Исполнитель'}
                    />
                </div>
            </section>

            <section className="allGenres mb-[100px]">
                <h2 className="text-3xl font-bold mb-5">Остальное</h2>

                <div className="allgenres_grid grid grid-cols-6 gap-4"></div>
            </section> */}
        </>
    );
}

export default Search;