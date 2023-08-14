import Link from "next/link"
import MenuItem from "./MenuItem"
import { AiFillHome } from 'react-icons/ai'
import { BsInfoCircleFill } from 'react-icons/bs'

const Header = () => {
    return (
        <div className="">
           <div className="flex">
                <MenuItem title="HOME" Icon={AiFillHome} path="/home" />
                <MenuItem title="ABOUT" Icon={BsInfoCircleFill} path="/about" />
            </div>
           <div className="">
                <Link href="/">
                    <h2 className="text-2xl"><span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span><span className="text-xl sm:inline hidden">Clone</span></h2>
                </Link>
           </div>
        </div>
    )
}

export default Header