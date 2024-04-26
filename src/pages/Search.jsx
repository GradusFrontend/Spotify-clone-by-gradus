import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import BestResult from "../components/BestResult";
import MiniTrack from "../components/MiniTrack";
import Singer from "../components/Singer";
import MultiCard from "../components/MultiCard";



function Search() {
    return (
        <>
            <div className="searchInpBox text-white bg-[#2a2a2a] rounded-full flex items-center justify-between w-[30%] px-2.5 absolute top-3 left-[430px]">
                <div className="right flex items-center gap-2">
                    <CiSearch color="white" size={21} />
                    <input className="h-full w-[100%] bg-[#2a2a2a] outline-none py-4" placeholder="Что хочешь включить?" type="text" name="query" id="queryInput" />
                </div>
                <button><RxCross2 size={21} /></button>
            </div>

            <main className="pl-[345px] h-fit mr-10 mt-6 text-white flex gap-5 justify-between">
                <section className="w-[40%]">
                    <h2 className="text-3xl font-bold mb-5">Лучший результат</h2>
                    <BestResult
                        title={'GraduSnick'}
                        img_src={'/images/playlist-card.png'}
                        owner={'Gradus'}
                        type={'Плейлист'}
                    />
                </section>

                <section className="result_tracks w-[60%]">
                    <h2 className="text-3xl font-bold mb-5">Треки</h2>
                    <div className="results flex flex-col">
                        <MiniTrack
                            title='Hightness Darkness'
                            singer='Ivan Zolo'
                            img_src='/images/playlist-card.png'
                            duration={'3:44'}
                        />
                        <MiniTrack
                            title='Hightness Darkness'
                            singer='Ivan Zolo'
                            img_src='/images/playlist-card.png'
                            duration={'3:44'}
                        />
                        <MiniTrack
                            title='Hightness Darkness'
                            singer='Ivan Zolo'
                            img_src='/images/playlist-card.png'
                            duration={'3:44'}
                        />
                        <MiniTrack
                            title='Hightness Darkness'
                            singer='Ivan Zolo'
                            img_src='/images/playlist-card.png'
                            duration={'3:44'}
                        />
                    </div>
                </section>
            </main>

            <section className="songers pl-[345px] mt-8 text-white">
                <h2 className="text-3xl font-bold mb-5">Исполнители</h2>

                <div className="singers grid grid-cols-5">
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

            <section className="albums pl-[345px] mt-8 text-white">
                <h2 className="text-3xl font-bold mb-5">Альбомы</h2>

                <div className="albums_grid grid grid-cols-5">
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
            </section>

            <section className="playlists pl-[345px] mt-8 text-white">
                <h2 className="text-3xl font-bold mb-5">Плейлисты</h2>

                <div className="playlists_grid grid grid-cols-5">
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
            </section>

            <section className="podcasts pl-[345px] mt-8 text-white">
                <h2 className="text-3xl font-bold mb-5">Подкасты</h2>

                <div className="podcasts_grid grid grid-cols-5">
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
            </section>

            <section className="releases pl-[345px] mt-8 text-white">
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
            </section>

            <section className="profiles pl-[345px] mt-8 text-white">
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

            <section className="allGenres">
                <h2 className="text-3xl font-bold mb-5">Остальное</h2>

                <div className="allgenres_grid grid grid-cols-6 gap-4"></div>
            </section>
        </>
    );
}

export default Search;