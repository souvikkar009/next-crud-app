import { AiOutlineFileAdd } from "react-icons/ai";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="h-20 bg-sky-400 my-4 rounded-lg flex justify-between items-center px-6 text-white">
            <div className="text-3xl cursor-pointer">Next CRUD App</div>
            <Link href={"/addtopic"}>
                <AiOutlineFileAdd className="text-3xl cursor-pointer" />
            </Link>
        </nav>
    );
};

export default NavBar;
