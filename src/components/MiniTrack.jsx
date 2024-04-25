

function MiniTrack({ img_src, title, singer, duration }) {
    return (
        <div className="mini_track flex items-center justify-between p-2 rounded transition duration-300 ease-in-out cursor-pointer select-none hover:bg-[#2a2a2a]">
            <div className="mini_track_info flex items-center gap-3.5">
                <img className="w-12 rounded" src={img_src} alt={title} />
                <div className="track_texts">
                    <h5 className="text-base font-medium">{title}</h5>
                    <h6 className="text-sm text-[#969696]">{singer}</h6>
                </div>
            </div>

            <span className="track_duration text-base font-semibold text-[#969696]">{duration}</span>
        </div>
    );
}

export default MiniTrack;