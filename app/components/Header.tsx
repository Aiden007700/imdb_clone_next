import Link from "next/link"
import MenuItem from "./MenuItem"
import { AiFillHome } from 'react-icons/ai'
import { BsInfoCircleFill } from 'react-icons/bs'
import DarkModeSwitch from "./DarkModeSwitch"

const Header = () => {
    return (
        <div className="flex justify-between mx-2 sm:mx-auto max-w-6xl items-center py-6">
           <div className="flex">
                <MenuItem title="HOME" Icon={AiFillHome} path="/home" />
                <MenuItem title="ABOUT" Icon={BsInfoCircleFill} path="/about" />
            </div>
           <div className="flex items-center space-x-5">
                <DarkModeSwitch />
                <Link href="/">
                    <h2 className="text-2xl">
                        <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDb</span>
                        <span className="text-xl sm:inline hidden">Clone</span>
                    </h2>
                </Link>
           </div>
        </div>
    )
}

export default Header