import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProfileMenu from "../components/ProfileMenu";
import { TiHome } from "react-icons/ti";
import { AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BiLibrary } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";


export default function Layout() {
    const token = location.hash.split('=')[1].split('&')[0]
    localStorage.setItem('token', token)
    
    return (
        <>
            <header className="w-full flex justify-between items-center pl-[340px] pr-10 py-5">
                <div className="flex items-center gap-1">
                    <button className="bg-[#131313] rounded-full p-2">
                        <MdKeyboardArrowLeft size={24} color="white" />
                    </button>
                    <button className="bg-[#131313] rounded-full p-2">
                        <MdKeyboardArrowRight size={24} color="white" />
                    </button>
                </div>

                <ProfileMenu></ProfileMenu>
            </header>
            <aside className="w-[300px] bg-black px-2.5 py-8 fixed top-0 left-0 bottom-0 flex flex-col items-start gap-7">
                <img src="/icons/big-logo.svg" alt="logo" className="pl-6" />
                <nav className="w-full">
                    <ul className="w-full">
                        <Link to={'/'}>
                            <li className="text-white flex items-center justify-start gap-6 py-3 px-6 cursor-pointer w-full select-none rounded-md hover:bg-[#303030] ">
                                <AiFillHome color="white" size={26} />
                                <span className="text-lg font-bold">Home</span>
                            </li>
                        </Link>
                        <Link to={'/search'}>
                            <li className="text-white flex items-center justify-start gap-6 py-3 px-6 cursor-pointer w-full select-none rounded-md hover:bg-[#303030] ">
                                <CiSearch color="white" size={26} />
                                <span className="text-lg font-bold">Search</span>
                            </li>
                        </Link>
                        <Link to={'/library'}>
                            <li className="text-white flex items-center justify-start gap-6 py-3 px-6 cursor-pointer w-full select-none rounded-md hover:bg-[#303030] ">
                                <BiLibrary color="white" size={26} />
                                <span className="text-lg font-bold">Library</span>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </aside>
            <Outlet />
            <div></div>
        </>
    )
}