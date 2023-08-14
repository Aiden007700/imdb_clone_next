import Link from "next/link"
import { IconType } from "react-icons"

const MenuItem = ({title, path, Icon}: MenuItemProps) => {
    return (
        <div>
            <Link href={path} className="mx-4 lg:mx-6 hover:text-amber-600">
                <Icon className="text-2xl sm:hidden mx-4" />
                <p className="hidden sm:inline my-2 text-sm">{title}</p>
            </Link>
        </div>
    )
}

export default MenuItem

interface MenuItemProps {
    title: string,
    path: string,
    Icon: IconType
}