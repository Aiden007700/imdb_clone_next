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
                    <h2><span></span><span></span></h2>
                </Link>
           </div>
        </div>
    )
}

export default Header