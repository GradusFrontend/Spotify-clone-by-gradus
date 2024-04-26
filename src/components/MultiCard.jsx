

export default function MultiCard({img_src, title, subtitle}) {

    return (
        <div className="rounded w-fit px-3 pt-3 pb-3 cursor-pointer transition ease-in-out duration-300 hover:bg-[#202020] flex flex-col ">
            <img className=" w-full max-w-[180px] object-cover mb-6 rounded-lg " src={img_src} alt={title} />
            <h4 className="text-lg">{title}</h4>
            <span className="text-base font-thin">{subtitle}</span>
        </div>
    )
}