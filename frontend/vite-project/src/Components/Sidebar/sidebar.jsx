import { LuMessageCircleMore } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";

function Sidebar() {
  return (
    <>
      <div className="w-[20%] h-screen border-r border-gray-200 p-4">
        <div className="w-full size-18 rounded-full bg-radial-[at_25%_25%] from-indigo-400 to-indigo-600 to-75% rounded-full flex justify-evenly items-center">
          <div className="w-2/3 ps-4 flex justify-start items-center gap-1">
            <LuMessageCircleMore size={25} className="text-white" />
            <p className="font-bold text-white">Alazar.</p>
          </div>

          <div className="flex justify-center items-center hover:rotate-45 transition delay-100 duration-300 ease-in-out">
            <FaPlus size={50} className="w-1/3 text-white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
