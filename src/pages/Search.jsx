import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import BestResult from "../components/BestResult";
import MiniTrack from "../components/MiniTrack";



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
                    <h3 className="text-3xl font-bold mb-5">Лучший результат</h3>
                    <BestResult 
                    title={'GraduSnick'}
                    img_src={'/images/playlist-card.png'}
                    owner={'Gradus'}
                    type={'Плейлист'}
                    />
                </section>

                <section className="result_tracks w-[60%]">
                    <h3 className="text-3xl font-bold mb-5">Треки</h3>
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
        </>
    );
}

export default Search;