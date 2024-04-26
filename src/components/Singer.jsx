

function Singer({img_src, nickName, role}) {
    return ( 
        <div className="singer w-fit p-3 rounded select-none cursor-pointer transition duration-300 ease-in-out hover:bg-[#2a2a2a]">
            <img className="w-full rounded-full mb-1" src={img_src} alt={nickName} />
            <h4 className="text-base font-medium">{nickName}</h4>
            <span className="text-[#969696] font-medium text-sm">{role}</span>
        </div>
     );
}

export default Singer;