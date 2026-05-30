import { Icons } from "../../assets/Icons/Icons.jsx";

function Sidebar() {
  return (
    <>
      <div className="w-[20%] h-screen border-r border-gray-200 p-4">
        <div className="w-full size-18 rounded-full bg-radial-[at_25%_25%] from-indigo-400 to-indigo-600 to-75% rounded-full flex justify-evenly items-center">
          <div className="w-2/3 ps-4 flex justify-start items-center gap-1">
            <Icons.message size={25} className="text-white" />
            <p className="font-bold text-white">Alazar.</p>
          </div>

          <div className="flex justify-center items-center hover:rotate-45 transition delay-100 duration-300 ease-in-out">
            <Icons.plus size={50} className="w-1/3 text-white" />
          </div>
        </div>

        <div className="p-2 relative">
          <Icons.search className="text-gray-500 absolute left-8 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <input
            className="ps-10 bg-indigo-100 w-full p-2 rounded-lg outline-none"
            type="text"
            name=""
            id=""
            placeholder="search messages"
          />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
