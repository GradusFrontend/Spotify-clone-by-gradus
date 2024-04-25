

function BestResult({img_src, title, type, owner}) {
    return ( 
        <div className="best_result w-full h-[82%] bg-[#1a1a1a] rounded-md p-4 flex flex-col gap-3 cursor-pointer select-none transition duration-300 ease-in-out hover:bg-[#2d2d2d]">
            <img className="w-[110px]" src={img_src} alt={title} />
            <h2 className="text-3xl font-bold">{title}</h2>
            <div className="type-owner flex gap-1">
                <span className="text-[#a7a7a7]">{type} •</span>
                <h5>{owner}</h5>
            </div>
        </div>
     );
}

export default BestResult;