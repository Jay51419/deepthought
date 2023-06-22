import Link from "next/link";
import {
  BellFill,
  BinocularsFill,
  HouseFill,
  ThreeDotsVertical,
  Tools,
} from "react-bootstrap-icons";

export default function DTHeader() {
  return (
    <header className="bg-neutral-100 shadow-lg ">
      <div className="py-2 px-2 w-full max-w-5xl mx-auto flex justify-between">
        <img src="/dt.svg" alt="DEEP THOUGHT" className="h-10" />
        <nav className="flex space-x-2">
          <ul className="hidden lg:flex space-x-2">
            <li>
              <Link href={""}>
                <div className="p-2 bg-blue-500 rounded-full hover:bg-blue-400">
                  <HouseFill size={24} />
                </div>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <div className="p-2 bg-blue-500 rounded-full hover:bg-blue-400">
                  <BinocularsFill size={24} />
                </div>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <div className="p-2 bg-blue-500 rounded-full hover:bg-blue-400">
                  <Tools size={24} />
                </div>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <div className="p-2 bg-blue-500 rounded-full hover:bg-blue-400">
                  <BellFill size={24} />
                </div>
              </Link>
            </li>
          </ul>
          <button className="p-2 rounded-full">
            <ThreeDotsVertical className="text-blue-500 hover:text-blue-400" size={24}  />
          </button>
        </nav>
      </div>
    </header>
  );
}
