


export default function Recomendation({img, title}) {
    return (
        <div className=" flex justify-start items-center gap-5 w-[260px] overflow-hidden rounded transition ease-in-out duration-300 bg-[#303030] select-none cursor-pointer hover:bg-[#3f3f3f] ">
            <img className="w-[70px] h-[70px] object-contain" src={img} alt="recomendation" />
            <h4 className="text-base leading-4 w-[50%] max-h-[2lh] overflow-y-hidden font-semibold">{title}</h4>
        </div>
    )
}