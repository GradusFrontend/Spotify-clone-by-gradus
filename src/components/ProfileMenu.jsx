import { useState } from "react";
import { RxExternalLink } from "react-icons/rx";
import { TiArrowSortedDown } from "react-icons/ti";



export default function ProfileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer flex items-center gap-1 bg-[#0A0A0A] rounded-3xl p-0.5 text-white select-none "
            >
                <img className="rounded-full" src="/images/user-avatar.png" alt="avatar" />
                <span>User</span>
                <button>
                    <TiArrowSortedDown size={24} />
                </button>
            </div>
            {
                isOpen ? (

                    <div className="w-60 p-4 bg-[#282828] absolute right-10 top-[70px] rounded-md">
                        <ul className="text-white text-xl font-medium flex flex-col gap-5">
                            <li className="flex items-center justify-between cursor-pointer">
                                <span>Account</span>
                                <RxExternalLink size={28} />
                            </li>
                            <li className="flex items-center justify-between cursor-pointer">
                                <span>Profile</span>
                            </li>
                            <li
                                onClick={() => {
                                    localStorage.removeItem('token')
                                    localStorage.removeItem('user')
                                    location.reload()
                                }}
                                className="flex items-center justify-between cursor-pointer">
                                <span>Log out</span>
                            </li>
                        </ul>
                    </div>
                ) : null
            }
        </>
    )
}