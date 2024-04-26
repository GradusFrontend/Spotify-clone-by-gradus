


export default function Recomendation({img, title}) {

    return (
        <div className=" flex justify-start items-center gap-5 rounded transition ease-in-out duration-300 bg-[#303030] select-none cursor-pointer hover:bg-[#3f3f3f] ">
            <img className="w-[90px] h-[90px] object-contain" src={img} alt="recomendation" />
            <h4 className="text-lg w-full font-semibold mr-[110px]">{title}</h4>
        </div>
    )
}