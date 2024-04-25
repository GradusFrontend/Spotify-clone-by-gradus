

export default function PlaylistCard() {

    return (
        <div className="rounded w-fit px-3 pt-3 pb-3 cursor-pointer transition ease-in-out duration-300 hover:bg-[#202020] flex flex-col ">
            <img className=" w-full max-w-[180px] object-cover mb-6 rounded-lg " src="/images/playlist-card.png" alt="playlist-card" />
            <h4 className="text-lg">MEDITATION SELF</h4>
            <span className="text-base font-thin">Ibn Hussain Aleen</span>
        </div>
    )
}